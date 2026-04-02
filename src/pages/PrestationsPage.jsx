import SEO from '../components/seo/SEO'
import PrestationsHero        from '../components/prestations/PrestationsHero'
import PrestationsStickyNav   from '../components/prestations/PrestationsStickyNav'
import CoupeSection           from '../components/prestations/CoupeSection'
import PrestationSection      from '../components/prestations/PrestationSection'
import SoinsSection           from '../components/prestations/SoinsSection'
import { prestationCategories, soins } from '../data/salonData'

/* Couleurs de fond alternées pour les sections génériques */
const bgClasses = ['bg-ivory', 'bg-pearl', 'bg-ivory']

export default function PrestationsPage() {
  /* On garde "coupe" dans CoupeSection, le reste dans PrestationSection */
  const otherCategories = prestationCategories.filter((c) => c.id !== 'coupe')

  return (
    <>
      <SEO
        title="Nos Prestations — Coupe, Couleur & Coiffage | Maison Texture"
        description="Découvrez nos prestations : coupe femme, balayage, coloration, chignon cérémonie et lissage brésilien. Techniques expertes pour sublimer votre chevelure."
        canonical="/prestations"
      />
      <PrestationsHero />
      <PrestationsStickyNav />
      <CoupeSection />
      {otherCategories.map((cat, i) => (
        <PrestationSection
          key={cat.id}
          category={cat}
          reversed={i % 2 !== 0}
          bgClass={bgClasses[i] ?? 'bg-pearl'}
        />
      ))}
      <SoinsSection soins={soins} />
    </>
  )
}
