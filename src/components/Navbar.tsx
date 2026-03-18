'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3 shrink-0">
                        <Link href="/" className="flex items-center gap-3 shrink-0">
                            <Image
                                alt="IELTS PRO BD Logo"
                                className="h-12 w-12 object-contain"
                                src="/logo.png"
                                width={48}
                                height={48}
                            />
                            <span className="font-bold text-2xl tracking-tight text-primary whitespace-nowrap">
                                IELTS Pro BD
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 font-bold text-slate-700 dark:text-slate-300 h-full whitespace-nowrap">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px] w-[22px] overflow-hidden shrink-0">
                                home
                            </span>
                            Home
                        </Link>
                        <Link
                            href="/listening"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px] w-[22px] overflow-hidden shrink-0">
                                headphones
                            </span>
                            Listening
                        </Link>
                        <Link
                            href="/reading"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px] w-[22px] overflow-hidden shrink-0">
                                menu_book
                            </span>
                            Reading
                        </Link>

                        {/* Full IELTS Practice Tests Dropdown */}
                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
                                Full Mock Test
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180 w-5 overflow-hidden shrink-0 flex justify-center">
                                    expand_more
                                </span>
                            </button>
                            <div className="absolute top-[100%] left-0 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block transition-all z-[100] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link
                                    href="/tests/academic"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <div className="h-10 w-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <span className="font-bold">Academic Test</span>
                                </Link>
                                <Link
                                    href="/tests/general"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <div className="h-10 w-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined">work</span>
                                    </div>
                                    <span className="font-bold">General Training</span>
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/courses"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px] w-[22px] overflow-hidden shrink-0">
                                auto_stories
                            </span>
                            Courses
                        </Link>

                        {/* Tips Dropdown */}
                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
                                Tips
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180 w-5 overflow-hidden shrink-0 flex justify-center">
                                    expand_more
                                </span>
                            </button>
                            <div className="absolute top-[100%] left-0 w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block transition-all z-[100] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link
                                    href="/tips/listening"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[20px] shrink-0">
                                        headphones
                                    </span>
                                    <span className="font-bold">Listening</span>
                                </Link>
                                <Link
                                    href="/tips/reading"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-secondary text-[20px]">
                                        menu_book
                                    </span>
                                    <span className="font-bold">Reading</span>
                                </Link>
                                <Link
                                    href="/tips/writing"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">
                                        edit_note
                                    </span>
                                    <span className="font-bold">Writing</span>
                                </Link>
                                <Link
                                    href="/tips/speaking"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-orange-500 text-[20px]">
                                        record_voice_over
                                    </span>
                                    <span className="font-bold">Speaking</span>
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/#contact"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px] w-[22px] overflow-hidden shrink-0">
                                mail
                            </span>
                            Contact Us
                        </Link>
                    </div>
                    <div className="hidden md:block shrink-0">
                        <Link
                            href="/login"
                            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-[0_10px_20px_-10px_rgba(225,29,72,0.5)] transition-all inline-block hover:-translate-y-1"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center shrink-0">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors focus:outline-none p-2"
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-[100] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Drawer Content */}
                <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col pt-6 pb-8 px-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image src="/logo.png" alt="IELTS PRO BD Logo" className="h-10 w-10 object-contain" width={600} height={400} />
                            <span className="font-bold text-xl tracking-tight text-primary">IELTS Pro BD</span>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 focus:outline-none p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-lg font-bold text-slate-800 dark:text-slate-200">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined w-6 text-center">home</span> Home
                        </Link>
                        <Link href="/listening" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined w-6 text-center">headphones</span> Listening
                        </Link>
                        <Link href="/reading" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined w-6 text-center">menu_book</span> Reading
                        </Link>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Tests</h3>
                            <Link href="/tests/academic" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors mb-4">
                                <span className="material-symbols-outlined w-6 text-center text-primary">school</span> Academic Test
                            </Link>
                            <Link href="/tests/general" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined w-6 text-center text-secondary">work</span> General Training
                            </Link>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <Link href="/courses" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors mb-4">
                                <span className="material-symbols-outlined w-6 text-center">auto_stories</span> Courses
                            </Link>
                            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined w-6 text-center">mail</span> Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-primary text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-primary/30 hover:bg-rose-700 transition-colors"
                        >
                            Enroll Now
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
