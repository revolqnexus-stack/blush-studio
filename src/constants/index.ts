/** Shared layout tokens — keep in sync with --site-header-height in index.css */
export const LAYOUT = {
  headerHeightPx: 92,
} as const

export const SITE_CONFIG = {
  name: 'BLUSH',
  legalName: 'Blush Fine Makeup Art',
  shortDescriptor: 'Fine Makeup Art',
  tagline: 'Hyderabad · Bridal · Beauty · Artistry',
  motto: 'Your wedding. Your beauty. Elevated.',
  philosophyLine: "We don't change you. We reveal you.",
  description:
    'Bridal makeup designed to enhance what already makes you beautiful — from intimate ceremonies to unforgettable celebrations.',
  phone: '+917036711119',
  phones: ['+917036711119', '+919676037755', '+919676061119'] as const,
  phoneDisplay: ['+91 70367 11119', '+91 96760 37755', '+91 96760 61119'] as const,
  email: 'blushfinemakeup@gmail.com',
  whatsapp: 'https://wa.me/917036711119',
  instagram: 'https://www.instagram.com/blush_finemakeupart',
  instagramHandle: '@blush_finemakeupart',
  website: 'https://www.blushstudio.in',
  location: 'Jubilee Hills, Hyderabad, Telangana, India',
  locationShort: 'Jubilee Hills, Hyderabad',
  serviceAreas: 'Hyderabad · Secunderabad · Telangana & destination celebrations',
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=Blush+Fine+Makeup+Art+Jubilee+Hills+Hyderabad',
} as const

/** Edit these figures when verified with the client */
export const TRUST_STATS = [
  { value: '37K+', label: 'Instagram Community' },
  { value: '10+', label: 'Years of Artistry' },
  { value: '200+', label: 'Google Reviews' },
  { value: '4.5★', label: 'Google Rating' },
] as const

export const BLUSH_PROCESS_STEPS = [
  {
    id: 1,
    title: 'Tell us about your day',
    description: 'Share your wedding date, event and location.',
  },
  {
    id: 2,
    title: 'Discover your look',
    description: 'Discuss your preferred makeup, hair and overall bridal aesthetic.',
  },
  {
    id: 3,
    title: 'Trial & refine',
    description: 'Create and refine your bridal look where applicable.',
  },
  {
    id: 4,
    title: 'Your Blush day',
    description: 'Relax and enjoy your wedding while the team takes care of the details.',
  },
] as const

export const SERVICES = [
  {
    id: 1,
    title: 'Bridal',
    description:
      'Wedding-day makeup designed around your features, outfit, ceremony and personal style.',
    image: '/what we offer pic/bridal makeup,hairstyle and saree drape.jpg.jpeg',
  },
  {
    id: 2,
    title: 'Engagement',
    description: 'Elegant, camera-ready looks for your engagement celebration.',
    image: '/what we offer pic/professional makeup artist.jpg.jpeg',
  },
  {
    id: 3,
    title: 'Reception',
    description: 'Refined glam designed to transition beautifully from photographs to the celebration.',
    image: '/photos/2.webp',
  },
  {
    id: 4,
    title: 'Party & Festive',
    description: 'Polished makeup for family celebrations, festivities and special occasions.',
    image: '/photos/5.webp',
  },
  {
    id: 5,
    title: 'Hair & Draping',
    description: 'Complete your look with professional hairstyling and saree/dupatta draping.',
    image: '/what we offer pic/haircuts and styling.jpg.jpeg',
  },
  {
    id: 6,
    title: 'Editorial & Events',
    description: 'Makeup artistry for models, shoots, productions and creative projects.',
    image: '/photos/9.webp',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: '[REAL BRIDE REVIEW HERE — replace with verified Google or client feedback]',
    name: '[Bride Name]',
    occasion: 'Bridal Makeup',
  },
  {
    id: 2,
    rating: 5,
    text: 'I felt like the best version of myself on my wedding day.',
    name: '[Bride Name]',
    occasion: 'Wedding Day',
  },
  {
    id: 3,
    rating: 5,
    text: '[REAL BRIDE REVIEW HERE — replace with verified Google or client feedback]',
    name: '[Bride Name]',
    occasion: 'South Indian Bridal',
  },
] as const

/** Studio interior shots — files live in public/photos/studio/ */
export const STUDIO_INTERIOR_IMAGES = [
  {
    src: '/photos/studio/interior6.png',
    fallback: '/photos/studio/interior.jpeg',
    alt: 'Blush Studio — bridal preparation space',
    caption: 'Bridal Suite',
    eyebrow: 'Jubilee Hills · Hyderabad',
    title: 'A space designed for transformation',
    subtitle: 'Warm light, considered details, and the calm before your walk down the aisle.',
  },
  {
    src: '/photos/studio/interior7.png',
    fallback: '/photos/studio/interior1.jpeg',
    alt: 'Blush Studio interior',
    caption: 'Blush Studio',
    eyebrow: 'Blush Fine Makeup Art',
    title: 'Where everyday beauty meets artistry',
    subtitle: 'Hair, skin, and beauty care in an environment as refined as the service.',
  },
  {
    src: '/photos/studio/interior4.jpeg',
    fallback: '/photos/studio/interior5.jpeg',
    alt: 'Blush Studio styling area',
    caption: 'The Atelier',
    eyebrow: 'The Studio',
    title: 'Every detail, intentionally placed',
    subtitle: 'From mirror to makeup chair — a studio built for brides and artists alike.',
  },
] as const

export const STUDIO_GALLERY_STRIP = [
  {
    src: '/photos/studio/interior.jpeg',
    fallback: '/photos/studio/interior1.jpeg',
    alt: 'Studio interior detail',
    caption: 'The Suite',
  },
  {
    src: '/photos/studio/interior1.jpeg',
    fallback: '/photos/studio/interior.jpeg',
    alt: 'Studio mirror and light',
    caption: 'The Light',
  },
  {
    src: '/photos/studio/interior6.png',
    fallback: '/photos/studio/interior3.jpeg',
    alt: 'Studio styling area',
    caption: 'The Studio',
  },
  {
    src: '/photos/studio/interior3.jpeg',
    fallback: '/photos/studio/interior4.jpeg',
    alt: 'Studio styling corner',
    caption: 'The Detail',
  },
  {
    src: '/photos/studio/interior7.png',
    fallback: '/photos/studio/interior4.jpeg',
    alt: 'Studio preparation area',
    caption: 'The Space',
  },
  {
    src: '/photos/studio/interior4.jpeg',
    fallback: '/photos/studio/interior5.jpeg',
    alt: 'Studio preparation area',
    caption: 'The Atelier',
  },
  {
    src: '/photos/studio/interior5.jpeg',
    fallback: '/photos/studio/interior4.jpeg',
    alt: 'Studio finishing touches',
    caption: 'The Finishing',
  },
] as const

export const PORTFOLIO_IMAGES = [
  "/photos/1.jpg.jpeg",
  "/photos/2.webp",
  "/photos/3.webp",
  "/photos/4.webp",
  "/photos/5.webp",
  "/photos/6.webp",
  "/photos/7.jpg.jpeg",
  "/photos/8.jpg.jpeg",
  "/photos/9.webp",
  "/photos/10.webp",
  "/photos/11.webp",
  "/photos/12.webp",
] as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const MARQUEE_ITEMS = [
  'Bridal Makeup',
  'South Indian Bridal',
  'Engagement',
  'Reception',
  'Party & Festive',
  'Hair & Draping',
  'HD Makeup',
  'Airbrush',
  'Hyderabad',
  'Editorial & Events',
] as const

export const SERVICE_CATEGORIES = [
  {
    id: 1,
    title: "Makeup",
    navLabel: "Makeup",
    slug: "makeup",
    heading: "Makeup Artistry",
    tagline: "Signature makeup artistry for brides, celebrations and every occasion worth remembering.",
    image: "/what we offer pic/professional makeup artist.jpg.jpeg",
    imageAlt: 'Professional makeup artistry at Blush Fine Makeup Art',
    services: [
      {
        name: "Bridal Makeup",
        description: "Bespoke bridal looks crafted around your features, outfit, jewellery and ceremony.",
      },
      {
        name: "Engagement Makeup",
        description: "Refined makeup for engagement ceremonies and intimate celebrations.",
      },
      {
        name: "Reception Makeup",
        description: "Sophisticated evening looks designed for reception lighting and photography.",
      },
      {
        name: "Party Makeup",
        description: "Elevated occasion makeup for celebrations, events and special evenings.",
      },
      {
        name: "Guest Makeup",
        description: "Polished, effortless makeup for wedding guests and family.",
      },
      {
        name: "HD / Ultra HD Makeup",
        description: "High-definition finishes designed to remain seamless under photography and video.",
      },
      {
        name: "Waterproof Makeup",
        description: 'Long-wear makeup designed for long celebrations and demanding occasions.',
      },
      {
        name: "Airbrush Makeup",
        description: "Lightweight, finely finished coverage with a smooth photographic finish.",
      },
      {
        name: "Glass Skin / Glow Makeup",
        description: "Luminous, skin-focused makeup with a fresh, radiant finish.",
      },
    ],
  },
  {
    id: 2,
    title: "Bridal Services",
    navLabel: "Bridal Services",
    slug: "bridal",
    heading: "Bridal Services",
    tagline: "The details that complete the bridal transformation.",
    image: "/what we offer pic/bridal makeup,hairstyle and saree drape.jpg.jpeg",
    imageAlt: 'Bridal styling, saree draping and finishing at Blush Studio',
    services: [
      {
        name: "Bridal Hairstyling",
        description: "Custom hair design tailored to your face, outfit and ceremony traditions.",
      },
      {
        name: "Saree Draping",
        description: 'Elegant, secure draping in South Indian and contemporary styles.',
      },
      {
        name: "Jewellery Setting",
        description: "Precise placement and adjustment of bridal jewellery for a polished finish.",
      },
      {
        name: "Flower Setting",
        description: "Fresh floral adornments arranged with care for traditional bridal looks.",
      },
      {
        name: "Pre-Pleating",
        description: "Expert pleating preparation so your saree falls beautifully throughout the day.",
      },
      {
        name: "Bridal Box Folding",
        description: "Meticulous folding and presentation of bridal essentials for the ceremony.",
      },
      {
        name: "Hanger Folding",
        description: "Careful garment preparation to keep bridal wear pristine before and after.",
      },
    ],
  },
  {
    id: 3,
    title: "Hair",
    navLabel: "Hair",
    slug: "hair",
    heading: "Hair Care & Styling",
    tagline: "From everyday refinement to occasion-ready styling and restorative treatments.",
    image: "/what we offer pic/haircuts and styling.jpg.jpeg",
    imageAlt: 'Hair styling at Blush Fine Makeup Art',
    services: [
      {
        name: "Hair Cut",
        description: "Precision cuts shaped to complement your features and lifestyle.",
      },
      {
        name: "Hair Spa",
        description: "Deep nourishment and relaxation for healthier, more manageable hair.",
      },
      {
        name: "Korean Hair Spa",
        description: "Advanced Korean-inspired treatment for shine, softness and scalp care.",
      },
      {
        name: "Hair Treatment",
        description: "Targeted therapies to restore strength, moisture and vitality.",
      },
      {
        name: "Hair Wash",
        description: "Professional cleansing and conditioning with premium products.",
      },
      {
        name: "Hair Setting",
        description: "Structured styling for events, photography and everyday elegance.",
      },
      {
        name: "Bridal & Party Hairstyling",
        description: "Occasion-ready hair designed to complement your makeup and attire.",
      },
    ],
  },
  {
    id: 4,
    title: "Skin Care",
    navLabel: "Skin Care",
    slug: "skin",
    heading: "Skin Care",
    tagline: "Restorative facials and treatments to reveal a clear, luminous complexion.",
    image: "/what we offer pic/skin treatments.jpg.jpeg",
    imageAlt: 'Skin care at Blush Studio',
    services: [
      {
        name: "Facial",
        description: "Customised facial treatments to cleanse, nourish and revitalise the skin.",
      },
      {
        name: "HydraFacial",
        description: "Advanced hydration and exfoliation for an instantly refreshed glow.",
      },
      {
        name: "Cleanup",
        description: "Thorough deep cleansing to remove impurities and restore clarity.",
      },
      {
        name: "De-Tan",
        description: "Gentle treatment to reduce tan and even out skin tone.",
      },
      {
        name: "Scrub & Face Pack",
        description: "Exfoliation and masking for smoother, brighter skin.",
      },
      {
        name: "Face Hair Removal",
        description: "Precise, gentle removal for a clean and polished appearance.",
      },
      {
        name: "Bridal Skin Care",
        description: "Pre-wedding skin preparation tailored for your big day.",
      },
    ],
  },
  {
    id: 5,
    title: "Beauty Care",
    navLabel: "Beauty Care",
    slug: "beauty-care",
    heading: "Beauty Care",
    tagline: "Essential grooming and body care delivered with precision and hygiene.",
    image: "/what we offer pic/hair treatments.jpg.jpeg",
    imageAlt: 'Beauty care at Blush Studio',
    services: [
      {
        name: "Threading",
        description: "Precise eyebrow and facial threading for a defined, natural shape.",
      },
      {
        name: "Waxing",
        description: "Professional waxing with careful attention to comfort and results.",
      },
      {
        name: "Manicure",
        description: "Nail shaping, cuticle care and finishing for polished hands.",
      },
      {
        name: "Pedicure",
        description: "Foot care and nail refinement for a complete, well-groomed look.",
      },
      {
        name: "Hand & Leg De-Tan",
        description: "Targeted de-tanning to restore even tone on exposed skin.",
      },
      {
        name: "Head Massage",
        description: "Relaxing scalp massage to relieve tension and promote wellbeing.",
      },
    ],
  },
  {
    id: 6,
    title: "Nails & Mehendi",
    navLabel: "Nails & Mehendi",
    slug: "nails-mehendi",
    heading: "Nails & Mehendi",
    tagline: "Artful nail design and intricate mehendi for celebrations and bridal moments.",
    image: "/what we offer pic/mehndi design.jpg.jpeg",
    imageAlt: 'Nails and mehendi at Blush Studio',
    priceColumns: [
      { key: "priceBoth", label: "Both / Feet" },
      { key: "priceOne", label: "One Hand" },
    ] as const,
    groups: [
      {
        label: "Nail Art & Polish",
        services: [
          {
            name: "Nail Art",
            description: "Creative nail design for occasions, celebrations and everyday elegance.",
          },
        ],
      },
      {
        label: "Mehendi",
        services: [
          {
            name: "Mehendi Work",
            description: "Beautiful henna designs for festivals, functions and special events.",
          },
          {
            name: "Bridal Mehendi",
            description: "Elaborate bridal mehendi crafted with tradition, detail and artistry.",
          },
        ],
      },
    ] as const,
    services: [
      {
        name: "Nail Art",
        description: "Creative nail design for occasions, celebrations and everyday elegance.",
      },
      {
        name: "Mehendi Work",
        description: "Beautiful henna designs for festivals, functions and special events.",
      },
      {
        name: "Bridal Mehendi",
        description: "Elaborate bridal mehendi crafted with tradition, detail and artistry.",
      },
    ],
  },
] as const
