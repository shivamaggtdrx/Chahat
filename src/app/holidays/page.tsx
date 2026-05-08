"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MoreVertical, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HolidaysScreen() {
  return (
    <div className="min-h-screen pb-28 bg-[#F8FAFC] relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-100/60 via-purple-50/40 to-[#F8FAFC] pointer-events-none" />

      <TopNav title="" showBack />

      <main className="px-4 pt-2 space-y-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[32px] font-black text-slate-900 leading-[1.1] mb-2 tracking-tight">Holiday<br/>Calendar</h1>
          <p className="text-slate-600 font-medium text-[13px] mb-5">Academic Year 2026 - 2027</p>
          
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-[11px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100/50 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-600" /> Public Holiday
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-[11px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100/50 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600" /> Institutional
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-[11px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100/50 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-800" /> Exams
            </span>
          </div>
        </motion.div>

        {/* Calendar Widget */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/50"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-[#4338CA] text-lg">October 2026</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{day}</div>
            ))}
            
            {/* Previous month days */}
            {[24, 25, 26, 27, 28, 29, 30].map(d => (
              <div key={`prev-${d}`} className="text-xs text-slate-300/60 py-1.5 font-medium">{d}</div>
            ))}
            
            {/* Days 1-31 */}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              let bg = "transparent";
              let text = "text-slate-700";
              
              if (day === 2 || day === 24) {
                bg = "bg-red-100";
                text = "text-red-700 font-bold";
              } else if (day >= 10 && day <= 12) {
                bg = "bg-[#9A4B13]";
                text = "text-white font-bold shadow-sm";
              } else if (day === 15) {
                bg = "bg-[#2563EB]";
                text = "text-white font-bold shadow-sm";
              }

              return (
                <div key={day} className="flex justify-center">
                  <div className={cn("w-[28px] h-[28px] flex items-center justify-center rounded-lg text-xs", bg, text)}>
                    {day}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Semester Overview & Sync Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Semester Overview */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/50 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none" />
            <h3 className="font-bold text-slate-900 mb-0.5 text-sm">Semester Overview</h3>
            <p className="text-[11px] text-slate-500 font-medium mb-4">Fall Semester Progress</p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className="stroke-indigo-100/60 stroke-[10] fill-none" />
                  <circle
                    cx="50" cy="50" r="40"
                    className="stroke-[#4338CA] stroke-[10] fill-none stroke-round"
                    strokeDasharray="251.2"
                    strokeDashoffset="138.16"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-black text-[#4338CA]">45%</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight mb-0.5">60 Days Remaining</p>
                <p className="text-[10px] text-slate-500 font-medium">until final exams</p>
              </div>
            </div>
          </div>

          {/* Sync Calendar */}
          <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col items-center text-center">
            <button className="w-12 h-12 rounded-full bg-[#4F46E5] flex items-center justify-center text-white mb-3 shadow-[0_8px_16px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform active:scale-95">
              <RefreshCw size={20} />
            </button>
            <h3 className="font-bold text-slate-900 mb-1 text-sm">Sync Calendar</h3>
            <p className="text-[11px] text-slate-500 font-medium px-4">Add academic dates to your personal device.</p>
          </div>
        </motion.div>

        {/* Upcoming Holidays List */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon size={20} className="text-[#4338CA]" />
            <h2 className="text-[17px] font-bold text-slate-900">Upcoming Holidays</h2>
          </div>

          <div className="space-y-3">
            {[
              { date: "02", month: "OCT", title: "Gandhi Jayanti", type: "Public Holiday", dot: "bg-red-600" },
              { date: "15", month: "OCT", title: "University Foundation Day", type: "Institutional Holiday", dot: "bg-blue-600" },
              { date: "24", month: "OCT", title: "Dussehra", type: "Public Holiday", dot: "bg-red-600" },
            ].map((holiday, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-3 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100/80">
                <div className="w-12 h-12 rounded-[14px] bg-indigo-50/80 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[15px] font-black text-[#4338CA] leading-none mb-0.5">{holiday.date}</span>
                  <span className="text-[9px] font-bold text-[#4338CA]/70">{holiday.month}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-[13px]">{holiday.title}</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${holiday.dot}`} />
                    <span className="text-[10px] text-slate-500 font-medium">{holiday.type}</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-50">
                  <MoreVertical size={16} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  );
}
