"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-black shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Chorcha Logo"
                            width={61}          // 120px wide
                            height={60}          // auto height ratio অনুযায়ী
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Middle: Menu (Desktop) */}
                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    <li>
                        <Link
                            href="/features"
                            className="hover:text-primary transition-colors"
                        >
                            ফিচারসমূহ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            চর্চা সাফল্য
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            সাবস্ক্রিপশন
                        </Link>
                    </li>
                </ul>

                {/* Right: Sign Up Button (Desktop) */}
                <div className="hidden md:block">
                    <Link
                        href="/signup"
                        className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black px-6 py-4">
                    <ul className="flex flex-col space-y-4 text-white font-medium">
                        <li>
                            <Link
                                href="#home"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                ফিচারসমূহ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                চর্চা সাফল্য
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                সাবস্ক্রিপশন
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-5 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary/90 transition-colors"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
