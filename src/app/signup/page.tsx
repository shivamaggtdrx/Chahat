"use client";

import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Book, Briefcase } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="dark min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden px-6 py-12">
      {/* Animated background shapes */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join Life OS platform</p>
        </div>

        <div className="glass-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary" />

          <form onSubmit={handleSignup} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <div className="relative">
                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="e.g. Chahat Taneja" className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600" required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Student ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Briefcase size={18} className="text-slate-500" /></div>
                <input type="text" placeholder="e.g. STU2026DES" className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600" required />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="space-y-1 flex-[2]">
                <label className="text-sm font-medium text-slate-300 ml-1">Course</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Book size={18} className="text-slate-500" /></div>
                  <input type="text" placeholder="e.g. B.Des Graphic Design" className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600" required />
                </div>
              </div>

              <div className="space-y-1 flex-1 min-w-[120px]">
                <label className="text-sm font-medium text-slate-300 ml-1">Semester</label>
                <div className="relative">
                  <select className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none" required defaultValue="">
                    <option value="" disabled>Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>Sem {sem}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Mail size={18} className="text-slate-500" /></div>
                <input type="email" placeholder="college@student.edu" className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600" required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Lock size={18} className="text-slate-500" /></div>
                <input type="password" placeholder="••••••••" className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600" required />
              </div>
            </div>

            <button type="submit" className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-accent to-primary text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98] group">
              Sign Up
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-white font-medium hover:text-accent transition-colors">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
