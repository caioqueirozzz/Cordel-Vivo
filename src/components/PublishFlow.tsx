import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle, Image, Send, ArrowRight } from 'lucide-react'

type ChatMsg = {
  from: 'user' | 'bot'
  text: string
  type?: 'image'
}

const conversation: ChatMsg[] = [
  { from: 'user', text: 'Quero publicar meu cordel.' },
  {
    from: 'bot',
    text: 'Oxente, que alegria! Me diga o nome da sua obra e vamos começar juntos.',
  },
  { from: 'user', text: 'A saudade do meu sertão.' },
  {
    from: 'bot',
    text: 'Que nome bonito! Agora você pode escrever seus versos aqui ou mandar uma foto do seu cordel. Se tiver impresso, tudo bem — eu consigo ler!',
  },
  { from: 'user', text: '[Envia uma foto do folheto impresso]', type: 'image' },
  {
    from: 'bot',
    text: 'Prontinho! Reconheci o texto com IA. Dá uma conferida para ver se ficou tudo certinho antes de publicar. Suas palavras originais foram preservadas — nada foi alterado sem sua revisão.',
  },
  {
    from: 'bot',
    text: 'Quando você confirmar, a obra vai direto para a biblioteca. Você quer adicionar mais alguma informação, como o tema ou o ano de criação?',
  },
]

const steps = [
  { icon: Send, title: 'Envio da obra', desc: 'Via site ou WhatsApp' },
  { icon: Image, title: 'Reconhecimento por IA', desc: 'Digitalização inteligente' },
  { icon: CheckCircle, title: 'Revisão pelo autor', desc: 'Controle total preservado' },
  { icon: CheckCircle, title: 'Publicação', desc: 'Na biblioteca digital' },
]

export function PublishFlow() {
  const [step, setStep] = useState(0)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()

  const visibleMessages = conversation.slice(0, step * 2 + 1)

  function advance() {
    if (step < Math.floor((conversation.length - 1) / 2)) {
      setStep((s) => s + 1)
    }
  }

  function reset() {
    setStep(0)
  }

  return (
    <section id="publicar" className="bg-papel py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative tilt bg */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(180deg, #E8D1A0 0%, transparent 100%)',
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
          <p className="font-accent text-terracota/70 text-sm tracking-widest uppercase mb-4">
            Publicar deve ser simples
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carvao leading-tight mb-6">
            Do papel para o digital,{' '}
            <span className="text-terracota italic">sem perder nossas raízes</span>
          </h2>
          <p className="font-body text-carvao/65 text-lg leading-relaxed">
            O cordelista pode publicar sua obra diretamente pelo site ou pelo WhatsApp — com uma
            conversa simples, acolhedora e acessível. A IA lê, transcreve e aguarda a revisão
            do próprio autor. Nada é alterado sem aprovação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* WhatsApp simulation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Simulação interativa — WhatsApp
            </p>

            {/* Phone frame */}
            <div className="mx-auto max-w-sm">
              <div className="bg-carvao rounded-3xl p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-300 flex items-center justify-center">
                      <span className="text-lg">📚</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium leading-tight">Cordel Vivo</p>
                      <p className="text-green-200 text-xs">online agora</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-3 space-y-2 min-h-64 max-h-96 overflow-y-auto">
                    <AnimatePresence>
                      {visibleMessages.map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-3 py-2 shadow-sm text-xs font-body leading-relaxed ${
                              msg.from === 'user'
                                ? 'bg-[#DCF8C6] text-[#1a1a1a] rounded-tr-none'
                                : 'bg-white text-[#1a1a1a] rounded-tl-none'
                            }`}
                          >
                            {msg.type === 'image' ? (
                              <div className="flex items-center gap-2 text-[#075E54]">
                                <Image size={14} />
                                <span className="italic text-carvao/70">foto do folheto impresso</span>
                              </div>
                            ) : (
                              msg.text
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {step === 0 && (
                      <p className="text-center text-xs text-carvao/30 font-accent mt-4">
                        Toque em "Avançar" para ver a conversa
                      </p>
                    )}
                  </div>

                  {/* Controls */}
                  <div className="px-3 pb-3 flex gap-2">
                    {step < Math.floor((conversation.length - 1) / 2) ? (
                      <button
                        onClick={advance}
                        className="flex-1 bg-[#075E54] text-white text-xs font-medium py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#064d44] transition-colors"
                      >
                        Avançar <ArrowRight size={13} />
                      </button>
                    ) : (
                      <button
                        onClick={reset}
                        className="flex-1 bg-ocre text-carvao text-xs font-medium py-2.5 rounded-full hover:bg-ocre/80 transition-colors"
                      >
                        Recomeçar a demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Flow steps + principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Flow steps */}
            <div>
              <p className="font-accent text-xs text-carvao/40 tracking-widest uppercase mb-6">
                Fluxo de publicação
              </p>
              <div className="space-y-4">
                {steps.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <div key={s.title} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracota/10 border border-terracota/30 flex items-center justify-center">
                        <Icon size={16} className="text-terracota" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display font-bold text-sm text-carvao">{s.title}</p>
                        <p className="font-body text-xs text-carvao/50">{s.desc}</p>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute ml-5 mt-10 w-px h-4 bg-terracota/20" aria-hidden="true" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Principles */}
            <div className="bg-carvao/[0.04] border border-carvao/10 rounded-sm p-6">
              <p className="font-display font-bold text-lg text-carvao mb-4">
                Compromissos do sistema
              </p>
              <ul className="space-y-3">
                {[
                  'Preservar as palavras originais do cordelista',
                  'Não alterar expressões regionais automaticamente',
                  'Não modificar versos sem autorização explícita',
                  'Solicitar revisão humana antes de publicar',
                  'Respeitar autoria e direitos autorais',
                  'Linguagem acolhedora e acessível',
                ].map((principle) => (
                  <li key={principle} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-terracota mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-carvao/70">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-ocre pl-4">
              <p className="font-display italic text-lg text-carvao/70 leading-snug">
                "A tradição ganha novos caminhos. O protagonismo continua sendo de quem cria."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
