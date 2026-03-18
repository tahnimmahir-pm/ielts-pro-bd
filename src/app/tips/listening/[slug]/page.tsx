import React from 'react';
import Link from 'next/link';

export default async function TipPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Determine title from slug (mock demonstration purposes)
    const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // Default title fallback if exact route is hit directly
    const title = formattedTitle.includes('Handle') ? "How to Handle Distractors in Multiple Choice Questions" : formattedTitle;

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/tips/listening" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors mb-8 group">
                        <span className="material-symbols-outlined text-lg mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Listening Tips
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">Listening Tip</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center">
                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                            4 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Author Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Senior IELTS Examiner</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-slate-400 dark:text-slate-500">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800">
                        <img 
                            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1600&auto=format&fit=crop" 
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
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium pb-2 border-b-2 border-primary/20 inline-block mb-4">
                                Multiple choice questions (MCQs) in the IELTS Listening test are notorious for being tricky. They heavily rely on distractors—words or phrases designed to mislead you into choosing the wrong answer.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-10 mb-4">What is a Distractor?</h2>
                            <p>
                                A distractor is a piece of information that seems like it could be the correct answer based on what you hear, but is actually false or irrelevant when you listen to the full context. Speakers will often self-correct, hesitate, or mention all the options before settling on the real final answer.
                            </p>

                            <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-xl my-8 italic text-slate-700 dark:text-slate-300 font-medium">
                                "The key to mastering MCQs is not just listening for the words in the options, but understanding the meaning and the speaker's final intent."
                            </blockquote>

                            <div className="my-10 w-full h-px bg-slate-200 dark:bg-slate-800"></div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-8 mb-6">3 Strategies to Overcome Distractors</h2>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                Wait Before You Write
                            </h3>
                            <p>
                                Do not immediately write down the first answer you hear that matches an option. The speaker might say: <em>"We originally planned to meet at 3 PM, but then John had a conflict so we pushed it to 4 PM."</em> If you just listened for a time, 3 PM is a distractor. Wait for the complete thought.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Listen for Contrast Words
                            </h3>
                            <p>
                                Contrast words are massive red flags that a distractor was just used or is about to be corrected. Listen carefully for:
                            </p>
                            <ul className="grid grid-cols-2 gap-3 my-6 pl-4 font-medium text-slate-600 dark:text-slate-400">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>But</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>However</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>Actually</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>Instead of</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>On second thought</li>
                            </ul>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                Highlight Keywords Before Listening
                            </h3>
                            <p>
                                Before the recording begins, use your reading time to highlight the main noun and verb in the question stem. What <strong className="text-slate-900 dark:text-white">exactly</strong> is the question asking for? If the question asks for the <span className="underline decoration-primary decoration-2 underline-offset-4">final decision</span>, ignore any preliminary ideas discussed.
                            </p>

                            {/* Practical Example Box */}
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl my-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                                <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary mr-2">headphones</span>
                                    Practice Exercise
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-bold">LISTEN TO THIS MOCK SNIPPET:</p>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl italic font-medium shadow-sm">
                                    "I was thinking about taking the train because it's usually faster, but looking at the current timetable, it seems there are huge delays. So I've decided to just drive there, even though parking will be a nightmare."
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl mt-4 shadow-sm">
                                    <p className="mt-2 font-bold text-slate-900 dark:text-white mb-4"><span className="text-primary mr-2 leading-none">Q:</span> How will the speaker travel?</p>
                                    <ol className="space-y-3 font-medium text-slate-600 dark:text-slate-400 pl-8 list-none relative">
                                        <li className="relative"><span className="absolute -left-6 font-bold text-slate-400">A</span> By train <span className="text-xs ml-2 text-rose-500 font-bold px-2 py-0.5 bg-rose-500/10 rounded-full">Distractor</span></li>
                                        <li className="relative text-emerald-600 dark:text-emerald-400"><span className="absolute -left-6 font-bold">B</span> By car <span className="text-xs ml-2 font-bold px-2 py-0.5 bg-emerald-500/10 rounded-full">Correct Answer</span></li>
                                        <li className="relative"><span className="absolute -left-6 font-bold text-slate-400">C</span> By walking</li>
                                    </ol>
                                </div>
                            </div>

                        </article>

                        {/* Article Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Multiple Choice</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Distractors</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Listening Part 3</span>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            
                            {/* Call to Action Widget */}
                            <div className="p-1 rounded-2xl bg-gradient-to-br from-primary via-primary to-sky-600 shadow-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl relative z-10 text-white border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">school</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">Struggling with Listening?</h3>
                                    <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">Enroll in our comprehensive Listening Mastery course to get full guided practice.</p>
                                    <Link href="/listening" className="block w-full text-center bg-white text-primary font-bold py-3.5 rounded-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                                        View Course Details
                                    </Link>
                                </div>
                            </div>

                            {/* Related Tips Widget */}
                            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-primary">menu_book</span>
                                    Related Tips
                                </h3>
                                
                                <div className="space-y-6">
                                    {/* Sidebar Item 1 */}
                                    <Link href="/tips/listening/note-taking-guide" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-primary mb-1 tracking-wider">Guide</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">The Ultimate Guide to Note-Taking During the Audio</h4>
                                        </div>
                                    </Link>
                                    
                                    {/* Sidebar Item 2 */}
                                    <Link href="/tips/listening/spelling-mistakes" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-emerald-500 mb-1 tracking-wider">Mistakes</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">Top 10 Common Spelling Mistakes to Avoid</h4>
                                        </div>
                                    </Link>

                                    {/* Sidebar Item 3 */}
                                    <Link href="/tips/listening/map-labeling" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-sky-500 mb-1 tracking-wider">Strategy</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">Mastering Map and Diagram Labeling in Part 2</h4>
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
