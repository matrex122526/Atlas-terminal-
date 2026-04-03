"use client";
import React from 'react';
import { Globe, TrendingUp, ShieldAlert, Cpu, Zap, Search, Bell, Menu } from "lucide-react";

export default function AtlasMobile() {
  return (
    <div className="fixed inset-0 bg-black text-[#e0e0e0] font-mono flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="p-3 border-b border-zinc-800 flex justify-between items-center bg-black pt-12">
        <h1 className="text-orange-500 font-black tracking-tighter text-xl italic underline decoration-2">ATLAS</h1>
        <div className="flex gap-4 items-center text-zinc-500"><Search size={20} /><Bell size={20} /></div>
      </div>

      {/* TICKER */}
      <div className="bg-zinc-900/50 py-1 border-b border-zinc-800 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-pulse uppercase text-[10px] font-bold text-green-400 px-4">
          • BTC $72,431 • NATO EXERCISE STARTS • NVDA +2.1% • OIL $78.42 •
        </div>
      </div>

      {/* MAIN FEED */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        <div className="bg-zinc-950 border border-zinc-800 p-4 border-l-4 border-l-red-600 shadow-lg shadow-red-900/10">
          <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Global Conflict Alert</p>
          <p className="text-sm text-white mt-1 font-bold">Escalation in South China Sea. Regional Risk: CRITICAL.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-sm">
            <p className="text-[10px] text-zinc-500 font-bold uppercase">S&P 500</p>
            <p className="text-green-500 text-xl font-black">+1.24%</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-sm">
            <p className="text-[10px] text-zinc-500 font-bold uppercase">Gold</p>
            <p className="text-orange-500 text-xl font-black">+0.82%</p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-4">
           <p className="text-[10px] text-blue-500 font-bold uppercase mb-2">AI Summary</p>
           <p className="text-xs leading-relaxed text-zinc-400">Defense sectors surging on new contracts. AI sentiment remains bullish despite regulatory headwind.</p>
        </div>
      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-md border-t border-zinc-800 flex justify-around items-center px-6 pb-8">
        <Globe size={24} className="text-orange-500" />
        <TrendingUp size={24} className="text-zinc-500" />
        <div className="bg-orange-500 p-4 rounded-full -mt-14 border-8 border-black shadow-2xl active:scale-90 transition-transform">
          <Zap size={28} className="text-black" />
        </div>
        <ShieldAlert size={24} className="text-zinc-500" />
        <Menu size={24} className="text-zinc-500" />
      </nav>
    </div>
  );
}
