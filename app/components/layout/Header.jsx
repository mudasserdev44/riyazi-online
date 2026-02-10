'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Topbar from './TopBar';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Lectures', href: '/lectures' },
        // { name: 'Pricing', href: '/pricing' },
        { name: 'Smart Syllabus 9th (ALP)', href: '/alp' },
        { name: 'Smart Syllabus 11th (ALP)', href: '/class-11-alp' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <Topbar />

            <nav className="bg-gradient-to-r from-cyan-100 to-teal-100 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="text-2xl font-bold text-gray-800 tracking-wide">
                                RIYAZI ONLINE
                                <div className="text-xs text-gray-600 font-normal">
                                    ONLINE EDUCATION & LEARNING
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        relative text-gray-600 font-medium transition-all duration-300
                                        ${isActive(link.href)
                                            ? 'text-teal-600 px-4 py-2 border-2 border-teal-500 rounded-lg shadow-[0_0_10px_rgba(20,184,166,0.5)]'
                                            : 'hover:text-teal-600 hover:px-4 hover:py-2 hover:border-2 hover:border-teal-400 hover:rounded-lg hover:shadow-[0_0_15px_rgba(20,184,166,0.6)]'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <a
                                href="https://www.youtube.com/@RiyaziOnline"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-500 text-white px-6 py-3 rounded font-semibold hover:bg-teal-600 transition shadow-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.7)]"
                            >
                                GET CERTIFICATE
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="lg:hidden text-gray-700"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t shadow-sm">
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`
                                        block font-medium transition-all duration-300
                                        ${isActive(link.href)
                                            ? 'text-teal-600 px-4 py-2 border-2 border-teal-500 rounded-lg shadow-[0_0_10px_rgba(20,184,166,0.5)]'
                                            : 'text-gray-700 hover:text-teal-600 hover:px-4 hover:py-2 hover:border-2 hover:border-teal-400 hover:rounded-lg'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://www.youtube.com/@RiyaziOnline"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-teal-500 text-white px-6 py-3 rounded font-semibold text-center hover:bg-teal-600 transition shadow-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.7)]"
                            >
                                GET CERTIFICATE
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}