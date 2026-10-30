import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Eye, Lock, BookOpen } from 'lucide-react'

const challenges = [
  {
    number: '01',
    icon: Eye,
    title: 'Visibilidade e circulação',
    color: 'terracota',
    bgColor: '#B65232',
    description:
      'Cordelistas podem enfrentar dificuldades para ampliar seu público, divulgar obras e encontrar oportunidades de valorização econômica. A distribuição dos folhetos ainda depende fortemente de redes presenciais e feiras populares.',
    aspects: [
      'Dificuldade de alcançar públicos fora da região',
      'Poucas plataformas digitais especializadas',
      'Visibilidade econômica limitada',
    ],
  },
  {
    number: '02',
    icon: Lock,
    title: 'Barreiras de acesso e publicação',
    color: 'vermelho',
    bgColor: '#892E2B',
    description:
      'Ferramentas digitais convencionais podem exigir familiaridade tecnológica, dificultando a participação de artistas com menor experiência digital. A falta de ferramentas acessíveis afasta parte dos cordelistas do ambiente online.',
    aspects: [
      'Interfaces complexas e não adaptadas',
      'Processo técnico de digitalização inacessível',
      'Barreiras ao acesso à internet e dispositivos',
    ],
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Reconhecimento e continuidade cultural',
    color: 'madeira',
    bgColor: '#78513B',
    description:
      'É necessário ampliar oportunidades de contato com o cordel, fortalecer sua presença na educação e dar visibilidade a grupos historicamente menos reconhecidos, incluindo mulheres cordelistas.',
    aspects: [
      'Subrepresentação feminina na literatura de cordel',
      'Presença limitada nas instituições educacionais',
      'Risco de descontinuidade de obras e trajetórias',
    ],
  },
]

export function TheProblem() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()

  return (
    <section id="problema" className="bg-papel relative overflow-hidden py-24 lg:py-36">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #B65232, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
            O Problema que Queremos Enfrentar
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carvao leading-tight mb-6">
            Três desafios que motivaram{' '}
            <span className="text-terracota italic">essa proposta</span>
          </h2>
          <p className="font-body text-carvao/60 text-lg leading-relaxed">
            Para construir uma solução relevante, precisamos entender as dificuldades reais
            enfrentadas pelos cordelistas e pelo ecossistema cultural em que estão inseridos.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {challenges.map((challenge, i) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={challenge.number}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative"
              >
                <div
                  className="relative overflow-hidden rounded-sm border-2 border-carvao/10 hover:border-carvao/30 transition-all duration-300 bg-creme shadow-sm hover:shadow-md"
                >
                  {/* Top colored band */}
                  <div className="h-2" style={{ background: challenge.bgColor }} />

                  <div className="p-8">
                    {/* Number + Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="font-display font-black text-6xl leading-none"
                        style={{ color: `${challenge.bgColor}18` }}
                        aria-hidden="true"
                      >
                        {challenge.number}
                      </span>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: `${challenge.bgColor}15` }}
                      >
                        <Icon size={20} style={{ color: challenge.bgColor }} />
                      </div>
                    </div>

                    <h3
                      className="font-display font-bold text-2xl text-carvao mb-4 -mt-6"
                    >
                      {challenge.title}
                    </h3>

                    <p className="font-body text-carvao/65 text-sm leading-relaxed mb-6">
                      {challenge.description}
                    </p>

                    {/* Aspects list */}
                    <ul className="space-y-2">
                      {challenge.aspects.map((aspect) => (
                        <li key={aspect} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: challenge.bgColor }}
                          />
                          <span className="font-body text-xs text-carvao/60">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: challenge.bgColor }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
