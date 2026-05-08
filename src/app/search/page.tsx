"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Search as SearchIcon, X, Clock, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const recentSearches = [
  "Typography Design Syllabus",
  "Design Fest '26 Registration",
  "Prof. A. Sharma Office Hours",
];

const suggestedCategories = [
  { label: "Timetable", href: "/schedule", color: "bg-blue-100 text-blue-600" },
  { label: "Assignments", href: "/academics/assignments", color: "bg-emerald-100 text-emerald-600" },
  { label: "Events", href: "/events", color: "bg-purple-100 text-purple-600" },
  { label: "Faculty", href: "/feedback", color: "bg-orange-100 text-orange-600" },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title="Search" showBack />

      <main className="px-4 py-4">
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <SearchIcon size={20} className="text-slate-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search classes, events, or people..."
            className="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <X size={18} className="text-slate-400 hover:text-slate-600" />
            </button>
          )}
        </div>

        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Suggested Categories */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 active:scale-95 transition-transform"
                  >
                    <span className={`w-2 h-2 rounded-full ${cat.color.split(' ')[0]}`} />
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Recent Searches</h3>
              <div className="space-y-1">
                {recentSearches.map((search, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(search)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{search}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Search Results (Mock) */}
        {query && (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-slate-300 dark:text-slate-600 mb-4" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Searching for &quot;{query}&quot;</h3>
            <p className="text-sm text-slate-500">We&apos;re looking through the campus directory...</p>
          </div>
        )}
      </main>
    </div>
  );
}
