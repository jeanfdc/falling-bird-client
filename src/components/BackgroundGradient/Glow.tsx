import React from 'react'

interface glowProps {
  variation: string;
}

export default function Glow({ variation }: glowProps) {
  return (
    <div>
      {variation == "small" &&
        <div className="absolute inset-0 flex justify-center items-center" style={{zIndex: 1}}>
          <div className="relative left-24 bottom-32 w-[262px] h-[262px] rounded-full bg-[#5378FF] opacity-70 animate-pulse" style={{ filter: 'blur(100px)' }} />
          <div className="relative bottom-40 w-[306px] h-[306px] rounded-full bg-[#8653FF] opacity-90 animate-pulse" style={{ filter: 'blur(100px)' }} />
          <div className="relative right-10 bottom-20 w-[194px] h-[194px] rounded-full bg-[#FF53EB] opacity-70 animate-pulse" style={{ filter: 'blur(100px)' }} />
        </div>}

      {variation == "full" &&
        <div className="absolute inset-0 flex justify-center items-center" style={{zIndex: 1}}>
          <div className="relative left-40 bottom-6 w-[770px] h-[262px] rounded-full bg-[#5378FF] opacity-50" style={{ filter: 'blur(100px)' }} />
          <div className="relative bottom-10 w-[900px] h-[306px] rounded-full bg-[#8653FF] opacity-60" style={{ filter: 'blur(100px)' }} />
          <div className="relative right-40 bottom-4 w-[570px] h-[194px] rounded-full bg-[#FF53EB] opacity-50" style={{ filter: 'blur(100px)' }} />
        </div>}
    </div>
  )
}