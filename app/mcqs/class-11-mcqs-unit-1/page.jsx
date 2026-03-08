// app/mcqs/class-11-mcqs-unit-1/page.tsx
// Route: /mcqs/class-11-mcqs-unit-1

import MCQsClient from "./Mcqsclient";


// ────────────────────────────────────────────────
// FULL SEO METADATA
// ────────────────────────────────────────────────
export const metadata = {
    title: "Class 11 Math MCQs Unit 1 | Number System PDF Download – Riyazi Online",
    description:
        "Download free Class 11 Math MCQs Unit 1 (Number System) PDF for Punjab Board 2025-2026. " +
        "Multiple choice questions with answer keys for FSc Part 1 Mathematics exam preparation.",
    keywords: [
        // ── Primary High-Intent Keywords ──
        "class 11 math mcqs unit 1 pdf download",
        "11th class math mcqs unit 1 with answers",
        "fsc part 1 math mcqs unit 1",
        "class 11 mathematics mcqs pdf download",
        "download mcqs for class 11 math",
        "11th class mathematics mcqs with answers pdf",
        "fsc part 1 mcqs pdf download free",

        // ── Unit-Specific ──
        "number system mcqs class 11",
        "class 11 math unit 1 number system mcqs",
        "11th class number system mcqs with answers",
        "number system mcqs with answer key pdf",

        // ── Board-Specific ──
        "punjab board class 11 math mcqs",
        "lahore board fsc math mcqs unit 1",
        "fsc mathematics mcqs punjab board 2025",
        "intermediate part 1 math mcqs",
        "11th class mcqs punjab board 2025 2026",

        // ── Year-Specific ──
        "class 11 math mcqs 2025 pdf",
        "fsc part 1 mcqs 2025 2026 pdf download",
        "class 11 math mcqs 2025 26",

        // ── General Discovery ──
        "mcqs for class 11",
        "class 11 mcqs all subjects pdf",
        "riyazi online mcqs",
        "fsc math mcqs online test",
        "11th class math important mcqs",
        "math mcqs for fsc part 1 download",
        "free mcqs pdf download class 11 math",
        "class 11 math chapter 1 mcqs",
        "class 11 math mcqs chapter wise pdf",
    ],
    openGraph: {
        title: "Class 11 Math MCQs Unit 1 – Number System | Free PDF Download",
        description:
            "Get free Class 11 Math MCQs for Unit 1 (Number System) as per Punjab Board. " +
            "Download PDF with answer keys for FSc Part 1 exam preparation 2025-2026.",
        url: "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1",
        images: [
            {
                url: "/og-class11-math-mcqs-unit1.jpg",
                width: 1200,
                height: 630,
                alt: "Class 11 Math MCQs Unit 1 – Number System PDF Download",
            },
        ],
        type: "article",
        siteName: "Riyazi Online",
    },
    twitter: {
        card: "summary_large_image",
        title: "Class 11 Math MCQs Unit 1 – Free PDF Download | Riyazi Online",
        description:
            "Download free Class 11 Math MCQs Unit 1 (Number System) PDF with answer keys. Punjab Board 2025-2026.",
        images: ["/og-class11-math-mcqs-unit1.jpg"],
    },
    alternates: {
        canonical: "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

// ────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ────────────────────────────────────────────────
export default function MCQsPage() {
    const structuredData = {
        // 1. LearningResource schema — best for downloadable study material
        learningResource: {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            "name": "Class 11 Math MCQs Unit 1 – Number System",
            "description":
                "Free multiple choice questions (MCQs) for Class 11 Mathematics Unit 1 (Number System) as per Punjab Board curriculum. Includes answer keys for FSc Part 1 exam preparation 2025-2026.",
            "url": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1",
            "inLanguage": ["en", "ur"],
            "educationalLevel": "Grade 11",
            "learningResourceType": "Practice Problems",
            "teaches": "Number System, Real Numbers, Complex Numbers",
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by-nc/4.0/",
            "provider": {
                "@type": "Organization",
                "name": "Riyazi Online",
                "url": "https://www.riyazi.online",
            },
            "about": {
                "@type": "Thing",
                "name": "Number System",
            },
            "educationalAlignment": {
                "@type": "AlignmentObject",
                "alignmentType": "educationalSubject",
                "targetName": "Mathematics",
                "educationFramework": "Punjab Board of Education",
            },
        },

        // 2. Breadcrumb
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.riyazi.online",
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "MCQs",
                    "item": "https://www.riyazi.online/mcqs",
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Class 11",
                    "item": "https://www.riyazi.online/mcqs/class-11",
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Mathematics Unit 1 – Number System",
                    "item": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1",
                },
            ],
        },

        // 3. FAQPage — captures question-based searches like "where to download class 11 math mcqs"
        faq: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where can I download Class 11 Math MCQs Unit 1 PDF for free?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can download Class 11 Math MCQs Unit 1 (Number System) PDF for free from Riyazi Online at https://www.riyazi.online/mcqs/class-11-mcqs-unit-1. No signup required.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are these MCQs based on Punjab Board syllabus?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all MCQs on Riyazi Online are carefully prepared according to the Punjab Board (BISE) curriculum for FSc Part 1 (Class 11) Mathematics.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do the MCQs include answer keys?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the downloadable PDF includes complete answer keys for all MCQs so students can self-assess their preparation.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What topics are covered in Class 11 Math Unit 1 MCQs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Class 11 Math Unit 1 MCQs cover the Number System including real numbers, rational and irrational numbers, complex numbers, and their properties as per Punjab Board FSc Part 1 syllabus.",
                    },
                },
            ],
        },

        // 4. WebPage for additional metadata
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Class 11 Math MCQs Unit 1 – Number System PDF Download",
            "url": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1",
            "description":
                "Download free Class 11 Math MCQs Unit 1 PDF with answer keys. Punjab Board FSc Part 1 exam preparation 2025-2026.",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riyazi.online" },
                    { "@type": "ListItem", "position": 2, "name": "MCQs", "item": "https://www.riyazi.online/mcqs" },
                    { "@type": "ListItem", "position": 3, "name": "Class 11 Math MCQs Unit 1", "item": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-1" },
                ],
            },
        },
    };

    return (
        <>
            {/* LearningResource Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.learningResource) }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
            />

            {/* FAQ Schema – helps rank for question-based searches */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faq) }}
            />

            {/* WebPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
            />

            <MCQsClient />
        </>
    );
}