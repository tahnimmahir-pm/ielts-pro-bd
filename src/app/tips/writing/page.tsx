import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS PRO BD | Writing Tips',
    description: 'Expert tips and strategies for the IELTS Writing test',
};

export default function WritingTipsPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
            {/* All Courses Full-Width Marquee Section */}
            <section className="py-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3 text-center">All Courses</h2>
                    <div className="marquee-container rounded-xl">
                        <div className="marquee-content py-2">
                            {/* Card 1 */}
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop"
                                        alt="Academic Reading"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full uppercase">Advanced</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Academic Reading</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                                        alt="Speaking Module"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full uppercase">Beginner</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Speaking Module</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
                                        alt="Writing Task 1 & 2"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full uppercase">All Levels</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Writing Task 1 &amp; 2</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1557133373-2efaad0bd50a?q=80&w=600&auto=format&fit=crop"
                                        alt="Listening Mastery"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full uppercase">Advanced</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Listening Mastery</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop"
                                        alt="Academic Reading"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full uppercase">Advanced</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Academic Reading</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                                        alt="Speaking Module"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full uppercase">Beginner</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Speaking Module</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
                                        alt="Writing Task 1 & 2"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full uppercase">All Levels</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Writing Task 1 &amp; 2</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[200px] shrink-0 mx-2 group bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                                    <img src="https://images.unsplash.com/photo-1557133373-2efaad0bd50a?q=80&w=600&auto=format&fit=crop"
                                        alt="Listening Mastery"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full uppercase">Advanced</span>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white line-clamp-1">Listening Mastery</h3>
                                    <div className="flex gap-2">
                                        <Link href="#" className="flex-1 bg-secondary text-white py-1.5 rounded-lg text-center text-xs font-bold hover:bg-sky-600 transition-all">View</Link>
                                        <Link href="#" className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-center text-xs font-bold hover:border-primary hover:text-primary transition-all">Enroll</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Header / Hero Section */}
            <section className="bg-primary/5 py-12 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900 dark:text-white">
                    <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Writing <span className="text-violet-600 dark:text-violet-500">Tips &amp; Strategies</span></h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Master the IELTS Writing test. Discover essential patterns, structuring frameworks, and lexical resource tips to achieve a Band 7.0+.
                    </p>
                </div>
            </section>

            {/* Blog Cards Section (4 Columns) */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Writing Tips &amp; <span className="text-violet-600 dark:text-violet-500">Frameworks</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Discover the best frameworks to structure your essays perfectly.</p>
                    </div>
                    <Link href="#" className="text-violet-600 hover:text-violet-700 dark:text-violet-500 font-bold hover:underline flex items-center gap-1 group">
                        View All Tips
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>

                {/* The 4-column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Blog Card 1 */}
                    <Link href="/tips/writing/academic-task-1-graphs" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 flex flex-col h-full">
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Graphs and charts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-violet-600 dark:text-violet-500">schedule</span> 8 min read
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                                    Academic Task 1: Describing Graphs
                                </h3>
                                {/* 1 line Description */}
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    The ultimate guide to reporting trends, comparing data, and selecting key features accurately...
                                </p>
                                {/* Read More Button */}
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 2 */}
                    <Link href="/tips/writing/general-task-1-letters" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img src="https://images.unsplash.com/photo-1596230529625-07cebd08638b?q=80&w=800&auto=format&fit=crop" alt="Writing a letter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-violet-600 dark:text-violet-500">schedule</span> 5 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                                    General Task 1: Mastering Formal Letters
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    Understanding tone: Learn exactly when to be formal, semi-formal, or informal in your letters...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 3 */}
                    <Link href="/tips/writing/task-2-essay-structure" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=800&auto=format&fit=crop" alt="Notepad and pen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-violet-600 dark:text-violet-500">schedule</span> 10 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                                    Task 2: The Perfect Essay Structure
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    Never get stuck staring at a blank page. Copy this 4-paragraph framework used by band 9 scorers...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 4 */}
                    <Link href="/tips/writing/lexical-resource-tips" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" alt="Desk with notes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-violet-600 dark:text-violet-500">schedule</span> 6 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                                    Upgrading Your Lexical Resource
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    Stop using 'good' and 'bad'. Uncover a list of high-level topic vocabulary that guarantees a higher score...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                </div>
            </section>
        </div>
    );
}
