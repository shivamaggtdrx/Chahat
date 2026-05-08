"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { FileText, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock database mapping semester to its subjects
interface Subject {
  code: string;
  name: string;
  credits: number;
  type: string;
}

const semesterSubjects: Record<number, Subject[]> = {
  1: [
    { code: "DS101", name: "Design Fundamentals", credits: 4, type: "Core" },
    { code: "DS102", name: "History of Art & Design", credits: 4, type: "Core" },
    { code: "DS103", name: "Drawing & Composition", credits: 6, type: "Lab" },
    { code: "DS104", name: "Visual Thinking", credits: 4, type: "Core" },
    { code: "HU101", name: "Communication Skills", credits: 3, type: "Elective" },
    { code: "DS105", name: "Digital Design Basics", credits: 3, type: "Lab" },
  ],
  2: [
    { code: "DS201", name: "Color Theory & Applications", credits: 4, type: "Core" },
    { code: "DS202", name: "Typography I", credits: 4, type: "Core" },
    { code: "DS203", name: "Photography & Lighting", credits: 6, type: "Lab" },
    { code: "DS204", name: "Form & Structure", credits: 4, type: "Core" },
    { code: "HU201", name: "Environmental Studies", credits: 3, type: "Elective" },
    { code: "DS205", name: "Illustration Techniques", credits: 3, type: "Lab" },
  ],
  3: [
    { code: "DS301", name: "Typography Design II", credits: 4, type: "Core" },
    { code: "DS302", name: "UI/UX Fundamentals", credits: 5, type: "Core" },
    { code: "DS303", name: "Packaging Design", credits: 5, type: "Core" },
    { code: "DS304", name: "Brand Identity", credits: 4, type: "Core" },
    { code: "DS305", name: "Advanced Illustration", credits: 4, type: "Lab" },
  ],
  4: [
    { code: "DS401", name: "Web Design & Development", credits: 5, type: "Core" },
    { code: "DS402", name: "Publication Design", credits: 4, type: "Core" },
    { code: "DS403", name: "Motion Graphics I", credits: 5, type: "Lab" },
    { code: "DS404", name: "Design Research Methods", credits: 4, type: "Core" },
    { code: "EL401", name: "Consumer Psychology", credits: 4, type: "Elective" },
  ],
  5: [
    { code: "DS501", name: "Advanced UI/UX Prototyping", credits: 5, type: "Core" },
    { code: "DS502", name: "Motion Graphics II", credits: 5, type: "Lab" },
    { code: "DS503", name: "Advertising Design", credits: 5, type: "Core" },
    { code: "DS504", name: "Design Management", credits: 5, type: "Core" },
  ],
  6: [
    { code: "DS601", name: "Interactive Media", credits: 5, type: "Core" },
    { code: "DS602", name: "Information Design", credits: 5, type: "Core" },
    { code: "DS603", name: "Portfolio Development", credits: 6, type: "Lab" },
    { code: "EL601", name: "Business for Designers", credits: 4, type: "Elective" },
  ],
  7: [
    { code: "DS701", name: "Design Internship / Industry Project", credits: 10, type: "Core" },
    { code: "DS702", name: "Capstone Project Phase I", credits: 6, type: "Lab" },
    { code: "EL701", name: "Future Tech in Design", credits: 2, type: "Elective" },
  ],
  8: [
    { code: "DS801", name: "Capstone Project Phase II", credits: 12, type: "Lab" },
    { code: "DS802", name: "Degree Exhibition & Jury", credits: 4, type: "Core" },
  ],
};

export default function SemesterDetailScreen({ params }: { params: { sem: string } }) {
  const semNum = parseInt(params.sem, 10);
  const subjects = semesterSubjects[semNum] || semesterSubjects[1]; // fallback to sem 1 if missing

  const totalCredits = subjects.reduce((sum, sub) => sum + sub.credits, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title={`Semester ${semNum}`} showBack />

      <main className="px-4 py-6">
        
        {/* Semester Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white shadow-sm">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Semester {semNum}</h2>
              <p className="text-slate-500 text-sm font-medium">B.Des Graphic Design</p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <div className="flex-1 glass-card p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-900 dark:text-white">{subjects.length}</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Subjects</span>
            </div>
            <div className="flex-1 glass-card p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-900 dark:text-white">{totalCredits}</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Credits</span>
            </div>
          </div>
        </div>

        {/* Subjects List */}
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Course Subjects</h3>
        
        <div className="space-y-4">
          {subjects.map((sub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-start justify-between mb-2">
                <span className={cn(
                  "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                  sub.type === "Core" ? "bg-primary/10 text-primary border-primary/20" :
                  sub.type === "Lab" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" :
                  "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
                )}>
                  {sub.type}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  {sub.credits} Credits
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight">{sub.name}</h4>
              <p className="text-xs text-slate-500 font-medium mb-4">{sub.code}</p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs active:scale-95 transition-transform">
                  <FileText size={14} /> View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
