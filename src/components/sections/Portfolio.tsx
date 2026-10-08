import { motion } from 'framer-motion'
import { PORTFOLIO_IMAGES, SITE_CONFIG } from '@/constants'
import { Button } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Portfolio() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      data-nav-surface="light"
      className="section-gap bg-bg"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.p>

          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-dark leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Blush <em className="text-dark-2">Bride</em>
          </motion.h2>
          <motion.p
            className="mt-4 text-text-muted max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of real bridal transformations — replace gallery images with @blush_finemakeupart assets.
          </motion.p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 lg:gap-6 px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto">
        {PORTFOLIO_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid mb-4 md:mb-5 lg:mb-6 overflow-hidden rounded-sm cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
          >
            <motion.img
              src={image}
              alt={`Bridal Look ${index + 1}`}
              className="w-full h-auto block transition-all duration-700 brightness-95 group-hover:brightness-100"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button
          variant="outline"
          href={SITE_CONFIG.instagram}
        >
          Follow on Instagram
        </Button>
      </motion.div>
    </section>
  )
}
