"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Bus, Coffee, MapPin, Mic, Minus, Navigation, Plus, Search, Share2, Building2, Droplets, Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: 'libraries', label: 'Libraries', icon: Book },
  { id: 'cafeterias', label: 'Cafeterias', icon: Coffee },
  { id: 'labs', label: 'Labs', icon: Building2 },
  { id: 'restrooms', label: 'Restrooms', icon: Droplets },
];

const locationsData = [
  // Libraries
  { id: 'lib1', category: 'libraries', name: 'Central Library', top: '210px', left: '350px', icon: Book, details: 'North Campus, Block C' },
  { id: 'lib2', category: 'libraries', name: 'Architecture Library', top: '400px', left: '150px', icon: Book, details: 'South Campus, Block A' },
  
  // Cafeterias
  { id: 'caf1', category: 'cafeterias', name: 'Main Cafeteria', top: '150px', left: '600px', icon: Coffee, details: 'Central Hub, Ground Floor' },
  { id: 'caf2', category: 'cafeterias', name: 'Student Cafe', top: '550px', left: '250px', icon: Coffee, details: 'Design Studio Block' },
  { id: 'caf3', category: 'cafeterias', name: 'Coffee Kiosk', top: '300px', left: '800px', icon: Coffee, details: 'Library Annex' },
  
  // Labs
  { id: 'lab1', category: 'labs', name: 'Computer Lab 1', top: '350px', left: '650px', icon: Building2, details: 'Tech Block, 2nd Floor' },
  { id: 'lab2', category: 'labs', name: 'Design Studio B', top: '650px', left: '650px', icon: Building2, details: 'Creative Arts Center' },
  
  // Restrooms
  { id: 'rest1', category: 'restrooms', name: 'Block C Restrooms', top: '200px', left: '450px', icon: Droplets, details: 'Near Central Library' },
  { id: 'rest2', category: 'restrooms', name: 'Tech Block Restrooms', top: '400px', left: '550px', icon: Droplets, details: 'Tech Block, 1st Floor' },
  { id: 'rest3', category: 'restrooms', name: 'Studio Restrooms', top: '650px', left: '200px', icon: Droplets, details: 'Design Studio Block' },
];

export default function CampusMapScreen() {
  const [activeCategory, setActiveCategory] = useState('libraries');
  const [selectedFloor, setSelectedFloor] = useState('L1');
  const [selectedLocation, setSelectedLocation] = useState(locationsData[0]);
  const [showDetails, setShowDetails] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [isRouting, setIsRouting] = useState(false);

  // Filter locations based on active category
  const filteredLocations = locationsData.filter(loc => loc.category === activeCategory);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));

  return (
    <div className="h-screen bg-[#EBEBFA] flex flex-col overflow-hidden relative">
      <div className="z-50 bg-[#EBEBFA]/90 backdrop-blur-md pb-3">
        <TopNav title="" showBack />
        
        {/* Search Bar */}
        <div className="px-4 mt-1">
          <div className="relative flex items-center w-full bg-white rounded-full shadow-sm border border-slate-100 px-4 py-3">
            <Search size={18} className="text-[#4338CA] shrink-0" />
            <input 
              type="text" 
              placeholder="Search buildings, labs, facilities..." 
              className="flex-1 bg-transparent border-none focus:outline-none text-[13px] font-medium px-3 text-slate-800 placeholder:text-slate-400"
            />
            <Mic size={18} className="text-slate-400 shrink-0" />
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 mt-4 flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const newLocs = locationsData.filter(loc => loc.category === cat.id);
                if (newLocs.length > 0) {
                  setSelectedLocation(newLocs[0]);
                  setIsRouting(false);
                }
              }}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border shrink-0",
                activeCategory === cat.id
                  ? "bg-[#4338CA] text-white border-[#4338CA] shadow-md shadow-indigo-500/20"
                  : "bg-white/80 text-slate-700 border-white hover:bg-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div 
        className="flex-1 relative w-full h-full overflow-hidden" 
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowDetails(false);
          }
        }}
      >
        <motion.div 
          animate={{ scale: zoom }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full h-full origin-center relative"
        >
          {/* Generic SVG Campus Map Background */}
          <svg className="absolute inset-0 w-[200%] h-[200%] -top-[50%] -left-[50%] pointer-events-none opacity-40" viewBox="0 0 1000 1000">
            {/* Base Campus Ground */}
            <rect width="1000" height="1000" fill="#EBEBFA" />
            {/* Green Spaces */}
            <path d="M 100 100 Q 300 50 400 200 T 200 400 Z" fill="#D4DFD2" />
            <path d="M 600 700 Q 800 650 900 800 T 700 950 Z" fill="#D4DFD2" />
            <circle cx="800" cy="200" r="100" fill="#D4DFD2" />
            {/* Roads/Paths */}
            <path d="M 0 500 Q 250 400 500 500 T 1000 500" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
            <path d="M 500 0 L 500 1000" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
            <path d="M 300 200 L 300 500" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <path d="M 500 700 L 800 700" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            {/* Buildings */}
            <rect x="250" y="150" width="80" height="80" rx="10" fill="#CBD5E1" />
            <rect x="550" y="300" width="120" height="100" rx="10" fill="#CBD5E1" />
            <rect x="600" y="550" width="90" height="90" rx="10" fill="#CBD5E1" />
            <rect x="200" y="600" width="150" height="80" rx="10" fill="#CBD5E1" />
            <circle cx="800" cy="200" r="40" fill="#CBD5E1" />
          </svg>

          {/* Active Routing Path */}
          <AnimatePresence>
            {isRouting && (
              <motion.svg 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full pointer-events-none" 
                style={{ filter: 'drop-shadow(0 2px 4px rgba(67,56,202,0.3))' }}
              >
                <motion.path 
                  d="M 60 220 Q 200 150 350 250" 
                  fill="none" 
                  stroke="#4338CA" 
                  strokeWidth="4" 
                  strokeDasharray="8 8" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.svg>
            )}
          </AnimatePresence>

          {/* User Current Location Pin (Start of route) */}
          <AnimatePresence>
            {isRouting && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-[220px] left-[60px] w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md z-10 -ml-2 -mt-2"
              />
            )}
          </AnimatePresence>

        {/* Dynamic Pins */}
        <AnimatePresence>
          {filteredLocations.map((loc, idx) => {
            const Icon = loc.icon;
            const isSelected = selectedLocation.id === loc.id;
            const isRouteDestination = isRouting && isSelected;
            
            return (
              <motion.div 
                key={loc.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.05 }}
                className="absolute flex flex-col items-center z-20"
                style={{ top: loc.top, left: loc.left }}
              >
                <div 
                  className="relative cursor-pointer hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(loc);
                    setShowDetails(true);
                    setIsRouting(false); // reset route when picking new location
                  }}
                >
                  {isRouteDestination && (
                    <>
                      <div className="absolute -inset-2 bg-emerald-300 rounded-full animate-ping opacity-30" />
                      <div className="absolute inset-0 bg-emerald-200 rounded-full scale-[1.3] opacity-60" />
                    </>
                  )}
                  {isSelected && !isRouteDestination && (
                    <div className="absolute -inset-2 bg-indigo-300 rounded-full animate-ping opacity-30" />
                  )}

                  <div className={cn(
                    "w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center text-white relative z-10 shadow-lg transition-colors", 
                    isRouteDestination ? "bg-emerald-500" : isSelected ? "bg-[#4338CA]" : "bg-slate-400"
                  )}>
                    <Icon size={18} />
                  </div>
                </div>
                
                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100"
                  >
                    <span className={cn("text-[10px] font-bold whitespace-nowrap", isRouteDestination ? "text-emerald-600" : "text-[#4338CA]")}>
                      {loc.name}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Route A Bus Pin (Static context) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
          className="absolute top-[45%] left-[20%] pointer-events-none"
        >
          <div className="flex items-center gap-1.5 bg-[#0284C7] text-white px-3 py-1.5 rounded-[12px] border-[2px] border-white shadow-lg shadow-blue-500/20">
            <Bus size={14} />
            <span className="text-[11px] font-bold">Route A</span>
          </div>
        </motion.div>

        {/* Floating Controls Right */}
        <div className="absolute right-4 top-16 flex flex-col gap-6 z-20">
          
          {/* Floor Selector */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[16px] shadow-lg border border-slate-100 flex flex-col overflow-hidden">
            {['L3', 'L2', 'L1', 'G'].map(floor => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center text-xs font-bold transition-all relative",
                  selectedFloor === floor 
                    ? "bg-indigo-50/80 text-[#4338CA]" 
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {selectedFloor === floor && (
                  <motion.div 
                    layoutId="activeFloor"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#4338CA]"
                  />
                )}
                {floor}
              </button>
            ))}
          </div>

          {/* Zoom Controls */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[16px] shadow-lg border border-slate-100 flex flex-col overflow-hidden">
            <button 
              onClick={handleZoomIn}
              className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors border-b border-slate-100"
            >
              <Plus size={18} />
            </button>
            <button 
              onClick={handleZoomOut}
              className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <Minus size={18} />
            </button>
          </div>
        </div>
        </motion.div>
      </div>

      {/* Bottom Detail Card */}
      <AnimatePresence>
        {showDetails && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-0 left-0 right-0 z-30 px-3 pb-28 pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] border border-white pointer-events-auto">
              <div className="w-10 h-1.5 bg-slate-200 rounded-full mx-auto mb-5" />
              
              <div className="flex gap-4 mb-5">
                <div className="w-[84px] h-[84px] rounded-2xl overflow-hidden shadow-sm shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=300&fit=crop" 
                    alt="Central Library" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-[17px] leading-tight">{selectedLocation.name}</h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-bold text-[#4338CA]">Open</span>
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium mb-3">{selectedLocation.details}</p>
                  
                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500">
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-slate-400" /> Closes at 10:00 PM</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-slate-400" /> 5 min</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsRouting(!isRouting)}
                  className={cn(
                    "flex-1 text-white rounded-2xl py-3.5 text-[13px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md",
                    isRouting 
                      ? "bg-red-500 hover:bg-red-600 shadow-red-500/20" 
                      : "bg-[#4338CA] hover:bg-indigo-800 shadow-indigo-500/30"
                  )}
                >
                  {isRouting ? (
                    <>Cancel Route</>
                  ) : (
                    <><Navigation size={14} className="fill-white" /> Take me there</>
                  )}
                </button>
                <button className="w-[52px] bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-all">
                  <Share2 size={16} className="text-[#4338CA]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
