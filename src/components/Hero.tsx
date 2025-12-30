import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <Badge variant="accent" className="text-sm px-4 py-1.5">
              <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              Disponible pour nouveaux projets
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Votre MVP livré en{" "}
            <span className="text-accent">4 semaines</span>
            <br className="hidden sm:block" />
            pas en 4 mois
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Développeur Full-Stack spécialisé FlutterFlow, Firebase & automations n8n.
            Je transforme vos idées en applications fonctionnelles, rapidement et proprement.
          </p>

          {/* Value propositions */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            {[
              "Apps mobiles & web",
              "Automations n8n",
              "Intégrations Stripe",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Réserver un appel découverte
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="#services">
                Voir les offres
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            ✓ Appel gratuit de 15 min · ✓ Devis sous 48h · ✓ Sans engagement
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
