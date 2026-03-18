"use client";
import Image from 'next/image';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const reviews = [
    {
      name: "Tanvir Ahmed",
      image: "https://i.pravatar.cc/150?u=tanvir",
      quote:
        '"Thank you very much for all materials. I have improved my listening score from 5.5 to 8, studying only your released materials!"',
      score: "8.0",
    },
    {
      name: "Abdullah Al Mamun",
      image: "https://i.pravatar.cc/150?u=abdullah",
      quote:
        '"IELTS PRO BD is the best platform for preparation. The practice tests are exactly like the real exam. Highly recommended!"',
      score: "7.5",
    },
    {
      name: "Faisal Karim",
      image: "https://i.pravatar.cc/150?u=faisal",
      quote:
        '"The speaking tools and expert feedback helped me gain confidence. My score jumped from 6.0 to 8.5 in just 2 months!"',
      score: "8.5",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 pt-8 pb-20 lg:pt-12 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:text-left text-center">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Get Ready For Your <br />
                <span className="text-primary">2025 IELTS</span> Test
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl lg:mx-0 mx-auto">
                Take our mock tests as early as you want to be FREE! Prepare with
                official IELTS practice materials and achieve your target band
                score with expert guidance.
              </p>
              <div className="flex flex-row gap-3 sm:flex-wrap sm:gap-4 lg:justify-start justify-center">
                <button
                  onClick={toggleOptions}
                  className="bg-primary text-white text-sm sm:text-lg px-4 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
                    school
                  </span>
                  Academic
                </button>
                <button
                  onClick={toggleOptions}
                  className="bg-secondary text-white text-sm sm:text-lg px-4 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
                    work
                  </span>
                  General
                </button>
              </div>

              {/* Dropdown Cards */}
              <div
                className={`mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-500 transform ${showOptions
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 hidden"
                  }`}
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-white dark:border-slate-700 shadow-xl flex flex-col items-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer">
                  <div className="h-20 w-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">
                      description
                    </span>
                  </div>
                  <h4 className="text-2xl font-extrabold mb-3">
                    Free Mock Test
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Practice with our free IELTS tests and track your basic
                    progress.
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-white dark:border-slate-700 shadow-xl flex flex-col items-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer">
                  <div className="h-20 w-20 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">
                      payments
                    </span>
                  </div>
                  <h4 className="text-2xl font-extrabold mb-3">
                    Paid Mock Test
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Get detailed expert feedback and personalized score reports.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative">
              <Image src="/hero img.png" alt="IELTS Preparation" className="w-full object-contain animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl" width={600} height={400} />
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 scale-75"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-slate-900" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Why Choose <span className="text-primary">IELTS PRO BD</span>?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Get access to comprehensive IELTS preparation materials and
              achieve your target score with our proven methodology.
            </p>
          </div>
          {/* Row 1: 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-red-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                HELP YOU TO PASS THE REAL EXAM
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Our comprehensive practice materials and mock tests are designed
                to help you pass the official IELTS exam with confidence.
              </p>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold border-t border-slate-50 dark:border-slate-700 pt-4">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>{" "}
                Verified & Trusted
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">quiz</span>
              </div>
              <h3 className="text-xl font-bold mb-4">WHY USE OUR TESTS</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Access authentic speaking and listening tools, complete
                registration support, and focused education materials.
              </p>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold border-t border-slate-50 dark:border-slate-700 pt-4">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>{" "}
                Verified & Trusted
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  trending_up
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">PROVEN SUCCESS</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Join thousands of students who have improved their scores from
                5.5 to 8+ using our comprehensive practice platform.
              </p>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold border-t border-slate-50 dark:border-slate-700 pt-4">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>{" "}
                Verified & Trusted
              </div>
            </div>
          </div>

          {/* Feature Rows Redesign */}
          <div className="flex flex-col gap-0 rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            {/* Row 1: Speaking */}
            <div className="flex flex-col md:flex-row bg-[#E0F2F1] dark:bg-[#004D40]/20 min-h-[140px]">
              <div className="flex-1 p-8 md:p-10 flex items-center">
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Practice speaking with AI-powered feedback and improve your
                  fluency. Develop your skills by learning IELTS in the right
                  way.
                </p>
              </div>
              <div className="w-full md:w-64 bg-[#009688] text-white flex flex-col items-center justify-center p-6 gap-3">
                <div className="h-16 w-16 bg-[#ffc107] rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl text-[#37474F]">
                    mic
                  </span>
                </div>
                <span className="font-black tracking-[0.2em] text-sm">
                  SPEAKING
                </span>
              </div>
            </div>

            {/* Row 2: Listening */}
            <div className="flex flex-col md:flex-row bg-[#FFF8E1] dark:bg-[#FF8F00]/10 min-h-[140px] border-t border-white/20">
              <div className="flex-1 p-8 md:p-10 flex items-center">
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Access hundreds of listening exercises with real exam formats.
                  Stay updated with tips and videos updated regularly to help
                  you prepare.
                </p>
              </div>
              <div className="w-full md:w-64 bg-[#FFC107] text-white flex flex-col items-center justify-center p-6 gap-3">
                <div className="h-16 w-16 bg-[#37474F] rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl text-[#FFC107]">
                    headphones
                  </span>
                </div>
                <span className="font-black tracking-[0.2em] text-sm text-[#37474F]">
                  LISTENING
                </span>
              </div>
            </div>

            {/* Row 3: Registration */}
            <div className="flex flex-col md:flex-row bg-[#E3F2FD] dark:bg-[#0D47A1]/10 min-h-[140px] border-t border-white/20">
              <div className="flex-1 p-8 md:p-10 flex items-center">
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Quick and simple registration process to get started
                  immediately. Our platform is designed to save your time and
                  track your progress daily.
                </p>
              </div>
              <div className="w-full md:w-64 bg-[#0288D1] text-white flex flex-col items-center justify-center p-6 gap-3">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl text-[#0288D1]">
                    person_add
                  </span>
                </div>
                <span className="font-black tracking-[0.2em] text-sm">
                  REGISTRATION
                </span>
              </div>
            </div>

            {/* Row 4: Education */}
            <div className="flex flex-col md:flex-row bg-[#F1F8E9] dark:bg-[#33691E]/10 min-h-[140px] border-t border-white/20">
              <div className="flex-1 p-8 md:p-10 flex items-center">
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Learn from experienced IELTS trainers and certified educators.
                  Get model answers, lessons, and expert advice for each
                  section.
                </p>
              </div>
              <div className="w-full md:w-64 bg-[#689F38] text-white flex flex-col items-center justify-center p-6 gap-3">
                <div className="h-16 w-16 bg-[#FFEB3B] rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl text-[#33691E]">
                    school
                  </span>
                </div>
                <span className="font-black tracking-[0.2em] text-sm">
                  EDUCATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
        id="courses"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tight">
            All <span className="text-primary">Courses</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Choose from our comprehensive collection of specialized IELTS training
            modules
          </p>
        </div>
        <div className="carousel-container relative hover:[&>div]:animate-[scroll_60s_linear_infinite_paused]">
          <div className="flex w-max animate-[scroll_60s_linear_infinite] gap-8 px-4">
            {[1, 2].map((group) => (
              <div key={group} className="flex gap-8">
                <div className="min-w-[350px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 w-[350px]">
                  <div className="h-48 relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBapXVaXnq03PRJwX0H6knAnDpi54umY3H5M3427_Bb_Lge21ugD43UI8Y2sF-rUHJ-3GQTC4vUQCNZC70OpxHlzpYgX5PSndvpOn_XwJ9TiJGTLlsq_nXLTjrplQGSWR7YqbmXuP1YZoGM-ujejH-8f6e2lVTXFuH5pgxCKMJq2vXLU2AIY_MDwdGngqyauf5lfY5GHU34F3n6a_J5SDeGLf6xG-kOB_ueiX5zh4L2xAetF911eXJkvSjWyg7Yl24GTqqm8Ff8emYk" alt="Listening Test" className="w-full h-full object-cover" width={600} height={400} />
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Intermediate
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Listening Masterclass
                    </h3>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>{" "}
                        View
                      </button>
                      <button className="flex-1 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>

                <div className="min-w-[350px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 w-[350px]">
                  <div className="h-48 relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4UVAr7AeMXnxI1AlLvVvtp2IBhFUcmF3lyn4siX5NR_RxN7lTScNRwaMtAH15RewPffbNfHN8LmBLN6aRnUQP_2B_vsArWf2deccSoeFgrzheS9I3KtbConvy_X8C4knj7fbGBK0tiOdkdTzhMtw34pfEO7qt7Z8dtgjon4Ra8VM9DwaPTrXnvKAgnQsqvcY26ZOaXydsvQuIQq0engKpALiE1fJ2QP1vE71Or-3Xqq74dqs6vfwvxGFg267S5VqwhuBQW6l6gyH" alt="Reading Practice" className="w-full h-full object-cover" width={600} height={400} />
                    <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Advanced
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Academic Reading</h3>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>{" "}
                        View
                      </button>
                      <button className="flex-1 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>

                <div className="min-w-[350px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 w-[350px]">
                  <div className="h-48 relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBiBY9jOXpQJ4aa6Kd93zNzvfpmaTqovMnpjmJ_jwX8R0kTu2nR8vdvC7xgMJd3tqGPILX67tPAuYUv--deAqWoJDewC53RU8Y-PIXzYVhlhYKV3MMYI5oCRtks56SsBs0R9XfLY71r07VfSIM3V0uXwBGSxLbLUF5o0hFtzywrTJKaZZhn2saO3Wx10MMcHUeqGcQA8GQjERpCcVMxbsxQm8iOoWIBEY8d5-fvCT4QUY2Ihh34fAozpoD9F0bfFn5fLr4136q4SLT" alt="Speaking Module" className="w-full h-full object-cover" width={600} height={400} />
                    <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Beginner
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Speaking Module</h3>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>{" "}
                        View
                      </button>
                      <button className="flex-1 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>

                <div className="min-w-[350px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 w-[350px]">
                  <div className="h-48 relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVcJ5GUioTCfEaMWEeDsE4HoYCA-U_WyYH6W8nwlsLLBA9Ri5HqOF9nJnx0jNbd0kdi5neMabIOt1lu__75QO8HjjvomRE-XnZNAqUY9Cx_o-UoDkGfLMlCi3c1i5ACgcUVBWeYz0w59ZvLNrtYbrfvFVLJ76B3uHfwvJ64bWqTrELmjApjtX8_hQ__wso5A0Eqzu4V9W8FN020-46cNxBRO2pFoWVNpfIGjyfacTet0ux2HCxKgAs39m-0u5E-R71hR49ZmQMhtfY" alt="Writing Task" className="w-full h-full object-cover" width={600} height={400} />
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      All Levels
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Writing Task 1 &amp; 2
                    </h3>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 hover:-translate-y-1 transition-transform">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>{" "}
                        View
                      </button>
                      <button className="flex-1 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-br from-[#D32F2F] via-[#E53935] to-[#FF6F00] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-8">
            <div className="lg:col-span-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 leading-tight uppercase tracking-tight">
                Online Learning
              </h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#FFEB3B]">
                Learn Anywhere
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed max-w-2xl">
                Access our comprehensive IELTS preparation platform from any
                device. Whether you&apos;re on your computer, tablet, or smartphone,
                our fully responsive design ensures you get the best learning
                experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center flex flex-col items-center">
                  <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      smartphone
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Mobile Friendly</h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Practice anywhere, anytime on your smartphone or tablet with
                    our fully responsive platform
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center flex flex-col items-center">
                  <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      videocam
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    Video Practice Tests
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Watch expert solutions and explanations with our
                    comprehensive video tutorials
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center flex flex-col items-center">
                  <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      military_tech
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Proven to Work</h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Our students consistently achieve their target scores and
                    improve their English skills
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative">
                {/* Tablet Mockup */}
                <div className="w-72 h-[450px] bg-white rounded-[2.5rem] p-4 shadow-2xl relative z-10 border-8 border-white/20 hover:scale-[1.02] transition-transform">
                  <div className="w-full h-full bg-[#E3F2FD] rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                    <div className="text-[#0288D1] flex flex-col items-center">
                      <span className="material-symbols-outlined text-[120px] mb-4">
                        smartphone
                      </span>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full border-2 border-slate-200"></div>
                </div>
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Recommendation Card */}
          <div className="max-w-4xl mx-auto">
            <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center shadow-xl hover:bg-white/20 transition-colors">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                For the best test-taking experience, use a desktop or laptop
                computer
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Full features, please consider taking the test on your desktop or
                laptop, so the system can track your activities and detect
                cheating
              </p>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 translate-y-32 pointer-events-none"></div>
      </section>

      <section
        className="py-6 bg-teal-500 text-white text-center overflow-hidden"
        id="student-reviews"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-[0.2em] text-white">
            Student Review
          </h2>

          <div className="relative min-h-[380px]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ${currentReview === index
                  ? "opacity-100 pointer-events-auto translate-x-0 z-10"
                  : "opacity-0 pointer-events-none translate-x-[100px]"
                  }`}
              >
                <div className="bg-white rounded-3xl p-10 md:p-12 text-slate-800 shadow-2xl relative">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <Image src={review.image} alt={review.name} className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover" width={600} height={400} />
                  </div>

                  <div className="pt-8 text-center">
                    <div className="flex justify-center gap-1 text-yellow-400 mb-6">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                      {review.quote}
                    </blockquote>
                    <div className="font-bold text-xl mb-4 text-slate-900">
                      - {review.name} -
                    </div>
                    <div className="bg-slate-100 py-3 px-6 rounded-full inline-flex items-center gap-2 text-slate-600 font-bold border border-slate-200">
                      <span className="text-red-600">IELTS Score -</span>{" "}
                      {review.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-slate-100 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`rounded-full transition-all duration-300 ${currentReview === index
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                    }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-slate-100 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-extrabold text-primary mb-6">
                  CONTACT US
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  We are here to answer any questions you may have about our
                  IELTS preparation platform. Reach out to us and we&apos;ll respond
                  as soon as we can.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">business</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                      Institute Name
                    </p>
                    <p className="text-xl font-extrabold">IELTS PRO BD</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                      Founder &amp; Owner
                    </p>
                    <p className="text-xl font-extrabold">Md. Shahidullah</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                      Phone / WhatsApp
                    </p>
                    <p className="text-xl font-extrabold">+880 1848-361793</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-12 rounded-[40px] border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                Connect with our Community
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <Link
                  href="#"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="h-12 w-12 bg-[#FF0000] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-white/90 group-hover:text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </div>
                  <span className="font-bold">YouTube</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="h-12 w-12 bg-[#1877F2] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-white/90 group-hover:text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </div>
                  <span className="font-bold">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="h-12 w-12 bg-[#229ED9] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-white/90 group-hover:text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.48 1.02-.73 4-1.74 6.67-2.88 8-3.43 3.81-1.57 4.6-1.84 5.12-1.85.11 0 .37.03.54.17.14.11.18.26.2.38.02.09.02.19.01.28z"></path>
                    </svg>
                  </div>
                  <span className="font-bold">Telegram</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="h-12 w-12 bg-[#25D366] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-white/90 group-hover:text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                    </svg>
                  </div>
                  <span className="font-bold">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
