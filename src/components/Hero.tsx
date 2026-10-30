import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CactusScene } from './XilogravuraElements'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-papel"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, #E8D1A0 0%, #F3E5C8 55%, #EDD9B0 100%)',
      }}
    >
      {/* Top border ornament */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-carvao" />
      <div
        className="absolute top-2 left-0 right-0 h-1"
        style={{
          background: 'repeating-linear-gradient(90deg, #B65232 0, #B65232 12px, transparent 12px, transparent 20px)',
        }}
      />

      {/* Background texture hatching */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #211A17 0, #211A17 1px, transparent 1px, transparent 8px)',
        }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
          {/* Text column */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-carvao mb-6"
            >
              <span className="block">O futuro</span>
              <span className="block text-terracota">da nossa</span>
              <span className="block">cultura</span>
              <span className="block italic font-normal text-4xl sm:text-5xl lg:text-6xl mt-1">
                também se escreve em{' '}
                <em className="text-vermelho not-italic font-black">cordel.</em>
              </span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="origin-left w-20 h-1 bg-terracota mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-lg sm:text-xl text-carvao/75 leading-relaxed mb-10 max-w-lg"
            >
              Unimos inteligência artificial e tradição popular para preservar histórias,
              amplificar vozes e criar novos caminhos para os cordelistas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#cultura"
                className="inline-flex items-center gap-2 bg-carvao text-papel font-body font-medium px-7 py-3.5 rounded-sm hover:bg-terracota transition-colors duration-300 group"
              >
                Conheça o projeto
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#solucao"
                className="inline-flex items-center gap-2 border-2 border-carvao text-carvao font-body font-medium px-7 py-3.5 rounded-sm hover:bg-carvao hover:text-papel transition-all duration-300"
              >
                Explore a solução
              </a>
            </motion.div>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-accent text-sm text-carvao/50 mt-10 tracking-wider"
            >
              "Nossa cultura tem história. Nossa gente tem voz."
            </motion.p>
          </div>

          {/* Illustration column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Decorative frame behind illustration */}
            <div
              className="absolute inset-4 border-2 border-carvao/10 rounded-sm"
              style={{
                background:
                  'linear-gradient(135deg, rgba(182,82,50,0.08) 0%, rgba(214,163,74,0.06) 100%)',
              }}
            />

            <CactusScene className="relative w-full max-w-xl lg:max-w-none drop-shadow-xl" />

            {/* Corner tag */}
            <div className="absolute bottom-6 left-6 bg-terracota text-papel font-accent text-xs px-3 py-1.5 tracking-wider">
              Cordel Vivo
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-carvao/40"
      >
        <span className="font-accent text-xs tracking-widest uppercase">Role</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom shape divider */}
      <div className="relative h-16 bg-papel">
        <svg
          viewBox="0 0 1440 64"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C360,64 1080,0 1440,64 L1440,64 L0,64 Z"
            fill="#211A17"
          />
        </svg>
      </div>
    </section>
  )
}
