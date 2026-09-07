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
    tagline: "Log the night. Learn what helps.",
    description:
      "The sleep diary you keep yourself, in about ten seconds a morning. Write down when you slept, how rested you felt, every time you woke, and what was in play the day before, then let your own nights show you which ones are working. No microphone, no watch, no account.",
    category: "wellness",
    icon: "/icons/sopora.png",
    appStoreUrl: "https://apps.apple.com/us/app/sleep-diary-journal-sopora/id6778006318",
    accentColor: "#8F6F9F",
    features: [
      {
        icon: "history",
        title: "Ten seconds, then your morning",
        description:
          "Bed time, wake time, and how rested you felt is a complete entry. A Home Screen widget opens straight into logging, morning and bedtime reminders keep the habit alive, and the streak forgives one missed morning a week so a rough night never wipes out what you built.",
      },
      {
        icon: "barcode",
        title: "Broken nights finally count",
        description:
          "Log how many times you woke and how long you were awake. Interrupted sleep shows up in your history and your trends, so a night that felt fragmented reads as fragmented instead of quietly averaging away.",
      },
      {
        icon: "palette",
        title: "Tag what shaped the night",
        description:
          "Caffeine, alcohol, exercise, stress, screens before bed. Tap the factors that were in play and watch which ones keep turning up beside your worst sleep, so the thing to change stops being a guess.",
      },
      {
        icon: "qr-create",
        title: "Your own pattern, in plain words",
        description:
          "A trends chart, a month calendar, and a weekly sleep report, all built from nights you actually logged. Every line is drawn from your entries, never from a prediction, so what you read is something you can trust and act on.",
      },
      {
        icon: "scan",
        title: "Dreams and notes, kept with the night",
        description:
          "Catch a dream before it fades and it stays attached to the night it belongs to, alongside notes for anything else worth remembering. Forgot to log yesterday? Back-date it. Got a time wrong? Every night stays editable, forever.",
      },
      {
        icon: "share",
        title: "Nobody sees your nights but you",
        description:
          "No microphone, no account, no upload. Your journal lives on your device and works fully offline, in 34 languages including right-to-left ones, and CSV or JSON export and import means you can take the whole record with you whenever you want.",
      },
    ],
    screenshots: [
      "/screenshots/sopora/01-sleep-diary.png",
      "/screenshots/sopora/02-sleep-log.png",
      "/screenshots/sopora/03-sleep-trends.png",
      "/screenshots/sopora/04-interrupted-sleep.png",
      "/screenshots/sopora/05-dream-diary.png",
      "/screenshots/sopora/06-sleep-insights.png",
      "/screenshots/sopora/07-private-sleep-journal.png",
    ],
    status: "live",
    order: 3,
    faqs: [
      {
        question: "What is Sopora?",
        answer:
          "Sopora is a manual sleep journal for iPhone. You write down last night yourself in about ten seconds: bed time, wake time, how rested you felt, any wake-ups, plus factor tags like caffeine or stress and a note or a dream if you want one. Sopora turns those entries into a trends chart, a month calendar, and a weekly sleep report, so you can see which nights work for you and what tends to show up beside the bad ones. Nothing is recorded or predicted. There is no microphone and no account, it works offline, and every night stays editable.",
      },
      {
        question: "Does Sopora track my sleep automatically?",
        answer:
          "No, and that is the point. You enter the night yourself, so nothing is guessed on your behalf: no microphone, no snore detection, no invented sleep stages. Sopora is a personal journal for your own record-keeping, not a medical device, and it does not diagnose anything or give medical advice.",
      },
      {
        question: "Can I log a night I woke up in the middle of?",
        answer:
          "Yes. Add how many times you woke and how long you were awake, and the interruption is carried through into your history and your trends rather than being smoothed over.",
      },
      {
        question: "What do I get once I have logged a few nights?",
        answer:
          "A trends chart and a month calendar in the Stats tab, a bedtime consistency read after a few nights, and your first weekly sleep report at the end of the week. Right after each morning log, a card puts the night you just saved into one plain sentence.",
      },
      {
        question: "Can I fix a night or add one I missed?",
        answer:
          "Yes. Every entry can be edited or deleted later, and you can back-date a night you forgot, so a busy morning never leaves a permanent hole in your record.",
      },
      {
        question: "Where does my sleep data live, and can I take it with me?",
        answer:
          "On your iPhone. Sopora has no account and does not upload your entries, notes, or dreams anywhere. You can export everything to CSV or JSON whenever you like and import it back, so the record stays yours.",
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
    appStoreUrl: "https://apps.apple.com/us/app/food-diary-journal-logfd/id6782378233",
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
    screenshots: [
      "/screenshots/logfd/01-food-diary.png",
      "/screenshots/logfd/02-meal-log.png",
      "/screenshots/logfd/03-food-journal.png",
      "/screenshots/logfd/04-food-tracker.png",
      "/screenshots/logfd/05-intake-log.png",
      "/screenshots/logfd/06-food-diary-widget.png",
    ],
    status: "live",
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
          "Yes. logfd includes search, calendar history, and clear PDF and CSV export tools, so you can find past entries or share a record when it is useful.",
      },
      {
        question: "Is logfd private?",
        answer:
          "Your diary is designed to stay on your device. logfd does not turn your meals or personal notes into a profile. You can read the full privacy policy right here on this site.",
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
    appStoreUrl: "https://apps.apple.com/us/app/blood-pressure-log-bpivy/id6786703584",
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
    status: "live",
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
          "Yes. BPIVY includes clear PDF and CSV exports, so you can bring a simple record of readings, averages, and notes to an appointment.",
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
    appStoreUrl: "https://apps.apple.com/us/app/period-tracker-cycle-raheva/id6790180153",
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
    status: "live",
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
            '<p>Raheva does not collect personally identifiable information such as your name, email address, phone number, precise location, Apple ID, or any cycle content. The app may collect limited anonymous data to help us understand and improve the experience:</p><ul><li><strong>Product Interaction</strong> — Anonymous usage events such as onboarding progress, reminder settings changed, paywall screens viewed, and features used. These events contain no period dates, symptoms, notes, predictions, or backup file content — logging activity itself is never tracked.</li><li><strong>Device Identifier</strong> — An anonymous identifier used to distinguish unique app installations. This identifier is not linked to your Apple ID, name, email address, or contact information.</li><li><strong>Purchase History</strong> — Subscription status is checked via Apple StoreKit to unlock premium features. We do not see your payment details.</li></ul><p>None of this data is linked to your identity. Your cycle history, predictions, reminders, and backups stay under your control.</p>',
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
  {
    slug: "postivo",
    name: "Postivo",
    tagline: "Fasting, kept simple.",
    description:
      "A calm intermittent-fasting timer. Start your fast with one tap, see which stage your body is in, and end it without guilt — no account, works fully offline.",
    category: "wellness",
    icon: "/icons/postivo.png",
    appStoreUrl: "https://apps.apple.com/us/app/fasting-tracker-postivo/id6793500931",
    accentColor: "#C7791B",
    features: [
      {
        icon: "history",
        title: "One-tap fasting timer",
        description:
          "Start and stop your fast with a single tap. Pick a classic window like 16:8 or set your own — even open-ended fasts are fine.",
      },
      {
        icon: "qr-create",
        title: "Know your stage",
        description:
          "A gentle timeline shows the phase your body is likely in as the hours pass, with plain-language explanations and honest caveats.",
      },
      {
        icon: "palette",
        title: "No guilt, ever",
        description:
          "End a fast early and Postivo simply logs what you did. No broken streaks, no shame screens, no punishing language.",
      },
      {
        icon: "history",
        title: "Weight, water, and trends",
        description:
          "Keep an eye on weight, BMI, and daily water alongside your fasts, with clean charts that stay on your device.",
      },
      {
        icon: "share",
        title: "Backups you control",
        description:
          "Your history can back up to your own iCloud Drive or export as a file you keep. Restore any time — nothing lives on our servers.",
      },
      {
        icon: "barcode",
        title: "Offline and private",
        description:
          "The timer never needs the internet. No account — your fasting history stays on your device, yours alone.",
      },
    ],
    screenshots: [
      "/screenshots/postivo/01-fasting-tracker.png",
      "/screenshots/postivo/02-intermittent-fasting-timer.png",
      "/screenshots/postivo/03-fasting-stages.png",
      "/screenshots/postivo/05-weight-loss-tracker.png",
    ],
    status: "live",
    order: 7,
    faqs: [
      {
        question: "What is Postivo?",
        answer:
          "Postivo is a calm intermittent-fasting timer for iPhone. You start a fast with one tap, watch your progress on a simple ring, and learn which stage your body is likely in as the hours pass. There is no account to create and it works fully offline.",
      },
      {
        question: "Which fasting schedules does Postivo support?",
        answer:
          "All the classics — 12:12, 14:10, 16:8, 20:4 — plus fully custom windows, longer fasts, and open-ended fasts. You can change your schedule any time, and Postivo will suggest a starting point based on when you usually eat.",
      },
      {
        question: "What are fasting stages?",
        answer:
          "As a fast progresses, your body moves through phases such as digestion winding down and fat-burning ramping up. Postivo shows an approximate timeline with plain-language explanations. Timings vary from person to person, and the stages are educational — not a medical measurement.",
      },
      {
        question: "Is Postivo private?",
        answer:
          "Yes. Your fasts, weight, and water logs stay on your device. Postivo has no account. The app records only anonymous usage statistics (like which screens are used) that are never linked to you and never include your health data. Optional backups go to your own iCloud Drive or a file you choose — never to Pretty Toolkit servers.",
      },
      {
        question: "Does Postivo work with Apple Health?",
        answer:
          "Yes, optionally. You can turn on Health sync to save your weight entries and completed fasts to Apple Health. It is off by default, asks for permission first, and can be switched off at any time.",
      },
      {
        question: "Is intermittent fasting right for me?",
        answer:
          "Postivo is a timer and learning companion, not medical advice. Fasting is not suitable for everyone — including people who are pregnant, under 18, or managing certain conditions. Talk to a qualified clinician before changing how you eat.",
      },
    ],
    privacy: {
      lastUpdated: "July 2026",
      intro:
        'This privacy policy explains how Postivo ("Postivo", "the app") handles your information. Postivo is published by Pretty Toolkit. The short version: everything you record stays on your device, and the only thing we ever see is anonymous usage statistics that cannot be linked to you.',
      sections: [
        {
          heading: "Fasting and Health Data",
          content:
            "<p>Your fasts, fasting schedules, weight entries, water logs, and glucose or ketone readings are stored locally on your device using on-device storage. Postivo does not upload this data to Pretty Toolkit servers, we do not have access to it, and there is no account or sign-in.</p>",
        },
        {
          heading: "Onboarding Answers",
          content:
            "<p>During setup, Postivo may ask optional questions — such as your usual meal times, your motivation, or your first name — to suggest a fasting schedule and personalize the app. Answers are optional, stored only on your device, and never uploaded. The name field exists purely for greetings inside the app.</p>",
        },
        {
          heading: "Fasting Stages and Education",
          content:
            "<p>The stage timeline and educational content are computed and displayed entirely on your device from the fast you are running. Stage timings are general educational estimates, not medical measurements, and nothing about your fasts is sent to external servers.</p>",
        },
        {
          heading: "Apple Health (HealthKit)",
          content:
            "<p>Postivo can optionally sync your weight entries and completed fasts to Apple Health. This sync is off by default, requires your explicit permission through the iOS Health permission sheet, and can be disabled at any time in Settings. Health data is written only to Apple Health on your device, is never sent to Pretty Toolkit or any third party, and is never used for advertising or marketing.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Postivo can send optional local reminders, such as when a fasting goal is reached or for water intake. Reminders are opt-in, scheduled on your device, respect your quiet hours, and can be changed or revoked at any time in the app or iOS Settings. Reminder content is not uploaded anywhere.</p>",
        },
        {
          heading: "Widget",
          content:
            "<p>The optional Home Screen widget reads a small summary prepared by the app and shared only between Postivo and its widget on your device. Widget data is not uploaded to external servers.</p>",
        },
        {
          heading: "Backups and iCloud",
          content:
            "<p>Postivo can create backups of your data in two ways, both under your control: an automatic backup to your own iCloud Drive (stored in your personal iCloud account, which Pretty Toolkit cannot access), and a manual backup file shared only through the iOS share sheet or file destination you choose. Restores are processed on-device.</p>",
        },
        {
          heading: "Anonymous Usage Analytics",
          content:
            "<p>Postivo uses Mixpanel to understand how the app is used in aggregate — for example which screens are viewed, which features are used, and when a purchase happens. This data is recorded under a random anonymous identifier: Postivo has no accounts, so it can never be tied to your name, email address, or identity. It never includes your fasts' content, weight, water, glucose or ketone values, your onboarding name, or anything you type — your health data is never part of analytics. Setup answers such as your selected goal or fasting plan may be included in anonymous form to help us improve the experience. There is no advertising SDK and no data broker involved, and analytics data is not used to track you across other apps or websites.</p>",
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "<p>Postivo may offer optional premium features through purchases managed by the Apple App Store. All payment processing is handled by Apple. We do not have access to your credit card details, payment information, or Apple ID.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Postivo uses Apple frameworks: SwiftData (on-device storage), UserDefaults (preferences), UserNotifications (local reminders), WidgetKit (the widget), HealthKit (optional Health sync), StoreKit (purchases), and iCloud Drive (optional backups in your own account), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>. The only non-Apple service is <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel</a>, used solely for the anonymous usage analytics described above. Postivo integrates no ad networks, data brokers, or cross-app tracking tools.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with anyone — your fasting history, health entries, and personal details never reach us in the first place. Anonymous usage statistics are processed by Mixpanel on our behalf and are not sold or shared for advertising. When you export a backup or sync to Apple Health, the data goes only to the destination you chose on your own device or account.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Postivo does not track you across apps and websites owned by other companies. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Health and Wellness Disclaimer",
          content:
            "<p>Postivo is a fasting timer and educational companion, not a medical device. Stage timelines and BMI figures are general estimates and do not constitute medical advice, diagnosis, or treatment. Intermittent fasting is not suitable for everyone — including people who are pregnant or breastfeeding, under 18, underweight, living with an eating disorder, or managing conditions such as diabetes. Always consult a qualified clinician before starting or changing a fasting practice.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Postivo is not directed at children under 13, and fasting guidance in the app is intended for adults. We do not knowingly collect personal information from children — or from anyone else.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Postivo stores your data locally on your device, you stay in control: deleting the app deletes your local data, and backups in your iCloud Drive or exported files are yours to keep or remove. Anonymous usage statistics cannot be traced back to you, which also means we cannot look up or delete a specific person's analytics on request — there is no identifier connecting them to you. If you have any privacy question or request, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> and we will respond within 30 days. EU residents have rights under GDPR and California residents under the CCPA; contact us at the same address to exercise them.</p>",
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
    slug: "balanza",
    name: "Balanza",
    tagline: "Your number, calmly.",
    description:
      "A BMI calculator and weight tracker built for calm clarity. Your number in ten seconds, your trend in one line, and exactly how far there is to go — free, no account, and nothing you log ever leaves your iPhone.",
    category: "wellness",
    icon: "/icons/balanza.png",
    appStoreUrl: "https://apps.apple.com/us/app/bmi-calculator-balanza/id6794432114",
    accentColor: "#2E9E5B",
    features: [
      {
        icon: "history",
        title: "Your number in ten seconds",
        description:
          "Enter your height and weight and your BMI is there. No account, no sign-up, no setup questions — you open the app and you have your answer, in kilograms, pounds, or stones.",
      },
      {
        icon: "palette",
        title: "A reading, not a verdict",
        description:
          "Balanza shows where you stand without a lecture. The category label sits quietly beside your number, and you can hide it altogether if you would rather just watch the number move.",
      },
      {
        icon: "qr-create",
        title: "Watch the distance close",
        description:
          "Set the weight you are heading toward, up or down, and every entry updates one plain line: how much is left to go. Reach it and maintain mode takes over, so staying put counts as winning too.",
      },
      {
        icon: "barcode",
        title: "Weeks of guesswork become one clear line",
        description:
          "Logging a weight takes seconds and the chart does the rest, so you stop wondering whether it is working and simply see it. A daily reminder is there if you want one — off until you turn it on, at the time you pick.",
      },
      {
        icon: "share",
        title: "Your history survives your next iPhone",
        description:
          "Automatic backup to your own iCloud brings every entry back on a new phone, and a one-tap CSV export gives you a copy that is yours to keep — or to bring back in later.",
      },
      {
        icon: "history",
        title: "Yours alone, always",
        description:
          "Balanza collects nothing. No account, no analytics, no tracking — your weight, your goal, and your history stay on your devices and in your own iCloud.",
      },
    ],
    screenshots: [
      "/screenshots/balanza/01-bmi-calculator.png",
      "/screenshots/balanza/02-body-mass-index.png",
      "/screenshots/balanza/03-weight-tracker.png",
      "/screenshots/balanza/04-weight-loss-goal.png",
      "/screenshots/balanza/05-weight-loss-journal.png",
    ],
    status: "live",
    order: 8,
    faqs: [
      {
        question: "What is Balanza?",
        answer:
          "Balanza is a free BMI calculator and weight tracker for iPhone. Enter your height and weight and you get your number straight away — no account, no sign-up, no onboarding. Keep going and it becomes a quiet weight log: a goal that counts down, a trend chart, and a maintain mode for when staying where you are is the goal.",
      },
      {
        question: "How does Balanza calculate BMI, and what do the categories mean?",
        answer:
          "Balanza uses the standard formula — your weight divided by the square of your height — and places the result on the usual ranges. Those ranges are a broad screening reference, not a judgement about you: they say nothing about muscle, build, or age. If you would rather not see the label at all, you can hide it and keep only your number.",
      },
      {
        question: "Can I track my weight over time?",
        answer:
          "Yes. Log a weight in a few seconds and Balanza keeps the whole history: a trend chart, your BMI at each point, and a plain countdown to the weight you are heading toward, up or down. Reach your goal and maintain mode watches your healthy band instead of the distance.",
      },
      {
        question: "Is Balanza private?",
        answer:
          "Yes, completely. Balanza collects nothing: there is no account, no analytics, and no tracking of any kind. Your height, weight, goal, and history live on your device and in your own iCloud, which only you can reach. The app's privacy manifest declares zero collected data types.",
      },
      {
        question: "Can I get my data out, or move it to a new phone?",
        answer:
          "Both. iCloud backup happens automatically to your own account, so signing in on a new iPhone restores your history. Whenever you want a copy of your own, one tap exports everything to a CSV file you can keep, open in a spreadsheet, or import back into Balanza later.",
      },
      {
        question: "Is Balanza free?",
        answer:
          "Yes. Everything described here works from the first launch — there is nothing to unlock.",
      },
      {
        question: "Should I make health decisions based on my BMI?",
        answer:
          "No. Balanza is a general screening and tracking tool, not a medical device, and nothing in it is a diagnosis or medical advice. BMI is a broad measure that does not account for muscle mass, build, age, or your individual health. Talk to a qualified professional before making decisions about your health.",
      },
    ],
    privacy: {
      lastUpdated: "July 2026",
      intro:
        'This privacy policy explains how Balanza ("Balanza", "the app") handles your information. Balanza is published by Pretty Toolkit. The short version: Balanza collects nothing. There is no account, no analytics, and no tracking — everything you enter stays on your device and in your own iCloud, and we never see any of it.',
      sections: [
        {
          heading: "Weight and Body Data",
          content:
            "<p>Your height, weight entries, goal weight, unit preference, and every reading Balanza calculates from them are stored locally on your device. Balanza does not upload this data to Pretty Toolkit servers, we do not have access to it, and there is no account or sign-in.</p><p>Your BMI, your category, your trend, and the distance to your goal are all computed on your device from the numbers you entered. Nothing is sent to a server to be calculated, and the app works with no network connection at all.</p>",
        },
        {
          heading: "Data Collection",
          content:
            "<p>Balanza collects nothing. There is no account, no email address, no name field, no device identifier, and no usage analytics of any kind. We do not know how many times you open the app, which screens you visit, or what you weigh. The app's App Store privacy manifest declares zero collected data types, and that is literal rather than a summary.</p>",
        },
        {
          heading: "Reminders",
          content:
            "<p>Balanza can send an optional daily reminder to log your weight. Reminders are off until you turn them on, you choose the time, they are scheduled locally by iOS on your device, and they can be changed or switched off at any time in the app or in iOS Settings. Nothing about them is uploaded.</p>",
        },
        {
          heading: "iCloud Backup and CSV Export",
          content:
            "<p>Balanza backs your history up automatically to your own iCloud account, so signing in on a new iPhone restores your entries. That backup lives in your personal iCloud, which Pretty Toolkit cannot access. Separately, you can export your history to a CSV file whenever you like — an export you start yourself, sent only to the destination you choose in the iOS share sheet — and import a CSV file back in. Restores and imports are processed entirely on your device.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Balanza uses Apple frameworks only: SwiftData (on-device storage), UserDefaults (preferences), UserNotifications (the optional reminder), and CloudKit (backup in your own iCloud account), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>. There are no non-Apple services in the app — no analytics SDK, no crash reporter, no data brokers, and no cross-app tracking tools.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with anyone — your weight history and personal details never reach us in the first place. When you export a CSV or restore from iCloud, the data goes only to the destination or account you chose on your own device.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Balanza does not track you across apps and websites owned by other companies. The app's privacy manifest declares that tracking is not used, and the app contains no tracking technology to declare.</p>",
        },
        {
          heading: "BMI and Health Disclaimer",
          content:
            "<p>Balanza is a general screening and tracking tool, not a medical device. BMI is a broad screening measure that does not account for muscle mass, body composition, build, age, pregnancy, or your individual health, and nothing shown in the app is a diagnosis, medical advice, or treatment. Always consult a qualified professional before making decisions about your health or your weight.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Balanza is rated 17+ and is intended for adults. It is not directed at children, and we do not knowingly collect personal information from children — or from anyone else, since the app collects nothing at all.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Balanza stores your data on your own device and in your own iCloud, you stay in complete control: deleting the app removes your local data, and you can delete the iCloud backup or any exported CSV yourself. There is no account to close and no server-side copy for us to erase, because we never received anything. If you have a privacy question, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> and we will respond within 30 days. EU residents have rights under GDPR and California residents under the CCPA; contact us at the same address to exercise them.</p>",
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
    slug: "esynit",
    name: "Esynit",
    tagline: "Signed and sent back, tonight.",
    description:
      "Sign a PDF on your iPhone and send it back the same evening. Draw, type, or photograph your signature, fill in the dates and details with a tap, and share a finished, flattened PDF — all on your phone, with no account, and nothing you sign ever leaves the device.",
    category: "productivity",
    icon: "/icons/esynit.png",
    appStoreUrl: "https://apps.apple.com/us/app/esign-pdf-fill-sign-esynit/id6798789130",
    accentColor: "#A67B32",
    features: [
      {
        icon: "history",
        title: "Signed before the day ends",
        description:
          "The document lands in your inbox, you open it, sign it, and it is already on its way back. No printer, no scanner, no waiting until you are next near a desk.",
      },
      {
        icon: "palette",
        title: "Your signature, saved and ready",
        description:
          "Draw it, type it in a handwriting style, or photograph the signature you already use — Esynit lifts it cleanly off the paper. Saved once, ready on every document, and yours to redo whenever you like.",
      },
      {
        icon: "qr-create",
        title: "Dates, names and details in a tap",
        description:
          "Tap where the form wants a date, a name, an address, or a check, and it is filled — in your own language's date format, with your saved details one tap away. No pinching at a tiny text box.",
      },
      {
        icon: "barcode",
        title: "Nothing you sign leaves your iPhone",
        description:
          "There is no account, no upload, and no server. The whole signing flow works in airplane mode, because your documents simply stay where they already are.",
      },
      {
        icon: "share",
        title: "The signature is part of the page",
        description:
          "Exporting flattens everything into the document itself, so what you sent is what they open — your mark is drawn into the page, not a sticker resting on top of it.",
      },
      {
        icon: "history",
        title: "A typo never costs you the form",
        description:
          "Every change saves itself as you make it, undo goes back as far as you need, and a document you already signed reopens fully editable. Paperwork stops being the thing that blocks your evening.",
      },
    ],
    screenshots: [
      "/screenshots/esynit/01-pdf-fill-sign.png",
      "/screenshots/esynit/02-signature-creator.png",
      "/screenshots/esynit/03-doc-signer.png",
      "/screenshots/esynit/04-esign.png",
      "/screenshots/esynit/05-pdf-signer.png",
    ],
    status: "live",
    order: 9,
    faqs: [
      {
        question: "What is Esynit?",
        answer:
          "Esynit is a PDF signing app for iPhone. Open a document that needs your signature, draw or place your signature on it, fill in the dates, names and details it asks for, and share the finished PDF straight back — usually in under a minute. There is no account to create, and the signing flow works entirely on your phone.",
      },
      {
        question: "How do I sign a PDF with Esynit?",
        answer:
          "Open the PDF in Esynit from Files or from an email attachment, tap the spot that needs your signature, and place it. Add the date, your name, an address, or a check mark the same way — one tap each. When the form is complete, export it and share it back through Mail, Messages, or any app you already use.",
      },
      {
        question: "Can I use my own real signature?",
        answer:
          "Yes. You can draw it with your finger, type it in one of several handwriting styles, or photograph the signature you already sign with — Esynit removes the paper behind it and keeps just the ink. Your signature is saved for next time and can be redrawn or replaced whenever you want; it is never locked.",
      },
      {
        question: "Is Esynit private?",
        answer:
          "Yes. Your documents, your signature, and the details you save stay on your iPhone. There is no account, nothing is uploaded, and Pretty Toolkit never sees a single document. The app records only anonymous usage statistics — which screens are opened, for example — that are never linked to you and never include anything from your documents.",
      },
      {
        question: "Does Esynit work offline?",
        answer:
          "Completely. The whole flow — importing a document, signing it, filling it in, and exporting the finished PDF — runs on your device with no internet connection at all. You can sign on a plane and share the moment you land.",
      },
      {
        question: "Can I fix a mistake after I have signed?",
        answer:
          "Yes. Everything you place can be moved, resized, edited, or undone, and a document you have already exported reopens fully editable — so one wrong digit never means filling the whole form again. Your work saves itself continuously, even if you close the app mid-form.",
      },
      {
        question: "Is a document signed in Esynit legally binding?",
        answer:
          "Esynit places your signature into the document and flattens it into the page — it does not issue certificates, and it is not a qualified or certified electronic signature service. Whether any signed document is accepted depends on the law where you are and on the parties involved, so check what your document requires before you rely on it.",
      },
    ],
    privacy: {
      lastUpdated: "August 2026",
      intro:
        'This privacy policy explains how Esynit ("Esynit", "the app") handles your information. Esynit is published by Pretty Toolkit. The short version: your documents never leave your iPhone, there is no account, and the only thing we ever see is anonymous usage statistics that cannot be linked to you.',
      sections: [
        {
          heading: "Documents and Signature Data",
          content:
            "<p>The documents you import, the signature and initials you create, everything you place on a page, and the details you choose to save — such as your name, address, email address, or phone number — are stored locally on your device. Esynit does not upload any of it to Pretty Toolkit servers, we do not have access to it, and there is no account or sign-in.</p><p>Importing, signing, filling, and exporting are all processed on your device. The signing flow makes no network requests at all, and the app works with no internet connection.</p><p>If you photograph a signature or a paper page, the camera and photo access you grant is used only to bring that image into the app on your device. The image is processed locally and is never sent anywhere.</p>",
        },
        {
          heading: "Data Collection",
          content:
            "<p>Esynit does not collect directly identifying information such as your name, email address, phone number, or Apple ID. There is no account, no sign-in, and no contact form inside the app. The only data that ever reaches us is the anonymous usage statistics described in the next section, which never include your documents or anything you type into them.</p>",
        },
        {
          heading: "Anonymous Usage Analytics",
          content:
            "<p>Esynit uses Mixpanel to understand how the app is used in aggregate — for example which screens are opened, which features are used, and when a purchase happens. This data is recorded under a random anonymous identifier: Esynit has no accounts, so it can never be tied to your name, email address, or identity. It never includes your documents, their file names or contents, your signature, or the details you save — none of that is ever part of analytics. There is no advertising SDK and no data broker involved, and analytics data is not used to track you across other apps or websites.</p>",
        },
        {
          heading: "Subscriptions and Payments",
          content:
            "<p>Esynit is a subscription app. All purchases and renewals are handled by the Apple App Store, and payment processing belongs entirely to Apple. We do not have access to your credit card details, payment information, or Apple ID. You can view, change, or cancel your subscription at any time in your Apple account settings.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Esynit uses Apple frameworks: PDFKit (rendering and writing documents), the local file system (on-device storage), UserDefaults (preferences), and StoreKit (purchases), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>. The only non-Apple service is <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel</a>, used solely for the anonymous usage analytics described above. Esynit integrates no ad networks, data brokers, or cross-app tracking tools, and no third-party service is involved in opening, signing, or exporting a document.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with anyone — your documents and personal details never reach us in the first place. Anonymous usage statistics are processed by Mixpanel on our behalf and are not sold or shared for advertising. When you export or share a signed document, it goes only to the destination you pick yourself in the iOS share sheet.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Esynit does not track you across apps and websites owned by other companies. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Signature Disclaimer",
          content:
            "<p>Esynit is a tool for placing your signature into a document and sharing it back. It is not a certified or qualified electronic signature service: it issues no certificates, performs no identity verification, and makes no claim about the legal status of any document you sign with it. Whether a signed document is accepted depends on the law that applies to you and on the parties involved. Check what your document requires before relying on it.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Esynit is not directed at children under 13. We do not knowingly collect personal information from children — or from anyone else, since the app has no account and collects nothing beyond anonymous usage statistics.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Esynit stores your documents and details on your own device, you stay in control: deleting a document removes it, and deleting the app removes everything it held. Anonymous usage statistics cannot be traced back to you, which also means we cannot look up or delete a specific person's analytics on request — there is no identifier connecting them to you. If you have any privacy question or request, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> and we will respond within 30 days. EU residents have rights under GDPR and California residents under the CCPA; contact us at the same address to exercise them.</p>",
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
    slug: "skanvo",
    name: "Skanvo",
    tagline: "Paper in, PDF out.",
    description:
      "A document scanner built for speed and calm. Point your iPhone at any page and get a clean, straight PDF in seconds - ready to share, sign, or search, with every document staying on your device.",
    category: "scanning",
    icon: "/icons/skanvo.png",
    appStoreUrl: "",
    accentColor: "#C9932F",
    features: [
      {
        icon: "scan",
        title: "A clean page in seconds",
        description:
          "Point the camera at paper and Skanvo finds the edges, straightens the page, and evens out the lighting. What comes out looks cleaner than the sheet you scanned - and it is a real PDF, ready to send.",
      },
      {
        icon: "share",
        title: "Sent before the printer warms up",
        description:
          "Share a document straight from the scan, as PDF, JPG, or plain text. No export maze, no watermark, no app name stamped on your file - your document leaves exactly as you made it.",
      },
      {
        icon: "history",
        title: "Reads text, even handwriting",
        description:
          "One tap recognizes the text on every page, entirely on your device. Your PDF becomes searchable, and the words are yours to copy or save - from printed forms to handwritten notes.",
      },
      {
        icon: "qr-create",
        title: "Sign it without printing it",
        description:
          "Draw or photograph your signature once and place it on any page. The form that used to need a printer, a pen, and a scanner is done on your phone, in the time it takes to read it.",
      },
      {
        icon: "palette",
        title: "Photos and files become PDFs too",
        description:
          "Turn the photos of pages already in your library into proper documents, or merge new scans into one file. Pages reorder, rotate, and crop with a touch.",
      },
      {
        icon: "barcode",
        title: "Never leaves your iPhone",
        description:
          "Scanning, cleanup, text recognition, signing - all of it happens on your device. No account, no upload, no cloud of ours. Airplane mode scans exactly like Wi-Fi does.",
      },
    ],
    screenshots: [],
    status: "coming-soon",
    order: 10,
    faqs: [
      {
        question: "What is Skanvo?",
        answer:
          "Skanvo is a document scanner for iPhone. Point the camera at any page and it finds the edges, straightens the perspective, and gives you a clean PDF in seconds - ready to share, sign, or search. It also turns photos and images already on your phone into PDFs.",
      },
      {
        question: "Are my documents private?",
        answer:
          "Yes. Every document stays on your iPhone: scanning, cleanup, text recognition, and signing all happen on your device, and there is no account and no upload. The app works fully offline - the only data that ever leaves the app is anonymous usage statistics that contain nothing from your documents.",
      },
      {
        question: "Can Skanvo make my PDFs searchable?",
        answer:
          "Yes. One tap recognizes the text on every page - printed fonts and handwriting alike - entirely on your device. The PDF you share carries a real text layer that any PDF reader can search, and you can copy the words out or save them as a text file.",
      },
      {
        question: "Can I sign a document in Skanvo?",
        answer:
          "Yes. Draw your signature with your finger or photograph the one on paper, then place it on any page. The signed PDF shares like any other - no printer involved. Skanvo places your handwritten mark; it is not a certified electronic-signature service.",
      },
      {
        question: "Does Skanvo watermark or lock my files?",
        answer:
          "Never. Your exported documents carry no watermark, no app branding, and no lock - what you scanned is what you share, as PDF, JPG, or plain text.",
      },
      {
        question: "Does Skanvo work offline?",
        answer:
          "Completely. Scanning, editing, text recognition, signing, and exporting all run on your device with no connection at all - airplane mode changes nothing.",
      },
    ],
    privacy: {
      lastUpdated: "August 2026",
      intro:
        'This privacy policy explains how Skanvo ("Skanvo", "the app") handles your information. Skanvo is published by Pretty Toolkit. The short version: your documents never leave your iPhone, there is no account, and the only thing we ever see is anonymous usage statistics that cannot be linked to you.',
      sections: [
        {
          heading: "Documents and Scans",
          content:
            "<p>The pages you scan, the photos and files you convert, the text Skanvo recognizes, and any signature you draw or photograph are stored locally on your device. Skanvo does not upload any of it to Pretty Toolkit servers, we do not have access to it, and there is no account or sign-in.</p><p>Capturing, cleanup, text recognition, signing, and exporting are all processed on your device. The path from camera to exported document makes no network requests at all - a rule our automated tests enforce on every release - and the app works with no internet connection.</p>",
        },
        {
          heading: "Camera and Photos",
          content:
            "<p>Skanvo uses the camera only to scan pages, on your device. Photos you pick to convert are brought into the app locally, and the app's photo-library permission for saving is add-only: Skanvo can save an image you export into your library, and cannot browse the library itself. No image is ever sent anywhere.</p>",
        },
        {
          heading: "Text Recognition (OCR)",
          content:
            "<p>Text recognition runs only when you ask for it, using Apple's on-device Vision framework. The recognized words are stored with the document on your device and become the PDF's searchable text layer. Nothing about a recognition run - not the page, not the words, not the language - is uploaded to anyone.</p>",
        },
        {
          heading: "Data Collection",
          content:
            "<p>Skanvo does not collect directly identifying information such as your name, email address, phone number, or Apple ID. There is no account, no sign-in, and no contact form inside the app. The only data that ever reaches us is the anonymous usage statistics described in the next section, which never include your documents or anything in them.</p>",
        },
        {
          heading: "Anonymous Usage Analytics",
          content:
            "<p>Skanvo uses Mixpanel to understand how the app is used in aggregate - for example which screens are opened, which features are used, and when a purchase happens. This data is recorded under a random anonymous identifier: Skanvo has no accounts, so it can never be tied to your name, email address, or identity. It never includes your documents, their names or contents, recognized text, or your signature - none of that is ever part of analytics. There is no advertising SDK and no data broker involved, and analytics data is not used to track you across other apps or websites.</p>",
        },
        {
          heading: "Subscriptions and Payments",
          content:
            "<p>Skanvo is a subscription app. All purchases and renewals are handled by the Apple App Store, and payment processing belongs entirely to Apple. We do not have access to your credit card details, payment information, or Apple ID. You can view, change, or cancel your subscription at any time in your Apple account settings.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Skanvo uses Apple frameworks: VisionKit and Vision (scanning and on-device text recognition), Core Graphics and PDFKit (building and rendering PDFs), the local file system (on-device storage), UserDefaults (preferences), and StoreKit (purchases), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>. The only non-Apple service is <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel</a>, used solely for the anonymous usage analytics described above. Skanvo integrates no ad networks, data brokers, or cross-app tracking tools, and no third-party service is involved in scanning, recognizing, signing, or exporting a document.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with anyone - your documents never reach us in the first place. Anonymous usage statistics are processed by Mixpanel on our behalf and are not sold or shared for advertising. When you export or share a document, it goes only to the destination you pick yourself in the iOS share sheet.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Skanvo does not track you across apps and websites owned by other companies. The app's privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Signature Disclaimer",
          content:
            "<p>Skanvo is a tool for placing your handwritten signature into a document and sharing it back. It is not a certified or qualified electronic signature service: it issues no certificates, performs no identity verification, and makes no claim about the legal status of any document you sign with it. Whether a signed document is accepted depends on the law that applies to you and on the parties involved. Check what your document requires before relying on it.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Skanvo is not directed at children under 13. We do not knowingly collect personal information from children - or from anyone else, since the app has no account and collects nothing beyond anonymous usage statistics.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Skanvo stores your documents on your own device, you stay in control: deleting a document removes it, and deleting the app removes everything it held. Anonymous usage statistics cannot be traced back to you, which also means we cannot look up or delete a specific person's analytics on request - there is no identifier connecting them to you. If you have any privacy question or request, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> and we will respond within 30 days. EU residents have rights under GDPR and California residents under the CCPA; contact us at the same address to exercise them.</p>",
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
    slug: "swipeve",
    name: "Swipeve",
    tagline: "Swipe once, space back.",
    description:
      "A photo cleaner that hands your storage back without gambling with your memories. Swipeve finds the near-identical shots, the screenshots and the heavy videos hiding in your library, and lets you clear them a month at a time with a swipe - all on your iPhone, and nothing goes without your word.",
    category: "daily-tools",
    icon: "/icons/swipeve.png",
    appStoreUrl: "",
    accentColor: "#C42C68",
    features: [
      {
        icon: "scan",
        title: "See where the space actually went",
        description:
          "Swipeve reads your real library and shows the gigabytes sitting in near-identical bursts, exact duplicates, screenshots, your heaviest files and your longest videos. Your own numbers, measured from your own photos, before you decide anything.",
      },
      {
        icon: "history",
        title: "One month, a couple of minutes",
        description:
          "Face a single month instead of eleven years. Keep or let go with a swipe, watch the months get crossed off behind you, and stop whenever you like - your place is still there when you come back.",
      },
      {
        icon: "palette",
        title: "The keeper is already picked",
        description:
          "In every run of near-identical shots the best frame is chosen for you and shown full size, so you keep the good one and lose the near-copies behind it. Disagree and it changes with a tap.",
      },
      {
        icon: "share",
        title: "Big videos, smaller. Nothing lost.",
        description:
          "Shrink the videos eating the most room, with the date and the details carried over exactly. The smaller copy is created and checked before the original is let go, so nothing is traded away on trust.",
      },
      {
        icon: "barcode",
        title: "Nothing vanishes behind your back",
        description:
          "Every deletion goes through Apple's own confirmation, naming exactly how many photos and how much space. Everything then waits in Recently Deleted for 30 days, so a change of heart costs you nothing.",
      },
      {
        icon: "qr-create",
        title: "Never leaves your iPhone",
        description:
          "Scanning, comparing, reviewing and deleting all happen on your device. No account, no sign-in, and not one photo uploaded anywhere. Airplane mode clears a month exactly like Wi-Fi does.",
      },
    ],
    screenshots: [],
    status: "coming-soon",
    order: 11,
    faqs: [
      {
        question: "What is Swipeve?",
        answer:
          "Swipeve is a photo storage cleaner for iPhone. It scans your real photo library, finds the similar shots, exact duplicates, screenshots, heaviest files and largest videos, and lets you clear them month by month with a swipe. Every deletion goes through Apple's own confirmation and stays recoverable in Recently Deleted for 30 days.",
      },
      {
        question: "How much space will I get back?",
        answer:
          "That depends on your own library, and Swipeve will not guess at it. It scans your real photos, shows you the actual gigabytes sitting in each category before you touch anything, and afterwards reports only the space genuinely recovered.",
      },
      {
        question: "Can I get a photo back if I change my mind?",
        answer:
          "Yes. Swipeve deletes only through iOS, which moves photos into Recently Deleted in the Photos app. They wait there for 30 days, and you can restore any of them from Photos in that window.",
      },
      {
        question: "Does Swipeve delete anything on its own?",
        answer:
          "Never. Nothing goes without a confirmation naming exactly how many items and how much space, and anything you choose to keep is remembered so it is never put in front of you again. Favourites and your named albums are protected before the first scan even runs.",
      },
      {
        question: "Are my photos private?",
        answer:
          "Yes. Your photos never leave your iPhone. Scanning, comparing, reviewing and deleting all run on your device, there is no account and no sign-in, and not a single image is uploaded anywhere. The app works with no connection at all.",
      },
      {
        question: "What happens to a video when Swipeve makes it smaller?",
        answer:
          "A smaller copy is made with your original's date and details carried over exactly, and it is verified as present before the original is let go. The original then goes to Recently Deleted like anything else, so it is recoverable for 30 days.",
      },
    ],
    privacy: {
      lastUpdated: "September 2026",
      intro:
        'This privacy policy explains how Swipeve ("Swipeve", "the app") handles your information. Swipeve is published by Pretty Toolkit. The short version: your photos never leave your iPhone, there is no account, and the only thing we ever see is anonymous usage statistics that cannot be linked to you.',
      sections: [
        {
          heading: "Your Photos and Videos",
          content:
            "<p>Swipeve reads your photo library through Apple's PhotoKit framework so it can find similar shots, exact duplicates, screenshots, and your largest files and videos. Everything it works out - the groups it builds, the sizes it measures, the keep decisions you make - is stored locally on your device. Swipeve does not upload any photo or video to Pretty Toolkit servers, we have no access to your library, and there is no account or sign-in.</p><p>Scanning, comparing, reviewing, making a video smaller and deleting all run on your device. The photo requests the app makes are configured never to fetch over the network, no image or video is sent anywhere, and the app works with no internet connection at all.</p><p>Deleting happens only through Apple's own system confirmation, which routes deleted items into Recently Deleted in the Photos app, where they stay recoverable for 30 days. Swipeve has no other way to remove a photo.</p>",
        },
        {
          heading: "Data Collection",
          content:
            "<p>Swipeve does not collect directly identifying information such as your name, email address, phone number, or Apple ID. There is no account, no sign-in, and no contact form inside the app. The only data that ever reaches us is the anonymous usage statistics described in the next section, which never include a photo, a video, a file name, an album name, or any identifier from your library.</p>",
        },
        {
          heading: "Anonymous Usage Analytics",
          content:
            "<p>Swipeve uses Mixpanel to understand, in aggregate, how people move through the opening walkthrough and the purchase screen. The events are a fixed, enumerated list built only from closed values the app chooses itself: the walkthrough starting and finishing, which photo-library permission you granted, that a first scan finished, the purchase screen appearing, a purchase starting, a purchase completing, and the outcome of a restore. The scan event carries broad ranges rather than your numbers - which band its total fell into and roughly how long it took - never your actual gigabytes or your photo count. Nothing at all is sent while you review or delete.</p><p>No photo, video, file name, album name, or library identifier is ever part of an event. There is no identity attached either: Swipeve never calls Mixpanel's identify or profile features, does not use the advertising identifier, and does not enable the SDK's automatic event collection, so these statistics are recorded under a random identifier the SDK generates for each install and can never be tied to your name, your email address, or you. There is no advertising SDK and no data broker involved, and this data is not used to track you across other apps or websites.</p>",
        },
        {
          heading: "Subscriptions and Payments",
          content:
            "<p>Swipeve is a subscription app. All purchases and renewals are handled by the Apple App Store through StoreKit, and payment processing belongs entirely to Apple. We do not have access to your card details, payment information, or Apple ID. You can view, change, or cancel your subscription at any time in your Apple account settings.</p>",
        },
        {
          heading: "Notifications",
          content:
            "<p>Swipeve sends one optional reminder about your subscription and nothing else. Notification permission is requested only at the moment a subscription purchase is confirmed, so if you never purchase you are never asked. The reminder is scheduled locally on your device, carries nothing from your library, and is cancelled automatically when your subscription status changes. You can turn notifications off for Swipeve at any time in iOS Settings.</p>",
        },
        {
          heading: "Third-Party Services",
          content:
            '<p>Swipeve uses Apple frameworks: Photos and PhotosUI (reading from and deleting in your photo library), Vision and Core ML (comparing images on your device), AVFoundation (making a video smaller), Core Graphics, Core Image and Image I/O (working with images on your device), the local file system and UserDefaults (on-device storage and preferences), UserNotifications (the single reminder above), and StoreKit (purchases), governed by <a href="https://www.apple.com/privacy/">Apple\'s Privacy Policy</a>. The only non-Apple service is <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel</a>, used solely for the anonymous usage statistics described above. Swipeve integrates no ad networks, data brokers, or cross-app tracking tools, and no third-party service is ever involved in scanning, reviewing, or deleting a photo.</p>',
        },
        {
          heading: "Data Sharing",
          content:
            "<p>We do not sell, rent, or share your personal data with anyone - your photos never reach us in the first place. The anonymous usage statistics are processed by Mixpanel on our behalf and are not sold or shared for advertising.</p>",
        },
        {
          heading: "Tracking",
          content:
            "<p>Swipeve does not track you across apps and websites owned by other companies. The app does not link the advertising identifier and shows no App Tracking Transparency prompt, and its privacy manifest declares that tracking is not used.</p>",
        },
        {
          heading: "Children's Privacy",
          content:
            "<p>Swipeve is not directed at children under 13. We do not knowingly collect personal information from children - or from anyone else, since the app has no account and collects nothing beyond the anonymous usage statistics above.</p>",
        },
        {
          heading: "Your Rights and Data Deletion",
          content:
            "<p>Because Swipeve keeps everything on your own device, you stay in control: photos you delete sit in Recently Deleted in the Photos app and are yours to restore for 30 days, and deleting Swipeve removes everything the app held, including its record of what you chose to keep. Anonymous usage statistics cannot be traced back to you, which also means we cannot look up or delete a specific person's statistics on request - there is no identifier connecting them to you. If you have any privacy question or request, email <a href=\"mailto:aboyahyadev@icloud.com\">aboyahyadev@icloud.com</a> and we will respond within 30 days. EU residents have rights under GDPR and California residents under the CCPA; contact us at the same address to exercise them.</p>",
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
