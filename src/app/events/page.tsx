"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CalendarScreen() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title="Calendar" showBack />

      <main className="px-4 py-6 space-y-6">
        {/* Full Month Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">October 2026</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-xs font-bold text-slate-500 mb-2 uppercase">{day}</div>
            ))}
            
            {/* Empty days for September offset */}
            {Array.from({length: 4}).map((_, i) => (
              <div key={`empty-${i}`} className="text-sm font-medium text-slate-300 dark:text-slate-600 py-2">{27 + i}</div>
            ))}
            
            {/* October days */}
            {Array.from({length: 31}).map((_, i) => {
              const date = i + 1;
              const isSelected = date === 15;
              const hasRedDot = date === 14 || date === 16;
              const hasBlueDot = date === 15 || date === 28;
              
              return (
                <div key={date} className="relative flex flex-col items-center justify-center py-2">
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center text-sm font-bold rounded-2xl relative transition-colors",
                    isSelected ? "bg-primary text-white shadow-md shadow-primary/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}>
                    {date}
                  </div>
                  
                  {/* Indicator dots container */}
                  <div className="flex gap-1 absolute bottom-0">
                    {hasRedDot && <span className="w-1 h-1 bg-error rounded-full" />}
                    {hasBlueDot && !isSelected && <span className="w-1 h-1 bg-blue-500 rounded-full" />}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Upcoming This Month */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 pt-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Upcoming this month</h3>
          </div>

          {/* Event 1 */}
          <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex gap-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" />
            <div className="flex flex-col items-center justify-center w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl shrink-0">
              <span className="text-xs font-bold text-blue-500">OCT</span>
              <span className="text-xl font-black text-blue-600 dark:text-blue-400 leading-none">15</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Design Fest '26</h4>
              <p className="text-xs text-slate-500 mb-2">Campus-wide design exhibition and competition.</p>
              <div className="flex gap-3 text-[11px] font-medium text-slate-500">
                <div className="flex items-center gap-1"><Clock size={12} /> 10:00 AM</div>
                <div className="flex items-center gap-1"><MapPin size={12} /> Main Aud.</div>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex gap-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error" />
            <div className="flex flex-col items-center justify-center w-14 h-14 bg-error/10 rounded-2xl shrink-0">
              <span className="text-xs font-bold text-error">OCT</span>
              <span className="text-xl font-black text-error leading-none">16</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Typography Exam</h4>
              <p className="text-xs text-slate-500 mb-2">Mid-term written examination.</p>
              <div className="flex gap-3 text-[11px] font-medium text-slate-500">
                <div className="flex items-center gap-1"><Clock size={12} /> 2:00 PM</div>
                <div className="flex items-center gap-1"><MapPin size={12} /> Studio-2</div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex gap-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-warning" />
            <div className="flex flex-col items-center justify-center w-14 h-14 bg-warning/10 rounded-2xl shrink-0">
              <span className="text-xs font-bold text-warning">OCT</span>
              <span className="text-xl font-black text-warning leading-none">28</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Final Jury</h4>
              <p className="text-xs text-slate-500 mb-2">Project presentation and portfolio review.</p>
              <div className="flex gap-3 text-[11px] font-medium text-slate-500">
                <div className="flex items-center gap-1"><Clock size={12} /> 9:00 AM</div>
                <div className="flex items-center gap-1"><MapPin size={12} /> Boardroom</div>
              </div>
            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
