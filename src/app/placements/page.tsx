"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar, ChevronRight, Clock, FileText, GraduationCap, LayoutPanelLeft, MapPin, MousePointerClick, Users } from "lucide-react";


export default function PlacementsScreen() {
  return (
    <div className="min-h-screen pb-28 bg-[#F8FAFC]">
      <TopNav title="Placement Cell" showBack />

      <main className="px-4 pt-4 space-y-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 overflow-hidden"
        >
          {/* Top right gradient blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-200/60 via-purple-100/40 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 rounded-full mb-4 border border-indigo-100/50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#312E81]" />
              <span className="text-[10px] font-bold text-[#312E81] tracking-wider uppercase">Active Season &apos;26</span>
            </div>

            <h1 className="text-[28px] font-black text-slate-900 leading-tight mb-2 tracking-tight">
              Accelerate Your<br />Career
            </h1>
            <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 pr-4">
              Top tier design studios and agencies are actively hiring. Ensure your portfolio is updated to catch recruiters&apos; eyes.
            </p>

            <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-6 px-6 pb-2">
              <div className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center min-w-[110px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-50">
                <span className="text-xl font-black text-[#312E81]">120+</span>
                <span className="text-[10px] text-slate-500 font-medium mt-1">Companies</span>
              </div>
              <div className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center min-w-[110px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-50">
                <span className="text-xl font-black text-[#2563EB]">14.5L</span>
                <span className="text-[10px] text-slate-500 font-medium mt-1">Avg Package</span>
              </div>
              <div className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center min-w-[110px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-50">
                <span className="text-xl font-black text-purple-600">35+</span>
                <span className="text-[10px] text-slate-500 font-medium mt-1">New Roles</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[17px] font-bold text-slate-900">Open Opportunities</h2>
            <button className="text-[11px] font-bold text-[#4F46E5] flex items-center gap-1 hover:underline">
              View All <ArrowRight size={12} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Job Card 1 */}
            <div className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <LayoutPanelLeft size={20} className="text-[#4F46E5]" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">UX/UI Product Designer</h3>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-md uppercase tracking-wider shrink-0">FTE</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">CreativeCorp Global</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-50/50 text-indigo-700 rounded-lg text-[10px] font-bold">
                  <Briefcase size={12} /> 14-18 LPA
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold">
                  <MapPin size={12} /> Bangalore
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-500">
                  <Clock size={12} /> Ends in 2 days
                </div>
                <button className="bg-[#312E81] text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-blue-800 transition-colors active:scale-95">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <MousePointerClick size={20} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">Visual Design Intern</h3>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-md uppercase tracking-wider shrink-0">Internship</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">DesignStudio Inc.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50/50 text-purple-700 rounded-lg text-[10px] font-bold">
                  <Briefcase size={12} /> 35k / month
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold">
                  <MapPin size={12} /> Remote
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <Calendar size={12} /> Ends Oct 15
                </div>
                <button className="bg-[#312E81] text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-blue-800 transition-colors active:scale-95">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Applications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[24px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100"
        >
          <h2 className="text-[15px] font-bold text-slate-900 mb-5">Recent Applications</h2>

          <div className="relative pl-3 space-y-6">
            {/* Vertical line connecting nodes */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200" />

            {/* Application 1 */}
            <div className="relative z-10 flex gap-4">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 ring-4 ring-white shrink-0" />
              <div>
                <h4 className="text-[13px] font-bold text-slate-900">Innovate Systems</h4>
                <p className="text-[11px] text-slate-500 font-medium mb-1.5">Product Designer</p>
                <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[8px] font-bold rounded uppercase tracking-wider">Interview Scheduled</span>
              </div>
            </div>

            {/* Application 2 */}
            <div className="relative z-10 flex gap-4">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-[#4F46E5] ring-4 ring-white shrink-0" />
              <div>
                <h4 className="text-[13px] font-bold text-slate-900">Alpha Agency</h4>
                <p className="text-[11px] text-slate-500 font-medium mb-1.5">Brand Designer</p>
                <span className="inline-block px-2 py-0.5 bg-indigo-50 text-[#4F46E5] text-[8px] font-bold rounded uppercase tracking-wider">Shortlisted</span>
              </div>
            </div>

            {/* Application 3 */}
            <div className="relative z-10 flex gap-4">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-transparent border-2 border-slate-300 ring-4 ring-white shrink-0" />
              <div>
                <h4 className="text-[13px] font-bold text-slate-900">Global Studios</h4>
                <p className="text-[11px] text-slate-500 font-medium mb-1.5">Graphic Design Trainee</p>
                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-[8px] font-bold rounded uppercase tracking-wider">Applied</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prep Hub */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-indigo-50/50 rounded-[24px] p-5 border border-indigo-100/50"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-indigo-100">
            <GraduationCap size={18} className="text-[#312E81]" />
            <h3 className="font-bold text-slate-900 text-sm">Prep Hub</h3>
          </div>

          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-slate-600" />
                <span className="text-[13px] font-medium text-slate-800">Portfolio Reviews</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <Users size={16} className="text-slate-600" />
                <span className="text-[13px] font-medium text-slate-800">Interview Experiences</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-slate-600" />
                <span className="text-[13px] font-medium text-slate-800">Resume Templates</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
