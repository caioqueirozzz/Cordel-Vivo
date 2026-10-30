import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Archive, Users, Megaphone, GraduationCap, ShoppingBag, Star } from 'lucide-react'

const impacts = [
  {
    icon: Archive,
    color: '#B65232',
    title: 'Preservação',
    subtitle: 'Cultura viva',
    text: 'Apoiar a digitalização e conservação de obras e memórias culturais que, sem esse suporte, correm risco de se perder com o tempo ou com o desaparecimento de seus autores.',
  },
  {
    icon: Users,
    color: '#892E2B',
    title: 'Inclusão',
    subtitle: 'Barreiras removidas',
    text: 'Facilitar a participação de artistas por ferramentas acessíveis, linguagem simples e processos que não exigem expertise tecnológica — aproximando a cultura digital dos cordelistas.',
  },
  {
    icon: Megaphone,
    color: '#D6A34A',
    title: 'Visibilidade',
    subtitle: 'Vozes amplificadas',
    text: 'Ampliar a descoberta de autores e produções para além dos circuitos já estabelecidos — levando o cordel a novos públicos, incluindo jovens, pesquisadores e o contexto global.',
  },
  {
    icon: GraduationCap,
    color: '#78513B',
    title: 'Educação',
    subtitle: 'Cordel nas escolas',
    text: 'Aproximar professores, estudantes e a literatura de cordel por meio de ferramentas de busca contextualizadas para o ambiente educacional e adequadas às diferentes faixas etárias.',
  },
  {
    icon: ShoppingBag,
    color: '#B65232',
    title: 'Oportunidades',
    subtitle: 'Novos caminhos econômicos',
    text: 'Criar caminhos para contato, encomendas, apoio financeiro e valorização dos cordelistas — tornando possível que mais artistas possam viver de seu trabalho cultural.',
  },
  {
    icon: Star,
    color: '#892E2B',
    title: 'Representatividade',
    subtitle: 'Diversidade de trajetórias',
    text: 'Promover reconhecimento de mulheres e autores com menor visibilidade histórica — garantindo que a diversidade de vozes do cordel seja igualmente valorizada e descoberta.',
  },
]

export function SocialImpact() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation(0.1)

  return (
    <section id="impacto" className="bg-papel py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative bands */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-terracota" />
      <div
        className="absolute top-1 left-0 right-0 h-1"
        style={{
          background: 'repeating-linear-gradient(90deg, #D6A34A 0, #D6A34A 8px, transparent 8px, transparent 16px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
            Impacto Social e Cultural
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carvao leading-tight mb-6">
            Seis eixos de{' '}
            <span className="text-terracota italic">transformação</span>
          </h2>
          <p className="font-body text-carvao/65 text-lg leading-relaxed">
            A plataforma Cordel Vivo foi pensada para gerar impacto em múltiplas dimensões,
            conectando preservação cultural, inclusão digital, acesso educacional e valorização
            dos artistas.
          </p>
        </motion.div>

        {/* Impact grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, i) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative bg-creme border border-carvao/8 rounded-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 inset-y-0 w-1 group-hover:w-1.5 transition-all duration-300"
                  style={{ background: impact.color }}
                />

                <div className="pl-6 pr-5 py-6">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ background: `${impact.color}15` }}
                  >
                    <Icon size={18} style={{ color: impact.color }} />
                  </div>

                  <h3
                    className="font-display font-bold text-2xl mb-0.5"
                    style={{ color: impact.color }}
                  >
                    {impact.title}
                  </h3>
                  <p className="font-accent text-xs text-carvao/40 tracking-wider mb-4">
                    {impact.subtitle}
                  </p>

                  <p className="font-body text-sm text-carvao/65 leading-relaxed mb-5">
                    {impact.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
