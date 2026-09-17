export const site = {
  name: 'IQRASH Beauty Salon',
  address: 'E, Bungalow #157/A, Block-E, Unit 6, Latifabad Road, Sector Latifabad, Hyderabad, 71800, Pakistan',
  phoneDisplay: '03329990159',
  phoneHref: 'tel:+923329990159',
  whatsappHref:
    'https://wa.me/923329990159?text=Hello%20IQRASH%20Beauty%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.%20Please%20share%20your%20available%20timings%20and%20services.%20Thank%20you.',
  mapHref: 'https://maps.app.goo.gl/E7mPnb3njFCTEryM8',
  instagramHref: 'https://www.instagram.com/iqrashsalonofficial/?hl=en',
  facebookHref: 'https://www.facebook.com/Iqrashofficial?mibextid=ZbWKwL',
  proposedHours: '2:00 PM – 10:00 PM',
  images: [
    {
      src: '/images/hero-beauty.jpg',
      alt: 'Editorial portrait of a woman with a sculptural updo and gold hair ornament',
      title: 'The quiet drama of a considered look',
      category: 'Beauty story',
    },
    {
      src: '/images/still-life.jpg',
      alt: 'Beauty tools, pearl comb and gold hair pins arranged on deep oxblood fabric',
      title: 'Small details, held beautifully',
      category: 'Details',
    },
    {
      src: '/images/bridal-concept.jpg',
      alt: 'Editorial bridal portrait in a deep wine dupatta with restrained gold jewellery',
      title: 'A bridal mood, not a formula',
      category: 'Bridal concept',
    },
    {
      src: '/images/detail-manicure.jpg',
      alt: 'Hands with a neutral glossy manicure holding a cream rose over satin',
      title: 'Soft light, polished finish',
      category: 'Hands & beauty',
    },
    {
      src: '/images/hair-detail.jpg',
      alt: 'Close editorial detail of glossy dark hair in a low bun with a gold pin',
      title: 'The finish is everything',
      category: 'Hair detail',
    },
  ],
  services: [
    { number: '01', title: 'Hair & styling', text: 'Polished texture, occasion styling and looks shaped around your features.', note: 'Proposed category' },
    { number: '02', title: 'Makeup moments', text: 'Skin-led makeup for the days that deserve a little more intention.', note: 'Proposed category' },
    { number: '03', title: 'Bridal direction', text: 'A considered bridal look, from the first moodboard to the final pin.', note: 'Concept offering' },
  ],
  benefits: [
    { title: 'A private pace', text: 'Time to talk through the look before anything begins.' },
    { title: 'Details first', text: 'A beauty experience shaped by finish, proportion and feeling.' },
    { title: 'Made for the moment', text: 'Looks that belong to your event, your wardrobe and your face.' },
  ],
  testimonials: [
    { quote: '“A beautiful starting point for the kind of salon experience Hyderabad deserves.”', byline: 'Demo testimonial · concept copy' },
    { quote: '“The mood is intimate, considered and never overdone.”', byline: 'Demo testimonial · concept copy' },
  ],
} as const;

export type GalleryImage = (typeof site.images)[number];