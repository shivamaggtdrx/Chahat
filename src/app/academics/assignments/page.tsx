"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Clock, FileText, UploadCloud, Loader2, Star, Download, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = ["Pending", "Submitted", "Graded"];

const initialPending = [
  { id: 1, subject: "Symbol Design & Iconography", title: "Icon System Creation Project", due: "Tomorrow, 11:59 PM", priority: "high", status: "pending" },
  { id: 2, subject: "Design Management – I", title: "Brand Strategy Case Study", due: "Oct 12, 10:00 AM", priority: "medium", status: "pending" },
  { id: 3, subject: "Storytelling Through Photography", title: "Photo Essay Submission", due: "Oct 15, 11:59 PM", priority: "low", status: "pending" },
];

const initialSubmitted = [
  { id: 10, subject: "Film Production Workshop", title: "Short Film Storyboard", submittedOn: "Oct 10, 04:30 PM", file: "storyboard_final.pdf" },
  { id: 11, subject: "Symbol Design & Iconography", title: "Symbol System Research", submittedOn: "Oct 08, 11:15 AM", file: "symbol_research.docx" },
];

const initialGraded = [
  { id: 20, subject: "Photography", title: "Light & Shadow Portfolio", gradedOn: "Sep 28", score: "95/100", feedback: "Excellent composition and creative use of natural lighting.", file: "light_shadow_portfolio.pdf" },
  { id: 21, subject: "Personal Imprint & Acting", title: "Self-Portrait Presentation", gradedOn: "Sep 20", score: "88/100", feedback: "Good expressive range, but need more depth in concept.", file: "self_portrait.pdf" },
];

export default function AssignmentsScreen() {
  const [activeTab, setActiveTab] = useState("Pending");
  const [pendingTasks, setPendingTasks] = useState(initialPending);
  const [submittedTasks, setSubmittedTasks] = useState(initialSubmitted);
  const [uploadingId, setUploadingId] = useState<number | null>(null);
  const [successId, setSuccessId] = useState<number | null>(null);

  const handleUpload = (task: { id: number; subject: string; title: string; due: string; priority: string; status: string }) => {
    setUploadingId(task.id);
    
    // Simulate upload process
    setTimeout(() => {
      setUploadingId(null);
      setSuccessId(task.id);
      
      // Move to submitted after showing success
      setTimeout(() => {
        setSuccessId(null);
        setPendingTasks(prev => prev.filter(t => t.id !== task.id));
        setSubmittedTasks(prev => [
          { 
            id: task.id, 
            subject: task.subject, 
            title: task.title, 
            submittedOn: "Just now", 
            file: `${task.title.replace(/\s+/g, '_').toLowerCase()}.pdf` 
          }, 
          ...prev
        ]);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Assignments" showBack />

      {/* Header & Progress Section */}
      <div className="px-4 pt-6 pb-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Assignments</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
          Track and manage your coursework efficiently.
        </p>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Semester Progress</h3>
          <div className="flex items-center justify-between mb-3">
            <p className="text-slate-500 text-sm">12 of 18 Assignments Completed</p>
            <span className="text-primary font-bold text-xl">66%</span>
          </div>
          {/* Progress Bar */}
          <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="sticky top-[68px] z-30 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 mt-2">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                activeTab === tab
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="px-4 py-6">
        <AnimatePresence mode="wait">
          {/* PENDING TAB */}
          {activeTab === "Pending" && (
            <motion.div
              key="pending"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              {pendingTasks.length > 0 ? pendingTasks.map((task) => (
                <div key={task.id} className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                  
                  {/* Success Overlay Simulation */}
                  <AnimatePresence>
                    {successId === task.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-success/90 dark:bg-success/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-white"
                      >
                        <motion.div
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          <CheckCircle2 size={48} className="mb-2" />
                        </motion.div>
                        <p className="font-bold text-lg">Successfully Uploaded!</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        task.priority === "high" ? "bg-error shadow-[0_0_8px_rgba(239,68,68,0.8)]" : 
                        task.priority === "medium" ? "bg-warning shadow-[0_0_8px_rgba(245,158,11,0.8)]" : 
                        "bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                      )} />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{task.subject}</span>
                    </div>
                    <span className="text-xs font-bold text-error bg-error/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock size={12} /> {task.priority === "high" ? "Urgent" : "Pending"}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">{task.title}</h3>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Calendar size={14} /> Due: {task.due}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText size={14} /> PDF/DOCX
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleUpload(task)}
                      disabled={uploadingId === task.id || successId === task.id}
                      className={cn(
                        "flex-1 py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2",
                        uploadingId === task.id 
                          ? "bg-primary/70 text-white cursor-not-allowed" 
                          : "bg-primary text-white shadow-primary/20"
                      )}
                    >
                      {uploadingId === task.id ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Uploading...
                        </>
                      ) : (
                        <>
                          <UploadCloud size={18} /> Upload Work
                        </>
                      )}
                    </button>
                    <button className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm active:scale-95 transition-transform">
                      Details
                    </button>
                  </div>
                </div>
              )) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <CheckCircle2 size={48} className="mb-4 opacity-20" />
                  <p className="font-medium">All caught up!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* SUBMITTED TAB */}
          {activeTab === "Submitted" && (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              {submittedTasks.map((task) => (
                <div key={task.id} className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{task.subject}</span>
                    <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <FileCheck size={12} /> Submitted
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">{task.title}</h3>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 flex items-center justify-between border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                        <FileText size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{task.file}</p>
                        <p className="text-[10px] text-slate-500">{task.submittedOn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* GRADED TAB */}
          {activeTab === "Graded" && (
            <motion.div
              key="graded"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              {initialGraded.map((task) => (
                <div key={task.id} className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{task.subject}</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star size={12} /> Graded
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 leading-tight">{task.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Score Obtained</p>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">{task.score}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-medium mb-1">Graded On</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{task.gradedOn}</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-3 rounded-xl mb-4">
                    <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="font-bold">Feedback:</span> {task.feedback}
                    </p>
                  </div>

                  <button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm active:scale-95 transition-transform flex items-center justify-center gap-2">
                    <Download size={16} /> Download Feedback
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
