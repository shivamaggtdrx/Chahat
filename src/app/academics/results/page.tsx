"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Filter, Type, Palette, Layout } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const subjects = [
  { 
    id: 1, 
    name: "Typography Design", 
    code: "DS301", 
    prof: "Prof. Sharma",
    icon: Type,
    color: "#2563EB", // Blue
    total: 26,
    maxTotal: 30,
    breakdown: [
      { label: "Quiz", score: 8, max: 10 },
      { label: "Assignment", score: 9, max: 10 },
      { label: "Midterm", score: 9, max: 10 }
    ]
  },
  { 
    id: 2, 
    name: "Color Theory", 
    code: "DS302", 
    prof: "Prof. Gupta",
    icon: Palette,
    color: "#9A4B13", // Brown
    total: 22,
    maxTotal: 30,
    breakdown: [
      { label: "Quiz", score: 7, max: 10 },
      { label: "Assignment", score: 8, max: 10 },
      { label: "Midterm", score: 7, max: 10 }
    ]
  },
  { 
    id: 3, 
    name: "UI/UX Design", 
    code: "DS303", 
    prof: "Prof. Reddy",
    icon: Layout,
    color: "#4F46E5", // Indigo
    total: 24,
    maxTotal: 30,
    breakdown: [
      { label: "Quiz", score: 8, max: 10 },
      { label: "Assignment", score: 8, max: 10 },
      { label: "Midterm", score: 8, max: 10 }
    ]
  }
];

const previousSubjects = [
  { 
    id: 11, 
    name: "Design Fundamentals", 
    code: "DS101", 
    prof: "Prof. Anan",
    icon: Layout,
    color: "#2563EB",
    total: 28,
    maxTotal: 30,
    breakdown: [
      { label: "Quiz", score: 10, max: 10 },
      { label: "Assignment", score: 9, max: 10 },
      { label: "Midterm", score: 9, max: 10 }
    ]
  },
  { 
    id: 12, 
    name: "History of Art", 
    code: "DS102", 
    prof: "Prof. Mehra",
    icon: Palette,
    color: "#9A4B13",
    total: 25,
    maxTotal: 30,
    breakdown: [
      { label: "Quiz", score: 8, max: 10 },
      { label: "Assignment", score: 9, max: 10 },
      { label: "Midterm", score: 8, max: 10 }
    ]
  }
];

export default function ResultsScreen() {
  const [selectedSem, setSelectedSem] = useState("Fall 2026");

  const displaySubjects = selectedSem === "Fall 2026" ? subjects : previousSubjects;
  const overallScore = selectedSem === "Fall 2026" ? 24 : 26;
  const progressPercent = selectedSem === "Fall 2026" ? "80%" : "86%";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title="Internal Marks" showBack />

      <main className="px-4 py-4">
        
        {/* Semester Selector */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 pb-2 -mx-4 px-4">
          {["Fall 2026", "Spring 2026", "Fall 2025"].map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSem(sem)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border shrink-0",
                selectedSem === sem
                  ? "bg-[#312E81] dark:bg-blue-600 text-white border-[#312E81] dark:border-blue-600 shadow-md shadow-indigo-500/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50"
              )}
            >
              {sem} {sem === "Fall 2026" && <span className={cn("text-[10px] ml-1.5 px-1.5 py-0.5 rounded", selectedSem === sem ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700")}>Current</span>}
            </button>
          ))}
        </div>

        {/* Overall Average Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#1A1E29] rounded-[24px] p-6 shadow-sm border border-slate-100 dark:border-slate-800/60 mb-8"
        >
          <h3 className="font-bold text-slate-500 text-[11px] tracking-wider uppercase mb-2">Overall Average</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-5xl font-black text-[#312E81] dark:text-blue-500 tracking-tighter">{overallScore}</span>
            <span className="text-2xl font-bold text-slate-400">/ 30</span>
          </div>
          
          <p className="text-[13px] text-slate-700 dark:text-slate-300 font-medium mb-1.5">Excellent standing across {displaySubjects.length} subjects.</p>
          <div className="flex justify-between items-center text-[11px] text-slate-800 dark:text-slate-300 font-bold mb-2">
            <span>Progress to Target</span>
            <span className="text-blue-700 dark:text-blue-400">{progressPercent}</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              key={selectedSem}
              initial={{ width: 0 }}
              animate={{ width: progressPercent }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-[#312E81] dark:bg-blue-500 rounded-full"
            />
          </div>
        </motion.div>

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">Subject Breakdown</h2>
          <button className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 bg-transparent">
            <Filter size={14} /> Filter
          </button>
        </div>

        {/* Subject Cards */}
        <div className="space-y-4">
          {displaySubjects.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-[#1A1E29] rounded-[24px] p-5 shadow-sm border border-slate-100 dark:border-slate-800/60"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" 
                      style={{ backgroundColor: sub.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">{sub.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">{sub.code} • {sub.prof}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xl font-bold tracking-tight" style={{ color: sub.color }}>{sub.total}</span>
                    <span className="text-[11px] font-bold text-slate-400">/{sub.maxTotal}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {sub.breakdown.map((item, i) => {
                    const percentage = (item.score / item.max) * 100;
                    return (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{item.label}</span>
                          <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{item.score}/{item.max}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: sub.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
