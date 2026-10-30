import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { DecorativeDivider } from './XilogravuraElements'

const facts = [
  {
    year: 'Séc. XVI',
    title: 'Raízes ibéricas',
    text: 'O cordel chega ao Brasil com as tradições de poesia popular da Península Ibérica, encontrando solo fértil na oralidade nordestina.',
  },
  {
    year: 'Séc. XIX',
    title: 'Feiras e folhetos',
    text: 'Os folhetos se consolidam nas feiras do Nordeste. Pendurados em cordões, são vendidos e recitados pelos próprios poetas.',
  },
  {
    year: '2018',
    title: 'Patrimônio Nacional',
    text: 'O IPHAN registra a Literatura de Cordel como Patrimônio Cultural Imaterial do Brasil, reconhecendo sua importância histórica e identitária.',
  },
  {
    year: 'Hoje',
    title: 'Vivo e presente',
    text: 'O cordel continua sendo produzido, recitado e compartilhado — dialogando com questões contemporâneas e alcançando novos públicos.',
  },
]

export function OurCulture() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: factsRef, isInView: factsInView } = useScrollAnimation()

  return (
    <section id="cultura" className="bg-carvao text-papel relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #F3E5C8 0, #F3E5C8 1px, transparent 1px, transparent 12px)',
        }}
      />

      {/* Decorative large text */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[18rem] font-black text-papel/[0.03] select-none leading-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        Cordel
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-accent text-ocre/70 text-sm tracking-widest uppercase mb-4">
            Nossa Cultura, Nossa História
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
            Uma voz que atravessa{' '}
            <span className="text-ocre italic">gerações</span>
          </h2>
          <p className="font-body text-papel/70 text-lg sm:text-xl leading-relaxed">
            A literatura de cordel não é apenas um gênero literário. É uma forma de memória coletiva,
            resistência cultural e identidade nordestina — viva, presente e em constante diálogo
            com o Brasil e o mundo.
          </p>
        </motion.div>

        <DecorativeDivider inverted className="mb-16 max-w-xs" />

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -30 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="border-l-4 border-terracota pl-8 mb-20"
        >
          <p className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-papel/90 leading-snug max-w-2xl">
            "Cada verso guarda uma história. Cada cordelista merece ser ouvido."
          </p>
        </motion.blockquote>

        {/* Timeline / Facts */}
        <div ref={factsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.year}
              initial={{ opacity: 0, y: 30 }}
              animate={factsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connecting line */}
              {i < facts.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-ocre/20 z-0" />
              )}

              <div className="relative bg-papel/[0.06] border border-papel/10 rounded-sm p-6 hover:bg-papel/[0.1] transition-colors group">
                {/* Year badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-terracota" />
                  <span className="font-accent text-ocre text-sm tracking-wider">{fact.year}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-papel mb-3">{fact.title}</h3>
                <p className="font-body text-papel/60 text-sm leading-relaxed">{fact.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom transition */}
      <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L1440,60 L1440,60 L0,60 Z" fill="#F3E5C8" opacity="0.05" />
        <path d="M0,60 L1440,0 L1440,60 Z" fill="#F3E5C8" opacity="0.04" />
      </svg>
    </section>
  )
}
