import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "FlutterFlow", category: "App Builder" },
  { name: "Flutter", category: "Mobile" },
  { name: "Firebase", category: "Backend" },
  { name: "n8n", category: "Automation" },
  { name: "Stripe", category: "Payments" },
  { name: "Supabase", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "REST APIs", category: "Integration" },
];

export function TechStack() {
  return (
    <section className="py-16 border-y border-border bg-secondary/20">
      <div className="section-container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Technologies maîtrisées
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge
              key={tech.name}
              variant="tech"
              className="text-sm px-4 py-2 hover:bg-secondary transition-colors"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
