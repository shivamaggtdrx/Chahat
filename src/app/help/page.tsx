"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Search, Send, ShieldAlert, User, BriefcaseMedical, PhoneCall, BrainCircuit, MapPin, Tag } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HelpSupportScreen() {
  const [view, setView] = useState<'main' | 'report'>('main');
  const [reportType, setReportType] = useState<'lost' | 'found'>('lost');
  const [category, setCategory] = useState('Electronics');

  if (view === 'report') {
    return (
      <div className="min-h-screen pb-28 bg-[#F8FAFC]">
        <div className="px-4 pt-6 pb-2 flex items-center gap-3 bg-[#F8FAFC] sticky top-0 z-50">
          <button onClick={() => setView('main')} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-slate-50 active:scale-95 transition-all">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-[22px] font-bold text-slate-900">Report an Item</h1>
        </div>

        <main className="px-4 py-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100"
          >
            
            {/* Toggle */}
            <div className="flex p-1 bg-slate-100/80 rounded-xl mb-6">
              <button 
                type="button"
                onClick={() => setReportType('lost')}
                className={cn("flex-1 py-2.5 text-[13px] font-bold rounded-lg transition-all", reportType === 'lost' ? "bg-white text-[#4338CA] shadow-sm" : "text-slate-500")}
              >
                I Lost Something
              </button>
              <button 
                type="button"
                onClick={() => setReportType('found')}
                className={cn("flex-1 py-2.5 text-[13px] font-bold rounded-lg transition-all", reportType === 'found' ? "bg-white text-[#4338CA] shadow-sm" : "text-slate-500")}
              >
                I Found Something
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setView('main'); }}>
              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Item Name</label>
                <input type="text" placeholder="e.g., Blue Hydroflask, Apple AirPods" className="w-full bg-transparent border border-slate-300 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all placeholder:text-slate-400 text-slate-800 font-medium" />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-2 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {["Electronics", "Books & Notes", "Keys & IDs", "Clothing", "Other"].map(cat => (
                    <button 
                      key={cat} 
                      type="button" 
                      onClick={() => setCategory(cat)}
                      className={cn(
                        "px-3 py-1.5 rounded-full border text-[11px] font-medium flex items-center gap-1.5 transition-colors",
                        category === cat ? "border-[#4338CA] text-[#4338CA] bg-indigo-50/50" : "border-slate-200 text-slate-600 hover:border-slate-300"
                      )}
                    >
                      <Tag size={12} className={category === cat ? "text-[#4338CA]" : "text-slate-400"} />
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Location</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input type="text" placeholder="e.g., Library 2nd Floor" className="w-full bg-transparent border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-[13px] focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all placeholder:text-slate-400 text-slate-800 font-medium" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Date & Time</label>
                <input type="datetime-local" className="w-full bg-transparent border border-slate-300 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all text-slate-800 font-medium" />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Upload Photo (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-3">
                    <Camera size={20} className="text-[#4338CA]" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 mb-1">Tap to select or take a photo</span>
                  <span className="text-[10px] text-slate-400 font-medium">Max file size: 5MB</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Additional Details</label>
                <textarea rows={3} placeholder="Any distinguishing marks, colors, or specific context..." className="w-full bg-transparent border border-slate-300 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:border-[#4338CA] focus:ring-1 focus:ring-[#4338CA] transition-all placeholder:text-slate-400 text-slate-800 font-medium resize-none" />
              </div>

              <button type="submit" className="w-full bg-[#4F46E5] text-white rounded-xl py-3.5 text-[13px] font-bold shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2">
                <Send size={16} /> Submit Report
              </button>
            </form>

          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-28 bg-[#F8FAFC]">
      <TopNav title="Help & Support" showBack />

      <main className="px-4 pt-4 space-y-8">
        
        {/* Emergency Contacts */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 font-black text-xl leading-none">*</span>
            <h2 className="text-[17px] font-bold text-slate-900">Emergency Contacts</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[24px] p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#4F46E5] flex items-center justify-center text-white mb-3 shadow-md shadow-indigo-200">
                <ShieldAlert size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-[15px]">Campus Security</h3>
              <p className="text-[11px] text-slate-500 font-medium mb-4">24/7 Patrol & Assistance</p>
              <button className="w-full bg-[#B91C1C] text-white rounded-[14px] py-3.5 text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-red-800 active:scale-95 transition-all shadow-md shadow-red-500/20">
                <PhoneCall size={16} className="fill-white" /> Call +91 98765 43210
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[24px] p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#B45309] flex items-center justify-center text-white mb-3 shadow-md shadow-amber-200">
                <BriefcaseMedical size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-[15px]">Medical Unit</h3>
              <p className="text-[11px] text-slate-500 font-medium mb-4">First Aid & Ambulance</p>
              <button className="w-full bg-[#312E81] text-white rounded-[14px] py-3.5 text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-indigo-900 active:scale-95 transition-all shadow-md shadow-indigo-900/20">
                <PhoneCall size={16} className="fill-white" /> Call +91 98765 43211
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#2563EB] flex items-center justify-center text-white mb-3 shadow-md shadow-blue-200">
                <BrainCircuit size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-[15px]">Student Wellness</h3>
              <p className="text-[11px] text-slate-500 font-medium mb-4">Confidential Counseling</p>
              <button className="w-full bg-white border border-[#4338CA] text-[#4338CA] rounded-[14px] py-3.5 text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 active:scale-95 transition-all shadow-sm">
                <User size={16} className="fill-[#4338CA]" /> Book Session
              </button>
            </motion.div>
          </div>
        </section>

        {/* Lost & Found */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-[#9A4B13]">
                <Search size={22} className="stroke-[2.5]" />
              </div>
              <h2 className="text-[17px] font-bold text-slate-900">Lost & Found</h2>
            </div>
            <button 
              onClick={() => setView('report')}
              className="text-[11px] font-bold text-[#4338CA] bg-indigo-50 border border-indigo-100/50 px-3 py-1.5 rounded-full hover:bg-indigo-100 active:scale-95 transition-all"
            >
              + Report Item
            </button>
          </div>

          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[20px] p-3 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100"
            >
              <div className="w-16 h-16 rounded-[14px] bg-[#D4DFD2] shrink-0 overflow-hidden relative border border-slate-100">
                <img src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=200&h=200&fit=crop" alt="Airpods" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-[13px]">Airpods Pro Case</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 mb-2">Found near Lecture Hall B</p>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-[#4338CA] rounded-lg text-[10px] font-bold active:scale-95 transition-transform">
                  <User size={12} /> Contact Finder
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[20px] p-3 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100"
            >
              <div className="w-16 h-16 rounded-[14px] bg-slate-100 shrink-0 overflow-hidden relative border border-slate-100">
                <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop" alt="Hydroflask" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-[13px]">Blue Hydroflask</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 mb-2">Lost at Main Cafeteria</p>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-[#4338CA] rounded-lg text-[10px] font-bold active:scale-95 transition-transform">
                  <Search size={12} /> I Lost This
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
