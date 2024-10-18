import React from 'react';
import Glow from './Glow';

interface BackgroundProps{
  children?: React.ReactNode;
  className?: string;
  glowVar: string;
}

export default function BackgroundGradient({children, className, glowVar} : BackgroundProps){
  return (
    <div className={`h-screen w-screen bg-gradient-to-t from-[#0D1435] to-[#101A49] ${className}`}>
     <Glow variation={glowVar}/>

      <div className={`h-full w-full bg-black/50 relative top-0 ${className}`} style={{zIndex: 2}}>
        {children}
      </div>
    </div>
  )
};