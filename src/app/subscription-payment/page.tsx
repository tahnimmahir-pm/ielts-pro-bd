import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Subscription Payment - IELTS PRO BD',
    description: 'Complete your subscription payment.',
};

export default function SubscriptionPaymentPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-[960px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
                {/* Left Side: Order Summary */}
                <div className="w-full md:w-2/5 bg-slate-50 dark:bg-slate-800/50 p-8 border-r border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <span className="text-xl font-extrabold tracking-tight uppercase">IELTS PRO BD</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Subscription Details</h3>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">school</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-base font-bold leading-tight">Monthly Premium Plan</p>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full access to mock tests, video lessons &amp; feedback.</p>
                                    <button className="mt-2 text-primary text-xs font-semibold hover:underline">Change Plan</button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Plan Price</span>
                                <span className="font-medium">1,500 BDT</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Tax / Processing</span>
                                <span className="font-medium">0 BDT</span>
                            </div>
                            <div className="flex justify-between items-center text-lg font-bold pt-2">
                                <span>Total Amount</span>
                                <span className="text-primary">1,500 BDT</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-3">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <p className="text-xs text-primary/80 leading-normal">Your transaction is secured by AES-256 encryption. Payment data is processed externally.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Payment Methods & Forms */}
                <div className="w-full md:w-3/5 p-8 lg:p-12">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold">Complete Payment</h1>
                        <p className="text-slate-500 text-sm mt-1">Select your preferred payment method below.</p>
                    </header>

                    {/* Payment Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 mb-8">
                        <label className="cursor-pointer flex flex-col items-center gap-2 pb-3 border-b-2 border-primary text-primary transition-colors">
                            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image src="https://download.logo.wine/logo/BKash/BKash-Icon-Logo.wine.png" alt="bKash Logo" className="object-cover" width={600} height={400} />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <input type="radio" name="payment_method" value="bkash" className="text-primary focus:ring-primary h-3.5 w-3.5" defaultChecked />
                                <span className="text-xs font-bold">bKash</span>
                            </div>
                        </label>
                        <label className="cursor-pointer flex flex-col items-center gap-2 pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-colors">
                            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center p-0.5 object-contain overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="Nagad Logo" className="w-full h-full object-contain scale-125" width={600} height={400} />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <input type="radio" name="payment_method" value="nagad" className="text-primary focus:ring-primary h-3.5 w-3.5" />
                                <span className="text-xs font-bold">Nagad</span>
                            </div>
                        </label>
                        <label className="cursor-pointer flex flex-col items-center gap-2 pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-colors">
                            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center p-1 object-contain overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image src="https://backend.shurjopay.com/logo/rocket.png" alt="Rocket Logo" className="w-full h-full object-contain" width={600} height={400} />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <input type="radio" name="payment_method" value="rocket" className="text-primary focus:ring-primary h-3.5 w-3.5" />
                                <span className="text-xs font-bold">Rocket</span>
                            </div>
                        </label>
                    </div>

                    {/* Payment Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-primary focus:border-primary text-sm p-3 dark:text-white" placeholder="John Doe" type="text" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Transaction Number</label>
                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-primary focus:border-primary text-sm p-3 dark:text-white" placeholder="017XXXXXXXX" type="text" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Transaction ID</label>
                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-primary focus:border-primary text-sm p-3 dark:text-white" placeholder="TXN..." type="text" required />
                        </div>
                        <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-6 shadow-lg shadow-[#e11d48]/30" type="submit">
                            <span className="material-symbols-outlined">lock</span>
                            <span>Securely Pay 1,500 BDT</span>
                        </button>
                        <p className="text-center text-[10px] text-slate-400 mt-4 leading-normal">
                            By completing this payment, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
