"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ChevronRight, ClipboardList, Clock, GraduationCap, TrendingUp, UserCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const subjects = [
  { name: "Typography Design", code: "DS301", attendance: 88, color: "from-blue-500 to-indigo-500" },
  { name: "Color Theory", code: "DS302", attendance: 75, color: "from-emerald-400 to-emerald-600", warning: true },
  { name: "UI/UX Design", code: "DS303", attendance: 92, color: "from-purple-500 to-purple-700" },
  { name: "Brand Identity", code: "DS304", attendance: 85, color: "from-orange-400 to-orange-600" },
];

export default function Academics() {
  return (
    <div className="min-h-screen pb-28">
      <TopNav title="Academics" />

      <main className="px-4 py-6 space-y-8">
        
        {/* CGPA & Semester Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full rounded-3xl p-6 overflow-hidden bg-slate-900 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent mix-blend-overlay" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex justify-between items-center text-white">
            <div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Current CGPA</p>
              <div className="flex items-end gap-2">
                <h2 className="text-5xl font-black tracking-tighter text-glow">8.75</h2>
                <span className="text-slate-400 font-medium mb-1.5">/ 10</span>
              </div>
              <p className="text-accent text-xs font-bold mt-2 flex items-center gap-1">
                <TrendingUp size={14} /> Prev. Sem CGPA: 8.52
              </p>
            </div>
            
            <div className="w-20 h-20 relative">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stroke-slate-700 stroke-[8] fill-none" />
                <circle
                  cx="50" cy="50" r="40"
                  className="stroke-accent stroke-[8] fill-none stroke-round"
                  strokeDasharray="251.2"
                  strokeDashoffset="31.4" /* 87.5% of 251.2 */
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <TrendingUp size={20} className="text-accent" />
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-6 pt-6 border-t border-slate-700/50 flex justify-between">
            <div>
              <p className="text-slate-400 text-xs">Semester Progress</p>
              <p className="text-white font-bold mt-1">Week 8 of 16</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-xs">Total Credits</p>
              <p className="text-white font-bold mt-1">24</p>
            </div>
          </div>
        </motion.div>

        {/* Syllabus Tab */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Link href="/academics/syllabus" className="glass-card p-5 rounded-3xl flex items-center justify-between border border-primary/40 bg-primary/5 shadow-md shadow-primary/10 active:scale-95 transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-sm">
                <BookOpen size={28} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">Course Syllabus</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">B.Des Graphic Design (8 Semesters)</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
              <ChevronRight size={18} className="text-primary" />
            </div>
          </Link>
        </motion.div>

        {/* Academic Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <Link href="/academics/attendance" className="glass-card p-4 rounded-3xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
              <UserCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Attendance</h3>
              <p className="text-xs text-slate-500 mt-1">View shortages</p>
            </div>
          </Link>

          <Link href="/schedule" className="glass-card p-4 rounded-3xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Timetable</h3>
              <p className="text-xs text-slate-500 mt-1">Daily schedule</p>
            </div>
          </Link>

          <Link href="/academics/assignments" className="glass-card p-4 rounded-3xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
              <ClipboardList size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Assignments</h3>
              <p className="text-xs text-slate-500 mt-1">3 pending</p>
            </div>
          </Link>

          <Link href="/academics/results" className="glass-card p-4 rounded-3xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Internal Marks</h3>
              <p className="text-xs text-slate-500 mt-1">Mid-term results</p>
            </div>
          </Link>
        </motion.div>

        {/* Course List Preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Current Subjects</h3>
            <Link href="/academics/courses" className="text-sm text-primary font-medium flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {subjects.map((subject, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-tr flex items-center justify-center text-white font-bold", subject.color)}>
                    {subject.code.slice(-2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{subject.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{subject.code}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className={cn(
                    "text-sm font-bold",
                    subject.warning ? "text-error" : "text-success"
                  )}>
                    {subject.attendance}%
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-medium">Attendance</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  );
}
