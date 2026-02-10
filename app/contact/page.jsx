import Script from "next/script";
import ContactClient from "./ContactClient";
import { absoluteUrl, buildMetadata, siteConfig } from "@/utils/seo/config";

export const metadata = buildMetadata({
  title: "Contact Riyazi Online | Speak with Syed Mudasser Anayat",
  description:
    "Email Riyazi Online for mathematics help, smart syllabus support, or collaboration. We respond to every query within 24 hours.",
  keywords: [
    "Riyazi Online contact",
    "math help Pakistan",
    "Urdu math tutor email",
    "Syed Mudasser Anayat contact",
  ],
  path: "/contact",
  type: "article",
  image: "/main.png",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Riyazi Online",
  description:
    "Get in touch with Riyazi Online for mathematics learning support, partnerships, and academic guidance.",
  url: absoluteUrl("/contact"),
  inLanguage: "ur",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.contactEmail,
    availableLanguage: ["ur", "en"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}