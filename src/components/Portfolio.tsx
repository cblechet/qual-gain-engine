import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "App de gestion de RDV",
    client: "Cabinet médical",
    description: "Application FlutterFlow pour la prise de RDV en ligne, rappels SMS automatiques via n8n, paiements Stripe.",
    stack: ["FlutterFlow", "Firebase", "n8n", "Stripe"],
    result: "Réduction de 60% des no-shows",
    duration: "4 semaines",
  },
  {
    title: "Automatisation CRM",
    client: "Agence marketing",
    description: "Synchronisation Hubspot ↔ Notion ↔ Slack avec enrichissement automatique des leads et alertes temps réel.",
    stack: ["n8n", "APIs", "Webhooks"],
    result: "5h/semaine économisées par commercial",
    duration: "2 semaines",
  },
  {
    title: "Marketplace B2B",
    client: "Startup SaaS",
    description: "Plateforme de mise en relation avec matching intelligent, dashboard vendeur, intégration paiements.",
    stack: ["FlutterFlow", "Supabase", "Stripe"],
    result: "MVP validé avec premiers clients",
    duration: "6 semaines",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Réalisations</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Des projets concrets, des résultats mesurables
          </h2>
          <p className="text-lg text-muted-foreground">
            Quelques exemples de missions récentes (détails anonymisés pour confidentialité).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} variant="interactive" className="flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {project.client}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Résultat :</span>
                    <span className="font-medium text-success">{project.result}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Durée :</span>
                    <span className="font-medium text-foreground">{project.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
