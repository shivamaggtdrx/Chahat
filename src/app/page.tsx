"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const onboardingSteps = [
  {
    title: "Master Your Academics",
    description: "Navigate campus life, manage creative projects, and stay academically organized — all through one seamless connected experience.",
    image: "/images/onboarding-1.png",
  },
  {
    title: "Shape Your Campus Life",
    description: "Give anonymous feedback and stay updated with the latest college fests and workshops.",
    image: "/images/onboarding-2.png",
  },
  {
    title: "Stay Ahead of Deadlines",
    description: "Track your submissions, jury schedules, and project milestones with smart reminders",
    image: "/images/onboarding-3.png",
  },
];

export default function Onboarding() {
  const [splash, setSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  if (splash) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20 blur-[1px]"
            initial={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 800 - 400,
              scale: Math.random() * 2,
            }}
            animate={{
              y: [null, Math.random() * -800],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-primary via-blue-500 to-accent flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.5)] mb-6">
            <span className="text-white text-4xl font-bold">L-OS</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Life OS</h1>
          <p className="text-accent/80 font-medium tracking-wide">Your Complete Campus Companion</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light dark:bg-slate-900 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[50%] bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full flex justify-end px-6 pt-8 relative z-20 min-h-[40px]">
        {currentStep < onboardingSteps.length - 1 && (
          <Link href="/login" className="text-slate-500 dark:text-slate-400 text-sm font-bold hover:text-slate-700 transition-colors">
            Skip
          </Link>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 relative z-10 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="w-full max-w-[300px] aspect-square rounded-[40px] mb-8 overflow-hidden shadow-2xl relative">
              <img 
                src={onboardingSteps[currentStep].image} 
                alt={onboardingSteps[currentStep].title} 
                className="w-full h-full object-cover" 
              />
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
                    <div
                      key={index}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        index === currentStep ? "w-6 bg-primary" : "w-1.5 bg-slate-200 dark:bg-slate-700"
                      )}
                    />
                  ))}
                </div>

                {currentStep < onboardingSteps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all"
                  >
                    Next <ChevronRight size={18} />
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="px-6 py-3 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all"
                  >
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
