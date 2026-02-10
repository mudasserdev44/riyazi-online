import { lectures } from "@/utils/data/lectures";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight, PlayCircle, BookOpen, Clock, ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
    const paramsList = [];
    lectures.forEach((subj) => {
        subj.exercises.forEach((ex) => {
            paramsList.push({
                classSubject: subj.slug,
                exercise: ex.slug,
            });
        });
    });
    return paramsList;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { classSubject, exercise } = resolvedParams;
    const subj = lectures.find((s) => s.slug === classSubject);

    if (!subj) {
        return {
            title: "Lecture Not Found",
            robots: { index: false, follow: false }
        };
    }

    const ex = subj.exercises.find((e) => e.slug === exercise);
    if (!ex) {
        return { title: subj.title };
    }

    const currentIndex = subj.exercises.findIndex((e) => e.slug === exercise);

    // Extract class and exercise info from slugs for better SEO
    const classInfo = classSubject.replace(/-/g, ' ');
    const exerciseInfo = exercise.replace(/-/g, ' ');

    const baseKeywords = [
        ex.title,
        `${exerciseInfo}`,
        `${classInfo} ${exerciseInfo}`,
        subj.title,
        `${exerciseInfo} solution`,
        `${exerciseInfo} video lecture`,
        `${classInfo} mathematics`,
        `${exerciseInfo} complete explanation`,
        "mathematics video lecture",
        "math tutorial",
        "step by step solution"
    ];

    // Extra optimization for Class 9 Math Exercise 12.1 videos
    const enhancedKeywords =
        classSubject === "class-9-math-unit-12-12.1"
            ? [
                ...baseKeywords,
                "Class 9 Math Exercise 12.1",
                "class 9 math exercise 12.1",
                "9th class math exercise 12.1",
                "class 9 mathematics exercise 12.1 solution",
                "class 9 math ex 12.1 in urdu",
            ]
            : baseKeywords;

    const baseTitle = `${ex.title} | ${subj.title} - Complete Video Solution`;
    const baseDescription = `${ex.description} Learn ${ex.title} from ${subj.title}. Step-by-step video explanation by Syed Mudasser Anayat. Lesson ${currentIndex + 1} of ${subj.exercises.length}. Watch complete solution with examples and practice problems.`;

    const title =
        classSubject === "class-9-math-unit-12-12.1"
            ? `Class 9 Math Exercise 12.1 | ${ex.title} - Full Solution in Urdu`
            : baseTitle;

    const description =
        classSubject === "class-9-math-unit-12-12.1"
            ? `Class 9 Math Exercise 12.1 (${ex.title}) solved in Urdu with complete working and explanation. Lesson ${currentIndex + 1} of ${subj.exercises.length} from Unit 12.`
            : baseDescription;

    return {
        title,
        description,
        keywords: enhancedKeywords,
        openGraph: {
            title,
            description,
            url: `https://www.riyazi.online/lectures/${classSubject}/${exercise}`,
            images: [
                {
                    url: `https://img.youtube.com/vi/${ex.youtubeId}/maxresdefault.jpg`,
                    width: 1280,
                    height: 720,
                    alt: `${ex.title} - ${subj.title} Video Lecture`
                }
            ],
            type: "video.other",
            videos: [
                {
                    url: `https://www.youtube.com/watch?v=${ex.youtubeId}`,
                    secureUrl: `https://www.youtube.com/watch?v=${ex.youtubeId}`,
                    type: "text/html",
                    width: 1280,
                    height: 720
                }
            ]
        },
        twitter: {
            card: "player",
            title: `${ex.title} - Complete Solution`,
            description: ex.description,
            images: [`https://img.youtube.com/vi/${ex.youtubeId}/maxresdefault.jpg`],
            players: {
                playerUrl: `https://www.youtube.com/embed/${ex.youtubeId}`,
                streamUrl: `https://www.youtube.com/watch?v=${ex.youtubeId}`,
                width: 1280,
                height: 720
            }
        },
        alternates: {
            canonical: `https://www.riyazi.online/lectures/${classSubject}/${exercise}`
        }
    };
}

export default async function ExercisePage({ params }) {
    const resolvedParams = await params;
    const { classSubject, exercise } = resolvedParams;
    const subj = lectures.find((s) => s.slug === classSubject);
    if (!subj) notFound();
    const ex = subj.exercises.find((e) => e.slug === exercise);
    if (!ex) notFound();

    const embedUrl = `https://www.youtube.com/embed/${ex.youtubeId}`;

    // Find current exercise index for navigation
    const currentIndex = subj.exercises.findIndex((e) => e.slug === exercise);
    const previousExercise = currentIndex > 0 ? subj.exercises[currentIndex - 1] : null;
    const nextExercise = currentIndex < subj.exercises.length - 1 ? subj.exercises[currentIndex + 1] : null;

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

    // Extract readable text for SEO
    const classInfo = classSubject.replace(/-/g, ' ');
    const exerciseInfo = exercise.replace(/-/g, ' ');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": `${ex.title} - ${subj.title}`,
                        "description": `${ex.description} Complete video solution for ${ex.title} from ${subj.title} course. Step-by-step explanation with examples.`,
                        "thumbnailUrl": [
                            `https://img.youtube.com/vi/${ex.youtubeId}/maxresdefault.jpg`,
                            `https://img.youtube.com/vi/${ex.youtubeId}/hqdefault.jpg`
                        ],
                        "uploadDate": "2024-01-01T00:00:00Z",
                        "contentUrl": `https://www.youtube.com/watch?v=${ex.youtubeId}`,
                        "embedUrl": `https://www.youtube.com/embed/${ex.youtubeId}`,
                        "duration": "PT15M",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Riyazi Online",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.riyazi.online/logo.png"
                            }
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Syed Mudasser Anayat"
                        },
                        "inLanguage": "ur",
                        "isPartOf": {
                            "@type": "Course",
                            "name": subj.title,
                            "description": subj.description,
                            "provider": {
                                "@type": "Organization",
                                "name": "Riyazi Online"
                            }
                        },
                        "educationalLevel": "Secondary Education",
                        "learningResourceType": "Video Lecture",
                        "interactionStatistic": {
                            "@type": "InteractionCounter",
                            "interactionType": "https://schema.org/WatchAction",
                            "userInteractionCount": 1000
                        },
                        "about": [
                            {
                                "@type": "Thing",
                                "name": "Mathematics"
                            },
                            {
                                "@type": "Thing",
                                "name": subj.title
                            },
                            {
                                "@type": "Thing",
                                "name": ex.title
                            }
                        ]
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
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": ex.title,
                                "item": `https://www.riyazi.online/lectures/${classSubject}/${exercise}`
                            }
                        ]
                    })
                }}
            />

            {/* Educational Video Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LearningResource",
                        "name": ex.title,
                        "description": ex.description,
                        "educationalLevel": "Secondary Education",
                        "learningResourceType": "Video",
                        "inLanguage": "ur",
                        "teaches": ex.title,
                        "assesses": ex.title,
                        "courseCode": exercise
                    })
                }}
            />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                {/* Breadcrumb Navigation */}
                <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
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
                                <Link href={`/lectures/${subj.slug}`} className="text-gray-500 hover:text-indigo-600 transition-colors">
                                    {subj.title}
                                </Link>
                                <ChevronRight size={16} className="text-gray-400" />
                                <span className="text-gray-900 font-semibold">{ex.title}</span>
                            </div>
                            <Link
                                href={`/lectures/${subj.slug}`}
                                className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                            >
                                <ChevronLeft size={16} />
                                Back to Course
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Video Section - Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Video Player */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                                    <iframe
                                        src={embedUrl}
                                        title={`${ex.title} - ${subj.title} Video Lecture`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Lesson Info */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full font-semibold mb-4 text-sm`}>
                                    <BookOpen size={16} />
                                    <span>Lesson {currentIndex + 1} of {subj.exercises.length}</span>
                                </div>

                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {ex.title}
                                </h1>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <PlayCircle size={18} className="text-indigo-600" />
                                        <span>Video Lesson</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} className="text-indigo-600" />
                                        <span>{subj.duration}</span>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">About this lesson</h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {ex.description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        This video lecture covers <strong>{ex.title}</strong> from <strong>{subj.title}</strong> course.
                                        Watch the complete explanation with step-by-step solutions and examples.
                                        Perfect for students preparing for exams and those who want to master mathematics concepts.
                                    </p>
                                </div>

                                {/* SEO Content Section */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">•</span>
                                            <span>Complete solution for {ex.title}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">•</span>
                                            <span>Step-by-step methodology and problem-solving techniques</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">•</span>
                                            <span>Practice problems with detailed explanations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-indigo-600 mt-1">•</span>
                                            <span>Important concepts from {subj.title}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                {previousExercise ? (
                                    <Link
                                        href={`/lectures/${subj.slug}/${previousExercise.slug}`}
                                        className="flex-1 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl p-6 transition-all hover:shadow-lg group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                                <ChevronLeft className="text-gray-600 group-hover:text-indigo-600" size={20} />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <div className="text-xs text-gray-500 font-medium mb-1">Previous</div>
                                                <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                                    {previousExercise.title}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="flex-1"></div>
                                )}

                                {nextExercise ? (
                                    <Link
                                        href={`/lectures/${subj.slug}/${nextExercise.slug}`}
                                        className="flex-1 bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border-2 border-gray-200 hover:border-transparent rounded-xl p-6 transition-all hover:shadow-lg group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 text-right">
                                                <div className="text-xs text-gray-500 group-hover:text-white/80 font-medium mb-1">Next</div>
                                                <div className="font-semibold text-gray-900 group-hover:text-white transition-colors line-clamp-1">
                                                    {nextExercise.title}
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                                <ChevronRight className="text-gray-600 group-hover:text-white" size={20} />
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="flex-1"></div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar - Course Playlist */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
                                <div className={`bg-gradient-to-r ${gradient} p-6`}>
                                    <h2 className="text-xl font-bold text-white mb-2">Course Content</h2>
                                    <p className="text-white/90 text-sm">{subj.exercises.length} lessons in {subj.title}</p>
                                </div>

                                <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                                    {subj.exercises.map((item, index) => {
                                        const isActive = item.slug === exercise;
                                        return (
                                            <Link
                                                key={item.slug}
                                                href={`/lectures/${subj.slug}/${item.slug}`}
                                                className={`block border-b border-gray-100 transition-all ${isActive
                                                    ? 'bg-indigo-50 hover:bg-indigo-100'
                                                    : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="p-4 flex items-start gap-3">
                                                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${isActive
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'bg-gray-100 text-gray-600'
                                                        }`}>
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className={`font-semibold text-sm mb-1 line-clamp-2 ${isActive ? 'text-indigo-600' : 'text-gray-900'
                                                            }`}>
                                                            {item.title}
                                                        </h3>
                                                        {isActive && (
                                                            <div className="flex items-center gap-1 text-xs text-indigo-600">
                                                                <PlayCircle size={12} />
                                                                <span>Now Playing</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}