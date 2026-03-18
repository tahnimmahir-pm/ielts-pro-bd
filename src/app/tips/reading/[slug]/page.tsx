import React from 'react';
import Link from 'next/link';

export default async function TipPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Determine title from slug (mock demonstration purposes)
    const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // Default title fallback if exact route is hit directly
    const title = formattedTitle.includes('Skimming') ? "Mastering Skimming & Scanning" : formattedTitle;

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/tips/reading" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors mb-8 group">
                        <span className="material-symbols-outlined text-lg mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Reading Tips
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/20">Reading Tip</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center">
                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                            5 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-emerald-500/20 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" alt="Author Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">Dr. Emily Chen</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Head of Reading Strategy</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-slate-400 dark:text-slate-500">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-emerald-600">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-emerald-600">
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800">
                        <img 
                            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop" 
                            alt="Featured Tip Image" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Article Content */}
                    <div className="lg:col-span-8">
                        <article className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium pb-2 border-b-2 border-emerald-500/20 inline-block mb-4">
                                Time is your biggest enemy in the IELTS Reading module. To read 3 full passages in 60 minutes while answering 40 questions requires a completely different approach from casually reading a book.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-10 mb-4">The Difference Between Skimming & Scanning</h2>
                            <p>
                                While often grouped together, skimming and scanning are two completely distinct tools in your reading arsenal. Knowing when to use which is the secret to scoring a Band 8.0+.
                            </p>

                            <blockquote className="border-l-4 border-emerald-500 bg-emerald-500/5 p-6 rounded-r-xl my-8 italic text-slate-700 dark:text-slate-300 font-medium">
                                "Skim for the main idea, scan for specific details, but read carefully to finalize your answer."
                            </blockquote>

                            <div className="my-10 w-full h-px bg-slate-200 dark:bg-slate-800"></div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-8 mb-6">How to Skim Effectively</h2>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                Read the First and Last Sentences
                            </h3>
                            <p>
                                In academic texts, the first sentence is usually the topic sentence, and the final sentence provides a concluding or transitional thought. Reading just these two sentences of a paragraph will give you an 80% understanding of what the paragraph is about.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Ignore Unnecessary Words
                            </h3>
                            <p>
                                Pass your eyes quickly over adjectives, adverbs, and complex descriptive clauses. Focus strictly on nouns and main verbs.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-12 mb-6">How to Scan like a Pro</h2>
                            <p>
                                Scanning is exactly what you do when you're looking for a name in a phone book. You don't read every entry; you let your eyes glide over the text until they lock onto a specific shape or trigger word.
                            </p>

                            <ul className="grid grid-cols-2 gap-3 my-6 pl-4 font-medium text-slate-600 dark:text-slate-400">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Names of people (Capital letters)</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Dates & Years (Numbers standing out)</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Technical terms (Often in italics/quotes)</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Locations (Capitalized nouns)</li>
                            </ul>

                            {/* Practical Example Box */}
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl my-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                                <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-emerald-500 mr-2">search</span>
                                    Scanning Exercise
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-bold">SCAN THE TEXT BELOW FOR 'Dr. Harrison':</p>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 shadow-sm leading-relaxed">
                                    The early theories of cognitive mapping were heavily debated in academic circles. It wasn't until the groundbreaking research conducted by <span className="font-bold text-slate-900 dark:text-white bg-emerald-500/20 px-1 rounded">Dr. Harrison</span> in 1984 that mainstream psychology began to adopt these spatial awareness mapping models as fundamental cognitive structures.
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl mt-4 shadow-sm">
                                    <p className="font-bold text-slate-900 dark:text-white mb-2"><span className="text-emerald-500 mr-2 leading-none">Insight:</span> Notice how your eye automatically jumps to the capitalized 'D' and 'H'.</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">That is scanning in action. You did not need to understand 'cognitive mapping' to find the name.</p>
                                </div>
                            </div>

                        </article>

                        {/* Article Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Skimming</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Scanning</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Time Management</span>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            
                            {/* Call to Action Widget */}
                            <div className="p-1 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 shadow-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl relative z-10 text-white border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">auto_stories</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">Struggling with Time?</h3>
                                    <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">Enroll in our Academic Reading course to conquer pacing and dense passages.</p>
                                    <Link href="/courses" className="block w-full text-center bg-white text-emerald-600 font-bold py-3.5 rounded-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                                        View Course Details
                                    </Link>
                                </div>
                            </div>

                            {/* Related Tips Widget */}
                            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-emerald-500">menu_book</span>
                                    Related Reading Tips
                                </h3>
                                
                                <div className="space-y-6">
                                    {/* Sidebar Item 1 */}
                                    <Link href="/tips/reading/true-false-not-given" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-rose-500 mb-1 tracking-wider">Tricky</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-emerald-500 transition-colors">Demystifying True, False, Not Given</h4>
                                        </div>
                                    </Link>
                                    
                                    {/* Sidebar Item 2 */}
                                    <Link href="/tips/reading/matching-headings" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-sky-500 mb-1 tracking-wider">Strategy</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-emerald-500 transition-colors">How to Conquer Matching Headings</h4>
                                        </div>
                                    </Link>

                                    {/* Sidebar Item 3 */}
                                    <Link href="/tips/reading/time-management" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-amber-500 mb-1 tracking-wider">Pacing</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-emerald-500 transition-colors">Time Management for the Reading Test</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
