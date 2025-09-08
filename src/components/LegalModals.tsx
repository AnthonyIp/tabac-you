import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";

const LegalModals = () => {
  const [isMentionsOpen, setIsMentionsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      {/* Mentions Légales Modal */}
      <Dialog open={isMentionsOpen} onOpenChange={setIsMentionsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200">
            <FileText className="w-4 h-4 mr-2" />
            Mentions légales
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary flex items-center">
              <FileText className="w-6 h-6 mr-3" />
              Mentions Légales
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Éditeur du site</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>Raison sociale :</strong> Les Allumettes</p>
                <p><strong>Adresse :</strong> 4 Rue du Général Leclerc, 91710 Vert-le-Petit</p>
                <p><strong>Téléphone :</strong> 01 64 93 73 98</p>
                <p><strong>Email :</strong> contact@lesallumettes-vert.fr</p>
                <p><strong>Forme juridique :</strong> [À compléter selon votre statut]</p>
                <p><strong>SIRET :</strong> [À compléter]</p>
                <p><strong>Code APE :</strong> 47.25Z - Commerce de détail de produits à base de tabac en magasin spécialisé</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Directeur de publication</h3>
              <p>Le directeur de la publication est le responsable de l'établissement.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Hébergement</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                <p><strong>Adresse :</strong> 44 Montgomery St., Suite 300, San Francisco, CA 94104, États-Unis</p>
                <p><strong>Téléphone :</strong> +1 415-691-1573</p>
                <p><strong>Email :</strong> support@netlify.com</p>
                <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.netlify.com</a></p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Développement du site</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>Développeur :</strong> Anthony IP</p>
                <p><strong>Site web :</strong> <a href="https://anthonyip.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">anthonyip.fr</a></p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Propriété intellectuelle</h3>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mt-2">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Responsabilité</h3>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mt-2">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email, à l'adresse contact@lesallumettes-vert.fr, en décrivant le problème 
                de la manière la plus précise possible.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Liens hypertextes</h3>
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant 
                sur ces liens, il sortira du site lesallumettes-vert.fr. Ce dernier n'a pas de contrôle sur les 
                pages web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Droit applicable</h3>
              <p>
                Tout litige en relation avec l'utilisation du site lesallumettes-vert.fr est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
              </p>
            </section>

            <div className="border-t pt-4 text-center text-muted-foreground">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Politique de Confidentialité Modal */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200">
            <Shield className="w-4 h-4 mr-2" />
            Politique de confidentialité
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              Politique de Confidentialité
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Collecte des données</h3>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-green-900 dark:text-green-100 font-bold text-base mb-3 flex items-center">
                  🛡️ Notre engagement : Aucune collecte de données personnelles
                </h4>
                <p className="text-green-800 dark:text-green-200">
                  Ce site ne collecte aucune donnée personnelle de ses visiteurs. Nous ne utilisons aucun 
                  cookie de tracking, aucune analyse de comportement, et ne stockons aucune information personnelle.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Cookies</h3>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-blue-900 dark:text-blue-100 font-bold text-base mb-3 flex items-center">
                  🍪 Aucun cookie de tracking
                </h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Ce site ne dépose aucun cookie sur votre ordinateur. Aucune bannière de cookies n'est 
                  nécessaire car nous respectons votre vie privée.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Services tiers</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">Avis Google</h4>
                  <p>
                    Les avis affichés sur ce site proviennent de Google My Business. Les noms des clients 
                    ont été anonymisés pour protéger leur vie privée (ex: "Jean D." au lieu de "Jean Dupont").
                  </p>
                  <p className="mt-2">
                    Ces avis sont publics sur Google et sont reproduits ici à des fins d'information uniquement.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">Carte interactive (OpenStreetMap)</h4>
                  <p>
                    La carte interactive utilise les services d'OpenStreetMap (OSM) pour afficher la localisation 
                    de notre établissement. Cette intégration implique :
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                    <li><strong>Chargement d'images :</strong> Les tuiles de carte sont chargées depuis les serveurs OSM</li>
                    <li><strong>Journalisation IP :</strong> Votre adresse IP peut être temporairement journalisée par OSM pour des raisons techniques</li>
                    <li><strong>Données de géolocalisation :</strong> Aucune donnée de géolocalisation n'est collectée par notre site</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Attribution :</strong> © OpenStreetMap contributors - 
                    <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Voir les conditions d'utilisation OSM
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Données de contact</h3>
              <p>
                Si vous nous contactez par téléphone ou email, nous ne conservons vos coordonnées que 
                le temps nécessaire pour répondre à votre demande.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mt-3">
                <p><strong>Données collectées :</strong> Nom, téléphone, email (uniquement si vous nous contactez)</p>
                <p><strong>Durée de conservation :</strong> 3 ans maximum</p>
                <p><strong>Utilisation :</strong> Répondre à vos demandes uniquement</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Vos droits RGPD</h3>
              <p>Même sans collecte de données, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                <li><strong>Droit d'accès :</strong> Connaître les données que nous possédons sur vous</li>
                <li><strong>Droit de rectification :</strong> Corriger des informations inexactes</li>
                <li><strong>Droit d'effacement :</strong> Supprimer vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Sécurité</h3>
              <p>
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour 
                protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Contact</h3>
              <p>Pour toute question concernant cette politique de confidentialité :</p>
              <div className="bg-muted/50 p-4 rounded-lg mt-3">
                <p><strong>Email :</strong> contact@lesallumettes-vert.fr</p>
                <p><strong>Téléphone :</strong> 01 64 93 73 98</p>
                <p><strong>Adresse :</strong> 4 Rue du Général Leclerc, 91710 Vert-le-Petit</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">8. Modifications</h3>
              <p>
                Cette politique de confidentialité peut être modifiée à tout moment. Toute modification 
                sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <div className="border-t pt-4 text-center text-muted-foreground">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LegalModals;
