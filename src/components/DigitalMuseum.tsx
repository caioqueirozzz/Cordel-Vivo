import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { X, ChevronRight } from 'lucide-react'

type Room = {
  id: number
  number: string
  title: string
  subtitle: string
  color: string
  accent: string
  symbol: string
  content: {
    heading: string
    text: string
    highlights: string[]
  }
}

const rooms: Room[] = [
  {
    id: 1,
    number: 'I',
    title: 'As Raízes da Tradição',
    subtitle: 'Formação histórica do cordel',
    color: '#211A17',
    accent: '#D6A34A',
    symbol: '◎',
    content: {
      heading: 'Da oralidade ao papel',
      text: 'A literatura de cordel chegou ao Brasil com as tradições de poesia popular da Península Ibérica, especialmente de Portugal. No solo nordestino, encontrou a oralidade indígena, a cultura africana e as experiências do povo mestiço para se tornar uma expressão completamente brasileira.',
      highlights: ['Influências ibéricas e africanas', 'Oralidade como fundação', 'Práticas de impressão artesanal'],
    },
  },
  {
    id: 2,
    number: 'II',
    title: 'Versos nas Feiras',
    subtitle: 'Circulação e cultura popular',
    color: '#892E2B',
    accent: '#FFF7E8',
    symbol: '⊕',
    content: {
      heading: 'A feira como palco',
      text: 'Os folhetos de cordel encontraram nas feiras do Nordeste seu principal espaço de circulação. Pendurados em cordões entre as barracas, eram vendidos e muitas vezes recitados pelos próprios poetas, que transformavam o ato de venda em uma verdadeira performance cultural.',
      highlights: ['Feiras como espaços culturais', 'Relação direta poeta-leitor', 'Oralidade e performance'],
    },
  },
  {
    id: 3,
    number: 'III',
    title: 'Mestres da Palavra',
    subtitle: 'Cordelistas e obras marcantes',
    color: '#78513B',
    accent: '#D6A34A',
    symbol: '✦',
    content: {
      heading: 'Vozes que moldaram a tradição',
      text: 'Ao longo de gerações, grandes cordelistas construíram um repertório imenso de obras que narram a vida nordestina, eventos históricos, histórias de heróis e vilões, contos morais e sátiras políticas. Esses mestres estabeleceram as estruturas e tradições que ainda guiam a produção atual.',
      highlights: ['Tradições poéticas da sextilha', 'Temas do universo nordestino', 'Continuidade da prática'],
    },
  },
  {
    id: 4,
    number: 'IV',
    title: 'Vozes que Romperam Barreiras',
    subtitle: 'Mulheres cordelistas',
    color: '#B65232',
    accent: '#FFF7E8',
    symbol: '◆',
    content: {
      heading: 'Presença feminina na tradição',
      text: 'Ao longo da história do cordel, mulheres cordelistas precisaram superar barreiras de reconhecimento para ter suas obras valorizadas. Hoje, há um movimento crescente de visibilidade para essas vozes fundamentais — que sempre estiveram presentes, mesmo que nem sempre reconhecidas.',
      highlights: ['Presença histórica pouco documentada', 'Movimento contemporâneo de visibilidade', 'Novas gerações de autoras'],
    },
  },
  {
    id: 5,
    number: 'V',
    title: 'Arte em Madeira e Papel',
    subtitle: 'Xilogravura, capas e impressão',
    color: '#D6A34A',
    accent: '#211A17',
    symbol: '❋',
    content: {
      heading: 'A xilogravura como identidade visual',
      text: 'As capas dos folhetos de cordel são obras de arte em si mesmas. Gravadas em madeira por artistas populares, as xilogravuras criam uma identidade visual única e inconfundível para a literatura de cordel — unindo texto e imagem em uma composição artesanal de grande força expressiva.',
      highlights: ['Técnica de gravura em madeira', 'Identidade visual do cordel', 'Arte popular e impressão artesanal'],
    },
  },
  {
    id: 6,
    number: 'VI',
    title: 'O Cordel Continua Vivo',
    subtitle: 'Novas gerações e o ambiente digital',
    color: '#B65232',
    accent: '#D6A34A',
    symbol: '◉',
    content: {
      heading: 'Tradição e contemporaneidade',
      text: 'O cordel não é uma manifestação do passado. Novas gerações de cordelistas produzem obras que dialogam com temas contemporâneos — meio ambiente, tecnologia, questões sociais e culturais. A presença no ambiente digital representa um novo capítulo dessa tradição viva.',
      highlights: ['Temas contemporâneos em versos', 'Novas gerações de cordelistas', 'Presença digital e novos públicos'],
    },
  },
]

function RoomDoor({
  room,
  index,
  onClick,
  isActive,
}: {
  room: Room
  index: number
  onClick: () => void
  isActive: boolean
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="relative flex-shrink-0 w-32 sm:w-36 group focus:outline-none"
      aria-label={`Abrir sala ${room.number}: ${room.title}`}
    >
      {/* Door frame */}
      <div
        className={`relative rounded-t-full border-4 transition-all duration-300 overflow-hidden ${
          isActive ? 'border-ocre shadow-lg scale-105' : 'border-carvao/30 hover:border-ocre/60'
        }`}
        style={{ aspectRatio: '2/3', background: room.color }}
      >
        {/* Door panel decoration */}
        <div className="absolute inset-3 border border-current opacity-20 rounded-t-full" />
        <div className="absolute inset-6 border border-current opacity-10 rounded-t-full" />

        {/* Room symbol */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="text-2xl" style={{ color: room.accent, opacity: 0.7 }}>
            {room.symbol}
          </span>
          <span
            className="font-display font-black text-2xl"
            style={{ color: room.accent, opacity: 0.5 }}
          >
            {room.number}
          </span>
        </div>

        {/* Door knob */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
          style={{ borderColor: room.accent, opacity: 0.5 }}
        />

        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="activeRoom"
            className="absolute inset-0 border-2 border-ocre rounded-t-full"
          />
        )}
      </div>

      {/* Floor */}
      <div
        className="h-2 rounded-b-sm"
        style={{ background: room.color, opacity: 0.6 }}
      />

      {/* Room label */}
      <div className="mt-2 text-center">
        <p className="font-accent text-xs text-papel leading-tight line-clamp-2">
          {room.title}
        </p>
      </div>
    </motion.button>
  )
}

function RoomContent({ room, onClose }: { room: Room; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="mt-8 mx-auto max-w-3xl"
    >
      <div
        className="rounded-sm overflow-hidden shadow-2xl"
        style={{ background: room.color }}
      >
        {/* Room header */}
        <div className="px-6 py-5 flex items-start justify-between border-b border-white/10">
          <div>
            <p className="font-accent text-xs tracking-widest uppercase mb-1" style={{ color: room.accent, opacity: 0.6 }}>
              Sala {room.number} · {room.subtitle}
            </p>
            <h3 className="font-display font-black text-2xl sm:text-3xl" style={{ color: room.accent }}>
              {room.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-white/10 transition-colors flex-shrink-0 ml-4"
            style={{ color: room.accent }}
            aria-label="Fechar sala"
          >
            <X size={18} />
          </button>
        </div>

        {/* Room content */}
        <div className="px-6 py-6">
          <h4 className="font-display font-bold text-lg mb-4" style={{ color: room.accent }}>
            {room.content.heading}
          </h4>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: `${room.accent}cc` }}>
            {room.content.text}
          </p>

          <div className="space-y-2.5">
            {room.content.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <ChevronRight size={14} style={{ color: room.accent, opacity: 0.6 }} />
                <span className="font-body text-sm" style={{ color: `${room.accent}99` }}>
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-4">
          <p className="font-accent text-xs opacity-25 tracking-wider" style={{ color: room.accent }}>
            Conteúdo demonstrativo — versão completa disponível na plataforma
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function DigitalMuseum() {
  const [activeRoom, setActiveRoom] = useState<number | null>(null)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()

  const selected = rooms.find((r) => r.id === activeRoom) ?? null

  return (
    <section id="museu" className="bg-carvao py-24 lg:py-36 relative overflow-hidden">
      {/* Corridor perspective lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[0.2, 0.35, 0.5, 0.65, 0.8].map((y, i) => (
          <line
            key={i}
            x1="720"
            y1="300"
            x2={i % 2 === 0 ? 0 : 1440}
            y2={y * 600}
            stroke="#F3E5C8"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-accent text-ocre/70 text-sm tracking-widest uppercase mb-4">
            Museu Digital Interativo
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
            Um corredor de{' '}
            <span className="text-ocre italic">memórias e histórias</span>
          </h2>
          <p className="font-body text-papel/65 text-lg leading-relaxed">
            Cada sala conta uma parte da história do cordel — da formação histórica às vozes contemporâneas.
            Clique em uma porta para explorar.
          </p>
        </motion.div>

        {/* Corridor */}
        <div className="relative">
          {/* Floor line */}
          <div className="absolute bottom-14 left-0 right-0 h-px bg-ocre/10" aria-hidden="true" />

          {/* Rooms */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth">
            {rooms.map((room, i) => (
              <RoomDoor
                key={room.id}
                room={room}
                index={i}
                isActive={activeRoom === room.id}
                onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)}
              />
            ))}
          </div>

          {/* Ceiling line */}
          <div className="absolute -top-4 left-0 right-0 h-px bg-ocre/10" aria-hidden="true" />
        </div>

        {/* Room content panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <RoomContent
              key={selected.id}
              room={selected}
              onClose={() => setActiveRoom(null)}
            />
          )}
        </AnimatePresence>

        {!activeRoom && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center font-accent text-xs text-papel/25 tracking-wider mt-8"
          >
            Selecione uma porta para explorar a sala
          </motion.p>
        )}
      </div>
    </section>
  )
}
