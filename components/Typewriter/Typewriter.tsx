import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

export function Typewriter({ text, duration = 3 }) {

    const count = useMotionValue(0)
    const displayed = useTransform(count, (latest) => text.slice(0, Math.round(latest)))
  
    useEffect(() => {
      const controls = animate(count, text.length, {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse", 
        repeatDelay: 1,
      })
      return () => controls.stop()
    }, [text, duration])

    return (
        <motion.h1 className="text-brandRed dark:text-brandBlue font-transducer-extended font-bold text-[40px] md:text-[48px] lg:text-[72px]">
            {displayed}
        </motion.h1>
    )
}

