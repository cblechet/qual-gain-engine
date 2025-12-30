import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FormStep = 1 | 2 | 3;

interface FormData {
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  description: string;
  honeypot: string;
}

const projectTypes = [
  { value: "mvp", label: "MVP / Nouvelle app" },
  { value: "automation", label: "Automations n8n" },
  { value: "rescue", label: "Rescue / Audit" },
  { value: "other", label: "Autre projet" },
];

const budgets = [
  { value: "1-3k", label: "1 000€ - 3 000€" },
  { value: "3-5k", label: "3 000€ - 5 000€" },
  { value: "5-10k", label: "5 000€ - 10 000€" },
  { value: "10k+", label: "10 000€ +" },
  { value: "unknown", label: "Je ne sais pas encore" },
];

const timelines = [
  { value: "urgent", label: "Urgent (< 2 semaines)" },
  { value: "normal", label: "Normal (1-2 mois)" },
  { value: "flexible", label: "Flexible (> 2 mois)" },
];

export function Contact() {
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
    description: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const { toast } = useToast();

  const validateStep = (currentStep: FormStep): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (currentStep === 1) {
      if (!formData.projectType) {
        newErrors.projectType = "Sélectionnez un type de projet";
      }
      if (!formData.budget) {
        newErrors.budget = "Sélectionnez un budget";
      }
      if (!formData.timeline) {
        newErrors.timeline = "Sélectionnez un délai";
      }
    }

    if (currentStep === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Votre nom est requis";
      } else if (formData.name.trim().length > 100) {
        newErrors.name = "Le nom ne doit pas dépasser 100 caractères";
      }
      
      if (!formData.email.trim()) {
        newErrors.email = "Votre email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email invalide";
      } else if (formData.email.length > 255) {
        newErrors.email = "L'email ne doit pas dépasser 255 caractères";
      }
    }

    if (currentStep === 3) {
      if (!formData.description.trim()) {
        newErrors.description = "Décrivez brièvement votre projet";
      } else if (formData.description.trim().length < 20) {
        newErrors.description = "Minimum 20 caractères";
      } else if (formData.description.length > 2000) {
        newErrors.description = "Maximum 2000 caractères";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3) as FormStep);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1) as FormStep);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      toast({
        title: "Une erreur est survenue",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
      });
      return;
    }

    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message envoyé !",
      description: "Je vous réponds sous 48h maximum.",
    });
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Message envoyé !
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Merci pour votre demande. Je vous recontacte sous 48h pour organiser notre appel découverte.
              </p>
              <p className="text-sm text-primary-foreground/60">
                En attendant, n'hésitez pas à préparer vos questions !
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Contact
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Réservez directement un créneau ou répondez à quelques questions pour que je puisse mieux vous conseiller.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Réserver un appel
                </TabsTrigger>
                <TabsTrigger value="form" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Formulaire
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calendar">
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-4 sm:p-8">
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Appel découverte gratuit - 15 min
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        On discute de votre projet, je vous conseille sur la meilleure approche.
                      </p>
                    </div>
                    <CalendlyEmbed 
                      url="https://calendly.com/your-username/15min"
                      className="w-full"
                    />
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      💡 Remplacez l'URL Calendly dans le fichier CalendlyEmbed.tsx par votre lien personnel
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="form">
                <Card className="bg-card text-card-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              {/* Progress indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      s === step
                        ? "w-12 bg-accent"
                        : s < step
                        ? "w-8 bg-accent/60"
                        : "w-8 bg-border"
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => updateField("honeypot", e.target.value)}
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Step 1: Project Type */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Type de projet
                      </Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => updateField("projectType", type.value)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.projectType === type.value
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className="text-destructive text-sm mt-2">{errors.projectType}</p>
                      )}
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Budget envisagé
                      </Label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {budgets.map((b) => (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => updateField("budget", b.value)}
                            className={`p-3 rounded-xl border-2 text-sm transition-all ${
                              formData.budget === b.value
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className="text-destructive text-sm mt-2">{errors.budget}</p>
                      )}
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Délai souhaité
                      </Label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {timelines.map((t) => (
                          <button
                            key={t.value}
                            type="button"
                            onClick={() => updateField("timeline", t.value)}
                            className={`p-3 rounded-xl border-2 text-sm transition-all ${
                              formData.timeline === t.value
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                      {errors.timeline && (
                        <p className="text-destructive text-sm mt-2">{errors.timeline}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                        Votre nom *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Jean Dupont"
                        maxLength={100}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                        Votre email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="jean@entreprise.fr"
                        maxLength={255}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-base font-semibold mb-2 block">
                        Entreprise (optionnel)
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        placeholder="Nom de votre entreprise"
                        maxLength={100}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Project Details */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="description" className="text-base font-semibold mb-2 block">
                        Décrivez votre projet *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="Parlez-moi de votre projet, vos objectifs, vos contraintes... Plus vous êtes précis, mieux je pourrai vous conseiller."
                        rows={5}
                        maxLength={2000}
                        className={errors.description ? "border-destructive" : ""}
                      />
                      <div className="flex justify-between mt-1">
                        {errors.description ? (
                          <p className="text-destructive text-sm">{errors.description}</p>
                        ) : (
                          <span />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {formData.description.length}/2000
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button type="button" variant="ghost" onClick={prevStep}>
                      <ArrowLeft className="w-4 h-4" />
                      Retour
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button type="button" variant="cta" onClick={nextStep}>
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="cta" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Envoi...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

              </TabsContent>
            </Tabs>
          </ScrollReveal>

          <p className="text-center text-sm text-primary-foreground/60 mt-6">
            Je réponds sous 48h. Pas de spam, promis.
          </p>
        </div>
      </div>
    </section>
  );
}
