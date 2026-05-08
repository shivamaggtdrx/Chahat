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
    { code: "DS101", name: "Geometrical Construction", credits: 4, type: "Core" },
    { code: "DS102", name: "History of Art Design", credits: 4, type: "Core" },
    { code: "DS103", name: "Visual Culture", credits: 4, type: "Core" },
    { code: "DS104", name: "Design Essentials – (DD-1)", credits: 5, type: "Core" },
    { code: "DS105", name: "Colour and Form", credits: 4, type: "Lab" },
    { code: "HU101", name: "Human Value and Professional Ethics", credits: 3, type: "Elective" },
  ],
  2: [
    { code: "DS201", name: "Analytical Drawing (DD-2)", credits: 4, type: "Core" },
    { code: "HU201", name: "Environmental Science (EVS)", credits: 3, type: "Elective" },
    { code: "DS202", name: "Space Form Structure", credits: 5, type: "Core" },
    { code: "DS203", name: "Composition", credits: 4, type: "Core" },
    { code: "DS204", name: "Design Process", credits: 4, type: "Core" },
    { code: "DS205", name: "Departmental Specialization (X)", credits: 4, type: "Lab" },
  ],
  3: [
    { code: "DS301", name: "Aesthetics & Visualisation Techniques", credits: 4, type: "Core" },
    { code: "HU301", name: "Disaster Management", credits: 3, type: "Elective" },
    { code: "HU302", name: "Functional English & Soft Skills", credits: 3, type: "Elective" },
    { code: "DS302", name: "Introduction to Semiotics", credits: 4, type: "Core" },
    { code: "DS303", name: "Design Concepts & Concerns", credits: 4, type: "Core" },
    { code: "DS304", name: "Drawing and Visualisation I", credits: 4, type: "Lab" },
  ],
  4: [
    { code: "DS401", name: "Basic Graphic Design (BGD)", credits: 5, type: "Core" },
    { code: "DS402", name: "Project – I", credits: 6, type: "Lab" },
    { code: "DS403", name: "Articulating Design & Critique and Feedback", credits: 4, type: "Core" },
    { code: "DS404", name: "Media Appreciation", credits: 4, type: "Core" },
    { code: "DS405", name: "Film Production Process", credits: 4, type: "Core" },
    { code: "DS406", name: "Writing for Film", credits: 3, type: "Core" },
  ],
  5: [
    { code: "DS501", name: "Project 2 – Film Production Workshop", credits: 6, type: "Lab" },
    { code: "DS502", name: "Storytelling Through Photography", credits: 4, type: "Core" },
    { code: "DS503", name: "Photography", credits: 4, type: "Lab" },
    { code: "DS504", name: "Personal Imprint & Acting Presentation Skills", credits: 4, type: "Core" },
    { code: "DS505", name: "Design Management – I", credits: 4, type: "Core" },
    { code: "DS506", name: "Symbol Design & Iconography", credits: 4, type: "Core" },
  ],
  6: [
    { code: "DS601", name: "Branding and Packaging", credits: 5, type: "Core" },
    { code: "DS602", name: "Publication Design (Production Process)", credits: 4, type: "Core" },
    { code: "DS603", name: "Project 3 – Publication Design", credits: 6, type: "Lab" },
    { code: "DS604", name: "Industry Interface", credits: 4, type: "Core" },
    { code: "DS605", name: "Design Management – II (Entrepreneurship)", credits: 4, type: "Core" },
    { code: "DS606", name: "Introduction to User Experience & Interface", credits: 4, type: "Core" },
  ],
  7: [
    { code: "DS701", name: "Research Methodologies", credits: 5, type: "Core" },
    { code: "DS702", name: "Digital Interfaces and Process", credits: 5, type: "Core" },
    { code: "DS703", name: "Influencing Information (Infographics)", credits: 4, type: "Core" },
    { code: "DS704", name: "Project 4 – Interface Design", credits: 6, type: "Lab" },
  ],
  8: [
    { code: "DS801", name: "Design Internship", credits: 16, type: "Core" },
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
