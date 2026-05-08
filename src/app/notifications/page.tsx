"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Calendar, Megaphone, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    type: "jury",
    title: "Symbol Design Jury Scheduled",
    message: "Your final jury for Symbol Design & Iconography is scheduled for Oct 18, 10:00 AM at Studio-1.",
    time: "2 hours ago",
    icon: Calendar,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    unread: true,
  },
  {
    id: 2,
    type: "generic",
    title: "Campus Studio Maintenance",
    message: "Mac Lab-3 will be closed for software updates tomorrow from 2 PM to 5 PM.",
    time: "Yesterday",
    icon: Megaphone,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    unread: true,
  },
  {
    id: 3,
    type: "assignment",
    title: "Assignment Graded",
    message: "Prof. R. Verma graded your Photography case study. You scored 18/20.",
    time: "Oct 12",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    unread: false,
  },
];

export default function NotificationsScreen() {
  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Notifications" showBack />

      <main className="px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent</h2>
          <button className="text-xs font-bold text-primary flex items-center gap-1">
            <CheckCircle2 size={14} /> Mark all read
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {notifications.map((notif, idx) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "p-4 rounded-3xl border flex gap-4 transition-colors",
                notif.unread
                  ? "bg-white dark:bg-slate-800 border-primary/20 shadow-sm"
                  : "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-70"
              )}
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", notif.bg)}>
                <notif.icon size={24} className={notif.color} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{notif.title}</h3>
                  {notif.unread && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  {notif.message}
                </p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {notif.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
