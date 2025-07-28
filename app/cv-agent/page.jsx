'use client';

import { useState } from 'react';

export default function CVAgentPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" fixed bottom-0 z-[9999] w-[80%] left-[10%] right-[10%] 
                lg:w-[550px] lg:right-4 lg:left-auto  ">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full lg:h-12 h-8  bg-accent text-white text-xl font-semibold rounded-t-xl transition-all duration-1000 ${
          isOpen ? '' : ''
        }`}
      >
        {isOpen ? '🔽 Hide ME' : '🤖 ProFile Agent'}
      </button>

      {/* Sliding iframe container - Always Rendered */}
      <div
        className={`transform transition-all duration-1000 ease-in-out
          ${isOpen ? 'translate-y-0 lg:h-[500px] h-[350px]' : 'translate-y-[100%] h-0 '}
        `}
      >
        <iframe
          src="https://vigilant-spirit-production.up.railway.app/"
          title="CV Agent"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
}
