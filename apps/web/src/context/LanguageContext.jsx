import React, { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', about: 'About Us', services: 'Services', education: 'Education', testimonials: 'Testimonials', contact: 'Contact', callUs: 'Call Us' },
    hero: {
      title: 'Helping Families Thrive Together',
      subtitle: 'Supportive Counseling for Children, Teens & Parents.',
      cta: 'Get Started',
    },
    about: {
      heading: 'About Us',
      p1: 'We are a compassionate counseling practice dedicated to helping children, teens, and parents heal, grow, and thrive. Our work is grounded in trauma-informed care and support for mental health disorders, relationship conflict, sibling challenges, and the emotional stress that can affect the whole family.',
      p2: 'Through education, guidance, and personalized support, we help families across Riverside and San Bernardino County build stronger connections and move forward with confidence. We proudly offer bilingual counseling services in English and Spanish.',
      p3: 'Located in Rialto, CA and available via Telehealth, we serve families throughout the Inland Empire and surrounding communities.',
    },
    services: {
      heading: 'Our Services',
      tagline: 'Guiding Your Family to a Brighter Future',
      items: [
        { title: 'Child & Teen Counseling', desc: 'Individual therapy and behavioral counseling for kids and teens to build confidence, manage emotions, and overcome life challenges. Serving Rialto, Moreno Valley, Perris, and surrounding areas.' },
        { title: 'Parent Counseling', desc: 'Compassionate parenting support and practical guidance for parents and caregivers navigating behavioral issues, stress, and family dynamics.' },
        { title: 'Family Therapy', desc: 'Improving communication and strengthening family bonds. Trauma-informed family counseling for lasting healing and growth throughout Riverside and San Bernardino County.' },
      ],
      spanish: 'Hablamos y hacemos terapia en español',
    },
    testimonials: {
      heading: 'What Our Clients Are Saying',
      items: [
        { quote: 'The staff here have been wonderful. They\'ve easily helped our family connect and grow stronger. Highly recommend!', author: 'Sarah M.' },
        { quote: 'As a desperate parent seeking support for my teen, their counseling services helped stabilize our relationship. Highly recommended.', author: 'Angie B.' },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      subtitle: 'Ready to take the next step? Contact us today!',
      call: 'Call:',
      email: 'Email:',
      location: 'Location: 229 S. Riverside Ave, Suite J Rialto, CA 92375 & Via Telehealth',
      areas: 'Serving: Rialto · Moreno Valley · Corona · Temecula · Menifee · Perris · Wildomar · Norco · East Valley',
      emailUs: 'Email Us Directly',
    },
    education: {
      heading: 'Learn From the Experts',
      subheading: 'Educational Resources for Parents & Families',
      watchOnYoutube: 'Watch on YouTube',
      videos: [
        {
          videoId: 'FXLzyBJUZjs',
          caption: 'Dr. Daniel Amen on the #1 Foundation to Raising Mentally Strong Kids',
          intro: 'Understanding your child\'s brain is the first step toward helping them thrive. In this video, Dr. Daniel Amen — a renowned psychiatrist and brain health expert — shares the foundation for raising mentally strong children and the importance of counseling and early support for kids, teens, and families.',
          disclaimer: 'This video is shared for educational purposes only and is the property of Dr. Daniel Amen and Amen University.',
        },
        {
          videoId: 'jvzQQDfAL-Q',
          caption: 'Dr. Ross Greene — Kids Do Well If They Can: Understanding Challenging Behavior',
          intro: 'In this short video, Dr. Ross Greene, PhD gives a brief overview of the symptoms and disorders behind challenging behavior — including explosive outbursts, ADHD, anxiety, emotional regulation difficulties, and oppositional defiant disorder (ODD). His key idea is simple but powerful: \"kids do well if they can.\" When a child or teen struggles, it usually means lagging skills — not poor motivation — and counseling can help families identify those skills and work together toward lasting change.',
          disclaimer: 'This video is shared for educational purposes only and is the property of Dr. Ross Greene and Lives in the Balance.',
        },
      ],
    },
    footer: {
      copyright: '4-Family & Children Counseling Services. All rights reserved.',
    },
    backHome: 'Back to Home',
    intake: {
      title: 'New Client Inquiry',
      subtitle: "Tell us a bit about what brings you here. We'll reach out shortly to schedule your first appointment.",
      confidentiality: "Your confidentiality is important to us. Please share only the most necessary details here — no sensitive or urgent information — and we'll follow up privately to discuss further.",
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      optional: '(optional)',
      reason: 'Reason for Inquiry',
      selectReason: 'Select a reason',
      reasons: ['Child & Teen Counseling', 'Parent Counseling', 'Family Therapy', 'Other'],
      tellUsMore: 'Tell us more',
      tellUsMorePlaceholder: 'Share anything that will help us understand your situation...',
      submit: 'Submit Inquiry Form',
      sending: 'Sending...',
      errorRequired: 'Please fill in your name, email, and reason for services.',
      errorGeneric: 'Something went wrong sending your form. Please try again.',
      successTitle: 'Thank You',
      successMessage: 'Your intake form has been sent. Our team will be in touch with you soon.',
      returnHome: 'Return Home',
    },
    contactEmailPage: {
      title: 'Email Us Directly',
      subtitle: 'Send us a short message and someone will contact you shortly.',
      confidentiality: "Your confidentiality is important to us. Please share only the most necessary details here — no sensitive or urgent information — and we'll follow up privately to discuss further.",
      fullName: 'Full Name',
      email: 'Email',
      message: 'Your Message',
      messageHint: '(please keep it brief)',
      messagePlaceholder: 'A few sentences about what you need help with...',
      submit: 'Send Message',
      sending: 'Sending...',
      errorRequired: 'Please fill in your name, email, and a short message.',
      errorGeneric: 'Something went wrong sending your message. Please try again.',
      successTitle: 'Message Sent',
      successMessage: 'Thank you for reaching out. Our team will contact you shortly.',
      returnHome: 'Return Home',
    },
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', education: 'Educación', testimonials: 'Testimonios', contact: 'Contacto', callUs: 'Llámenos' },
    hero: {
      title: 'Ayudando a las Familias a Prosperar Juntas',
      subtitle: 'Consejería de Apoyo para Niños, Adolescentes y Padres.',
      cta: 'Comenzar',
    },
    about: {
      heading: 'Nosotros',
      p1: 'Somos una práctica de consejería compasiva dedicada a ayudar a niños, adolescentes y padres a sanar, crecer y prosperar. Nuestro trabajo se basa en el cuidado informado sobre trauma y el apoyo para trastornos de salud mental, conflictos de relación, desafíos entre hermanos y el estrés emocional que puede afectar a toda la familia.',
      p2: 'A través de la educación, la orientación y el apoyo personalizado, ayudamos a las familias en los condados de Riverside y San Bernardino a construir conexiones más fuertes y avanzar con confianza. Ofrecemos servicios de consejería bilingüe en inglés y español.',
      p3: 'Ubicados en Rialto, CA y disponibles vía Telesalud, servimos a familias en todo el Inland Empire y comunidades circundantes.',
    },
    services: {
      heading: 'Nuestros Servicios',
      tagline: 'Guiando a Su Familia Hacia un Futuro Más Brillante',
      items: [
        { title: 'Consejería para Niños y Adolescentes', desc: 'Terapia individual y consejería conductual para niños y adolescentes para desarrollar confianza, manejar emociones y superar desafíos. Servimos Rialto, Moreno Valley, Perris y áreas circundantes.' },
        { title: 'Consejería para Padres', desc: 'Apoyo compasivo y orientación práctica para padres y cuidadores que enfrentan problemas de comportamiento, estrés y dinámica familiar.' },
        { title: 'Terapia Familiar', desc: 'Mejorando la comunicación y fortaleciendo los lazos familiares. Consejería familiar con enfoque en trauma para una sanación duradera en los condados de Riverside y San Bernardino.' },
      ],
      spanish: 'Hablamos y hacemos terapia en español',
    },
    testimonials: {
      heading: 'Lo Que Dicen Nuestros Clientes',
      items: [
        { quote: 'El personal aquí ha sido maravilloso. Han ayudado fácilmente a nuestra familia a conectarse y fortalecerse. ¡Muy recomendable!', author: 'Sarah M.' },
        { quote: 'Como madre desesperada buscando apoyo para mi adolescente, sus servicios de consejería ayudaron a estabilizar nuestra relación. Muy recomendable.', author: 'Angie B.' },
      ],
    },
    contact: {
      heading: 'Póngase en Contacto',
      subtitle: '¿Listo para dar el siguiente paso? ¡Contáctenos hoy!',
      call: 'Llamar:',
      email: 'Correo:',
      location: 'Ubicación: 229 S. Riverside Ave, Suite J Rialto, CA 92375 y Vía Telesalud',
      areas: 'Áreas de servicio: Rialto · Moreno Valley · Corona · Temecula · Menifee · Perris · Wildomar · Norco · East Valley',
      emailUs: 'Envíenos un Correo Directamente',
    },
    education: {
      heading: 'Aprenda de los Expertos',
      subheading: 'Recursos Educativos para Padres y Familias',
      watchOnYoutube: 'Ver en YouTube',
      videos: [
        {
          videoId: 'FXLzyBJUZjs',
          caption: 'El Dr. Daniel Amen sobre la base #1 para criar niños mentalmente fuertes',
          intro: 'Entender el cerebro de su hijo es el primer paso para ayudarle a prosperar. En este video, el Dr. Daniel Amen — un renombrado psiquiatra y experto en salud cerebral — comparte la base para criar niños mentalmente fuertes y la importancia de la consejería y el apoyo temprano para niños, adolescentes y familias.',
          disclaimer: 'Este video se comparte solo con fines educativos y es propiedad del Dr. Daniel Amen y Amen University.',
        },
        {
          videoId: 'jvzQQDfAL-Q',
          caption: 'Dr. Ross Greene — Los Niños Se Comportan Bien Si Pueden: Entendiendo el Comportamiento Desafiante',
          intro: 'En este video corto, el Dr. Ross Greene, PhD ofrece una breve explicación general de los síntomas y trastornos detrás del comportamiento desafiante — incluyendo explosiones de ira, TDAH, ansiedad, dificultades de regulación emocional y trastorno desafiante oposicional (ODD). Su idea central es sencilla pero poderosa: \"los niños se comportan bien si pueden\". Cuando un niño o adolescente lucha, generalmente significa habilidades faltantes — no falta de motivación — y la consejería puede ayudar a las familias a identificar esas habilidades y trabajar juntas hacia un cambio duradero.',
          disclaimer: 'Este video se comparte solo con fines educativos y es propiedad del Dr. Ross Greene y Lives in the Balance.',
        },
      ],
    },
    footer: {
      copyright: '4-Family & Children Counseling Services. Todos los derechos reservados.',
    },
    backHome: 'Volver al Inicio',
    intake: {
      title: 'Nueva Consulta de Cliente',
      subtitle: 'Cuéntenos un poco sobre lo que le trae aquí. Nos pondremos en contacto pronto para programar su primera cita.',
      confidentiality: 'Su confidencialidad es importante para nosotros. Por favor comparta solo los detalles más necesarios aquí — sin información sensible o urgente — y le daremos seguimiento en privado para discutir más.',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      optional: '(opcional)',
      reason: 'Motivo de la Consulta',
      selectReason: 'Seleccione un motivo',
      reasons: ['Consejería para Niños y Adolescentes', 'Consejería para Padres', 'Terapia Familiar', 'Otro'],
      tellUsMore: 'Cuéntenos más',
      tellUsMorePlaceholder: 'Comparta cualquier cosa que nos ayude a entender su situación...',
      submit: 'Enviar Formulario de Consulta',
      sending: 'Enviando...',
      errorRequired: 'Por favor complete su nombre, correo electrónico y motivo de los servicios.',
      errorGeneric: 'Algo salió mal al enviar su formulario. Por favor intente de nuevo.',
      successTitle: 'Gracias',
      successMessage: 'Su formulario de consulta ha sido enviado. Nuestro equipo se pondrá en contacto con usted pronto.',
      returnHome: 'Volver al Inicio',
    },
    contactEmailPage: {
      title: 'Envíenos un Correo Directamente',
      subtitle: 'Envíenos un mensaje breve y alguien se pondrá en contacto con usted pronto.',
      confidentiality: 'Su confidencialidad es importante para nosotros. Por favor comparta solo los detalles más necesarios aquí — sin información sensible o urgente — y le daremos seguimiento en privado para discutir más.',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      message: 'Su Mensaje',
      messageHint: '(por favor sea breve)',
      messagePlaceholder: 'Unas oraciones sobre lo que necesita ayuda...',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      errorRequired: 'Por favor complete su nombre, correo electrónico y un mensaje breve.',
      errorGeneric: 'Algo salió mal al enviar su mensaje. Por favor intente de nuevo.',
      successTitle: 'Mensaje Enviado',
      successMessage: 'Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted pronto.',
      returnHome: 'Volver al Inicio',
    },
  },
};

const LanguageContext = createContext(null);

const STORAGE_KEY = 'site_language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem(STORAGE_KEY) || 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((l) => (l === 'en' ? 'es' : 'en'));

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};

export default LanguageContext;
