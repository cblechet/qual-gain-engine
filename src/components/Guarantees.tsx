import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, FileText, RefreshCw, MessageCircle, Award } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const guarantees = [
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Planning fixé au départ. Si je suis en retard, je vous offre du support supplémentaire.",
  },
  {
    icon: FileText,
    title: "Code documenté",
    description: "Vous repartez avec une doc technique claire. Pas de dépendance à vie.",
  },
  {
    icon: RefreshCw,
    title: "Itérations incluses",
    description: "2 cycles de révisions inclus dans chaque forfait. On affine jusqu'à ce que ça vous convienne.",
  },
  {
    icon: MessageCircle,
    title: "Communication directe",
    description: "Un seul interlocuteur (moi). Réponse sous 24h ouvrées max.",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "NDA signé sur demande. Vos données et votre code restent les vôtres.",
  },
  {
    icon: Award,
    title: "Satisfaction client",
    description: "Si le livrable ne correspond pas au périmètre validé, je corrige gratuitement.",
  },
];

export function Guarantees() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="accent" className="mb-4">Garanties</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Travailler avec moi, c'est aussi…
            </h2>
            <p className="text-lg text-muted-foreground">
              Des engagements concrets, pas du marketing creux.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
          {guarantees.map((item, index) => (
            <StaggerItem key={index}>
              <Card variant="feature" className="h-full">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
