"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function AtlasTerminal() {
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "VANGUARD LOGIC SYSTEMS v4.0.2",
    "CORE: QUANTUM-RESTRICTED BEYOND THIS POINT",
    "INITIALIZING ATLAS INTERFACE...",
    "LINKING GQEBERHA SUB-STATION [ACTIVE]",
    "DECRYPTING BIOMETRIC HASH... [SUCCESS]",
    "WELCOME, OPERATOR.",
    "TYPE 'HELP' FOR COMMAND LIST."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setBootLog(prev => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bootLog, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    if (cmd === 'help') response = "AVAILABLE: STATUS, NETWORK, CLEAR, BYPASS";
    else if (cmd === 'status') response = "SYSTEM: NOMINAL | POWER: 98% | LATENCY: 12ms";
    else if (cmd === 'network') response = "UPLINK: SECURE [RSA-4096] | LOCATION: GQEBERHA, ZA";
    else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
    else if (cmd === '') return;
    else response = `COMMAND NOT RECOGNIZED: ${cmd}`;

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: '#00ff41', 
      height: '100vh', 
      padding: '20px', 
      fontFamily: 'Courier New, monospace',
      fontSize: '14px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Scanline Effect */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        zIndex: 2, pointerEvents: 'none', backgroundSize: '100% 4px, 3px 100%'
      }}></div>

      <div ref={scrollRef} style={{ height: '90%', overflowY: 'auto', zIndex: 1 }}>
        {bootLog.map((line, i) => <div key={i} style={{ marginBottom: '4px' }}>{line}</div>)}
        {history.map((line, i) => <div key={i} style={{ marginBottom: '4px', opacity: line.startsWith('>') ? 0.7 : 1 }}>{line}</div>)}
      </div>

      <form onSubmit={handleCommand} style={{ marginTop: '10px', display: 'flex' }}>
        <span style={{ marginRight: '8px' }}>$</span>
        <input 
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ 
            backgroundColor: 'transparent', border: 'none', color: '#00ff41', 
            outline: 'none', width: '100%', fontSize: '16px' 
          }}
        />
      </form>
    </div>
  );
}
