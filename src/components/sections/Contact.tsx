import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { WhatsAppEnquiryForm } from '@/components/ui/WhatsAppEnquiryForm'
import { SITE_CONFIG } from '@/constants'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="contact" data-nav-surface="dark" className="section-gap bg-dark">
      <div className="container-custom">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.p
              className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.p>

            <motion.h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your date deserves<br />
              <em className="text-white/60">the Blush treatment</em>
            </motion.h2>

            <motion.p
              className="text-lg text-white/55 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell us about your celebration and let&apos;s create your look. Reach out to check availability
              and start your bridal enquiry with {SITE_CONFIG.legalName}.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-4 items-start md:col-span-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
                <div>
                  <strong className="block text-xs tracking-[0.12em] uppercase text-white/40 mb-1">
                    {SITE_CONFIG.legalName}
                  </strong>
                  <p className="text-sm text-white/70 leading-relaxed mb-1">
                    {SITE_CONFIG.locationShort}
                    <br />
                    Hyderabad, Telangana
                  </p>
                  <a
                    href={SITE_CONFIG.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors"
                  >
                    Open in Maps
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="block text-xs tracking-[0.12em] uppercase text-white/40 mb-1">Service Areas</strong>
                  <p className="text-sm text-white/70 leading-relaxed">{SITE_CONFIG.serviceAreas}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <strong className="block text-xs tracking-[0.12em] uppercase text-white/40 mb-1">Phone & WhatsApp</strong>
                  <div className="flex flex-col gap-1">
                    {SITE_CONFIG.phoneDisplay.map((display, i) => (
                      <a
                        key={display}
                        href={`tel:${SITE_CONFIG.phones[i]}`}
                        className="text-sm text-white/70 hover:text-gold transition-colors"
                      >
                        {display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start md:col-span-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <strong className="block text-xs tracking-[0.12em] uppercase text-white/40 mb-1">Email</strong>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                  <p className="mt-2 text-sm text-white/50">{SITE_CONFIG.instagramHandle}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="primary"
                href={SITE_CONFIG.whatsapp}
                className="bg-gold border-gold hover:bg-gold-light hover:border-gold-light"
              >
                WhatsApp
              </Button>
              <Button variant="primary" href={`tel:${SITE_CONFIG.phone}`} className="bg-transparent border-gold/50">
                Call Now
              </Button>
              <Button
                variant="outline"
                href={SITE_CONFIG.instagram}
                className="text-white border-white/30 hover:bg-white hover:text-dark hover:border-white"
              >
                Instagram
              </Button>
            </motion.div>
          </div>

          <motion.div
            id="enquire"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WhatsAppEnquiryForm variant="inline" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
