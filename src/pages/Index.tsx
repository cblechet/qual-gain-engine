import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Guarantees } from "@/components/Guarantees";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Colin - Développeur Full-Stack Freelance | FlutterFlow, Firebase, n8n</title>
        <meta 
          name="description" 
          content="Développeur freelance spécialisé FlutterFlow, Firebase et n8n. MVP en 4 semaines, automations sur-mesure, intégrations Stripe. Basé en France, disponible en remote." 
        />
        <meta name="keywords" content="développeur freelance, FlutterFlow, Firebase, n8n, MVP, automatisation, France" />
        <link rel="canonical" href="https://colin.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Colin - Développeur Full-Stack Freelance" />
        <meta property="og:description" content="MVP en 4 semaines, pas en 4 mois. Développeur expert FlutterFlow, Firebase & n8n." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Colin - Développeur Freelance",
            "description": "Développeur Full-Stack freelance spécialisé en FlutterFlow, Firebase et automations n8n",
            "areaServed": "France",
            "priceRange": "€€€",
            "serviceType": ["Développement web", "Développement mobile", "Automatisation"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <TechStack />
          <Problems />
          <Services />
          <Portfolio />
          <Process />
          <Guarantees />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
