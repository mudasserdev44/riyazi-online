import Formulas from "@/app/components/formulas/Formulas";
import { mathFormulas } from "@/utils/data/formulas";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const chapter = mathFormulas.find(c => c.slug === params.chapter);

    if (!chapter) {
        return {
            title: "Chapter Not Found - Riyazi Online",
            description: "The requested formula sheet is not available."
        };
    }

    return {
        title: `${chapter.title} - Class 11 Math Formulas PDF Download`,
        description: chapter.description,
        keywords: chapter.keywords,
        openGraph: {
            title: `${chapter.title} - Riyazi Online`,
            description: chapter.description,
            url: `https://www.riyazi.online/formulas-class-11/${chapter.slug}`,
            images: [
                {
                    url: "/og-formulas.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${chapter.title} - Riyazi Online`
                }
            ],
            type: "website"
        },
        alternates: {
            canonical: `https://www.riyazi.online/formulas-class-11/${chapter.slug}`
        }
    };
}

export default function ChapterPage({ params }) {
    const chapter = mathFormulas.find(c => c.slug === params.chapter);

    if (!chapter) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LearningResource",
                        "name": chapter.title,
                        "description": chapter.description,
                        "learningResourceType": "Formula Sheet",
                        "educationalLevel": "Grade11",
                        "url": `https://www.riyazi.online/formulas-class-11/${chapter.slug}`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Riyazi Online"
                        },
                        "dateModified": chapter.lastUpdated,
                        "educationalAlignment": {
                            "@type": "AlignmentObject",
                            "alignmentType": "teaches",
                            "educationalFramework": "Class 11 Mathematics",
                            "targetName": chapter.title
                        }
                    })
                }}
            />

            <Formulas chapter={chapter} />
        </>
    );
}
