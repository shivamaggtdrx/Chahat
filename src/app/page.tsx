"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, BookOpen, GraduationCap, Users, MessageSquare, Calendar, Bell, Clock, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ── Animated Illustration Components ── */

function AcademicsGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-20 h-20 border border-white/30 rounded-2xl"
            style={{ left: `${(i % 3) * 35 + 5}%`, top: `${Math.floor(i / 3) * 45 + 10}%` }}
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 0.95, 1] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Central book */}
      <motion.div className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl mb-4">
          <GraduationCap size={56} className="text-white drop-shadow-lg" />
        </div>
        <div className="flex gap-3 mt-2">
          {[BookOpen, FileText, Calendar].map((Icon, i) => (
            <motion.div key={i}
              className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}>
              <Icon size={22} className="text-white/90" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating orbs */}
      <motion.div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-amber-400/30 blur-xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute bottom-12 left-6 w-20 h-20 rounded-full bg-cyan-400/25 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
    </div>
  );
}

function CampusLifeGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full bg-white/10"
          style={{ width: 12 + i * 6, height: 12 + i * 6, left: `${10 + i * 11}%`, bottom: `-5%` }}
          animate={{ y: [0, -(180 + i * 40)], opacity: [0, 0.6, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        />
      ))}

      <motion.div className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        {/* Community circle */}
        <div className="relative w-32 h-32 mb-3">
          <div className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
            <Users size={48} className="text-white drop-shadow-lg" />
          </div>
          {/* Orbiting icons */}
          {[MessageSquare, Bell, Calendar].map((Icon, i) => (
            <motion.div key={i} className="absolute w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/25 flex items-center justify-center"
              style={{ top: '50%', left: '50%' }}
              animate={{ x: [Math.cos((i * 2 * Math.PI) / 3) * 70, Math.cos((i * 2 * Math.PI) / 3 + Math.PI * 2) * 70],
                         y: [Math.sin((i * 2 * Math.PI) / 3) * 70, Math.sin((i * 2 * Math.PI) / 3 + Math.PI * 2) * 70] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Icon size={18} className="text-white/90" />
            </motion.div>
          ))}
        </div>
        {/* Activity dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div key={i} className="w-3 h-3 rounded-full bg-white/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function DeadlinesGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
      {/* Radial pulse */}
      <motion.div className="absolute w-48 h-48 rounded-full border-2 border-white/10"
        animate={{ scale: [0.8, 1.5], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="absolute w-48 h-48 rounded-full border-2 border-white/10"
        animate={{ scale: [0.8, 1.5], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />

      <motion.div className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        {/* Clock */}
        <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl mb-4 relative">
          <Clock size={48} className="text-white drop-shadow-lg" />
          {/* Rotating hand */}
          <motion.div className="absolute w-0.5 h-10 bg-white/70 rounded-full origin-bottom"
            style={{ bottom: '50%' }}
            animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        </div>
        {/* Task cards */}
        <div className="flex flex-col gap-2 w-48">
          {[
            { icon: FileText, label: "Jury Review", color: "bg-white/25" },
            { icon: CheckCircle, label: "Submission", color: "bg-white/20" },
          ].map((item, i) => (
            <motion.div key={i}
              className={`${item.color} backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-white/20`}
              initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.2 }}>
              <item.icon size={14} className="text-white/90" />
              <span className="text-white/90 text-xs font-bold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const graphics = [AcademicsGraphic, CampusLifeGraphic, DeadlinesGraphic];

const onboardingSteps = [
  { title: "Master Your Academics", description: "Navigate campus life, manage creative projects, and stay academically organized — all through one seamless connected experience." },
  { title: "Shape Your Campus Life", description: "Give anonymous feedback and stay updated with the latest college fests and workshops." },
  { title: "Stay Ahead of Deadlines", description: "Track your submissions, jury schedules, and project milestones with smart reminders." },
];

export default function Onboarding() {
  const [splash, setSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => { setSplash(false); }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) setCurrentStep(currentStep + 1);
  };

  if (splash) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-white/20 blur-[1px]"
            initial={{ x: Math.random() * 400 - 200, y: Math.random() * 800 - 400, scale: Math.random() * 2 }}
            animate={{ y: [null, Math.random() * -800], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear" }} />
        ))}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-primary via-blue-500 to-accent flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.5)] mb-6">
            <span className="text-white text-4xl font-bold">L-OS</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Life OS</h1>
          <p className="text-accent/80 font-medium tracking-wide">Your Complete Campus Companion</p>
        </motion.div>
      </div>
    );
  }

  const Graphic = graphics[currentStep];

  return (
    <div className="min-h-screen bg-brand-light dark:bg-slate-900 flex flex-col relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[50%] bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full flex justify-end px-6 pt-8 relative z-20 min-h-[40px]">
        {currentStep < onboardingSteps.length - 1 && (
          <Link href="/login" className="text-slate-500 dark:text-slate-400 text-sm font-bold hover:text-slate-700 transition-colors">Skip</Link>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 relative z-10 pb-8">
        <AnimatePresence mode="wait">
          <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center w-full">

            <div className="w-full max-w-[300px] aspect-square rounded-[40px] mb-8 overflow-hidden shadow-2xl relative">
              <Graphic />
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 w-full shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center relative z-10 mt-[-20px]">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                {onboardingSteps[currentStep].title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10 min-h-[60px]">
                {onboardingSteps[currentStep].description}
              </p>

              <div className="flex items-center justify-between w-full mt-auto">
                <div className="flex gap-2">
                  {onboardingSteps.map((_, index) => (
                    <div key={index} className={cn("h-1.5 rounded-full transition-all duration-300",
                      index === currentStep ? "w-6 bg-primary" : "w-1.5 bg-slate-200 dark:bg-slate-700")} />
                  ))}
                </div>

                {currentStep < onboardingSteps.length - 1 ? (
                  <button onClick={nextStep}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all">
                    Next <ChevronRight size={18} />
                  </button>
                ) : (
                  <Link href="/login"
                    className="px-6 py-3 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all">
                    Get Started <ChevronRight size={18} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
