export const site = {
  name: 'IQRASH Beauty Salon',
  address: 'E, Bungalow #157/A, Block-E, Unit 6, Latifabad Road, Sector Latifabad, Hyderabad, 71800, Pakistan',
  phoneDisplay: '03329990159',
  phoneHref: 'tel:+923329990159',
  whatsappHref:
    'https://wa.me/923329990159?text=Hello%20IQRASH%20Beauty%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.%20Please%20share%20your%20available%20timings%20and%20services.%20Thank%20you.',
  mapHref: 'https://maps.app.goo.gl/E7mPnb3njFCTEryM8',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.4770183497!2d68.3287938554199!3d25.367319400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c713a6165a977%3A0xe97064bd8c82dc9e!2sIQRASH%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1789651537658!5m2!1sen!2s',
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
    {
      number: '01',
      title: 'Hair Styling',
      text: 'Polished texture, occasion styling and looks shaped around your features.',
      note: 'Proposed category',
      image: '/images/hero-beauty.jpg',
      alt: 'Editorial portrait with a sculptural updo and gold hair ornament',
    },
    {
      number: '02',
      title: 'Hair Color & Treatments',
      text: 'A considered finish for glossy color, movement and healthy-looking hair.',
      note: 'Proposed category',
      image: '/images/hair-detail.jpg',
      alt: 'Close editorial detail of glossy dark hair in a low bun with a gold pin',
    },
    {
      number: '03',
      title: 'Makeup',
      text: 'Skin-led makeup for the days that deserve a little more intention.',
      note: 'Proposed category',
      image: '/images/bridal-concept.jpg',
      alt: 'Editorial beauty portrait with softly defined eyes and warm neutral makeup',
    },
    {
      number: '04',
      title: 'Skin Care',
      text: 'A calm beauty ritual focused on fresh skin and a quietly luminous finish.',
      note: 'Proposed category',
      image: '/images/still-life.jpg',
      alt: 'Beauty tools and pearl comb arranged on deep oxblood fabric',
    },
    {
      number: '05',
      title: 'Bridal Beauty',
      text: 'A refined bridal direction, from the first moodboard to the final pin.',
      note: 'Concept offering',
      image: '/images/bridal-concept.jpg',
      alt: 'Editorial bridal portrait in a deep wine dupatta with restrained gold jewellery',
    },
    {
      number: '06',
      title: 'Nails & Beauty Care',
      text: 'Polished details that complete the look, from a soft neutral manicure onward.',
      note: 'Proposed category',
      image: '/images/detail-manicure.jpg',
      alt: 'Hands with a neutral glossy manicure holding a cream rose over satin',
    },
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