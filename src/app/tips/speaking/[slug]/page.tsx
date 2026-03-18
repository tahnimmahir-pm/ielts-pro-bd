import React from 'react';
import Link from 'next/link';

export default async function TipPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Determine title from slug (mock demonstration purposes)
    const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // Default title fallback if exact route is hit directly
    const title = formattedTitle.includes('Part 2') || formattedTitle.includes('Monologue') ? "Part 2: The 2-Minute Monologue" : formattedTitle;

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/tips/speaking" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors mb-8 group">
                        <span className="material-symbols-outlined text-lg mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Speaking Tips
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">Speaking Tip</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center">
                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                            7 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-amber-500/20 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="Author Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">Jessica Reynolds</p>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Former IELTS Speaking Examiner</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-slate-400 dark:text-slate-500">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-amber-600">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-amber-600">
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
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
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium pb-2 border-b-2 border-amber-500/20 inline-block mb-4">
                                Part 2 of the Speaking test—often called the "long turn" or the "cue card" section—is where most candidates hit a mental wall. Staring at the examiner in silence after 45 seconds is everyone's worst nightmare.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-10 mb-4">The Truth About the Cue Card</h2>
                            <p>
                                The prompt gives you a topic (e.g., "Describe a memorable journey") and three bullet points to guide you. What most test-takers don't realize is that <strong className="text-slate-900 dark:text-white">you do not have to strictly stick to the bullet points.</strong> They are suggestions, not strict requirements.
                            </p>

                            <blockquote className="border-l-4 border-amber-500 bg-amber-500/5 p-6 rounded-r-xl my-8 italic text-slate-700 dark:text-slate-300 font-medium">
                                "The examiner is assessing your fluency, vocabulary, grammar, and pronunciation. They are not grading you on how many bullet points you checked off."
                            </blockquote>

                            <div className="my-10 w-full h-px bg-slate-200 dark:bg-slate-800"></div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-8 mb-6">How to Ensure You Speak for 2 Minutes</h2>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-amber-500/20 text-amber-600 dark:text-amber-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                The "Past, Present, Future" Strategy
                            </h3>
                            <p>
                                If you finish answering the bullet points early, bridge your topic into different timeframes. Talk about how your experience with the topic was in the past, how it is now, and how you imagine it in the future.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-amber-500/20 text-amber-600 dark:text-amber-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Use the W-H Questions Framework
                            </h3>
                            <p>
                                Expand any single bullet point by asking yourself: Who? What? Where? When? Why? How? Instead of just saying "I went with my brother," say "I went with my younger brother, who had actually never been on an airplane before, so I had to spend the first two hours just calming his nerves."
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 flex items-center">
                                <span className="bg-amber-500/20 text-amber-600 dark:text-amber-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                Tell a Story
                            </h3>
                            <p>
                                Human brains are wired for narratives. Storytelling naturally strings sentences together logically and invites complex grammar (like past continuous and past perfect tenses). Don't just list facts; tell a mini-story about feelings, reactions, and outcomes.
                            </p>

                            {/* Practical Example Box */}
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl my-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
                                <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-amber-500 mr-2">record_voice_over</span>
                                    Answer Expansion Exercise
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-bold">CUE: "Describe a restaurant you enjoyed visiting."</p>
                                <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-xl font-medium shadow-sm">
                                    <p className="mb-4">
                                        <span className="text-rose-500 font-bold uppercase text-xs tracking-wider mb-1 block">Rookie Answer (Stops after 10 seconds):</span> 
                                        "I went to an Italian restaurant downtown. The pizza was very good and the waiters were nice."
                                    </p>
                                    <p>
                                        <span className="text-emerald-500 font-bold uppercase text-xs tracking-wider mb-1 block">Band 8+ Answer (Detailed Storytelling):</span> 
                                        "There's this fantastic, authentic Italian trattoria tucked away in an alley downtown. I actually stumbled upon it completely by accident when trying to avoid a rainstorm last month. What immediately caught my attention wasn't just the incredible aroma of garlic and fresh basil, but the fact that the entire kitchen staff were shouting to each other in rapid Italian, which instantly gave it this wonderful, chaotic charm."
                                    </p>
                                </div>
                            </div>

                        </article>

                        {/* Article Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Part 2 Long Turn</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Fluency</span>
                            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent dark:border-slate-700">Storytelling</span>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            
                            {/* Call to Action Widget */}
                            <div className="p-1 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-500 to-orange-400 shadow-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl relative z-10 text-white border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">mic</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">Want to practice speaking?</h3>
                                    <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">Book 1-on-1 mock interviews with certified examiners and get instant feedback on your fluency.</p>
                                    <Link href="/courses" className="block w-full text-center bg-white text-amber-600 font-bold py-3.5 rounded-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                                        View Mock Interviews
                                    </Link>
                                </div>
                            </div>

                            {/* Related Tips Widget */}
                            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-amber-500">forum</span>
                                    Related Speaking Tips
                                </h3>
                                
                                <div className="space-y-6">
                                    {/* Sidebar Item 1 */}
                                    <Link href="/tips/speaking/part-1-small-talk" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-sky-500 mb-1 tracking-wider">Small Talk</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-amber-500 transition-colors">Part 1: Acing the Small Talk</h4>
                                        </div>
                                    </Link>
                                    
                                    {/* Sidebar Item 2 */}
                                    <Link href="/tips/speaking/part-3-abstract-discussions" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-violet-500 mb-1 tracking-wider">Complex</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-amber-500 transition-colors">Part 3: Handling Abstract Topics</h4>
                                        </div>
                                    </Link>

                                    {/* Sidebar Item 3 */}
                                    <Link href="/tips/speaking/pronunciation-intonation" className="group flex gap-4">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1475721025870-2434421b53b8?q=80&w=200&auto=format&fit=crop" alt="Tip Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] uppercase font-bold text-rose-500 mb-1 tracking-wider">Pronunciation</span>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-amber-500 transition-colors">Pronunciation vs. Accent</h4>
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
