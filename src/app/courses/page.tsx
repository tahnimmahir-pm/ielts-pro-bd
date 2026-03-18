import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS PRO BD | Pricing Plans',
    description: 'Choose the Right Plan for Your Success in IELTS',
};

export default function CoursesPage() {
    return (
        <>
            <header className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-blue-50 dark:from-slate-900 dark:to-slate-900 -z-10">
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Choose the Right Plan for Your <br />
                        <span className="text-primary underline decoration-amber-400">Success in IELTS</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Get access to authentic mock tests, AI-powered feedback, and expert-curated materials designed to boost
                        your score efficiently.
                    </p>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24 relative z-10">
                {/* Unlimited Practice Plans */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Unlimited Practice Plans</h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400">Master every section with unlimited access to high-quality materials</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mb-32 overflow-visible">
                    {/* 1 Week Plan */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0">
                            <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                Save BDT 250</div>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Unlimited — 1 Week</h3>

                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Unlimited Full Mocks for 1 Week</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Practice Full Mock Tests Whenever</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Instant auto-score (L/R) + add-on evaluation</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Analytics &amp; band score report</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Progress tracking &amp; charts</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Weak area tips &amp; guidance</span>
                            </li>
                        </ul>
                        <div className="mb-8">
                            <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                <div className="flex items-baseline gap-1 md:gap-2">
                                    <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 750</span>
                                    <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 500</span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ week</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 1 Week</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                            <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                        </div>
                    </div>

                    {/* 2 Weeks Plan */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0">
                            <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                Save BDT 250</div>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Unlimited — 2 Weeks</h3>

                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Unlimited Full Mocks for 2 Weeks</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Practice Full Mock Tests Whenever</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Instant auto-score (L/R) + add-on evaluation</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Analytics &amp; band score report</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Progress tracking &amp; charts</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Weak area tips &amp; guidance</span>
                            </li>
                        </ul>
                        <div className="mb-8">
                            <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 1000</span>
                                    <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 375</span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ week</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 2 Weeks</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                            <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                        </div>
                    </div>

                    {/* 1 Month Plan */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border-4 border-primary shadow-2xl relative overflow-hidden flex flex-col scale-105 z-20 hover:scale-[1.07] transition-all duration-500">
                        <div className="absolute top-0 right-0">
                            <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                Save BDT 500</div>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Unlimited — 1 Month</h3>

                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Unlimited Full Mocks for 1 Month</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Practice Full Mock Tests Whenever</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Instant auto-score (L/R) + add-on evaluation</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Analytics &amp; band score report</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Progress tracking &amp; charts</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Weak area tips &amp; guidance</span>
                            </li>
                        </ul>
                        <div className="mb-8">
                            <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                <div className="flex items-baseline gap-1 md:gap-2">
                                    <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 1500</span>
                                    <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 1000</span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ month</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 1 Month</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                            <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/40 hover:-translate-y-1">Enroll</Link>
                        </div>
                    </div>

                    {/* 2 Months Plan */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0">
                            <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                Save BDT 500</div>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Unlimited — 2 Months</h3>

                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Unlimited Full Mocks for 2 Months</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Practice Full Mock Tests Whenever</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Instant auto-score (L/R) + add-on evaluation</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Analytics &amp; band score report</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Progress tracking &amp; charts</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                <span>Weak area tips &amp; guidance</span>
                            </li>
                        </ul>
                        <div className="mb-8">
                            <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 2000</span>
                                    <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 750</span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ month</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 2 Months</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                            <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                        </div>
                    </div>
                </div>

                {/* Section 2: Mock Tests */}
                <div className="space-y-32">
                    {/* Speaking Mock Section */}
                    <div>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Speaking Mock Test</h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400">Personalized feedback with live 1-on-1 sessions</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 max-w-6xl mx-auto overflow-visible">
                            {/* 1 Speaking Mock */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 250</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">1 Speaking Mock</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Live Zoom or In-person</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score 7+ roadmap</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed score each time</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-1 md:gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 750</span>
                                            <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 500</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 1 Month</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>

                            {/* 5 Speaking Mocks */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border-4 border-primary shadow-2xl relative overflow-hidden flex flex-col scale-105 z-20 hover:scale-[1.07] transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 500</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">5 Speaking Mocks</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Live Zoom or In-person</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score 7+ roadmap</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed score each time</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight">BDT 2500</span>
                                            <span className="text-3xl font-black text-primary tracking-tight">BDT 400</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 2m</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/40 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>

                            {/* 10 Speaking Mocks */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 2500</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">10 Speaking Mocks</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Live Zoom or In-person</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score 7+ roadmap</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed score each time</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight">BDT 5000</span>
                                            <span className="text-3xl font-black text-primary tracking-tight">BDT 250</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 3m</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Writing Mock Section */}
                    <div>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Writing Mock Test — By Human</h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400">Expert evaluation of your writing with detailed feedback</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 max-w-6xl mx-auto overflow-visible">
                            {/* 1 Writing Mock */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 250</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">1 Writing Mock</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Expert manual evaluation</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score prediction</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed improvement tips</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-1 md:gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight whitespace-nowrap">BDT 750</span>
                                            <span className="text-3xl font-black text-primary tracking-tight whitespace-nowrap">BDT 500</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase whitespace-nowrap ml-1">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 1 Month</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>

                            {/* 5 Writing Mocks */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border-4 border-primary shadow-2xl relative overflow-hidden flex flex-col scale-105 z-20 hover:scale-[1.07] transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 500</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">5 Writing Mocks</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Expert manual evaluation</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score prediction</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed improvement tips</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight">BDT 2500</span>
                                            <span className="text-3xl font-black text-primary tracking-tight">BDT 400</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 2m</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/40 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>

                            {/* 10 Writing Mocks */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#ff4d4d] text-white text-[10px] font-black px-5 py-2 rounded-bl-3xl shadow-lg uppercase tracking-widest">
                                        Save BDT 2500</div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">10 Writing Mocks</h3>
                                <ul className="space-y-5 mb-10 flex-grow">
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Expert manual evaluation</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Personalized feedback</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Band score prediction</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[22px] text-emerald-500">check_circle</span>
                                        <span>Detailed improvement tips</span>
                                    </li>
                                </ul>
                                <div className="mb-8">
                                    <div className="flex items-baseline justify-between border-b border-slate-50 dark:border-slate-700 pb-4 mb-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-slate-400 line-through font-bold opacity-60 tracking-tight">BDT 5000</span>
                                            <span className="text-3xl font-black text-primary tracking-tight">BDT 250</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">/ per mock</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-2 text-center">
                                        <span className="text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">Validity: 3m</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Link href="/courses/1" className="flex-1 py-4 border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-black text-center transition-all text-sm">Details</Link>
                                    <Link href="/subscription-payment" className="flex-1 py-4 bg-primary hover:bg-rose-700 text-white rounded-full font-black text-center transition-all text-sm shadow-xl shadow-rose-500/30 hover:-translate-y-1">Enroll</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 pb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500 dark:text-slate-400">Everything you need to know about our preparation plans</p>
                </div>
                <div className="space-y-4">
                    <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                            <h3 className="text-lg font-semibold pr-4">Can I upgrade my plan later?</h3>
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            Yes, you can upgrade your plan at any time. The remaining balance of your current plan will be
                            adjusted against the new subscription. Simply contact our support team or go to your dashboard
                            settings.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                            <h3 className="text-lg font-semibold pr-4">What payment methods do you accept?</h3>
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            We accept bKash, Nagad, Rocket, and all major Debit/Credit cards through our secure payment gateway.
                            Cash payments are also accepted at our Dhaka office.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                            <h3 className="text-lg font-semibold pr-4">Is there a refund policy?</h3>
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            We offer a 48-hour no-questions-asked refund policy for all our premium plans. If you are not
                            satisfied with our content, we will return your money.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                            <h3 className="text-lg font-semibold pr-4">Do the mock tests follow the latest IELTS format?</h3>
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            Absolutely. All our mock tests are updated regularly to match the current IELTS Computer-Delivered
                            and Paper-Based exam patterns.
                        </div>
                    </details>
                </div>
            </section>
        </>
    );
}
