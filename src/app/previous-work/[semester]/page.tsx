"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, Download, Eye, Star, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useParams } from "next/navigation";

interface Assignment {
  title: string;
  submittedBy: string;
  score: string;
  date: string;
  type: string;
}

interface Subject {
  name: string;
  code: string;
  faculty: string;
  color: string;
  assignments: Assignment[];
}

const semesterData: Record<number, { title: string; subjects: Subject[] }> = {
  1: {
    title: "Foundation of Design",
    subjects: [
      {
        name: "Basic Design – I", code: "DS101", faculty: "Prof. R. Mehra", color: "from-amber-500 to-orange-500",
        assignments: [
          { title: "Elements of Design Composition", submittedBy: "Ananya S.", score: "92/100", date: "Aug 2024", type: "Project" },
          { title: "Color Theory Exploration Board", submittedBy: "Rohan K.", score: "88/100", date: "Sep 2024", type: "Assignment" },
          { title: "Texture & Pattern Study", submittedBy: "Priya M.", score: "95/100", date: "Oct 2024", type: "Workshop" },
        ],
      },
      {
        name: "Drawing – I", code: "DS102", faculty: "Prof. S. Iyer", color: "from-rose-500 to-pink-500",
        assignments: [
          { title: "Still Life Charcoal Rendering", submittedBy: "Kavya R.", score: "90/100", date: "Aug 2024", type: "Assignment" },
          { title: "Perspective Drawing Portfolio", submittedBy: "Aditya P.", score: "85/100", date: "Sep 2024", type: "Portfolio" },
          { title: "Human Figure Gesture Sketches", submittedBy: "Meera T.", score: "91/100", date: "Nov 2024", type: "Project" },
        ],
      },
      {
        name: "Art & Design History – I", code: "DS103", faculty: "Dr. N. Joshi", color: "from-emerald-500 to-teal-500",
        assignments: [
          { title: "Ancient Indian Art Timeline", submittedBy: "Sneha D.", score: "87/100", date: "Sep 2024", type: "Research" },
          { title: "Renaissance Art Analysis Essay", submittedBy: "Vikram S.", score: "93/100", date: "Oct 2024", type: "Essay" },
          { title: "Modern Art Movements Presentation", submittedBy: "Isha G.", score: "89/100", date: "Nov 2024", type: "Presentation" },
        ],
      },
      {
        name: "Computer Fundamentals", code: "DS104", faculty: "Prof. A. Kumar", color: "from-blue-500 to-indigo-500",
        assignments: [
          { title: "Digital Illustration – Basics", submittedBy: "Ravi M.", score: "86/100", date: "Aug 2024", type: "Assignment" },
          { title: "Vector Graphics Introduction", submittedBy: "Pooja L.", score: "90/100", date: "Oct 2024", type: "Project" },
        ],
      },
      {
        name: "English Communication", code: "DS105", faculty: "Dr. M. Rao", color: "from-purple-500 to-violet-500",
        assignments: [
          { title: "Design Critique Writing", submittedBy: "Arjun B.", score: "82/100", date: "Sep 2024", type: "Essay" },
          { title: "Visual Storytelling Presentation", submittedBy: "Nidhi K.", score: "88/100", date: "Nov 2024", type: "Presentation" },
        ],
      },
      {
        name: "Workshop Practice – I", code: "DS106", faculty: "Prof. V. Singh", color: "from-cyan-500 to-sky-500",
        assignments: [
          { title: "Paper Craft Model", submittedBy: "Tanvi J.", score: "94/100", date: "Sep 2024", type: "Workshop" },
          { title: "Material Exploration Study", submittedBy: "Karan G.", score: "87/100", date: "Oct 2024", type: "Project" },
          { title: "3D Form Construction", submittedBy: "Diya S.", score: "91/100", date: "Nov 2024", type: "Workshop" },
        ],
      },
    ],
  },
  2: {
    title: "Visual Communication Basics",
    subjects: [
      {
        name: "Basic Design – II", code: "DS201", faculty: "Prof. R. Mehra", color: "from-rose-500 to-pink-500",
        assignments: [
          { title: "Grid System Layout Design", submittedBy: "Ananya S.", score: "93/100", date: "Jan 2025", type: "Project" },
          { title: "Negative Space Poster", submittedBy: "Rohan K.", score: "89/100", date: "Feb 2025", type: "Assignment" },
          { title: "Geometric Abstraction Study", submittedBy: "Shreya P.", score: "91/100", date: "Mar 2025", type: "Project" },
        ],
      },
      {
        name: "Drawing – II", code: "DS202", faculty: "Prof. S. Iyer", color: "from-amber-500 to-orange-500",
        assignments: [
          { title: "Portrait Study – Graphite", submittedBy: "Kavya R.", score: "92/100", date: "Jan 2025", type: "Portfolio" },
          { title: "Urban Landscape Sketching", submittedBy: "Aditya P.", score: "86/100", date: "Feb 2025", type: "Assignment" },
          { title: "Expressive Figure Drawing", submittedBy: "Meera T.", score: "90/100", date: "Apr 2025", type: "Project" },
        ],
      },
      {
        name: "Typography – I", code: "DS203", faculty: "Dr. K. Patel", color: "from-violet-500 to-purple-500",
        assignments: [
          { title: "Typeface Anatomy Poster", submittedBy: "Sneha D.", score: "94/100", date: "Jan 2025", type: "Assignment" },
          { title: "Font Pairing Study", submittedBy: "Vikram S.", score: "87/100", date: "Mar 2025", type: "Research" },
          { title: "Hand Lettering Alphabet", submittedBy: "Isha G.", score: "96/100", date: "Apr 2025", type: "Project" },
        ],
      },
      {
        name: "Photography Basics", code: "DS204", faculty: "Prof. T. Nair", color: "from-emerald-500 to-teal-500",
        assignments: [
          { title: "Composition Rules Photo Set", submittedBy: "Ravi M.", score: "88/100", date: "Feb 2025", type: "Portfolio" },
          { title: "Natural Light Photography", submittedBy: "Pooja L.", score: "91/100", date: "Mar 2025", type: "Assignment" },
          { title: "Street Photography Series", submittedBy: "Arjun B.", score: "85/100", date: "Apr 2025", type: "Project" },
        ],
      },
      {
        name: "Art & Design History – II", code: "DS205", faculty: "Dr. N. Joshi", color: "from-blue-500 to-indigo-500",
        assignments: [
          { title: "Bauhaus Movement Study", submittedBy: "Nidhi K.", score: "92/100", date: "Feb 2025", type: "Research" },
          { title: "Indian Design Heritage Essay", submittedBy: "Tanvi J.", score: "89/100", date: "Mar 2025", type: "Essay" },
        ],
      },
      {
        name: "Digital Tools – I", code: "DS206", faculty: "Prof. A. Kumar", color: "from-cyan-500 to-sky-500",
        assignments: [
          { title: "Illustrator Poster Design", submittedBy: "Karan G.", score: "90/100", date: "Jan 2025", type: "Assignment" },
          { title: "Photoshop Compositing", submittedBy: "Diya S.", score: "93/100", date: "Mar 2025", type: "Project" },
          { title: "InDesign Magazine Spread", submittedBy: "Priya M.", score: "88/100", date: "Apr 2025", type: "Project" },
        ],
      },
    ],
  },
  3: {
    title: "Design Thinking & Exploration",
    subjects: [
      {
        name: "Graphic Design – I", code: "DS301", faculty: "Prof. D. Kapoor", color: "from-blue-500 to-indigo-500",
        assignments: [
          { title: "Brand Identity System", submittedBy: "Ananya S.", score: "95/100", date: "Jul 2025", type: "Project" },
          { title: "Packaging Design Mockup", submittedBy: "Rohan K.", score: "90/100", date: "Aug 2025", type: "Assignment" },
          { title: "Social Media Campaign Kit", submittedBy: "Shreya P.", score: "92/100", date: "Sep 2025", type: "Project" },
          { title: "Infographic Design", submittedBy: "Kavya R.", score: "88/100", date: "Oct 2025", type: "Assignment" },
        ],
      },
      {
        name: "Typography – II", code: "DS302", faculty: "Dr. K. Patel", color: "from-violet-500 to-purple-500",
        assignments: [
          { title: "Kinetic Typography Animation", submittedBy: "Aditya P.", score: "91/100", date: "Jul 2025", type: "Project" },
          { title: "Bilingual Type Poster", submittedBy: "Meera T.", score: "94/100", date: "Aug 2025", type: "Assignment" },
          { title: "Type Specimen Book", submittedBy: "Sneha D.", score: "89/100", date: "Oct 2025", type: "Project" },
        ],
      },
      {
        name: "Illustration – I", code: "DS303", faculty: "Prof. S. Iyer", color: "from-emerald-500 to-teal-500",
        assignments: [
          { title: "Character Design Sheet", submittedBy: "Vikram S.", score: "93/100", date: "Aug 2025", type: "Project" },
          { title: "Editorial Illustration Set", submittedBy: "Isha G.", score: "87/100", date: "Sep 2025", type: "Assignment" },
          { title: "Children's Book Spreads", submittedBy: "Ravi M.", score: "96/100", date: "Oct 2025", type: "Project" },
          { title: "Digital Painting Study", submittedBy: "Pooja L.", score: "90/100", date: "Nov 2025", type: "Workshop" },
        ],
      },
      {
        name: "Print Production", code: "DS304", faculty: "Prof. H. Desai", color: "from-amber-500 to-orange-500",
        assignments: [
          { title: "Screen Printing Poster", submittedBy: "Arjun B.", score: "88/100", date: "Aug 2025", type: "Workshop" },
          { title: "Risograph Zine", submittedBy: "Nidhi K.", score: "92/100", date: "Sep 2025", type: "Project" },
          { title: "Letterpress Invitation Card", submittedBy: "Tanvi J.", score: "86/100", date: "Oct 2025", type: "Workshop" },
        ],
      },
      {
        name: "Design Research Methods", code: "DS305", faculty: "Dr. M. Rao", color: "from-rose-500 to-pink-500",
        assignments: [
          { title: "User Survey Analysis Report", submittedBy: "Karan G.", score: "85/100", date: "Aug 2025", type: "Research" },
          { title: "Design Thinking Case Study", submittedBy: "Diya S.", score: "91/100", date: "Sep 2025", type: "Essay" },
          { title: "Ethnographic Field Study", submittedBy: "Priya M.", score: "89/100", date: "Oct 2025", type: "Research" },
        ],
      },
      {
        name: "Motion Graphics Basics", code: "DS306", faculty: "Prof. A. Kumar", color: "from-cyan-500 to-sky-500",
        assignments: [
          { title: "Logo Animation", submittedBy: "Ananya S.", score: "94/100", date: "Sep 2025", type: "Project" },
          { title: "Explainer Video Storyboard", submittedBy: "Rohan K.", score: "87/100", date: "Oct 2025", type: "Assignment" },
          { title: "Title Sequence Design", submittedBy: "Shreya P.", score: "93/100", date: "Nov 2025", type: "Project" },
        ],
      },
    ],
  },
  4: {
    title: "Advanced Design Practice",
    subjects: [
      {
        name: "Graphic Design – II", code: "DS401", faculty: "Prof. D. Kapoor", color: "from-violet-500 to-purple-500",
        assignments: [
          { title: "Annual Report Design", submittedBy: "Kavya R.", score: "94/100", date: "Jan 2026", type: "Project" },
          { title: "Wayfinding Signage System", submittedBy: "Aditya P.", score: "91/100", date: "Feb 2026", type: "Project" },
          { title: "Exhibition Catalogue Design", submittedBy: "Meera T.", score: "88/100", date: "Mar 2026", type: "Assignment" },
          { title: "Environmental Graphics", submittedBy: "Sneha D.", score: "93/100", date: "Apr 2026", type: "Project" },
        ],
      },
      {
        name: "UI/UX Design – I", code: "DS402", faculty: "Prof. A. Kumar", color: "from-blue-500 to-indigo-500",
        assignments: [
          { title: "Mobile App Wireframes", submittedBy: "Vikram S.", score: "92/100", date: "Jan 2026", type: "Assignment" },
          { title: "E-Commerce UI Redesign", submittedBy: "Isha G.", score: "96/100", date: "Feb 2026", type: "Project" },
          { title: "Design System Components", submittedBy: "Ravi M.", score: "90/100", date: "Mar 2026", type: "Project" },
          { title: "Usability Testing Report", submittedBy: "Pooja L.", score: "87/100", date: "Apr 2026", type: "Research" },
        ],
      },
      {
        name: "Illustration – II", code: "DS403", faculty: "Prof. S. Iyer", color: "from-emerald-500 to-teal-500",
        assignments: [
          { title: "Narrative Illustration Series", submittedBy: "Arjun B.", score: "95/100", date: "Jan 2026", type: "Project" },
          { title: "Map Illustration Design", submittedBy: "Nidhi K.", score: "89/100", date: "Feb 2026", type: "Assignment" },
          { title: "Album Art Concept", submittedBy: "Tanvi J.", score: "91/100", date: "Mar 2026", type: "Project" },
          { title: "Data Visualization Poster", submittedBy: "Karan G.", score: "93/100", date: "Apr 2026", type: "Project" },
        ],
      },
      {
        name: "Advertising Design", code: "DS404", faculty: "Prof. R. Mehra", color: "from-amber-500 to-orange-500",
        assignments: [
          { title: "Print Ad Campaign Series", submittedBy: "Diya S.", score: "90/100", date: "Feb 2026", type: "Project" },
          { title: "Billboard Design Concept", submittedBy: "Priya M.", score: "86/100", date: "Mar 2026", type: "Assignment" },
          { title: "Digital Banner Ad Set", submittedBy: "Ananya S.", score: "92/100", date: "Apr 2026", type: "Project" },
        ],
      },
      {
        name: "Design Management – I", code: "DS405", faculty: "Dr. N. Joshi", color: "from-rose-500 to-pink-500",
        assignments: [
          { title: "Brand Strategy Case Study", submittedBy: "Rohan K.", score: "88/100", date: "Feb 2026", type: "Research" },
          { title: "Design Studio Business Plan", submittedBy: "Shreya P.", score: "84/100", date: "Mar 2026", type: "Essay" },
          { title: "Client Pitch Deck", submittedBy: "Kavya R.", score: "91/100", date: "Apr 2026", type: "Presentation" },
        ],
      },
      {
        name: "Photography – II", code: "DS406", faculty: "Prof. T. Nair", color: "from-cyan-500 to-sky-500",
        assignments: [
          { title: "Product Photography Set", submittedBy: "Aditya P.", score: "93/100", date: "Jan 2026", type: "Portfolio" },
          { title: "Documentary Photo Essay", submittedBy: "Meera T.", score: "90/100", date: "Mar 2026", type: "Project" },
          { title: "Studio Lighting Portfolio", submittedBy: "Sneha D.", score: "87/100", date: "Apr 2026", type: "Portfolio" },
        ],
      },
    ],
  },
};

function getTypeColor(type: string) {
  switch (type) {
    case "Project": return "bg-primary/10 text-primary";
    case "Assignment": return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
    case "Workshop": return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
    case "Research": return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "Essay": return "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400";
    case "Portfolio": return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
    case "Presentation": return "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400";
    default: return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
  }
}

export default function SemesterDetailScreen() {
  const params = useParams();
  const semNum = Number(params.semester);
  const data = semesterData[semNum];
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
        <TopNav title="Previous Work" showBack />
        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <BookOpen size={48} className="mb-4 opacity-20" />
          <p className="font-bold text-lg">Semester not found</p>
        </div>
      </div>
    );
  }

  const totalAssignments = data.subjects.reduce((acc, s) => acc + s.assignments.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-28">
      <TopNav title={`Semester ${semNum}`} showBack />

      <main className="px-4 py-6">
        {/* Semester Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
            Semester {semNum}
          </h1>
          <p className="text-slate-500 text-sm font-medium">{data.title}</p>
          <div className="flex gap-3 mt-3">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
              {data.subjects.length} Subjects
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
              {totalAssignments} Assignments
            </span>
          </div>
        </motion.div>

        {/* Subjects Accordion */}
        <div className="space-y-4">
          {data.subjects.map((subject, idx) => {
            const isExpanded = expandedSubject === subject.code;
            return (
              <motion.div
                key={subject.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + idx * 0.04 }}
              >
                {/* Subject Header - Clickable */}
                <button
                  onClick={() => setExpandedSubject(isExpanded ? null : subject.code)}
                  className={cn(
                    "w-full glass-card p-4 rounded-2xl border flex items-center justify-between transition-all",
                    isExpanded
                      ? "border-primary/30 shadow-md shadow-primary/5 ring-1 ring-primary/20"
                      : "border-slate-200 dark:border-slate-800"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-xs bg-gradient-to-tr shrink-0",
                      subject.color
                    )}>
                      {subject.code.slice(-3)}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-[14px] text-slate-900 dark:text-white leading-tight">
                        {subject.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {subject.faculty} • {subject.assignments.length} works
                      </p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0",
                    isExpanded ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                  )}>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>

                {/* Expanded Assignments */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 space-y-3 pl-2">
                        {subject.assignments.map((assignment, aIdx) => (
                          <motion.div
                            key={aIdx}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: aIdx * 0.06 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/60 shadow-sm"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight flex-1 pr-2">
                                {assignment.title}
                              </h4>
                              <span className={cn(
                                "px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider shrink-0",
                                getTypeColor(assignment.type)
                              )}>
                                {assignment.type}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium mb-3">
                              <span className="flex items-center gap-1">
                                <Star size={11} className="text-amber-400" />
                                {assignment.score}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                              <span className="flex items-center gap-1">
                                <Clock size={11} />
                                {assignment.date}
                              </span>
                            </div>

                            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-700/40">
                              <span className="text-[11px] text-slate-400 font-medium">
                                by <span className="text-slate-600 dark:text-slate-300 font-bold">{assignment.submittedBy}</span>
                              </span>
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold active:scale-95 transition-transform">
                                  <Eye size={12} /> View
                                </button>
                                <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary text-[10px] font-bold active:scale-95 transition-transform">
                                  <Download size={12} /> Save
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
