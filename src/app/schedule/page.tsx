"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Clock, MapPin, User, Navigation, FileText, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

// Each day has ONE subject with its class details
const dailySubject: Record<number, {
  subject: string;
  code: string;
  type: string;
  time: string;
  room: string;
  faculty: string;
  color: string;
  lightBg: string;
} | null> = {
  13: null, // Sun - no class
  14: {
    subject: "Symbol Design & Iconography",
    code: "DS506",
    type: "Lecture",
    time: "09:00 AM - 12:00 PM",
    room: "Studio-1",
    faculty: "Dr. A. Sharma",
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
  },
  15: {
    subject: "Symbol Design & Iconography",
    code: "DS506",
    type: "Studio",
    time: "09:00 AM - 12:00 PM",
    room: "Studio-1",
    faculty: "Dr. A. Sharma",
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
  },
  16: {
    subject: "Symbol Design & Iconography",
    code: "DS506",
    type: "Workshop",
    time: "09:00 AM - 12:00 PM",
    room: "Studio-1",
    faculty: "Dr. A. Sharma",
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
  },
  17: {
    subject: "Symbol Design & Iconography",
    code: "DS506",
    type: "Review",
    time: "09:00 AM - 12:00 PM",
    room: "Studio-1",
    faculty: "Dr. A. Sharma",
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
  },
};

// Assignments accumulate day-by-day; older ones count down
const assignmentsByDay: Record<number, { title: string; dueInDays: number; isNew?: boolean }[]> = {
  13: [], // Sun
  14: [ // Mon — Day 1: 2 assignments given, each 7 days due
    { title: "Icon Grid System Design", dueInDays: 7 },
    { title: "Symbol Research Report", dueInDays: 7 },
  ],
  15: [ // Tue — Day 2: previous 2 now 6 days, + 1 new (7 days)
    { title: "Icon Grid System Design", dueInDays: 6 },
    { title: "Symbol Research Report", dueInDays: 6 },
    { title: "Cultural Symbol Analysis", dueInDays: 7, isNew: true },
  ],
  16: [ // Wed — Day 3: previous 3 now -1, + 1 new (7 days)
    { title: "Icon Grid System Design", dueInDays: 5 },
    { title: "Symbol Research Report", dueInDays: 5 },
    { title: "Cultural Symbol Analysis", dueInDays: 6 },
    { title: "Brand Icon Set Creation", dueInDays: 7, isNew: true },
  ],
  17: [ // Thu — Day 4: previous 4 now -1, + 1 new (7 days)
    { title: "Icon Grid System Design", dueInDays: 4 },
    { title: "Symbol Research Report", dueInDays: 4 },
    { title: "Cultural Symbol Analysis", dueInDays: 5 },
    { title: "Brand Icon Set Creation", dueInDays: 6 },
    { title: "Iconography Presentation Deck", dueInDays: 7, isNew: true },
  ],
};

function getDueBadgeStyle(days: number) {
  if (days <= 3) return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
  if (days <= 5) return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
  return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
}

function getDueBarColor(days: number) {
  if (days <= 3) return "bg-red-500";
  if (days <= 5) return "bg-amber-500";
  return "bg-emerald-500";
}

export default function ScheduleScreen() {
  const [activeDate, setActiveDate] = useState<number>(14);

  const todaySubject = dailySubject[activeDate];
  const todayAssignments = assignmentsByDay[activeDate] || [];

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Daily Schedule" showBack />

      <main className="px-4 py-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">This Week</h2>
        
        {/* Date Selector */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 mb-6">
          {[13, 14, 15, 16, 17].map((date) => {
            const hasClass = dailySubject[date] !== null;
            return (
              <button
                key={date}
                onClick={() => setActiveDate(date)}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[64px] p-3 rounded-2xl border transition-all relative",
                  activeDate === date
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/30 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700"
                )}
              >
                <span className="text-xs font-medium uppercase mb-1">
                  {date === 13 ? "Sun" : date === 14 ? "Mon" : date === 15 ? "Tue" : date === 16 ? "Wed" : "Thu"}
                </span>
                <span className={cn("text-xl font-bold", activeDate === date ? "text-white" : "text-slate-900 dark:text-white")}>
                  {date}
                </span>
                {hasClass && activeDate !== date && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white dark:border-slate-800" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content for selected day */}
        <motion.div
          key={activeDate}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-5"
        >
          {todaySubject ? (
            <>
              {/* Campus Map */}
              <div className="relative rounded-[24px] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 h-44">
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Campus Map" 
                  fill
                  className="object-cover opacity-90 mix-blend-luminosity dark:mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 shrink-0">
                      <Navigation size={18} className="text-primary fill-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold">Routing to: {todaySubject.room}</span>
                      <span className="block text-xs text-white/80">{todaySubject.subject}</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated Path */}
                <motion.div 
                  key={`path-${activeDate}`}
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[45%] left-[25%] h-1.5 bg-primary rounded-full blur-[0.5px] origin-left rotate-12"
                />
                <motion.div
                  key={`pin-${activeDate}`}
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="absolute top-[48%] left-[62%] w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"
                >
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </motion.div>
              </div>

              {/* Subject Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={cn(
                  "rounded-3xl p-5 border-2 border-primary/30 shadow-lg shadow-primary/5 relative overflow-hidden",
                  todaySubject.lightBg
                )}
              >
                {/* Accent glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{todaySubject.code}</span>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">{todaySubject.subject}</h3>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r shrink-0",
                      todaySubject.color
                    )}>
                      {todaySubject.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">
                    <Clock size={15} className="text-primary" />
                    {todaySubject.time}
                  </div>
                  
                  <div className="flex gap-5 text-xs text-slate-500 font-medium border-t border-slate-200/60 dark:border-slate-700/40 pt-3">
                    <div className="flex items-center gap-1.5">
                      <User size={14} /> {todaySubject.faculty}
                    </div>
                    <div className="flex items-center gap-1.5 text-primary">
                      <MapPin size={14} /> {todaySubject.room}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Assignments Section */}
              {todayAssignments.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <FileText size={18} className="text-primary" />
                      Assignments
                    </h3>
                    <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {todayAssignments.length} Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {todayAssignments.map((assignment, idx) => (
                      <motion.div
                        key={`${activeDate}-${idx}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.08 }}
                        className={cn(
                          "bg-white dark:bg-slate-800 rounded-2xl p-4 border shadow-sm relative overflow-hidden",
                          assignment.isNew
                            ? "border-primary/30 ring-1 ring-primary/20"
                            : "border-slate-100 dark:border-slate-700/60"
                        )}
                      >
                        {/* New assignment badge */}
                        {assignment.isNew && (
                          <div className="absolute top-0 right-0">
                            <span className="bg-primary text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl-lg">
                              New
                            </span>
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            {/* Priority indicator */}
                            <div className={cn(
                              "w-1.5 h-10 rounded-full shrink-0 mt-0.5",
                              getDueBarColor(assignment.dueInDays)
                            )} />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight truncate">
                                {assignment.title}
                              </h4>
                              <div className="flex items-center gap-1.5 mt-1.5">
                                <Clock size={12} className="text-slate-400 shrink-0" />
                                <span className="text-[11px] text-slate-500 font-medium">
                                  Due in {assignment.dueInDays} {assignment.dueInDays === 1 ? "day" : "days"}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Due days badge */}
                          <div className={cn(
                            "px-2.5 py-1 rounded-xl text-[11px] font-bold shrink-0 flex items-center gap-1",
                            getDueBadgeStyle(assignment.dueInDays)
                          )}>
                            {assignment.dueInDays <= 3 && <AlertCircle size={11} />}
                            {assignment.dueInDays}d
                          </div>
                        </div>

                        {/* Progress bar showing time remaining */}
                        <div className="mt-3 h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(assignment.dueInDays / 7) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.3 + idx * 0.08 }}
                            className={cn("h-full rounded-full", getDueBarColor(assignment.dueInDays))}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                <Clock size={32} className="opacity-40" />
              </div>
              <p className="font-bold text-lg text-slate-600 dark:text-slate-400 mb-1">No Classes Today</p>
              <p className="text-sm text-slate-400">Enjoy your day off! 🎉</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
