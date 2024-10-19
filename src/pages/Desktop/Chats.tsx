import React from "react";
import Logo from "../../components/LogoModels";

export default function Chats() {
  return (
    <div className="flex h-screen w-screen bg-[#2C2C2C]">
      {/* Tools Bar */}
      <div className="w-[45px] bg-[#151515]">

      </div>

      {/* Contacts Nav */}
      <div className="px-[15px] py-[15px] w-[250px] bg-[#252525]">
        <h1 className="text-[20px] lato font-bold text-white">Seus Chats</h1>
      </div>

      {/* ChatScreen */}
      <div className="bg-[#2C2C2C] grow flex items-center justify-center select-none">
        <div className="flex flex-col gap-y-[25px] items-center">
          <Logo model={2} className="h-[100px] brightness-[0.35]" />

          <div className="text-center">
            <h2 className="font-light mulish text-[20px] text-white ">Falling Bird para Web</h2>

            <p className="font-regular raleway text-white/30">Envie e receba mensagens de qualquer lugar do mundo</p>
          </div>
        </div>

      </div>
    </div>
  )
}