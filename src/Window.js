// src/Window.js
import React from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize, FaTimes } from 'react-icons/fa';

export default function Window({ title, children, className }) {
  return (
    <div className={`bg-window-frame border-2 border-black rounded-lg shadow-[3px_3px_0px_black] flex flex-col max-h-full ${className}`}>
      {/* Title Bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-2 py-1 border-b-2 border-black">
        <h2 className="font-bold text-black text-sm">{title}</h2>
        <div className="flex items-center gap-1">
          {/* Minimize, Maximize, and Close Buttons */}
          <button 
            aria-label="Minimize" 
            className="w-5 h-5 bg-window-bg border-2 border-black flex items-center justify-center text-black font-bold hover:bg-gray-300 active:bg-gray-400 text-[10px] rounded-full"
          >
            <FaRegWindowMinimize />
          </button>
          <button 
            aria-label="Maximize" 
            className="w-5 h-5 bg-window-bg border-2 border-black flex items-center justify-center text-black font-bold hover:bg-gray-300 active:bg-gray-400 text-[10px] rounded-full"
          >
            <FaRegWindowMaximize />
          </button>
          <button 
            aria-label="Close" 
            className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-black font-bold hover:bg-red-600 active:bg-red-700 text-[10px] rounded-full"
          >
            <FaTimes />
          </button>
        </div>
      </div>
      {/* Content Area */}
      <div className="bg-white p-6 md:p-10 flex-1 overflow-y-auto">
        {children}
      </div>
      
    </div>
    
  );
}