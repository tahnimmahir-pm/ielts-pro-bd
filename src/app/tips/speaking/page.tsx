import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS PRO BD | Speaking Tips',
    description: 'Expert tips and strategies for the IELTS Speaking test',
};

export default function SpeakingTipsPage() {
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
                                    <Image src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop" alt="Academic Reading" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" alt="Speaking Module" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" alt="Writing Task 1 & 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop" alt="Listening Mastery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop" alt="Academic Reading" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" alt="Speaking Module" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" alt="Writing Task 1 & 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                                    <Image src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop" alt="Listening Mastery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
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
                    <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">Speaking <span className="text-amber-500">Tips &amp; Strategies</span></h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Speak with confidence. Learn how to expand your answers, maintain fluency, and impress the examiner in all three parts of the IELTS Speaking test.
                    </p>
                </div>
            </section>

            {/* Blog Cards Section (4 Columns) */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Speaking Tips &amp; <span className="text-amber-500">Tricks</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Discover the best strategies for natural conversation and high scores.</p>
                    </div>
                    <Link href="#" className="text-amber-500 font-bold hover:underline flex items-center gap-1 group">
                        View All Tips
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>

                {/* The 4-column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Blog Card 1 */}
                    <Link href="/tips/speaking/part-1-small-talk" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 flex flex-col h-full">
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop" alt="Small talk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500">schedule</span> 4 min read
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                                    Part 1: Acing the Small Talk
                                </h3>
                                {/* 1 line Description */}
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    How to give natural, expanded answers to simple questions about your hometown, hobbies, and life...
                                </p>
                                {/* Read More Button */}
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-500 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 2 */}
                    <Link href="/tips/speaking/part-2-cue-card-monologue" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Group discussion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500">schedule</span> 7 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                                    Part 2: The 2-Minute Monologue
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    The bullet-proof strategy for utilizing your 1 minute of prep time to guarantee 2 minutes of continuous talking...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-500 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 3 */}
                    <Link href="/tips/speaking/part-3-abstract-discussions" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Confident speaking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500">schedule</span> 6 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                                    Part 3: Handling Abstract Topics
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    When the examiner asks about &apos;society&apos; and &apos;the future&apos;, here is how to use frameworks to build a complex answer...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-500 transition-colors">
                                        Read more
                                        <span className="material-symbols-outlined text-[18px]">east</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Card 4 */}
                    <Link href="/tips/speaking/pronunciation-intonation" className="block h-full group outline-none overflow-visible">
                        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image src="https://images.unsplash.com/photo-1475721025870-2434421b53b8?q=80&w=800&auto=format&fit=crop" alt="Microphone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={600} height={400} />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-amber-500">schedule</span> 5 min read
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                                    Pronunciation vs. Accent
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-1">
                                    You don&apos;t need a British or American accent for a Band 9. Discover what &apos;Intonation&apos; and &apos;Word Stress&apos; actually mean...
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-500 transition-colors">
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
