"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Command, Cpu, Globe, Shield, Zap } from 'lucide-react';

export default function AtlasTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    "ATLAS v1.0.4 - SECURE INTERFACE",
    "INITIALIZING NEURAL LINK...",
    "SYSTEM READY. TYPE 'HELP' FOR COMMANDS.",
    "----------------------------------------"
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    const newHistory = [...history, `> ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push("AVAILABLE COMMANDS:", "- STATUS: System Health", "- SCAN: Network Diagnostics", "- CLEAR: Wipe Terminal", "- ABOUT: Atlas Info");
        break;
      case 'status':
        newHistory.push("CPU: 14% | TEMP: 32°C", "ENCRYPTION: AES-256 ACTIVE", "LOCATION: GQEBERHA, SA", "STATUS: OPTIMAL");
        break;
      case 'scan':
        newHistory.push("SCANNING PORTS...", "NO THREATS DETECTED.", "LATENCY: 12ms");
        break;
      case 'clear':
        setHistory(["TERMINAL WIPED.", "READY."]);
        setInput('');
        return;
      case 'about':
        newHistory.push("ATLAS TERMINAL", "BY VANGUARD LOGIC SYSTEMS", "EST. 2026");
        break;
      default:
        newHistory.push(`UNKNOWN COMMAND: ${cmd}`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-orange-500 font-mono p-4 md:p-8 flex flex-col items-center justify-center">
      {/* TERMINAL CONTAINER */}
      <div className="w-full max-w-2xl border-2 border-orange-900/50 rounded-lg bg-zinc-950 shadow-[0_0_20px_rgba(251,146,60,0.1)] overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-orange-900/30">
          <div className="flex items-center gap-2">
            <Terminal size={18} />
            <span className="text-xs font-bold tracking-widest uppercase">Atlas OS</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600"></div>
          </div>
        </div>

        {/* OUTPUT AREA */}
        <div 
          ref={scrollRef}
          className="h-[60vh] overflow-y-auto p-4 space-y-1 text-sm md:text-base scrollbar-hide"
        >
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? "text-white" : "opacity-90"}>
              {line}
            </div>
          ))}
          <div className="h-4" />
        </div>

        {/* INPUT AREA */}
        <form onSubmit={handleCommand} className="p-4 bg-zinc-900/50 border-t border-orange-900/30 flex items-center gap-2">
          <span className="text-orange-400 font-bold">»</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-white placeholder-orange-900"
            placeholder="ENTER COMMAND..."
            autoFocus
          />
        </form>
      </div>

      {/* QUICK STATS FOOTER */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl opacity-60">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter">
          <Cpu size={12} /> Sync: Online
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter">
          <Globe size={12} /> Node: Gqeberha
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter">
          <Shield size={12} /> Prot: Vanguard
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter text-orange-400 font-bold">
          <Zap size={12} /> Latency: 12ms
        </div>
      </div>
    </div>
  );
}
