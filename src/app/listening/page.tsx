import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS PRO BD | Listening',
    description: 'IELTS PRO BD Listening Tests',
};

export default function ListeningPage() {
    return (
        <>
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

            {/* Sidebar Layout: Search+Sort LEFT, Test Cards RIGHT */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* LEFT SIDEBAR: Search + Sort */}
                    <div className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24">
                        {/* Search Bar */}
                        <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-5 card-shadow">
                            <div className="relative flex items-center">
                                <input type="text" placeholder="What are you looking for?"
                                    className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400" />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white rounded-lg transition-all">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </button>
                            </div>
                        </div>

                        {/* Sort Panel */}
                        <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-5 card-shadow">
                            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Sort:</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5">
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300">
                                    <input type="radio" name="sort" value="newest" defaultChecked
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                    <span>Newest</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300">
                                    <input type="radio" name="sort" value="oldest"
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                    <span>Oldest</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300">
                                    <input type="radio" name="sort" value="name-az"
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                    <span>Name A-Z</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300">
                                    <input type="radio" name="sort" value="name-za"
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                    <span>Name Z-A</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300 col-span-2">
                                    <input type="radio" name="sort" value="most-viewed"
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                    <span>Most viewed</span>
                                </label>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full bg-secondary hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">search</span> Search
                                </button>
                                <button className="w-full bg-primary hover:bg-rose-600 text-white font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">restart_alt</span> Reset
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: Test Cards */}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-8">
                            IELTS <span className="text-primary">Listening</span> Tests
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrzBRlRg6xC1deSAoe5YcqEvBZyufOQkM1TN0UqBtxldsHQU88It70n7xaJGrkGwYYbeSfpiHTRYBcalKvtgmrURNsh9m2AqVotvcr-wxGYgQtuiYYRuQM-EfFmvLJgVcca4hWxXXjXDhUzX8Jbm4s9--3ETEp1wBOvNkAHAZzQ4venqRNFSD_Molanp1A8ldGlNqdMw0wvtSfOECtAkd6f6FUOg8vSzM1k6Df9EJqz2tBGHDeJZqgvQU9aViKrGRo7pFg-6OFjgo1" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Beginner</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Academic Listening Test: Campus Life Basics</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMNw7TRHceN0U0BovNRIIBzr5pD-4rNFSSev9eDS2Fi8uGLRbZ7ZPYl0gXVOq32-TYzl2Baq81UXe2Pnlvptj8mSW_EZgmSPi5h0bcs1UwiZdObdrpXJboA-5YQGlcB5JqWCDtfwKRZs7EJXPopKCmIK3N7neLqdUDy44TuPV5SS3ceL8aHpc-yv95sYHRY4Y4ezrDDu2lPcXgIaa_f-Gl6BSsOKYdrXumV0gyqxaccPLpqfCyN-tVJpCMLXX11LS4rgTBLTv2odG_" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Intermediate</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Workplace Communication &amp; Meetings</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEDIFOmR4APASlfPd7wvk40nrmwRBDUW5T60iMOACKzr0-ISMmoqm2kNuFUhDM6SY68dG-0akRztStFqCsydnP7t_nYTXRozABqT30ZkwcrcIsdETlvTCCHMhqHBYJwhuBmrEd6KW4Y1i0nldiYtUZFpr01fGbknPNL-HVo3bV7Bp7LRRLlPeotIN2_aa_8fP4VtC_gVyv0hCK9DFW7S-y7m7vcpAMgWpKgbiWZSvNPCvhxvYzi5fRnUU5GNJDQXXFvTqFrYskkHFU" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Advanced</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Environmental Sciences Lecture Series</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnumrahKvvWAR0NEZOxNTFx8ZtGKAOvvqtUoOE7DTHD_irdwhXLMXaSzIk1iEM19cydX5TMEqR2EVWwe4kGGpiWviJ661sk5xF9OdQ0ejHuJFZIKjUezhi6JAIk5Qo-OxVNitjgnuTkFB-6zVv4im-WvAKd9wxu0q1d94fpAK9TD-EZmcteY7UUiJznBO_WI0_xASKMwNkX7wkkf93aU3_42Ie984VhSTp5R-pHWRWc5S1gtIXPUlOP5zUXoUTJ5PJt1yEQNUZxpyP" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Beginner</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        General Training: Daily Situations</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_jhSkB_keirXJmGKwfrec0bf5GvabE_ACBIhxqO8XhKJ_Yzch8KDlKhwrP7K1IASXC5bLCA0TVYtrEoSDPmxFbXc_nypMvFC9Dqb2nAgFZg54oftvFfBWg80IqkC06GqQrr349dJb_5HX8B1htGb6B0nAdl8WiE15mwfAUAAdYiZ1rX79bXKzf1NlHrvnralRW7Vo-9L0JxedqCPnfE4rpM_yxKrXSf7gJ-TyI9Bk2hT7omAlAYIrZkWfCvVe7r6tvYJxutDyHZV-" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Intermediate</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Historical Perspectives on Agriculture</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdPxYNfAd9hrRXgv3snVNeTZzkSrUbslbjDyA9ZG_r3rH5HfyGjt5aCVRibOce7FZCpSvIWfckwoOkiPwlWayI9KoCCjHA_BiaiPYvnEe61Pe0egX9ExXy49kK-H4fGkyT575Sb3PLBEQIjJtYtx6vLxOnHYIAXbf7XE6TaCcWtXIlffOtylDpUNreRLKov1uN435kCIyrSUBHY-UU8uJLaeMx_G1farD901pem-OLezAJs3beifRazJhQKxpjt0naXUmNVY1yaBPg" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Advanced</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Modern Technology &amp; Social Change</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVfoCdy4iSmSKBa6XfcEb0eni5kg7EtUMhiE-B7t1CDxQfmwxA6dMY2gVi1PfXM5tIYSC-jR09aMhze3bskMtL4vP1toWzK_Nj6zVNi8pnJM7Nut4uThRfQgfQhYJmUw8pG6wXpxgxFXfJLr5liQR8h2ZNUP_1-PtdkgM2xcU_CoBVKePoDDsQf7_-Vr1LNw-fpuQXMdcaQGIZwfhPq0I3hr59KkaRhlpzMx0OlE68V3qkJkigISyezQ5-WrIazRyjH-ce7BzR1tT" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Intermediate</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Literature and Creative Arts Analysis</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img alt="IELTS Listening Test"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCio_ytjDaLrAyhPS9fj-cYO6F5BaEpVHM74gMiZCAtY-cG2SZIdXRdE0bhhh0DYEuGpeWQTM_9NUcAO9Eok1chdOWOgcDq74aHJFV2d0hTO3PpgweERSdxlXXd0JD5ROufVGSWzDhvAOQoJGcSXnloXTBI6pQeSgquCcwBiP1AxVMq_teeDyh4bak9HxE-WDBcYuHbZrmVEOMXPAiJ0qTXuBneP_NUfqOMFCYe4gSVdidII4hStmfnm7-HeIkQmfo9I5fnCvP59m02" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Beginner</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        <span className="text-xs font-semibold">30 Minutes</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        Travel &amp; Tourism Essentials</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">quiz</span>
                                            <span>40 Questions</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        Start Test
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Styled Circular Pagination */}
                        <div className="mt-12 flex items-center justify-center gap-2">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-500 hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm shadow-md shadow-primary/30 transition-all">1</button>
                            <button className="w-10 h-10 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">2</button>
                            <button className="w-10 h-10 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">3</button>
                            <span className="text-slate-400 px-1 font-semibold">...</span>
                            <button className="w-10 h-10 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">12</button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-500 hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Ready for the real thing section */}
            <section className="mt-20 bg-gradient-to-r from-rose-500 to-rose-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white">
                        <h2 className="text-3xl font-bold font-display mb-2">Ready for the real thing?</h2>
                        <p className="text-rose-100 opacity-90 text-lg">Take a full length mock test and get instant AI feedback.</p>
                    </div>
                    <Link href="#" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                        Take Full Mock Test
                    </Link>
                </div>
            </section>
        </>
    );
}
