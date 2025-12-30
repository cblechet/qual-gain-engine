import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileSearch, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Appel découverte",
    duration: "15 min",
    description: "On échange sur votre projet, vos objectifs et contraintes. Je vous dis si je peux vous aider.",
  },
  {
    icon: FileSearch,
    title: "Cadrage & devis",
    duration: "48h",
    description: "Je rédige une proposition détaillée : périmètre, planning, livrables, tarif fixe. Pas de surprise.",
  },
  {
    icon: Code2,
    title: "Développement",
    duration: "2-6 semaines",
    description: "Sprints courts avec démos régulières. Vous validez chaque étape avant la suivante.",
  },
  {
    icon: Rocket,
    title: "Livraison & support",
    duration: "Inclus",
    description: "Mise en production, documentation, formation. Support inclus pendant 1 mois.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Process</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Un process simple, transparent
          </h2>
          <p className="text-lg text-muted-foreground">
            Pas de jargon, pas de tunnel sans fin. Voici comment ça se passe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Step number & icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 border-border shadow-md flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-accent">
                        Étape {index + 1}
                      </span>
                      <Badge variant="muted" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
