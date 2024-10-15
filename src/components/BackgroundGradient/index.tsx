import React from 'react';

interface BackgroundProps{
  children?: React.ReactNode;
  className?: string;
}

export default function BackgroundGradient({children, className} : BackgroundProps){
  return (
    <div className={`h-screen w-screen bg-gradient-to-t from-[#0D1435] to-[#101A49] ${className}`}>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative left-24 bottom-32 w-[262px] h-[262px] rounded-full bg-[#5378FF] opacity-70 z-10 animate-pulse" style={{ filter: 'blur(100px)'}} />
        <div className="relative bottom-40 w-[306px] h-[306px] rounded-full bg-[#8653FF] opacity-90 z-10 animate-pulse" style={{ filter: 'blur(100px)'}} />
        <div className="relative right-10 bottom-20 w-[194px] h-[194px] rounded-full bg-[#FF53EB] opacity-70 z-10 animate-pulse" style={{ filter: 'blur(100px)'}} />
      </div>

      <div className={`h-full w-full bg-black/50 z-20 ${className}`}>
        {children}
      </div>
    </div>
  )
};