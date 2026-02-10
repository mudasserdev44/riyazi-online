import { mathFormulas, totalFormulasCount } from "@/utils/data/formulas";
import { BookOpen, Download, FileText, Search, Calculator, Sparkles, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Class 11 Mathematics Formulas - Complete Chapter-wise Formula Sheets",
  description: "Download comprehensive Class 11 Mathematics formula sheets in PDF. Complete formulas for Sets, Matrices, Trigonometry, Probability, and all chapters. Free download available.",
  keywords: [
    "class 11 math formulas",
    "mathematics formulas pdf",
    "sets functions groups formulas",
    "matrices determinants formulas",
    "trigonometry formulas class 11",
    "probability formulas",
    "sequence series formulas",
    "complex numbers formulas",
    "math formulas download",
    "riyazi online formulas"
  ],
  openGraph: {
    title: "Class 11 Mathematics Formulas - Riyazi Online",
    description: "Complete chapter-wise formula sheets for Class 11 Mathematics. Free PDF downloads available.",
    url: "https://www.riyazi.online/formulas-class-11",
    images: [
      {
        url: "/og-formulas.jpg",
        width: 1200,
        height: 630,
        alt: "Class 11 Mathematics Formulas - Riyazi Online"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://www.riyazi.online/formulas-class-11"
  }
};

export default function FormulasPage() {
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
                "name": "Formulas",
                "item": "https://www.riyazi.online/formulas-class-11"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Class 11 Mathematics Formulas",
            "description": "Complete chapter-wise formula sheets for Class 11 Mathematics",
            "numberOfItems": mathFormulas.length,
            "itemListElement": mathFormulas.map((chapter, index) => ({
              "@type": "LearningResource",
              "position": index + 1,
              "name": chapter.title,
              "description": chapter.description,
              "learningResourceType": "Formula Sheet",
              "educationalLevel": "Grade11",
              "url": `https://www.riyazi.online/formulas-class-11/${chapter.slug}`,
              "provider": {
                "@type": "Organization",
                "name": "Riyazi Online"
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-200 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-300 to-blue-300 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-teal-100">
                <Sparkles className="text-teal-600" size={20} />
                <span className="text-teal-600 font-semibold">{totalFormulasCount}+ Essential Formulas</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                CLASS 11<br />
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  MATH FORMULAS
                </span>
              </h1>

              <div className="w-32 h-1.5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mx-auto rounded-full"></div>

              <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                Complete chapter-wise formula sheets for Class 11 Mathematics. Download comprehensive PDFs with all essential formulas, equations, and identities.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    {mathFormulas.length}
                  </div>
                  <div className="text-gray-600 font-medium mt-1">Chapters</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {totalFormulasCount}+
                  </div>
                  <div className="text-gray-600 font-medium mt-1">Formulas</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-gray-600 font-medium mt-1">Free Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search formulas or chapters (e.g., trigonometry, matrices, probability)..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm text-lg"
              />
            </div>
          </div>
        </section>

        {/* Formulas Grid Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Chapter-wise Formula Sheets</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Comprehensive PDF formula sheets for all Class 11 Mathematics chapters. Click on any chapter to view and download the complete formulas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mathFormulas.map((chapter, index) => {
                const gradients = [
                  "from-teal-500 to-cyan-500",
                  "from-blue-500 to-indigo-500",
                  "from-purple-500 to-pink-500",
                  "from-green-500 to-emerald-500",
                  "from-orange-500 to-yellow-500",
                  "from-rose-500 to-red-500"
                ];

                const gradient = gradients[index % gradients.length];

                return (
                  <Link href={`/formulas-class-11/${chapter.slug}`} key={chapter.id}>
                    <div className="group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-200 h-full">
                      {/* Decorative gradient header */}
                      <div className={`h-3 bg-gradient-to-r ${gradient}`}></div>

                      <div className="p-8">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Calculator className="text-white" size={32} />
                        </div>

                        {/* Content */}
                        <p className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                          Unit {chapter.unit}:
                          </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                           {chapter.title}
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {chapter.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-2">
                            <FileText size={16} />
                            <span>{chapter.formulasCount} Formulas</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} />
                            <span>{chapter.difficulty}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all">
                          <span>View Formulas</span>
                          <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
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

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full font-semibold mb-6 w-fit">
                    <Sparkles size={16} />
                    <span>Why Use Our Formula Sheets?</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Master Mathematics with Comprehensive Formulas
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Our formula sheets are carefully curated to include all essential formulas, identities, and equations you need for Class 11 Mathematics exams and beyond.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">All essential formulas in one place</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">Free PDF downloads available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">Perfect for exam preparation</span>
                    </li>
                  </ul>
                </div>

                {/* Right Visual */}
                <div className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 p-12 lg:p-16 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="relative text-center text-white">
                    <div className="text-7xl font-bold mb-4">{totalFormulasCount}+</div>
                    <div className="text-2xl font-semibold mb-2">Essential Formulas</div>
                    <div className="text-lg opacity-90">Ready to Download</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Download All Formula Sheets
            </h2>
            <p className="text-2xl text-teal-100 mb-10">
              Get complete access to all Class 11 Mathematics formulas for free
            </p>
            <Link
              href="#formulas-grid"
              className="inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Download size={28} />
              Explore All Formulas
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}