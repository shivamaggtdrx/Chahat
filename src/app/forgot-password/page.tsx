"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, Eye, EyeOff, Mail, KeyRound, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setStep(2);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if(otp) setStep(3);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate update and redirect to login
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative">
      <Link href="/login" className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-600 hover:text-slate-900 transition-colors">
        <ChevronLeft size={20} />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px]"
      >
        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <h1 className="text-2xl font-black text-slate-900 mb-2">Reset Password</h1>
          <p className="text-sm text-slate-500 font-medium mb-8">
            Follow the steps to secure your student account.
          </p>

          <div className="space-y-0 relative">
            {/* Vertical Line Background */}
            <div className="absolute left-[15px] top-[24px] bottom-[40px] w-[2px] bg-slate-100 z-0" />

            {/* STEP 1: Request Reset */}
            <div className="relative z-10 flex gap-4 pb-6">
              <div className="shrink-0 mt-1">
                {step > 1 ? (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border-2 border-white box-content">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white border-2 border-white box-content shadow-md shadow-indigo-200">
                    <Mail size={14} />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className={cn("font-bold text-sm mb-1", step === 1 ? "text-slate-900" : "text-slate-700")}>Request Reset</h3>
                {step > 1 ? (
                  <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                    <Mail size={10} /> Sent to {email}
                  </p>
                ) : (
                  <form onSubmit={handleSendOtp} className="mt-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your student email"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400 mb-3"
                      required
                    />
                    <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                      Send OTP
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* STEP 2: OTP Verification */}
            <div className="relative z-10 flex gap-4 pb-6">
              <div className="shrink-0 mt-1">
                {step > 2 ? (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border-2 border-white box-content">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                ) : step === 2 ? (
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white border-2 border-white box-content shadow-md shadow-indigo-200">
                    <KeyRound size={14} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-2 border-white box-content">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className={cn("font-bold text-sm mb-1", step === 2 ? "text-slate-900" : "text-slate-500")}>OTP Verification</h3>
                {step > 2 ? (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5,6].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" />)}
                    </div>
                    <span className="text-[10px] font-bold text-indigo-600">Verified</span>
                  </div>
                ) : step === 2 ? (
                  <form onSubmit={handleVerifyOtp} className="mt-3">
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit OTP"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-400 mb-3 tracking-widest font-mono"
                      required
                    />
                    <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                      Verify
                    </button>
                  </form>
                ) : null}
              </div>
            </div>

            {/* STEP 3: Set New Password */}
            <div className="relative z-10 flex gap-4">
              <div className="shrink-0 mt-1">
                {step === 3 ? (
                  <div className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white border-2 border-white box-content shadow-[0_0_15px_rgba(29,78,216,0.3)]">
                    <ShieldCheck size={14} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-2 border-white box-content">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className={cn("font-bold mb-4", step === 3 ? "text-slate-900 text-lg" : "text-sm text-slate-500")}>Set New Password</h3>
                
                {step === 3 && (
                  <form onSubmit={handleUpdatePassword} className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    
                    <div>
                      <div className="relative border-b border-slate-200 focus-within:border-indigo-600 transition-colors pb-2">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="New Password"
                          className="w-full bg-transparent text-slate-900 text-sm focus:outline-none placeholder:text-slate-400 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-0 bottom-2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      
                      {/* Password Strength Indicator */}
                      <div className="mt-3">
                        <div className="flex gap-1.5 h-1.5 w-full mb-1.5">
                          <div className={cn("flex-1 rounded-full", password.length > 0 ? "bg-[#312E81]" : "bg-slate-200")} />
                          <div className={cn("flex-1 rounded-full", password.length > 4 ? "bg-[#312E81]" : "bg-slate-200")} />
                          <div className={cn("flex-1 rounded-full", password.length > 7 ? "bg-[#312E81]" : "bg-slate-200")} />
                          <div className={cn("flex-1 rounded-full", password.length > 10 ? "bg-[#312E81]" : "bg-slate-200")} />
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-slate-500">Password strength</span>
                          <span className={password.length > 7 ? "text-[#312E81]" : "text-slate-400"}>
                            {password.length === 0 ? "" : password.length < 5 ? "Weak" : password.length < 8 ? "Fair" : "Good"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative border-b border-slate-200 focus-within:border-indigo-600 transition-colors pb-2">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full bg-transparent text-slate-900 text-sm focus:outline-none placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#1D4ED8] text-white font-bold text-sm shadow-[0_4px_14px_rgba(29,78,216,0.3)] hover:bg-blue-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-4"
                    >
                      Update Password <Check size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-8 font-medium">
          Need help? <Link href="#" className="text-[#1D4ED8] font-bold hover:underline">Contact IT Support</Link>
        </p>
      </motion.div>
    </div>
  );
}
