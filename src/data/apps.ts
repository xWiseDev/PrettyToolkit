export type Category = "scanning" | "productivity" | "wellness" | "lifestyle" | "daily-tools";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PrivacySection {
  heading: string;
  content: string;
}

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  icon: string;
  appStoreUrl: string;
  accentColor: string;
  features: Feature[];
  screenshots: string[];
  status: "live" | "coming-soon";
  order: number;
  faqs?: Faq[];
  privacy?: {
    lastUpdated: string;
    intro: string;
    sections: PrivacySection[];
  };
}

export const categories: Record<Category, string> = {
  scanning: "Scanning",
  productivity: "Productivity",
  wellness: "Wellness",
  lifestyle: "Lifestyle",
  "daily-tools": "Daily Tools",
};

export const apps: App[] = [
  {
    slug: "sincefy",
    name: "Sincefy",
    tagline: "Count down, beautifully.",
    description:
      "A countdown widget for every day that matters — birthdays, weddings, trips, milestones. Beautiful on your home screen, kept forever as a memory.",
    category: "lifestyle",
    icon: "/icons/sincefy.png",
    appStoreUrl: "https://apps.apple.com/app/sincefy/id6767852202",
    accentColor: "#D9A2A8",
    features: [
      {
        icon: "history",
        title: "Live countdowns",
        description:
          "Ticking countdown widgets that stay current on the home screen, lock screen, and StandBy. Pick any future date and watch it tick down to the second.",
      },
      {
        icon: "palette",
        title: "Themes to your taste",
        description:
          "Warm mauve themes, soft photo backgrounds, and per-event color treatments. The widget always belongs on your home screen — never the other way around.",
      },
      {
        icon: "qr-create",
        title: "Count up after",
        description:
          "Past events don't disappear. The day after the wedding, your countdown becomes a count-up — a keepsake that grows with you.",
      },
      {
        icon: "barcode",
        title: "Lock-screen widgets",
        description:
          "Rectangular and circular lock-screen widgets for the moments you don't want to miss. Glanceable at any time, with no need to unlock.",
      },
      {
        icon: "share",
        title: "Gentle reminders",
        description:
          "Opt-in notifications a month, a week, or an hour before. Mix and match per countdown. Reminders are always your choice — never on by default.",
      },
      {
        icon: "scan",
        title: "Designed with care",
        description:
          "Italic display numerals on a warm mauve gradient. Full Dynamic Type, VoiceOver, haptic feedback, and Reduce-Motion support throughout.",
      },
    ],
    screenshots: [
      "/screenshots/sincefy/01-birthday-countdown.png",
      "/screenshots/sincefy/02-countdown-widget.png",
      "/screenshots/sincefy/03-day-counter.png",
      "/screenshots/sincefy/04-days-since.png",
      "/screenshots/sincefy/05-lock-screen-widget.png",
    ],
    status: "live",
    order: 1,
    faqs: [
      {
        question: "What is Sincefy?",
        answer:
          "Sincefy is a countdown widget app for iPhone. Create beautiful, glanceable countdowns to any future date — birthdays, weddings, trips, exams, due dates, anniversaries — and pin them to your home screen, lock screen, or StandBy display. After the date arrives, your countdown becomes a count-up, so the moment is kept forever.",
      },
      {
        question: "How do Sincefy widgets work?",
        answer:
          "Sincefy supports home-screen widgets in small, medium, and large sizes, plus lock-screen widgets in rectangular and circular formats. Long-press your home screen, add the Sincefy widget, then tap to choose which countdown each widget displays. Widgets update automatically as time passes and refresh instantly when you edit a countdown.",
      },
      {
        question: "Does Sincefy work offline?",
        answer:
          "Yes. Sincefy is fully offline. Every countdown, theme, and photo background is stored on your device. No internet connection is required to create, edit, or display countdowns. The only features that need connectivity are sharing a countdown via the system share sheet and processing your subscription through the App Store.",
      },
      {
        question: "Is Sincefy private?",
        answer:
          "Sincefy is built privacy-first. Countdown names, dates, and photos stay on your device — they are never uploaded. The app contains no advertising SDKs and no data brokers. Apple verifies our privacy posture through the app's Privacy Manifest. See the Sincefy privacy policy for full detail on what is and isn't collected.",
      },
      {
        question: "Can countdowns become count-ups after the date arrives?",
        answer:
          "Yes — and that's a core idea behind Sincefy. When your target date passes, the countdown automatically switches to a count-up and moves into the Memories tab. The day after the wedding becomes \"1 day since\", then \"1 month since\", then \"1 year since\" — the moment stays with you instead of being deleted.",
      },
      {
        question: "Which iPhones and iOS versions does Sincefy support?",
        answer:
          "Sincefy supports modern iPhones running recent versions of iOS. Lock-screen widgets, StandBy widgets, and Live Activities depend on iOS features available on supported devices. Check the App Store listing for the current minimum iOS requirement.",
      },
    ],
    privacy: {
      lastUpdated: "May 2026",
      intro:
        'This privacy policy explains how Sincefy: Countdown Widget ("Sincefy", "the app") collects, uses, and protects your information. Sincefy is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Countdown Data",
          content:
            "<p>When you create a countdown, the event name, date, theme, and any attached photo background are stored locally on your device using on-device storage. Sincefy uses an App Group container so the host app and widget extension can share the same on-device database — nothing in this container leaves your device. We do not have access to your countdowns, and they are never uploaded to external servers.</p>",
        },
        {
          heading: "Photo Library",
          content:
            "<p>Sincefy requests access to your photo library only when you choose to set a custom photo background on a countdown. The selected image is read once, optionally resized on-device for widget rendering, and stored within the app's local container. Sincefy does not browse, index, or upload any other photos in your library.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Sincefy may request permission to send you reminders for individual countdowns (for example, one day before, one hour before). Notifications are entirely opt-in per countdown — never on by default — and can be revoked at any time in your device Settings. Premium users may schedule multi-stage reminders; free users receive single reminders. No reminder content leaves your device — all notifications are scheduled locally.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>Sincefy does not collect any personally identifiable information (name, email address, phone number, or precise location). The app does collect limited anonymous data to help us understand how the app is used and improve your experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as countdowns created, widget configurations, and features viewed. These events contain no personal content (we never see your countdown names, dates, or photos).</li><li><strong>Device Identifier</strong> — An anonymous, randomly generated identifier used to distinguish unique app installations. This ID is not linked to your Apple ID, name, or any personal information.</li><li><strong>Purchase History</strong> — Your subscription status is checked locally via Apple StoreKit to unlock premium features. We do not see your payment details.</li><li><strong>Crash Data</strong> — Basic crash and performance diagnostics to help us fix bugs and improve reliability.</li></ul><p>None of this data is linked to your identity. Your countdown content, photos, and reminder data never leave your device.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>Sincefy offers optional premium features through a subscription managed via the Apple App Store. All payment processing is handled entirely by Apple. We do not have access to your payment information, credit card details, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Sincefy uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — StoreKit (subscriptions), WidgetKit (home and lock-screen widgets), SwiftData (on-device storage), and PhotoKit (photo background selection), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no personal information and cannot identify you. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>Sincefy does not integrate any advertising SDKs or data brokers.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you use the share feature on a countdown, data is shared only through the system share sheet to the destination you choose.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Sincefy does not track you across apps and websites owned by other companies. We do not share your data with data brokers, advertising networks, or any third party for tracking purposes. The anonymous device identifier we generate is local to Sincefy and is not linked to your identity or to other apps. This matches the <code>NSPrivacyTracking = false</code> declaration in our App Store privacy manifest.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Sincefy is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Sincefy stores your countdowns locally on your device, deleting the app removes all of your data from our reach permanently. To request deletion of analytics data tied to your device's anonymous identifier, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> with your request — we will delete the data within 30 days.</p><p>EU residents have additional rights under GDPR (access, correction, portability, restriction) and California residents have rights under the CCPA. Contact us at the same email to exercise these rights.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
  {
    slug: "sopora",
    name: "Sopora",
    tagline: "Sleep, simply logged.",
    description:
      "A calm sleep journal for the nights you want to understand. Log when you slept, how you felt, and what shaped the night — no microphone, no account, no guessing.",
    category: "wellness",
    icon: "/icons/sopora.png",
    appStoreUrl: "https://apps.apple.com/us/app/sleep-diary-journal-sopora/id6778006318",
    accentColor: "#8F6F9F",
    features: [
      {
        icon: "history",
        title: "Manual sleep logging",
        description:
          "Add bedtime, wake time, and a simple rested rating in seconds. Sopora is typed by you, so it never invents sleep stages or guesses what happened overnight.",
      },
      {
        icon: "qr-create",
        title: "Always editable",
        description:
          "Fix a time, add a note, tag yesterday, or delete a night later. Your sleep journal stays flexible because real nights rarely fit a perfect template.",
      },
      {
        icon: "palette",
        title: "Lifestyle factors",
        description:
          "Tag the things that may have shaped your sleep — caffeine, stress, exercise, screens, travel, and more. Keep the context without turning bedtime into homework.",
      },
      {
        icon: "barcode",
        title: "Gentle patterns",
        description:
          "See duration, rested ratings, and factor correlations in a clear trends view. Useful enough to notice what helps, quiet enough to avoid fake precision.",
      },
      {
        icon: "share",
        title: "Your data, yours",
        description:
          "Export your sleep journal as CSV or JSON, and restore from a Sopora JSON backup. Your notes and nights are stored locally on your device.",
      },
      {
        icon: "scan",
        title: "Private by design",
        description:
          "No microphone recording, no forced account, no sleep-stage guessing. Optional reminders are scheduled locally, and the core journal works offline.",
      },
    ],
    screenshots: [
      "/screenshots/sopora/01-sleep-diary.png",
      "/screenshots/sopora/02-sleep-log.png",
      "/screenshots/sopora/03-sleep-notes.png",
      "/screenshots/sopora/04-sleep-tracker.png",
    ],
    status: "live",
    order: 3,
    faqs: [
      {
        question: "What is Sopora?",
        answer:
          "Sopora is a simple sleep journal for iPhone. Instead of recording audio or guessing your sleep stages, it lets you manually log when you went to bed, when you woke up, how rested you felt, and which lifestyle factors may have shaped the night.",
      },
      {
        question: "Does Sopora track sleep automatically?",
        answer:
          "No. Sopora is deliberately manual. You type the sleep window yourself, which keeps the app private, lightweight, and editable. There is no microphone recording, no snore detection, and no automatic REM or deep-sleep scoring.",
      },
      {
        question: "Can I edit old sleep entries?",
        answer:
          "Yes. Every sleep entry can be edited later. You can correct bed or wake times, change your rested rating, add notes, update factor tags, or remove an entry if it was logged by mistake.",
      },
      {
        question: "What are lifestyle factors?",
        answer:
          "Lifestyle factors are simple tags you can add to a night, such as caffeine, alcohol, exercise, stress, screen time, travel, a late meal, or feeling unwell. Sopora uses them to help you notice patterns without asking for medical-level tracking.",
      },
      {
        question: "Is Sopora private?",
        answer:
          "Yes. Your sleep entries, notes, factors, and reminders are stored locally on your device. Sopora has no account system and does not upload your journal content to external servers.",
      },
      {
        question: "Does Sopora offer reminders?",
        answer:
          "Sopora can schedule optional local reminders, including a morning nudge to log last night and a bedtime wind-down reminder. Reminders are opt-in and can be changed or turned off at any time in your device settings.",
      },
    ],
    privacy: {
      lastUpdated: "June 2026",
      intro:
        'This privacy policy explains how Sopora: Sleep Journal ("Sopora", "the app") collects, uses, and protects your information. Sopora is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Sleep Journal Data",
          content:
            "<p>When you log a night in Sopora, your bed time, wake time, rested rating, notes, lifestyle factors, and timestamps are stored locally on your device using on-device storage. Sopora does not upload your sleep journal to external servers, and we do not have access to the content of your entries.</p>",
        },
        {
          heading: "Lifestyle Factors and Notes",
          content:
            "<p>Lifestyle factors and free-text notes are part of your private journal. They are used on-device to help you review your nights and understand patterns. We never send factor names, note text, bed times, wake times, or individual sleep-entry content to analytics services.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Sopora may request permission to send optional sleep reminders, such as a morning reminder to log last night or a bedtime wind-down reminder. These reminders are scheduled locally on your device, are opt-in, and can be changed or revoked at any time in the app or in iOS Settings. Reminder content is not uploaded to external servers.</p>",
        },
        {
          heading: "Data Import and Export",
          content:
            "<p>Sopora may let you export your sleep journal as CSV or JSON files and import a Sopora JSON backup. Exports are created locally and shared only through the iOS share sheet or file destination you choose. Imports are processed on-device and do not upload your data to Pretty Toolkit.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>Sopora does not collect personally identifiable information such as your name, email address, phone number, precise location, or Apple ID. The app may collect limited anonymous data to help us understand and improve the experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as onboarding progress, entries logged or edited, reminder settings changed, exports started, and premium screens viewed. These events contain no personal journal content.</li><li><strong>Device Identifier</strong> — An anonymous identifier used to distinguish unique app installations. This identifier is not linked to your Apple ID, name, or contact information.</li><li><strong>Purchase History</strong> — Subscription status is checked via Apple StoreKit to unlock premium features. We do not see your payment details.</li><li><strong>Crash Data</strong> — Basic crash and performance diagnostics to help us fix bugs and improve reliability.</li></ul><p>None of this data is linked to your identity. Your sleep entries, notes, factor labels, and reminder details stay on your device.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>Sopora may offer optional premium features through subscriptions managed by the Apple App Store. All payment processing is handled by Apple. We do not have access to your credit card details, payment information, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Sopora uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — SwiftData (on-device storage), UserNotifications (local reminders), StoreKit (subscriptions), and system sharing/import tools, governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no sleep-entry content, note text, factor names, or personal information. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>Sopora does not integrate advertising SDKs or data brokers.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you export or share data, it is shared only through the system destination you choose.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Sopora does not track you across apps and websites owned by other companies. We do not share your data with data brokers, advertising networks, or third parties for tracking purposes.</p>",
        },
        {
          heading: "Health and Wellness Disclaimer",
          content:
            "<p>Sopora is a personal sleep journal, not a medical device. It does not diagnose, treat, prevent, or monitor any medical condition. For health concerns, consult a qualified professional.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Sopora is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Sopora stores your sleep journal locally on your device, deleting the app removes your local journal data from our reach. To request deletion of analytics data tied to your anonymous app identifier, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> with your request, and we will delete the data within 30 days.</p><p>EU residents have additional rights under GDPR, and California residents have rights under the CCPA. Contact us at the same email to exercise these rights.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
  {
    slug: "luxira",
    name: "Luxira",
    tagline: "Scan beautifully.",
    description:
      "A QR & barcode scanner that's as elegant as everything else on your phone. Scan, Create & Organize Codes — fast, reliable, and designed with intention.",
    category: "scanning",
    icon: "/icons/luxira.png",
    appStoreUrl: "https://apps.apple.com/app/luxira/id6760436352",
    accentColor: "#E8B4B8",
    features: [
      {
        icon: "scan",
        title: "Instant Scanning",
        description:
          "QR codes and 9 barcode formats — EAN, UPC, Code 128, Aztec, Data Matrix, and more. Auto-detects URLs, Wi-Fi, contacts, phone numbers, email, and calendar events.",
      },
      {
        icon: "qr-create",
        title: "QR Code Creator",
        description:
          "Generate QR codes for URLs, text, Wi-Fi, contacts, and 12 social platforms. Customize with style templates, colors, gradients, and logo badges.",
      },
      {
        icon: "history",
        title: "Scan History & Favorites",
        description:
          "Every scan saved with date, type, and content. Full-text search, favorites, and bulk management — nothing gets lost.",
      },
      {
        icon: "barcode",
        title: "Gallery & Manual Entry",
        description:
          "Scan codes from photos in your library. Enter barcodes manually with format validation when a camera isn't an option.",
      },
      {
        icon: "share",
        title: "Share & Export",
        description:
          "Share scans and QR codes instantly via the system share sheet. Save created QR codes directly to your photo library.",
      },
      {
        icon: "palette",
        title: "Designed with Care",
        description:
          "Warm dusty-rose palette with light and dark modes. Haptic feedback, Dynamic Type, and full VoiceOver support.",
      },
    ],
    screenshots: [
      "/screenshots/luxira/01-scan-qr-code.png",
      "/screenshots/luxira/02-barcode-scanner.png",
      "/screenshots/luxira/03-custom-qr-template.png",
      "/screenshots/luxira/04-qr-code-generator.png",
      "/screenshots/luxira/05-qr-code-reader.png",
    ],
    status: "live",
    order: 2,
    faqs: [
      {
        question: "What is Luxira and how does it scan QR codes on iPhone?",
        answer:
          "Luxira is a QR and barcode scanner app for iPhone that reads codes instantly using your camera. Point your camera at any QR code or barcode and Luxira detects it in real time — no button press needed. It supports all standard QR formats plus 9 barcode types including EAN-8, EAN-13, UPC-E, Code 39, Code 128, PDF 417, Aztec, Data Matrix, and ISBN. Luxira automatically recognizes URLs, Wi-Fi networks, contacts, phone numbers, email addresses, and calendar events.",
      },
      {
        question: "Is Luxira free to download?",
        answer:
          "Yes, Luxira is free to download from the App Store. Core features including QR code scanning, barcode reading, and scan history are available at no cost. An optional premium upgrade unlocks additional features like custom QR code creation with style templates, colors, gradients, and logo badges.",
      },
      {
        question: "Does Luxira work without internet or offline?",
        answer:
          "Yes, Luxira works fully offline. All scanning, QR code creation, scan history, and favorites are processed and stored entirely on your device with no internet connection required. The only features that need connectivity are sharing scans via the system share sheet and downloading your premium subscription.",
      },
      {
        question: "How do I create a custom QR code with Luxira?",
        answer:
          "Open Luxira and tap the Create tab. Choose from 16 content types including URL, plain text, Wi-Fi network, contact card, and 12 social media platforms like Instagram, TikTok, YouTube, and Snapchat. Enter your details, then customize the appearance with style templates, foreground and background colors, gradients, or add a logo badge. Save the finished QR code to your photo library or share it directly.",
      },
      {
        question: "Is Luxira safe? How does it handle my data and privacy?",
        answer:
          "Luxira is designed with privacy at its core. All scan data is stored locally on your iPhone and never uploaded to any server. The app contains no advertising SDKs, no cross-app tracking, and no personal scan data collection — this is verified by Apple through the app's Privacy Manifest. Camera data is processed on-device in real time and never recorded or stored.",
      },
      {
        question: "Can I scan a QR code from a photo or screenshot on iPhone?",
        answer:
          "Yes. Tap the gallery icon inside the Luxira scanner to select any photo or screenshot from your library. Luxira will detect and read any QR code or barcode in the image. This is useful for scanning codes shared in messages, emails, or saved screenshots without needing to display them on a second screen.",
      },
      {
        question: "What barcode formats does Luxira support?",
        answer:
          "Luxira supports 9 barcode formats: EAN-8, EAN-13, UPC-E, Code 39, Code 128, PDF 417, Aztec, Data Matrix, and ISBN. It also reads all standard QR code formats. Each scanned code is automatically categorized by type and content, making it easy to find in your scan history later.",
      },
      {
        question: "Does Luxira support dark mode and accessibility features?",
        answer:
          "Yes. Luxira includes both light and dark modes with a warm dusty-rose color palette. The app fully supports Dynamic Type for adjustable text sizes, VoiceOver for screen reader users, and haptic feedback for scan confirmations. Every feature is designed to be accessible regardless of how you use your iPhone.",
      },
    ],
    privacy: {
      lastUpdated: "April 2026",
      intro:
        'This privacy policy explains how Luxira: QR & Barcode Scanner ("Luxira", "the app") collects, uses, and protects your information. Luxira is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Camera Access",
          content:
            "<p>Luxira requires access to your device's camera to scan QR codes and barcodes. Camera data is processed entirely on-device in real time. No images or video from your camera are stored, uploaded, or transmitted to any server.</p>",
        },
        {
          heading: "Photo Library",
          content:
            "<p>Luxira requests save-only access to your photo library when you choose to save a created QR code. The app cannot read or browse your existing photos. Gallery scanning uses the system photo picker, which requires no permission.</p>",
        },
        {
          heading: "Scan History",
          content:
            "<p>When you scan a code, the result is saved to your scan history. All scan history data is stored locally on your device using on-device storage. We do not have access to your scan history, and it is never uploaded to external servers.</p>",
        },
        {
          heading: "QR Code Creation",
          content:
            "<p>When you create a QR code, the content you enter (URLs, text, contacts, Wi-Fi credentials, social media links) is processed entirely on your device. This data is not sent to any server.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Luxira may request permission to send you notifications with feature tips and updates. Notification permission is entirely optional and can be revoked at any time in your device Settings. Premium users receive no notifications.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>Luxira does not collect any personally identifiable information (name, email address, phone number, or precise location). The app does collect limited anonymous data to help us understand how the app is used and improve your experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as scans completed, QR codes created, and features viewed. These events contain no personal content (we never see what you scan or create).</li><li><strong>Device Identifier</strong> — An anonymous, randomly generated identifier used to distinguish unique app installations. This ID is not linked to your Apple ID, name, or any personal information.</li><li><strong>Purchase History</strong> — Your subscription status (free or premium) is checked locally via Apple StoreKit to unlock premium features. We do not see your payment details.</li><li><strong>Crash Data</strong> — Basic crash and performance diagnostics to help us fix bugs and improve reliability.</li></ul><p>None of this data is linked to your identity. Your scan content, QR code content, photos, and camera data never leave your device.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>Luxira offers optional premium features through a subscription managed via the Apple App Store. All payment processing is handled entirely by Apple. We do not have access to your payment information, credit card details, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Luxira uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — StoreKit (subscriptions), AVFoundation (camera), and Vision (barcode detection), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no personal information and cannot identify you. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>Luxira does not integrate any advertising SDKs or data brokers.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you use the share or export feature, data is shared only through the system share sheet to the destination you choose.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Luxira is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
  {
    slug: "logfd",
    name: "logfd",
    tagline: "Log it. Leave it there.",
    description:
      "A calm food and intake diary for the everyday details. Write what you ate, drank, or did, and let the rest stay simple.",
    category: "daily-tools",
    icon: "/icons/logfd.png",
    appStoreUrl: "",
    accentColor: "#E8A05C",
    features: [
      {
        icon: "history",
        title: "Quick, free-form logging",
        description:
          "Write down a meal, drink, supplement, medication, or workout in your own words. Every entry is timestamped automatically, with nothing extra to fill out.",
      },
      {
        icon: "palette",
        title: "Simple categories",
        description:
          "Keep the day clear with gentle Food, Drink, and Other groupings. Categories are optional, so logging never becomes a chore.",
      },
      {
        icon: "history",
        title: "Your day, in context",
        description:
          "Move through past days with a working calendar and revisit the small details when you need them.",
      },
      {
        icon: "scan",
        title: "Find what matters",
        description:
          "Search your history and filter entries when you want to look something up—without turning your diary into a spreadsheet.",
      },
      {
        icon: "share",
        title: "Export when needed",
        description:
          "Create clear PDF or CSV exports to keep for yourself or share with a professional you trust.",
      },
      {
        icon: "barcode",
        title: "Calm by design",
        description:
          "No calorie counting and no judgment. Your diary stays focused, private, and easy to return to.",
      },
    ],
    screenshots: [],
    status: "coming-soon",
    order: 4,
    faqs: [
      {
        question: "What is logfd?",
        answer:
          "logfd is a simple food and intake diary for iPhone. It gives you one quiet place to note what you ate, drank, took, or did, with a timestamp and optional category. There are no calorie targets, food databases, or judgment—just your own words, kept clearly.",
      },
      {
        question: "What can I log in logfd?",
        answer:
          "You can log food, drinks, supplements, medication, and exercise. Start with a short note and let the app timestamp it for you. Optional Food, Drink, and Other categories help keep a day organized without getting in the way.",
      },
      {
        question: "Does logfd count calories or track weight?",
        answer:
          "No. logfd is deliberately a free-form diary, not a calorie counter or weight tracker. It is made for recording the details you want to remember without scores, targets, or pressure.",
      },
      {
        question: "Can I search or export my diary?",
        answer:
          "Yes. logfd is being built with search, calendar history, and clear PDF and CSV export tools, so you can find past entries or share a record when it is useful.",
      },
      {
        question: "Is logfd private?",
        answer:
          "Your diary is designed to stay on your device. logfd does not turn your meals or personal notes into a profile. A full privacy policy will be available before the app launches.",
      },
    ],
    privacy: {
      lastUpdated: "June 2026",
      intro:
        'This privacy policy explains how logfd: Food & Intake Diary ("logfd", "the app") collects, uses, and protects your information. logfd is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Diary Data",
          content:
            "<p>When you create an entry in logfd, the text you write, category, date, creation time, modification time, and deletion state are stored locally on your device using on-device storage. logfd does not upload your diary entries to Pretty Toolkit servers, and we do not have access to the content of your entries.</p>",
        },
        {
          heading: "Categories and Search",
          content:
            "<p>Food, Drink, and Other categories are stored with your entries on your device. Search and filtering are performed on-device. We do not send entry text, categories, dates, or search terms to analytics services.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>logfd may request permission to send optional meal or intake reminders. Reminders are off by default, scheduled locally on your device, and can be changed or revoked at any time in the app or in iOS Settings. Reminder settings such as enabled state, time, and mode are stored on your device using UserDefaults. Reminder content is not uploaded to external servers.</p>",
        },
        {
          heading: "Data Export, Backup, and Restore",
          content:
            "<p>logfd may let you export diary entries as PDF or CSV files, create a JSON backup, and restore from a backup file. Exports and backups are generated locally and shared only through the iOS share sheet or file destination you choose, such as Files, iCloud Drive, email, or AirDrop. Restores are processed on-device and do not upload your diary to Pretty Toolkit.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>logfd does not collect personally identifiable information such as your name, email address, phone number, precise location, Apple ID, or diary content. The app may collect limited anonymous data to help us understand and improve the experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as onboarding progress, entries created or edited, reminder settings changed, exports started, backups created, restores completed, paywall screens viewed, and features used. These events contain no diary text, dates, categories, search terms, or exported file content.</li><li><strong>Device Identifier</strong> — An anonymous identifier used to distinguish unique app installations. This identifier is not linked to your Apple ID, name, email address, or contact information.</li><li><strong>Purchase History</strong> — Subscription status is checked via Apple StoreKit to unlock premium features. We do not see your payment details.</li></ul><p>None of this data is linked to your identity. Your diary entries, reminders, exports, backups, and imported files stay under your control.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>logfd may offer optional premium features through subscriptions managed by the Apple App Store. All payment processing is handled by Apple. We do not have access to your credit card details, payment information, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>logfd uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — SwiftData (on-device storage), UserDefaults (preferences and local state), UserNotifications (local reminders), StoreKit (subscriptions), and system sharing/import tools, governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no diary entry content, category details, search terms, exported files, backup files, or personal information. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>logfd does not integrate data brokers or cross-app tracking tools.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you export, back up, restore, or share data, it is handled only through the system destination or file you choose.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>logfd does not track you across apps and websites owned by other companies. We do not share your data with data brokers, advertising networks, or third parties for tracking purposes. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Health and Wellness Disclaimer",
          content:
            "<p>logfd is a personal diary, not a medical device, nutrition program, calorie counter, or treatment tool. It does not diagnose, treat, prevent, or monitor any medical condition. For health concerns, consult a qualified professional.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>logfd is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because logfd stores your diary locally on your device, deleting the app removes your local diary data from our reach. Entries that you delete inside the app may be kept briefly on your device to support undo and data safety before being purged. To request deletion of analytics data tied to your anonymous app identifier, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> with your request, and we will delete the data within 30 days.</p><p>EU residents have additional rights under GDPR, and California residents have rights under the CCPA. Contact us at the same email to exercise these rights.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
  {
    slug: "bpivy",
    name: "BPIVY",
    tagline: "Your blood pressure, beautifully logged.",
    description:
      "A calm blood-pressure log for readings you take on your own cuff. Track trends, set gentle reminders, and export a clear record for your doctor.",
    category: "wellness",
    icon: "/icons/bpivy.png",
    appStoreUrl: "",
    accentColor: "#3E8E9C",
    features: [
      {
        icon: "history",
        title: "Manual BP logging",
        description:
          "Enter systolic, diastolic, pulse, time, arm, position, and notes from your own home blood-pressure cuff. BPIVY records; it does not measure.",
      },
      {
        icon: "palette",
        title: "Clear categories",
        description:
          "See calm, readable blood-pressure categories next to each reading, with guideline-aware labels that never rely on color alone.",
      },
      {
        icon: "qr-create",
        title: "History and calendar",
        description:
          "Move through past days, review older readings, and use a calendar view to understand when readings happened.",
      },
      {
        icon: "barcode",
        title: "Trends without panic",
        description:
          "Review averages, category breakdowns, and gentle charts that make patterns visible without turning health tracking into alarm.",
      },
      {
        icon: "share",
        title: "Doctor-ready export",
        description:
          "Create clean PDF or CSV reports from your readings so you can keep a record or share useful context at your next appointment.",
      },
      {
        icon: "scan",
        title: "Private and careful",
        description:
          "Readings stay on your device. Optional reminders are local, subscriptions are handled by Apple, and BPIVY is a log, not medical advice.",
      },
    ],
    screenshots: [],
    status: "coming-soon",
    order: 5,
    faqs: [
      {
        question: "What is BPIVY?",
        answer:
          "BPIVY is a blood-pressure log and diary for iPhone. You take a reading with your own blood-pressure cuff, type the numbers into BPIVY, and keep a calm history you can review or share with your doctor.",
      },
      {
        question: "Does BPIVY measure blood pressure?",
        answer:
          "No. BPIVY does not measure blood pressure, connect to a cuff, or turn your phone into a medical device. It records readings you take yourself on your own monitor.",
      },
      {
        question: "Can BPIVY help me share readings with my doctor?",
        answer:
          "Yes. BPIVY is being built with clear PDF and CSV exports, so you can bring a simple record of readings, averages, and notes to an appointment.",
      },
      {
        question: "Does BPIVY include reminders?",
        answer:
          "BPIVY can offer optional local reminders to help you remember to log a reading. Reminders are your choice, scheduled on your device, and can be changed or turned off.",
      },
      {
        question: "Is BPIVY private?",
        answer:
          "Yes. Your blood-pressure readings, notes, reminders, and exports are designed to stay under your control on your device. BPIVY does not upload reading content to Pretty Toolkit servers.",
      },
      {
        question: "Is BPIVY medical advice?",
        answer:
          "No. BPIVY is a personal log, not medical advice, diagnosis, treatment, emergency guidance, or a replacement for a qualified clinician. Always discuss your readings and health concerns with your doctor.",
      },
    ],
    privacy: {
      lastUpdated: "July 2026",
      intro:
        'This privacy policy explains how BPIVY: Blood Pressure Log ("BPIVY", "the app") collects, uses, and protects your information. BPIVY is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Blood Pressure Log Data",
          content:
            "<p>When you create a reading in BPIVY, the systolic value, diastolic value, optional pulse, date, time, guideline setting, arm, body position, notes, and related reading details are stored locally on your device using on-device storage. BPIVY does not upload your blood-pressure readings to Pretty Toolkit servers, and we do not have access to the content of your readings.</p>",
        },
        {
          heading: "Categories, Trends, and History",
          content:
            "<p>Blood-pressure categories, averages, charts, calendar history, and trend summaries are generated on your device from the readings you enter. We do not send individual readings, categories, notes, dates, or trend results to analytics services.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>BPIVY may request permission to send optional reminders to log a reading. Reminders are scheduled locally on your device, are opt-in, and can be changed or revoked at any time in the app or in iOS Settings. Reminder settings such as enabled state and time are stored on your device using UserDefaults. Reminder content is not uploaded to external servers.</p>",
        },
        {
          heading: "Data Export",
          content:
            "<p>BPIVY may let you export readings as PDF or CSV files. Exports are generated locally and shared only through the iOS share sheet or file destination you choose, such as Files, iCloud Drive, email, or AirDrop. Exported files are not uploaded to Pretty Toolkit unless you choose to send them to us.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>BPIVY does not collect personally identifiable information such as your name, email address, phone number, precise location, Apple ID, or blood-pressure reading content. The app may collect limited anonymous data to help us understand and improve the experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as onboarding progress, readings created or edited, reminder settings changed, exports started, paywall screens viewed, and features used. These events contain no reading numbers, notes, dates, categories, or exported file content.</li><li><strong>Device Identifier</strong> — An anonymous identifier used to distinguish unique app installations. This identifier is not linked to your Apple ID, name, email address, or contact information.</li><li><strong>Purchase History</strong> — Subscription status is checked via Apple StoreKit to unlock premium features. We do not see your payment details.</li></ul><p>None of this data is linked to your identity. Your readings, notes, reminders, and exports stay under your control.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>BPIVY may offer optional premium features through subscriptions managed by the Apple App Store. All payment processing is handled by Apple. We do not have access to your credit card details, payment information, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>BPIVY uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — SwiftData (on-device storage), UserDefaults (preferences and local state), UserNotifications (local reminders), StoreKit (subscriptions), and system sharing tools, governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no blood-pressure reading content, notes, categories, dates, exported files, or personal information. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>BPIVY does not integrate data brokers or cross-app tracking tools.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you export or share data, it is handled only through the system destination or file you choose.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>BPIVY does not track you across apps and websites owned by other companies. We do not share your data with data brokers, advertising networks, or third parties for tracking purposes. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Health and Wellness Disclaimer",
          content:
            "<p>BPIVY is a personal log for readings you take yourself on your own blood-pressure monitor. It is not a medical device, does not measure blood pressure, and does not provide medical advice, diagnosis, treatment, emergency guidance, or monitoring. Always discuss your readings and health concerns with a qualified clinician. If you believe you may be experiencing a medical emergency, seek urgent medical help immediately.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>BPIVY is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because BPIVY stores your readings locally on your device, deleting the app removes your local reading data from our reach. To request deletion of analytics data tied to your anonymous app identifier, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> with your request, and we will delete the data within 30 days.</p><p>EU residents have additional rights under GDPR, and California residents have rights under the CCPA. Contact us at the same email to exercise these rights.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
  {
    slug: "raheva",
    name: "Raheva",
    tagline: "Your cycle, quietly kept.",
    description:
      "A fast, private period tracker with nothing in the way. Open the app, log your day in seconds, and see when your next period is due.",
    category: "wellness",
    icon: "/icons/raheva.png",
    appStoreUrl: "",
    accentColor: "#8B6FAE",
    features: [
      {
        icon: "history",
        title: "Five-second logging",
        description:
          "Open Raheva, mark the day, and get on with your life. No pop-ups, no questionnaires, and nothing standing between you and the log.",
      },
      {
        icon: "qr-create",
        title: "Know what's ahead",
        description:
          "See when your next period is due at a glance, with an optional widget showing the days left. Predictions are calculated on your device from your own history.",
      },
      {
        icon: "history",
        title: "Calendar and history",
        description:
          "Move through past cycles with a clear calendar and revisit any day's details when you need them.",
      },
      {
        icon: "palette",
        title: "Symptoms, your way",
        description:
          "Note how days feel with symptoms and short notes, and shape the list so it fits how you track.",
      },
      {
        icon: "share",
        title: "Doctor-ready export",
        description:
          "Create a clear summary of your cycles to keep for yourself or bring to an appointment.",
      },
      {
        icon: "barcode",
        title: "Discreet by design",
        description:
          "A muted look, gentle wording, and optional reminders that stay vague on the Lock Screen. Your cycle history stays on your device.",
      },
    ],
    screenshots: [
      "/screenshots/raheva/01-period-tracker.png",
      "/screenshots/raheva/03-cycle-history.png",
      "/screenshots/raheva/02-cycle-day-log.png",
      "/screenshots/raheva/04-cycle-insights.png",
    ],
    status: "coming-soon",
    order: 6,
    faqs: [
      {
        question: "What is Raheva?",
        answer:
          "Raheva is a fast, private period tracker for iPhone. You open the app, log your day in a few seconds, and see when your next period is due. There is no account to create and no long setup — just a calm place to keep your cycle.",
      },
      {
        question: "Does Raheva predict my next period?",
        answer:
          "Yes. Raheva estimates when your next period is due based on the history you log. Predictions are calculated on your device and become steadier as you log more cycles.",
      },
      {
        question: "Can I track symptoms and notes?",
        answer:
          "Yes. You can mark symptoms, add short notes, and keep the small details of a day alongside your cycle history.",
      },
      {
        question: "Is Raheva private?",
        answer:
          "Yes. Your cycle data is designed to stay on your device. Raheva does not require an account, and your period days, symptoms, and notes are not uploaded to Pretty Toolkit servers.",
      },
      {
        question: "Can I use Raheva as contraception?",
        answer:
          "No. Raheva's predictions are estimates meant for planning ahead, not medical advice. It is not a contraceptive method, a fertility treatment tool, or a replacement for a qualified clinician.",
      },
      {
        question: "Does Raheva have a widget?",
        answer:
          "Yes. An optional Home Screen widget can show how many days are left until your next period, so you can check without opening the app.",
      },
    ],
    privacy: {
      lastUpdated: "July 2026",
      intro:
        'This privacy policy explains how Raheva: Period Tracker ("Raheva", "the app") collects, uses, and protects your information. Raheva is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Cycle Data",
          content:
            "<p>When you log a day in Raheva, your period days, symptoms, notes, and cycle settings are stored locally on your device using on-device storage. We treat menstrual data as deeply personal: Raheva does not upload your cycle data to Pretty Toolkit servers, we do not have access to it, and there is no account or sign-in.</p>",
        },
        {
          heading: "Predictions, Calendar, and History",
          content:
            "<p>Period predictions, the calendar, and your cycle history are generated on your device from the days you log. We do not send period dates, symptoms, notes, predictions, or any other cycle content to analytics services.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Raheva may request permission to send an optional reminder before your predicted period. Reminders are opt-in, worded discreetly, scheduled locally on your device, and can be changed or revoked at any time in the app or in iOS Settings. Reminder settings such as enabled state and timing are stored on your device using UserDefaults. Reminder content is not uploaded to external servers.</p>",
        },
        {
          heading: "Widget",
          content:
            "<p>The optional days-left widget reads a small summary prepared by the app and shared only between Raheva and its widget on your device. Widget data is not uploaded to external servers.</p>",
        },
        {
          heading: "Data Backup and Restore",
          content:
            "<p>Raheva may let you create a manual backup file of your cycle data and restore from it later. Backups are generated locally and shared only through the iOS share sheet or file destination you choose, such as Files, email, or AirDrop. Restores are processed on-device and do not upload your cycle data to Pretty Toolkit.</p>",
        },
        {
          heading: "Data Collection",
          content:
            '<p>Raheva does not collect personally identifiable information such as your name, email address, phone number, precise location, Apple ID, or any cycle content. The app may collect limited anonymous data to help us understand and improve the experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as onboarding progress, entries logged or edited, reminder settings changed, backups created, restores completed, paywall screens viewed, and features used. These events contain no period dates, symptoms, notes, predictions, or backup file content.</li><li><strong>Device Identifier</strong> — An anonymous identifier used to distinguish unique app installations. This identifier is not linked to your Apple ID, name, email address, or contact information.</li><li><strong>Purchase History</strong> — Subscription status is checked via Apple StoreKit to unlock premium features. We do not see your payment details.</li></ul><p>None of this data is linked to your identity. Your cycle history, predictions, reminders, and backups stay under your control.</p>',
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>Raheva may offer optional premium features through subscriptions managed by the Apple App Store. All payment processing is handled by Apple. We do not have access to your credit card details, payment information, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Raheva uses the following services:</p><ul><li><strong>Apple Frameworks</strong> — SwiftData (on-device storage), UserDefaults (preferences and local state), UserNotifications (local reminders), WidgetKit (the days-left widget), StoreKit (subscriptions), and system sharing tools, governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>.</li><li><strong>Mixpanel</strong> — An analytics service used to collect the anonymous usage data described above. Mixpanel receives no period dates, symptoms, notes, predictions, backup files, or personal information. For details, see <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel\'s Privacy Policy</a>.</li></ul><p>Raheva does not integrate data brokers or cross-app tracking tools.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with third parties. We never share cycle data with advertisers, data brokers, or any other company. Anonymous analytics data is processed by Mixpanel solely on our behalf to improve the app. When you export or share a backup, it is handled only through the system destination or file you choose.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Raheva does not track you across apps and websites owned by other companies. We do not share your data with data brokers, advertising networks, or third parties for tracking purposes. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Health and Wellness Disclaimer",
          content:
            "<p>Raheva is a personal period tracker, not a medical device. Predictions are estimates based on the history you log and can be affected by many factors. Raheva does not provide medical advice, diagnosis, treatment, or contraception, and must not be used as a birth-control method. Always discuss cycle changes and health concerns with a qualified clinician.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Raheva is not directed at children under 13. We do not knowingly collect personal information from children.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Raheva stores your cycle data locally on your device, you stay in control: the app includes an option to erase all cycle data, and deleting the app removes your local data from our reach. To request deletion of analytics data tied to your anonymous app identifier, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> with your request, and we will delete the data within 30 days.</p><p>EU residents have additional rights under GDPR, and California residents have rights under the CCPA. Contact us at the same email to exercise these rights.</p>",
        },
        {
          heading: "Changes to This Policy",
          content:
            "<p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>",
        },
        {
          heading: "Contact",
          content:
            "<p>If you have questions about this privacy policy, please contact us at aboyahyadev@icloud.com or visit our support page.</p>",
        },
      ],
    },
  },
];
