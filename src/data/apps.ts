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
    screenshots: [],
    status: "live",
    order: 1,
    faqs: [
      {
        question: "What QR and barcode formats does Luxira support?",
        answer:
          "Luxira supports all standard QR code formats plus 9 barcode types: EAN-8, EAN-13, UPC-E, Code 39, Code 128, PDF 417, Aztec, Data Matrix, and ISBN. It automatically detects URLs, Wi-Fi networks, contacts, phone numbers, email addresses, calendar events, and more.",
      },
      {
        question: "Does Luxira work offline?",
        answer:
          "Yes. All scanning, QR code creation, and history features work entirely on your device with no internet connection. Only sharing features require connectivity.",
      },
      {
        question: "How do I create a QR code?",
        answer:
          "Tap the Create tab and choose from 16 content types — including URL, text, Wi-Fi, contact, and 12 social platforms like Instagram, TikTok, and YouTube. Enter your details, customize the style with templates, colors, gradients, or a logo badge, then save or share.",
      },
      {
        question: "Is my scan data private?",
        answer:
          "Absolutely. All scan data is stored locally on your device. Luxira has no tracking, no third-party analytics SDKs, and collects no personal data — verified by our Apple Privacy Manifest.",
      },
      {
        question: "How much does Luxira cost?",
        answer:
          "Luxira is free to download with core features. An optional premium upgrade is available through the App Store for access to additional features.",
      },
      {
        question: "Can I scan codes from photos?",
        answer:
          "Yes. Tap the gallery icon in the scanner to pick a photo from your library. Luxira will detect and read any QR code or barcode in the image.",
      },
    ],
    privacy: {
      lastUpdated: "March 2026",
      intro:
        'This privacy policy explains how Luxira: QR & Barcode Scanner ("Luxira", "the app") collects, uses, and protects your information. Luxira is published by Pretty Toolkit.',
      sections: [
        {
          heading: "Camera Access",
          content:
            "Luxira requires access to your device's camera to scan QR codes and barcodes. Camera data is processed entirely on-device in real time. No images or video from your camera are stored, uploaded, or transmitted to any server.",
        },
        {
          heading: "Photo Library",
          content:
            "Luxira requests save-only access to your photo library when you choose to save a created QR code. The app cannot read or browse your existing photos. Gallery scanning uses the system photo picker, which requires no permission.",
        },
        {
          heading: "Scan History",
          content:
            "When you scan a code, the result is saved to your scan history. All scan history data is stored locally on your device using on-device storage. We do not have access to your scan history, and it is never uploaded to external servers.",
        },
        {
          heading: "QR Code Creation",
          content:
            "When you create a QR code, the content you enter (URLs, text, contacts, Wi-Fi credentials, social media links) is processed entirely on your device. This data is not sent to any server.",
        },
        {
          heading: "Notifications",
          content:
            "Luxira may request permission to send you notifications with feature tips and updates. Notification permission is entirely optional and can be revoked at any time in your device Settings. Premium users receive no notifications.",
        },
        {
          heading: "Data Collection",
          content:
            "Luxira does not collect any personal data. Our Apple Privacy Manifest confirms: no user tracking, no tracking domains, and no collected data types. The only system API accessed is UserDefaults for storing your app preferences.",
        },
        {
          heading: "Subscriptions & Payments",
          content:
            "Luxira offers optional premium features through a subscription managed via the Apple App Store. All payment processing is handled entirely by Apple. We do not have access to your payment information, credit card details, or Apple ID.",
        },
        {
          heading: "Third-Party Services",
          content:
            "Luxira uses Apple's frameworks (StoreKit for subscriptions, AVFoundation for camera, Vision for barcode detection). These are governed by Apple's Privacy Policy. Luxira does not integrate any third-party advertising, tracking, or analytics SDKs.",
        },
        {
          heading: "Data Sharing",
          content:
            "We do not sell, rent, or share your personal data with third parties. When you use the share or export feature, data is shared only through the system share sheet to the destination you choose.",
        },
        {
          heading: "Children's Privacy",
          content:
            "Luxira is not directed at children under 13. We do not knowingly collect personal information from children.",
        },
        {
          heading: "Changes to This Policy",
          content:
            "We may update this policy from time to time. Changes will be posted on this page with an updated revision date.",
        },
        {
          heading: "Contact",
          content:
            "If you have questions about this privacy policy, please contact us at support@prettytoolkit.com or visit our support page.",
        },
      ],
    },
  },
];
