"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { MessageSquare, Star, UserX, ThumbsUp, MessageCircle, BarChart2, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Community", "Faculty Review", "Anonymous"];

const posts = [
  {
    author: "Anonymous",
    avatar: "A",
    time: "2h ago",
    content: "The new cafeteria timing during exams is a lifesaver! Thanks to the student council for making it happen. 🙌",
    likes: 45,
    comments: 12,
    tags: ["Campus Life", "Cafeteria"],
  },
  {
    author: "Chahat T.",
    avatar: "C",
    time: "5h ago",
    content: "Anyone has previous year references for Symbol Design? Mid-term jury is approaching and I'm freaking out.",
    likes: 12,
    comments: 8,
    tags: ["Academics", "Help"],
  }
];

export default function Feedback() {
  const [activeTab, setActiveTab] = useState("Community");

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900">
      <TopNav title="Feedback & Community" />

      <div className="sticky top-[68px] z-30 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                activeTab === tab
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="px-4 py-6">
        
        {activeTab === "Community" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Post Input */}
            <div className="glass-card p-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                Me
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="What's happening on campus?"
                  className="w-full bg-slate-100 dark:bg-slate-800/50 rounded-2xl px-4 py-2.5 text-sm outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white placeholder:text-slate-500"
                />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-2 text-primary">
                    <button className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors"><MessageSquare size={18} /></button>
                    <button className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors"><Zap size={18} /></button>
                  </div>
                  <button className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary/30 active:scale-95 transition-transform">
                    Post
                  </button>
                </div>
              </div>
            </div>

            {/* Active Poll */}
            <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-3">
                <BarChart2 size={16} /> Campus Poll
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-4">Where should we host the upcoming design fest?</h3>
              <div className="space-y-2">
                {[
                  { label: "Main Auditorium", percent: 65, votes: 342 },
                  { label: "Open Ground", percent: 25, votes: 132 },
                  { label: "Seminar Hall Block B", percent: 10, votes: 54 },
                ].map((option, i) => (
                  <div key={i} className="relative h-10 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center px-4 cursor-pointer group">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${option.percent}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute left-0 top-0 bottom-0 bg-indigo-100 dark:bg-indigo-900/30 -z-10 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors"
                    />
                    <div className="flex justify-between w-full text-sm font-medium text-slate-700 dark:text-slate-300">
                      <span>{option.label}</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">{option.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 text-right">528 votes • Ends in 2 days</p>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post, idx) => (
                <div key={idx} className="glass-card p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">
                        {post.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</h4>
                        <p className="text-xs text-slate-500">{post.time}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <button className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition-colors">
                      <ThumbsUp size={16} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition-colors">
                      <MessageCircle size={16} /> {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "Faculty Review" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {[
              { name: "Dr. A. Sharma", subject: "Symbol Design & Iconography", rating: 4.8, reviews: 124 },
              { name: "Prof. R. Verma", subject: "Design Management – I", rating: 4.2, reviews: 89 },
              { name: "Dr. S. Gupta", subject: "Film Production Workshop", rating: 4.5, reviews: 102 },
            ].map((faculty, idx) => (
              <div key={idx} className="glass-card p-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {faculty.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{faculty.name}</h4>
                    <p className="text-xs text-slate-500">{faculty.subject}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-warning font-bold">
                    <Star size={14} className="fill-warning" /> {faculty.rating}
                  </div>
                  <span className="text-[10px] text-slate-500">{faculty.reviews} reviews</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "Anonymous" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-purple-50 to-white dark:from-slate-800 dark:to-slate-900 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mx-auto mb-4">
                <UserX size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Anonymous Box</h3>
              <p className="text-sm text-slate-500 mb-6">Drop your suggestions, complaints, or confessions safely. Your identity remains 100% hidden.</p>
              
              <textarea
                placeholder="What's on your mind?"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm outline-none focus:ring-2 ring-purple-500 resize-none h-32 mb-4"
              />
              <button className="w-full py-3.5 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 active:scale-[0.98] transition-transform">
                Submit Anonymously
              </button>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
