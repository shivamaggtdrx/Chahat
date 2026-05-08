"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Clock, MapPin, User, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

const scheduleData = {
  13: [], // Sun
  14: [ // Mon
    { id: 1, time: "09:00 AM - 10:30 AM", subject: "Typography Design", type: "Lecture", room: "Studio-1", faculty: "Dr. A. Sharma", color: "from-blue-500 to-indigo-500", lightBg: "bg-blue-50 dark:bg-blue-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { id: 2, time: "10:30 AM - 12:00 PM", subject: "Color Theory", type: "Lecture", room: "Studio-2", faculty: "Prof. R. Verma", color: "from-emerald-400 to-emerald-600", lightBg: "bg-emerald-50 dark:bg-emerald-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { id: 3, time: "01:00 PM - 03:00 PM", subject: "UI/UX Lab", type: "Lab", room: "Mac Lab-3", faculty: "Dr. S. Gupta", color: "from-purple-500 to-purple-700", lightBg: "bg-purple-50 dark:bg-purple-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
  ],
  15: [ // Tue
    { id: 4, time: "09:00 AM - 10:30 AM", subject: "Brand Identity", type: "Lecture", room: "Studio-3", faculty: "Prof. K. Singh", color: "from-orange-400 to-orange-600", lightBg: "bg-orange-50 dark:bg-orange-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { id: 5, time: "11:00 AM - 01:00 PM", subject: "Color Theory Lab", type: "Lab", room: "Mac Lab-1", faculty: "Prof. R. Verma", color: "from-emerald-400 to-emerald-600", lightBg: "bg-emerald-50 dark:bg-emerald-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { id: 6, time: "02:00 PM - 03:30 PM", subject: "Typography Exam", type: "Exam", room: "Studio-2", faculty: "Dr. A. Sharma", color: "from-error to-red-600", lightBg: "bg-red-50 dark:bg-red-900/20", mapUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
  ],
  16: [], // Wed
  17: [], // Thu
};

export default function ScheduleScreen() {
  const [activeDate, setActiveDate] = useState<number>(15);
  const [activeClassId, setActiveClassId] = useState<number>(4); // Default to first class of Tue

  const sessions = (scheduleData as Record<number, { id: number; subject: string; type: string; time: string; room: string; faculty: string; color: string; lightBg: string }[]>)[activeDate] || [];
  const activeSession = sessions.find((s: { id: number }) => s.id === activeClassId) || sessions[0];

  useEffect(() => {
    if (sessions.length > 0) {
      setActiveClassId(sessions[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDate]);

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Daily Schedule" showBack />

      <main className="px-4 py-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">This Week</h2>
        
        {/* Date Selector */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 mb-4">
          {[13, 14, 15, 16, 17].map((date) => (
            <button
              key={date}
              onClick={() => setActiveDate(date)}
              className={`flex flex-col items-center justify-center min-w-[64px] p-3 rounded-2xl border transition-all ${
                activeDate === date 
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/30 scale-105" 
                  : "bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700"
              }`}
            >
              <span className="text-xs font-medium uppercase mb-1">
                {date === 13 ? "Sun" : date === 14 ? "Mon" : date === 15 ? "Tue" : date === 16 ? "Wed" : "Thu"}
              </span>
              <span className={`text-xl font-bold ${activeDate === date ? "text-white" : "text-slate-900 dark:text-white"}`}>
                {date}
              </span>
            </button>
          ))}
        </div>

        {/* Fixed Campus Map */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[24px] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 h-48 mb-6"
        >
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
                <span className="block text-sm font-bold shadow-sm">Routing to: {activeSession?.room || "Campus Center"}</span>
                <span className="block text-xs text-white/80">{activeSession?.subject || "No class selected"}</span>
              </div>
            </div>
          </div>
          
          {/* Animated Path Simulation */}
          {activeSession && (
            <>
              <motion.div 
                key={`path-${activeClassId}`}
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-[45%] left-[25%] h-1.5 bg-primary rounded-full blur-[0.5px] origin-left rotate-12"
              />
              
              {/* Location Pin */}
              <motion.div
                key={`pin-${activeClassId}`}
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                className="absolute top-[48%] left-[62%] w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"
              >
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Selected Date Details */}
        <motion.div
          key={activeDate}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 pt-2"
        >
          {sessions.length > 0 ? sessions.map((session: { id: number; subject: string; type: string; time: string; room: string; faculty: string; color: string; lightBg: string }) => (
            <div key={session.id} className="relative pl-12">
              {/* Timeline Dot */}
              <div className={cn(
                "absolute left-0 top-6 w-10 h-10 -ml-[20px] rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 shadow-sm z-10 bg-gradient-to-tr",
                session.color
              )}>
                <Clock size={16} className="text-white" />
              </div>

              <div 
                onClick={() => setActiveClassId(session.id)}
                className={cn(
                  "rounded-3xl p-4 border transition-all cursor-pointer", 
                  session.lightBg,
                  activeClassId === session.id ? "border-primary shadow-md shadow-primary/10 ring-1 ring-primary" : "border-slate-200 dark:border-slate-800"
                )}
              >
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
                
                <div className="flex gap-4 text-xs text-slate-500 font-medium border-t border-slate-200/50 dark:border-slate-700/50 pt-3">
                  <div className="flex items-center gap-1.5">
                    <User size={14} /> {session.faculty}
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <MapPin size={14} /> {session.room}
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-slate-500 pl-8">
              <p>No classes scheduled.</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
