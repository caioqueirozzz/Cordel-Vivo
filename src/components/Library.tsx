import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { X, Heart, Star, ExternalLink, Eye } from 'lucide-react'

type Book = {
  id: number
  title: string
  author: string
  city: string
  year: string
  pages: number
  theme: string
  synopsis: string
  cover: { bg: string; accent: string; symbol: string }
}

const books: Book[] = [
  {
    id: 1,
    title: 'A Chegada do Inverno',
    author: '[Demonstrativo]',
    city: 'Petrolina, PE',
    year: '2022',
    pages: 16,
    theme: 'Natureza',
    synopsis: 'Versos que celebram a chegada das chuvas no sertão, com toda a esperança que o verde traz à Caatinga.',
    cover: { bg: '#892E2B', accent: '#D6A34A', symbol: '☁' },
  },
  {
    id: 2,
    title: 'O Rio São Francisco',
    author: '[Demonstrativo]',
    city: 'Juazeiro, BA',
    year: '2020',
    pages: 24,
    theme: 'Território',
    synopsis: 'Uma ode ao Velho Chico, o rio que atravessa culturas, histórias e vidas no coração do Nordeste.',
    cover: { bg: '#78513B', accent: '#F3E5C8', symbol: '〜' },
  },
  {
    id: 3,
    title: 'A Cantadora e o Vento',
    author: '[Demonstrativo]',
    city: 'Mossoró, RN',
    year: '2021',
    pages: 32,
    theme: 'Feminino',
    synopsis: 'A história de uma cantora popular que desafia os limites do seu tempo para fazer sua voz ser ouvida.',
    cover: { bg: '#B65232', accent: '#FFF7E8', symbol: '♪' },
  },
  {
    id: 4,
    title: 'Feira de Caruaru',
    author: '[Demonstrativo]',
    city: 'Caruaru, PE',
    year: '2019',
    pages: 16,
    theme: 'Cultura',
    synopsis: 'A maior feira do Nordeste em versos: cores, cheiros, sabores e a vivacidade do comércio popular.',
    cover: { bg: '#D6A34A', accent: '#211A17', symbol: '★' },
  },
  {
    id: 5,
    title: 'Lampião no Sertão',
    author: '[Demonstrativo]',
    city: 'Serra Talhada, PE',
    year: '2018',
    pages: 24,
    theme: 'História',
    synopsis: 'Uma releitura poética e humanizada da figura histórica do cangaço no imaginário nordestino.',
    cover: { bg: '#211A17', accent: '#B65232', symbol: '⊛' },
  },
  {
    id: 6,
    title: 'Mandacaru Florido',
    author: '[Demonstrativo]',
    city: 'Sobral, CE',
    year: '2023',
    pages: 16,
    theme: 'Esperança',
    synopsis: 'Quando o mandacaru floresce no período de seca, ele nos ensina sobre resistência e renovação.',
    cover: { bg: '#B65232', accent: '#D6A34A', symbol: '✦' },
  },
]

function BookCard({ book, onOpen }: { book: Book; onOpen: (b: Book) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => onOpen(book)}
    >
      {/* Cover */}
      <div
        className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 mb-3"
        style={{ background: book.cover.bg }}
      >
        {/* Woodcut texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.3) 0, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 6px)',
          }}
        />

        {/* Cover design */}
        <div className="absolute inset-0 flex flex-col p-3">
          {/* Top border */}
          <div className="border-t-2 border-b pb-1 mb-2" style={{ borderColor: `${book.cover.accent}50` }}>
            <p className="font-accent text-xs tracking-widest" style={{ color: book.cover.accent }}>
              CORDEL VIVO
            </p>
          </div>

          {/* Symbol */}
          <div
            className="flex-1 flex items-center justify-center text-5xl font-display"
            style={{ color: book.cover.accent, opacity: 0.3 }}
            aria-hidden="true"
          >
            {book.cover.symbol}
          </div>

          {/* Title */}
          <div className="border-t pt-2" style={{ borderColor: `${book.cover.accent}30` }}>
            <p className="font-display font-bold text-xs leading-tight" style={{ color: book.cover.accent }}>
              {book.title}
            </p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-carvao/0 group-hover:bg-carvao/30 transition-all duration-300 flex items-center justify-center">
          <Eye
            size={24}
            className="text-papel opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Theme badge */}
        <span
          className="absolute top-2 right-2 font-accent text-xs px-1.5 py-0.5 rounded"
          style={{ background: book.cover.accent, color: book.cover.bg, fontSize: '0.6rem' }}
        >
          {book.theme}
        </span>
      </div>

      <p className="font-display font-bold text-sm text-carvao leading-tight mb-0.5 group-hover:text-terracota transition-colors">
        {book.title}
      </p>
      <p className="font-accent text-xs text-carvao/40">{book.city} · {book.year}</p>
    </motion.div>
  )
}

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carvao/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-creme rounded-sm shadow-2xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top band */}
        <div className="h-3" style={{ background: book.cover.bg }} />

        <div className="p-6">
          <div className="flex items-start gap-4 mb-5">
            {/* Mini cover */}
            <div
              className="w-16 h-20 rounded-sm flex-shrink-0 flex items-center justify-center text-2xl"
              style={{ background: book.cover.bg, color: book.cover.accent }}
              aria-hidden="true"
            >
              {book.cover.symbol}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-carvao leading-tight">
                    {book.title}
                  </h3>
                  <p className="font-accent text-xs text-carvao/50 mt-0.5">
                    {book.author} · {book.city} · {book.year}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded hover:bg-carvao/10 transition-colors ml-3"
                  aria-label="Fechar"
                >
                  <X size={16} className="text-carvao/60" />
                </button>
              </div>
              <div className="flex gap-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#D6A34A" className="text-ocre" />
                ))}
                <span className="font-accent text-xs text-carvao/40 ml-1">4.8</span>
              </div>
            </div>
          </div>

          <p className="font-body text-sm text-carvao/70 leading-relaxed mb-6">
            {book.synopsis}
          </p>

          <div className="flex gap-2 text-xs font-accent text-carvao/40 mb-5">
            <span className="bg-carvao/[0.07] px-2 py-1 rounded">{book.pages} páginas</span>
            <span className="bg-carvao/[0.07] px-2 py-1 rounded">{book.theme}</span>
            <span className="bg-carvao/[0.07] px-2 py-1 rounded">Literatura de Cordel</span>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-carvao text-papel py-2.5 rounded-sm text-sm font-body hover:bg-terracota transition-colors">
              <ExternalLink size={13} />
              Ler obra
            </button>
            <button className="flex items-center justify-center gap-2 border border-carvao/20 text-carvao px-4 py-2.5 rounded-sm text-sm hover:bg-carvao/5 transition-colors">
              <Heart size={13} />
              Apoiar
            </button>
          </div>
          <p className="text-center font-accent text-xs text-carvao/25 mt-3">
            Demo ilustrativa — obra fictícia
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Library() {
  const [selected, setSelected] = useState<Book | null>(null)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()

  return (
    <section id="biblioteca" className="bg-papel py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
            Biblioteca Digital
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carvao leading-tight mb-6">
            Um acervo{' '}
            <span className="text-terracota italic">vivo, dinâmico e acessível</span>
          </h2>
          <p className="font-body text-carvao/65 text-lg leading-relaxed">
            Explore obras, leia textos, veja imagens originais e acesse os perfis dos autores.
            Cada obra é uma janela para a cultura nordestina. Clique nos folhetos para ver detalhes.
          </p>
        </motion.div>

        {/* Books grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-8"
        >
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 25 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <BookCard book={book} onOpen={setSelected} />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center font-accent text-xs text-carvao/30 tracking-wider mb-16">
          * Acervo demonstrativo. Obras e autores fictícios para ilustração do conceito.
        </p>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            'Leitura de textos e visualização de imagens originais',
            'Comentários e avaliações da comunidade',
            'Destaques semanais e curadoria especializada',
            'Busca inteligente por linguagem natural',
            'Possibilidade de apoiar diretamente os autores',
            'Encomenda de folhetos físicos quando disponíveis',
          ].map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 flex-shrink-0" />
              <span className="font-body text-sm text-carvao/70">{feat}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Book modal */}
      <AnimatePresence>
        {selected && <BookModal book={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
