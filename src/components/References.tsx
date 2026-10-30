import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink } from 'lucide-react'

type RefItem = {
  category: string
  title: string
  desc: string
  source: string
  url?: string
  pending?: boolean
}

const references: RefItem[] = [
  // Patrimônio Cultural
  {
    category: 'Patrimônio Cultural',
    title: 'Registro da Literatura de Cordel como Patrimônio Cultural do Brasil',
    desc: 'Documento oficial de registro pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), 2018.',
    source: 'IPHAN — Instituto do Patrimônio Histórico e Artístico Nacional',
    url: 'https://www.iphan.gov.br',
  },
  {
    category: 'Patrimônio Cultural',
    title: 'Dossiê do Registro da Literatura de Cordel',
    desc: 'Documento técnico que fundamentou o reconhecimento da literatura de cordel como Patrimônio Cultural Imaterial do Brasil.',
    source: 'IPHAN, 2018',
    url: 'https://bcr.iphan.gov.br/bens-culturais/literatura-de-cordel/',
  },
  {
    category: 'Patrimônio Cultural',
    title: 'A complexidade da classificação de cordéis e xilogravuras',
    desc: 'Estudo sobre os desafios específicos de catalogação e classificação da literatura de cordel e das xilogravuras enquanto manifestações culturais complexas.',
    source: 'Biblionline, UFPB',
    url: 'https://periodicos.ufpb.br/index.php/biblio/article/view/16790',
  },
  // Pesquisa Cultural
  {
    category: 'Pesquisa Cultural',
    title: 'Estudos sobre o acervo e a preservação da literatura de cordel',
    desc: 'Pesquisas e publicações da Fundação Casa de Rui Barbosa sobre o tema.',
    source: 'Fundação Casa de Rui Barbosa',
    url: 'https://www.casaruibarbosa.gov.br',
  },
  {
    category: 'Pesquisa Cultural',
    title: 'Direitos autorais e remuneração dos cordelistas',
    desc: 'Análise das questões de propriedade intelectual e das dificuldades de remuneração enfrentadas pelos poetas cordelistas no contexto da produção e circulação cultural.',
    source: 'Perspectivas em Ciência da Informação — SciELO',
    url: 'https://doi.org/10.1590/0103-37862015000100009',
  },
  {
    category: 'Pesquisa Cultural',
    title: 'Dificuldades concretas de produção e circulação no Rio Grande do Norte',
    desc: 'Levantamento das barreiras práticas enfrentadas por cordelistas do RN no processo de produção, distribuição e circulação de suas obras.',
    source: 'Biblionline, UFPB',
    url: 'https://periodicos.ufpb.br/index.php/biblio/article/view/4905',
  },
  // Literatura e Cultura
  {
    category: 'Literatura e Cultura',
    title: 'O conhecimento dos cordelistas não pode ser substituído por regras simplistas',
    desc: 'Pesquisa que evidencia a profundidade do saber poético dos cordelistas, argumentando contra abordagens reducionistas que desconsideram a complexidade da tradição oral e escrita.',
    source: 'DELTA: Documentação de Estudos em Linguística Teórica e Aplicada, PUC-SP',
    url: 'https://doi.org/10.1590/1981-5794-e12861',
  },
  {
    category: 'Literatura e Cultura',
    title: 'Tese de referência sobre literatura de cordel — UFPB',
    desc: 'Tese especialmente relevante para a fundamentação deste projeto, com pesquisa aprofundada sobre a literatura de cordel no contexto acadêmico brasileiro.',
    source: 'Repositório Institucional da UFPB',
    url: 'https://repositorio.ufpb.br/jspui/handle/123456789/23363',
  },
  // Gênero e Cultura
  {
    category: 'Gênero e Cultura',
    title: 'Falta de reconhecimento de mulheres cordelistas',
    desc: 'Estudo sobre a sub-representação histórica das mulheres na literatura de cordel e os obstáculos ao reconhecimento de sua produção no cenário cultural brasileiro.',
    source: 'Revista Fólio, UESB',
    url: 'https://doi.org/10.22481/folio.v17i1.19286',
  },
  // Educação e Cultura
  {
    category: 'Educação e Cultura',
    title: 'Literatura de cordel como recurso pedagógico — Olhar de Professor',
    desc: 'Artigo publicado na revista Olhar de Professor (UEPG) abordando o uso da literatura de cordel como ferramenta pedagógica no contexto educacional brasileiro.',
    source: 'Olhar de Professor, Universidade Estadual de Ponta Grossa',
    url: 'https://revistas.uepg.br/index.php/olhardeprofessor/pt_BR/article/view/23789',
  },
  {
    category: 'Educação e Cultura',
    title: 'Literatura de cordel no ensino: perspectivas da educação científica',
    desc: 'Estudo publicado pela Sociedade Brasileira de Ensino de Biologia (SBEnBio) investigando o potencial da literatura de cordel como recurso didático no ensino de ciências.',
    source: 'REnBio — Revista de Ensino de Biologia, SBEnBio',
    url: 'https://renbio.org.br/index.php/sbenbio/article/view/474',
  },
  // Inclusão Digital
  {
    category: 'Inclusão Digital',
    title: 'Dificuldades para divulgar o trabalho nas redes sociais',
    desc: 'Análise das barreiras que artistas e produtores culturais populares enfrentam para promover e divulgar sua produção nas plataformas digitais.',
    source: 'Galáxia, PUC-SP',
    url: 'https://doi.org/10.11606/issn.2178-2075.v12i2p239-260',
  },
  // Preservação Digital
  {
    category: 'Preservação Digital',
    title: 'Digitalização, preservação e acesso ao patrimônio cultural',
    desc: 'Discussão sobre os desafios e estratégias de digitalização do patrimônio cultural imaterial, com foco em políticas de acesso e preservação de longo prazo.',
    source: 'Memória e Informação, Fundação Casa de Rui Barbosa',
    url: 'https://memoriaeinformacao.casaruibarbosa.gov.br/index.php/fcrb/article/view/229',
  },
  {
    category: 'Preservação Digital',
    title: 'Indexação de xilogravuras à luz da Semântica Discursiva',
    desc: 'Investigação sobre métodos de indexação e representação das xilogravuras nordestinas, propondo abordagens baseadas na semântica discursiva para organização e recuperação desse acervo.',
    source: 'Informação & Sociedade: Estudos, UFPB',
    url: 'https://doi.org/10.22478/ufpb.1809-4783.2020v30n2.52062',
  },
]

const categories = [...new Set(references.map((r) => r.category))]

export function References() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: listRef, isInView: listInView } = useScrollAnimation(0.05)

  return (
    <section id="referencias" className="bg-creme py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
            Fundamentação e Referências
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-carvao leading-tight mb-6">
            Bases que orientam{' '}
            <span className="text-terracota italic">esta proposta</span>
          </h2>
          <p className="font-body text-carvao/65 text-base leading-relaxed max-w-2xl">
            Esta seção reúne as referências científicas e acadêmicas que fundamentam a concepção 
            e o desenvolvimento do nosso projeto. Por meio de pesquisas e estudos, buscamos 
            compreender a importância da literatura de cordel para a identidade cultural 
            nordestina e brasileira e os desafios enfrentados pelos cordelistas.
          </p>
        </motion.div>

        {/* References by category */}
        <div ref={listRef} className="space-y-10">
          {categories.map((cat, ci) => {
            const catRefs = references.filter((r) => r.category === cat)
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.12 }}
              >
                <h3 className="font-display font-bold text-lg text-carvao mb-4 pb-2 border-b border-carvao/10">
                  {cat}
                </h3>
                <div className="space-y-4">
                  {catRefs.map((ref, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={listInView ? { opacity: 1 } : {}}
                      transition={{ delay: ci * 0.1 + i * 0.07 }}
                      className={`flex gap-4 p-4 rounded-sm border transition-colors ${
                        ref.pending
                          ? 'bg-carvao/[0.03] border-carvao/8 opacity-70'
                          : 'bg-white/60 border-carvao/10 hover:bg-white/80'
                      }`}
                    >
                      {/* Number */}
                      <div className="flex-shrink-0">
                        <span className="font-accent text-xs text-carvao/30">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-body font-medium text-sm text-carvao leading-snug">
                            {ref.title}
                          </h4>
                          {ref.url && (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-terracota hover:text-vermelho flex-shrink-0 ml-2"
                              aria-label="Abrir fonte"
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <p className="font-body text-xs text-carvao/55 leading-relaxed mb-1">
                          {ref.desc}
                        </p>
                        <p className={`font-accent text-xs tracking-wide ${
                          ref.pending ? 'text-ocre/60 italic' : 'text-terracota/70'
                        }`}>
                          {ref.pending && '⚠ '}
                          {ref.source}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-carvao/10"
        >
          <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-6">
            Instituições de referência para esta proposta
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'IPHAN', full: 'Instituto do Patrimônio Histórico e Artístico Nacional' },
              { name: 'Casa de Rui Barbosa', full: 'Fundação Casa de Rui Barbosa' },
              { name: 'ABLC', full: 'Academia Brasileira de Literatura de Cordel' },
              { name: 'MinC', full: 'Ministério da Cultura' },
            ].map((inst) => (
              <div
                key={inst.name}
                className="bg-carvao/[0.06] border border-carvao/10 px-4 py-2.5 rounded-sm"
              >
                <p className="font-display font-bold text-sm text-carvao">{inst.name}</p>
                <p className="font-body text-xs text-carvao/45">{inst.full}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
