import { lectures } from "@/utils/data/lectures";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ChevronRight, Home, PlayCircle, Clock, FileText } from "lucide-react";

export async function generateStaticParams() {
    return lectures.map((subj) => ({
        classSubject: subj.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { classSubject } = resolvedParams;

    const subj = lectures.find((s) => s.slug === classSubject);
    if (!subj) {
        return { title: "Subject Not Found" };
    }

    // Extract readable class info from slug for better SEO
    const classInfo = classSubject.replace(/-/g, ' ');

    // Strongly optimize the Class 9 Exercise 12.1 course page for queries
    // like "class 9 math exercise 12.1" (with and without the word "lecture")
    if (classSubject === "class-9-math-unit-12-12.1") {
        const basePhrase = "Class 9 Math Exercise 12.1";
        return {
            title: `${basePhrase} | Unit 12 Complete Solutions in Urdu`,
            description: `${basePhrase} full video solutions in Urdu with step-by-step explanations for all short and long questions of Unit 12, Exercise 12.1.`,
            keywords: [
                basePhrase,
                `${basePhrase} solution`,
                `${basePhrase} question 1 to 8`,
                `${basePhrase} in Urdu`,
                `${basePhrase} lecture`,
                "class 9 math unit 12 exercise 12.1",
                "9th class math exercise 12.1",
                "class 9 mathematics exercise 12.1 solved",
                classInfo,
            ],
            openGraph: {
                title: `${basePhrase} - Complete Urdu Solutions`,
                description: `${basePhrase} solved in detail with clear Urdu explanation and step-by-step working.`,
                url: `https://www.riyazi.online/lectures/${classSubject}`,
                type: "website"
            },
            alternates: {
                canonical: `https://www.riyazi.online/lectures/${classSubject}`
            }
        };
    }

    return {
        title: `${subj.title} - Complete Video Lectures & Solutions`,
        description: `Learn ${subj.title} with ${subj.exercises.length} comprehensive video lectures. Step-by-step solutions for all exercises and topics. Watch detailed explanations by Syed Mudasser Anayat. Perfect for exam preparation and concept mastery.`,
        keywords: [
            subj.title,
            classInfo,
            `${classInfo} video lectures`,
            `${classInfo} complete course`,
            `${classInfo} all exercises`,
            `${classInfo} solutions`,
            "mathematics video lectures",
            "math course",
            "step by step math",
            "complete mathematics",
            "exam preparation"
        ],
        openGraph: {
            title: `${subj.title} - Complete Course`,
            description: `${subj.exercises.length} video lectures covering all topics in ${subj.title}. Step-by-step explanations and solutions.`,
            url: `https://www.riyazi.online/lectures/${classSubject}`,
            type: "website"
        },
        alternates: {
            canonical: `https://www.riyazi.online/lectures/${classSubject}`
        }
    };
}

export default async function SubjectPage({ params }) {
    const resolvedParams = await params;
    const { classSubject } = resolvedParams;

    const subj = lectures.find((s) => s.slug === classSubject);
    if (!subj) {
        notFound();
    }

    const gradients = [
        "from-teal-500 to-cyan-500",
        "from-purple-500 to-pink-500",
        "from-indigo-500 to-blue-500",
        "from-orange-500 to-yellow-500",
        "from-rose-500 to-red-500",
        "from-emerald-500 to-teal-500"
    ];

    const subjectIndex = lectures.findIndex((s) => s.slug === classSubject);
    const gradient = gradients[subjectIndex % gradients.length];

    // Extract readable class info
    const classInfo = classSubject.replace(/-/g, ' ');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": subj.title,
                        "description": `${subj.description} Complete video course with ${subj.exercises.length} lessons covering all topics and exercises.`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Riyazi Online",
                            "sameAs": "https://www.riyazi.online"
                        },
                        "instructor": {
                            "@type": "Person",
                            "name": "Syed Mudasser Anayat"
                        },
                        "inLanguage": "ur",
                        "numberOfLessons": subj.lessons,
                        "timeRequired": subj.duration,
                        "educationalLevel": "Secondary Education",
                        "courseCode": classSubject,
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "online",
                            "courseWorkload": subj.duration
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "PKR",
                            "availability": "https://schema.org/InStock"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "5000",
                            "bestRating": "5"
                        },
                        "hasPart": subj.exercises.map((ex, index) => ({
                            "@type": "LearningResource",
                            "name": ex.title,
                            "position": index + 1,
                            "learningResourceType": "Video",
                            "url": `https://www.riyazi.online/lectures/${classSubject}/${ex.slug}`
                        }))
                    })
                }}
            />

            {/* Breadcrumb Schema */}
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
                                "name": "Mathematics Lectures",
                                "item": "https://www.riyazi.online/lectures"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": subj.title,
                                "item": `https://www.riyazi.online/lectures/${classSubject}`
                            }
                        ]
                    })
                }}
            />

            {/* ItemList Schema for exercises */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": `${subj.title} - All Topics and Exercises`,
                        "description": `Complete list of video lectures for ${subj.title}`,
                        "numberOfItems": subj.exercises.length,
                        "itemListElement": subj.exercises.map((ex, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "VideoObject",
                                "name": ex.title,
                                "url": `https://www.riyazi.online/lectures/${classSubject}/${ex.slug}`,
                                "description": `Video lecture on ${ex.title}`
                            }
                        }))
                    })
                }}
            />

            <div className="min-h-screen bg-white">
                {/* Breadcrumb Navigation */}
                <nav className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
                                <Home size={16} />
                                <span>Home</span>
                            </Link>
                            <ChevronRight size={16} className="text-gray-400" />
                            <Link href="/lectures" className="text-gray-500 hover:text-indigo-600 transition-colors">
                                Lectures
                            </Link>
                            <ChevronRight size={16} className="text-gray-400" />
                            <span className="text-gray-900 font-semibold">{subj.title}</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-20 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                        <div className="max-w-4xl">
                            {/* Course Badge */}
                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white px-5 py-2 rounded-full font-semibold mb-6 shadow-lg`}>
                                <BookOpen size={18} />
                                <span>Complete Course</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {subj.title}
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                {subj.description}
                            </p>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Master all topics with step-by-step video explanations.
                                Perfect for students preparing for exams and building strong mathematical foundations.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md border border-gray-100">
                                    <PlayCircle className="text-indigo-600" size={20} />
                                    <span className="text-gray-700">
                                        <strong className="text-gray-900">{subj.lessons}</strong> Video Lessons
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md border border-gray-100">
                                    <Clock className="text-indigo-600" size={20} />
                                    <span className="text-gray-700">
                                        <strong className="text-gray-900">{subj.duration}</strong> Duration
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md border border-gray-100">
                                    <FileText className="text-indigo-600" size={20} />
                                    <span className="text-gray-700">
                                        <strong className="text-gray-900">{subj.exercises.length}</strong> Topics & Exercises
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exercises/Topics Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                                All Exercises and Topics
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Choose any topic to watch the complete video lecture with detailed explanations
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subj.exercises.map((ex, index) => {
                                const cardGradients = [
                                    "from-teal-500 to-cyan-500",
                                    "from-purple-500 to-pink-500",
                                    "from-indigo-500 to-blue-500",
                                    "from-orange-500 to-yellow-500",
                                    "from-rose-500 to-red-500",
                                    "from-emerald-500 to-teal-500"
                                ];

                                const hoverBorders = [
                                    "hover:border-teal-300",
                                    "hover:border-purple-300",
                                    "hover:border-indigo-300",
                                    "hover:border-orange-300",
                                    "hover:border-rose-300",
                                    "hover:border-emerald-300"
                                ];

                                const cardGradient = cardGradients[index % cardGradients.length];
                                const hoverBorder = hoverBorders[index % hoverBorders.length];

                                return (
                                    <Link href={`/lectures/${subj.slug}/${ex.slug}`} key={ex.slug}>
                                        <article className={`group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${hoverBorder} h-full`}>
                                            {/* Gradient Top Border */}
                                            <div className={`h-2 bg-gradient-to-r ${cardGradient}`}></div>

                                            <div className="p-6">
                                                {/* Number Badge */}
                                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${cardGradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                    <span className="text-white font-bold text-lg">{index + 1}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                                                    {ex.title}
                                                </h3>

                                                {/* CTA */}
                                                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                                    <span>Watch Lecture</span>
                                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>

                                            {/* Hover Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                About {subj.title} Course
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="mb-4">
                                    This comprehensive course covers all topics in <strong>{subj.title}</strong> with
                                    detailed video explanations. Each lecture is designed to help students understand
                                    concepts thoroughly through step-by-step problem solving.
                                </p>
                                <p className="mb-4">
                                    The course includes <strong>{subj.exercises.length} complete video lectures</strong> covering
                                    all exercises and topics. Whether you're preparing for exams or building a strong foundation
                                    in mathematics, these lectures provide clear explanations and practical examples.
                                </p>
                                <p>
                                    All lectures are taught by <strong>Syed Mudasser Anayat</strong>, featuring complete
                                    solutions with detailed working and explanations. Perfect for self-paced learning and
                                    exam preparation.
                                </p>
                            </div>

                            <div className="mt-8 grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>{subj.exercises.length} video lectures covering all topics</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Step-by-step solutions for all exercises</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Detailed explanations with examples</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Free access to all course content</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Perfect For</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Students preparing for exams</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Self-paced learning at home</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Concept clarification and revision</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">✓</span>
                                            <span>Building strong math foundations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className={`py-20 bg-gradient-to-r ${gradient}`}>
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Start Learning {subj.title} Today
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Master all concepts with our comprehensive video lectures
                        </p>
                        <Link
                            href={`/lectures/${subj.slug}/${subj.exercises[0]?.slug}`}
                            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <PlayCircle size={24} />
                            Start First Lesson
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}