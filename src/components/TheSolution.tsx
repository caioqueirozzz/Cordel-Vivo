import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Library, User, Wand2, MessageCircle, Search, Landmark, GraduationCap, Star } from 'lucide-react'

const features = [
  {
    icon: Library,
    title: 'Biblioteca Digital',
    desc: 'Acervo aberto e organizado de obras de cordel, com leitura, imagens e busca inteligente.',
    color: '#B65232',
  },
  {
    icon: User,
    title: 'Perfis de Cordelistas',
    desc: 'Cada autor tem sua própria página: biografia, obras, contato e formas de apoio.',
    color: '#892E2B',
  },
  {
    icon: Wand2,
    title: 'Publicação com IA',
    desc: 'Digitalização assistida por IA preserva a voz original do autor. Simples e acessível.',
    color: '#D6A34A',
  },
  {
    icon: MessageCircle,
    title: 'Integração WhatsApp',
    desc: 'Publicação conversacional pelo WhatsApp, sem necessidade de app adicional.',
    color: '#78513B',
  },
  {
    icon: Search,
    title: 'Busca por Linguagem Natural',
    desc: 'Encontre obras por intenção e significado, não apenas por palavras exatas.',
    color: '#B65232',
  },
  {
    icon: Landmark,
    title: 'Museu Digital Interativo',
    desc: 'Salas temáticas contando a história do cordel da tradição oral ao presente.',
    color: '#892E2B',
  },
  {
    icon: GraduationCap,
    title: 'Aplicação Educacional',
    desc: 'Professores encontram obras adequadas para suas aulas usando linguagem natural.',
    color: '#D6A34A',
  },
  {
    icon: Star,
    title: 'Destaques e Curadoria',
    desc: 'Visibilidade para autoras, novos talentos e obras de grupos historicamente invisibilizados.',
    color: '#78513B',
  },
]

export function TheSolution() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: featRef, isInView: featInView } = useScrollAnimation()
  const { ref: diagRef, isInView: diagInView } = useScrollAnimation()

  return (
    <section id="solucao" className="relative bg-carvao overflow-hidden py-24 lg:py-36">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #F3E5C8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-accent text-ocre/70 text-sm tracking-widest uppercase mb-4">
            A Solução
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
            Uma nova forma de{' '}
            <span className="text-ocre italic">preservar, descobrir</span>
            {' '}e compartilhar o cordel
          </h2>
          <p className="font-body text-papel/65 text-lg leading-relaxed">
            A plataforma <strong className="text-ocre">Cordel Vivo</strong> é um ecossistema digital
            que conecta cordelistas, leitores, pesquisadores e educadores — com a inteligência artificial
            como elemento integrador invisível, a serviço da cultura.
          </p>
        </motion.div>

        {/* Ecosystem diagram */}
        <motion.div
          ref={diagRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={diagInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-square max-h-[480px]">
            {/* SVG ecosystem diagram */}
            <svg viewBox="0 0 480 480" className="w-full h-full" aria-label="Diagrama do ecossistema Cordel Vivo">
              {/* Central circle - IA */}
              <circle cx="240" cy="240" r="70" fill="#B65232" opacity="0.9" />
              <circle cx="240" cy="240" r="62" fill="none" stroke="#D6A34A" strokeWidth="2" strokeDasharray="8 4" />
              <text x="240" y="232" textAnchor="middle" fill="#FFF7E8" fontSize="13" fontFamily="'Special Elite', monospace" fontWeight="bold">Inteligência</text>
              <text x="240" y="250" textAnchor="middle" fill="#FFF7E8" fontSize="13" fontFamily="'Special Elite', monospace" fontWeight="bold">Artificial</text>
              <text x="240" y="268" textAnchor="middle" fill="#D6A34A" fontSize="10" fontFamily="'Special Elite', monospace">Central</text>

              {/* Connecting lines */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = ((angle - 90) * Math.PI) / 180
                const x1 = 240 + Math.cos(rad) * 72
                const y1 = 240 + Math.sin(rad) * 72
                const x2 = 240 + Math.cos(rad) * 148
                const y2 = 240 + Math.sin(rad) * 148
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#D6A34A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                )
              })}

              {/* Orbit nodes */}
              {[
                { angle: 0, label: 'Biblioteca', sub: 'Digital', fill: '#892E2B' },
                { angle: 60, label: 'Perfis de', sub: 'Cordelistas', fill: '#78513B' },
                { angle: 120, label: 'Museu', sub: 'Interativo', fill: '#892E2B' },
                { angle: 180, label: 'WhatsApp', sub: 'Publicação', fill: '#78513B' },
                { angle: 240, label: 'Busca', sub: 'Semântica', fill: '#892E2B' },
                { angle: 300, label: 'Educação', sub: '& Curadoria', fill: '#78513B' },
              ].map(({ angle, label, sub, fill }) => {
                const rad = ((angle - 90) * Math.PI) / 180
                const cx = 240 + Math.cos(rad) * 175
                const cy = 240 + Math.sin(rad) * 175
                return (
                  <g key={angle}>
                    <circle cx={cx} cy={cy} r="42" fill={fill} opacity="0.85" />
                    <circle cx={cx} cy={cy} r="36" fill="none" stroke="#F3E5C8" strokeWidth="1" opacity="0.25" />
                    <text x={cx} y={cy - 4} textAnchor="middle" fill="#FFF7E8" fontSize="9.5" fontFamily="'Lora', serif" fontWeight="bold">{label}</text>
                    <text x={cx} y={cy + 10} textAnchor="middle" fill="#D6A34A" fontSize="8.5" fontFamily="'Lora', serif">{sub}</text>
                  </g>
                )
              })}

              {/* Outer decorative ring */}
              <circle cx="240" cy="240" r="228" fill="none" stroke="#F3E5C8" strokeWidth="1" opacity="0.08" />
            </svg>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div ref={featRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-papel/[0.06] border border-papel/10 rounded-sm p-5 hover:bg-papel/[0.1] hover:border-papel/20 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `${feat.color}25` }}
                >
                  <Icon size={18} style={{ color: feat.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-papel mb-2 leading-tight">
                  {feat.title}
                </h3>
                <p className="font-body text-xs text-papel/55 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bráulio Bessa quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={featInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center border-l-4 border-ocre/40 pl-6 py-2"
        >
          <p className="font-body text-papel/75 text-base sm:text-lg leading-relaxed italic mb-4">
            "A tecnologia e a internet não vieram para apagar a nossa tradição, mas para dar a ela o maior alto-falante do mundo. O cordel que antes viajava na mala de um caixeiro-viajante, hoje viaja na velocidade de um clique e emociona quem está do outro lado do planeta."
          </p>
          <footer className="font-accent text-ocre/60 text-sm tracking-wider">
            — Bráulio Bessa, poeta e palestrante cearense
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
