"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const timetableData = {
  Mon: [
    { time: "09:00 AM - 10:30 AM", subject: "Symbol Design & Iconography", type: "Lecture", room: "Studio-1", faculty: "Dr. A. Sharma", color: "from-blue-500 to-indigo-500", lightBg: "bg-blue-50 dark:bg-blue-900/20" },
    { time: "10:30 AM - 12:00 PM", subject: "Design Management – I", type: "Lecture", room: "Studio-2", faculty: "Prof. R. Verma", color: "from-emerald-400 to-emerald-600", lightBg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { time: "01:00 PM - 03:00 PM", subject: "Photography Lab", type: "Lab", room: "Mac Lab-3", faculty: "Dr. S. Gupta", color: "from-purple-500 to-purple-700", lightBg: "bg-purple-50 dark:bg-purple-900/20" },
  ],
  Tue: [
    { time: "09:00 AM - 10:30 AM", subject: "Storytelling Through Photography", type: "Lecture", room: "Studio-3", faculty: "Prof. K. Singh", color: "from-orange-400 to-orange-600", lightBg: "bg-orange-50 dark:bg-orange-900/20" },
    { time: "11:00 AM - 01:00 PM", subject: "Film Production Workshop", type: "Lab", room: "Mac Lab-1", faculty: "Prof. R. Verma", color: "from-emerald-400 to-emerald-600", lightBg: "bg-emerald-50 dark:bg-emerald-900/20" },
  ],
  // ...other days would be similar
};

export default function TimetableScreen() {
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Timetable" showBack />

      <div className="sticky top-[68px] z-30 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center bg-slate-200 dark:bg-slate-800 p-1 rounded-2xl">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                "flex-1 py-2 rounded-xl text-sm font-bold transition-all",
                activeDay === day
                  ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              )}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <main className="px-4 py-6">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800"
        >
          {(timetableData as Record<string, { time: string; subject: string; type: string; room: string; faculty: string; color: string; lightBg: string }[]>)[activeDay]?.map((session, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Timeline Dot */}
              <div className={cn(
                "absolute left-0 top-6 w-10 h-10 -ml-[20px] rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 shadow-sm z-10 bg-gradient-to-tr",
                session.color
              )}>
                <Clock size={16} className="text-white" />
              </div>

              <div className={cn("rounded-3xl p-4 border border-slate-200 dark:border-slate-800", session.lightBg)}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{session.subject}</h4>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r",
                    session.color
                  )}>
                    {session.type}
                  </span>
                </div>
                
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  {session.time}
                </div>
                
                <div className="flex gap-4 text-xs text-slate-500 font-medium border-t border-slate-200/50 dark:border-slate-700/50 pt-3 mt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} /> {session.room}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} /> {session.faculty}
                  </div>
                </div>
              </div>
            </div>
          )) || (
            <div className="text-center py-10 text-slate-500">
              <CalendarIcon size={48} className="mx-auto mb-4 opacity-50" />
              <p>No classes scheduled for {activeDay}</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
