import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle2, Clock, Zap } from 'lucide-react'

const mvpFeatures = [
  'Landing page e identidade visual da plataforma',
  'Biblioteca de cordéis com leitura digital',
  'Perfis de autores com página autoral',
  'Publicação de textos e imagens',
  'Digitalização assistida por IA',
  'Busca semântica por linguagem natural',
  'Visualização e descoberta de obras',
]

const evolutionFeatures = [
  'Publicação conversacional pelo WhatsApp',
  'Museu digital interativo completo',
  'Curadoria e experiências de descoberta',
  'Sistema de comentários e avaliações',
  'Integração educacional e pedagógica',
  'Recursos de apoio e encomenda de folhetos',
  'Painel de gestão para cordelistas',
]

const futureFeature = {
  title: 'Transcrição de Cordéis Orais',
  desc: 'Inteligência artificial para transcrever cordéis declamados oralmente — ampliando a acessibilidade para artistas que preferem a oralidade à escrita, preservando a musicalidade e o ritmo.',
}

export function FutureDevelopment() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation(0.1)

  return (
    <section id="desenvolvimento" className="bg-carvao py-24 lg:py-36 relative overflow-hidden">
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #F3E5C8 0, #F3E5C8 1px, transparent 1px, transparent 14px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-accent text-ocre/70 text-sm tracking-widest uppercase mb-4">
            Desenvolvimento e Visão Futura
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
            Um plano em{' '}
            <span className="text-ocre italic">duas etapas</span>
          </h2>
          <p className="font-body text-papel/65 text-lg leading-relaxed">
            A plataforma será construída de forma gradual, priorizando o que entrega valor
            imediato aos cordelistas e, em seguida, expandindo para funcionalidades mais complexas.
          </p>
        </motion.div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* MVP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="bg-papel/[0.06] border border-papel/15 rounded-sm overflow-hidden">
              {/* Header */}
              <div className="bg-terracota/90 px-6 py-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-papel" />
                <div>
                  <p className="font-display font-bold text-lg text-papel">MVP Inicial</p>
                  <p className="font-accent text-xs text-papel/60 tracking-wider">Primeira versão</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {mvpFeatures.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-terracota/20 border border-terracota/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-terracota" />
                    </div>
                    <span className="font-body text-sm text-papel/75">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Evolution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-papel/[0.06] border border-papel/15 rounded-sm overflow-hidden">
              {/* Header */}
              <div className="bg-ocre/80 px-6 py-4 flex items-center gap-3">
                <Clock size={20} className="text-carvao" />
                <div>
                  <p className="font-display font-bold text-lg text-carvao">Evolução da Plataforma</p>
                  <p className="font-accent text-xs text-carvao/60 tracking-wider">Próximas etapas</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {evolutionFeatures.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-ocre/15 border border-ocre/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-ocre/60" />
                    </div>
                    <span className="font-body text-sm text-papel/60">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="bg-gradient-to-r from-terracota/20 to-ocre/10 border border-ocre/20 rounded-sm p-8 flex gap-6 items-start"
        >
          <div className="w-12 h-12 bg-ocre/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Zap size={22} className="text-ocre" />
          </div>
          <div>
            <p className="font-accent text-xs text-ocre/60 tracking-widest uppercase mb-1">
              Funcionalidade Futura — Em Pesquisa
            </p>
            <h3 className="font-display font-bold text-xl text-papel mb-2">
              {futureFeature.title}
            </h3>
            <p className="font-body text-sm text-papel/65 leading-relaxed max-w-2xl">
              {futureFeature.desc}
            </p>
          </div>
        </motion.div>

        {/* Planning note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center font-accent text-xs text-papel/25 tracking-wider mt-8"
        >
          Este é um planejamento de desenvolvimento, não uma descrição de funcionalidades já entregues.
        </motion.p>
      </div>
    </section>
  )
}
