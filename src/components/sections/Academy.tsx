import { motion } from 'framer-motion'
import { BLUSH_PROCESS_STEPS, LAYOUT, SITE_CONFIG } from '@/constants'
import { WhatsAppEnquiryForm } from '@/components/ui/WhatsAppEnquiryForm'
import { useEnquiryModal } from '@/context/EnquiryModalContext'

export function Academy() {
  const { open: openEnquiry } = useEnquiryModal()

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - LAYOUT.headerHeightPx,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="process" data-nav-surface="dark" className="section-gap bg-dark">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-3 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The Blush Process
          </motion.p>

          <h2 className="font-serif text-4xl font-normal leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
            From enquiry to your celebration
          </h2>

          <div
            className="mx-auto my-5 h-px max-w-[120px]"
            style={{ background: 'linear-gradient(to right, transparent, #CA8A04, transparent)' }}
          />

          <motion.p
            className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/60 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A thoughtful, calm journey — so you can focus on the moments that matter.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:gap-20">
          <div>
            <ul className="divide-y divide-white/10">
              {BLUSH_PROCESS_STEPS.map((step, index) => (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex w-full items-start gap-4 py-6 md:gap-5 md:py-7">
                    <span className="shrink-0 pt-1 font-sans text-[0.6875rem] font-medium tabular-nums tracking-[0.08em] text-gold/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-2 block font-serif text-xl capitalize leading-snug text-white md:text-2xl">
                        {step.title}
                      </span>
                      <span className="block font-sans text-sm leading-relaxed text-white/50">
                        {step.description}
                      </span>
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-10 border-t border-white/10 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.button
                type="button"
                onClick={() => openEnquiry('bridal')}
                className="inline-flex items-center gap-2 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-light"
              >
                Start your enquiry
                <span aria-hidden="true">→</span>
              </motion.button>
              <button
                type="button"
                onClick={scrollToContact}
                className="ml-6 inline-flex items-center gap-2 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white/70"
              >
                Or contact {SITE_CONFIG.locationShort}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lg:sticky lg:top-[calc(var(--site-header-height)+2rem)]">
              <WhatsAppEnquiryForm variant="inline" initialType="bridal" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
