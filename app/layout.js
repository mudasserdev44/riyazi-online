import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { absoluteUrl, buildMetadata, siteConfig } from "@/utils/seo/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rootMetadata = buildMetadata({
  title:
    "Riyazi Online - Class 9, 10, 11, 12 Mathematics Lectures & Smart Syllabus",
  description:
    "Master Mathematics in Urdu with Riyazi Online. Free video lectures, formula sheets, and smart syllabus downloads for Class 9, 10, 11, and 12 students across Pakistan.",
  keywords: [
    "Urdu mathematics lectures",
    "Punjab board maths",
    "smart syllabus Pakistan",
    "online math academy",
    "math formulas PDF",
  ],
  path: "/",
  type: "website",
  image: "/main.png",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  ...rootMetadata,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  description:
    "Pakistan's leading mathematics education platform delivering Urdu video lectures, smart syllabi, and resources for secondary students.",
  url: siteConfig.url,
  logo: absoluteUrl("/logo.png"),
  sameAs: [siteConfig.socials.youtube, siteConfig.socials.facebook],
  areaServed: "PK",
  inLanguage: "ur",
  founder: {
    "@type": "Person",
    name: "Syed Mudasser Anayat",
    jobTitle: "Founder & Chief Educator",
  },
  teaches: [
    "Mathematics Class 9",
    "Mathematics Class 10",
    "Mathematics Class 11",
    "Mathematics Class 12",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.contactEmail,
    availableLanguage: ["ur", "en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Mathematics Online Lectures - Class 9 to 12",
  description:
    "Complete mathematics course for Class 9, 10, 11, and 12 students in Urdu language.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    sameAs: siteConfig.url,
  },
  inLanguage: "ur",
  educationalLevel: "Secondary Education",
  teaches: "Mathematics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="Urdu" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />

        <Script
          id="seo-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="seo-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="seo-course"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
