// app/mcqs/class-11-mcqs-unit-10/page.tsx
// Route: /mcqs/class-11-mcqs-unit-10

import MCQsClient from "./Mcqsclient";


// ────────────────────────────────────────────────
// FULL SEO METADATA
// ────────────────────────────────────────────────
export const metadata = {
    title: "Class 11 Math MCQs Unit 10 | Trigonometric Identities PDF Download | New Syllabus – Riyazi Online",
    description:
        "Download free Class 11 Math New Syllabus MCQs Unit 10 (Trigonometric Identities) PDF for Punjab Board 2025-2026. " +
        "Multiple choice questions with answer keys for FSc Part 1 Mathematics exam preparation.",
    keywords: [
        // ── Primary High-Intent Keywords ──
        "class 11 math mcqs unit 10 pdf download",
        "11th class math mcqs unit 10 with answers",
        "fsc part 1 math mcqs unit 10",
        "class 11 mathematics mcqs unit 10 pdf download",
        "download mcqs for class 11 math unit 10",
        "11th class mathematics unit 10 mcqs with answers pdf",
        "fsc part 1 unit 10 mcqs pdf download free",

        // ── Unit-Specific ──
        "trigonometric identities mcqs class 11",
        "class 11 math unit 10 trigonometric identities mcqs",
        "11th class trigonometric identities mcqs with answers",
        "trigonometric identities mcqs with answer key pdf",
        "trig identities mcqs fsc part 1",
        "trigonometry mcqs class 11 punjab board",
        "fundamental identities mcqs class 11",
        "trigonometric ratios mcqs fsc part 1",
        "allied angles mcqs class 11 math",
        "double angle identities mcqs class 11",
        "half angle identities mcqs fsc",

        // ── Board-Specific ──
        "punjab board class 11 math mcqs unit 10",
        "lahore board fsc math mcqs unit 10",
        "fsc mathematics mcqs unit 10 punjab board 2025",
        "intermediate part 1 math unit 10 mcqs",
        "11th class mcqs unit 10 punjab board 2025 2026",
        "bise punjab fsc part 1 trigonometry mcqs",

        // ── Year-Specific ──
        "class 11 math mcqs unit 10 2025 pdf",
        "fsc part 1 unit 10 mcqs 2025 2026 pdf download",
        "class 11 math trigonometric identities mcqs 2025 26",

        // ── General Discovery ──
        "mcqs for class 11 math unit 10",
        "class 11 mcqs trigonometry pdf",
        "riyazi online mcqs unit 10",
        "fsc math mcqs online test unit 10",
        "11th class math important mcqs unit 10",
        "math mcqs for fsc part 1 unit 10 download",
        "free mcqs pdf download class 11 math unit 10",
        "class 11 math chapter 10 mcqs",
        "class 11 math mcqs chapter wise pdf trigonometry",
        "trigonometric identities practice questions class 11",
        "fsc trigonometry multiple choice questions",
    ],
    openGraph: {
        title: "Class 11 Math MCQs Unit 10 – Trigonometric Identities | Free PDF Download",
        description:
            "Get free Class 11 Math MCQs for Unit 10 (Trigonometric Identities) as per Punjab Board. " +
            "Download PDF with answer keys for FSc Part 1 exam preparation 2025-2026.",
        url: "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10",
        images: [
            {
                url: "/og-class11-math-mcqs-unit10.jpg",
                width: 1200,
                height: 630,
                alt: "Class 11 Math MCQs Unit 10 – Trigonometric Identities PDF Download",
            },
        ],
        type: "article",
        siteName: "Riyazi Online",
    },
    twitter: {
        card: "summary_large_image",
        title: "Class 11 Math New Syllabus 2026 MCQs Unit 10 – Free PDF Download | Riyazi Online",
        description:
            "Download free Class 11 Math MCQs Unit 10 (Trigonometric Identities) PDF with answer keys. Punjab Board 2025-2026.",
        images: ["/og-class11-math-mcqs-unit10.jpg"],
    },
    alternates: {
        canonical: "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10",
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
            "name": "Class 11 Math MCQs Unit 10 – Trigonometric Identities",
            "description":
                "Free multiple choice questions (MCQs) for Class 11 Mathematics Unit 10 (Trigonometric Identities) as per Punjab Board curriculum. Includes answer keys for FSc Part 1 exam preparation 2025-2026.",
            "url": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10",
            "inLanguage": ["en", "ur"],
            "educationalLevel": "Grade 11",
            "learningResourceType": "Practice Problems",
            "teaches": "Trigonometric Identities, Fundamental Identities, Allied Angles, Double Angle Identities, Half Angle Identities",
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by-nc/4.0/",
            "provider": {
                "@type": "Organization",
                "name": "Riyazi Online",
                "url": "https://www.riyazi.online",
            },
            "about": {
                "@type": "Thing",
                "name": "Trigonometric Identities",
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
                    "name": "Mathematics Unit 10 – Trigonometric Identities",
                    "item": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10",
                },
            ],
        },

        // 3. FAQPage — captures question-based searches
        faq: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where can I download Class 11 Math MCQs Unit 10 PDF for free?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can download Class 11 Math MCQs Unit 10 (Trigonometric Identities) PDF for free from Riyazi Online at https://www.riyazi.online/mcqs/class-11-mcqs-unit-10. No signup required.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are these Trigonometric Identities MCQs based on Punjab Board syllabus?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all MCQs on Riyazi Online are carefully prepared according to the Punjab Board (BISE) curriculum for FSc Part 1 (Class 11) Mathematics Unit 10.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do the Unit 10 MCQs include answer keys?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the downloadable PDF includes complete answer keys for all MCQs in Unit 10 so students can self-assess their preparation for Punjab Board exams.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What topics are covered in Class 11 Math Unit 10 MCQs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Class 11 Math Unit 10 MCQs cover Trigonometric Identities including fundamental identities, allied angles, compound angle identities, double angle identities, half angle identities, and product-to-sum formulas as per Punjab Board FSc Part 1 syllabus.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How many MCQs are in Class 11 Math Unit 10?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Class 11 Math Unit 10 (Trigonometric Identities) PDF from Riyazi Online contains 50+ carefully selected MCQs with answer keys, covering all important topics for Punjab Board FSc Part 1 exam preparation.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Is Trigonometric Identities important for FSc Part 1 Punjab Board exam?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Unit 10 (Trigonometric Identities) is one of the most important chapters in FSc Part 1 Mathematics. The Punjab Board regularly tests fundamental identities, allied angles, and double/half angle formulas in MCQs and subjective sections.",
                    },
                },
            ],
        },

        // 4. WebPage for additional metadata
        webPage: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Class 11 Math MCQs Unit 10 – Trigonometric Identities PDF Download",
            "url": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10",
            "description":
                "Download free Class 11 Math New Book MCQs Unit 10 (Trigonometric Identities) PDF with answer keys. Punjab Board FSc Part 1 exam preparation 2025-2026.",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riyazi.online" },
                    { "@type": "ListItem", "position": 2, "name": "MCQs", "item": "https://www.riyazi.online/mcqs" },
                    { "@type": "ListItem", "position": 3, "name": "Class 11 Math MCQs Unit 10", "item": "https://www.riyazi.online/mcqs/class-11-mcqs-unit-10" },
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