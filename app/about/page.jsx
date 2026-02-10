import {
    Award,
    BookOpen,
    Target,
    TrendingUp,
    Users,
    Youtube,
    Mail,
    Quote
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { absoluteUrl, buildMetadata, siteConfig } from "@/utils/seo/config";

export const metadata = buildMetadata({
    title: "About Riyazi Online | Syed Mudasser Anayat",
    description:
        "Discover the story of Riyazi Online and founder Syed Mudasser Anayat. Learn how Pakistan's leading Urdu mathematics platform supports 50,000+ students.",
    keywords: [
        "Syed Mudasser Anayat",
        "Riyazi Online founder",
        "Urdu math teacher",
        "Pakistan math education",
        "Riyazi Online team"
    ],
    path: "/about",
    type: "article",
    image: "/team.jpg",
});

const aboutOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: "Riyazi Online - Mathematics in Urdu",
    url: absoluteUrl("/about"),
    logo: absoluteUrl("/logo.png"),
    description:
        "Pakistan's premier Urdu mathematics education platform founded by Syed Mudasser Anayat.",
    founder: {
        "@type": "Person",
        name: "Syed Mudasser Anayat",
        jobTitle: "Founder & Chief Educator",
        description: "Mathematics educator and founder of Riyazi Online",
    },
    sameAs: [siteConfig.socials.youtube, siteConfig.socials.facebook],
    address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
    },
};

export default function AboutPage() {
    return (
        <>
            <Script
                id="about-organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutOrganizationSchema) }}
            />
            <div className="min-h-screen bg-white">
                {/* Hero Section with Image Layout */}
                <section className="relative overflow-hidden">
                    {/* Decorative Background Blobs */}
                    <div className="absolute top-0 right-0 w-1/2 h-full">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-bl-full opacity-80"></div>
                        <div className="absolute bottom-0 right-20 w-64 h-64 bg-pink-200 rounded-full opacity-60"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                    ABOUT<br />RIYAZI ONLINE
                                </h1>
                                <div className="w-32 h-1 bg-indigo-600"></div>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Founded by <strong>Syed Mudasser Anayat</strong>, Riyazi Online is revolutionizing mathematics education in Pakistan by providing high-quality, accessible content in Urdu. We believe every student deserves to understand mathematics in their native language.
                                </p>

                                <button className="bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-indigo-700 transition shadow-lg">
                                    LEARN MORE
                                </button>
                            </div>

                            {/* Right Illustration Section */}
                            <div className="relative">
                                <div className="relative z-10">
                                    {/* Team Illustration Container */}
                                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                        <Image
                                            src="/team.jpg"
                                            alt="Riyazi Online team - Syed Mudasser Anayat and educators"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-2xl opacity-70 z-0"></div>
                                <div className="absolute -top-6 left-10 w-20 h-20 bg-indigo-400 rounded-full opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
                            <div className="w-24 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid lg:grid-cols-5 gap-0">
                                {/* Image Column */}
                                <div className="lg:col-span-2 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-10"></div>
                                    <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8">
                                        <div className="relative">
                                            {/* Profile Image Container */}
                                            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                                                <Image
                                                    src="/founder.jpg"
                                                    alt="Syed Mudasser Anayat - Founder of Riyazi Online"
                                                    width={256}
                                                    height={256}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Decorative rings */}
                                            <div className="absolute -inset-4 border-4 border-indigo-400 rounded-full opacity-30 animate-ping"></div>
                                            <div className="absolute -inset-8 border-2 border-purple-400 rounded-full opacity-20"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                                            Syed Mudasser Anayat
                                        </h3>
                                        <p className="text-xl text-indigo-600 font-semibold">
                                            Founder & Chief Educator
                                        </p>
                                    </div>

                                    <div className="space-y-6 text-gray-700">
                                        <div className="flex gap-4">
                                            <Quote className="text-indigo-500 flex-shrink-0 mt-1" size={32} />
                                            <div className="space-y-4 text-lg leading-relaxed">
                                                <p className="italic text-gray-600">
                                                    "Mathematics should never be a barrier to a student's success. When taught in the language they think in, every student has the potential to excel."
                                                </p>

                                                <p>
                                                    My journey in mathematics education began with a simple observation: brilliant students were struggling not because they couldn't understand mathematics, but because the language of instruction created unnecessary barriers. This realization became the foundation of Riyazi Online.
                                                </p>

                                                <p>
                                                    With over a decade of teaching experience, I've witnessed firsthand how explaining complex mathematical concepts in Urdu transforms confusion into clarity. Today, I'm honored to serve over 50,000 students across Pakistan, making mathematics accessible and enjoyable in their native language.
                                                </p>

                                                <p>
                                                    At Riyazi Online, we don't just teach formulas – we build understanding, confidence, and a genuine love for mathematics. Every video is crafted with the care and attention I would give to my own children's education.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact/Social Links */}
                                        <div className="flex gap-4 pt-6 border-t border-gray-200">
                                            <a
                                                href="https://www.youtube.com/@RiyaziOnline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
                                            >
                                                <Youtube size={20} />
                                                YouTube
                                            </a>
                                            <a
                                                href="mailto:contact@riyazionline.com"
                                                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                                            >
                                                <Mail size={20} />
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Vision Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Mission */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Target className="text-white" size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed pl-20">
                                    To revolutionize mathematics education in Pakistan by providing
                                    high-quality, accessible content in Urdu. We believe every student
                                    deserves to understand mathematics in their native language, breaking
                                    down barriers and building confidence through comprehensive video lessons.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="text-white" size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed pl-20">
                                    To become the premier destination for Urdu mathematics education,
                                    empowering millions of students across Pakistan and beyond. We envision
                                    a future where language is never a barrier to mathematical excellence
                                    and academic success.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Stand For</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Our core values guide everything we do at Riyazi Online
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Value 1 */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-teal-400 transition-all">
                                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                        <BookOpen className="text-white" size={36} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We are committed to delivering the highest quality educational
                                        content, ensuring every lesson is clear, accurate, and engaging.
                                    </p>
                                </div>
                            </div>

                            {/* Value 2 */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-purple-400 transition-all">
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                                        <Users className="text-white" size={36} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We foster a supportive learning environment where students help
                                        each other grow and succeed together.
                                    </p>
                                </div>
                            </div>

                            {/* Value 3 */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-orange-400 transition-all">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                                        <Award className="text-white" size={36} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We measure our success by the success of our students, celebrating
                                        every milestone and achievement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
                            <div className="w-24 h-2 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-12 space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Riyazi Online began with a simple yet powerful idea from founder <strong>Syed Mudasser Anayat</strong>: mathematics education
                                should be accessible in the language students think and dream in. What started
                                as a small YouTube channel has evolved into a comprehensive learning platform
                                serving thousands of students across Pakistan.
                            </p>

                            <p>
                                Syed Mudasser Anayat noticed that many bright students struggled not because they
                                couldn't understand mathematics, but because the language of instruction
                                created an unnecessary barrier. This insight sparked the creation of Riyazi
                                Online, where complex mathematical concepts are explained clearly in Urdu.
                            </p>

                            <p>
                                Today, we're proud to be part of over 50,000 students' educational journeys,
                                helping them discover that mathematics can be both understandable and enjoyable.
                                Every video, every explanation, and every example is crafted with care to ensure
                                our students not just learn, but truly understand.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Ready to Master Mathematics?
                        </h2>
                        <p className="text-2xl text-teal-100 mb-10">
                            Join thousands of students learning with Syed Mudasser Anayat in Urdu
                        </p>
                        <a
                            href="https://www.youtube.com/@RiyaziOnline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <Youtube size={28} />
                            Subscribe to Riyazi Online
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-gray-400 text-lg">
                            © 2024 Riyazi Online. Founded by Syed Mudasser Anayat. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}