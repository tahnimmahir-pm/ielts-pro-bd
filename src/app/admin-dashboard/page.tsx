'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
    return (
        <main className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full hidden lg:flex">
                <div className="p-6 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">IELTS PRO BD</span>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined mr-3">dashboard</span>
                        Dashboard
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined mr-3">people</span>
                        Students
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined mr-3">quiz</span>
                        Practice Tests
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined mr-3">payments</span>
                        Subscriptions
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined mr-3">analytics</span>
                        Reports
                    </Link>

                    <div className="pt-4 pb-2">
                        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Management</p>
                    </div>
                    <Link href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined mr-3">settings</span>
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center space-x-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="Admin user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFn6EYqocGrZ3rq6iO3yxGJIjebx7W9dLkoSub52KVSXp5_x6Lq4Y35l55q0HaL6g1MZjrE6PetRVT-F2Xu4x2XQa-Ad7aSA8J4kMbrxmu5JvBDpNBMqK_SiGGVoW7a3ccM2MdWwWfwTl6w3RlhteXGf6ZCGfZYYcmCQ8h8oqQ9tTKFUsGcq7v987IJP9HhV86eEu8hzPuhP2GFw8G44trIRjf7PICV4INNZFIvyARYWxY7HVCK5y-i_C-wKc308npt_t0E356to8H" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">Admin User</p>
                            <p className="text-xs text-slate-500 truncate">admin@ieltsprobd.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-slate-950">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Admin Dashboard</h1>
                        <p className="text-slate-500 dark:text-slate-400">Welcome back! Here&apos;s what&apos;s happening with IELTS PRO BD today.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                            <span className="material-symbols-outlined text-sm mr-2">add</span>
                            Create New Test
                        </button>
                    </div>
                </header>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                <span className="material-symbols-outlined">group</span>
                            </div>
                            <span className="text-xs font-medium text-emerald-500 flex items-center">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +12%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Students</p>
                        <h3 className="text-2xl font-bold mt-1">12,482</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                                <span className="material-symbols-outlined">subscriptions</span>
                            </div>
                            <span className="text-xs font-medium text-emerald-500 flex items-center">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +5%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Subscriptions</p>
                        <h3 className="text-2xl font-bold mt-1">3,241</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                                <span className="material-symbols-outlined">auto_stories</span>
                            </div>
                            <span className="text-xs font-medium text-rose-500 flex items-center">
                                <span className="material-symbols-outlined text-sm mr-1">trending_down</span> -2%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Tests Completed</p>
                        <h3 className="text-2xl font-bold mt-1">45,890</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="text-xs font-medium text-emerald-500 flex items-center">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +18%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Revenue</p>
                        <h3 className="text-2xl font-bold mt-1">$14,240</h3>
                    </div>
                </div>

                {/* Recent Registrations & Revenue Chart section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Student Registrations Table */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <h2 className="text-lg font-bold">Recent Student Registrations</h2>
                            <Link href="#" className="text-primary text-sm font-semibold hover:underline">View All</Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                        <th className="px-6 py-4">Student</th>
                                        <th className="px-6 py-4">Package</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-primary mr-3">FK</div>
                                                <div>
                                                    <p className="text-sm font-medium">Faisal Karim</p>
                                                    <p className="text-xs text-slate-500">faisal@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-[10px] font-bold rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">PREMIUM</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 24, 2024</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded transition-colors" title="Approve">
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                </button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded transition-colors" title="Reject">
                                                    <span className="material-symbols-outlined text-sm">cancel</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-primary mr-3">NH</div>
                                                <div>
                                                    <p className="text-sm font-medium">Nayeem Hasan</p>
                                                    <p className="text-xs text-slate-500">nayeem.h@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">FREE</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 23, 2024</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                </button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">cancel</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-primary mr-3">SA</div>
                                                <div>
                                                    <p className="text-sm font-medium">Sonia Akter</p>
                                                    <p className="text-xs text-slate-500">sonia@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-[10px] font-bold rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">GENERAL</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 23, 2024</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                </button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">cancel</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Monthly Revenue Chart */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-bold">Monthly Revenue</h2>
                            <select className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2 focus:ring-primary focus:border-primary">
                                <option>Last 6 Months</option>
                                <option>Last Year</option>
                            </select>
                        </div>

                        <div className="relative h-64 flex items-end justify-between px-2">
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-32 relative group-hover:bg-primary transition-colors cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        $8.4k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-400 font-medium">MAY</span>
                            </div>
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-40 relative group-hover:bg-primary transition-colors cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        $10.2k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-400 font-medium">JUN</span>
                            </div>
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-48 relative group-hover:bg-primary transition-colors cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        $12.5k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-400 font-medium">JUL</span>
                            </div>
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-44 relative group-hover:bg-primary transition-colors cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        $11.8k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-400 font-medium">AUG</span>
                            </div>
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-52 relative group-hover:bg-primary transition-colors cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        $13.9k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-400 font-medium">SEP</span>
                            </div>
                            <div className="flex flex-col items-center group w-full">
                                <div className="w-8 bg-primary rounded-t-sm h-60 relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-200 dark:text-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap z-10">
                                        $14.2k
                                    </div>
                                </div>
                                <span className="text-[10px] mt-2 text-slate-800 dark:text-white font-bold">OCT</span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-center space-x-6">
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Current Sales</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 mr-2"></div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Projection</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined mb-2">upload_file</span>
                                <span className="text-xs font-semibold">Upload Materials</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined mb-2">mail</span>
                                <span className="text-xs font-semibold">Send Newsletter</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-rose-700 p-6 rounded-xl shadow-sm text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-bold mb-1">System Update Available</h2>
                            <p className="text-white/80 text-sm">Version 2.4.0 is ready for deployment. This update includes new AI-grading features for speaking tests.</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="px-4 py-2 bg-white text-primary font-bold text-sm rounded-lg hover:bg-slate-100 transition-colors">
                                Update Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
