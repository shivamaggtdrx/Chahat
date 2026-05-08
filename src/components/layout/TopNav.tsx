"use client";

import { Bell, Menu, Search, X, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface TopNavProps {
  title?: string;
  showBack?: boolean;
}

export function TopNav({ title = "Life OS", showBack = false }: TopNavProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Academics", href: "/academics" },
    { label: "Juries", href: "/juries" },
    { label: "Notes", href: "/notes" },
    { label: "Attendance", href: "/academics/attendance" },
    { label: "Results", href: "/academics/results" },
    { label: "Placement Cell", href: "/placements" },
    { label: "Campus Map", href: "/map" },
    { label: "Schedule", href: "/schedule" },
    { label: "Calendar", href: "/events" },
    { label: "Holiday Calendar", href: "/holidays" },
    { label: "Settings", href: "/profile/settings" },
    { label: "Help & Support", href: "/help" },
  ];

  return (
    <>
      <div className="sticky top-0 z-40 w-full glass">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            {showBack ? (
              <button
                onClick={() => router.back()}
                className="p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft size={24} className="text-slate-700 dark:text-slate-300" />
              </button>
            ) : (
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Menu size={24} className="text-slate-700 dark:text-slate-300" />
              </button>
            )}
            <h1 className="text-[24px] font-black tracking-tight italic text-[#8B5CF6]">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/search" className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors block">
              <Search size={20} className="text-slate-700 dark:text-slate-300" />
            </Link>
            <Link href="/notifications" className="relative block">
              <div className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Bell size={20} className="text-slate-700 dark:text-slate-300" />
              </div>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm max-w-md mx-auto"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-[320px] bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
            >
              <div className="p-6 pb-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <div className="w-[44px] h-[44px] rounded-[14px] bg-gradient-to-br from-[#38BDF8] to-[#3B82F6] flex flex-col items-start justify-center text-white font-black text-[16px] leading-[1.1] pl-2 shadow-sm">
                    <span>L-</span>
                    <span>OS</span>
                  </div>
                  <div className="pt-1">
                    <h2 className="font-bold text-[20px] text-[#0F172A] dark:text-white leading-none mb-1.5 tracking-tight">Life OS</h2>
                    <p className="text-[13px] text-[#64748B] font-medium leading-none">Your Campus Companion</p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={22} className="text-[#64748B]" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
                <div className="flex flex-col gap-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.label}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-center text-slate-400">Life OS v1.0.0</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
