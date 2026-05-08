"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, Download, Map, MapPin, Share2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function JuriesScreen() {
  return (
    <div className="min-h-screen pb-28 bg-[#F8FAFC]">
      <TopNav title="Jury Center" showBack />

      <main className="px-4 pt-2 space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[28px] font-black text-slate-900 leading-tight mb-1 tracking-tight">
            Jury Center
          </h1>
          <p className="text-[13px] text-slate-500 font-medium">
            Manage your upcoming juries, tickets, and results.
          </p>
        </motion.div>

        {/* Upcoming Juries */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {/* Next Jury Card */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-100/60 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-md shadow-indigo-200">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4F46E5] text-[11px] uppercase tracking-wider">Next Jury</h3>
                    <p className="text-xs text-slate-500 font-medium">In 2 days</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100 uppercase tracking-wide">
                  Mandatory
                </span>
              </div>

              <h2 className="text-[19px] font-black text-slate-900 leading-tight mb-1">Typography Design</h2>
              <p className="text-xs text-slate-500 font-medium mb-5">DS301 • Midterm Jury</p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="bg-slate-50 rounded-[14px] p-3 border border-slate-100/50">
                  <span className="block text-[10px] text-slate-500 mb-1">Date</span>
                  <span className="block text-xs font-bold text-slate-900">14 Nov 2026</span>
                </div>
                <div className="bg-slate-50 rounded-[14px] p-3 border border-slate-100/50">
                  <span className="block text-[10px] text-slate-500 mb-1">Time</span>
                  <span className="block text-xs font-bold text-slate-900">09:00 AM</span>
                </div>
                <div className="bg-slate-50 rounded-[14px] p-3 border border-slate-100/50">
                  <span className="block text-[10px] text-slate-500 mb-1">Studio</span>
                  <span className="block text-xs font-bold text-[#4F46E5]">Block B - Studio 4</span>
                </div>
                <div className="bg-slate-50 rounded-[14px] p-3 border border-slate-100/50">
                  <span className="block text-[10px] text-slate-500 mb-1">Panel</span>
                  <span className="block text-xs font-bold text-[#4F46E5]">Panel A</span>
                </div>
              </div>

              <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white rounded-xl py-3.5 text-[13px] font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md shadow-blue-900/20">
                <Map size={16} /> View Route on Map
              </button>
            </div>
          </div>

          {/* Upcoming Jury 2 */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#9A4B13]">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-[#9A4B13] text-[11px] uppercase tracking-wider">Upcoming</h3>
                  <p className="text-xs text-slate-500 font-medium">In 5 days</p>
                </div>
              </div>
            </div>

            <h2 className="text-[17px] font-black text-slate-900 leading-tight mb-1">Color Theory</h2>
            <p className="text-xs text-slate-500 font-medium mb-4">DS302 • Midterm Jury</p>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-slate-400" />
                <span className="text-[11px] font-bold text-slate-700">17 Nov 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-slate-400" />
                <span className="text-[11px] font-bold text-slate-700">11:30 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-400" />
                <span className="text-[11px] font-bold text-slate-700">Block C - Studio 2</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-slate-400" />
                <span className="text-[11px] font-bold text-slate-700">Panel B</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hall Ticket Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center text-center"
        >
          <div className="w-full h-40 rounded-xl bg-slate-100 mb-6 overflow-hidden relative border border-slate-200">
            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop" alt="Hall Ticket" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>

          <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white -mt-12 z-10 shadow-lg shadow-blue-500/30 mb-4 border-4 border-white">
            <Download size={20} />
          </div>

          <h3 className="font-bold text-slate-900 text-lg mb-2">Fall 2026 Admit Card</h3>
          <p className="text-[11px] text-slate-500 font-medium px-2 mb-6 leading-relaxed">
            Your official admit card is ready. Please download and print it before your first jury. Digital copies are not accepted in the studio.
          </p>

          <div className="w-full flex gap-3">
            <button className="flex-1 bg-[#4F46E5] text-white rounded-[14px] py-3 text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all shadow-[0_4px_14px_rgba(79,70,229,0.3)]">
              <Download size={14} /> Download PDF
            </button>
            <button className="w-[100px] bg-white border border-indigo-200 text-[#4F46E5] rounded-[14px] py-3 text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 active:scale-95 transition-all">
              <Share2 size={14} /> Share
            </button>
          </div>
        </motion.div>

        {/* Recent Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Recent Results</h3>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider cursor-pointer">View All</span>
          </div>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-16 h-16 relative flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stroke-slate-100 stroke-[8] fill-none" />
                <circle
                  cx="50" cy="50" r="40"
                  className="stroke-[#0284C7] stroke-[8] fill-none stroke-round"
                  strokeDasharray="251.2"
                  strokeDashoffset="37.68" /* 85% of 251.2 */
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[13px] font-black text-slate-900 leading-none">8.5</span>
                <span className="text-[8px] font-bold text-slate-400">CGPA</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-0.5">Great Standing</p>
              <p className="text-[11px] text-slate-500 font-medium">+0.2 from last semester</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800 text-xs">Visual Design</p>
                <p className="text-[10px] text-slate-500 font-medium">DS204</p>
              </div>
              <span className="font-black text-[#4F46E5] text-sm">A</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800 text-xs">Interaction Design</p>
                <p className="text-[10px] text-slate-500 font-medium">DS205</p>
              </div>
              <span className="font-black text-[#4F46E5] text-sm">A-</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800 text-xs">Design Thinking</p>
                <p className="text-[10px] text-slate-500 font-medium">DS206</p>
              </div>
              <span className="font-black text-slate-700 text-sm">B+</span>
            </div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-indigo-50/50 rounded-[24px] p-5 shadow-sm border border-indigo-100/50"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[#4F46E5]" />
            <h3 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Jury Studio Location</h3>
          </div>

          <div className="w-full h-24 border-2 border-dashed border-indigo-200 rounded-2xl flex items-center justify-center relative mb-4 bg-white/50">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center mb-1 shadow-md shadow-indigo-200">
                <MapPin size={16} />
              </div>
              <span className="text-[10px] font-bold text-slate-900">Block B</span>
            </div>
            {/* Corner dashes to simulate the image's border look */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-indigo-300" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-indigo-300" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-indigo-300" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-indigo-300" />
          </div>

          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-medium text-slate-500">Distance: ~5 mins walk</span>
            <span className="text-[11px] font-bold text-[#4F46E5]">Get Directions</span>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
