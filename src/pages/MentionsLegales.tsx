import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales - Colin Développeur Freelance</title>
        <meta name="description" content="Mentions légales du site colin.dev" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
                Mentions légales
              </h1>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Éditeur du site
                </h2>
                <p className="text-muted-foreground">
                  Ce site est édité par Colin, développeur freelance.<br />
                  Statut : Entrepreneur individuel<br />
                  Adresse : [Adresse à compléter]<br />
                  Email : contact@colin.dev<br />
                  SIRET : [Numéro SIRET à compléter]
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Hébergement
                </h2>
                <p className="text-muted-foreground">
                  Ce site est hébergé par Lovable.<br />
                  [Coordonnées hébergeur à compléter]
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-muted-foreground">
                  L'ensemble du contenu de ce site (textes, images, logos, graphismes) est protégé par le droit d'auteur. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Responsabilité
                </h2>
                <p className="text-muted-foreground">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est régulièrement mis à jour. Toutefois, des erreurs ou omissions peuvent survenir. L'utilisateur est responsable de l'utilisation qu'il fait des informations du site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  Pour toute question relative aux mentions légales, vous pouvez me contacter à l'adresse : contact@colin.dev
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
