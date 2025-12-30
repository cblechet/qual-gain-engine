import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Settings, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
const services = [
  {
    id: "mvp",
    icon: Zap,
    name: "MVP Sprint",
    tagline: "De l'idée au produit",
    price: "À partir de 3 500€",
    duration: "2-4 semaines",
    description: "Lancez votre app mobile ou web rapidement avec FlutterFlow + Firebase",
    features: [
      "App mobile iOS & Android ou web app",
      "Authentification utilisateurs",
      "Base de données Firebase/Supabase",
      "Design responsive inclus",
      "Documentation technique",
      "1 mois de support post-livraison",
    ],
    ideal: "Startups, solopreneurs, PME avec une idée à valider",
    popular: true,
  },
  {
    id: "automation",
    icon: Settings,
    name: "Automations & Ops",
    tagline: "Gagnez 10h/semaine",
    price: "À partir de 1 500€",
    duration: "1-2 semaines",
    description: "Automatisez vos process avec n8n, connectez vos outils, intégrez Stripe",
    features: [
      "Audit de vos workflows actuels",
      "Configuration n8n self-hosted ou cloud",
      "Intégrations CRM, emails, Stripe",
      "Webhooks & APIs personnalisés",
      "Documentation des flux",
      "Formation équipe (1h)",
    ],
    ideal: "Équipes ops, sales, marketing qui perdent du temps sur des tâches répétitives",
    popular: false,
  },
  {
    id: "rescue",
    icon: Search,
    name: "Rescue & Audit",
    tagline: "Sauvez votre projet",
    price: "À partir de 800€",
    duration: "3-5 jours",
    description: "Audit technique, correction de bugs, optimisation perf & sécurité",
    features: [
      "Audit code & architecture complet",
      "Rapport détaillé avec priorités",
      "Correction des failles critiques",
      "Optimisation performances",
      "Plan d'action recommandé",
      "Call de restitution (1h)",
    ],
    ideal: "Projets bloqués, apps lentes, code legacy à reprendre",
    popular: false,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="accent" className="mb-4">Offres</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Des forfaits clairs, sans surprise
            </h2>
            <p className="text-lg text-muted-foreground">
              Trois offres packagées pour répondre à vos besoins. Devis détaillé sous 48h.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Card
                variant="pricing"
                className={`relative flex flex-col h-full ${
                  service.popular ? "border-accent ring-2 ring-accent/20" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="bg-accent text-accent-foreground shadow-lg">
                      Le plus populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.tagline}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="text-center mb-6">
                    <p className="font-heading text-3xl font-bold text-foreground">{service.price}</p>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Idéal pour :</span> {service.ideal}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="flex-col gap-3">
                  <Button
                    variant={service.popular ? "cta" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">
                      Discuter de mon projet
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link to={`/services#${service.id}`}>
                      Voir tous les détails
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Besoin d'un projet sur-mesure ? <a href="#contact" className="text-accent hover:underline font-medium">Contactez-moi</a> pour un devis personnalisé.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
