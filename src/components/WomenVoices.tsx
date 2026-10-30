import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { DecorativeDivider } from './XilogravuraElements'
import { Star } from 'lucide-react'

const pillars = [
  {
    title: 'Na Curadoria',
    text: 'Obras de autoras em destaque permanente na biblioteca e em seções especiais de curadoria.',
  },
  {
    title: 'No Museu',
    text: 'A Sala IV é dedicada inteiramente às vozes femininas que construíram e renovam a tradição.',
  },
  {
    title: 'Nos Destaques',
    text: 'Autoras ganham visibilidade especial em destaques semanais e em páginas de descoberta.',
  },
  {
    title: 'Na Busca',
    text: 'A busca inteligente reconhece e valoriza a produção feminina como categoria relevante.',
  },
]

export function WomenVoices() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation(0.1)

  return (
    <section id="mulheres" className="bg-vermelho relative overflow-hidden py-24 lg:py-36">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFF7E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Large decorative text */}
      <div
        className="absolute -left-4 top-1/2 -translate-y-1/2 font-display text-[14rem] font-black text-papel/[0.04] select-none leading-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        Voz
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-papel/50 text-sm tracking-widest uppercase mb-4">
              Mulheres que Escrevem Histórias
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
              A voz feminina sempre{' '}
              <span className="italic text-ocre">esteve aqui</span>
            </h2>
            <p className="font-body text-papel/75 text-lg leading-relaxed mb-6">
              As mulheres cordelistas nunca deixaram de produzir, criar e narrar o mundo ao seu redor.
              O que faltou — e que queremos corrigir — é visibilidade, reconhecimento e espaço.
            </p>
            <p className="font-body text-papel/65 text-base leading-relaxed mb-10">
              Na plataforma Cordel Vivo, o protagonismo feminino não é uma seção isolada.
              É uma presença transversal — na curadoria, na biblioteca, no museu,
              nos destaques e em cada espaço de descoberta.
            </p>

            <DecorativeDivider inverted className="mb-10 max-w-xs" />

            {/* Pull quote */}
            <blockquote className="border-l-2 border-ocre pl-5">
              <p className="font-display italic text-xl text-papel/85 leading-snug">
                "A literatura de cordel sempre foi um espaço muito masculino, mas nós, mulheres, estamos aqui para 
                mostrar que nossa voz produz arte, história e transformação."
              </p>
              <footer className="font-accent text-xs text-papel/40 mt-2 tracking-wider">
                Jarrid Arraes - Escritora, poetisa e cordelista natural de Juazeiro do Norte
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: Illustrated composition */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Central visual element */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  {/* Stylized star/flower pattern */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8
                    const rad = (angle * Math.PI) / 180
                    return (
                      <ellipse
                        key={i}
                        cx={100 + Math.cos(rad) * 40}
                        cy={100 + Math.sin(rad) * 40}
                        rx="20"
                        ry="10"
                        transform={`rotate(${angle}, ${100 + Math.cos(rad) * 40}, ${100 + Math.sin(rad) * 40})`}
                        fill="#FFF7E8"
                      />
                    )
                  })}
                  <circle cx="100" cy="100" r="25" fill="#FFF7E8" />
                </svg>
              </div>

              <div className="relative flex justify-center gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#D6A34A" className="text-ocre" />
                ))}
              </div>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-papel/10 border border-papel/10 rounded-sm p-4 hover:bg-papel/15 transition-colors"
                >
                  <h4 className="font-display font-bold text-base text-ocre mb-2">{p.title}</h4>
                  <p className="font-body text-xs text-papel/65 leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
