import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Search, Sparkles, BookOpen, User } from 'lucide-react'

const presetQueries = [
  'Quero um cordel sobre a saudade de quem precisou deixar o sertão.',
  'Quero uma história sobre coragem, resistência e esperança no Nordeste.',
  'Quero conhecer cordéis de autoras nordestinas sobre identidade cultural.',
  'Procuro um cordel com linguagem acessível sobre tradições e costumes populares.',
]

type DemoResult = {
  title: string
  author: string
  city: string
  year: string
  desc: string
  theme: string
  match: string
}

const demoResults: Record<string, DemoResult[]> = {
  '0': [
    {
      title: 'A Partida do Retirante',
      author: '[Autor demonstrativo — dado fictício]',
      city: 'Mossoró, RN',
      year: '2018',
      desc: 'Versos sobre a dor da migração forçada e a saudade da terra natal.',
      theme: 'Migração',
      match: 'Aborda diretamente o tema da partida e da saudade do sertão.',
    },
    {
      title: 'O Sertão que Levo no Peito',
      author: '[Autor demonstrativo — dado fictício]',
      city: 'Campina Grande, PB',
      year: '2020',
      desc: 'Uma história lírica sobre pertencimento e memória afetiva da terra.',
      theme: 'Identidade',
      match: 'Forte conexão com o tema de saudade e pertencimento regional.',
    },
  ],
  '1': [
    {
      title: 'A Mulher do Cangaço',
      author: '[Autora demonstrativa — dado fictício]',
      city: 'Juazeiro do Norte, CE',
      year: '2017',
      desc: 'Narrativa épica sobre coragem e resistência em tempos difíceis.',
      theme: 'Resistência',
      match: 'Temas centrais de coragem, resistência e esperança.',
    },
    {
      title: 'Vento do Nordeste',
      author: '[Autor demonstrativo — dado fictício]',
      city: 'Recife, PE',
      year: '2021',
      desc: 'Poema que celebra a força do povo nordestino diante das adversidades.',
      theme: 'Esperança',
      match: 'Enfoca diretamente a esperança como tema central.',
    },
  ],
  '2': [
    {
      title: 'Vozes do Agreste',
      author: '[Autora demonstrativa — dado fictício]',
      city: 'Caruaru, PE',
      year: '2022',
      desc: 'Coletânea de versos sobre identidade feminina no sertão nordestino.',
      theme: 'Identidade Feminina',
      match: 'Autora nordestina com foco em identidade cultural feminina.',
    },
    {
      title: 'Maria, Rainha do Cordel',
      author: '[Autora demonstrativa — dado fictício]',
      city: 'Feira de Santana, BA',
      year: '2019',
      desc: 'Uma celebração da presença feminina na literatura popular.',
      theme: 'Protagonismo',
      match: 'Reafirma o papel das mulheres na literatura de cordel.',
    },
  ],
  '3': [
    {
      title: 'As Festas do Meu Sertão',
      author: '[Autor demonstrativo — dado fictício]',
      city: 'Sobral, CE',
      year: '2016',
      desc: 'Um cordel leve e acessível sobre festas populares e tradições nordestinas.',
      theme: 'Tradições',
      match: 'Linguagem simples e direta, ideal para leitura acessível.',
    },
    {
      title: 'O São João de Antigamente',
      author: '[Autor demonstrativo — dado fictício]',
      city: 'Campina Grande, PB',
      year: '2023',
      desc: 'Memórias afetivas das festas juninas e dos costumes do interior.',
      theme: 'Costumes',
      match: 'Aborda costumes populares com linguagem lúdica e regional.',
    },
  ],
}

export function SmartSearch() {
  const [query, setQuery] = useState('')
  const [activePreset, setActivePreset] = useState<number | null>(null)
  const [results, setResults] = useState<DemoResult[] | null>(null)
  const [searching, setSearching] = useState(false)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()

  function handleSearch(q: string, presetIdx?: number) {
    setQuery(q)
    setSearching(true)
    setResults(null)
    if (presetIdx !== undefined) setActivePreset(presetIdx)

    setTimeout(() => {
      const key = presetIdx !== undefined ? String(presetIdx) : '0'
      setResults(demoResults[key] ?? demoResults['0'])
      setSearching(false)
    }, 900)
  }

  return (
    <section id="busca" className="bg-carvao py-24 lg:py-36 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #F3E5C8 0, #F3E5C8 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-accent text-ocre/70 text-sm tracking-widest uppercase mb-4">
            Busca Inteligente com IA
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-papel leading-tight mb-6">
            Não sabe o título?{' '}
            <span className="text-ocre italic">Conte o que procura.</span>
          </h2>
          <p className="font-body text-papel/65 text-lg leading-relaxed">
            A busca inteligente encontra cordéis por significado e intenção — não apenas por
            palavras exatas. Descreva o que procura e a IA interpreta sua intenção para recomendar
            obras relacionadas.
          </p>
        </motion.div>

        {/* Search interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-papel/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && query.trim() && handleSearch(query.trim())}
              placeholder="Me conta o que você tá procurando, meu irmão..."
              className="w-full bg-papel/10 border border-papel/20 text-papel placeholder-papel/35 font-body text-base pl-12 pr-24 py-4 rounded-sm focus:outline-none focus:border-ocre/50 focus:bg-papel/15 transition-all"
            />
            <button
              onClick={() => query.trim() && handleSearch(query.trim())}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-terracota text-papel px-4 py-2 rounded-sm text-sm font-body hover:bg-vermelho transition-colors flex items-center gap-1.5"
            >
              <Sparkles size={13} />
              Buscar
            </button>
          </div>

          {/* Preset queries */}
          <div className="mt-4 flex flex-wrap gap-2">
            {presetQueries.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSearch(q, i)}
                className={`font-body text-xs px-3 py-1.5 rounded-full border transition-all ${
                  activePreset === i
                    ? 'bg-ocre text-carvao border-ocre'
                    : 'bg-transparent border-papel/20 text-papel/50 hover:border-ocre/50 hover:text-papel/80'
                }`}
              >
                {q.length > 50 ? q.slice(0, 50) + '…' : q}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {searching && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3 py-12"
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-ocre"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  />
                ))}
              </div>
              <p className="font-accent text-xs text-papel/40 tracking-wider">
                Interpretando sua busca com IA…
              </p>
            </motion.div>
          )}

          {results && !searching && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-ocre" />
                <p className="font-accent text-xs text-ocre/70 tracking-wider">
                  {results.length} obras relacionadas encontradas
                </p>
                <span className="ml-auto font-accent text-xs text-papel/25 tracking-wider">
                  Demo — dados fictícios
                </span>
              </div>

              <div className="space-y-4">
                {results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-papel/[0.07] border border-papel/10 rounded-sm p-5 hover:bg-papel/[0.11] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Book cover placeholder */}
                      <div
                        className="w-12 h-16 rounded-sm flex-shrink-0 flex items-center justify-center"
                        style={{ background: i === 0 ? '#892E2B' : '#78513B' }}
                      >
                        <BookOpen size={16} className="text-papel/60" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                          <h3 className="font-display font-bold text-base text-papel">{r.title}</h3>
                          <span className="font-accent text-xs text-ocre/60 bg-ocre/10 px-2 py-0.5 rounded-full flex-shrink-0">
                            {r.theme}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-papel/45 font-accent mb-2">
                          <User size={10} />
                          <span>{r.author}</span>
                          <span>·</span>
                          <span>{r.city}</span>
                          <span>·</span>
                          <span>{r.year}</span>
                        </div>
                        <p className="font-body text-xs text-papel/60 leading-relaxed mb-2">{r.desc}</p>
                        <div className="flex items-start gap-1.5 bg-ocre/10 rounded px-2 py-1.5">
                          <Sparkles size={10} className="text-ocre mt-0.5 flex-shrink-0" />
                          <p className="font-body text-xs text-ocre/80 italic leading-relaxed">
                            <strong>Por que este resultado:</strong> {r.match}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-4 text-center font-accent text-xs text-papel/25 tracking-wider">
                * Resultados demonstrativos. Autores e obras fictícios para ilustração do conceito.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
