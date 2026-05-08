"use client";

import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: BookOpen, label: "Academics", href: "/academics" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  // Don't show bottom nav on onboarding or auth screens
  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 max-w-md mx-auto">
      <div className="glass-card rounded-3xl flex items-center justify-between px-6 py-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className="relative group">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    "p-2 rounded-2xl transition-all duration-300",
                    isActive ? "bg-primary/10 text-primary" : "text-slate-400 group-hover:text-slate-600"
                  )}
                >
                  <item.icon size={24} className={cn("transition-transform duration-300", isActive && "scale-110")} />
                </div>
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
