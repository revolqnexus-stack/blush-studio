import { motion } from 'framer-motion'
import { LAYOUT, SITE_CONFIG } from '@/constants'
import { useEnquiryModal } from '@/context/EnquiryModalContext'

export function DualCTA() {
  const { open: openEnquiry } = useEnquiryModal()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - LAYOUT.headerHeightPx,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="dual-cta" data-nav-surface="dark" className="section-gap bg-dark">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold">Book</p>
          <h2 className="font-serif text-4xl font-normal leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
            Your date deserves the Blush treatment
          </h2>
          <div
            className="mx-auto my-5 h-px max-w-[120px]"
            style={{ background: 'linear-gradient(to right, transparent, #CA8A04, transparent)' }}
          />
          <p className="font-sans text-white/55 text-lg">
            Tell us about your celebration and let&apos;s create your look.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-0 md:grid-cols-2">
          <motion.div
            className="border-t border-white/10 px-0 py-10 md:border-r md:border-t-0 md:px-10 md:py-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold/70">Enquire</p>
            <h3 className="mb-4 font-serif text-2xl text-white md:text-3xl">Check date availability</h3>
            <p className="mb-8 font-sans text-sm leading-relaxed text-white/55">
              Share your event date, location and vision — we&apos;ll respond on WhatsApp.
            </p>
            <motion.button
              type="button"
              onClick={() => openEnquiry('bridal')}
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-gold bg-gold font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white md:w-auto md:px-8"
              whileHover={{ y: -2, boxShadow: '0 10px 32px rgba(202,138,4,0.28)' }}
              whileTap={{ scale: 0.98 }}
            >
              Check Date Availability →
            </motion.button>
          </motion.div>

          <motion.div
            className="border-t border-white/10 px-0 py-10 md:border-t-0 md:px-10 md:py-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold/70">Connect</p>
            <h3 className="mb-4 font-serif text-2xl text-white md:text-3xl">Follow the Blush journey</h3>
            <p className="mb-8 font-sans text-sm leading-relaxed text-white/55">
              {SITE_CONFIG.instagramHandle} — bridal inspiration, behind-the-scenes and real client work.
            </p>
            <motion.a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-gold/50 bg-transparent font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white md:w-auto md:px-8"
              whileHover={{ y: -2, background: 'rgba(202,138,4,0.12)', borderColor: '#CA8A04' }}
              whileTap={{ scale: 0.98 }}
            >
              Follow on Instagram →
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={SITE_CONFIG.whatsapp}
            className="text-xs uppercase tracking-[0.14em] text-white/50 hover:text-gold transition-colors"
          >
            WhatsApp
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="text-xs uppercase tracking-[0.14em] text-white/50 hover:text-gold transition-colors">
            Call
          </a>
          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="text-xs uppercase tracking-[0.14em] text-white/50 hover:text-gold transition-colors"
          >
            Enquire Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
