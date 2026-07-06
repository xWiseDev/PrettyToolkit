import { apps, categories, type App, type Category, type Faq, type Feature, type PrivacySection } from './data/apps';

export const locales = ['en', 'fr', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  fr: 'Francais',
  es: 'Espanol',
  de: 'Deutsch',
};

export const localeShortLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  de: 'DE',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  if (cleanPath === '/') return `/${locale}/`;
  return `/${locale}${cleanPath}`;
}

export function localizedAppPath(locale: Locale, slug: string): string {
  return localizedPath(locale, `/${slug}`);
}

export function localizedPrivacyPath(locale: Locale, slug?: string): string {
  return localizedPath(locale, slug ? `/${slug}/privacy` : '/privacy');
}

export function localizedAlternates(path: string): Record<Locale, string> {
  return Object.fromEntries(locales.map((locale) => [locale, localizedPath(locale, path)])) as Record<Locale, string>;
}

export const categoryLabels: Record<Locale, Record<Category, string>> = {
  en: categories,
  fr: {
    scanning: 'Scan',
    productivity: 'Productivite',
    wellness: 'Bien-etre',
    lifestyle: 'Art de vivre',
    'daily-tools': 'Outils du quotidien',
  },
  es: {
    scanning: 'Escaneo',
    productivity: 'Productividad',
    wellness: 'Bienestar',
    lifestyle: 'Estilo de vida',
    'daily-tools': 'Herramientas diarias',
  },
  de: {
    scanning: 'Scannen',
    productivity: 'Produktivitaet',
    wellness: 'Wohlbefinden',
    lifestyle: 'Alltag',
    'daily-tools': 'Alltagswerkzeuge',
  },
};

export const ui = {
  en: {
    nav: { apps: 'Apps', blog: 'Blog', about: 'About', support: 'Support', privacy: 'Privacy', terms: 'Terms' },
    brand: {
      tagline: 'Everyday apps, unexpectedly beautiful.',
      organizationDescription: 'A curated collection of premium utility apps designed with intention.',
      supportContactType: 'customer support',
      trust: ['No ads', 'Offline-first', 'Private by design'],
    },
    appCard: { view: 'View app', comingSoon: 'Coming Soon' },
    placeholder: {
      title: 'More coming soon',
      eyebrow: 'Coming Soon',
      copy: 'New tools are being crafted quietly. Same warmth, same care, no spoilers yet.',
    },
    appPage: {
      comingSoon: 'Coming Soon to the App Store',
      categorySuffix: 'app for iPhone',
      featuresLabel: (name: string) => `${name} features`,
      capabilitiesHeading: (name: string) => `What can you do with ${name}?`,
      capabilitiesIntro: (name: string) =>
        `${name} is built for quick, focused utility on iPhone. These are the core things it helps you do, without clutter or extra setup.`,
      gallery: 'See it in action.',
      faq: 'Questions? Answers.',
      downloadHeading: (name: string) => `Ready to try ${name}?`,
      crossPromoHeading: 'More from Pretty Toolkit',
      crossPromoSubtitle: 'More apps are on the way.',
      screenshotAlt: (name: string, index: number) => `${name} screenshot ${index}`,
      appIconAlt: (name: string) => `${name} app icon`,
      softwareCategory: 'UtilitiesApplication',
    },
    home: {
      title: 'Pretty Toolkit — Aesthetic Utility Apps for iPhone',
      description:
        'Pretty Toolkit is a curated collection of premium iOS utility apps designed with intention. Everyday tools, unexpectedly beautiful. Download Sincefy and Luxira, and discover Sopora, logfd, and BPIVY.',
      heroSubtitle: 'Your phone deserves better tools.',
      heroCta: 'Explore the apps',
      introHeading: 'What is Pretty Toolkit?',
      introBody:
        'Pretty Toolkit is a curated collection of premium utility apps for iPhone. We take the tools you reach for every day — scanners, countdowns, journals, organizers — and rebuild them from the ground up with care, clarity, and warmth.',
      introBody2:
        'Every app in the collection is built with the same philosophy: no ads, no clutter, offline-first functionality, and full accessibility support including VoiceOver and Dynamic Type. We believe utility apps deserve the same level of polish as the apps you show off to your friends.',
      spotlightFeatures: 'Home screen, lock screen, and StandBy countdowns for the moments you want to keep close.',
      collectionHeading: 'Our Collection',
      brandHeading: 'Everyday tools deserve extraordinary design.',
      brandCopy1:
        'Every app in our collection is crafted with intention — because the details matter. The rounded corners, the haptic feedback, the way a screen transitions. These are the things that turn a utility into something you actually enjoy using.',
      brandCopy2:
        "We sweat the small stuff so you don't have to think about it. You just open the app, do what you came to do, and move on — with a little more joy than you expected.",
      values: [
        {
          title: 'Privacy by default',
          copy: 'Your data stays on your device. No ads, no accounts, no cross-app tracking. When an app uses anonymous diagnostics or analytics, it is disclosed clearly and never includes your personal content.',
        },
        {
          title: 'Accessible to everyone',
          copy: 'Full VoiceOver support, Dynamic Type, and haptic feedback in every app. Great design means everyone can use it, regardless of how they interact with their iPhone.',
        },
        {
          title: 'No ads. Ever.',
          copy: "We don't sell your attention. Our apps are supported by optional premium upgrades — not by advertising, data sales, or dark patterns.",
        },
      ],
      websiteSchemaDescription: 'A curated collection of premium iOS utility apps designed with intention.',
      itemListName: 'Pretty Toolkit app collection',
    },
    about: {
      title: 'About — Pretty Toolkit',
      description:
        'Pretty Toolkit crafts premium iOS utility apps designed with intention. Beautiful, thoughtful tools for everyday tasks — no clutter, no compromise.',
      heading: 'About Pretty Toolkit',
      story: 'We craft apps that are as beautiful as they are useful.',
      body1:
        'Pretty Toolkit is a small, independent studio building premium utility apps for iPhone. We take the everyday tools most people settle for — scanners, converters, organizers — and redesign them from scratch with the care and polish they deserve.',
      body2:
        "We believe your utility apps should feel just as considered as the rest of your phone. That means no ads, no clutter, no dark patterns — just clean, purposeful design that respects your time and your privacy.",
      approachHeading: 'How we build',
      approach1:
        'Every app starts with a simple question: what would this tool look like if someone actually cared? We obsess over the details — the transitions, the typography, the way a button feels when you tap it. We test with real people, iterate until it is right, and only ship when we are proud of every screen.',
      approach2:
        "Our apps are built offline-first, so they work without an internet connection. Your personal content stays on your device — we don't sell it or use it for cross-app tracking. Every app includes full accessibility support with VoiceOver, Dynamic Type, and haptic feedback, because great tools should work for everyone.",
      principles: [
        ['Intentional Design', 'Every detail earns its place. From the whitespace to the micro-interactions, nothing is accidental. We design with purpose so the app stays out of your way and lets you focus on what you came to do.'],
        ['Warmth First', 'Technology should feel welcoming, not sterile. Our apps use warm color palettes, smooth animations, and friendly copy — because even a barcode scanner can make you smile.'],
        ['Refined Simplicity', "We strip away everything that doesn't serve you. No feature bloat, no settings buried five menus deep. What remains is polished until it shines — fewer features, done better."],
      ],
      appsHeading: "What we've built so far",
      appsIntro: 'Our public apps follow the same principles: premium design, privacy by default, and accessibility for everyone.',
      more: "More apps are on the way. Each one will stay focused, private, and made with care.",
    },
    support: {
      title: 'Support — Pretty Toolkit',
      description: 'Get help with Pretty Toolkit apps. Contact us, manage subscriptions, and find answers to common questions.',
      heading: 'Support',
      subtitle: "We're here to help. Find answers below or reach out directly.",
      contactHeading: 'How do I contact Pretty Toolkit support?',
      contactCopy: 'For questions, feedback, or issues, use the support email button below.',
      contactAction: 'Email support',
      faqHeading: 'Frequently Asked Questions',
      schemaDescription: 'Support page for Pretty Toolkit iPhone apps, subscriptions, refunds, privacy, and troubleshooting.',
      faqs: [
        ['How do I cancel my subscription?', 'Open the Settings app on your iPhone, tap your name at the top, then tap Subscriptions. Find the Pretty Toolkit app and tap Cancel Subscription.'],
        ['How do I restore my purchases?', "Open the app and go to Settings or the premium section. Tap Restore Purchases. Make sure you're signed in with the same Apple ID used for the original purchase."],
        ['Can I get a refund?', 'Refunds for App Store purchases are handled by Apple. Visit reportaproblem.apple.com to request a refund.'],
        ["The app isn't working correctly. What should I do?", "Try closing and reopening the app, or restarting your device. Make sure you're running the latest version from the App Store. If the issue persists, use the support email button above with a description of the problem."],
        ['Is my data private?', "Yes. All app data is stored locally on your device. We don't upload personal data to external servers. Read our full Privacy Policy for details."],
      ],
    },
    privacy: {
      title: 'Privacy Policy — Pretty Toolkit',
      description: 'Privacy policy for Pretty Toolkit and all our iOS applications.',
      heading: 'Privacy Policy',
      updated: 'Last updated: March 2026',
      intro:
        'This is the general privacy policy for Pretty Toolkit ("we", "us", or "our"). Each app also has its own detailed privacy policy covering app-specific data practices.',
      appPolicies: 'App Privacy Policies',
      appPolicyLabel: (name: string) => `${name} Privacy Policy`,
      sections: [
        ['General Principles', 'All Pretty Toolkit apps are designed with privacy in mind. We believe your data belongs to you. Our apps store data locally whenever possible and collect only minimal, anonymous analytics to improve the experience.'],
        ['Information We Collect', 'Across our apps, we may collect anonymous usage analytics: aggregated, non-identifiable data about feature usage to help us improve our apps. We do not collect, store, or share personal information unless explicitly stated in an app-specific privacy policy.'],
        ['Data Storage', 'All app data is stored locally on your device. We do not upload your personal data to external servers.'],
        ['Third-Party Services', "Our apps may use Apple's frameworks and services, such as StoreKit for subscriptions or device frameworks for app features. We do not integrate third-party advertising or tracking SDKs."],
        ['Subscriptions', 'Some apps offer optional subscriptions managed through the Apple App Store. Payment processing is handled entirely by Apple. We do not have access to your payment information.'],
        ["Children's Privacy", 'Our apps are not directed at children under 13. We do not knowingly collect personal information from children.'],
        ['Changes to This Policy', 'We may update this policy from time to time. Changes will be posted on this page with an updated revision date.'],
        ['Contact', 'If you have questions about this privacy policy, please contact us through our support page.'],
      ],
      generalLink: 'Pretty Toolkit Privacy Policy',
      appFooter: (name: string) => `This policy applies specifically to ${name}. For our general company privacy policy, see`,
      appTitle: (name: string) => `Privacy Policy — ${name} | Pretty Toolkit`,
      appDescription: (name: string) => `Privacy policy for ${name} by Pretty Toolkit.`,
      appHeading: (name: string) => `${name} Privacy Policy`,
      lastUpdated: (date: string) => `Last updated: ${date}`,
    },
  },
  fr: {
    nav: { apps: 'Apps', blog: 'Blog', about: 'A propos', support: 'Support', privacy: 'Confidentialite', terms: 'Conditions' },
    brand: {
      tagline: 'Des apps du quotidien, etonnement belles.',
      organizationDescription: 'Une collection choisie d apps utilitaires premium, pensees avec soin.',
      supportContactType: 'support client',
      trust: ['Sans pub', 'Hors ligne', 'Prive par design'],
    },
    appCard: { view: 'Voir l app', comingSoon: 'Bientot' },
    placeholder: {
      title: 'D autres apps arrivent',
      eyebrow: 'Bientot',
      copy: 'De nouveaux outils se preparent doucement. Meme chaleur, meme soin, sans devoiler la suite.',
    },
    appPage: {
      comingSoon: 'Bientot sur l App Store',
      categorySuffix: 'pour iPhone',
      featuresLabel: (name: string) => `Fonctionnalites ${name}`,
      capabilitiesHeading: (name: string) => `Que pouvez-vous faire avec ${name} ?`,
      capabilitiesIntro: (name: string) =>
        `${name} est concue pour un usage rapide et clair sur iPhone. Voici ce qu elle vous aide a faire, sans bruit ni configuration lourde.`,
      gallery: 'Voyez l app en action.',
      faq: 'Questions ? Reponses.',
      downloadHeading: (name: string) => `Pret a essayer ${name} ?`,
      crossPromoHeading: 'Plus de Pretty Toolkit',
      crossPromoSubtitle: 'D autres apps arrivent.',
      screenshotAlt: (name: string, index: number) => `Capture d ecran ${index} de ${name}`,
      appIconAlt: (name: string) => `Icone de l app ${name}`,
      softwareCategory: 'UtilitiesApplication',
    },
    home: {
      title: 'Pretty Toolkit — Apps utilitaires esthetiques pour iPhone',
      description:
        'Pretty Toolkit est une collection d apps iOS premium concues avec soin. Des outils du quotidien, etonnement beaux. Decouvrez Sincefy, Luxira, Sopora, logfd et BPIVY.',
      heroSubtitle: 'Votre iPhone merite de meilleurs outils.',
      heroCta: 'Explorer les apps',
      introHeading: 'Qu est-ce que Pretty Toolkit ?',
      introBody:
        'Pretty Toolkit est une collection d apps utilitaires premium pour iPhone. Nous reprenons les outils du quotidien — scanners, comptes a rebours, journaux, organisateurs — et les reconstruisons avec clarte, chaleur et attention.',
      introBody2:
        'Chaque app suit la meme philosophie : pas de publicite, pas de surcharge, un fonctionnement hors ligne et une accessibilite soignee avec VoiceOver et Dynamic Type.',
      spotlightFeatures: 'Des comptes a rebours pour l ecran d accueil, l ecran verrouille et StandBy.',
      collectionHeading: 'Notre collection',
      brandHeading: 'Les outils du quotidien meritent un design exceptionnel.',
      brandCopy1:
        'Chaque app est creee avec intention. Les coins arrondis, le retour haptique, les transitions : ce sont ces details qui transforment un utilitaire en app agreable.',
      brandCopy2:
        'Nous soignons les petites choses pour que vous n ayez pas a y penser. Ouvrez l app, faites ce que vous aviez a faire, et repartez avec un peu plus de plaisir.',
      values: [
        { title: 'Confidentialite par defaut', copy: 'Vos donnees restent sur votre appareil. Pas de pub, pas de comptes forces, pas de suivi entre apps.' },
        { title: 'Accessible a tous', copy: 'VoiceOver, Dynamic Type et retours haptiques sont pris en compte dans chaque app.' },
        { title: 'Jamais de publicite', copy: 'Nous ne vendons pas votre attention. Nos apps vivent grace a des options premium, pas grace aux donnees.' },
      ],
      websiteSchemaDescription: 'Une collection choisie d apps iOS premium concues avec soin.',
      itemListName: 'Collection d apps Pretty Toolkit',
    },
    about: {
      title: 'A propos — Pretty Toolkit',
      description: 'Pretty Toolkit cree des apps utilitaires iOS premium, belles, simples et respectueuses.',
      heading: 'A propos de Pretty Toolkit',
      story: 'Nous creons des apps aussi belles qu utiles.',
      body1:
        'Pretty Toolkit est un petit studio independant qui construit des apps utilitaires premium pour iPhone. Nous reprenons les outils que l on accepte souvent par defaut et les redessinons avec soin.',
      body2:
        'Vos apps utilitaires devraient etre aussi soignees que le reste de votre telephone : sans pub, sans encombrement, sans pieges.',
      approachHeading: 'Notre facon de construire',
      approach1:
        'Chaque app commence par une question simple : a quoi ressemblerait cet outil si quelqu un s en souciait vraiment ? Nous peaufinons les details et ne publions que lorsque chaque ecran nous rend fiers.',
      approach2:
        'Nos apps sont pensees hors ligne. Vos contenus restent sur votre appareil et chaque app prend en charge l accessibilite essentielle.',
      principles: [
        ['Design intentionnel', 'Chaque detail doit meriter sa place. Rien n est la par hasard.'],
        ['Chaleur d abord', 'La technologie peut etre accueillante. Nos apps utilisent des palettes douces, des animations fluides et une voix simple.'],
        ['Simplicite raffinee', 'Moins de bruit, moins de menus caches, plus de soin dans ce qui reste.'],
      ],
      appsHeading: 'Ce que nous avons deja construit',
      appsIntro: 'Nos apps publiques suivent les memes principes : design premium, confidentialite par defaut et accessibilite.',
      more: 'D autres apps arrivent, toujours simples, privees et soigneusement concues.',
    },
    support: {
      title: 'Support — Pretty Toolkit',
      description: 'Obtenez de l aide pour les apps Pretty Toolkit, les abonnements, les remboursements et la confidentialite.',
      heading: 'Support',
      subtitle: 'Nous sommes la pour aider. Consultez les reponses ou contactez-nous directement.',
      contactHeading: 'Comment contacter le support Pretty Toolkit ?',
      contactCopy: 'Pour une question, un retour ou un probleme, utilisez le bouton email ci-dessous.',
      contactAction: 'Contacter le support',
      faqHeading: 'Questions frequentes',
      schemaDescription: 'Page de support pour les apps iPhone Pretty Toolkit.',
      faqs: [
        ['Comment annuler mon abonnement ?', 'Ouvrez Reglages sur votre iPhone, touchez votre nom, puis Abonnements. Selectionnez l app Pretty Toolkit et touchez Annuler l abonnement.'],
        ['Comment restaurer mes achats ?', 'Ouvrez l app, allez dans les reglages ou la section premium, puis touchez Restaurer les achats. Utilisez le meme identifiant Apple.'],
        ['Puis-je obtenir un remboursement ?', 'Les remboursements de l App Store sont geres par Apple. Rendez-vous sur reportaproblem.apple.com.'],
        ['L app ne fonctionne pas correctement. Que faire ?', 'Essayez de fermer puis rouvrir l app, ou de redemarrer votre appareil. Verifiez que vous utilisez la derniere version.'],
        ['Mes donnees sont-elles privees ?', 'Oui. Les donnees des apps sont stockees localement sur votre appareil. Consultez notre politique de confidentialite pour plus de details.'],
      ],
    },
    privacy: {
      title: 'Politique de confidentialite — Pretty Toolkit',
      description: 'Politique de confidentialite de Pretty Toolkit et de ses apps iOS.',
      heading: 'Politique de confidentialite',
      updated: 'Derniere mise a jour : mars 2026',
      intro:
        'Cette politique generale explique comment Pretty Toolkit protege vos donnees. Chaque app dispose aussi d une politique specifique.',
      appPolicies: 'Politiques de confidentialite des apps',
      appPolicyLabel: (name: string) => `Politique de confidentialite ${name}`,
      sections: [
        ['Principes generaux', 'Les apps Pretty Toolkit sont concues avec la confidentialite au centre. Vos donnees vous appartiennent et restent localement lorsque c est possible.'],
        ['Informations collectees', 'Nous pouvons collecter des statistiques anonymes et agregees sur l utilisation des fonctionnalites afin d ameliorer les apps.'],
        ['Stockage des donnees', 'Les donnees des apps sont stockees localement sur votre appareil. Nous n envoyons pas vos donnees personnelles vers des serveurs externes.'],
        ['Services tiers', 'Nos apps peuvent utiliser des frameworks Apple, comme StoreKit. Nous n integrons pas de SDK publicitaire ou de suivi tiers.'],
        ['Abonnements', 'Certains apps proposent des abonnements optionnels geres par l App Store. Apple traite les paiements.'],
        ['Confidentialite des enfants', 'Nos apps ne s adressent pas aux enfants de moins de 13 ans.'],
        ['Modifications', 'Nous pouvons mettre cette politique a jour. Les changements seront publies sur cette page.'],
        ['Contact', 'Pour toute question, contactez-nous via la page support.'],
      ],
      generalLink: 'Politique de confidentialite Pretty Toolkit',
      appFooter: (name: string) => `Cette politique s applique specifiquement a ${name}. Pour la politique generale, consultez`,
      appTitle: (name: string) => `Politique de confidentialite — ${name} | Pretty Toolkit`,
      appDescription: (name: string) => `Politique de confidentialite de ${name} par Pretty Toolkit.`,
      appHeading: (name: string) => `Politique de confidentialite ${name}`,
      lastUpdated: (date: string) => `Derniere mise a jour : ${date}`,
    },
  },
  es: {
    nav: { apps: 'Apps', blog: 'Blog', about: 'Acerca de', support: 'Soporte', privacy: 'Privacidad', terms: 'Terminos' },
    brand: {
      tagline: 'Apps cotidianas, inesperadamente bonitas.',
      organizationDescription: 'Una coleccion cuidada de apps utilitarias premium, disenadas con intencion.',
      supportContactType: 'soporte al cliente',
      trust: ['Sin anuncios', 'Primero offline', 'Privada por diseno'],
    },
    appCard: { view: 'Ver app', comingSoon: 'Proximamente' },
    placeholder: {
      title: 'Mas apps en camino',
      eyebrow: 'Proximamente',
      copy: 'Nuevas herramientas se estan creando con calma. La misma calidez, el mismo cuidado, sin revelar sorpresas.',
    },
    appPage: {
      comingSoon: 'Proximamente en App Store',
      categorySuffix: 'para iPhone',
      featuresLabel: (name: string) => `Funciones de ${name}`,
      capabilitiesHeading: (name: string) => `Que puedes hacer con ${name}?`,
      capabilitiesIntro: (name: string) =>
        `${name} esta pensada para una utilidad rapida y clara en iPhone. Estas son sus funciones principales, sin desorden ni configuracion pesada.`,
      gallery: 'Mira como funciona.',
      faq: 'Preguntas y respuestas.',
      downloadHeading: (name: string) => `Listo para probar ${name}?`,
      crossPromoHeading: 'Mas de Pretty Toolkit',
      crossPromoSubtitle: 'Hay mas apps en camino.',
      screenshotAlt: (name: string, index: number) => `Captura ${index} de ${name}`,
      appIconAlt: (name: string) => `Icono de la app ${name}`,
      softwareCategory: 'UtilitiesApplication',
    },
    home: {
      title: 'Pretty Toolkit — Apps utilitarias esteticas para iPhone',
      description:
        'Pretty Toolkit es una coleccion de apps iOS premium disenadas con intencion. Descubre Sincefy, Luxira, Sopora, logfd y BPIVY.',
      heroSubtitle: 'Tu iPhone merece mejores herramientas.',
      heroCta: 'Explorar las apps',
      introHeading: 'Que es Pretty Toolkit?',
      introBody:
        'Pretty Toolkit es una coleccion de apps utilitarias premium para iPhone. Tomamos herramientas diarias — escaneres, cuentas regresivas, diarios y organizadores — y las reconstruimos con claridad y calidez.',
      introBody2:
        'Cada app comparte la misma filosofia: sin anuncios, sin ruido, funcionamiento offline y accesibilidad con VoiceOver y Dynamic Type.',
      spotlightFeatures: 'Cuentas regresivas para pantalla de inicio, pantalla bloqueada y StandBy.',
      collectionHeading: 'Nuestra coleccion',
      brandHeading: 'Las herramientas diarias merecen un diseno extraordinario.',
      brandCopy1:
        'Cada app esta creada con intencion. Las esquinas, la respuesta haptica y las transiciones convierten una utilidad en algo agradable.',
      brandCopy2:
        'Cuidamos los detalles para que tu solo abras la app, hagas lo que viniste a hacer y sigas con un poco mas de alegria.',
      values: [
        { title: 'Privacidad por defecto', copy: 'Tus datos se quedan en tu dispositivo. Sin anuncios, sin cuentas forzadas y sin seguimiento entre apps.' },
        { title: 'Accesible para todos', copy: 'VoiceOver, Dynamic Type y respuesta haptica estan presentes en cada app.' },
        { title: 'Nunca anuncios', copy: 'No vendemos tu atencion. Las apps se sostienen con mejoras premium opcionales.' },
      ],
      websiteSchemaDescription: 'Una coleccion cuidada de apps iOS premium disenadas con intencion.',
      itemListName: 'Coleccion de apps Pretty Toolkit',
    },
    about: {
      title: 'Acerca de — Pretty Toolkit',
      description: 'Pretty Toolkit crea apps utilitarias premium para iOS con diseno, claridad y privacidad.',
      heading: 'Acerca de Pretty Toolkit',
      story: 'Creamos apps tan bonitas como utiles.',
      body1:
        'Pretty Toolkit es un pequeno estudio independiente que crea apps utilitarias premium para iPhone. Redisenamos herramientas comunes con el cuidado que merecen.',
      body2: 'Tus apps utilitarias tambien deberian sentirse cuidadas: sin anuncios, sin desorden y sin patrones oscuros.',
      approachHeading: 'Como construimos',
      approach1:
        'Cada app empieza con una pregunta simple: como seria esta herramienta si alguien realmente la cuidara? Pulimos los detalles hasta estar orgullosos de cada pantalla.',
      approach2:
        'Nuestras apps funcionan primero sin conexion. Tu contenido se queda en tu dispositivo y cada app incluye soporte de accesibilidad esencial.',
      principles: [
        ['Diseno intencional', 'Cada detalle tiene que ganarse su lugar.'],
        ['Calidez primero', 'La tecnologia puede sentirse amable, con colores suaves, animaciones fluidas y texto claro.'],
        ['Simplicidad refinada', 'Menos ruido, menos menus ocultos y mas cuidado en lo que queda.'],
      ],
      appsHeading: 'Lo que hemos creado',
      appsIntro: 'Nuestras apps publicas siguen los mismos principios: diseno premium, privacidad por defecto y accesibilidad.',
      more: 'Hay mas apps en camino, siempre simples, privadas y hechas con cuidado.',
    },
    support: {
      title: 'Soporte — Pretty Toolkit',
      description: 'Ayuda para apps Pretty Toolkit, suscripciones, reembolsos, privacidad y problemas comunes.',
      heading: 'Soporte',
      subtitle: 'Estamos aqui para ayudar. Revisa las respuestas o escribenos directamente.',
      contactHeading: 'Como contacto con soporte de Pretty Toolkit?',
      contactCopy: 'Para preguntas, comentarios o problemas, usa el boton de email de abajo.',
      contactAction: 'Escribir a soporte',
      faqHeading: 'Preguntas frecuentes',
      schemaDescription: 'Pagina de soporte para las apps de iPhone de Pretty Toolkit.',
      faqs: [
        ['Como cancelo mi suscripcion?', 'Abre Ajustes en tu iPhone, toca tu nombre y luego Suscripciones. Busca la app Pretty Toolkit y toca Cancelar suscripcion.'],
        ['Como restauro mis compras?', 'Abre la app, ve a Ajustes o a la seccion premium y toca Restaurar compras. Usa el mismo Apple ID.'],
        ['Puedo pedir un reembolso?', 'Apple gestiona los reembolsos del App Store. Visita reportaproblem.apple.com.'],
        ['La app no funciona bien. Que hago?', 'Cierra y vuelve a abrir la app, reinicia tu dispositivo y verifica que tengas la ultima version.'],
        ['Mis datos son privados?', 'Si. Los datos se guardan localmente en tu dispositivo. Lee nuestra politica de privacidad para mas detalles.'],
      ],
    },
    privacy: {
      title: 'Politica de privacidad — Pretty Toolkit',
      description: 'Politica de privacidad de Pretty Toolkit y sus apps iOS.',
      heading: 'Politica de privacidad',
      updated: 'Ultima actualizacion: marzo de 2026',
      intro: 'Esta politica general explica como Pretty Toolkit protege tus datos. Cada app tambien tiene una politica especifica.',
      appPolicies: 'Politicas de privacidad de las apps',
      appPolicyLabel: (name: string) => `Politica de privacidad de ${name}`,
      sections: [
        ['Principios generales', 'Las apps Pretty Toolkit estan disenadas con privacidad desde el inicio. Tus datos te pertenecen.'],
        ['Informacion que recopilamos', 'Podemos recopilar analiticas anonimas y agregadas sobre uso de funciones para mejorar las apps.'],
        ['Almacenamiento de datos', 'Los datos de las apps se guardan localmente en tu dispositivo.'],
        ['Servicios de terceros', 'Nuestras apps pueden usar frameworks de Apple como StoreKit. No integramos SDKs publicitarios ni de seguimiento.'],
        ['Suscripciones', 'Algunas apps ofrecen suscripciones opcionales gestionadas por App Store. Apple procesa los pagos.'],
        ['Privacidad infantil', 'Nuestras apps no estan dirigidas a menores de 13 anos.'],
        ['Cambios en esta politica', 'Podemos actualizar esta politica. Los cambios apareceran en esta pagina.'],
        ['Contacto', 'Si tienes preguntas, contactanos desde la pagina de soporte.'],
      ],
      generalLink: 'Politica de privacidad de Pretty Toolkit',
      appFooter: (name: string) => `Esta politica aplica especificamente a ${name}. Para la politica general, consulta`,
      appTitle: (name: string) => `Politica de privacidad — ${name} | Pretty Toolkit`,
      appDescription: (name: string) => `Politica de privacidad de ${name} por Pretty Toolkit.`,
      appHeading: (name: string) => `Politica de privacidad de ${name}`,
      lastUpdated: (date: string) => `Ultima actualizacion: ${date}`,
    },
  },
  de: {
    nav: { apps: 'Apps', blog: 'Blog', about: 'Uber uns', support: 'Support', privacy: 'Datenschutz', terms: 'Bedingungen' },
    brand: {
      tagline: 'Alltagsapps, unerwartet schoen.',
      organizationDescription: 'Eine kuratierte Sammlung hochwertiger Utility-Apps, bewusst gestaltet.',
      supportContactType: 'Kundensupport',
      trust: ['Keine Werbung', 'Offline zuerst', 'Privat gestaltet'],
    },
    appCard: { view: 'App ansehen', comingSoon: 'Demnaechst' },
    placeholder: {
      title: 'Mehr kommt bald',
      eyebrow: 'Demnaechst',
      copy: 'Neue Werkzeuge entstehen leise im Hintergrund. Gleiche Waerme, gleiche Sorgfalt, noch keine Spoiler.',
    },
    appPage: {
      comingSoon: 'Demnaechst im App Store',
      categorySuffix: 'fuer iPhone',
      featuresLabel: (name: string) => `${name} Funktionen`,
      capabilitiesHeading: (name: string) => `Was kannst du mit ${name} tun?`,
      capabilitiesIntro: (name: string) =>
        `${name} ist fuer schnelle, klare Nutzung auf dem iPhone gebaut. Das sind die wichtigsten Dinge, die dir die App ohne Ballast erleichtert.`,
      gallery: 'So sieht es aus.',
      faq: 'Fragen? Antworten.',
      downloadHeading: (name: string) => `Bereit fuer ${name}?`,
      crossPromoHeading: 'Mehr von Pretty Toolkit',
      crossPromoSubtitle: 'Weitere Apps sind unterwegs.',
      screenshotAlt: (name: string, index: number) => `${name} Screenshot ${index}`,
      appIconAlt: (name: string) => `${name} App-Icon`,
      softwareCategory: 'UtilitiesApplication',
    },
    home: {
      title: 'Pretty Toolkit — Aesthetische Utility-Apps fuer iPhone',
      description:
        'Pretty Toolkit ist eine kuratierte Sammlung hochwertiger iOS-Apps. Entdecke Sincefy, Luxira, Sopora, logfd und BPIVY.',
      heroSubtitle: 'Dein iPhone verdient bessere Werkzeuge.',
      heroCta: 'Apps entdecken',
      introHeading: 'Was ist Pretty Toolkit?',
      introBody:
        'Pretty Toolkit ist eine Sammlung hochwertiger Utility-Apps fuer iPhone. Wir nehmen taegliche Werkzeuge — Scanner, Countdown-Apps, Journale und Organizer — und bauen sie mit Klarheit und Waerme neu.',
      introBody2:
        'Jede App folgt derselben Idee: keine Werbung, kein Durcheinander, offline nutzbar und mit Accessibility-Unterstuetzung wie VoiceOver und Dynamic Type.',
      spotlightFeatures: 'Countdowns fuer Home Screen, Lock Screen und StandBy.',
      collectionHeading: 'Unsere Sammlung',
      brandHeading: 'Alltagswerkzeuge verdienen aussergewoehnliches Design.',
      brandCopy1:
        'Jede App wird bewusst gestaltet. Abgerundete Ecken, Haptik und Uebergaenge machen aus einem Werkzeug etwas, das man gern benutzt.',
      brandCopy2:
        'Wir kuemmern uns um die Details, damit du einfach oeffnest, erledigst und mit etwas mehr Freude weitermachst.',
      values: [
        { title: 'Datenschutz von Anfang an', copy: 'Deine Daten bleiben auf deinem Geraet. Keine Werbung, keine erzwungenen Konten, kein app-uebergreifendes Tracking.' },
        { title: 'Zugaenglich fuer alle', copy: 'VoiceOver, Dynamic Type und haptisches Feedback gehoeren zu jeder App.' },
        { title: 'Nie Werbung', copy: 'Wir verkaufen keine Aufmerksamkeit. Unsere Apps werden durch optionale Premium-Funktionen getragen.' },
      ],
      websiteSchemaDescription: 'Eine kuratierte Sammlung hochwertiger iOS-Apps, bewusst gestaltet.',
      itemListName: 'Pretty Toolkit App-Sammlung',
    },
    about: {
      title: 'Uber uns — Pretty Toolkit',
      description: 'Pretty Toolkit entwickelt hochwertige iOS-Utility-Apps mit Design, Ruhe und Datenschutz.',
      heading: 'Uber Pretty Toolkit',
      story: 'Wir bauen Apps, die so schoen wie nuetzlich sind.',
      body1:
        'Pretty Toolkit ist ein kleines unabhaengiges Studio fuer hochwertige iPhone-Utility-Apps. Wir gestalten Alltagswerkzeuge mit der Sorgfalt, die sie verdienen.',
      body2: 'Utility-Apps sollten sich genauso durchdacht anfuehlen wie der Rest deines Telefons: ohne Werbung, ohne Ballast, ohne Tricks.',
      approachHeading: 'Wie wir bauen',
      approach1:
        'Jede App beginnt mit einer einfachen Frage: Wie saehe dieses Werkzeug aus, wenn sich jemand wirklich darum kuemmert? Wir feilen an den Details, bis jeder Screen stimmt.',
      approach2:
        'Unsere Apps funktionieren offline zuerst. Deine Inhalte bleiben auf deinem Geraet und jede App unterstuetzt wichtige Accessibility-Funktionen.',
      principles: [
        ['Bewusstes Design', 'Jedes Detail muss seinen Platz verdienen.'],
        ['Waerme zuerst', 'Technologie darf einladend wirken: weiche Farben, ruhige Animationen, klare Sprache.'],
        ['Raffinierte Einfachheit', 'Weniger Ballast, weniger versteckte Menues, mehr Sorgfalt fuer das Wesentliche.'],
      ],
      appsHeading: 'Was wir bisher gebaut haben',
      appsIntro: 'Unsere oeffentlichen Apps folgen denselben Prinzipien: Premium-Design, Datenschutz und Accessibility.',
      more: 'Weitere Apps sind unterwegs, immer fokussiert, privat und sorgfaeltig gemacht.',
    },
    support: {
      title: 'Support — Pretty Toolkit',
      description: 'Hilfe zu Pretty Toolkit Apps, Abos, Rueckerstattungen, Datenschutz und haeufigen Fragen.',
      heading: 'Support',
      subtitle: 'Wir helfen gern. Lies die Antworten oder schreib uns direkt.',
      contactHeading: 'Wie kontaktiere ich den Pretty Toolkit Support?',
      contactCopy: 'Bei Fragen, Feedback oder Problemen nutze den E-Mail-Button unten.',
      contactAction: 'Support kontaktieren',
      faqHeading: 'Haeufige Fragen',
      schemaDescription: 'Support-Seite fuer Pretty Toolkit iPhone-Apps.',
      faqs: [
        ['Wie kuendige ich mein Abo?', 'Oeffne die Einstellungen auf deinem iPhone, tippe auf deinen Namen und dann auf Abonnements. Waehle die Pretty Toolkit App und tippe auf Abo kuendigen.'],
        ['Wie stelle ich Kaeufe wieder her?', 'Oeffne die App, gehe zu Einstellungen oder Premium und tippe auf Kaeufe wiederherstellen. Verwende dieselbe Apple-ID.'],
        ['Kann ich eine Rueckerstattung erhalten?', 'Rueckerstattungen fuer App Store Kaeufe werden von Apple bearbeitet. Besuche reportaproblem.apple.com.'],
        ['Die App funktioniert nicht richtig. Was soll ich tun?', 'Schliesse und oeffne die App erneut, starte dein Geraet neu und pruefe, ob die neueste Version installiert ist.'],
        ['Sind meine Daten privat?', 'Ja. App-Daten werden lokal auf deinem Geraet gespeichert. Mehr steht in unserer Datenschutzerklaerung.'],
      ],
    },
    privacy: {
      title: 'Datenschutzerklaerung — Pretty Toolkit',
      description: 'Datenschutzerklaerung fuer Pretty Toolkit und unsere iOS-Apps.',
      heading: 'Datenschutzerklaerung',
      updated: 'Zuletzt aktualisiert: Maerz 2026',
      intro: 'Diese allgemeine Datenschutzerklaerung erklaert, wie Pretty Toolkit deine Daten schuetzt. Jede App hat zusaetzlich eine eigene Richtlinie.',
      appPolicies: 'Datenschutzerklaerungen der Apps',
      appPolicyLabel: (name: string) => `${name} Datenschutzerklaerung`,
      sections: [
        ['Grundsaetze', 'Pretty Toolkit Apps werden mit Datenschutz im Mittelpunkt entwickelt. Deine Daten gehoeren dir.'],
        ['Erhobene Informationen', 'Wir koennen anonyme, aggregierte Nutzungsdaten erheben, um Funktionen und Zuverlaessigkeit zu verbessern.'],
        ['Datenspeicherung', 'App-Daten werden lokal auf deinem Geraet gespeichert.'],
        ['Dienste Dritter', 'Unsere Apps koennen Apple-Frameworks wie StoreKit verwenden. Wir integrieren keine Werbe- oder Tracking-SDKs.'],
        ['Abonnements', 'Einige Apps bieten optionale Abos ueber den App Store. Apple verarbeitet die Zahlung.'],
        ['Datenschutz von Kindern', 'Unsere Apps richten sich nicht an Kinder unter 13 Jahren.'],
        ['Aenderungen', 'Wir koennen diese Richtlinie aktualisieren. Aenderungen erscheinen auf dieser Seite.'],
        ['Kontakt', 'Bei Fragen kontaktiere uns ueber die Support-Seite.'],
      ],
      generalLink: 'Pretty Toolkit Datenschutzerklaerung',
      appFooter: (name: string) => `Diese Richtlinie gilt speziell fuer ${name}. Die allgemeine Richtlinie findest du hier:`,
      appTitle: (name: string) => `Datenschutzerklaerung — ${name} | Pretty Toolkit`,
      appDescription: (name: string) => `Datenschutzerklaerung fuer ${name} von Pretty Toolkit.`,
      appHeading: (name: string) => `${name} Datenschutzerklaerung`,
      lastUpdated: (date: string) => `Zuletzt aktualisiert: ${date}`,
    },
  },
} as const;

type AppCopy = {
  tagline: string;
  description: string;
  features: [string, string][];
  faqs: [string, string][];
};

const appCopy: Record<Exclude<Locale, 'en'>, Record<string, AppCopy>> = {
  fr: {
    sincefy: {
      tagline: 'Comptez les jours, avec beaute.',
      description: 'Une app de compte a rebours pour les moments qui comptent : anniversaires, mariages, voyages et etapes de vie. Belle sur votre ecran, gardee comme souvenir.',
      features: [
        ['Comptes a rebours vivants', 'Des widgets qui restent a jour sur l ecran d accueil, l ecran verrouille et StandBy.'],
        ['Themes a votre gout', 'Themes mauves, fonds photo doux et couleurs par evenement.'],
        ['Compte apres la date', 'Quand l evenement passe, le compte a rebours devient un souvenir qui grandit.'],
        ['Widgets ecran verrouille', 'Formats rectangulaires et circulaires pour voir les moments importants en un coup d oeil.'],
        ['Rappels doux', 'Notifications optionnelles un mois, une semaine ou une heure avant.'],
        ['Design soigne', 'Typographie elegante, VoiceOver, Dynamic Type, haptique et Reduce Motion.'],
      ],
      faqs: [
        ['Qu est-ce que Sincefy ?', 'Sincefy est une app de compte a rebours pour iPhone. Creez des comptes a rebours elegants pour vos dates importantes et placez-les sur l ecran d accueil, l ecran verrouille ou StandBy.'],
        ['Comment fonctionnent les widgets Sincefy ?', 'Ajoutez un widget Sincefy depuis iOS, puis choisissez le compte a rebours a afficher. Les widgets se mettent a jour automatiquement.'],
        ['Sincefy fonctionne-t-elle hors ligne ?', 'Oui. Les comptes a rebours, themes et photos restent sur votre appareil.'],
        ['Sincefy est-elle privee ?', 'Oui. Les noms, dates et photos ne sont pas envoyes a nos serveurs.'],
        ['Les comptes deviennent-ils des souvenirs ?', 'Oui. Apres la date, Sincefy passe en compteur depuis l evenement.'],
        ['Quels iPhone sont pris en charge ?', 'Sincefy prend en charge les iPhone modernes avec les versions recentes d iOS.'],
      ],
    },
    luxira: {
      tagline: 'Scannez avec elegance.',
      description: 'Un scanner QR et code-barres aussi soigne que le reste de votre iPhone. Scannez, creez et organisez vos codes rapidement.',
      features: [
        ['Scan instantane', 'QR codes et 9 formats de codes-barres detectes en temps reel.'],
        ['Createur de QR codes', 'Creez des QR codes pour liens, texte, Wi-Fi, contacts et reseaux sociaux.'],
        ['Historique et favoris', 'Chaque scan peut etre retrouve avec recherche et favoris.'],
        ['Galerie et saisie manuelle', 'Scannez depuis vos photos ou saisissez un code manuellement.'],
        ['Partage et export', 'Partagez les scans et enregistrez les QR codes crees.'],
        ['Design soigne', 'Palette douce, haptique, Dynamic Type et VoiceOver.'],
      ],
      faqs: [
        ['Qu est-ce que Luxira ?', 'Luxira est un scanner QR et code-barres pour iPhone qui lit les codes avec l appareil photo en temps reel.'],
        ['Luxira est-elle gratuite ?', 'Oui. Les fonctions principales sont gratuites, avec une option premium pour des outils avances.'],
        ['Luxira fonctionne-t-elle hors ligne ?', 'Oui. Le scan, la creation et l historique sont traites sur l appareil.'],
        ['Comment creer un QR code ?', 'Ouvrez l onglet Create, choisissez le type de contenu, personnalisez le style puis enregistrez ou partagez.'],
        ['Luxira est-elle sure ?', 'Oui. Les scans restent sur votre iPhone et ne sont pas envoyes a nos serveurs.'],
        ['Puis-je scanner une capture d ecran ?', 'Oui. Selectionnez une photo avec le selecteur iOS et Luxira lira le code.'],
        ['Quels formats sont pris en charge ?', 'Luxira prend en charge les QR codes et 9 formats de codes-barres courants.'],
        ['Luxira est-elle accessible ?', 'Oui. Dynamic Type, VoiceOver et retour haptique sont pris en charge.'],
      ],
    },
    sopora: {
      tagline: 'Dormir, simplement note.',
      description: 'Un journal de sommeil calme pour comprendre vos nuits. Notez quand vous avez dormi, comment vous vous sentez et ce qui a influence la nuit.',
      features: [
        ['Journal manuel', 'Ajoutez l heure du coucher, du reveil et une note de repos en quelques secondes.'],
        ['Toujours modifiable', 'Corrigez une heure, ajoutez une note ou supprimez une nuit plus tard.'],
        ['Facteurs de vie', 'Marquez cafeine, stress, exercice, ecrans, voyage et plus encore.'],
        ['Tendances douces', 'Voyez duree, ressenti et correlations sans fausse precision.'],
        ['Vos donnees a vous', 'Export CSV ou JSON et restauration depuis une sauvegarde Sopora.'],
        ['Prive par design', 'Pas de micro, pas de compte force, pas de score invente.'],
      ],
      faqs: [
        ['Qu est-ce que Sopora ?', 'Sopora est un journal de sommeil simple pour iPhone, base sur vos propres notes.'],
        ['Sopora suit-elle le sommeil automatiquement ?', 'Non. Sopora est volontairement manuel, prive et facile a modifier.'],
        ['Puis-je modifier les anciennes nuits ?', 'Oui. Chaque entree peut etre modifiee ou supprimee.'],
        ['Que sont les facteurs de vie ?', 'Ce sont des tags comme cafeine, stress, exercice ou ecrans pour mieux remarquer les tendances.'],
        ['Sopora est-elle privee ?', 'Oui. Vos nuits, notes et rappels restent sur votre appareil.'],
        ['Sopora propose-t-elle des rappels ?', 'Oui, des rappels locaux optionnels peuvent etre actives ou desactives.'],
      ],
    },
    logfd: {
      tagline: 'Notez. Puis laissez-la la.',
      description: 'Un journal calme pour repas, boissons et prises du quotidien. Ecrivez ce que vous avez mange, bu ou fait, simplement.',
      features: [
        ['Saisie libre rapide', 'Notez repas, boisson, supplement, medicament ou exercice avec horodatage automatique.'],
        ['Categories simples', 'Gardez la journee claire avec Food, Drink et Other.'],
        ['Votre journee en contexte', 'Revenez aux jours passes avec un calendrier clair.'],
        ['Retrouvez l essentiel', 'Recherchez et filtrez sans transformer le journal en tableur.'],
        ['Export utile', 'Creez des exports PDF ou CSV quand vous en avez besoin.'],
        ['Calme par design', 'Pas de calories, pas de pub, pas de jugement.'],
      ],
      faqs: [
        ['Qu est-ce que logfd ?', 'logfd est un journal simple pour noter repas, boissons, prises ou activites sur iPhone.'],
        ['Que puis-je noter ?', 'Repas, boissons, supplements, medicaments et exercice, avec categorie optionnelle.'],
        ['logfd compte-t-elle les calories ?', 'Non. logfd est un journal libre, pas un compteur de calories.'],
        ['Puis-je rechercher ou exporter ?', 'Oui. Recherche, historique calendrier et exports PDF/CSV sont prevus.'],
        ['logfd est-elle privee ?', 'Oui. Le journal est concu pour rester sur votre appareil, sans publicite.'],
      ],
    },
    bpivy: {
      tagline: 'Votre tension, joliment notee.',
      description: 'Un journal calme pour les mesures de tension prises avec votre propre tensiometre. Suivez les tendances, les rappels et les exports pour votre medecin.',
      features: [
        ['Saisie manuelle', 'Notez systolique, diastolique, pouls, heure, bras, position et notes depuis votre propre tensiometre.'],
        ['Categories claires', 'Voyez des categories lisibles pour chaque mesure, avec des libelles qui ne reposent jamais sur la couleur seule.'],
        ['Historique calendrier', 'Revenez aux jours passes et comprenez quand vos mesures ont ete prises.'],
        ['Tendances calmes', 'Moyennes, repartitions et graphiques doux sans transformer le suivi en alarme.'],
        ['Export medecin', 'Creez des rapports PDF ou CSV clairs a garder ou partager lors d un rendez-vous.'],
        ['Prive et prudent', 'Les mesures restent sur votre appareil. BPIVY est un journal, pas un avis medical.'],
      ],
      faqs: [
        ['Qu est-ce que BPIVY ?', 'BPIVY est un journal de tension pour iPhone. Vous prenez la mesure avec votre propre tensiometre, puis vous notez les chiffres dans l app.'],
        ['BPIVY mesure-t-elle la tension ?', 'Non. BPIVY ne mesure pas la tension et ne transforme pas votre telephone en dispositif medical.'],
        ['Puis-je partager mes mesures avec mon medecin ?', 'Oui. BPIVY est concue avec des exports PDF et CSV clairs pour les rendez-vous.'],
        ['BPIVY propose-t-elle des rappels ?', 'Oui, des rappels locaux optionnels peuvent vous aider a penser a noter une mesure.'],
        ['BPIVY est-elle privee ?', 'Oui. Les mesures, notes, rappels et exports restent sous votre controle sur votre appareil.'],
        ['BPIVY donne-t-elle un avis medical ?', 'Non. BPIVY est un journal personnel, pas un diagnostic, un traitement ou une aide d urgence. Parlez toujours de vos mesures a un professionnel.'],
      ],
    },
  },
  es: {
    sincefy: {
      tagline: 'Cuenta los dias, con belleza.',
      description: 'Una app de cuenta regresiva para cada dia importante: cumpleanos, bodas, viajes y momentos. Bonita en tu pantalla y guardada como recuerdo.',
      features: [
        ['Cuentas regresivas vivas', 'Widgets actualizados para pantalla de inicio, bloqueo y StandBy.'],
        ['Temas a tu gusto', 'Temas malva, fondos de foto suaves y colores por evento.'],
        ['Cuenta despues', 'Cuando llega la fecha, la cuenta se convierte en recuerdo.'],
        ['Widgets de bloqueo', 'Formatos rectangulares y circulares para mirar rapido.'],
        ['Recordatorios suaves', 'Notificaciones opcionales antes del evento.'],
        ['Diseno cuidado', 'Numeros elegantes, VoiceOver, Dynamic Type, haptica y Reduce Motion.'],
      ],
      faqs: [
        ['Que es Sincefy?', 'Sincefy es una app de cuenta regresiva para iPhone con widgets bonitos para fechas importantes.'],
        ['Como funcionan los widgets?', 'Agrega el widget de Sincefy en iOS y elige que cuenta mostrar. Se actualiza automaticamente.'],
        ['Funciona offline?', 'Si. Cuentas, temas y fotos se guardan en tu dispositivo.'],
        ['Es privada?', 'Si. Nombres, fechas y fotos no se suben a nuestros servidores.'],
        ['Puede contar despues de la fecha?', 'Si. Despues del evento se convierte en contador desde esa fecha.'],
        ['Que iPhone soporta?', 'Sincefy funciona en iPhone modernos con versiones recientes de iOS.'],
      ],
    },
    luxira: {
      tagline: 'Escanea con belleza.',
      description: 'Un escaner QR y de codigos de barras tan elegante como el resto de tu iPhone. Escanea, crea y organiza codigos con rapidez.',
      features: [
        ['Escaneo instantaneo', 'QR y 9 formatos de codigo de barras detectados en tiempo real.'],
        ['Creador de QR', 'Crea QR para enlaces, texto, Wi-Fi, contactos y redes sociales.'],
        ['Historial y favoritos', 'Guarda cada escaneo con busqueda y favoritos.'],
        ['Galeria y entrada manual', 'Escanea desde fotos o escribe codigos manualmente.'],
        ['Compartir y exportar', 'Comparte resultados y guarda QR creados.'],
        ['Diseno cuidado', 'Paleta suave, haptica, Dynamic Type y VoiceOver.'],
      ],
      faqs: [
        ['Que es Luxira?', 'Luxira es una app para iPhone que lee codigos QR y de barras con la camara en tiempo real.'],
        ['Es gratis?', 'Si. Las funciones principales son gratuitas, con opcion premium.'],
        ['Funciona sin internet?', 'Si. Escaneo, creacion e historial se procesan en el dispositivo.'],
        ['Como creo un QR?', 'Abre Create, elige el contenido, personaliza el estilo y guarda o comparte.'],
        ['Es segura?', 'Si. Tus escaneos se quedan en el iPhone.'],
        ['Puedo escanear una captura?', 'Si. Selecciona una imagen con el selector de fotos de iOS.'],
        ['Que formatos soporta?', 'QR y 9 formatos comunes de codigos de barras.'],
        ['Tiene accesibilidad?', 'Si. Dynamic Type, VoiceOver y haptica estan incluidos.'],
      ],
    },
    sopora: {
      tagline: 'Dormir, registrado simple.',
      description: 'Un diario de sueno tranquilo para entender tus noches. Registra cuando dormiste, como te sentiste y que influyo en la noche.',
      features: [
        ['Registro manual', 'Agrega hora de dormir, despertar y descanso en segundos.'],
        ['Siempre editable', 'Corrige horas, agrega notas o elimina una noche despues.'],
        ['Factores de estilo de vida', 'Etiqueta cafeina, estres, ejercicio, pantallas, viajes y mas.'],
        ['Patrones suaves', 'Ve duracion y tendencias sin precision falsa.'],
        ['Tus datos son tuyos', 'Exporta CSV o JSON y restaura copias Sopora.'],
        ['Privada por diseno', 'Sin microfono, sin cuenta forzada, sin etapas inventadas.'],
      ],
      faqs: [
        ['Que es Sopora?', 'Sopora es un diario de sueno simple para iPhone basado en tus propios registros.'],
        ['Rastrea el sueno automaticamente?', 'No. Sopora es manual para ser privada, ligera y editable.'],
        ['Puedo editar noches antiguas?', 'Si. Cada entrada se puede modificar o eliminar.'],
        ['Que son los factores?', 'Etiquetas como cafeina, estres o pantallas para notar patrones.'],
        ['Es privada?', 'Si. Entradas, notas y recordatorios se quedan en tu dispositivo.'],
        ['Tiene recordatorios?', 'Si, recordatorios locales opcionales.'],
      ],
    },
    logfd: {
      tagline: 'Anotalo. Dejalo ahi.',
      description: 'Un diario tranquilo de comida e ingesta para detalles cotidianos. Escribe lo que comiste, bebiste o hiciste, sin complicarlo.',
      features: [
        ['Registro libre y rapido', 'Escribe comidas, bebidas, suplementos, medicinas o ejercicio con hora automatica.'],
        ['Categorias simples', 'Organiza el dia con Food, Drink y Other.'],
        ['Tu dia en contexto', 'Revisa dias anteriores con calendario.'],
        ['Encuentra lo importante', 'Busca y filtra sin convertir el diario en una hoja de calculo.'],
        ['Exporta cuando haga falta', 'Crea PDF o CSV para ti o para compartir.'],
        ['Calma por diseno', 'Sin calorias, sin anuncios, sin juicio.'],
      ],
      faqs: [
        ['Que es logfd?', 'logfd es un diario simple para comida e ingesta en iPhone.'],
        ['Que puedo registrar?', 'Comida, bebidas, suplementos, medicacion y ejercicio.'],
        ['Cuenta calorias?', 'No. Es un diario libre, no un contador.'],
        ['Puedo buscar o exportar?', 'Si. Incluye busqueda, historial y exportacion PDF/CSV.'],
        ['Es privada?', 'Si. El diario esta pensado para quedarse en tu dispositivo.'],
      ],
    },
    bpivy: {
      tagline: 'Tu presion, registrada con belleza.',
      description: 'Un registro tranquilo de presion arterial para lecturas tomadas con tu propio tensiometro. Revisa tendencias, recordatorios y exportes para tu medico.',
      features: [
        ['Registro manual', 'Anota sistolica, diastolica, pulso, hora, brazo, posicion y notas desde tu propio tensiometro.'],
        ['Categorias claras', 'Ve categorias legibles junto a cada lectura, con etiquetas que no dependen solo del color.'],
        ['Historial y calendario', 'Revisa dias anteriores y entiende cuando se tomaron tus lecturas.'],
        ['Tendencias tranquilas', 'Promedios, distribuciones y graficas suaves sin convertir el seguimiento en alarma.'],
        ['Exportar para el medico', 'Crea informes PDF o CSV claros para guardar o compartir en una cita.'],
        ['Privada y cuidadosa', 'Tus lecturas se quedan en tu dispositivo. BPIVY es un registro, no consejo medico.'],
      ],
      faqs: [
        ['Que es BPIVY?', 'BPIVY es un registro de presion arterial para iPhone. Tomas la lectura con tu propio tensiometro y escribes los numeros en la app.'],
        ['BPIVY mide la presion arterial?', 'No. BPIVY no mide la presion ni convierte tu telefono en un dispositivo medico.'],
        ['Puedo compartir lecturas con mi medico?', 'Si. BPIVY esta pensada con exportes PDF y CSV claros para tus citas.'],
        ['Tiene recordatorios?', 'Si, recordatorios locales opcionales para ayudarte a registrar una lectura.'],
        ['Es privada?', 'Si. Lecturas, notas, recordatorios y exportes quedan bajo tu control en tu dispositivo.'],
        ['BPIVY da consejo medico?', 'No. BPIVY es un registro personal, no diagnostico, tratamiento ni guia de emergencia. Habla siempre con un profesional.'],
      ],
    },
  },
  de: {
    sincefy: {
      tagline: 'Countdowns, schoen gemacht.',
      description: 'Eine Countdown-App fuer wichtige Tage: Geburtstage, Hochzeiten, Reisen und Meilensteine. Schoen auf deinem Screen und spaeter als Erinnerung.',
      features: [
        ['Live-Countdowns', 'Widgets fuer Home Screen, Lock Screen und StandBy.'],
        ['Themes nach Geschmack', 'Mauve Themes, sanfte Fotohintergruende und Farben pro Ereignis.'],
        ['Weiterzaehlen danach', 'Nach dem Datum wird der Countdown zur Erinnerung.'],
        ['Lock-Screen-Widgets', 'Rechteckige und runde Widgets fuer schnelle Blicke.'],
        ['Sanfte Erinnerungen', 'Optionale lokale Hinweise vor dem Ereignis.'],
        ['Sorgfaeltig gestaltet', 'Elegante Ziffern, VoiceOver, Dynamic Type, Haptik und Reduce Motion.'],
      ],
      faqs: [
        ['Was ist Sincefy?', 'Sincefy ist eine Countdown-App fuer iPhone mit schoenen Widgets fuer wichtige Daten.'],
        ['Wie funktionieren die Widgets?', 'Fuege ein Sincefy Widget in iOS hinzu und waehle den Countdown. Es aktualisiert sich automatisch.'],
        ['Funktioniert Sincefy offline?', 'Ja. Countdowns, Themes und Fotos bleiben auf deinem Geraet.'],
        ['Ist Sincefy privat?', 'Ja. Namen, Daten und Fotos werden nicht auf unsere Server geladen.'],
        ['Kann es nach dem Datum weiterzaehlen?', 'Ja. Nach dem Ereignis wird daraus ein Zaehler seit diesem Tag.'],
        ['Welche iPhones werden unterstuetzt?', 'Moderne iPhones mit aktuellen iOS-Versionen.'],
      ],
    },
    luxira: {
      tagline: 'Schoen scannen.',
      description: 'Ein QR- und Barcode-Scanner, der so elegant ist wie der Rest deines iPhones. Scannen, erstellen und organisieren.',
      features: [
        ['Sofort scannen', 'QR-Codes und 9 Barcode-Formate in Echtzeit.'],
        ['QR-Code-Ersteller', 'QR-Codes fuer Links, Text, WLAN, Kontakte und soziale Plattformen.'],
        ['Verlauf und Favoriten', 'Jeder Scan bleibt auffindbar mit Suche und Favoriten.'],
        ['Galerie und manuelle Eingabe', 'Scanne aus Fotos oder gib Codes manuell ein.'],
        ['Teilen und exportieren', 'Teile Scans und speichere erstellte QR-Codes.'],
        ['Sorgfaeltiges Design', 'Sanfte Palette, Haptik, Dynamic Type und VoiceOver.'],
      ],
      faqs: [
        ['Was ist Luxira?', 'Luxira ist ein QR- und Barcode-Scanner fuer iPhone, der Codes in Echtzeit liest.'],
        ['Ist Luxira kostenlos?', 'Ja. Kernfunktionen sind kostenlos, mit optionalem Premium-Upgrade.'],
        ['Funktioniert Luxira offline?', 'Ja. Scannen, Erstellen und Verlauf laufen auf dem Geraet.'],
        ['Wie erstelle ich einen QR-Code?', 'Oeffne Create, waehle Inhalt und Stil und speichere oder teile den Code.'],
        ['Ist Luxira sicher?', 'Ja. Scan-Daten bleiben auf deinem iPhone.'],
        ['Kann ich Screenshots scannen?', 'Ja. Waehle ein Bild ueber den iOS-Fotoauswahldialog.'],
        ['Welche Formate werden unterstuetzt?', 'QR-Codes und 9 gaengige Barcode-Formate.'],
        ['Hat Luxira Accessibility?', 'Ja. Dynamic Type, VoiceOver und Haptik sind enthalten.'],
      ],
    },
    sopora: {
      tagline: 'Schlaf, einfach notiert.',
      description: 'Ein ruhiges Schlafjournal fuer Naechte, die du verstehen moechtest. Notiere Schlafzeit, Gefuehl und Faktoren.',
      features: [
        ['Manuelles Schlafjournal', 'Schlafenszeit, Aufwachzeit und Erholung in Sekunden erfassen.'],
        ['Immer editierbar', 'Zeiten korrigieren, Notizen ergaenzen oder Naechte loeschen.'],
        ['Alltagsfaktoren', 'Koffein, Stress, Sport, Bildschirme, Reisen und mehr markieren.'],
        ['Sanfte Muster', 'Dauer, Erholung und Zusammenhaenge ohne falsche Praezision.'],
        ['Deine Daten', 'CSV/JSON exportieren und Sopora Backups wiederherstellen.'],
        ['Privat gestaltet', 'Kein Mikrofon, kein Zwangskonto, keine erfundenen Schlafphasen.'],
      ],
      faqs: [
        ['Was ist Sopora?', 'Sopora ist ein einfaches Schlafjournal fuer iPhone.'],
        ['Trackt Sopora automatisch?', 'Nein. Sopora ist bewusst manuell, privat und editierbar.'],
        ['Kann ich alte Eintraege bearbeiten?', 'Ja. Jeder Eintrag kann spaeter geaendert werden.'],
        ['Was sind Alltagsfaktoren?', 'Tags wie Koffein, Stress oder Bildschirmzeit, um Muster zu erkennen.'],
        ['Ist Sopora privat?', 'Ja. Eintraege, Notizen und Erinnerungen bleiben auf deinem Geraet.'],
        ['Gibt es Erinnerungen?', 'Ja, optionale lokale Erinnerungen.'],
      ],
    },
    logfd: {
      tagline: 'Notieren. Dort lassen.',
      description: 'Ein ruhiges Tagebuch fuer Essen und Einnahmen im Alltag. Schreib auf, was du gegessen, getrunken oder getan hast.',
      features: [
        ['Schnell frei notieren', 'Mahlzeit, Getraenk, Supplement, Medikament oder Training mit Zeitstempel.'],
        ['Einfache Kategorien', 'Der Tag bleibt klar mit Food, Drink und Other.'],
        ['Dein Tag im Kontext', 'Vergangene Tage mit Kalender ansehen.'],
        ['Wichtiges finden', 'Suche und Filter ohne Tabellengefuehl.'],
        ['Export bei Bedarf', 'PDF- oder CSV-Exporte erstellen.'],
        ['Ruhig gestaltet', 'Keine Kalorien, keine Werbung, kein Urteil.'],
      ],
      faqs: [
        ['Was ist logfd?', 'logfd ist ein einfaches Tagebuch fuer Essen und Einnahmen auf iPhone.'],
        ['Was kann ich notieren?', 'Essen, Getraenke, Supplements, Medikamente und Bewegung.'],
        ['Zaehlt logfd Kalorien?', 'Nein. Es ist ein freies Tagebuch, kein Kalorienzaehler.'],
        ['Kann ich suchen oder exportieren?', 'Ja. Suche, Kalenderverlauf und PDF/CSV-Export sind vorgesehen.'],
        ['Ist logfd privat?', 'Ja. Das Tagebuch ist darauf ausgelegt, auf deinem Geraet zu bleiben.'],
      ],
    },
    bpivy: {
      tagline: 'Dein Blutdruck, schoen notiert.',
      description: 'Ein ruhiges Blutdrucktagebuch fuer Werte, die du mit deinem eigenen Messgeraet misst. Trends, Erinnerungen und Exporte fuer den Arzt.',
      features: [
        ['Manuell eintragen', 'Notiere Systole, Diastole, Puls, Uhrzeit, Arm, Position und Notizen von deinem eigenen Messgeraet.'],
        ['Klare Kategorien', 'Lesbare Blutdruckkategorien neben jedem Wert, nie nur ueber Farbe vermittelt.'],
        ['Verlauf und Kalender', 'Gehe zu frueheren Tagen zurueck und sieh, wann Werte erfasst wurden.'],
        ['Ruhige Trends', 'Durchschnitte, Verteilungen und sanfte Diagramme ohne Alarmgefuehl.'],
        ['Export fuer den Arzt', 'Erstelle klare PDF- oder CSV-Berichte zum Aufbewahren oder Teilen beim Termin.'],
        ['Privat und sorgsam', 'Werte bleiben auf deinem Geraet. BPIVY ist ein Tagebuch, keine medizinische Beratung.'],
      ],
      faqs: [
        ['Was ist BPIVY?', 'BPIVY ist ein Blutdrucktagebuch fuer iPhone. Du misst mit deinem eigenen Messgeraet und traegst die Werte in die App ein.'],
        ['Misst BPIVY Blutdruck?', 'Nein. BPIVY misst keinen Blutdruck und macht dein Telefon nicht zu einem Medizinprodukt.'],
        ['Kann ich Werte mit meinem Arzt teilen?', 'Ja. BPIVY ist fuer klare PDF- und CSV-Exporte gedacht, die du zum Termin mitnehmen kannst.'],
        ['Gibt es Erinnerungen?', 'Ja, optionale lokale Erinnerungen koennen dich ans Eintragen erinnern.'],
        ['Ist BPIVY privat?', 'Ja. Werte, Notizen, Erinnerungen und Exporte bleiben unter deiner Kontrolle auf deinem Geraet.'],
        ['Ist BPIVY medizinische Beratung?', 'Nein. BPIVY ist ein persoenliches Tagebuch, keine Diagnose, Behandlung oder Notfallhilfe. Besprich Werte immer mit Fachpersonal.'],
      ],
    },
  },
};

function localizeFeatures(app: App, locale: Locale): Feature[] {
  if (locale === 'en') return app.features;
  const copy = appCopy[locale][app.slug];
  return app.features.map((feature, index) => ({
    ...feature,
    title: copy?.features[index]?.[0] ?? feature.title,
    description: copy?.features[index]?.[1] ?? feature.description,
  }));
}

function localizeFaqs(app: App, locale: Locale): Faq[] | undefined {
  if (locale === 'en') return app.faqs;
  const copy = appCopy[locale][app.slug];
  return app.faqs?.map((faq, index) => ({
    question: copy?.faqs[index]?.[0] ?? faq.question,
    answer: copy?.faqs[index]?.[1] ?? faq.answer,
  }));
}

function localizePrivacySections(app: App, locale: Locale): PrivacySection[] | undefined {
  if (!app.privacy) return undefined;
  if (locale === 'en') return app.privacy.sections;

  const templates: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
    fr: {
      default: `<p>Cette section explique comment ${app.name} traite ces donnees. Les informations personnelles restent sur votre appareil lorsque c est possible, et aucun contenu prive n est vendu ou utilise a des fins publicitaires.</p>`,
      data: `<p>Les donnees creees dans ${app.name} sont stockees localement sur votre appareil. Pretty Toolkit n a pas acces au contenu que vous saisissez dans l app, et ce contenu n est pas envoye a nos serveurs.</p>`,
      notifications: `<p>Les rappels sont optionnels et planifies localement sur votre appareil. Vous pouvez les modifier ou les desactiver dans l app ou dans les reglages iOS.</p>`,
      collection: `<p>${app.name} ne collecte pas d informations directement identifiantes comme votre nom, email, numero de telephone ou identifiant Apple. Des donnees anonymes limitees peuvent etre utilisees pour ameliorer la fiabilite et comprendre l usage des fonctionnalites, sans contenu personnel.</p>`,
      payments: `<p>Les abonnements ou achats optionnels sont geres par l App Store d Apple. Pretty Toolkit ne recoit pas vos informations de paiement.</p>`,
      services: `<p>${app.name} peut utiliser des frameworks Apple et Mixpanel pour des analyses anonymes limitees. Aucun contenu personnel de l app n est transmis a des services publicitaires ou a des courtiers de donnees.</p>`,
      sharing: `<p>Nous ne vendons pas et ne louons pas vos donnees personnelles. Lorsque vous partagez ou exportez quelque chose, cela se fait uniquement vers la destination que vous choisissez via iOS.</p>`,
      tracking: `<p>${app.name} ne vous suit pas entre les apps et sites web d autres entreprises, et ne partage pas vos donnees a des fins de suivi publicitaire.</p>`,
      children: `<p>${app.name} ne s adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d informations personnelles d enfants.</p>`,
      rights: `<p>Comme les donnees principales restent localement sur votre appareil, supprimer l app supprime ces donnees de notre portee. Pour demander la suppression de donnees analytiques anonymes, contactez aboyahyadev@icloud.com.</p>`,
      disclaimer: `<p>${app.name} est un journal personnel ou un outil utilitaire, pas un dispositif medical. Il ne remplace pas l avis d un professionnel qualifie.</p>`,
      changes: `<p>Nous pouvons mettre cette politique a jour. Les changements seront publies sur cette page avec une date de revision mise a jour.</p>`,
      contact: `<p>Pour toute question sur cette politique, contactez-nous a aboyahyadev@icloud.com ou consultez la page support.</p>`,
    },
    es: {
      default: `<p>Esta seccion explica como ${app.name} trata estos datos. La informacion personal permanece en tu dispositivo siempre que es posible, y el contenido privado no se vende ni se usa para publicidad.</p>`,
      data: `<p>Los datos creados en ${app.name} se guardan localmente en tu dispositivo. Pretty Toolkit no tiene acceso al contenido que escribes en la app y no lo sube a sus servidores.</p>`,
      notifications: `<p>Los recordatorios son opcionales y se programan localmente en tu dispositivo. Puedes cambiarlos o desactivarlos en la app o en Ajustes de iOS.</p>`,
      collection: `<p>${app.name} no recopila informacion directamente identificable como nombre, email, telefono o Apple ID. Puede usar datos anonimos limitados para mejorar fiabilidad y entender uso de funciones, sin contenido personal.</p>`,
      payments: `<p>Las suscripciones o compras opcionales son gestionadas por App Store. Pretty Toolkit no recibe tu informacion de pago.</p>`,
      services: `<p>${app.name} puede usar frameworks de Apple y Mixpanel para analiticas anonimas limitadas. El contenido personal de la app no se envia a servicios publicitarios ni intermediarios de datos.</p>`,
      sharing: `<p>No vendemos ni alquilamos tus datos personales. Cuando compartes o exportas algo, se envia solo al destino que eliges mediante iOS.</p>`,
      tracking: `<p>${app.name} no te rastrea entre apps y sitios web de otras empresas, ni comparte datos para seguimiento publicitario.</p>`,
      children: `<p>${app.name} no esta dirigida a menores de 13 anos. No recopilamos conscientemente informacion personal de menores.</p>`,
      rights: `<p>Como los datos principales permanecen localmente en tu dispositivo, eliminar la app elimina esos datos de nuestro alcance. Para borrar datos analiticos anonimos, contacta con aboyahyadev@icloud.com.</p>`,
      disclaimer: `<p>${app.name} es un diario personal o una herramienta utilitaria, no un dispositivo medico. No sustituye el consejo de un profesional cualificado.</p>`,
      changes: `<p>Podemos actualizar esta politica. Los cambios se publicaran en esta pagina con una fecha revisada.</p>`,
      contact: `<p>Si tienes preguntas sobre esta politica, contactanos en aboyahyadev@icloud.com o visita la pagina de soporte.</p>`,
    },
    de: {
      default: `<p>Dieser Abschnitt erklaert, wie ${app.name} mit diesen Daten umgeht. Persoenliche Informationen bleiben wann immer moeglich auf deinem Geraet; private Inhalte werden nicht verkauft oder fuer Werbung genutzt.</p>`,
      data: `<p>Daten, die du in ${app.name} erstellst, werden lokal auf deinem Geraet gespeichert. Pretty Toolkit hat keinen Zugriff auf deine App-Inhalte und laedt sie nicht auf eigene Server hoch.</p>`,
      notifications: `<p>Erinnerungen sind optional und werden lokal auf deinem Geraet geplant. Du kannst sie in der App oder in den iOS-Einstellungen aendern oder deaktivieren.</p>`,
      collection: `<p>${app.name} erhebt keine direkt identifizierenden Informationen wie Name, E-Mail, Telefonnummer oder Apple-ID. Begrenzte anonyme Daten koennen genutzt werden, um Zuverlaessigkeit und Funktionen zu verbessern, ohne persoenliche Inhalte.</p>`,
      payments: `<p>Optionale Abos oder Kaeufe werden ueber den App Store abgewickelt. Pretty Toolkit erhaelt keine Zahlungsinformationen.</p>`,
      services: `<p>${app.name} kann Apple-Frameworks und Mixpanel fuer begrenzte anonyme Analysen verwenden. Persoenliche App-Inhalte werden nicht an Werbedienste oder Datenhaendler gesendet.</p>`,
      sharing: `<p>Wir verkaufen oder vermieten deine personenbezogenen Daten nicht. Wenn du etwas teilst oder exportierst, geschieht das nur an das Ziel, das du in iOS auswaehlst.</p>`,
      tracking: `<p>${app.name} verfolgt dich nicht ueber Apps und Websites anderer Unternehmen hinweg und teilt keine Daten fuer Werbetracking.</p>`,
      children: `<p>${app.name} richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern.</p>`,
      rights: `<p>Da die wichtigsten Daten lokal auf deinem Geraet bleiben, entfernt das Loeschen der App diese Daten aus unserem Einflussbereich. Fuer die Loeschung anonymer Analysedaten kontaktiere aboyahyadev@icloud.com.</p>`,
      disclaimer: `<p>${app.name} ist ein persoenliches Journal oder Utility-Werkzeug, kein medizinisches Geraet. Es ersetzt keine Beratung durch qualifizierte Fachleute.</p>`,
      changes: `<p>Wir koennen diese Richtlinie aktualisieren. Aenderungen werden auf dieser Seite mit aktualisiertem Datum veroeffentlicht.</p>`,
      contact: `<p>Bei Fragen zu dieser Richtlinie kontaktiere uns unter aboyahyadev@icloud.com oder besuche die Support-Seite.</p>`,
    },
  };

  const headingLabels: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
    fr: {
      data: 'Donnees de l app',
      notifications: 'Notifications',
      collection: 'Collecte de donnees',
      payments: 'Abonnements et paiements',
      services: 'Services tiers',
      sharing: 'Partage des donnees',
      tracking: 'Suivi',
      children: 'Confidentialite des enfants',
      rights: 'Vos droits et suppression',
      disclaimer: 'Avertissement sante et bien-etre',
      changes: 'Modifications de cette politique',
      contact: 'Contact',
    },
    es: {
      data: 'Datos de la app',
      notifications: 'Notificaciones',
      collection: 'Recopilacion de datos',
      payments: 'Suscripciones y pagos',
      services: 'Servicios de terceros',
      sharing: 'Compartir datos',
      tracking: 'Seguimiento',
      children: 'Privacidad infantil',
      rights: 'Tus derechos y eliminacion',
      disclaimer: 'Aviso de salud y bienestar',
      changes: 'Cambios en esta politica',
      contact: 'Contacto',
    },
    de: {
      data: 'App-Daten',
      notifications: 'Benachrichtigungen',
      collection: 'Datenerhebung',
      payments: 'Abonnements und Zahlungen',
      services: 'Dienste Dritter',
      sharing: 'Datenweitergabe',
      tracking: 'Tracking',
      children: 'Datenschutz von Kindern',
      rights: 'Deine Rechte und Loeschung',
      disclaimer: 'Hinweis zu Gesundheit und Wohlbefinden',
      changes: 'Aenderungen dieser Richtlinie',
      contact: 'Kontakt',
    },
  };

  const keyFor = (heading: string) => {
    const lower = heading.toLowerCase();
    if (/notification|reminder/.test(lower)) return 'notifications';
    if (/collection/.test(lower)) return 'collection';
    if (/subscription|payment/.test(lower)) return 'payments';
    if (/third-party|services/.test(lower)) return 'services';
    if (/sharing/.test(lower)) return 'sharing';
    if (/tracking/.test(lower)) return 'tracking';
    if (/disclaimer|medical|health|wellness/.test(lower)) return 'disclaimer';
    if (/children/.test(lower)) return 'children';
    if (/rights|deletion/.test(lower)) return 'rights';
    if (/changes/.test(lower)) return 'changes';
    if (/contact/.test(lower)) return 'contact';
    if (/data|journal|history|camera|photo|factor|search|export|backup|diary|sleep|qr|categories/.test(lower)) return 'data';
    return 'default';
  };

  return app.privacy.sections.map((section) => {
    const key = keyFor(section.heading);
    return {
      heading: headingLabels[locale][key] ?? section.heading,
      content: templates[locale][key] ?? templates[locale].default,
    };
  });
}

export function getLocalizedApp(app: App, locale: Locale): App {
  if (locale === 'en') return app;
  const copy = appCopy[locale][app.slug];
  return {
    ...app,
    tagline: copy?.tagline ?? app.tagline,
    description: copy?.description ?? app.description,
    features: localizeFeatures(app, locale),
    faqs: localizeFaqs(app, locale),
    privacy: app.privacy
      ? {
          lastUpdated: app.privacy.lastUpdated,
          intro:
            locale === 'fr'
              ? `Cette politique explique comment ${app.name} collecte, utilise et protege vos informations. ${app.name} est publiee par Pretty Toolkit.`
              : locale === 'es'
                ? `Esta politica explica como ${app.name} recopila, usa y protege tu informacion. ${app.name} es publicada por Pretty Toolkit.`
                : `Diese Richtlinie erklaert, wie ${app.name} deine Informationen erhebt, nutzt und schuetzt. ${app.name} wird von Pretty Toolkit veroeffentlicht.`,
          sections: localizePrivacySections(app, locale) ?? app.privacy.sections,
        }
      : undefined,
  };
}

export function getLocalizedApps(locale: Locale): App[] {
  return apps.map((app) => getLocalizedApp(app, locale));
}

export function getSupportFaqs(locale: Locale): Faq[] {
  return ui[locale].support.faqs.map(([question, answer]) => ({ question, answer }));
}

export function getGeneralPrivacySections(locale: Locale): PrivacySection[] {
  return ui[locale].privacy.sections.map(([heading, content]) => ({ heading, content: `<p>${content}</p>` }));
}
