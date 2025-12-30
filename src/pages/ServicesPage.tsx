import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Zap, 
  Settings, 
  Search, 
  ArrowRight, 
  Clock, 
  FileText, 
  Shield, 
  HeadphonesIcon,
  AlertCircle
} from "lucide-react";

const services = [
  {
    id: "mvp",
    icon: Zap,
    name: "MVP Sprint",
    tagline: "De l'idée au produit",
    price: "À partir de 3 500€",
    priceNote: "Devis personnalisé selon fonctionnalités",
    duration: "2-4 semaines",
    description: "Lancez votre application mobile ou web rapidement avec une stack moderne et évolutive. Idéal pour valider votre idée sur le marché.",
    features: [
      "App mobile iOS & Android ou web app responsive",
      "Authentification utilisateurs (email, Google, Apple)",
      "Base de données Firebase ou Supabase",
      "Design UI/UX moderne et responsive",
      "Dashboard admin basique",
      "Documentation technique complète",
      "1 mois de support post-livraison",
      "Déploiement sur les stores (mobile) ou hébergement (web)",
    ],
    notIncluded: [
      "Fonctionnalités complexes (IA, temps réel avancé)",
      "Intégrations tierces multiples",
      "Maintenance continue au-delà d'1 mois",
    ],
    ideal: "Startups, solopreneurs, PME avec une idée à valider rapidement",
    prerequisites: [
      "Cahier des charges ou user stories",
      "Maquettes ou wireframes (optionnel)",
      "Accès à vos comptes (stores, hébergement)",
    ],
    deliverables: [
      "Code source complet",
      "Application déployée et fonctionnelle",
      "Documentation technique et utilisateur",
      "Accès admin aux bases de données",
    ],
    popular: true,
  },
  {
    id: "automation",
    icon: Settings,
    name: "Automations & Ops",
    tagline: "Gagnez 10h/semaine",
    price: "À partir de 1 500€",
    priceNote: "Forfait par workflow ou projet global",
    duration: "1-2 semaines",
    description: "Automatisez vos processus répétitifs avec n8n. Connectez vos outils, synchronisez vos données, libérez du temps pour ce qui compte vraiment.",
    features: [
      "Audit complet de vos workflows actuels",
      "Configuration n8n (self-hosted ou cloud)",
      "Jusqu'à 5 workflows automatisés",
      "Intégrations CRM (HubSpot, Pipedrive, etc.)",
      "Automatisation emails (Mailchimp, Brevo)",
      "Intégration Stripe (paiements, factures)",
      "Webhooks & APIs personnalisés",
      "Documentation des flux",
      "Formation équipe (1h visio)",
    ],
    notIncluded: [
      "Hébergement n8n (si self-hosted)",
      "Licences outils tiers",
      "Développement de connecteurs custom complexes",
    ],
    ideal: "Équipes ops, sales, marketing perdant du temps sur des tâches manuelles",
    prerequisites: [
      "Liste des outils utilisés",
      "Description des processus à automatiser",
      "Accès API aux outils concernés",
    ],
    deliverables: [
      "Workflows n8n configurés et documentés",
      "Guide d'utilisation et maintenance",
      "Session de formation enregistrée",
    ],
    popular: false,
  },
  {
    id: "rescue",
    icon: Search,
    name: "Rescue & Audit",
    tagline: "Sauvez votre projet",
    price: "À partir de 800€",
    priceNote: "Audit seul: 800€ | Audit + fixes: sur devis",
    duration: "3-5 jours",
    description: "Votre app rame, plante, ou le dev précédent a disparu ? Je reprends votre projet, identifie les problèmes et propose un plan d'action concret.",
    features: [
      "Audit code & architecture complet",
      "Analyse des vulnérabilités sécurité",
      "Test de performance et optimisation",
      "Rapport détaillé avec priorités",
      "Correction des failles critiques",
      "Refactoring du code legacy",
      "Plan d'action recommandé (roadmap)",
      "Call de restitution (1h)",
    ],
    notIncluded: [
      "Réécriture complète de l'application",
      "Migration de stack technologique",
      "Maintenance continue",
    ],
    ideal: "Projets bloqués, apps lentes, code legacy à reprendre, changement de dev",
    prerequisites: [
      "Accès au code source (repo Git)",
      "Accès à l'environnement de prod/staging",
      "Description des problèmes rencontrés",
    ],
    deliverables: [
      "Rapport d'audit PDF complet",
      "Liste priorisée des actions",
      "Estimations temps/coût pour chaque fix",
      "Code corrigé (si option fixes)",
    ],
    popular: false,
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Engagement contractuel sur les dates de livraison",
  },
  {
    icon: FileText,
    title: "Transparence totale",
    description: "Accès au code dès le jour 1, points réguliers",
  },
  {
    icon: Shield,
    title: "Garantie satisfaction",
    description: "Corrections illimitées pendant 30 jours",
  },
  {
    icon: HeadphonesIcon,
    title: "Support réactif",
    description: "Réponse sous 24h, même après livraison",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Colin | Développeur FlutterFlow, Firebase, n8n</title>
        <meta 
          name="description" 
          content="Découvrez mes offres: MVP Sprint (app en 4 semaines), Automations n8n, Audit & Rescue. Tarifs transparents, délais garantis." 
        />
        <link rel="canonical" href="https://colin.dev/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
            <div className="section-container">
              <ScrollReveal>
                <div className="max-w-3xl mx-auto text-center">
                  <Badge variant="accent" className="mb-4">Services</Badge>
                  <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Des offres claires,<br />
                    <span className="text-accent">sans mauvaise surprise</span>
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Trois forfaits adaptés à vos besoins. Chaque projet est unique, 
                    mais la transparence reste la même : vous savez ce que vous payez, 
                    ce que vous obtenez, et quand vous l'obtenez.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Services Detail */}
          <section className="section-padding">
            <div className="section-container">
              <div className="space-y-24">
                {services.map((service, index) => (
                  <ScrollReveal key={service.id} delay={index * 0.1}>
                    <div 
                      id={service.id}
                      className={`scroll-mt-24 ${
                        service.popular ? "relative" : ""
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute -top-4 left-8">
                          <Badge variant="default" className="bg-accent text-accent-foreground shadow-lg">
                            Le plus populaire
                          </Badge>
                        </div>
                      )}
                      
                      <Card className={`overflow-hidden ${
                        service.popular ? "border-accent ring-2 ring-accent/20" : ""
                      }`}>
                        <div className="grid lg:grid-cols-5 gap-0">
                          {/* Left: Main Info */}
                          <div className="lg:col-span-2 p-8 lg:p-10 bg-secondary/30">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                                <service.icon className="w-7 h-7 text-accent" />
                              </div>
                              <div>
                                <h2 className="font-heading text-2xl font-bold text-foreground">
                                  {service.name}
                                </h2>
                                <p className="text-muted-foreground">{service.tagline}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <p className="font-heading text-3xl font-bold text-foreground">
                                {service.price}
                              </p>
                              <p className="text-sm text-muted-foreground">{service.priceNote}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Clock className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium">{service.duration}</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-6">
                              {service.description}
                            </p>

                            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-6">
                              <p className="text-sm font-medium text-foreground mb-1">Idéal pour :</p>
                              <p className="text-sm text-muted-foreground">{service.ideal}</p>
                            </div>

                            <Button variant="cta" className="w-full" asChild>
                              <a href="#contact">
                                Demander un devis
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>

                          {/* Right: Details */}
                          <div className="lg:col-span-3 p-8 lg:p-10">
                            <div className="grid md:grid-cols-2 gap-8">
                              {/* Included */}
                              <div>
                                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                  <Check className="w-5 h-5 text-success" />
                                  Ce qui est inclus
                                </h3>
                                <ul className="space-y-3">
                                  {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Not Included */}
                              <div>
                                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                  <X className="w-5 h-5 text-destructive" />
                                  Ce qui n'est pas inclus
                                </h3>
                                <ul className="space-y-3 mb-8">
                                  {service.notIncluded.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                      <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                                      <span className="text-muted-foreground">{item}</span>
                                    </li>
                                  ))}
                                </ul>

                                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                  <AlertCircle className="w-5 h-5 text-accent" />
                                  Prérequis
                                </h3>
                                <ul className="space-y-2">
                                  {service.prerequisites.map((item, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">
                                      • {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Deliverables */}
                            <div className="mt-8 pt-8 border-t border-border">
                              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-accent" />
                                Livrables
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {service.deliverables.map((item, i) => (
                                  <Badge key={i} variant="secondary">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Guarantees */}
          <section className="section-padding bg-secondary/20">
            <div className="section-container">
              <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Mes engagements
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Quel que soit le forfait choisi, vous bénéficiez des mêmes garanties.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {guarantees.map((guarantee) => (
                  <StaggerItem key={guarantee.title}>
                    <Card className="text-center h-full">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                          <guarantee.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
                        <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-primary text-primary-foreground">
            <div className="section-container">
              <ScrollReveal>
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                    Prêt à démarrer ?
                  </h2>
                  <p className="text-lg text-primary-foreground/80 mb-8">
                    Réservez un appel découverte gratuit de 15 minutes. 
                    On discute de votre projet, je vous conseille sur la meilleure approche.
                  </p>
                  <Button variant="hero" size="xl" asChild>
                    <a href="/#contact">
                      Réserver mon appel gratuit
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
