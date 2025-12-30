import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Pourquoi FlutterFlow plutôt que du code natif ?",
    answer: "FlutterFlow permet de livrer 3x plus vite qu'un développement natif classique, tout en générant du code Flutter propre et maintenable. C'est idéal pour les MVP et les projets avec budget/délais serrés. Pour des besoins très spécifiques, je peux aussi coder en Flutter/Dart pur.",
  },
  {
    question: "Combien coûte un projet type ?",
    answer: "Un MVP basique démarre à 3 500€. Une app plus complexe avec automations peut aller de 5 000€ à 15 000€. Je fournis toujours un devis détaillé et fixe après notre échange. Pas de surprise en cours de route.",
  },
  {
    question: "Quels sont les délais réalistes ?",
    answer: "Un MVP simple : 2-4 semaines. Une app complète avec backend et automations : 4-8 semaines. Un audit/rescue : 3-5 jours. Ces délais sont réalistes et incluent les allers-retours de validation.",
  },
  {
    question: "Et si mon projet change en cours de route ?",
    answer: "C'est normal et prévu. On travaille en sprints courts avec des points réguliers. Les ajustements mineurs sont inclus. Pour des changements majeurs, on fait un avenant au devis initial. Transparence totale.",
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer: "1 mois de support est inclus (corrections de bugs, questions). Ensuite, je propose des forfaits de maintenance (TJM ou mensuel). Vous pouvez aussi reprendre le code en interne, il est documenté pour ça.",
  },
  {
    question: "Travailles-tu avec des équipes ou seulement en solo ?",
    answer: "Je travaille principalement en solo, ce qui garantit un interlocuteur unique et une responsabilité claire. Pour les gros projets, je peux faire appel à mon réseau de freelances de confiance.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "30% à la signature du devis, 40% à mi-parcours (démo intermédiaire validée), 30% à la livraison finale. Facturation française, paiement par virement ou Stripe.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-secondary/20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="accent" className="mb-4">FAQ</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Les réponses aux questions que vous vous posez (probablement).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
