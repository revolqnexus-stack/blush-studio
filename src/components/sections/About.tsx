import { FadeIn, FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/PremiumAnimations'
import { SITE_CONFIG, TRUST_STATS } from '@/constants'

export function About() {
  return (
    <section id="about" data-nav-surface="light" className="section-gap bg-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <img
                src="/photos/hero.webp"
                alt="Bridal makeup artistry at Blush Fine Makeup Art"
                className="w-full aspect-[3/4] object-cover rounded-[14px] shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 bg-dark text-white p-5 rounded-[14px] shadow-xl text-center">
                <span className="block font-serif text-3xl font-normal text-gold leading-none">
                  {TRUST_STATS[0].value}
                </span>
                <p className="text-[0.6rem] tracking-[0.12em] uppercase text-white/50 mt-1">
                  {TRUST_STATS[0].label}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="pb-6">
            <FadeUp>
              <p className="mb-3 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold">
                Our Philosophy
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <p
                className="mb-3 font-serif italic text-dark/70 uppercase"
                style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)', lineHeight: 1.25, letterSpacing: '0.02em' }}
              >
                {SITE_CONFIG.philosophyLine}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl font-normal leading-[1.05] text-dark md:text-5xl lg:text-[3.5rem] mb-5">
                Established bridal beauty,<br />
                <em className="text-dark-2">thoughtfully elevated</em>
              </h2>
              <div className="section-divider mb-6 max-w-[120px]" />
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-text-muted text-lg mb-5 leading-[1.8]">
                Every bride deserves to feel like herself on the most photographed day of her life. At{' '}
                {SITE_CONFIG.legalName}, our approach is centred around enhancing your natural features,
                complementing your outfit and creating a look that feels beautiful both in person and on
                camera.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-text-muted text-lg mb-10 leading-[1.8]">
                Based in {SITE_CONFIG.locationShort}, we specialise in bridal, engagement and special occasion
                makeup — with deep expertise in South Indian bridal artistry and refined, camera-ready elegance.
              </p>
            </FadeUp>

            <StaggerContainer className="flex flex-wrap gap-10 pt-8 border-t border-dark/8">
              {TRUST_STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-4xl font-normal text-dark leading-none">{stat.value}</span>
                    <span className="text-[0.65rem] tracking-[0.15em] uppercase text-text-muted">{stat.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
