import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, Puzzle, Shield, Zap, HeartHandshake } from "lucide-react";

const problems = [
  {
    icon: Clock,
    problem: "Votre projet traîne depuis des mois",
    solution: "Livraison en sprints courts de 2-4 semaines avec démo régulières",
  },
  {
    icon: Puzzle,
    problem: "Trop d'outils à connecter, rien ne communique",
    solution: "Intégrations n8n + APIs pour tout automatiser et synchroniser",
  },
  {
    icon: AlertCircle,
    problem: "Votre dev précédent a disparu en plein projet",
    solution: "Process clair, code documenté, transfert de compétences inclus",
  },
  {
    icon: Shield,
    problem: "Inquiet sur la sécurité et la scalabilité",
    solution: "Architecture Firebase/Supabase éprouvée, tests inclus",
  },
];

export function Problems() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vous reconnaissez-vous ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Ces problèmes reviennent chez 90% de mes clients. Voici comment je les résous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <Card key={index} variant="interactive" className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      {item.problem}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      → {item.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
            <HeartHandshake className="w-6 h-6 text-accent" />
            <span className="text-foreground font-medium">
              +20 projets livrés · Clients satisfaits en France & remote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
