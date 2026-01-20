
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Golden Circle Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 shadow-lg"></div>
        {/* Stylized Research Icon */}
        <svg viewBox="0 0 24 24" className="relative w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
        </svg>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
          ClariStat
        </span>
        <span className="text-[8px] tracking-[0.2em] font-bold text-amber-700 uppercase">
          Research Consultancy
        </span>
      </div>
    </div>
  );
};

export default Logo;