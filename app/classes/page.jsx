import React from 'react';
import { GraduationCap, Sparkles, ChevronRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { absoluteUrl, buildMetadata } from '@/utils/seo/config';

const classes = [
    {
        id: 9,
        title: "Class 9",
        description: "Secondary School Certificate - Part 1",
        color: "from-teal-500 to-cyan-500",
        hoverColor: "hover:border-teal-400",
        slug: "class-9"
    },
    {
        id: 10,
        title: "Class 10",
        description: "Secondary School Certificate - Part 2",
        color: "from-purple-500 to-pink-500",
        hoverColor: "hover:border-purple-400",
        slug: "class-10"
    },
    {
        id: 11,
        title: "Class 11",
        description: "Higher Secondary Certificate - Part 1",
        color: "from-indigo-500 to-blue-500",
        hoverColor: "hover:border-indigo-400",
        slug: "class-11"
    },
    {
        id: 12,
        title: "Class 12",
        description: "Higher Secondary Certificate - Part 2",
        color: "from-orange-500 to-yellow-500",
        hoverColor: "hover:border-orange-400",
        slug: "class-12"
    }
];

export const metadata = buildMetadata({
    title: "Classes 9-12 Mathematics Resources | Riyazi Online",
    description:
        "Select your class to access subject-wise tests, Urdu lectures, and exam resources for Class 9, 10, 11, and 12 at Riyazi Online.",
    keywords: [
        "class 9 tests",
        "class 10 maths practice",
        "class 11 syllabus",
        "class 12 past papers",
        "math chapters Urdu"
    ],
    path: "/classes",
    type: "website",
});

const classesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mathematics Classes 9-12",
    description: "Choose your class to explore subjects, tests, and lecture resources.",
    url: absoluteUrl("/classes"),
    numberOfItems: classes.length,
    itemListElement: classes.map((cls, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cls.title,
        description: cls.description,
        url: absoluteUrl(`/classes/${cls.slug}`)
    }))
};

export default function ClassesPage() {
    return (
        <>
            <Script
                id="classes-itemlist-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(classesItemListSchema)
                }}
            />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-40 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="text-center space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-indigo-100">
                                <Sparkles className="text-indigo-600" size={20} />
                                <span className="text-indigo-600 font-semibold">Select Your Class</span>
                            </div>

                            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                CHOOSE YOUR<br />
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    CLASS
                                </span>
                            </h1>

                            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>

                            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                                Select your class to access subject-wise tests and chapter-wise practice materials
                            </p>
                        </div>
                    </div>
                </section>

                {/* Classes Grid */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {classes.map((cls) => (
                                <Link href={`/classes/${cls.slug}`} key={cls.id} className="block">
                                    <div className={`group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${cls.hoverColor} h-full`}>
                                        <div className={`h-3 bg-gradient-to-r ${cls.color}`}></div>

                                        <div className="p-8 text-center">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${cls.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                                                <GraduationCap className="text-white" size={40} />
                                            </div>

                                            <h3 className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                                {cls.title}
                                            </h3>

                                            <p className="text-gray-600 mb-6">
                                                {cls.description}
                                            </p>

                                            <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                                                <span>View Subjects</span>
                                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Start Your Test Preparation
                        </h2>
                        <p className="text-2xl text-teal-100 mb-10">
                            Subject-wise tests and chapter-wise practice for all classes
                        </p>
                        <button className="inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl">
                            <BookOpen size={28} />
                            Explore Classes
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}