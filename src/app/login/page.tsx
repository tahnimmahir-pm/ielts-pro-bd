'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === 'admin') {
            window.location.href = '/admin-dashboard';
        } else if (email === 'student@gmail.com' && password === 'student') {
            window.location.href = '/student-dashboard';
        } else {
            alert('Invalid credentials. Please use admin@gmail.com/admin or student@gmail.com/student');
        }
    };

    return (
        <main className="flex-grow flex items-center justify-center p-4 min-h-[80vh]">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">

                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Welcome Back</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Please enter your details to sign in</p>
                </div>
                <div className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                    <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <p className="text-xs font-bold text-primary dark:text-accent mb-2 uppercase tracking-wider">Demo Credentials</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold">Admin</p>
                                <p className="text-xs font-medium dark:text-slate-300">admin@gmail.com / admin</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold">Student</p>
                                <p className="text-xs font-medium dark:text-slate-300">student@gmail.com / student</p>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white dark:placeholder:text-slate-500"
                                    id="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                                <Link className="text-sm font-bold text-[#e11d48] hover:underline" href="/forget-password">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                                <input
                                    className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white dark:placeholder:text-slate-500"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded" id="remember-me" name="remember-me" type="checkbox" />
                            <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">Remember me for 30 days</label>
                        </div>
                        <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-[#e11d48]/30 transition-all flex items-center justify-center gap-2" type="submit">
                            <span>Sign In</span>
                        </button>
                    </form>
                    <p className="text-center mt-8 text-sm text-slate-600 dark:text-slate-400">
                        Don&apos;t have an account?{' '}
                        <Link className="font-bold text-primary dark:text-accent hover:underline" href="/registration">Register free</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
