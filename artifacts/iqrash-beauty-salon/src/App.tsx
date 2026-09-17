import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Clock3, ExternalLink, Facebook, Heart, Instagram, MapPin, Menu, MessageCircle, Navigation, Phone, Sparkles, X } from 'lucide-react';
import { site, type GalleryImage } from '@/data/site';

function SmartImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [imageSrc, setImageSrc] = useState(src);
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImageSrc('/images/still-life.jpg')}
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') openImage((activeIndex + 1) % site.images.length);
      if (event.key === 'ArrowLeft') openImage((activeIndex - 1 + site.images.length) % site.images.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage, activeIndex]);

  const openImage = (index: number) => {
    setActiveIndex(index);
    setActiveImage(site.images[index]);
  };

  const navItems = [
    { href: '#story', label: 'Our point of view' },
    { href: '#services', label: 'The edit' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Visit' },
  ];

  return (
    <main className="grain min-h-[100dvh] bg-background">
      <div className="bg-primary px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
        A proposed digital home for IQRASH Beauty Salon · Trenex Agency demo
      </div>

      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary">
              <img src="/iqrash-logo.png" alt="IQRASH Beauty Salon logo" className="h-12 w-12 object-contain" />
            </span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.16em] text-primary sm:block">IQRASH<br /><span className="font-normal tracking-[0.12em] text-muted-foreground">Beauty Salon</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-primary" data-testid={`link-nav-${item.href.slice(1)}`}>{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="hidden items-center gap-2 border border-primary px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex" data-testid="link-header-whatsapp">
              <MessageCircle size={14} strokeWidth={1.7} /> Book via WhatsApp
            </a>
            <button type="button" className="rounded-full p-2 text-primary md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-foreground/10 bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-foreground/10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary" data-testid={`link-mobile-${item.href.slice(1)}`}>{item.label}</a>)}
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 bg-primary px-4 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground" data-testid="link-mobile-whatsapp"><MessageCircle size={15} /> Start an enquiry</a>
          </nav>
        )}
      </header>

      <section id="top" className="editorial-grid relative overflow-hidden px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative z-10 reveal">
            <p className="mb-7 flex items-center gap-3 font-mono-ui text-[10px] font-bold uppercase tracking-[0.18em] text-accent"><span className="h-px w-9 bg-accent" /> Latifabad · Hyderabad</p>
            <h1 className="max-w-[760px] font-display text-[clamp(4.3rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.055em] text-primary">Beauty,<br /><em>with a point</em><br />of view.</h1>
            <p className="mt-9 max-w-[390px] text-[15px] leading-7 text-foreground/70">A proposed digital home for IQRASH Beauty Salon — an intimate place for polished hair, skin-led makeup and the moments that call for a little more.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#services" className="group flex items-center gap-3 bg-primary px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground" data-testid="link-hero-explore">Explore the edit <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
              <a href={site.phoneHref} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary" data-testid="link-hero-phone"><Phone size={14} strokeWidth={1.7} /> {site.phoneDisplay}</a>
            </div>
          </div>
          <div className="relative reveal reveal-delay-1">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-accent/70 md:-left-8 md:-top-8" />
            <div className="image-zoom relative aspect-[0.82] overflow-hidden bg-primary/15 md:aspect-[0.9]">
              <SmartImage src={site.images[0].src} alt={site.images[0].alt} className="h-full w-full object-cover" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-background/90 px-4 py-3 backdrop-blur-sm"><Sparkles size={14} className="text-accent" /><span className="font-mono-ui text-[9px] font-bold uppercase tracking-[0.16em] text-primary">A considered kind of beautiful</span></div>
            </div>
            <span className="absolute -right-2 top-8 font-mono-ui text-[9px] uppercase tracking-[0.2em] text-primary/60 [writing-mode:vertical-rl] md:-right-8">IQRASH / 01</span>
          </div>
        </div>
        <a href="#story" className="mx-auto mt-16 flex max-w-[1440px] items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60" data-testid="link-scroll-story"><span className="h-px w-10 bg-accent" /> Scroll to enter</a>
      </section>

      <section id="story" className="bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
          <div className="reveal"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">01 / The feeling</p><div className="mt-14 h-px w-20 bg-accent/70" /></div>
          <div className="reveal reveal-delay-1">
            <h2 className="max-w-[830px] font-display text-[clamp(3rem,7vw,7.3rem)] leading-[0.88] tracking-[-0.04em]">Not more. <em>More you.</em></h2>
            <p className="mt-10 max-w-[600px] text-lg leading-8 text-primary-foreground/70">Beauty here is not a before-and-after. It is a pause, a conversation, the right light and the last small detail that makes the whole look feel like yours.</p>
            <div className="mt-12 grid gap-7 border-t border-primary-foreground/20 pt-7 sm:grid-cols-3">
              {['Intimate', 'Intentional', 'Unhurried'].map((word, index) => <div key={word}><p className="font-display text-3xl italic text-accent">{word}</p><p className="mt-2 font-mono-ui text-[9px] uppercase tracking-[0.17em] text-primary-foreground/50">The IQRASH edit · 0{index + 1}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal"><p className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em] text-accent">02 / The edit</p><h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.04em] text-primary md:text-8xl">Your look,<br /><em>edited.</em></h2></div>
            <p className="max-w-[290px] text-xs leading-6 text-muted-foreground reveal reveal-delay-1">A proposed selection for the salon’s digital menu. Please confirm current services and availability directly with the salon.</p>
          </div>
          <div className="border-t border-primary/20">
            {site.services.map((service, index) => <article key={service.number} className="reveal group grid gap-5 border-b border-primary/20 py-7 transition-colors hover:bg-secondary/30 md:grid-cols-[100px_1fr_1.1fr_150px] md:items-center md:gap-8">
              <span className="font-mono-ui text-xs text-accent">{service.number}</span><h3 className="font-display text-4xl text-primary md:text-5xl">{service.title}</h3><p className="max-w-[380px] text-sm leading-6 text-muted-foreground">{service.text}</p><span className="font-mono-ui text-[9px] uppercase tracking-[0.1em] text-muted-foreground/70">{service.note}</span>
            </article>)}
          </div>
          <div className="mt-9 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.17em] text-primary"><span className="h-px w-12 bg-accent" /> Menu details are intentionally open for confirmation</div>
        </div>
      </section>

      <section className="bg-secondary/55 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1fr_0.9fr]">
          <div className="reveal">
            <div className="image-zoom relative aspect-[0.9] max-w-[520px] overflow-hidden"><SmartImage src={site.images[1].src} alt={site.images[1].alt} className="h-full w-full object-cover" /><span className="absolute left-4 top-4 bg-background px-3 py-2 font-mono-ui text-[9px] uppercase tracking-[0.15em] text-primary">The beauty story</span></div>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em] text-accent">A salon is a mood</p>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.04em] text-primary md:text-8xl">The art of<br /><em>the detail.</em></h2>
            <p className="mt-8 max-w-[410px] text-base leading-7 text-foreground/65">From the way a pin catches the light to the finish that lasts through dinner, the difference lives in the details nobody has to point out.</p>
            <a href="#gallery" className="group mt-9 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-primary" data-testid="link-story-gallery">View the visual story <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between gap-6"><div className="reveal"><p className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em] text-accent">03 / Portfolio study</p><h2 className="mt-5 font-display text-6xl leading-none text-primary md:text-8xl">A little<br /><em>visual diary.</em></h2></div><p className="hidden max-w-[190px] text-right text-xs leading-5 text-muted-foreground sm:block reveal reveal-delay-1">Concept imagery for demonstration. Tap any frame to view it larger.</p></div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            {site.images.map((image, index) => <button key={image.src} type="button" onClick={() => openImage(index)} className={`image-zoom group relative overflow-hidden bg-primary/10 text-left ${index === 0 ? 'col-span-2 aspect-[1.55] md:col-span-7 md:row-span-2 md:aspect-auto' : index === 1 ? 'col-span-1 aspect-square md:col-span-5' : index === 2 ? 'col-span-1 aspect-square md:col-span-5' : 'col-span-1 aspect-square md:col-span-3'}`} data-testid={`button-gallery-${index}`}>
              <SmartImage src={image.src} alt={image.alt} className="h-full w-full object-cover" /><span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-primary/90 px-4 py-3 text-primary-foreground transition-transform group-hover:translate-y-0"><span className="font-mono-ui text-[9px] uppercase tracking-[0.12em]">{image.category}</span><ArrowUpRight size={14} /></span>
            </button>)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[0.8fr_1fr]">
          <div className="reveal"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">04 / Bridal concept</p><h2 className="mt-6 font-display text-6xl leading-[0.9] md:text-[7rem]">Your day,<br /><em>your signature.</em></h2><p className="mt-8 max-w-[400px] text-sm leading-7 text-primary-foreground/65">A proposed bridal direction: luminous skin, sculpted shape and the kind of restraint that lets you walk into the room first.</p><a href={site.whatsappHref} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 border border-accent px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent hover:text-primary" data-testid="link-bridal-enquiry">Discuss your bridal look <ArrowUpRight size={15} /></a></div>
          <div className="reveal reveal-delay-1 relative"><div className="image-zoom aspect-[0.78] overflow-hidden md:aspect-[0.8]"><SmartImage src={site.images[2].src} alt={site.images[2].alt} className="h-full w-full object-cover" /></div><div className="absolute -bottom-5 -left-5 hidden h-28 w-28 border-b border-l border-accent md:block" /><p className="absolute -right-3 top-5 font-mono-ui text-[9px] uppercase tracking-[0.2em] text-accent [writing-mode:vertical-rl]">A proposed bridal mood</p></div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 reveal"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">The IQRASH promise</p><h2 className="mt-5 max-w-[700px] font-display text-5xl leading-[0.92] text-primary md:text-7xl">Good beauty is felt<br /><em>before it is seen.</em></h2></div>
          <div className="grid gap-px bg-primary/20 md:grid-cols-3">{site.benefits.map((benefit, index) => <div key={benefit.title} className="reveal bg-background p-7 md:p-9"><Heart size={17} className="text-accent" strokeWidth={1.4} /><p className="mt-10 font-display text-3xl text-primary">{benefit.title}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{benefit.text}</p><p className="mt-8 font-mono-ui text-[9px] text-accent">0{index + 1}</p></div>)}</div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex items-center justify-between border-b border-primary/20 pb-5"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">Words in the margin</p><span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Demo copy only</span></div>
          <div className="grid gap-10 pt-10 md:grid-cols-2 md:gap-20">{site.testimonials.map((testimonial, index) => <figure key={testimonial.quote} className="reveal"><blockquote className="font-display text-3xl leading-tight text-primary md:text-4xl">{testimonial.quote}</blockquote><figcaption className="mt-6 font-mono-ui text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{testimonial.byline}</figcaption><div className="mt-8 h-px w-20 bg-accent" /></figure>)}</div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1180px] border border-primary bg-primary px-6 py-12 text-primary-foreground md:px-14 md:py-16">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]"><div className="reveal"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">Ready when you are</p><h2 className="mt-5 max-w-[680px] font-display text-6xl leading-[0.88] md:text-8xl">Let’s make<br /><em>an entrance.</em></h2><p className="mt-7 max-w-[450px] text-sm leading-6 text-primary-foreground/65">For appointments, availability and confirmed services, start a conversation with IQRASH directly.</p></div><a href={site.whatsappHref} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-8 border border-accent px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent hover:text-primary md:min-w-[250px]" data-testid="link-appointment-cta">Make an enquiry <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div>
        </div>
      </section>

      <section id="contact" className="border-t border-primary/20 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[0.8fr_1fr] md:gap-20">
          <div className="reveal"><p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent">05 / Find your way</p><h2 className="mt-5 font-display text-6xl leading-[0.88] text-primary md:text-8xl">Come<br /><em>say hello.</em></h2><div className="mt-12 space-y-6"><a href={site.phoneHref} className="flex items-start gap-4 text-sm text-primary" data-testid="link-contact-phone"><Phone size={18} className="mt-0.5 text-accent" strokeWidth={1.5} /><span><strong className="block text-[10px] uppercase tracking-[0.15em]">Call the salon</strong><span className="mt-1 block text-muted-foreground">{site.phoneDisplay}</span></span></a><a href={site.mapHref} target="_blank" rel="noreferrer" className="flex items-start gap-4 text-sm text-primary" data-testid="link-contact-map"><MapPin size={18} className="mt-0.5 text-accent" strokeWidth={1.5} /><span><strong className="block text-[10px] uppercase tracking-[0.15em]">Find us</strong><span className="mt-1 block max-w-[290px] leading-6 text-muted-foreground">{site.address}</span></span></a><div className="flex items-start gap-4 text-sm text-primary"><Clock3 size={18} className="mt-0.5 text-accent" strokeWidth={1.5} /><span><strong className="block text-[10px] uppercase tracking-[0.15em]">Proposed hours · confirm directly</strong><span className="mt-1 block text-muted-foreground">{site.proposedHours}</span></span></div></div></div>
          <div className="reveal reveal-delay-1"><div className="editorial-grid relative flex min-h-[380px] flex-col justify-between overflow-hidden border border-primary/20 bg-secondary/45 p-6 md:min-h-[480px] md:p-9"><div className="flex items-start justify-between"><span className="flex items-center gap-2 font-mono-ui text-[9px] uppercase tracking-[0.17em] text-primary"><span className="h-2 w-2 rounded-full bg-accent" /> Latifabad Unit 6</span><Navigation size={20} className="text-accent" strokeWidth={1.3} /></div><div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-accent/50"><div className="absolute h-28 w-28 rounded-full border border-primary/25" /><div className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_0_9px_hsl(var(--accent)/.14)]" /><span className="absolute bottom-[-28px] font-mono-ui text-[9px] uppercase tracking-[0.15em] text-primary">E, Bungalow #157/A</span></div><a href={site.mapHref} target="_blank" rel="noreferrer" className="flex items-center justify-between border-t border-primary/20 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary" data-testid="link-open-map">Open in Google Maps <ExternalLink size={14} /></a></div></div>
        </div>
      </section>

      <footer className="bg-primary px-5 py-12 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-10 border-b border-primary-foreground/20 pb-10 md:flex-row md:items-end"><div><p className="font-display text-5xl leading-none">IQRASH</p><p className="mt-3 font-mono-ui text-[9px] uppercase tracking-[0.2em] text-accent">Beauty Salon · Hyderabad, Pakistan</p></div><div className="flex gap-5"><a href={site.instagramHref} target="_blank" rel="noreferrer" aria-label="IQRASH on Instagram" className="text-primary-foreground/75 transition-colors hover:text-accent" data-testid="link-footer-instagram"><Instagram size={18} strokeWidth={1.5} /></a><a href={site.facebookHref} target="_blank" rel="noreferrer" aria-label="IQRASH on Facebook" className="text-primary-foreground/75 transition-colors hover:text-accent" data-testid="link-footer-facebook"><Facebook size={18} strokeWidth={1.5} /></a><a href={site.whatsappHref} target="_blank" rel="noreferrer" aria-label="Message IQRASH on WhatsApp" className="text-primary-foreground/75 transition-colors hover:text-accent" data-testid="link-footer-whatsapp"><MessageCircle size={18} strokeWidth={1.5} /></a></div></div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-[9px] font-bold uppercase tracking-[0.14em] text-primary-foreground/50 md:flex-row"><span>© {new Date().getFullYear()} IQRASH Beauty Salon</span><span>Digital concept by Trenex Agency · Demo content is labelled</span></div>
        </div>
      </footer>

      {activeImage && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-5 md:p-10" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setActiveImage(null)}><button type="button" onClick={() => setActiveImage(null)} aria-label="Close image viewer" className="absolute right-5 top-5 rounded-full border border-primary-foreground/30 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/10" data-testid="button-lightbox-close"><X size={20} /></button><button type="button" onClick={(event) => { event.stopPropagation(); openImage((activeIndex - 1 + site.images.length) % site.images.length); }} aria-label="Previous image" className="absolute left-3 top-1/2 rounded-full border border-primary-foreground/30 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:left-8" data-testid="button-lightbox-previous"><ChevronLeft size={20} /></button><div className="max-h-[85vh] max-w-[min(85vw,900px)]" onClick={(event) => event.stopPropagation()}><SmartImage src={activeImage.src} alt={activeImage.alt} className="max-h-[78vh] w-auto max-w-full object-contain" /><div className="mt-4 flex items-start justify-between gap-5 text-primary-foreground"><div><p className="font-display text-2xl">{activeImage.title}</p><p className="mt-1 font-mono-ui text-[9px] uppercase tracking-[0.14em] text-primary-foreground/55">{activeImage.category} · {activeIndex + 1} / {site.images.length}</p></div><button type="button" onClick={(event) => { event.stopPropagation(); openImage((activeIndex + 1) % site.images.length); }} aria-label="Next image" className="border border-primary-foreground/30 p-3 transition-colors hover:bg-primary-foreground/10" data-testid="button-lightbox-next"><ChevronRight size={18} /></button></div></div></div>}
    </main>
  );
}

export default App;