import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollAnimation(amount: number = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })
  return { ref, isInView }
}
