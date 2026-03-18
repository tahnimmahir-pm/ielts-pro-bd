import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default async function TipPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Determine title from slug (mock demonstration purposes)
    const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // Default title fallback if exact route is hit directly
    const title = formattedTitle.includes('Structure') ? "Task 2: The Perfect Essay Structure" : formattedTitle;

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/tips/writing" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors mb-8 group">
                        <span className="material-symbols-outlined text-lg mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Writing Tips
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-violet-600/10 text-violet-600 dark:text-violet-400 rounded-full text-xs font-bold uppercase tracking-wider border border-violet-600/20">Writing Tip</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center">
                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                            10 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-violet-600/20 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="Author Profile" className="w-full h-full object-cover" width={600} height={400} />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">Prof. Marcus Thorne</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Chief Writing Evaluator</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-slate-400 dark:text-slate-500">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-violet-600">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-violet-600">
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800">
                        <Image src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1600&auto=format&fit=crop" alt="Featured Tip Image" className="w-full h-full object-cover" width={600} height={400} />
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Article Content */}
                    <div className="lg:col-span-8">
                        <article className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium pb-2 border-b-2 border-violet-500/20 inline-block mb-4">
                                Most students lose points in Writing Task 2 not because they lack vocabulary, but because their ideas are jumbled and hard to follow. Coherence and Cohesion accounts for 25% of your score.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-10 mb-4">The Magic 4-Paragraph Framework</h2>
                            <p>
                                Instead of trying to reinvent the wheel, apply a strict 4-paragraph structure to every single essay you write. This limits the cognitive load required to organize your thoughts and lets you focus on answering the prompt.
                            </p>

                            <blockquote className="border-l-4 border-violet-600 bg-violet-600/5 p-6 rounded-r-xl my-8 italic text-slate-700 dark:text-slate-300 font-medium">
                                &quot;The examiner is not looking for a novel. They are looking for a clear argument, supported by structured logic.&quot;
                            </blockquote>

                            <div className="my-10 w-full h-px bg-slate-200 dark:bg-slate-800"></div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-8 mb-6">Paragraph Breakdown</h2>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-violet-600/20 text-violet-600 dark:text-violet-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                Introduction (2-3 Sentences)
                            </h3>
                            <p>
                                Always begin by <strong>paraphrasing the prompt</strong>. Take the exact words of the prompt and swap out nouns and verbs using synonyms. The next sentence should be your <strong>Thesis Statement</strong>: clearly outline your opinion or what the essay will discuss.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-violet-600/20 text-violet-600 dark:text-violet-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Body Paragraph A (5-6 Sentences)
                            </h3>
                            <p>
                                Present your first main idea. Follow this formula:
                            </p>
                            <ul className="grid grid-cols-1 gap-3 my-6 pl-4 font-medium text-slate-600 dark:text-slate-400">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3"></span><strong>Topic Sentence:</strong> State the core idea clearly.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3"></span><strong>Explanation:</strong> Explain *why* this idea is true.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3"></span><strong>Example:</strong> Provide a specific, real-world example.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3"></span><strong>Result:</strong> Summarize the finding.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-violet-600/20 text-violet-600 dark:text-violet-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                Body Paragraph B (5-6 Sentences)
                            </h3>
                            <p>
                                Present your second main idea using the exact same four-step formula as above. Depending on the question type (e.g. Advantage/Disadvantage), this paragraph may present the opposing viewpoint.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-violet-600/20 text-violet-600 dark:text-violet-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                                Conclusion (1-2 Sentences)
                            </h3>
                            <p>
                                Summarize your main points briefly and restate your thesis. <strong className="text-slate-900 dark:text-white">Never</strong> introduce completely new ideas or arguments in your conclusion.
                            </p>

                            {/* Practical Example Box */}
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl my-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-violet-600"></div>
                                <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-violet-600 mr-2">edit_document</span>
                                    Introduction Exercise
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-bold">PROMPT: &quot;Some people believe that university education should be free for everyone. Do you agree or disagree?&quot;</p>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl font-medium shadow-sm">
                                    <p className="mb-2"><span className="text-violet-600 dark:text-violet-400 font-bold">Paraphrase:</span> It is argued by some that tertiary education should be fully subsidized by the government without placing a financial burden on individuals.</p>
                                    <p><span className="text-violet-600 dark:text-violet-400 font-bold">Thesis:</span> I completely agree with this notion, as it promotes social equality and ensures an educated workforce driving long-term economic growth.</p>
                                </div>
                            </div>

                        </article>

                        {/* Article Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Task 2</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Structuring</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Coherence & Cohesion</span>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            
                            {/* Call to Action Widget */}
                            <div className="p-1 rounded-2xl bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-500 shadow-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl relative z-10 text-white border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">draw</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">Need Feedback?</h3>
                                    <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">Enroll in our Writing Masterclass course and get your essays scored by real examiners.</p>
                                    <Link href="/courses" className="block w-full text-center bg-white text-violet-700 font-bold py-3.5 rounded-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                                        View Course Details
                                    </Link>
                                </div>
                            </div>

                            {/* Related Tips Widget */}
                            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-violet-600 dark:text-violet-500">edit_note</span>
                                    Related Writing Tips
                                </h3>
                                
                                <div className="space-y-6">
                                    {/* Sidebar Item 1 */}
                                    <Link href="/tips/writing/academic-task-1-graphs" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width={600} height={400} />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-sky-500 mb-1 tracking-wider">Graphs</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-violet-600 transition-colors">Academic Task 1: Describing Graphs</h4>
                                        </div>
                                    </Link>
                                    
                                    {/* Sidebar Item 2 */}
                                    <Link href="/tips/writing/general-task-1-letters" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <Image src="https://images.unsplash.com/photo-1596230529625-07cebd08638b?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width={600} height={400} />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-amber-500 mb-1 tracking-wider">Letters</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-violet-600 transition-colors">General Task 1: Mastering Formal Letters</h4>
                                        </div>
                                    </Link>

                                    {/* Sidebar Item 3 */}
                                    <Link href="/tips/writing/lexical-resource-tips" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <Image src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width={600} height={400} />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-rose-500 mb-1 tracking-wider">Vocabulary</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-violet-600 transition-colors">Upgrading Your Lexical Resource</h4>
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
