import ALPClient from "./ALPClass11";

// This is a Server Component in Next.js
export const metadata = {
    title: "Class 11 Smart Syllabus 2025-2026 | All Subjects Punjab Board - Riyazi Online",
    description: "Download complete Class 11 Smart Syllabus 2025-2026 for all subjects - Math, Physics, Chemistry, Biology, English, Urdu, Islamiat. Punjab Board updated syllabus PDF.",
    keywords: [
        "Class 11 smart syllabus 2025 pdf download",
        "Smart syllabus for 11th class 2025 pdf download",
        "Class 11 smart syllabus 2025 pdf",
        "Class 11 smart syllabus 2025 26 pdf download",
        "Class 11 smart syllabus 2025 26",
        "Smart syllabus for 11th class 2025 2026",
        "Class 11 syllabus 2025-26",
        "11th class syllabus 2025 Punjab Board",
        "Class 11 smart syllabus 2025 pdf download",
        "Smart syllabus for 11th class 2025 urdu",
        "Class 11 smart syllabus 2025 pdf",
        "Smart syllabus for 11th class 2026",
        "Class 11 smart syllabus 2025 26",
        "11th class syllabus 2025 Punjab Board",
        "Class 11 syllabus 2025-26",
        "Class 11 smart syllabus 2025 26 pdf",
        "Class 11 Smart Syllabus 2025",
        "Class 11 Syllabus 2026",
        "Punjab Board Class 11 Syllabus",
        "Class 11 All Subjects Syllabus PDF",
        "11th Class Syllabus Download",
        "Class 11 Smart Syllabus 2025-26",
        "Matriculation Syllabus",
        "SSC Part 2 Syllabus",
        "Class 11 Math Physics Chemistry Syllabus",
        "Class 11 Complete Syllabus PDF"
    ],
    openGraph: {
        title: "Class 11 Smart Syllabus 2025-2026 | All Subjects",
        description: "Complete smart syllabus for Class 11 all subjects. Download PDF for 2025-2026 academic year.",
        url: "https://www.riyazi.online/alp-class-11",
        images: [
            {
                url: "/og-class11-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "Class 11 Smart Syllabus 2025-2026"
            }
        ],
        type: "article"
    },
    alternates: {
        canonical: "https://www.riyazi.online/alp-class-11"
    }
};

export default function ALP() {
    const structuredData = {
        credential: {
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalCredential",
            "name": "Class 11 Smart Syllabus 2025-2026 - All Subjects",
            "description": "Complete smart syllabus for Class 11 all subjects as per Punjab Board curriculum for academic year 2025-2026",
            "educationalLevel": "Grade 11",
            "credentialCategory": "Syllabus",
            "recognizedBy": {
                "@type": "Organization",
                "name": "Punjab Board of Education"
            }
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.riyazi.online"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Smart Syllabus",
                    "item": "https://www.riyazi.online/alp-class-11"
                },

            ]
        }
    };

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData.credential)
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData.breadcrumb)
                }}
            />

            <ALPClient />
        </>
    );
}
