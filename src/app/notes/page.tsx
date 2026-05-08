"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Plus, X, Search, MoreVertical, Calendar } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Sample initial notes
const INITIAL_NOTES = [
  {
    id: 1,
    title: "Symbol Design Research",
    content: "Remember to prepare reference material for Symbol Design jury. Need to prepare moodboard for the midterm jury. Focus on iconographic systems and cultural symbolism.",
    date: "12 Oct",
    color: "bg-orange-100/80 text-orange-800 border-orange-200",
  },
  {
    id: 2,
    title: "Photography Notes",
    content: "1. Golden hour lighting is crucial\n2. Rule of thirds for composition\n3. Use manual focus for portraits. Study chiaroscuro technique.",
    date: "14 Oct",
    color: "bg-indigo-100/80 text-indigo-800 border-indigo-200",
  },
  {
    id: 3,
    title: "Weekend To-Do",
    content: "- Finish film storyboard for workshop\n- Organize photography portfolio\n- Review peer feedback on Design Management assignment",
    date: "15 Oct",
    color: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
  },
  {
    id: 4,
    title: "Meeting with Prof. Singh",
    content: "Discussing the placement portfolio. Ensure all 4 case studies are exported in PDF format and compressed.",
    date: "16 Oct",
    color: "bg-rose-100/80 text-rose-800 border-rose-200",
  }
];

const COLORS = [
  "bg-indigo-100/80 text-indigo-800 border-indigo-200",
  "bg-emerald-100/80 text-emerald-800 border-emerald-200",
  "bg-orange-100/80 text-orange-800 border-orange-200",
  "bg-rose-100/80 text-rose-800 border-rose-200",
  "bg-blue-100/80 text-blue-800 border-blue-200",
  "bg-purple-100/80 text-purple-800 border-purple-200",
];

export default function NotesScreen() {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  
  // New note state
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newColor, setNewColor] = useState(COLORS[0]);

  const filteredNotes = notes.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    n.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddNote = () => {
    if (!newTitle.trim() && !newContent.trim()) return;
    
    const newNote = {
      id: Date.now(),
      title: newTitle || "Untitled Note",
      content: newContent,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      color: newColor
    };

    setNotes([newNote, ...notes]);
    setIsAddingNote(false);
    setNewTitle("");
    setNewContent("");
    setNewColor(COLORS[0]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col relative pb-28">
      <TopNav title="My Notes" showBack />

      <main className="px-4 pt-2 flex-1 relative z-10">
        
        {/* Header & Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-[28px] font-black text-slate-900 leading-tight mb-1">Quick Notes</h1>
              <p className="text-[13px] text-slate-500 font-medium">Capture ideas and tasks instantly.</p>
            </div>
            <div className="bg-indigo-100 text-[#4F46E5] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <FileText size={14} />
              <span className="text-[11px] font-bold">{notes.length} Notes</span>
            </div>
          </div>

          <div className="relative flex items-center w-full bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 px-4 py-3.5">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none text-[13px] font-medium px-3 text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        {/* Masonry-style Grid (using 2 columns) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          <AnimatePresence>
            {filteredNotes.map((note) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={note.id}
                className={cn(
                  "p-4 rounded-[20px] border flex flex-col justify-between shadow-sm",
                  note.color
                )}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[14px] leading-tight pr-2">{note.title}</h3>
                    <button className="opacity-50 hover:opacity-100 shrink-0">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                  <p className="text-[12px] opacity-80 leading-relaxed line-clamp-5 whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center gap-1.5 opacity-70">
                  <Calendar size={10} />
                  <span className="text-[9px] font-bold uppercase tracking-wider">{note.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredNotes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
            <FileText size={48} className="mb-4 opacity-20" />
            <p className="text-sm font-medium">No notes found.</p>
          </div>
        )}

      </main>

      {/* Floating Add Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsAddingNote(true)}
        className="fixed bottom-24 right-5 w-14 h-14 bg-[#4F46E5] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(79,70,229,0.4)] z-40 border-2 border-white"
      >
        <Plus size={24} />
      </motion.button>

      {/* Add Note Modal */}
      <AnimatePresence>
        {isAddingNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-end sm:items-center justify-center"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white w-full h-[85vh] sm:h-auto sm:max-h-[85vh] sm:w-[90%] sm:max-w-md rounded-t-[32px] sm:rounded-[32px] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <h2 className="font-bold text-slate-900 text-lg">New Note</h2>
                <button 
                  onClick={() => setIsAddingNote(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                
                {/* Color Selector */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Theme Color</p>
                  <div className="flex gap-2">
                    {COLORS.map((colorClass, idx) => {
                      const bgClass = colorClass.split(' ')[0]; // Extract just the bg class for the preview
                      return (
                        <button
                          key={idx}
                          onClick={() => setNewColor(colorClass)}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 transition-transform",
                            bgClass.replace('/80', ''),
                            newColor === colorClass ? "border-slate-800 scale-110" : "border-transparent"
                          )}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <input
                    type="text"
                    placeholder="Note Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full text-xl font-bold text-slate-900 placeholder:text-slate-300 border-none focus:outline-none focus:ring-0 bg-transparent"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-h-[200px]">
                  <textarea
                    placeholder="Start typing your note here..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full h-full min-h-[250px] resize-none text-slate-700 placeholder:text-slate-400 border-none focus:outline-none focus:ring-0 bg-transparent text-[15px] leading-relaxed"
                  />
                </div>
              </div>

              <div className="p-5 pb-[100px] sm:pb-5 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={handleAddNote}
                  className="w-full bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold rounded-2xl py-4 shadow-md active:scale-95 transition-all relative z-10"
                >
                  Save Note
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
