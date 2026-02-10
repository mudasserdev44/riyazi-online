import { lectures } from "@/utils/data/lectures";
import { BookOpen, GraduationCap, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
export const metadata = {
    title: "Mathematics Video Lectures in Urdu | All Classes",
    description: "Browse 500+ comprehensive mathematics video lectures in Urdu by Syed Mudasser Anayat. Complete courses for Class 9, 10, 11, and 12. Learn calculus, algebra, trigonometry, and more.",
    keywords: [
        "Class 11 Math 2025",
        "Class 11 Math New syllabus",
        "Class 11 Math 2025 Exercise 1.1",
        "Class 11 Math exercise 1.5 solution",
        "Class 11 Math 2025 solution",
        "Class 11 Math 2025 unit 1 solution",
        "mathematics lectures urdu",
        "math videos urdu",
        "class 9 math lectures",
        "class 10 math lectures",
        "class 11 math lectures",
        "class 12 math lectures",
        "algebra urdu",
        "calculus urdu",
        "trigonometry urdu"
    ],
    openGraph: {
        title: "Mathematics Lectures in Urdu | Riyazi Online",
        description: "500+ video lectures covering all mathematics topics for Classes 9-12",
        url: "https://www.riyazi.online/lectures",
        images: [
            {
                url: "/og-lectures.jpg",
                width: 1200,
                height: 630,
                alt: "Riyazi Online Mathematics Lectures"
            }
        ],
        type: "website"
    },
    alternates: {
        canonical: "https://www.riyazi.online/lectures"
    }
};

export default function LecturesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                                "name": "Lectures",
                                "item": "https://www.riyazi.online/lectures"
                            }
                        ]
                    })
                }}
            />

            {/* Add ItemList Schema for courses */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Mathematics Courses",
                        "description": "Complete mathematics courses in Urdu",
                        "itemListElement": lectures.map((course, index) => ({
                            "@type": "Course",
                            "position": index + 1,
                            "name": course.title,
                            "description": course.description,
                            "provider": {
                                "@type": "Organization",
                                "name": "Riyazi Online"
                            },
                            "url": `https://www.riyazi.online/lectures/${course.slug}`
                        }))
                    })
                }}
            />
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-40 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-indigo-100">
                            <Sparkles className="text-indigo-600" size={20} />
                            <span className="text-indigo-600 font-semibold">500+ Video Lessons</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            MATHEMATICS<br />
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                LECTURES
                            </span>
                        </h1>

                        <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>

                        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                            Comprehensive mathematics courses taught by <strong>Syed Mudasser Anayat</strong> in Urdu.
                            From foundational concepts to advanced topics, master mathematics at your own pace.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    500+
                                </div>
                                <div className="text-gray-600 font-medium mt-1">Video Lessons</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    50K+
                                </div>
                                <div className="text-gray-600 font-medium mt-1">Students</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                                    98%
                                </div>
                                <div className="text-gray-600 font-medium mt-1">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lectures Grid Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">Browse Courses</h2>
                        <p className="text-gray-600 text-lg">Choose from our comprehensive collection of mathematics courses</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lectures.map((course, index) => {
                            const gradients = [
                                "from-teal-500 to-cyan-500",
                                "from-purple-500 to-pink-500",
                                "from-indigo-500 to-blue-500",
                                "from-orange-500 to-yellow-500",
                                "from-rose-500 to-red-500",
                                "from-emerald-500 to-teal-500"
                            ];

                            const hoverColors = [
                                "hover:border-teal-400",
                                "hover:border-purple-400",
                                "hover:border-indigo-400",
                                "hover:border-orange-400",
                                "hover:border-rose-400",
                                "hover:border-emerald-400"
                            ];

                            const gradient = gradients[index % gradients.length];
                            const hoverColor = hoverColors[index % hoverColors.length];

                            return (
                                <Link href={`/lectures/${course.slug}`} key={course.slug}>
                                    <div className={`group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${hoverColor} h-full`}>
                                        {/* Decorative gradient header */}
                                        <div className={`h-3 bg-gradient-to-r ${gradient}`}></div>

                                        <div className="p-8">
                                            {/* Icon */}
                                            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <GraduationCap className="text-white" size={32} />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                                {course.title}
                                            </h3>

                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {course.description}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen size={16} />
                                                    <span>{course.lessons} Lessons</span>
                                                </div>
                                                <div>
                                                    {course.duration}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                                                <span>Start Learning</span>
                                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Content */}
                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full font-semibold mb-6 w-fit">
                                    <Sparkles size={16} />
                                    <span>Why Choose Riyazi Online?</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                    Learn Mathematics in Your Native Language
                                </h2>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    All courses are taught by <strong>Syed Mudasser Anayat</strong> in clear,
                                    easy-to-understand Urdu. No more struggling with English terminology -
                                    focus on understanding the concepts, not the language.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-lg">Step-by-step explanations in Urdu</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-lg">Practice exercises with solutions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-lg">Learn at your own pace, anytime</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Visual */}
                            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 lg:p-16 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                                    <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full"></div>
                                </div>
                                <div className="relative text-center text-white">
                                    <div className="text-7xl font-bold mb-4">50,000+</div>
                                    <div className="text-2xl font-semibold mb-2">Happy Students</div>
                                    <div className="text-lg opacity-90">Learning Mathematics in Urdu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Start Your Mathematics Journey Today
                    </h2>
                    <p className="text-2xl text-teal-100 mb-10">
                        Join thousands of students mastering mathematics with Syed Mudasser Anayat
                    </p>
                    <a
                        href="https://www.youtube.com/@RiyaziOnline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
                    >
                        <GraduationCap size={28} />
                        Explore All Courses
                    </a>
                </div>
            </section>
        </div>
        </>
    );
}

