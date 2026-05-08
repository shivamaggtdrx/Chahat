"use client";

import { motion } from "framer-motion";
import { ChevronLeft, CheckCircle2, QrCode } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DigitalIDScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBEBFA] to-white flex flex-col items-center relative pb-20">
      
      {/* Header Bar */}
      <div className="w-full flex items-center justify-between p-4 pt-6">
        <button 
          onClick={() => router.back()}
          className="p-2 rounded-xl hover:bg-slate-200/50 transition-colors"
        >
          <ChevronLeft size={28} className="text-slate-800" />
        </button>
        {/* Placeholder icons for search/bell if matching top exactly, but we can leave empty or standard back */}
        <div className="w-10" /> 
      </div>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-2 mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Digital ID</h1>
        <p className="text-slate-500 font-medium text-[15px]">Tap to scan at campus checkpoints</p>
      </motion.div>

      {/* ID Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
        className="w-[90%] max-w-[360px] bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col border border-white"
      >
        {/* Subtle Inner Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-blue-50/50 pointer-events-none" />

        {/* Card Header */}
        <div className="flex justify-between items-center p-6 relative z-10">
          <span className="text-[22px] font-black tracking-tight text-[#312E81]">CampusOne</span>
          <div className="text-[#4338CA]">
            {/* Custom Verified Hexagon check if needed, using CheckCircle for simplicity or custom svg */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.525 2.13837L10.3753 2.05267C11.3857 1.48834 12.6143 1.48834 13.6247 2.05267L13.475 2.13837L13.6247 2.05267L15.3934 3.03998C15.8239 3.28014 16.3262 3.39327 16.8318 3.3644L18.8687 3.24806L18.8587 3.42275C20.0159 3.48888 21.0538 4.22591 21.5034 5.30232L21.4332 5.27299L21.4332 5.27299L22.2132 7.14064C22.403 7.595 22.4357 8.09635 22.3061 8.57271L21.7844 10.4913L21.9543 10.4452C22.2543 11.5488 21.9686 12.7533 21.2263 13.5132L21.1011 13.385L21.1011 13.385L19.8242 14.6922C19.4756 15.049 19.2638 15.5204 19.2081 16.0163L18.9839 18.0125L19.1578 17.993C18.9897 19.1624 18.0673 20.0848 16.8979 20.2529L16.8784 20.079L16.8784 20.079L14.8822 20.3032C14.3863 20.3589 13.9149 20.5706 13.5582 20.9193L12.251 22.1961L12.3792 22.071C11.6193 22.8133 10.4148 23.0989 9.3112 22.799L9.35728 22.6291L9.35728 22.6291L7.43869 23.1508C6.96232 23.2805 6.46098 23.2477 6.00661 23.058L4.13897 22.278L4.1683 22.3482C3.09189 21.8986 2.35486 20.8607 2.28872 19.7035L2.46342 19.7135L2.46342 19.7135L2.34708 17.6766C2.31821 17.171 2.20508 16.6687 1.96491 16.2382L0.977604 14.4695L1.06331 14.6191C0.498982 13.6088 0.498982 12.3802 1.06331 11.3698L0.977604 11.5195L0.977604 11.5195L1.96491 9.75086C2.20508 9.32034 2.31821 8.81804 2.34708 8.31244L2.46342 6.27555L2.28872 6.28555C2.35486 5.12836 3.09189 4.09043 4.1683 3.64085L4.13897 3.71103L4.13897 3.71103L6.00661 2.93103C6.46098 2.74129 6.96232 2.70857 7.43869 2.83823L9.35728 3.35992L9.3112 3.19001C10.4148 2.89006 11.6193 3.17577 12.3792 3.91807L10.525 2.13837ZM10.525 2.13837L12.3792 3.91807L10.525 2.13837Z" stroke="#4338CA" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M9.5 12.5L11.5 14.5L15.5 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex flex-col items-center px-6 relative z-10">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden mb-5">
            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-1">Chahat Taneja</h2>
          <p className="text-[13px] font-bold text-[#4338CA] mb-4">B.Des Graphic Design</p>

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-slate-100/80 px-3 py-1 rounded-md">
              <span className="text-[11px] font-bold text-slate-600 tracking-wide">ID: 2024BD089</span>
            </div>
            <div className="bg-slate-100/80 px-3 py-1 rounded-md">
              <span className="text-[11px] font-bold text-slate-600 tracking-wide">Valid: 2027</span>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mx-6 mb-8 mt-2 bg-[#F8FAFC] rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-100 relative z-10">
          <div className="w-32 h-32 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 overflow-hidden border border-slate-100 relative">
             {/* Simulated QR Code (SVG) */}
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="100" height="100" fill="white"/>
                <rect x="5" y="5" width="25" height="25" stroke="black" strokeWidth="4"/>
                <rect x="10" y="10" width="15" height="15" fill="black"/>
                <rect x="70" y="5" width="25" height="25" stroke="black" strokeWidth="4"/>
                <rect x="75" y="10" width="15" height="15" fill="black"/>
                <rect x="5" y="70" width="25" height="25" stroke="black" strokeWidth="4"/>
                <rect x="10" y="75" width="15" height="15" fill="black"/>
                {/* Random blocks for center */}
                <rect x="40" y="5" width="20" height="10" fill="black"/>
                <rect x="40" y="25" width="10" height="20" fill="black"/>
                <rect x="60" y="40" width="25" height="15" fill="black"/>
                <rect x="5" y="40" width="15" height="15" fill="black"/>
                <rect x="25" y="40" width="25" height="10" fill="black"/>
                <rect x="40" y="60" width="15" height="25" fill="black"/>
                <rect x="60" y="70" width="15" height="10" fill="black"/>
                <rect x="80" y="60" width="15" height="35" fill="black"/>
                <rect x="40" y="90" width="30" height="5" fill="black"/>
                <rect x="30" y="55" width="10" height="10" fill="black"/>
             </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Scan to access</span>
        </div>

        {/* Bottom Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#4338CA] via-purple-600 to-[#312E81] absolute bottom-0 left-0 right-0" />
      </motion.div>

    </div>
  );
}
