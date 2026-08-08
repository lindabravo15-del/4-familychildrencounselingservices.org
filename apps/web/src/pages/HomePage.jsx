import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Menu, X, Baby, Users, Home, Quote, ChevronLeft, ChevronRight, GraduationCap, PlayCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const SERVICE_ICONS = [Baby, Users, Home];
const SERVICE_TINTS = ['bg-[#e3f0f6]', 'bg-[#fbf1e2]', 'bg-[#e8f2e6]'];
const TESTIMONIAL_IMAGE = '/images/88fcbd02-f014-4950-a240-f5556c7c506d.png';

const Logo = () => <a href="#home" className="flex items-center gap-2.5"><span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#e8f2e6]"><img src="/images/be152104-0808-45f5-aaec-f730661714ba.png" alt="Family illustration" className="h-full w-full object-cover" /></span><span className="font-display text-lg font-600 leading-tight"><span className="text-[#3a5a6b] font-semibold">4-Family &amp; Children </span><span className="text-[#6ba368] font-semibold">Counseling Services</span></span></a>;

const HomePage = () => {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const TESTIMONIALS = t.testimonials.items;
  const currentTestimonial = TESTIMONIALS[testimonialIndex];
  const nextTestimonial = () => setTestimonialIndex(i => (i + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const NAV = [{
    label: t.nav.home,
    href: '#home'
  }, {
    label: t.nav.about,
    href: '#about'
  }, {
    label: t.nav.services,
    href: '#services'
  }, {
    label: t.nav.education,
    href: '#education'
  }, {
    label: t.nav.testimonials,
    href: '#testimonials'
  }, {
    label: t.nav.contact,
    href: '#contact'
  }];
  return <div id="home" className="min-h-screen bg-white text-[#3a5a6b]">
            <Helmet>
                <title>4-Family &amp; Children Counseling Services | Family Therapy, Child &amp; Teen Counseling in Rialto, CA</title>
                <meta name="description" content="Compassionate family counseling, child therapy, teen counseling, and parenting support in Rialto, CA. Serving Riverside and San Bernardino County including Moreno Valley, Corona, Temecula, Menifee, Perris, Wildomar, Norco, and East Valley. Hablamos español. Call (951) 906-0176." />
            </Helmet>
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-[#eef2f4] bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-3.5">
                    <Logo />
                    <nav className="hidden items-center gap-8 lg:flex">
                        {NAV.map(n => <a key={n.label} href={n.href} className="text-[15px] font-semibold text-[#4a6273] transition-colors hover:text-[#6ba368]">
                                {n.label}
                            </a>)}
                        <LanguageToggle />
                        <a href="#contact" className="rounded-md bg-[#7bb06e] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba368]">
                            {t.nav.callUs}
                        </a>
                    </nav>
                    <div className="flex items-center gap-3 lg:hidden">
                        <LanguageToggle />
                        <button onClick={() => setOpen(v => !v)} aria-label="Menu">
                            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {open && <nav className="flex flex-col gap-1 border-t border-[#eef2f4] px-5 py-3 lg:hidden">
                        {NAV.map(n => <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-[15px] font-semibold text-[#4a6273] hover:bg-[#f4f8f5]">
                                {n.label}
                            </a>)}
                        <a href="#contact" onClick={() => setOpen(false)} className="mt-1 rounded-md bg-[#7bb06e] px-5 py-2.5 text-center text-sm font-semibold text-white">
                            {t.nav.callUs}
                        </a>
                    </nav>}
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#e9f3ee] via-[#eaf2f5] to-[#f3f0e6]">
                <div className="mx-auto grid max-w-[80rem] items-center gap-8 px-5 pt-12 pb-24 md:grid-cols-2 md:pt-16">
                    <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}>
                        <h1 className="font-display text-5xl font-bold leading-[1.08] text-[#3a5a6b] md:text-6xl">
                            {t.hero.title}
                        </h1>
                        <p className="mt-6 text-lg text-[#5a7183]">
                            {t.hero.subtitle}
                        </p>
                        <Link to="/intake" className="mt-8 inline-block rounded-md bg-[#7bb06e] px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#6ba368] hover:-translate-y-0.5">
                            {t.hero.cta}
                        </Link>
                    </motion.div>
                    <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          ease: 'easeOut',
          delay: 0.1
        }} className="overflow-hidden rounded-3xl shadow-xl">
                        <img src="/images/96b69519-8637-4bb0-a917-8a210a49c01e.png" alt="A mother and her young son smiling together on a sofa" className="h-full w-full object-cover" />
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full leading-[0]">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-16 w-full md:h-24">
                        <path fill="#ffffff" d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" />
                    </svg>
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="bg-white px-5 py-20">
                <div className="mx-auto max-w-[72rem]">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-px w-10 bg-[#c9d6cf]" />
                        <h2 className="font-display text-3xl font-bold text-[#3a5a6b] md:text-4xl">{t.about.heading}</h2>
                        <span className="h-px w-10 bg-[#c9d6cf]" />
                    </div>
                    <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-60px'
        }} transition={{
          duration: 0.6,
          ease: 'easeOut'
        }} className="rounded-2xl bg-gradient-to-br from-[#f9fdfb] to-[#f5f9fc] border border-[#eef2f4] p-8 md:p-12">
                        <p className="text-lg leading-relaxed text-[#5a7183]">
                            {t.about.p1}
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-[#5a7183]">
                            {t.about.p2}
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#7a9aaa] italic">
                            {t.about.p3}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="bg-white px-5 pb-24 pt-8">
                <div className="mx-auto max-w-[72rem]">
                    <div className="flex items-center justify-between gap-6 mb-8">
                        <div className="flex items-center justify-center gap-3 flex-1">
                            <span className="h-px w-10 bg-[#c9d6cf]" />
                            <h2 className="font-display text-3xl font-bold text-[#3a5a6b] md:text-4xl">{t.services.heading}</h2>
                            <span className="h-px w-10 bg-[#c9d6cf]" />
                        </div>
                    </div>
                    <div className="text-center">
                    <p className="mt-3 text-lg italic text-[#5a7183]">
                        {t.services.tagline}
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {t.services.items.map((s, i) => {
                          const Icon = SERVICE_ICONS[i];
                          return <motion.div key={s.title} initial={{
              opacity: 0,
              y: 24
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-60px'
            }} transition={{
              duration: 0.5,
              delay: i * 0.12,
              ease: 'easeOut'
            }} className="overflow-hidden rounded-2xl border border-[#eef2f4] bg-white text-left shadow-sm transition-shadow hover:shadow-md">
                                <div className={`flex items-center justify-center py-8 ${SERVICE_TINTS[i]}`}>
                                    <Icon className="h-12 w-12 text-[#6ba368]" strokeWidth={1.4} />
                                </div>
                                <div className="px-6 py-6 text-center">
                                    <h3 className="font-display text-xl font-semibold text-[#3a5a6b]">{s.title}</h3>
                                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#5a7183]">{s.desc}</p>
                                </div>
                            </motion.div>;
                        })}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <p className="text-2xl font-semibold text-[#6ba368]">
                            {t.services.spanish}
                        </p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <img src="/images/images-2-RtM75.png" alt="Tree of life illustration" className="h-20 w-20 object-contain" />
                    </div>
                    </div>
                </div>
            </section>

            {/* Educational Video */}
            <section id="education" className="bg-gradient-to-b from-white to-[#eaf3ef] px-5 py-20">
                <div className="mx-auto max-w-[72rem]">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <GraduationCap className="h-7 w-7 text-[#6ba368]" strokeWidth={1.6} />
                        <h2 className="font-display text-3xl font-bold text-[#3a5a6b] md:text-4xl">{t.education.heading}</h2>
                    </div>
                    <p className="text-center text-lg font-semibold text-[#6ba368] mb-10">{t.education.subheading}</p>
                    <div className="space-y-10">
                        {t.education.videos.map((video, i) => (
                            <motion.div key={video.videoId} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true,
                  margin: '-60px'
                }} transition={{
                  duration: 0.6,
                  ease: 'easeOut'
                }} className={`grid gap-8 md:grid-cols-[1.4fr_1fr] items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                                <div className={`overflow-hidden rounded-2xl border border-[#eef2f4] bg-black shadow-lg ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube.com/embed/${video.videoId}`} title={video.caption} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                    </div>
                                </div>
                                <div className={`rounded-2xl bg-white/80 p-8 shadow-sm backdrop-blur ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="flex items-center gap-2 mb-4">
                                        <PlayCircle className="h-5 w-5 text-[#6ba368]" />
                                        <span className="font-display text-lg font-semibold text-[#3a5a6b]">{video.caption}</span>
                                    </div>
                                    <p className="text-[15px] leading-relaxed text-[#5a7183]">{video.intro}</p>
                                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#7bb06e] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba368]">
                                        <PlayCircle className="h-4 w-4" />
                                        {t.education.watchOnYoutube}
                                    </a>
                                    <p className="mt-4 text-xs italic text-[#8a9aa6]">{video.disclaimer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials + Contact */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf3ef] to-[#e6f0f4] px-5 py-20">
                <div className="mx-auto grid max-w-[72rem] items-stretch gap-6 md:grid-cols-2">
                    {/* Testimonial Carousel */}
                    <div id="testimonials" className="rounded-2xl bg-white/80 p-8 shadow-sm backdrop-blur">
                        <motion.div key={testimonialIndex} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} transition={{
            duration: 0.4
          }} className="flex flex-col items-start gap-6 sm:flex-row">
                            <img src={TESTIMONIAL_IMAGE} alt={`${currentTestimonial.author}, counseling client`} className="h-24 w-24 shrink-0 rounded-full border-4 border-white object-cover shadow-md" />
                            <div className="flex-1">
                                <h3 className="font-display text-2xl font-bold text-[#3a5a6b]">
                                    {t.testimonials.heading}
                                </h3>
                                <Quote className="mt-4 h-6 w-6 text-[#a9c9a2]" />
                                <p className="mt-2 text-[15px] italic leading-relaxed text-[#5a7183]">"{currentTestimonial.quote}"</p>
                                <p className="mt-3 font-semibold text-[#3a5a6b]">- {currentTestimonial.author}</p>
                                <div className="mt-6 flex items-center gap-2">
                                    <button onClick={prevTestimonial} className="rounded-full p-2 hover:bg-[#f0f4f2] transition-colors" aria-label="Previous testimonial">
                                        <ChevronLeft className="h-5 w-5 text-[#6ba368]" />
                                    </button>
                                    <div className="flex gap-1.5">
                                        {TESTIMONIALS.map((_, i) => <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-2 rounded-full transition-all ${i === testimonialIndex ? 'w-6 bg-[#6ba368]' : 'w-2 bg-[#c9d6cf]'}`} aria-label={`Go to testimonial ${i + 1}`} />)}
                                    </div>
                                    <button onClick={nextTestimonial} className="rounded-full p-2 hover:bg-[#f0f4f2] transition-colors" aria-label="Next testimonial">
                                        <ChevronRight className="h-5 w-5 text-[#6ba368]" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact */}
                    <div id="contact" className="rounded-2xl bg-white/80 p-8 shadow-sm backdrop-blur">
                        <div className="flex items-center gap-3">
                            <h3 className="font-display text-2xl font-bold text-[#3a5a6b]">{t.contact.heading}</h3>
                            <span className="h-px flex-1 bg-[#c9d6cf]" />
                        </div>
                        <p className="mt-4 text-[#5a7183]">{t.contact.subtitle}</p>
                        <ul className="mt-6 space-y-4 text-[#4a6273]">
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#6ba368]" />
                                <span><span className="font-semibold">{t.contact.call}</span> (951)906-0176</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#6ba368]" />
                                <span><span className="font-semibold">{t.contact.email}</span>&nbsp;counselingservices4you@outlook.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-[#6ba368]" />
                                <span><span className="font-semibold">{t.contact.location}</span></span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#6a8a96]">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#a9c9a2]" />
                                <span>{t.contact.areas}</span>
                            </li>
                        </ul>
                        <Link to="/contact-email" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#7bb06e] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba368]">
                            <Mail className="h-4 w-4" />
                            {t.contact.emailUs}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="bg-[#f5f9fc] border-t border-[#eef2f4] px-5 py-8">
                <div className="mx-auto max-w-[72rem] text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#8aacba] mb-3">
                        {language === 'es' ? 'Áreas de Servicio' : 'Areas We Serve'}
                    </p>
                    <p className="text-sm text-[#5a7183] leading-relaxed">
                        <span className="font-semibold text-[#3a5a6b]">Family counseling, child therapy &amp; teen counseling</span> serving{' '}
                        <span className="font-medium">Rialto, Moreno Valley, Corona, Temecula, Menifee, Perris, Wildomar, Norco, East Valley</span> and all of{' '}
                        <span className="font-medium">Riverside County &amp; San Bernardino County, CA</span>. In-office and Telehealth available. <span className="italic">Hablamos español.</span>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#3a5a6b] px-5 py-8 text-center text-sm text-[#cfdde4]">
                <div className="mx-auto flex max-w-[72rem] flex-col items-center gap-6">
                    <span className="font-display text-lg font-semibold text-white">4-Family &amp; Children Counseling</span>
                    <p className="mt-2">
                        &copy; {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    {/* Decorative fish art clip - Ichthys (Christian fish symbol) */}
                    <div className="mt-4 flex justify-center">
                        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a8c5d1]">
                            <path d="M 4 15 C 14 -2 46 -2 56 15 C 46 32 14 32 4 15 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M 56 15 L 60 9 L 60 21 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </footer>


        </div>;
};
export default HomePage;
