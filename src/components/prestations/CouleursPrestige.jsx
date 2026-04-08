import { useEffect, useRef } from 'react'
import { Check, CalendarDays, Sparkles } from 'lucide-react'
import { balayagesPrestige, socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

const featured  = balayagesPrestige.find((p) => p.featured)
const supporting = balayagesPrestige.filter((p) => !p.featured)

export default function CouleursPrestige() {
  const headingRef = useScrollReveal()
  const gridRef    = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('stagger-visible'), i * 110)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="couleur" className="scroll-mt-32 bg-onyx" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(166,90,46,0.13) 0%, #1C1C1C 55%)' }}>

      {/* ── Bannière diagnostic ── */}
      <div className="bg-copper/12 border-b border-copper/20 py-3.5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-copper/80 font-medium">
            ✦ Approche Curls-Friendly
          </span>
          <span className="hidden sm:block w-px h-3 bg-copper/30" />
          <span className="font-sans text-xs text-stone/50 tracking-wide">Travail sur cheveux secs</span>
          <span className="hidden sm:block w-px h-3 bg-copper/30" />
          <span className="font-sans text-xs text-stone/50 tracking-wide">Respect du shrinkage</span>
          <span className="hidden sm:block w-px h-3 bg-copper/30" />
          <span className="font-sans text-xs text-stone/50 tracking-wide">Produits adaptés aux textures</span>
          <span className="hidden sm:block w-px h-3 bg-copper/30" />
          <span className="font-sans text-xs text-stone/50 tracking-wide">Diagnostic inclus</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">

        {/* ── En-tête ── */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-copper/40" />
            <Sparkles size={13} className="text-copper/60" />
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-copper/70">Couleurs & Balayages</span>
            <Sparkles size={13} className="text-copper/60" />
            <span className="w-12 h-px bg-copper/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-pearl leading-tight mb-5">
            L&apos;art de la couleur<br />
            <span className="italic text-copper">sur cheveux texturés</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-7">
            <div className="w-10 h-px bg-copper/35" />
            <div className="w-2 h-2 rounded-full bg-copper/50" />
            <div className="w-16 h-px bg-copper/20" />
          </div>
          <p className="font-sans text-sm text-stone/55 leading-relaxed max-w-xl mx-auto">
            Chaque balayage est réalisé sur cheveux secs, dans le respect total de votre texture.
            Parce que la couleur doit révéler vos boucles, pas les effacer.
          </p>
        </div>

        {/* ── Carte FEATURED — Curl Contouring ── */}
        <div className="mb-8 reveal group border border-copper/30 hover:border-copper/60 transition-colors duration-500"
          style={{ background: 'linear-gradient(135deg, rgba(166,90,46,0.18) 0%, rgba(28,28,28,0.95) 60%)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

            {/* Colonne gauche — contenu principal */}
            <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-between">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-copper text-pearl px-4 py-1.5 mb-8">
                  <span className="font-sans text-xs tracking-[0.25em] uppercase">✦ {featured.tag}</span>
                </div>

                {/* Titre */}
                <h3 className="font-serif text-4xl md:text-5xl font-light text-pearl leading-tight mb-3">
                  {featured.name}
                </h3>
                <p className="font-sans text-sm text-copper/70 tracking-wide mb-6">
                  {featured.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-stone/65 leading-relaxed mb-8 max-w-md">
                  {featured.description}
                </p>

                {/* Bienfaits */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                  {featured.bienfaits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={12} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 text-copper" />
                      <span className="font-sans text-xs text-stone/65 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={socialLinks.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-3 bg-copper text-pearl px-10 py-4 font-sans text-xs tracking-[0.25em] uppercase hover:bg-terracotta transition-colors duration-300"
              >
                <CalendarDays size={14} />
                Réserver cette prestation
              </a>
            </div>

            {/* Colonne droite — résultat + décoratif */}
            <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-copper/20 p-10 md:p-14 flex flex-col justify-between">
              <div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-copper/50 mb-4">
                  Résultat attendu
                </p>
                <p className="font-serif text-lg text-pearl/85 leading-relaxed italic mb-8">
                  "{featured.resultat}"
                </p>
                <div className="w-full h-px bg-copper/15 mb-8" />
                <div className="space-y-3">
                  <p className="font-sans text-xs text-stone/40 tracking-wide">Ce qui fait la différence</p>
                  {['Travail sur cheveux secs', 'Respect du mouvement naturel', 'Résultat 100% sur-mesure'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-copper/50" />
                      <span className="font-sans text-xs text-stone/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <span className="font-serif text-7xl md:text-8xl text-copper/8 select-none leading-none">
                  {featured.emoji}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Grille 5 prestations ── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {supporting.map((p) => (
            <div
              key={p.id}
              className="stagger-item group bg-onyx border border-stone/10 hover:border-copper/35 transition-all duration-300 flex flex-col p-7"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl">{p.emoji}</span>
                <span className="font-sans text-xs tracking-[0.18em] uppercase text-copper/55 bg-copper/8 px-3 py-1">
                  {p.tag}
                </span>
              </div>

              <h3 className="font-serif text-lg text-pearl font-light leading-snug mb-1">
                {p.name}
              </h3>
              <p className="font-sans text-xs text-stone/40 mb-4">{p.subtitle}</p>

              {/* Ligne déco */}
              <div className="w-6 h-px bg-copper/30 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-copper/55" />

              <p className="font-sans text-xs text-stone/55 leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              {/* Bienfaits */}
              <ul className="space-y-2 mb-5">
                {p.bienfaits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={10} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 text-copper/70" />
                    <span className="font-sans text-xs text-stone/50 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Résultat */}
              <div className="border-l-2 border-copper/30 pl-3 py-1">
                <p className="font-sans text-xs text-stone/45 italic leading-relaxed">
                  {p.resultat}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Encart Pack ── */}
        <div className="border border-copper/25 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: 'rgba(166,90,46,0.07)' }}
        >
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-copper/70 mb-2">
              ✦ Pack exclusif
            </p>
            <h3 className="font-serif text-2xl text-pearl font-light mb-2">
              Balayage + Rituel Boucles
            </h3>
            <p className="font-sans text-sm text-stone/50 leading-relaxed max-w-md">
              Combinez votre balayage avec un soin reconstructeur profond et un coiffage de définition des boucles inclus. Le duo parfait pour repartir transformée.
            </p>
          </div>
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 border border-copper/50 text-copper px-8 py-3.5 font-sans text-xs tracking-[0.22em] uppercase hover:bg-copper hover:text-pearl transition-all duration-300"
          >
            <CalendarDays size={13} />
            Réserver le pack
          </a>
        </div>

      </div>
    </section>
  )
}
