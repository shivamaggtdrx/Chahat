"use client";

import React, { useState, useRef } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import {
  Bell,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Clock,
  FileText,
  GraduationCap,
  TrendingUp,
  Upload,
  CheckSquare
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";



const quickAccess = [
  { label: "Schedule", icon: Clock, href: "/schedule", color: "from-blue-500 to-indigo-500" },
  { label: "Notes", icon: FileText, href: "/notes", color: "from-emerald-400 to-emerald-600" },
  { label: "Attendance", icon: TrendingUp, href: "/academics/attendance", color: "from-orange-400 to-orange-600" },
  { label: "Results", icon: GraduationCap, href: "/academics/results", color: "from-purple-500 to-purple-700" },
];

export default function Dashboard() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Mouse drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const scrollPosition = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.scrollWidth / 3;
    const currentIndex = Math.round(scrollPosition / cardWidth);
    setActiveSlide(Math.min(Math.max(currentIndex, 0), 2));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeft.current = carouselRef.current?.scrollLeft || 0;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
      carouselRef.current.style.scrollSnapType = 'none'; // disable snap while dragging
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <div className="min-h-screen pb-28">
      <TopNav title="Life OS" />

      <main className="px-4 py-6 space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Hi, Chahat! 👋</h2>
            <p className="text-slate-500 text-sm">B.Des Graphic Design • Semester 5</p>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 overflow-hidden shadow-sm shrink-0 relative">
            <Image src="/profile.png" alt="Profile" fill className="object-cover" />
          </div>
        </motion.div>

        {/* News Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-4 px-4 cursor-grab active:cursor-grabbing"
            ref={carouselRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {[
              { id: 1, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", title: "National Design Competition '26" },
              { id: 2, src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800", title: "Campus Studio Upgrade" },
              { id: 3, src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800", title: "UI/UX Typography Masterclass" },
            ].map((news) => (
              <div key={news.id} className="min-w-[280px] w-[85%] max-w-[320px] h-48 rounded-[24px] overflow-hidden shadow-lg snap-center relative shrink-0 pointer-events-none">
                <Image src={news.src} alt={news.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-white bg-primary/80 px-2 py-0.5 rounded-md w-fit mb-2">LATEST</span>
                  <h3 className="text-white font-bold text-lg leading-tight">{news.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeSlide === idx ? "w-5 bg-primary" : "w-1.5 bg-slate-300 dark:bg-slate-700"
                )}
              />
            ))}
          </div>
        </div>

        {/* Hero Announcement Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative w-full h-40 rounded-3xl overflow-hidden shadow-lg shadow-primary/20 bg-gradient-to-tr from-primary via-indigo-600 to-accent"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
            <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
              <Bell size={14} className="animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider">Jury Alert</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Mid-Term Juries</h3>
              <p className="text-white/80 text-sm">Starting from Oct 15th. Download schedule now.</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
          {/* Attendance Card */}
          <div className="glass-card p-4 rounded-[24px] border border-slate-100 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50/80 dark:bg-indigo-900/30 flex items-center justify-center">
                <CheckSquare size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-[11px] font-bold bg-[#E8D5C4] dark:bg-[#8C5A35]/30 text-[#8C5A35] dark:text-[#E8D5C4] px-3 py-1 rounded-full">
                Good
              </span>
            </div>
            <div>
              <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400 mb-1">Attendance</p>
              <p className="text-[28px] font-bold text-slate-900 dark:text-white leading-none mb-3 tracking-tight">85%</p>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
          </div>

          {/* Juries Card */}
          <div className="glass-card p-4 rounded-[24px] border border-slate-100 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50/80 dark:bg-indigo-900/30 flex items-center justify-center">
                <Calendar size={20} className="text-[#8C5A35] dark:text-orange-400" />
              </div>
            </div>
            <div>
              <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400 mb-1">Juries</p>
              <p className="text-[28px] font-bold text-slate-900 dark:text-white leading-none mb-2 tracking-tight">In 2 Days</p>
              <p className="text-xs font-medium text-slate-500">Symbol Design & Iconography</p>
            </div>
          </div>

          {/* Assignments Card */}
          <div className="glass-card col-span-2 p-4 rounded-[24px] border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400 mb-0.5">Assignments</p>
                <div className="flex items-end gap-2">
                  <p className="text-[24px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">3</p>
                  <p className="text-xs font-medium text-slate-500 mb-0.5">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Access</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4">
            {quickAccess.map((item, idx) => (
              <Link href={item.href} key={idx} className="flex flex-col items-center gap-2 min-w-[72px]">
                <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-tr flex items-center justify-center shadow-lg active:scale-95 transition-transform", item.color)}>
                  <item.icon size={24} className="text-white" />
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Assignments Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pending Assignments</h3>
            <Link href="/academics" className="text-sm text-primary font-medium flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { subject: "Symbol Design & Iconography", title: "Icon System Creation Project", due: "Tomorrow, 11:59 PM", priority: "high" },
              { subject: "Design Management – I", title: "Brand Strategy Case Study", due: "Oct 12", priority: "medium" },
            ].map((task, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-2 h-12 rounded-full",
                    task.priority === "high" ? "bg-error" : "bg-warning"
                  )} />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{task.subject}</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{task.title}</h4>
                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-500 font-medium">
                      <Clock size={12} />
                      Due: {task.due}
                    </div>
                  </div>
                </div>
                <button className="p-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
                  <Upload size={18} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini Calendar / Events Widget */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Events</h3>
          </div>
          
          <Link href="/events" className="block glass-card rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm active:scale-[0.98] transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">October 2026</h3>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500"><ChevronLeft size={14} /></div>
                <div className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500"><ChevronRight size={14} /></div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="text-xs font-medium text-slate-500 mb-2">{day}</div>
              ))}
              
              {/* Dummy days to match screenshot roughly */}
              {Array.from({length: 2}).map((_, i) => (
                <div key={`empty-${i}`} className="text-sm text-slate-300 dark:text-slate-600 py-1">{29 + i}</div>
              ))}
              
              {Array.from({length: 19}).map((_, i) => {
                const date = i + 1;
                const isSelected = date === 15;
                const hasRedDot = date === 14 || date === 16;
                const hasBlueDot = date === 15;
                return (
                  <div key={date} className="relative flex flex-col items-center justify-center py-1">
                    <div className={cn(
                      "w-8 h-8 flex items-center justify-center text-sm font-medium rounded-xl relative",
                      isSelected ? "bg-primary text-white shadow-md shadow-primary/30" : "text-slate-700 dark:text-slate-300"
                    )}>
                      {date}
                      {hasBlueDot && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full border border-white dark:border-slate-900" />
                      )}
                    </div>
                    {hasRedDot && (
                      <span className="w-1 h-1 bg-error rounded-full mt-1" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Upcoming Schedule</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-error" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Mid-Term Juries Begin</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Design Fest Day 1</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
