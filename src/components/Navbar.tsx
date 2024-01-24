"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">Hagel Studio</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 hover:text-stone-600 hover:border-white">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-stone-600 mr-4">
            Exhibitions
          </a>
        </div>
      </div>
    </nav>
  );
}