"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Bell, ChevronRight, Globe, Moon, Shield, Smartphone, User, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen pb-28 bg-[#F8FAFC]">
      <TopNav title="Settings" showBack />

      <main className="px-4 pt-4 space-y-6">
        
        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Account</h2>
          <div className="bg-white rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <User size={18} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">Personal Info</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Update your name & contact details</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Shield size={18} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">Security & Password</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Manage password & 2FA</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Preferences</h2>
          <div className="bg-white rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
            
            {/* Dark Mode Toggle */}
            <div className="w-full flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <Moon size={18} />
                </div>
                <span className="block font-bold text-slate-900 text-sm">Dark Mode</span>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={cn("w-12 h-6 rounded-full relative transition-colors", darkMode ? "bg-[#4F46E5]" : "bg-slate-200")}
              >
                <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform", darkMode ? "translate-x-6 left-0.5" : "translate-x-0.5 left-0")} />
              </button>
            </div>

            <button className="w-full flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe size={18} />
                </div>
                <span className="block font-bold text-slate-900 text-sm">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500">English (US)</span>
                <ChevronRight size={18} className="text-slate-400" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Notifications</h2>
          <div className="bg-white rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
            
            {/* Push Notifications Toggle */}
            <div className="w-full flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Smartphone size={18} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">Push Notifications</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Alerts on your device</span>
                </div>
              </div>
              <button 
                onClick={() => setPushEnabled(!pushEnabled)}
                className={cn("w-12 h-6 rounded-full relative transition-colors", pushEnabled ? "bg-[#4F46E5]" : "bg-slate-200")}
              >
                <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform", pushEnabled ? "translate-x-6 left-0.5" : "translate-x-0.5 left-0")} />
              </button>
            </div>

            {/* Email Notifications Toggle */}
            <div className="w-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Bell size={18} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">Email Alerts</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Receive important updates via email</span>
                </div>
              </div>
              <button 
                onClick={() => setEmailEnabled(!emailEnabled)}
                className={cn("w-12 h-6 rounded-full relative transition-colors", emailEnabled ? "bg-[#4F46E5]" : "bg-slate-200")}
              >
                <div className={cn("w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform", emailEnabled ? "translate-x-6 left-0.5" : "translate-x-0.5 left-0")} />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <Link href="/login" className="w-full bg-white text-red-600 rounded-[20px] py-4 text-[13px] font-bold shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-red-100 hover:bg-red-50 active:scale-95 transition-all flex items-center justify-center gap-2">
            <LogOut size={18} /> Log Out from Device
          </Link>
          <p className="text-center text-[10px] text-slate-400 font-medium mt-4">Life OS Version 2.4.1 (Build 294)</p>
        </motion.div>

      </main>
    </div>
  );
}
