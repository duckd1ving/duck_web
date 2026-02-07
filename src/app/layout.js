import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.duckdalis.com"),
  title: {
    default: "DUCK DALIŞ MERKEZİ | Ankara Dalış Eğitimi & Deneme Dalışı",
    template: "%s | Duck Dalış Merkezi",
  },
  description:
    "Ankara'nın genç ve dinamik dalış merkezi. CMAS sertifikalı eğitimler, deneme dalışları ve profesyonel dalış turları. Güvenli, kaliteli ve eğlenceli dalış deneyimi için Duck Dalış Merkezi.",
  keywords: [
    "dalış merkezi",
    "ankara dalış",
    "dalış eğitimi",
    "deneme dalışı",
    "scuba diving",
    "CMAS eğitimi",
    "tüplü dalış",
    "dalış kursu",
    "duck dalış",
  ],
  authors: [{ name: "Duck Dalış Merkezi" }],
  creator: "Duck Dalış Merkezi",
  publisher: "Duck Dalış Merkezi",
  applicationName: "Duck Dalış Merkezi",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.duckdalis.com",
  },
  openGraph: {
    title: "DUCK DALIŞ MERKEZİ | Ankara Dalış Eğitimi",
    description:
      "Ankara'nın genç ve dinamik dalış merkezi. CMAS sertifikalı eğitimler, deneme dalışları ve profesyonel dalış turları.",
    siteName: "Duck Dalış Merkezi",
    url: "https://www.duckdalis.com",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Duck Dalış Merkezi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUCK DALIŞ MERKEZİ | Ankara Dalış Eğitimi",
    description:
      "Ankara'nın genç ve dinamik dalış merkezi. CMAS sertifikalı eğitimler, deneme dalışları.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    // Google Search Console doğrulama kodu eklenebilir
    // google: "your-google-verification-code",
  },
  category: "sports",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.duckdalis.com/#organization",
        name: "Duck Dalış Merkezi",
        url: "https://www.duckdalis.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.duckdalis.com/images/logo.png",
        },
        sameAs: ["https://www.instagram.com/duckdivingcenter/"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-501-700-17-03",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: "Turkish",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barbaros Mah. Güniz Sokak 30/8",
          addressLocality: "Çankaya",
          addressRegion: "Ankara",
          postalCode: "06680",
          addressCountry: "TR",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.duckdalis.com/#website",
        url: "https://www.duckdalis.com",
        name: "Duck Dalış Merkezi",
        publisher: { "@id": "https://www.duckdalis.com/#organization" },
        inLanguage: "tr-TR",
      },
      {
        "@type": "SportsActivityLocation",
        "@id": "https://www.duckdalis.com/#divingcenter",
        name: "Duck Dalış Merkezi",
        description:
          "Ankara merkezli profesyonel dalış eğitim merkezi. CMAS sertifikalı eğitimler.",
        url: "https://www.duckdalis.com",
        telephone: "+90-501-700-17-03",
        email: "duckdalismerkezi@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barbaros Mah. Güniz Sokak 30/8",
          addressLocality: "Çankaya",
          addressRegion: "Ankara",
          postalCode: "06680",
          addressCountry: "TR",
        },
      },
    ],
  };

  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#fbbf24" />
        <link rel="canonical" href="https://www.duckdalis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
