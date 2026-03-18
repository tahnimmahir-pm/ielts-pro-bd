import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Register - IELTS PRO BD',
    description: 'Join the community and start your journey today.',
};

export default function RegistrationPage() {
    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 dark:border-slate-800">

                {/* Left Side Branding/Info */}
                <div className="lg:w-1/2 bg-gradient-to-br from-slate-800 via-[#2d3748] to-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                            Join 20,000+ Students
                        </div>
                        {/* Note: In Next.js, font-display might need specific tailwind config, sticking to font-sans for safety or existing global classes */}
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            Unlock Your <span className="text-primary underline decoration-4 underline-offset-8">Global Success</span> with IELTS PRO BD
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
                            Get access to professional mock tests, AI-powered feedback, and expert-led resources designed to
                            boost your band score.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Authentic Mock Tests</h3>
                                    <p className="text-slate-400 text-sm">Real exam formats for Speaking, Listening, Reading &amp; Writing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-sky-500">psychology</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">AI-Powered Evaluation</h3>
                                    <p className="text-slate-400 text-sm">Instant feedback on your speaking and writing performance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-emerald-400">trending_up</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Target Band 8.5+</h3>
                                    <p className="text-slate-400 text-sm">Proven methodologies to achieve your desired band score fast.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 relative z-10">
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6brNfpFFPq5ViVOYZUchzxSXPc5iFL2pOh_8rd0O5k0zeptWyY2XeZN6qDFTphkMc00Vuv80G8OEtdx8WeugGftQbYv6z356PTcoTWiNGibjavs8hZ5Q-tTVKgP0FG2ryvpzaiU_BG9YblYE1OaGRiN5_CWHknLuCoPfCoI3zVVCMrnUijqGTuHGK3ZTVGyUbGresPiiCSilrNBc58HfdAMajsyb7yYilo1DuwL4MWmqaIkvbN_A9cLz-dvlYP-g0qTW0CX_M5CY_" alt="Student Success" className="w-12 h-12 rounded-full border-2 border-primary object-cover" width={600} height={400} />
                                <div>
                                    <p className="font-bold">Faisal Karim</p>
                                    <p className="text-xs text-slate-400">Scored Band 8.5 in 2 months</p>
                                </div>
                            </div>
                            <p className="text-slate-300 italic text-sm">
                                &quot;The speaking tools and expert feedback helped me gain confidence. My score jumped from 6.0 to 8.5!&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create Account</h2>
                        <p className="text-slate-500 dark:text-slate-400">Join the community and start your journey today.</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="full_name">
                                Full Name
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">person</span>
                                <input
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all dark:text-white"
                                    id="full_name"
                                    placeholder="John Doe"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">mail</span>
                                <input
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all dark:text-white"
                                    id="email"
                                    placeholder="john@example.com"
                                    required
                                    type="email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <div className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">phone</span>
                                <input
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all dark:text-white"
                                    id="phone"
                                    placeholder="+880 1XXX-XXXXXX"
                                    required
                                    type="tel"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock</span>
                                    <input
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all dark:text-white"
                                        id="password"
                                        placeholder="••••••••"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="confirm_password">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock_reset</span>
                                    <input
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-xl transition-all dark:text-white"
                                        id="confirm_password"
                                        placeholder="••••••••"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mt-2">
                            <div className="flex items-center h-5">
                                <input
                                    className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer"
                                    id="terms"
                                    name="terms"
                                    required
                                    type="checkbox"
                                />
                            </div>
                            <div className="text-sm">
                                <label className="text-slate-600 dark:text-slate-400" htmlFor="terms">
                                    I agree to the <Link className="text-primary font-bold hover:underline" href="#">Terms of Service</Link> and <Link className="text-primary font-bold hover:underline" href="#">Privacy Policy</Link>.
                                </label>
                            </div>
                        </div>

                        <button
                            className="w-full bg-slate-800 text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-900 shadow-xl shadow-slate-800/20 hover:shadow-slate-800/40 transition-all flex items-center justify-center gap-2 group"
                            type="submit"
                        >
                            Register Now
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                        <p className="text-slate-600 dark:text-slate-400">
                            Already have an account?{' '}
                            <Link className="text-primary font-extrabold hover:underline transition-all" href="/login">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
