import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, BookOpen, Trees, Users, Globe, Leaf, Feather, Heart } from 'lucide-react'

const subjects = [
  { icon: Globe, label: 'História e identidade regional' },
  { icon: Leaf, label: 'Meio ambiente e Caatinga' },
  { icon: BookOpen, label: 'Cultura popular brasileira' },
  { icon: Users, label: 'Migração e desigualdades sociais' },
  { icon: Heart, label: 'Tradições nordestinas' },
  { icon: Feather, label: 'Poesia e literatura' },
  { icon: Heart, label: 'Protagonismo feminino na cultura' },
  { icon: Trees, label: 'Patrimônio cultural imaterial' },
]

const teacherDemo = [
  {
    from: 'teacher' as const,
    text: 'Sou professor do ensino fundamental e quero trabalhar identidade cultural nordestina com meus alunos. Procuro um cordel com linguagem acessível, que permita discutir costumes, tradições e pertencimento regional.',
  },
  {
    from: 'ia' as const,
    text: 'Que proposta linda! Encontrei obras ideais para sua aula. Veja as recomendações:',
  },
]

export function EducationSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: demoRef, isInView: demoInView } = useScrollAnimation(0.1)

  return (
    <section id="educacao" className="bg-creme py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative corner */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.05]"
        style={{ background: 'radial-gradient(circle at bottom right, #D6A34A, transparent)' }}
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
            O Cordel dentro das Escolas
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carvao leading-tight mb-6">
            Valorizar nossa cultura{' '}
            <span className="text-terracota italic">começa por conhecê-la</span>
          </h2>
          <p className="font-body text-carvao/65 text-lg leading-relaxed">
            A mesma busca inteligente que ajuda leitores a encontrar cordéis serve como ferramenta
            para professores descobrirem obras adequadas às suas aulas — com linguagem natural
            e resultados contextualizados para o ambiente educacional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Teacher demo */}
          <motion.div
            ref={demoRef}
            initial={{ opacity: 0, x: -30 }}
            animate={demoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-4">
              Exemplo de uso — Professor
            </p>

            {/* Chat simulation */}
            <div className="bg-carvao rounded-sm overflow-hidden shadow-lg">
              {/* Header */}
              <div className="bg-terracota/90 px-4 py-3 flex items-center gap-3">
                <GraduationCap size={18} className="text-papel" />
                <div>
                  <p className="text-papel text-sm font-medium font-body">Busca Educacional</p>
                  <p className="text-papel/60 text-xs font-accent">cordelvivo.com/busca</p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {teacherDemo.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={demoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.3 }}
                    className={`flex ${msg.from === 'teacher' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-3 text-sm font-body leading-relaxed ${
                        msg.from === 'teacher'
                          ? 'bg-ocre/20 text-papel border border-ocre/20'
                          : 'bg-terracota/80 text-papel'
                      }`}
                    >
                      {msg.from === 'teacher' && (
                        <p className="font-accent text-xs text-ocre/60 mb-1">Professor</p>
                      )}
                      {msg.from === 'ia' && (
                        <p className="font-accent text-xs text-papel/60 mb-1">Cordel Vivo ✦</p>
                      )}
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Demo result cards */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={demoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                  className="space-y-2 mt-1"
                >
                  {[
                    { title: 'As Festas do Meu Sertão', theme: 'Tradições', label: 'Linguagem acessível' },
                    { title: 'Vozes do Agreste', theme: 'Identidade', label: 'Autora nordestina' },
                  ].map((r) => (
                    <div
                      key={r.title}
                      className="bg-papel/10 border border-papel/10 rounded-sm px-3 py-2.5 flex items-center gap-3 hover:bg-papel/15 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-10 bg-terracota/40 rounded-sm flex items-center justify-center flex-shrink-0">
                        <BookOpen size={12} className="text-papel/60" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-papel font-medium">{r.title}</p>
                        <div className="flex gap-2 mt-0.5">
                          <span className="font-accent text-xs text-ocre/70">{r.theme}</span>
                          <span className="font-accent text-xs text-papel/30">·</span>
                          <span className="font-accent text-xs text-papel/40">{r.label}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <p className="px-4 pb-3 font-accent text-xs text-papel/25 text-center">
                Demo ilustrativa — obras fictícias
              </p>
            </div>
          </motion.div>

          {/* Subjects grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={demoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-6">
              Temas abordados em sala de aula
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {subjects.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={demoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="bg-carvao/[0.04] border border-carvao/10 rounded-sm px-3 py-3 flex items-center gap-2.5 hover:bg-carvao/[0.08] transition-colors"
                  >
                    <div className="w-7 h-7 bg-terracota/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={13} className="text-terracota" />
                    </div>
                    <span className="font-body text-xs text-carvao/75 leading-tight">{s.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Key message */}
            <div className="bg-terracota/10 border border-terracota/20 rounded-sm p-6">
              <p className="font-display font-bold text-2xl text-carvao mb-3 leading-tight">
                O cordel como ferramenta pedagógica
              </p>
              <p className="font-body text-sm text-carvao/65 leading-relaxed">
                Ao invés de criar um ambiente escolar separado, a proposta é usar a própria
                plataforma para que professores encontrem obras adequadas — com a mesma busca
                inteligente disponível para todos os usuários. A IA interpreta o contexto
                pedagógico e recomenda obras com linguagem e temáticas adequadas à faixa etária.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
