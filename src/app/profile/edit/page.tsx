"use client";

import { TopNav } from "@/components/layout/TopNav";
import { motion } from "framer-motion";
import { Camera, Check, ChevronDown, Mail, Phone, MapPin, Calendar, Droplets, User, BookOpen, Hash } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function EditProfileScreen() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    fullName: "Chahat Taneja",
    dob: "2003-08-15",
    bloodGroup: "O+",
    phone: "+91 98765 43210",
    email: "chahat.s@campusone.edu",
    personalEmail: "chahat.taneja@gmail.com",
    address: "42, Sector 15, Chandigarh, 160015",
    course: "B.Des Graphic Design",
    semester: "5",
    studentId: "2024BD089",
    guardianName: "Mr. Rajesh Taneja",
    guardianPhone: "+91 98765 00001",
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      router.push("/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen pb-28 bg-slate-50 dark:bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-100/80 via-purple-50/40 to-slate-50 dark:from-indigo-900/30 dark:via-purple-900/10 dark:to-slate-900 pointer-events-none" />

      <TopNav title="Edit Profile" showBack />

      <main className="px-4 pt-2 space-y-6 relative z-10">

        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mt-2 mb-2"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-[6px] border-white dark:border-slate-800 shadow-sm overflow-hidden relative">
              <Image src="/profile.png" alt="Profile" fill className="object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-white dark:border-slate-800 active:scale-90 transition-transform">
              <Camera size={16} />
            </button>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-3">Tap camera to change photo</p>
        </motion.div>

        {/* Personal Information */}
        <Section title="Personal Information" icon={<User size={16} className="text-primary" />} delay={0.1}>
          <InputField label="Full Name" icon={<User size={15} />} value={form.fullName} onChange={v => update("fullName", v)} />
          <InputField label="Date of Birth" icon={<Calendar size={15} />} value={form.dob} onChange={v => update("dob", v)} type="date" />
          <SelectField label="Blood Group" icon={<Droplets size={15} />} value={form.bloodGroup} onChange={v => update("bloodGroup", v)} options={["A+","A-","B+","B-","AB+","AB-","O+","O-"]} />
        </Section>

        {/* Contact Information */}
        <Section title="Contact Information" icon={<Phone size={16} className="text-primary" />} delay={0.15}>
          <InputField label="Phone Number" icon={<Phone size={15} />} value={form.phone} onChange={v => update("phone", v)} type="tel" />
          <InputField label="College Email" icon={<Mail size={15} />} value={form.email} onChange={v => update("email", v)} type="email" disabled />
          <InputField label="Personal Email" icon={<Mail size={15} />} value={form.personalEmail} onChange={v => update("personalEmail", v)} type="email" />
          <InputField label="Address" icon={<MapPin size={15} />} value={form.address} onChange={v => update("address", v)} multiline />
        </Section>

        {/* Academic Information */}
        <Section title="Academic Information" icon={<BookOpen size={16} className="text-primary" />} delay={0.2}>
          <InputField label="Student ID" icon={<Hash size={15} />} value={form.studentId} onChange={v => update("studentId", v)} disabled />
          <InputField label="Course" icon={<BookOpen size={15} />} value={form.course} onChange={v => update("course", v)} disabled />
          <SelectField label="Semester" icon={<BookOpen size={15} />} value={form.semester} onChange={v => update("semester", v)} options={["1","2","3","4","5","6","7","8"]} disabled />
        </Section>

        {/* Guardian Information */}
        <Section title="Guardian Information" icon={<User size={16} className="text-primary" />} delay={0.25}>
          <InputField label="Guardian Name" icon={<User size={15} />} value={form.guardianName} onChange={v => update("guardianName", v)} />
          <InputField label="Guardian Phone" icon={<Phone size={15} />} value={form.guardianPhone} onChange={v => update("guardianPhone", v)} type="tel" />
        </Section>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-2 pb-4"
        >
          <button
            onClick={handleSave}
            disabled={saved}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all",
              saved
                ? "bg-emerald-500 text-white shadow-emerald-500/30"
                : "bg-[#312E81] dark:bg-blue-600 text-white shadow-indigo-500/25"
            )}
          >
            {saved ? (
              <>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <Check size={20} />
                </motion.div>
                Saved Successfully!
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </motion.div>
      </main>
    </div>
  );
}

/* ── Reusable Components ── */

function Section({ title, icon, delay, children }: { title: string; icon: React.ReactNode; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
        {icon}
        <h3 className="font-bold text-slate-900 dark:text-white text-[15px]">{title}</h3>
      </div>
      <div className="space-y-5">{children}</div>
    </motion.div>
  );
}

function InputField({ label, icon, value, onChange, type = "text", disabled = false, multiline = false }: {
  label: string; icon: React.ReactNode; value: string; onChange: (v: string) => void; type?: string; disabled?: boolean; multiline?: boolean;
}) {
  const base = "w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all";
  return (
    <div>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 block">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-slate-400">{icon}</div>
        {multiline ? (
          <textarea value={value} onChange={e => onChange(e.target.value)} disabled={disabled} rows={2} className={cn(base, "py-3 resize-none", disabled && "opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-800")} />
        ) : (
          <input type={type} value={value} onChange={e => onChange(e.target.value)} disabled={disabled} className={cn(base, "py-3", disabled && "opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-800")} />
        )}
      </div>
    </div>
  );
}

function SelectField({ label, icon, value, onChange, options, disabled = false }: {
  label: string; icon: React.ReactNode; value: string; onChange: (v: string) => void; options: string[]; disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 block">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-slate-400">{icon}</div>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          className={cn(
            "w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-10 py-3 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none",
            disabled && "opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-800"
          )}
        >
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}
