import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/constants'

export function HoneysWorld() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="blush-experience" data-nav-surface="light" className="section-gap bg-bg-alt">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-sans text-brand uppercase tracking-[0.2em] text-xs mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The Blush Experience
          </motion.p>

          <h2 className="font-serif text-4xl font-normal leading-[1.05] text-dark md:text-5xl lg:text-[3.5rem]">
            Beauty tailored to your celebration
          </h2>
          <div className="section-divider my-5" />
          <motion.p
            className="font-sans text-text-muted mt-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {SITE_CONFIG.legalName} specialises in bridal and occasion makeup with a focus on South Indian
            bridal artistry, camera-ready elegance and looks that feel like you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#bridal-studio')
            }}
          >
            <div className="relative mb-6 aspect-[4/5] overflow-hidden">
              <motion.div
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)' }}
              />
              <motion.img
                src="/what we offer pic/bridal makeup,hairstyle and saree drape.jpg.jpeg"
                alt="Bridal makeup at Blush Studio"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="font-sans text-brand/80 text-xs uppercase tracking-[0.18em] mb-2">For Brides</p>
                <h3 className="font-serif text-white text-2xl md:text-3xl">Bridal</h3>
              </div>
            </div>
            <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
              Wedding-day makeup, hair and draping designed around your features and ceremony.
            </p>
            <motion.a
              href="#bridal-studio"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#bridal-studio')
              }}
              className="inline-flex items-center gap-2 font-sans font-medium text-dark text-xs uppercase tracking-[0.15em] group-hover:text-brand transition-colors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Discover the Blush experience
              <span className="text-brand">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#services')
            }}
          >
            <div className="relative mb-6 aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)' }}
              />
              <motion.img
                src="/photos/3.webp"
                alt="Engagement and reception makeup"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="font-sans text-brand/80 text-xs uppercase tracking-[0.18em] mb-2">Celebrations</p>
                <h3 className="font-serif text-white text-2xl md:text-3xl">Engagement & Reception</h3>
              </div>
            </div>
            <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
              Refined looks for engagements, receptions and family festivities.
            </p>
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#services')
              }}
              className="inline-flex items-center gap-2 font-sans font-medium text-dark text-xs uppercase tracking-[0.15em] group-hover:text-brand transition-colors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              View services
              <span className="text-brand">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#portfolio')
            }}
          >
            <div className="relative mb-6 aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)' }}
              />
              <motion.img
                src="/photos/9.webp"
                alt="Editorial and event makeup"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="font-sans text-brand/80 text-xs uppercase tracking-[0.18em] mb-2">Creative</p>
                <h3 className="font-serif text-white text-2xl md:text-3xl">Editorial & Events</h3>
              </div>
            </div>
            <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
              Makeup for shoots, productions and creative projects.
            </p>
            <motion.a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-medium text-dark text-xs uppercase tracking-[0.15em] group-hover:text-brand transition-colors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Follow {SITE_CONFIG.instagramHandle}
              <span className="text-brand">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
