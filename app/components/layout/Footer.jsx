import React from 'react';
import { Youtube, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">

                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center">
                                <div className="text-blue-600 font-bold text-lg">R</div>
                            </div>
                            <h3 className="text-xl font-bold text-white">Riyazi Online</h3>
                        </div>

                        <p className="text-sm text-gray-400 mb-4">
                            Empowering students with quality education and unlocking their potential through innovative online learning.
                        </p>

                        <div className="flex space-x-3">
                            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/formulas-class-11" className="text-sm hover:text-blue-400 transition-colors">
                                    Important Formulas
                                </Link>
                            </li>

                            <li>
                                <Link href="/videos" className="text-sm hover:text-blue-400 transition-colors">
                                    Video Library
                                </Link>
                            </li>

                            <li>
                                <Link href="/testimonials" className="text-sm hover:text-blue-400 transition-colors">
                                    Testimonials
                                </Link>
                            </li>

                            <li>
                                <Link href="/blog" className="text-sm hover:text-blue-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/help" className="text-sm hover:text-blue-400 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-sm hover:text-blue-400 transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                                <span className="text-sm">Lahore, Punjab, Pakistan</span>
                            </li>

                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                                <span className="text-sm">smudasser36@gmail.com</span>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h5 className="text-white font-semibold mb-2 text-sm">Subscribe to Newsletter</h5>

                            <div className="flex">
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-800 text-sm px-3 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    suppressHydrationWarning
                                    className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>&copy; 2025 Riyazi Online. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">
                            Made with <span className="text-red-500">❤</span> for students worldwide
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
}
