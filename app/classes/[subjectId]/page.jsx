import React from 'react';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { BookOpen, Sparkles, ChevronRight, Calculator, Shapes, TrendingUp, PieChart, Compass, Brain } from 'lucide-react';
import { absoluteUrl, buildMetadata } from '@/utils/seo/config';

// Subjects data for each class
const subjectsData = {
    9: [
        {
            id: 1,
            title: "Algebra",
            description: "Basic algebra, equations, and polynomials",
            chapters: 8,
            icon: Calculator,
            color: "from-teal-500 to-cyan-500",
            hoverColor: "hover:border-teal-400",
            slug: "algebra"
        },
        {
            id: 2,
            title: "Geometry",
            description: "Lines, angles, triangles, and quadrilaterals",
            chapters: 7,
            icon: Shapes,
            color: "from-purple-500 to-pink-500",
            hoverColor: "hover:border-purple-400",
            slug: "geometry"
        },
        {
            id: 3,
            title: "Mensuration",
            description: "Area, perimeter, and volume calculations",
            chapters: 5,
            icon: Compass,
            color: "from-indigo-500 to-blue-500",
            hoverColor: "hover:border-indigo-400",
            slug: "mensuration"
        },
        {
            id: 4,
            title: "Statistics",
            description: "Data handling and probability",
            chapters: 4,
            icon: PieChart,
            color: "from-orange-500 to-yellow-500",
            hoverColor: "hover:border-orange-400",
            slug: "statistics"
        }
    ],
    10: [
        {
            id: 1,
            title: "Algebra",
            description: "Advanced equations and quadratic expressions",
            chapters: 9,
            icon: Calculator,
            color: "from-teal-500 to-cyan-500",
            hoverColor: "hover:border-teal-400",
            slug: "algebra"
        },
        {
            id: 2,
            title: "Trigonometry",
            description: "Trigonometric ratios and identities",
            chapters: 6,
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500",
            hoverColor: "hover:border-purple-400",
            slug: "trigonometry"
        },
        {
            id: 3,
            title: "Geometry",
            description: "Coordinate geometry and constructions",
            chapters: 8,
            icon: Shapes,
            color: "from-indigo-500 to-blue-500",
            hoverColor: "hover:border-indigo-400",
            slug: "geometry"
        },
        {
            id: 4,
            title: "Mensuration",
            description: "Surface area and volume",
            chapters: 5,
            icon: Compass,
            color: "from-orange-500 to-yellow-500",
            hoverColor: "hover:border-orange-400",
            slug: "mensuration"
        },
        {
            id: 5,
            title: "Statistics & Probability",
            description: "Data analysis and probability theory",
            chapters: 6,
            icon: PieChart,
            color: "from-rose-500 to-red-500",
            hoverColor: "hover:border-rose-400",
            slug: "statistics"
        }
    ],
    11: [
        {
            id: 1,
            title: "Calculus",
            description: "Limits, derivatives, and differentiation",
            chapters: 10,
            icon: Brain,
            color: "from-teal-500 to-cyan-500",
            hoverColor: "hover:border-teal-400",
            slug: "calculus"
        },
        {
            id: 2,
            title: "Functions",
            description: "Types of functions and their properties",
            chapters: 6,
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500",
            hoverColor: "hover:border-purple-400",
            slug: "functions"
        },
        {
            id: 3,
            title: "Trigonometry",
            description: "Advanced trigonometric concepts",
            chapters: 7,
            icon: Calculator,
            color: "from-indigo-500 to-blue-500",
            hoverColor: "hover:border-indigo-400",
            slug: "trigonometry"
        },
        {
            id: 4,
            title: "Analytical Geometry",
            description: "Coordinate systems and conic sections",
            chapters: 8,
            icon: Shapes,
            color: "from-orange-500 to-yellow-500",
            hoverColor: "hover:border-orange-400",
            slug: "analytical-geometry"
        },
        {
            id: 5,
            title: "Sequences & Series",
            description: "Arithmetic and geometric progressions",
            chapters: 5,
            icon: PieChart,
            color: "from-rose-500 to-red-500",
            hoverColor: "hover:border-rose-400",
            slug: "sequences"
        },
        {
            id: 6,
            title: "Vectors",
            description: "Vector algebra and operations",
            chapters: 6,
            icon: Compass,
            color: "from-emerald-500 to-teal-500",
            hoverColor: "hover:border-emerald-400",
            slug: "vectors"
        }
    ],
    12: [
        {
            id: 1,
            title: "Integration",
            description: "Definite and indefinite integration",
            chapters: 9,
            icon: Brain,
            color: "from-teal-500 to-cyan-500",
            hoverColor: "hover:border-teal-400",
            slug: "integration"
        },
        {
            id: 2,
            title: "Differential Equations",
            description: "First and second order differential equations",
            chapters: 7,
            icon: Calculator,
            color: "from-purple-500 to-pink-500",
            hoverColor: "hover:border-purple-400",
            slug: "differential-equations"
        },
        {
            id: 3,
            title: "Vectors & 3D Geometry",
            description: "Three dimensional coordinate geometry",
            chapters: 8,
            icon: Compass,
            color: "from-indigo-500 to-blue-500",
            hoverColor: "hover:border-indigo-400",
            slug: "vectors-3d"
        },
        {
            id: 4,
            title: "Linear Algebra",
            description: "Matrices, determinants, and linear systems",
            chapters: 6,
            icon: Shapes,
            color: "from-orange-500 to-yellow-500",
            hoverColor: "hover:border-orange-400",
            slug: "linear-algebra"
        },
        {
            id: 5,
            title: "Probability",
            description: "Advanced probability and distributions",
            chapters: 5,
            icon: PieChart,
            color: "from-rose-500 to-red-500",
            hoverColor: "hover:border-rose-400",
            slug: "probability"
        }
    ]
};

const classSummaries = {
    9: {
        label: "Class 9",
        description: "Review algebra, geometry, mensuration, and statistics with Urdu lectures and practice tests.",
        keywords: ["class 9 math subjects", "class 9 algebra", "class 9 geometry", "class 9 tests"]
    },
    10: {
        label: "Class 10",
        description: "Study trigonometry, algebra, mensuration, and statistics with chapter-wise resources.",
        keywords: ["class 10 mathematics", "class 10 trigonometry", "class 10 tests"]
    },
    11: {
        label: "Class 11",
        description: "Access calculus, functions, trigonometry, geometry, and sequences content for FSc Part 1.",
        keywords: ["class 11 calculus", "FSc part 1 math", "class 11 subjects"]
    },
    12: {
        label: "Class 12",
        description: "Prepare for intermediate exams with integration, differential equations, vectors, and probability.",
        keywords: ["class 12 integration", "FSc part 2 math", "class 12 probability"]
    }
};

const getClassContent = (subjectId) => {
    const numeric = Number(subjectId.replace("class-", ""));
    if (!numeric || !subjectsData[numeric]) {
        return null;
    }

    return {
        classNumber: numeric,
        subjects: subjectsData[numeric],
        summary: classSummaries[numeric],
    };
};

export async function generateStaticParams() {
    return Object.keys(subjectsData).map((classKey) => ({
        subjectId: `class-${classKey}`,
    }));
}

export async function generateMetadata({ params }) {
    const data = getClassContent(params.subjectId);

    if (!data) {
        return {
            title: "Class Not Found | Riyazi Online",
            robots: { index: false, follow: false },
        };
    }

    const { classNumber, subjects, summary } = data;
    const label = summary?.label ?? `Class ${classNumber}`;

    return buildMetadata({
        title: `${label} Mathematics Subjects & Chapter Tests`,
        description: summary?.description ?? `${label} mathematics subjects available for practice at Riyazi Online.`,
        keywords: summary?.keywords ?? [],
        path: `/classes/${params.subjectId}`,
    });
}

export default function SubjectsPage({ params }) {
    const data = getClassContent(params.subjectId);

    if (!data) {
        notFound();
    }

    const { classNumber, subjects, summary } = data;
    const label = summary?.label ?? `Class ${classNumber}`;

    const subjectsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${label} Subjects`,
        description: summary?.description ?? `${label} mathematics subjects with chapter-wise tests.`,
        url: absoluteUrl(`/classes/${params.subjectId}`),
        numberOfItems: subjects.length,
        itemListElement: subjects.map((subject, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: subject.title,
            description: subject.description,
            url: absoluteUrl(`/classes/${params.subjectId}/${subject.slug}`),
        })),
    };

    return (
        <>
            <Script
                id="class-subjects-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(subjectsSchema)
                }}
            />

            <div className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/classes" className="hover:text-indigo-600">Classes</Link>
                            <ChevronRight size={16} />
                            <span className="text-gray-900 font-semibold">{label}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-40 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="text-center space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-indigo-100">
                                <Sparkles className="text-indigo-600" size={20} />
                                <span className="text-indigo-600 font-semibold">{label}</span>
                            </div>

                            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                SELECT YOUR<br />
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    SUBJECT
                                </span>
                            </h1>

                            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>

                            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                                Choose a subject to access chapter-wise tests and practice materials
                            </p>
                        </div>
                    </div>
                </section>

                {/* Subjects Grid */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subjects.map((subject) => {
                                const Icon = subject.icon;
                                return (
                                    <Link href={`/classes/${params.subjectId}/${subject.slug}`} key={subject.id} className="block">
                                        <div className={`group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${subject.hoverColor} h-full`}>
                                            <div className={`h-3 bg-gradient-to-r ${subject.color}`}></div>

                                            <div className="p-8">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="text-white" size={32} />
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                                    {subject.title}
                                                </h3>

                                                <p className="text-gray-600 mb-6 leading-relaxed">
                                                    {subject.description}
                                                </p>

                                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen size={16} />
                                                        <span>{subject.chapters} Chapters</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                                                    <span>View Chapters</span>
                                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>

                                            <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Back Button */}
                <section className="pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Link
                            href="/classes"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-semibold transition-colors"
                        >
                            <ChevronRight size={20} className="rotate-180" />
                            <span>Back to Classes</span>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}