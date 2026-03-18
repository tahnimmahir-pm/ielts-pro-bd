

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    await params;
    return (
        <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
            {/* Top Dark Header Section */}
            <section className="bg-[#0b1120] text-white pt-12 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left 2/3 Content */}
                        <div className="lg:col-span-2 relative z-10">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                                IELTS Full Preparation Masterclass
                            </h1>
                            <div className="flex items-center gap-2 mb-6 text-sm">
                                <div className="flex text-amber-400">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                                </div>
                                <span className="text-slate-300 font-medium">(70.0% students gave 5 rating)</span>
                            </div>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                                A comprehensive IELTS Academic preparation program covering Listening, Reading, Writing, and Speaking without any coding knowledge needed! Master every trick directly. Besides learning, know everything about higher study strategies inside this course.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="pb-24 -mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

                        {/* Left Main Column (2/3 width) */}
                        <div className="lg:col-span-2">

                            {/* Sticky Navigation Tab */}
                            <div className="bg-white dark:bg-slate-800 rounded-full shadow-md px-6 py-3 mb-10 overflow-x-auto border border-slate-100 dark:border-slate-700 flex items-center gap-8 whitespace-nowrap scrollbar-hide">
                                <a href="#instructor" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors py-2 border-b-2 border-transparent">
                                    Course Instructor
                                </a>
                                <a href="#organization" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2 border-b-2 border-transparent">
                                    How it&apos;s Organized
                                </a>
                                <a href="#learning" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2 border-b-2 border-transparent">
                                    What You&apos;ll Learn
                                </a>
                                <a href="#details" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2 border-b-2 border-transparent">
                                    Course Details
                                </a>
                            </div>

                            {/* Course Instructor Section */}
                            <div id="instructor" className="mb-12 scroll-mt-32">
                                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">Course Instructor</h2>
                                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <Image src="https://ui-avatars.com/api/?name=Hasan+Mahmud&background=0D8ABC&color=fff&size=200" alt="Instructor" className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-700 shadow-md flex-shrink-0 object-cover" width={600} height={400} />
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Hasan Mahmud</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Founder of IELTS PRO BD | Ex-British Council Examiner</p>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                                <span className="material-symbols-outlined text-[18px] text-primary hidden sm:block">school</span>
                                                <span>Taught 1,00,000+ Students Internationally</span>
                                            </li>
                                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                                <span className="material-symbols-outlined text-[18px] text-primary hidden sm:block">work</span>
                                                <span>Works with top university candidates personally</span>
                                            </li>
                                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                                <span className="material-symbols-outlined text-[18px] text-primary hidden sm:block">campaign</span>
                                                <span>Senior Instructor at IELTS PRO BD</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* How Course is Organized Section */}
                            <div id="organization" className="mb-12 scroll-mt-32">
                                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">How course is organized</h2>
                                <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative border border-slate-800">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent pointer-events-none"></div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-500 flex flex-shrink-0 items-center justify-center">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">70+ Hands-on Video Lectures</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">Starting from basics to advanced, various types of question solving strategies</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-500 flex flex-shrink-0 items-center justify-center">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">Premium Study Materials</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">Application of premium resources for individual skill improvement</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex flex-shrink-0 items-center justify-center">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">Facebook Support Group</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">Expert solutions for any course-related problems via Facebook Support Group</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex flex-shrink-0 items-center justify-center">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">Problem Solving Live Class</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">Opportunity to directly solve problems with expert teachers in Zoom Live classes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What you will learn */}
                            <div id="learning" className="mb-12 scroll-mt-32">
                                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">What you will learn</h2>
                                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-10 shadow-sm">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                                        {[
                                            "Master 10 different types of Reading question strategies from scratch",
                                            "Build your own vocabulary bank using the most popular Cambridge techniques",
                                            "Grammar structure for High Scoring Writing Tasks mapping",
                                            "Easy ways to write content utilizing AI tools for self-correction",
                                            "Listening mock tests and real-time audio script analysis",
                                            "Fluency & Pronunciation guide for Speaking component"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-[20px] text-blue-500 flex-shrink-0 pt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Right Sidebar (Floating Card) */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden sticky top-28 z-20">
                                {/* Video Thumbnail Section */}
                                <div className="relative w-full aspect-video bg-slate-900 group cursor-pointer border-b border-slate-100 dark:border-slate-700 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Course Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" width={600} height={400} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-emerald-500 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                        </div>
                                    </div>
                                    {/* 'NEW' banner from image */}
                                    <div className="absolute top-0 left-0 overflow-hidden w-24 h-24">
                                        <div className="bg-red-600 text-white text-[10px] font-black uppercase py-1 w-32 tracking-widest text-center transform -rotate-45 -translate-x-8 translate-y-3 shadow-md absolute">
                                            NEW
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Media Carousel below video */}
                                <div className="flex gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 justify-center">
                                    {/* Thumbs mimicking the reference ui */}
                                    <div className="w-12 h-8 rounded border-2 border-emerald-500 overflow-hidden relative opacity-100 cursor-pointer">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="thumb1" className="w-full h-full object-cover" width={600} height={400} />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-12 h-8 rounded bg-slate-200 dark:bg-slate-700 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-500 overflow-hidden opacity-60 hover:opacity-100 cursor-pointer flex items-center justify-center">
                                        <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                                    </div>
                                    <div className="w-12 h-8 rounded bg-slate-200 dark:bg-slate-700 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-500 overflow-hidden opacity-60 hover:opacity-100 cursor-pointer flex items-center justify-center text-[10px] font-bold text-slate-500">
                                        PDF
                                    </div>
                                    <div className="w-12 h-8 rounded border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-500 overflow-hidden relative opacity-60 hover:opacity-100 cursor-pointer">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="thumb2" className="w-full h-full object-cover" width={600} height={400} />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8">
                                    {/* Pricing */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1.5 text-slate-900 dark:text-white">
                                            <span className="text-2xl font-black">৳</span>
                                            <span className="text-4xl font-black tracking-tight">2500</span>
                                        </div>
                                    </div>

                                    {/* Enroll Button */}
                                    <Link href="/subscription-payment" className="w-full py-3.5 bg-primary hover:bg-rose-700 text-white rounded-md font-bold text-lg transition-colors shadow-lg shadow-primary/30 mb-8 flex items-center justify-center cursor-pointer">
                                        কোর্সটি কিনুন
                                    </Link>

                                    {/* Course Include Section */}
                                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-5 text-[17px]">এই কোর্সে যা থাকছে</h4>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">groups</span>
                                            <span>কোর্সটি করছেন ৭১৬ জন</span>
                                        </li>
                                        <li className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                            <span>সময়সীমা ৩০ ঘণ্টা</span>
                                        </li>
                                        <li className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">play_circle</span>
                                            <span>৭০টি ভিডিও</span>
                                        </li>
                                        <li className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                                            <span>৩টি প্রিমিয়াম মক টেস্ট</span>
                                        </li>
                                        <li className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">schedule</span>
                                            <span>কোর্সের মেয়াদ আজীবন</span>
                                        </li>
                                    </ul>

                                    <hr className="border-slate-100 dark:border-slate-700 mb-6" />

                                    {/* Help footer */}
                                    <div className="flex items-center justify-between text-[11px] font-bold">
                                        <span className="text-slate-400">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                                        <a href="tel:16910" className="flex items-center gap-1 text-emerald-500 hover:text-emerald-600 underline underline-offset-4 decoration-emerald-500/30">
                                            <span className="material-symbols-outlined text-[14px]">call</span>
                                            ফোন করুন (16910)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
