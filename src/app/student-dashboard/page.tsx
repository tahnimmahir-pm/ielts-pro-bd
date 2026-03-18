'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Chart from 'chart.js/auto';

export default function StudentDashboardPage() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Check if dark mode is active (simplified check for initial load)
            const isDark = document.documentElement.classList.contains('dark');

            if (ctx) {
                // Destroy previous chart instance if it exists to avoid memory leaks
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8'],
                        datasets: [{
                            label: 'Band Score',
                            data: [6.0, 6.5, 6.5, 7.0, 7.5, 7.0, 8.0, 7.5],
                            borderColor: '#E11D48',
                            backgroundColor: 'rgba(225, 29, 72, 0.1)',
                            fill: true,
                            tension: 0.4,
                            pointRadius: 6,
                            pointBackgroundColor: '#E11D48',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                min: 0,
                                max: 9,
                                grid: {
                                    color: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                                },
                                ticks: {
                                    color: '#94a3b8'
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    color: '#94a3b8'
                                }
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <main className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex">
                <div className="p-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">I</div>
                    <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">IELTS PRO BD</span>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-4">
                    <Link href="#" className="flex items-center gap-3 px-3 py-3 bg-primary/10 text-primary border-r-4 border-primary rounded-lg transition-all">
                        <span className="material-symbols-outlined text-[20px]">dashboard</span>
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-[20px]">history_edu</span>
                        <span className="font-medium">My Tests</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-[20px]">menu_book</span>
                        <span className="font-medium">Course Modules</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-[20px]">trending_up</span>
                        <span className="font-medium">Progress Analytics</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-[20px]">support_agent</span>
                        <span className="font-medium">Support</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2 uppercase tracking-wider">Premium Plan</p>
                        <p className="text-sm font-medium mb-3">24 days remaining</p>
                        <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">Renew Now</button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-slate-50 dark:bg-slate-950">
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10">
                    <div className="flex items-center lg:hidden">
                        <span className="material-symbols-outlined text-slate-600">menu</span>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Student Overview</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary cursor-pointer transition-colors">notifications</span>
                            <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></div>
                        </div>

                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold">Faisal Karim</p>
                                <p className="text-xs text-slate-500">IELTS Candidate</p>
                            </div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkjzTzfj3CwOnQnCMSvbLIkYvIvGW9M_et1_8F2AC1B0MrYegPHsVjV2wvusvaurgFBXcU9vYWmVRZn_uBb5BR0_qluDhZN6tmYhnENKclIGvIPP1z15N4qkQWD0a9nKSqIDIGzFsKS8Ei8dzkWP6pBPaUaY6g5XyGvUq6c28uZ4mvAdW_GTStKQRnstmn55yIvSwvuI6qoB2c5gahv7_rPXT_ws9AduVT1weVcM8hL0A-J8q2zzSbSo9NMSoch3mS8r2Hcsm5ZXKh" alt="Profile" className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700" width={600} height={400} />
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {/* Welcome Banner */}
                    <section className="bg-gradient-to-r from-primary to-rose-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden shadow-lg shadow-primary/20">
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="text-3xl font-bold mb-3">Welcome back, Faisal! 👋</h1>
                            <p className="text-white/80 text-lg mb-6">You&apos;ve completed 75% of your target preparation for the 2025 IELTS Test. Your current average is 7.5 Band.</p>
                            <div className="flex gap-4">
                                <button className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">play_circle</span> Start Practice
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2.5 rounded-lg font-bold hover:bg-white/30 transition-all">
                                    View Analytics
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-10 translate-y-10">
                            <span className="material-symbols-outlined text-[240px]">school</span>
                        </div>
                    </section>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined">assignment</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Tests Taken</p>
                                <h3 className="text-2xl font-bold">12</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-emerald-600 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Avg Score</p>
                                <h3 className="text-2xl font-bold">7.5</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined">emoji_events</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Best Score</p>
                                <h3 className="text-2xl font-bold">8.5</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined">calendar_today</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Days Left</p>
                                <h3 className="text-2xl font-bold">45</h3>
                            </div>
                        </div>
                    </div>

                    {/* Charts & Tasks Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-xl font-bold">Score Progress</h3>
                                    <p className="text-sm text-slate-500">Your band score trend over the last 8 tests</p>
                                </div>
                                <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary">
                                    <option>Overall Score</option>
                                    <option>Listening</option>
                                    <option>Reading</option>
                                    <option>Writing</option>
                                    <option>Speaking</option>
                                </select>
                            </div>
                            <div className="h-[300px] w-full relative">
                                <canvas ref={chartRef}></canvas>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold mb-4">Start Practicing</h3>

                            <div className="group bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-[#f59e0b] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">record_voice_over</span>
                                    </div>
                                    <span className="font-semibold">Speaking Module</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-amber-500 transition-colors">chevron_right</span>
                            </div>

                            <div className="group bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-[#0ea5e9] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">headphones</span>
                                    </div>
                                    <span className="font-semibold">Listening Practice</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-[#0ea5e9] transition-colors">chevron_right</span>
                            </div>

                            <div className="group bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-emerald-500 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">auto_stories</span>
                                    </div>
                                    <span className="font-semibold">Reading Academy</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-emerald-500 transition-colors">chevron_right</span>
                            </div>

                            <div className="group bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-primary transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">edit_note</span>
                                    </div>
                                    <span className="font-semibold">Writing Tasks</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Tests Table */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="text-xl font-bold">Recent Mock Tests</h3>
                            <button className="text-primary font-semibold text-sm hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Test ID</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Date Completed</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Test Type</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400 text-center">Score (Band)</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#MT-8842</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">May 12, 2024</td>
                                        <td className="px-6 py-4 text-sm">Full Mock Test 14</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">8.0</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                                Passed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-[#0ea5e9] font-medium hover:opacity-80 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span> Report
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#MT-8831</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">May 08, 2024</td>
                                        <td className="px-6 py-4 text-sm">Writing Task 2</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">7.0</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                                Graded
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-[#0ea5e9] font-medium hover:opacity-80 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span> Report
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#MT-8815</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">May 02, 2024</td>
                                        <td className="px-6 py-4 text-sm">Listening Mock</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">7.5</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                                Passed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-[#0ea5e9] font-medium hover:opacity-80 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span> Report
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
