'use client'
import { BookOpen, ChevronRight, Download, FileText, GraduationCap, Home, Sparkles } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const ALPClient = () => {
    const pdfUrl = "/class-9-smart-syllabus-2025-2026.pdf";
    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };
  return (
      <div className="min-h-screen bg-white">
          {/* Breadcrumb Navigation */}
          <nav className="bg-white border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex items-center gap-2 text-sm">
                      <Link href="/" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-1">
                          <Home size={16} />
                          <span>Home</span>
                      </Link>
                      <ChevronRight size={16} className="text-gray-400" />
                      <Link href="/smart-syllabus" className="text-gray-500 hover:text-teal-600 transition-colors">
                          Smart Syllabus
                      </Link>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="text-gray-900 font-semibold">Class 9 (2025-2026)</span>
                  </div>
              </div>
          </nav>

          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full opacity-40 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                  <div className="text-center space-y-8">
                      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-teal-100">
                          <Sparkles className="text-teal-600" size={20} />
                          <span className="text-teal-600 font-semibold">Updated for 2025-2026</span>
                      </div>

                      <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                          CLASS 9<br />
                          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                              SMART SYLLABUS
                          </span>
                      </h1>

                      <div className="w-32 h-1.5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mx-auto rounded-full"></div>

                      <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                          Complete smart syllabus for <strong>Class 9 all subjects</strong> as per <strong>Punjab Board</strong> curriculum.
                          Download the PDF to prepare effectively for your exams.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                          <p
                              onClick={handleDownload}
                              className="cursor-pointer inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-2xl"
                          >
                              <Download size={24} />
                              Download PDF
                          </p>
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

          {/* PDF Viewer Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                          Preview Syllabus
                      </h2>
                      <p className="text-gray-600 text-lg">
                          View the complete syllabus online before downloading
                      </p>
                  </div>

                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                              <FileText className="text-white" size={32} />
                              <div className="text-center sm:text-left">
                                  <h3 className="text-white font-bold text-xl">Class 9 Smart Syllabus</h3>
                                  <p className="text-cyan-100 text-sm">Academic Year 2025-2026 • All Subjects</p>
                              </div>
                          </div>
                          <p
                              onClick={handleDownload}
                              className="cursor-pointer flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all"
                          >
                              <Download size={20} />
                              Download
                          </p>
                      </div>

                      {/* PDF Viewer Container */}
                      <div className="relative bg-gray-50" style={{ height: '800px' }}>
                          <iframe
                              src={`${pdfUrl}#toolbar=0`}
                              className="w-full h-full"
                              title="Class 9 Smart Syllabus 2025-2026 PDF"
                              style={{ border: 'none' }}
                          />
                          {/* Fallback for browsers that don't support PDF viewer */}
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-0 hover:opacity-0 pointer-events-none">
                              <div className="text-center p-8">
                                  <FileText className="mx-auto text-gray-400 mb-4" size={64} />
                                  <p className="text-gray-600 mb-4">PDF viewer not supported in your browser</p>
                                  <p
                                      onClick={handleDownload}
                                      className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all pointer-events-auto"
                                  >
                                      <Download size={20} />
                                      Download PDF Instead
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <GraduationCap size={80} className="mx-auto text-white mb-6" />
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Start Your Preparation Today
                  </h2>
                  <p className="text-xl text-cyan-100 mb-10">
                      Download the complete syllabus and plan your studies effectively
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <p
                          onClick={handleDownload}
                          className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
                      >
                          <Download size={28} />
                          Download Syllabus PDF
                      </p>
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

          {/* Footer Note */}
          <section className="py-12 bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-gray-400 text-lg mb-2">
                      © 2025 Riyazi Online. Curated by Syed Mudasser Anayat.
                  </p>
                  <p className="text-gray-500">
                      Smart Syllabus based on Punjab Board curriculum for Class 9 - All Subjects
                  </p>
              </div>
          </section>
      </div>
  )
}

export default ALPClient
