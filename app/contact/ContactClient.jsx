'use client';

import {
  Mail,
  MapPin,
  Youtube,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/utils/seo/config";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-white rounded-full opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-4 max-w-3xl mx-auto">
              Have questions about mathematics? Need guidance? We're here to help!
            </p>
            <div className="w-32 h-2 bg-white mx-auto rounded-full opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-teal-600 hover:text-teal-700 font-semibold break-all"
                    >
                      {siteConfig.contactEmail}
                    </a>
                    <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* YouTube Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Youtube className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">YouTube Channel</h3>
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-semibold"
                    >
                      @RiyaziOnline
                    </a>
                    <p className="text-gray-500 text-sm mt-2">500+ video lessons in Urdu</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 font-semibold">Pakistan</p>
                    <p className="text-gray-500 text-sm mt-2">Serving students nationwide</p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-white" size={32} />
                  <h3 className="text-2xl font-bold">Response Time</h3>
                </div>
                <p className="text-indigo-100 text-lg">
                  We typically respond to all inquiries within <span className="font-bold text-white">24 hours</span> during
                  weekdays.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full -ml-24 -mb-24 opacity-50"></div>

                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Your Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                      >
                        <Send size={24} />
                        Send Message
                      </button>
                    </div>

                    {formStatus === "success" && (
                      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="text-green-600" size={24} />
                        <p className="text-green-700 font-semibold">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about Riyazi Online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100">
              <div className="flex gap-4">
                <MessageSquare className="text-teal-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What topics do you cover?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We cover all mathematics topics from basic to advanced levels, including algebra, calculus,
                    geometry, and more - all explained in Urdu.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100">
              <div className="flex gap-4">
                <MessageSquare className="text-purple-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Are the videos free?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! All our YouTube videos are completely free to access. We believe quality education should be
                    accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-orange-100">
              <div className="flex gap-4">
                <MessageSquare className="text-orange-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I request specific topics?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Send us your topic requests via email or YouTube comments, and we'll do our best to
                    create content for them.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border-2 border-indigo-100">
              <div className="flex gap-4">
                <MessageSquare className="text-indigo-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer private tutoring?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For private tutoring inquiries, please email us directly at {siteConfig.contactEmail} with your
                    requirements.
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-cyan-100 mb-10">Join 50,000+ students mastering mathematics in Urdu</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Youtube size={28} />
              Visit Our Channel
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105"
            >
              <Mail size={28} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg mb-2">© 2024 Riyazi Online. Founded by Syed Mudasser Anayat.</p>
          <p className="text-gray-500">Making mathematics accessible in Urdu for every student</p>
        </div>
      </footer>
    </div>
  );
}

