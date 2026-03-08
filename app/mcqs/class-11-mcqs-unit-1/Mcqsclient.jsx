'use client'
import {
    BookOpen,
    ChevronRight,
    Download,
    FileText,
    GraduationCap,
    Home,
    Sparkles,
    CheckSquare,
    Target,
    Trophy,
    ArrowRight
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const MCQsClient = () => {
    // ✅ UPDATE THESE per unit/class page
    const pdfUrl = "/Unit1.pdf";
    const classLabel = "Class 11";
    const subject = "Mathematics";
    const unitLabel = "Unit 1";
    const unitTitle = "Complex Numbers";
    const boardName = "Punjab Board";
    const academicYear = "2025-2026";

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };

    const stats = [
        { icon: <CheckSquare size={24} />, value: "50+", label: "MCQs" },
        { icon: <Target size={24} />, value: "100%", label: "Board-aligned" },
        { icon: <Trophy size={24} />, value: "Free", label: "Download" },
    ];

    const relatedUnits = [
        { label: "Unit 1 – Complex Numbers", href: "/mcqs/class-11-mcqs-unit-1", active: true },
        { label: "Unit 2 – Sets & Functions", href: "/mcqs/class-11-mcqs-unit-2", active: false },
        { label: "Unit 3 – Matrices", href: "/mcqs/class-11-mcqs-unit-3", active: false },
        { label: "Unit 4 – Quadratic Equations", href: "/mcqs/class-11-mcqs-unit-4", active: false },
        { label: "Unit 5 – Partial Fractions", href: "/mcqs/class-11-mcqs-unit-5", active: false },
        { label: "Unit 6 – Sequences & Series", href: "/mcqs/class-11-mcqs-unit-6", active: false },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* ── Breadcrumb ── */}
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                        <Link href="/" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-1">
                            <Home size={16} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={16} className="text-gray-400" />
                        <Link href="/mcqs" className="text-gray-500 hover:text-teal-600 transition-colors">
                            MCQs
                        </Link>
                        <ChevronRight size={16} className="text-gray-400" />
                        <Link href="/mcqs/class-11" className="text-gray-500 hover:text-teal-600 transition-colors">
                            Class 11
                        </Link>
                        <ChevronRight size={16} className="text-gray-400" />
                        <span className="text-gray-900 font-semibold">{subject} – {unitLabel}</span>
                    </div>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                {/* Blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-40 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center space-y-8">

                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-teal-100">
                            <Sparkles className="text-teal-600" size={20} />
                            <span className="text-teal-600 font-semibold">Updated for {academicYear}</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            {classLabel} {subject}<br />
                            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                {unitLabel} MCQs
                            </span>
                        </h1>

                        <p className="text-gray-500 text-lg font-medium tracking-wide uppercase">
                            {unitTitle} · {boardName} · {academicYear}
                        </p>

                        <div className="w-32 h-1.5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mx-auto rounded-full" />

                        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                            Download <strong>free MCQs for {classLabel} {subject} {unitLabel}</strong> as per{' '}
                            <strong>{boardName}</strong> curriculum. Perfectly crafted for exam preparation with
                            answer keys included.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap justify-center gap-6 pt-2">
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow border border-teal-100">
                                    <span className="text-teal-600">{s.icon}</span>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-900 text-lg leading-none">{s.value}</p>
                                        <p className="text-gray-500 text-sm">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button
                                onClick={handleDownload}
                                className="cursor-pointer inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-2xl"
                            >
                                <Download size={24} />
                                Download MCQs PDF – Free
                            </button>
                            <Link
                                href="/lectures"
                                className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 border-2 border-teal-500 px-10 py-5 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all"
                            >
                                <BookOpen size={24} />
                                Watch Video Lectures
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PDF Viewer + Sidebar ── */}
            <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* PDF Viewer */}
                        <div className="flex-1">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                                    Preview MCQs
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    View all MCQs online before downloading
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                {/* PDF Header Bar */}
                                <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <FileText className="text-white" size={32} />
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-white font-bold text-xl">
                                                {classLabel} {subject} – {unitLabel} MCQs
                                            </h3>
                                            <p className="text-cyan-100 text-sm">
                                                {boardName} · Academic Year {academicYear} · With Answer Key
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all"
                                    >
                                        <Download size={20} />
                                        Download
                                    </button>
                                </div>

                                {/* iframe PDF embed */}
                                <div className="relative bg-gray-50" style={{ height: '800px' }}>
                                    <iframe
                                        src={`${pdfUrl}#toolbar=0`}
                                        className="w-full h-full"
                                        title={`${classLabel} ${subject} ${unitLabel} MCQs PDF – ${boardName} ${academicYear}`}
                                        style={{ border: 'none' }}
                                    />
                                    {/* Fallback */}
                                    <noscript>
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                            <div className="text-center p-8">
                                                <FileText className="mx-auto text-gray-400 mb-4" size={64} />
                                                <p className="text-gray-600 mb-4">PDF viewer not supported in your browser</p>
                                                <button
                                                    onClick={handleDownload}
                                                    className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all"
                                                >
                                                    <Download size={20} />
                                                    Download PDF Instead
                                                </button>
                                            </div>
                                        </div>
                                    </noscript>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar – Related Units */}
                        <div className="lg:w-80 shrink-0">
                            <div className="sticky top-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    All Units – {subject}
                                </h3>
                                <div className="space-y-3">
                                    {relatedUnits.map((unit, i) => (
                                        <Link
                                            key={i}
                                            href={unit.href}
                                            className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${unit.active
                                                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-transparent shadow-lg'
                                                : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:shadow-md'
                                                }`}
                                        >
                                            <span className="font-semibold text-sm">{unit.label}</span>
                                            <ArrowRight
                                                size={16}
                                                className={unit.active ? 'text-white' : 'text-gray-400 group-hover:text-teal-500'}
                                            />
                                        </Link>
                                    ))}
                                </div>

                                {/* Download Box */}
                                <div className="mt-8 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                                        Download All Units
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Get all {classLabel} {subject} MCQs in one go — completely free.
                                    </p>
                                    <button
                                        onClick={handleDownload}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-3 rounded-xl font-bold hover:from-teal-600 hover:to-cyan-600 transition-all"
                                    >
                                        <Download size={18} />
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why These MCQs? ── */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Use Our MCQs?
                    </h2>
                    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        Carefully prepared by subject experts following the exact {boardName} pattern.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Target size={36} className="text-teal-600" />,
                                title: "Board-Focused",
                                desc: "Every MCQ is designed to match the exact pattern and difficulty of Punjab Board exams."
                            },
                            {
                                icon: <CheckSquare size={36} className="text-cyan-600" />,
                                title: "Answer Keys Included",
                                desc: "Each PDF comes with detailed answer keys so you can verify and learn efficiently."
                            },
                            {
                                icon: <Trophy size={36} className="text-blue-600" />,
                                title: "100% Free Download",
                                desc: "No signup, no paywall. Just click download and get your MCQs instantly."
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <GraduationCap size={80} className="mx-auto text-white mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Start Practicing Today
                    </h2>
                    <p className="text-xl text-cyan-100 mb-10">
                        Download free MCQs for {classLabel} {subject} and ace your {boardName} exam
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleDownload}
                            className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <Download size={28} />
                            Download MCQs PDF – Free
                        </button>
                        <a
                            href="https://www.youtube.com/@RiyaziOnline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105"
                        >
                            <BookOpen size={28} />
                            Watch Free Lectures
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Footer Note ── */}
            <section className="py-12 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 text-lg mb-2">
                        © 2025 Riyazi Online. Curated by Syed Mudasser Anayat.
                    </p>
                    <p className="text-gray-500">
                        {classLabel} {subject} MCQs based on {boardName} curriculum · {unitLabel} – {unitTitle}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default MCQsClient