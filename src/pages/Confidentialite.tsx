import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité - Colin Développeur Freelance</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
                Politique de confidentialité
              </h1>

              <p className="text-muted-foreground mb-8">
                Dernière mise à jour : Décembre 2024
              </p>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Collecte des données
                </h2>
                <p className="text-muted-foreground">
                  Les données personnelles collectées sur ce site sont :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Nom et prénom (via le formulaire de contact)</li>
                  <li>Adresse email (via le formulaire de contact)</li>
                  <li>Nom d'entreprise (optionnel)</li>
                  <li>Description du projet</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Finalité de la collecte
                </h2>
                <p className="text-muted-foreground">
                  Ces données sont collectées uniquement pour :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous envoyer un devis personnalisé</li>
                  <li>Organiser un appel découverte</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Vos données ne sont jamais vendues, partagées ou utilisées à des fins publicitaires.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Conservation des données
                </h2>
                <p className="text-muted-foreground">
                  Les données collectées via le formulaire de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf obligation légale contraire.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Vos droits
                </h2>
                <p className="text-muted-foreground">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                  <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-moi à : contact@colin.dev
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Cookies
                </h2>
                <p className="text-muted-foreground">
                  Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Aucun cookie publicitaire ou de suivi n'est utilisé.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Sécurité
                </h2>
                <p className="text-muted-foreground">
                  Des mesures techniques et organisationnelles sont mises en place pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  Pour toute question relative à cette politique de confidentialité ou à vos données personnelles, contactez-moi à : contact@colin.dev
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

export default Confidentialite;
