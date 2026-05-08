"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Award, Bell, ChevronRight, ClipboardCheck, Edit3, GraduationCap, IdCard, ShieldCheck, User, QrCode } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-indigo-100/80 via-purple-50/50 to-slate-50 dark:from-indigo-900/30 dark:via-purple-900/10 dark:to-slate-900 pointer-events-none" />

      <TopNav title="" showBack />

      <main className="px-4 pt-2 space-y-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mt-2"
        >
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-[6px] border-white dark:border-slate-800 shadow-sm overflow-hidden mb-4">
            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Chahat Taneja</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">B.Des Graphic Design • 3rd Year</p>
          
          <div className="flex items-center gap-2 bg-slate-200/60 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-6">
            <IdCard size={14} className="text-slate-600 dark:text-slate-300" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">ID: 2024BD089</span>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#312E81] dark:bg-blue-600 text-white flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform flex-1">
              <Edit3 size={16} /> Edit Profile
            </button>
            <Link href="/profile/digital-id" className="bg-white text-[#312E81] border border-[#312E81]/20 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400/20 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform flex-1">
              <QrCode size={16} /> Digital ID
            </Link>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400 mb-2" />
            <span className="text-xl font-black text-slate-900 dark:text-white leading-tight">8.75</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">CGPA</span>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <ClipboardCheck size={20} className="text-blue-600 dark:text-blue-400 mb-2" />
            <span className="text-xl font-black text-slate-900 dark:text-white leading-tight">85%</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Attendance</span>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <Award size={20} className="text-amber-600 dark:text-amber-500 mb-2" />
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-black text-slate-900 dark:text-white leading-tight">120</span>
              <span className="text-xs font-bold text-slate-400">/160</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Credits</span>
          </div>
        </motion.div>

        {/* Personal Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 mt-6"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-700">
            <User size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Personal Details</h3>
          </div>

          <div className="space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-700/50 pb-3">
              <p className="text-[11px] text-slate-400 font-medium mb-1">Date of Birth</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">15 Aug 2003</p>
            </div>
            <div className="border-b border-slate-100 dark:border-slate-700/50 pb-3">
              <p className="text-[11px] text-slate-400 font-medium mb-1">Blood Group</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">O+</p>
            </div>
            <div className="border-b border-slate-100 dark:border-slate-700/50 pb-3">
              <p className="text-[11px] text-slate-400 font-medium mb-1">Contact Number</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">+91 98765 43210</p>
            </div>
            <div className="pb-1">
              <p className="text-[11px] text-slate-400 font-medium mb-1">Official Email</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">chahat.s@campusone.edu</p>
            </div>
          </div>
        </motion.div>

        {/* Settings Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Settings</h4>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <Link href="#" className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-slate-600 dark:text-slate-400" />
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">Account Security</span>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </Link>
            
            <Link href="#" className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-slate-600 dark:text-slate-400" />
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">Notifications</span>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
