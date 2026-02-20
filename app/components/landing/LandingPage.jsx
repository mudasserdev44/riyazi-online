import { Award, BookOpen, Play, Users, Youtube } from "lucide-react";
import Image from "next/image";

export default function LandingPage () {
    return(
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-cyan-50 to-teal-100">
            <section
                id="home"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="text-teal-600 font-semibold tracking-wide">
                            WELCOME TO RIYAZI ONLINE
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                            Best Online Education Expertise
                        </h1>

                        <p className="text-lg leading-relaxed opacity-90">
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#"
                                className="bg-teal-500 text-white px-8 py-4 rounded font-semibold hover:bg-teal-600 transition inline-flex items-center gap-2"
                            >
                                GET STARTED NOW! →
                            </a>
                            <a
                                href="#courses"
                                className="bg-white text-gray-700 px-8 py-4 rounded font-semibold hover:bg-gray-50 transition inline-flex items-center gap-2"
                            >
                                VIEW COURSE →
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative">
                            {/* Decorative floating elements */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400 rounded-3xl transform -rotate-12 opacity-80"></div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400 rounded-2xl transform rotate-12 opacity-80"></div>
                            <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-60"></div>

                            {/* Main image container */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/main.png"
                                        alt="Student with books"
                                        width={800} // required
                                        height={500} // required
                                        sizes="(max-width: 1024px) 100vw, 800px"
                                        className="w-full h-96 object-cover" // kam height
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative papers */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-56 bg-yellow-300 rounded-2xl transform rotate-6 shadow-lg overflow-hidden">
                                <div className="absolute top-8 left-6 right-6 space-y-2">
                                    <div className="h-2 bg-gray-400 rounded"></div>
                                    <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                                    <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                                </div>
                                <div className="absolute bottom-8 left-6 w-16 h-2 bg-red-500 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="about" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Riyazi Online?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ریاضی کو آسان بنائیں - Learn mathematics in Urdu with expert
                            guidance
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition bg-gradient-to-br from-cyan-50 to-teal-50">
                            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Play className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Quality Content
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive video lessons in Urdu covering all mathematics
                                topics
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition bg-gradient-to-br from-cyan-50 to-teal-50">
                            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Easy Learning
                            </h3>
                            <p className="text-gray-600">
                                Step-by-step explanations that make complex topics simple
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition bg-gradient-to-br from-cyan-50 to-teal-50">
                            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Active Community
                            </h3>
                            <p className="text-gray-600">
                                Join thousands of students learning mathematics together
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition bg-gradient-to-br from-cyan-50 to-teal-50">
                            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Exam Focused
                            </h3>
                            <p className="text-gray-600">
                                Targeted content for school and college examinations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">300+</div>
                            <div className="text-teal-100 text-lg">Video Lessons</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">10K+</div>
                            <div className="text-teal-100 text-lg">Subscribers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">1M+</div>
                            <div className="text-teal-100 text-lg">Total Views</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">100%</div>
                            <div className="text-teal-100 text-lg">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Popular Topics
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Master mathematics with our comprehensive Urdu tutorials
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Algebra",
                            "Geometry",
                            "Calculus",
                            "Trigonometry",
                            "Statistics",
                            "Number Theory",
                        ].map((topic) => (
                            <div
                                key={topic}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                                    {topic}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Complete tutorials and problem solving in Urdu
                                </p>
                                <a
                                    href="https://www.youtube.com/@RiyaziOnline"
                                    className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2"
                                >
                                    Watch Videos →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Start Your Math Journey Today
                    </h2>
                    <p className="text-xl text-teal-100 mb-8">
                        Join our growing community and master mathematics in Urdu
                    </p>
                    <a
                        href="https://www.youtube.com/@RiyaziOnline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg"
                    >
                        <Youtube size={24} />
                        Subscribe to Riyazi Online
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Riyazi Online. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
