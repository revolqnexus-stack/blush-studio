import { SITE_CONFIG } from '@/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-nav-surface="dark" className="bg-dark pt-20 pb-6 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/6">
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-4xl italic text-white">{SITE_CONFIG.name}</span>
              <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-white/40">
                {SITE_CONFIG.shortDescriptor} · Hyderabad
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              Bridal beauty, thoughtfully elevated. {SITE_CONFIG.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand transition-colors"
              >
                Instagram
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand transition-colors"
              >
                WhatsApp
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-brand transition-colors">
                Call
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-brand/60 mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-white/50 hover:text-brand transition-colors">
                About
              </a>
              <a href="#services" className="text-sm text-white/50 hover:text-brand transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm text-white/50 hover:text-brand transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="text-sm text-white/50 hover:text-brand transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-sm text-white/50 hover:text-brand transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-brand/60 mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-white/50 hover:text-brand transition-colors">
                Bridal Makeup
              </a>
              <a href="#services" className="text-sm text-white/50 hover:text-brand transition-colors">
                Engagement & Reception
              </a>
              <a href="#services" className="text-sm text-white/50 hover:text-brand transition-colors">
                Hair & Draping
              </a>
              <a href="#process" className="text-sm text-white/50 hover:text-brand transition-colors">
                The Blush Process
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-brand/60 mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <span>{SITE_CONFIG.locationShort}</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-brand transition-colors">
                {SITE_CONFIG.email}
              </a>
              <a href={SITE_CONFIG.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                blushstudio.in
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="text-xs text-white/20">
            <p>
              © {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 justify-start md:justify-end">
            <a href="#" className="text-xs text-white/30 hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-brand transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 font-serif text-[10rem] md:text-[14rem] font-bold italic text-white/[0.025] whitespace-nowrap pointer-events-none select-none tracking-tighter">
        {SITE_CONFIG.name}
      </div>
    </footer>
  )
}
