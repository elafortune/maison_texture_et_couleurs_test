import SEO from '../components/seo/SEO'
import PrestationsHero      from '../components/prestations/PrestationsHero'
import PrestationsStickyNav from '../components/prestations/PrestationsStickyNav'
import LissagesYbera        from '../components/prestations/LissagesYbera'
import PrestationSection    from '../components/prestations/PrestationSection'
import CoupeSection         from '../components/prestations/CoupeSection'
import { prestationCategories } from '../data/salonData'

export default function PrestationsPage() {
  const couleur  = prestationCategories.find((c) => c.id === 'couleur')
  const coiffage = prestationCategories.find((c) => c.id === 'coiffage')

  return (
    <>
      <SEO
        title="Nos Prestations — Lissages Ybera, Couleur & Coiffage | Maison Texture"
        description="Lissages Ybera Paris (Discovery, Fashion, Brésilien Premium), coloration, coiffage et coupe sur-mesure. Salon Maison Texture & Couleur, Paris 9e."
        canonical="/prestations"
      />
      <PrestationsHero />
      <PrestationsStickyNav />
      <LissagesYbera />
      <PrestationSection category={couleur}  reversed={false} bgClass="bg-pearl" />
      <PrestationSection category={coiffage} reversed={true}  bgClass="bg-ivory" />
      <CoupeSection />
    </>
  )
}
