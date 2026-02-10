"use client"
import React from 'react'
import { Download, ArrowLeft, FileText, Printer, Calculator, Share2 } from "lucide-react";
import Link from "next/link"
import { mathFormulas } from '@/utils/data/formulas';
const Formulas = ({ chapter }) => {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
              <Link
                  href="/formulas-class-11"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-6 transition-colors"
              >
                  <ArrowLeft size={20} />
                  Back to All Formulas
              </Link>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                          <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                  <Calculator className="text-white" size={24} />
                              </div>
                              <div>
                                  <h1 className="text-3xl font-bold text-gray-900">{chapter.title}</h1>
                                  <p className="text-gray-600">Class 11 Mathematics - {chapter.formulasCount} Essential Formulas</p>
                              </div>
                          </div>
                          <p className="text-gray-600 mt-3 max-w-3xl">{chapter.description}</p>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                          <a
                              href={chapter.pdfUrl}
                              download
                              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                          >
                              <Download size={20} />
                              Download PDF
                          </a>

                          <button
                              onClick={() => window.print()}
                              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                              <Printer size={20} />
                              Print
                          </button>

                          <button
                              onClick={() => navigator.share?.({
                                  title: chapter.title,
                                  text: chapter.description,
                                  url: window.location.href
                              })}
                              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                              <Share2 size={20} />
                              Share
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
                  <div className="flex items-center gap-3">
                      <FileText className="text-teal-600" size={24} />
                      <h3 className="text-lg font-semibold text-gray-900">Formula Sheet Preview</h3>
                  </div>
              </div>

              <div className="h-[calc(100vh-300px)] min-h-[600px]">
                  <iframe
                      src={chapter.pdfUrl}
                      className="w-full h-full border-0"
                      title={`${chapter.title} Formulas PDF`}
                  />
              </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Complete Coverage</h4>
                  <p className="text-gray-600 text-sm">All important formulas and equations from {chapter.title}</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Exam Focused</h4>
                  <p className="text-gray-600 text-sm">Essential for board exam preparation and quick revisions</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">🆓 Free Download</h4>
                  <p className="text-gray-600 text-sm">Download and share with friends for collaborative learning</p>
              </div>
          </div>

          {/* Navigation to other chapters */}
          <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Other Chapters</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mathFormulas
                      .filter(c => c.slug !== chapter.slug)
                      .slice(0, 3)
                      .map(relatedChapter => (
                          <Link
                              key={relatedChapter.id}
                              href={`/formulas/${relatedChapter.slug}`}
                              className="bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
                          >
                              <h4 className="font-semibold text-gray-900 mb-2">{relatedChapter.title}</h4>
                              <p className="text-sm text-gray-600">{relatedChapter.formulasCount} formulas</p>
                          </Link>
                      ))}
              </div>
          </div>
      </div>
  )
}

export default Formulas
