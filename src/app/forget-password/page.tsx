import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Forgot Password - IELTS PRO BD',
    description: 'Reset your password for IELTS PRO BD.',
};

export default function ForgetPasswordPage() {
    return (
        <main className="flex-1 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 min-h-[85vh]">
            {/* Split Layout Container */}
            <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row">

                {/* Left Side: Information & Branding */}
                <div className="md:w-5/12 bg-gradient-to-br from-slate-800 via-[#2d3748] to-[#121320] p-10 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden hidden md:flex">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                    <div className="relative z-10 w-full mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-[#e11d48] mb-6 shadow-[#e11d48]/20 shadow-lg">
                            Join 20,000+ Students
                        </div>
                        <h1 className="text-4xl lg:text-[44px] font-extrabold leading-[1.15] mb-6">
                            Unlock Your <span className="text-[#e11d48] underline decoration-4 underline-offset-8">Global Success</span> with IELTS PRO BD
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
                            Get access to professional mock tests, AI-powered feedback, and expert-led resources designed to
                            boost your band score.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#e11d48]/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-[#e11d48]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white">Authentic Mock Tests</h3>
                                    <p className="text-slate-400 text-sm mt-1">Real exam formats for Speaking, Listening, Reading &amp; Writing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-sky-500" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white">AI-Powered Evaluation</h3>
                                    <p className="text-slate-400 text-sm mt-1">Instant feedback on your speaking and writing performance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white">Target Band 8.5+</h3>
                                    <p className="text-slate-400 text-sm mt-1">Proven methodologies to achieve your desired band score fast.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-7/12 p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-white dark:bg-slate-900 relative">
                    <div className="max-w-md w-full mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                                <span className="material-symbols-outlined text-rose-500 text-3xl">vpn_key</span>
                            </div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Reset Password</h1>
                            <p className="text-slate-500 dark:text-slate-400">
                                We will send you an email with instructions on how to reset your password.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-slate-400">alternate_email</span>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                        placeholder="Enter your registered email"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 px-8 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-base font-bold text-white bg-primary hover:bg-primary/90 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20"
                            >
                                Send Reset Instructions
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </form>

                        <div className="mt-12 text-center">
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-bold transition-colors group"
                            >
                                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                Return to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
