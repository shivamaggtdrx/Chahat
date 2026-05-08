"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { AlertCircle, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const attendanceData = [
  { subject: "Typography Design", code: "DS301", total: 40, attended: 35, percentage: 87.5, status: "safe" },
  { subject: "Color Theory", code: "DS302", total: 38, attended: 28, percentage: 73.6, status: "warning" },
  { subject: "UI/UX Design", code: "DS303", total: 42, attended: 39, percentage: 92.8, status: "safe" },
  { subject: "Brand Identity", code: "DS304", total: 40, attended: 29, percentage: 72.5, status: "danger" },
  { subject: "Packaging Design", code: "DS305", total: 35, attended: 32, percentage: 91.4, status: "safe" },
];

export default function AttendanceScreen() {
  const overallPercentage = 84.5;

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Attendance" showBack />

      <main className="px-4 py-6 space-y-6">
        
        {/* Overall Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 relative overflow-hidden bg-gradient-to-br from-primary to-indigo-600 text-white"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          
          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Overall Attendance</p>
              <div className="flex items-end gap-2">
                <h2 className="text-5xl font-black">{overallPercentage}%</h2>
              </div>
              <p className="text-white/90 text-sm mt-2 flex items-center gap-1.5">
                <CheckCircle2 size={16} /> Safe zone (Above 75%)
              </p>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
              <CalendarIcon size={28} className="text-white" />
            </div>
          </div>
        </motion.div>

        {/* Shortage Warning (if any) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-error/10 border border-error/20 rounded-2xl p-4 flex gap-3 text-error"
        >
          <AlertCircle size={24} className="shrink-0" />
          <div>
            <h4 className="font-bold text-sm">Attendance Shortage</h4>
            <p className="text-xs text-error/80 mt-0.5">You are running short of attendance in Brand Identity. Attend 3 more classes to reach 75%.</p>
          </div>
        </motion.div>

        {/* Subject wise list */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Subject Wise</h3>
          
          <div className="space-y-3">
            {attendanceData.map((item, idx) => (
              <div key={idx} className="glass-card p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.subject}</h4>
                    <p className="text-xs text-slate-500">{item.code}</p>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold",
                    item.status === "safe" ? "bg-success/10 text-success" :
                    item.status === "warning" ? "bg-warning/10 text-warning" : "bg-error/10 text-error"
                  )}>
                    {item.percentage}%
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={cn(
                      "h-full rounded-full",
                      item.status === "safe" ? "bg-success" :
                      item.status === "warning" ? "bg-warning" : "bg-error"
                    )}
                  />
                </div>

                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>Attended: <strong className="text-slate-900 dark:text-white">{item.attended}</strong></span>
                  <span>Total: <strong className="text-slate-900 dark:text-white">{item.total}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  );
}
