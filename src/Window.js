import React from 'react';

// --- SVG Icons (replaces react-icons for stability) ---
const FaRegWindowMinimize = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"></path></svg>;
const FaRegWindowMaximize = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340z"></path></svg>;
const FaTimes = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>;

export default function Window({ title, children, className }) {
  return (
    // Updated for a sleeker look: 1px border, softer shadow, and uses custom theme colors
    <div className={`bg-window-frame border border-window-dark rounded-lg shadow-xl shadow-charcoal/20 flex flex-col max-h-full ${className}`}>
      {/* Title Bar: Thinner bottom border */}
      <div className="flex-shrink-0 flex items-center justify-between px-2 py-1 border-b border-window-dark">
        <h2 className="font-bold text-window-dark text-sm">{title}</h2>
        <div className="flex items-center gap-1">
          {/* Control Buttons: Thinner borders and themed colors */}
          <button 
            aria-label="Minimize" 
            className="w-5 h-5 bg-window-bg border border-window-dark flex items-center justify-center text-window-dark font-bold hover:bg-stone text-[10px] rounded-full"
          >
            <FaRegWindowMinimize />
          </button>
          <button 
            aria-label="Maximize" 
            className="w-5 h-5 bg-window-bg border border-window-dark flex items-center justify-center text-window-dark font-bold hover:bg-stone text-[10px] rounded-full"
          >
            <FaRegWindowMaximize />
          </button>
          <button 
            aria-label="Close" 
            className="w-5 h-5 bg-red-500 border border-red-700 flex items-center justify-center text-white font-bold hover:bg-red-600 text-[10px] rounded-full"
          >
            <FaTimes />
          </button>
        </div>
      </div>
      {/* Content Area: Uses the themed background color */}
      <div className="bg-window-bg p-6 md:p-10 flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
}