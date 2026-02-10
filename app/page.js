import Script from "next/script";
import LandingPage from "./components/landing/LandingPage";
import { absoluteUrl, buildMetadata } from "@/utils/seo/config";

export const metadata = buildMetadata({
  title: "Riyazi Online | Urdu Mathematics Lectures & Notes",
  description:
    "Watch free Urdu mathematics lectures, download smart syllabi, and access exam-focused notes for Class 9 to 12 with Syed Mudasser Anayat.",
  keywords: [
    "Urdu math academy",
    "class 9 math lectures",
    "class 10 math notes",
    "class 11 formulas download",
    "class 12 smart syllabus",
  ],
  path: "/",
  type: "website",
  image: "/main.png",
});

const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Riyazi Online Mathematics Platform",
  description:
    "Free Urdu mathematics lectures, smart syllabi, and notes for Pakistani students from Class 9 to 12.",
  url: absoluteUrl("/"),
  inLanguage: "ur",
  primaryImageOfPage: absoluteUrl("/main.png"),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="home-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageSchema) }}
      />
      <LandingPage />
    </>
  );
}
