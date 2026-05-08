"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Archive, BookOpen, ChevronRight, FileText, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const semesters = [
  {
    sem: 1,
    title: "Foundation of Design",
    subjects: 6,
    assignments: 18,
    year: "2024–25",
    color: "from-amber-500 to-orange-500",
    bgAccent: "bg-amber-50 dark:bg-amber-900/10",
    borderAccent: "border-amber-200 dark:border-amber-800/40",
  },
  {
    sem: 2,
    title: "Visual Communication Basics",
    subjects: 6,
    assignments: 20,
    year: "2024–25",
    color: "from-rose-500 to-pink-500",
    bgAccent: "bg-rose-50 dark:bg-rose-900/10",
    borderAccent: "border-rose-200 dark:border-rose-800/40",
  },
  {
    sem: 3,
    title: "Design Thinking & Exploration",
    subjects: 6,
    assignments: 22,
    year: "2025–26",
    color: "from-cyan-500 to-blue-500",
    bgAccent: "bg-cyan-50 dark:bg-cyan-900/10",
    borderAccent: "border-cyan-200 dark:border-cyan-800/40",
  },
  {
    sem: 4,
    title: "Advanced Design Practice",
    subjects: 6,
    assignments: 24,
    year: "2025–26",
    color: "from-violet-500 to-purple-500",
    bgAccent: "bg-violet-50 dark:bg-violet-900/10",
    borderAccent: "border-violet-200 dark:border-violet-800/40",
  },
];

export default function PreviousWorkScreen() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title="Previous Work" showBack />

      <main className="px-4 py-6">
        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full rounded-[24px] p-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 mix-blend-overlay" />
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-accent/15 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Archive size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-tight">Reference Archive</h2>
                <p className="text-slate-400 text-xs font-medium mt-0.5">Browse assignments from previous batches</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
                <GraduationCap size={14} className="text-accent" />
                <span className="text-xs font-bold text-white">4 Semesters</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
                <FileText size={14} className="text-accent" />
                <span className="text-xs font-bold text-white">84 Assignments</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-4 mb-6"
        >
          <Users size={18} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed">
            This section contains assignments submitted by senior students across semesters 1–4. 
            Use these as <span className="font-bold">reference material</span> for your coursework.
          </p>
        </motion.div>

        {/* Semester Cards */}
        <div className="space-y-4">
          {semesters.map((s, idx) => (
            <Link href={`/previous-work/${s.sem}`} key={s.sem}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + idx * 0.06 }}
                className={cn(
                  "glass-card p-5 rounded-3xl border flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer mt-4",
                  s.borderAccent,
                  s.bgAccent
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white font-black bg-gradient-to-tr shadow-lg shrink-0",
                    s.color
                  )}>
                    <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">SEM</span>
                    <span className="text-2xl leading-none">{s.sem}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-slate-900 dark:text-white leading-tight mb-1">
                      {s.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-400">
                        <BookOpen size={12} /> {s.subjects} Subjects
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                        <FileText size={12} /> {s.assignments} Works
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 mt-1 block">{s.year}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <ChevronRight size={16} className="text-slate-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
