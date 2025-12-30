import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

// Placeholder URL - replace with your actual Calendly link
const CALENDLY_URL = "https://calendly.com/your-username/15min";

export function CalendlyEmbed({ 
  url = CALENDLY_URL, 
  className = "" 
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="calendly-inline-widget rounded-xl overflow-hidden"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}

export function CalendlyButton({
  url = CALENDLY_URL,
  children,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded via script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
