"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Book, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const semesters = [
  { sem: 1, subjects: 6, credits: 24, status: "completed", color: "from-emerald-500 to-teal-500" },
  { sem: 2, subjects: 6, credits: 24, status: "completed", color: "from-emerald-500 to-teal-500" },
  { sem: 3, subjects: 6, credits: 22, status: "completed", color: "from-emerald-500 to-teal-500" },
  { sem: 4, subjects: 6, credits: 26, status: "completed", color: "from-emerald-500 to-teal-500" },
  { sem: 5, subjects: 6, credits: 26, status: "current", color: "from-primary to-indigo-500" },
  { sem: 6, subjects: 6, credits: 27, status: "upcoming", color: "from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700" },
  { sem: 7, subjects: 4, credits: 20, status: "upcoming", color: "from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700" },
  { sem: 8, subjects: 1, credits: 16, status: "upcoming", color: "from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700" },
];

export default function SyllabusScreen() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title="Course Syllabus" showBack />

      <main className="px-4 py-6">
        
        {/* Header Section */}
        <div className="mb-8 relative overflow-hidden rounded-[24px] glass-card border border-primary/20 bg-primary/5 p-6">
          <div className="absolute -right-4 -top-4 opacity-10">
            <GraduationCap size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">B.Des Graphic Design</h2>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs font-bold text-primary shadow-sm">
                8 Semesters Total
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                4 Years
              </span>
            </div>
          </div>
        </div>

        {/* Semesters List */}
        <div className="space-y-4">
          {semesters.map((s, idx) => (
            <Link href={`/academics/syllabus/${s.sem}`} key={s.sem}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "glass-card p-5 rounded-3xl border flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer mt-4",
                  s.status === "current" 
                    ? "border-primary shadow-md shadow-primary/10 ring-1 ring-primary/50" 
                    : "border-slate-200 dark:border-slate-800",
                  s.status === "completed" && "opacity-80"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl bg-gradient-to-tr shadow-sm shrink-0", 
                    s.color
                  )}>
                    S{s.sem}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={cn(
                        "font-bold text-base",
                        s.status === "current" ? "text-primary" : "text-slate-900 dark:text-white"
                      )}>
                        Semester {s.sem}
                      </h3>
                      {s.status === "current" && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Active</span>
                      )}
                      {s.status === "completed" && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Done</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                        <Book size={14} className={s.status === "current" ? "text-primary" : ""} /> 
                        {s.subjects} Subjects
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="text-xs font-bold text-slate-500">
                        {s.credits} Credits
                      </span>
                    </div>
                  </div>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                  s.status === "current" ? "bg-primary text-white border-primary" : "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
                )}>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
