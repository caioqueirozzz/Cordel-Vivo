import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CactusScene, SunBurst, DecorativeDivider } from './XilogravuraElements'
import { ChevronUp } from 'lucide-react'

export function Closing() {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation(0.1)

  return (
    <section
      id="encerramento"
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 40% 60%, #292017 0%, #211A17 60%, #1A1210 100%)',
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-terracota" />
      <div
        className="absolute top-2 left-0 right-0 h-1"
        style={{
          background: 'repeating-linear-gradient(90deg, #D6A34A 0, #D6A34A 10px, transparent 10px, transparent 18px)',
        }}
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F3E5C8 0, #F3E5C8 1px, transparent 1px, transparent 10px)',
        }}
      />

      {/* Sun decoration */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-10" aria-hidden="true">
        <SunBurst className="w-80 h-80" />
      </div>

      {/* Background illustration */}
      <div className="absolute inset-x-0 bottom-0 opacity-10" aria-hidden="true">
        <CactusScene className="w-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-36 lg:py-48 text-center">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          {/* Project name */}
          <p className="font-accent text-sm text-terracota/70 tracking-widest uppercase mb-4">
            Cordel Vivo
          </p>

          {/* Main message */}
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-papel leading-[1.0] mb-8 max-w-4xl mx-auto">
            A cultura nordestina não precisa de uma{' '}
            <span className="text-terracota italic">nova voz.</span>
          </h2>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-papel/70 italic mb-12 max-w-3xl mx-auto leading-snug">
            Precisa de mais caminhos para que suas{' '}
            <span className="text-ocre">próprias vozes</span> sejam ouvidas.
          </h3>

          <DecorativeDivider inverted className="max-w-xs mx-auto mb-12" />

          {/* Tagline */}
          <p className="font-body text-xl sm:text-2xl text-papel/65 mb-16 max-w-2xl mx-auto leading-relaxed italic">
            "O futuro também se escreve em cordel."
          </p>

          {/* Team */}
          <div className="border border-papel/8 rounded-sm p-8 max-w-lg mx-auto mb-16">
            <p className="font-accent text-xs text-papel/30 tracking-widest uppercase mb-6">
              Equipe do projeto
            </p>
            <div className="space-y-4">
              {[
                'Caio Figueiredo Molla de Queiroz',
                'Guilherme de Sousa Corrêa de Oliveira Soares',
                'Pedro Menegon da Graça',
              ].map((name) => (
                <div key={name}>
                  <p className="font-body text-sm text-papel/80">{name}</p>
                  <p className="font-accent text-xs text-ocre/50 tracking-wider">
                    Ciência da Computação — UFPB
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="inline-flex flex-col items-center gap-2 text-papel/25 hover:text-ocre/60 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ChevronUp size={20} />
            </motion.div>
            <span className="font-accent text-xs tracking-widest uppercase">Topo</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom band */}
      <div className="relative border-t border-papel/5 py-6 px-4">
        <p className="text-center font-accent text-xs text-papel/20 tracking-wider">
          Cordel Vivo · Todos os direitos reservados
        </p>
      </div>
    </section>
  )
}
