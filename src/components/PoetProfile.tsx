import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Book, Heart, ShoppingBag, ExternalLink } from 'lucide-react'
import { WoodcutFrame } from './XilogravuraElements'

const demoWorks = [
  { title: 'A Chegada do Inverno no Sertão', year: '2021', pages: 16 },
  { title: 'O Cangaceiro e a Lua Cheia', year: '2020', pages: 24 },
  { title: 'Histórias do Agreste', year: '2019', pages: 32 },
  { title: 'A Saudade da Caatinga', year: '2023', pages: 16 },
]

export function PoetProfile() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: mockupRef, isInView: mockupInView } = useScrollAnimation(0.1)

  return (
    <section id="perfil" className="bg-papel py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative bg element */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 opacity-[0.04]"
        style={{
          background: 'linear-gradient(to right, #B65232, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Description */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
              O Cordelista como Protagonista
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-carvao leading-tight mb-6">
              Cada artista,{' '}
              <span className="text-terracota italic">seu próprio espaço</span>
            </h2>
            <p className="font-body text-carvao/65 text-base leading-relaxed mb-6">
              Na plataforma <strong>Cordel Vivo</strong>, cada cordelista terá sua própria página autoral —
              um espaço completo para contar sua história, apresentar suas obras e construir
              sua presença digital com autonomia total.
            </p>
            <p className="font-body text-carvao/65 text-base leading-relaxed mb-8">
              O artista não será apenas um nome associado a uma obra. Ele terá um espaço próprio
              para compartilhar sua trajetória, personalizar sua página e conectar-se com leitores,
              educadores e colecionadores.
            </p>

            <div className="space-y-3">
              {[
                'Foto e apresentação personalizada',
                'Biografia e trajetória cultural',
                'Galeria de obras publicadas',
                'Links de contato e redes sociais',
                'Formas de apoio financeiro',
                'Encomenda de folhetos físicos',
                'Personalização da página pelo próprio artista',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracota flex-shrink-0" />
                  <span className="font-body text-sm text-carvao/70">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right: Profile Mockup */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, y: 40 }}
            animate={mockupInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <WoodcutFrame>
              {/* Browser chrome */}
              <div className="bg-carvao px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-vermelho/60" />
                  <div className="w-3 h-3 rounded-full bg-ocre/60" />
                  <div className="w-3 h-3 rounded-full bg-ocre/30" />
                </div>
                <div className="flex-1 bg-papel/10 rounded-sm px-3 py-1 text-xs font-accent text-papel/40 tracking-wider text-center">
                  cordelvivo.com/artistas/maria-joana-santos
                </div>
              </div>

              {/* Profile content */}
              <div className="bg-creme overflow-hidden">
                {/* Avatar */}
                <div className="px-5 pb-4 pt-5">
                  <div className="flex items-end gap-4 mb-4">
                    <div className="w-20 h-20 rounded-sm border-4 border-creme bg-carvao flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {/* Woodcut portrait */}
                      <svg viewBox="0 0 80 80" width="80" height="80" aria-label="Foto de perfil">
                        <rect width="80" height="80" fill="#211A17" />
                        <ellipse cx="40" cy="28" rx="18" ry="20" fill="#D6A34A" opacity="0.85" />
                        <ellipse cx="40" cy="70" rx="28" ry="22" fill="#78513B" opacity="0.85" />
                        <ellipse cx="40" cy="58" rx="24" ry="18" fill="#D6A34A" opacity="0.6" />
                        <path d="M28 40 Q40 55 52 40" stroke="#B65232" strokeWidth="2" fill="none" />
                        <circle cx="33" cy="24" r="3" fill="#211A17" />
                        <circle cx="47" cy="24" r="3" fill="#211A17" />
                        {/* Hair */}
                        <path d="M22 22 Q30 10 40 14 Q50 10 58 22 Q54 14 40 12 Q26 14 22 22Z" fill="#211A17" />
                      </svg>
                    </div>
                    <div className="mb-2">
                      <h3 className="font-display font-bold text-xl text-carvao leading-tight">
                        Maria Joana Santos
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-madeira/70 font-accent mt-0.5">
                        <MapPin size={10} />
                        <span>Caruaru, PE</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-xs text-carvao/65 leading-relaxed mb-4">
                    Cordelista há mais de 20 anos, nascida no agreste pernambucano. Escreve sobre
                    o cotidiano do sertão, a força das mulheres nordestinas e a saudade da terra.
                    Autora de mais de 30 folhetos publicados e membro da Academia Brasileira de
                    Literatura de Cordel.
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-4 mb-4 border-t border-b border-carvao/10 py-3">
                    <div className="text-center">
                      <p className="font-display font-bold text-xl text-carvao">34</p>
                      <p className="font-accent text-xs text-carvao/45">obras</p>
                    </div>
                    <div className="w-px bg-carvao/10" />
                    <div className="text-center">
                      <p className="font-display font-bold text-xl text-carvao">1.2k</p>
                      <p className="font-accent text-xs text-carvao/45">leitores</p>
                    </div>
                    <div className="w-px bg-carvao/10" />
                    <div className="text-center">
                      <p className="font-display font-bold text-xl text-carvao">20+</p>
                      <p className="font-accent text-xs text-carvao/45">anos</p>
                    </div>
                  </div>

                  {/* Works */}
                  <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-2 flex items-center gap-1">
                    <Book size={10} />
                    Obras publicadas
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {demoWorks.map((work) => (
                      <div
                        key={work.title}
                        className="flex items-center justify-between bg-papel/60 rounded-sm px-3 py-2 hover:bg-papel transition-colors cursor-pointer group"
                      >
                        <span className="font-body text-xs text-carvao/80 group-hover:text-carvao">
                          {work.title}
                        </span>
                        <span className="font-accent text-xs text-carvao/35 ml-2 flex-shrink-0">
                          {work.year}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-terracota text-creme font-body text-xs font-medium py-2 rounded-sm hover:bg-vermelho transition-colors">
                      <Heart size={11} />
                      Apoiar
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-carvao/10 text-carvao font-body text-xs py-2 rounded-sm hover:bg-carvao/20 transition-colors">
                      <ShoppingBag size={11} />
                      Encomendar
                    </button>
                    <button className="px-3 flex items-center justify-center bg-carvao/10 text-carvao rounded-sm hover:bg-carvao/20 transition-colors">
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </WoodcutFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
