import React from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'
import Header from '../../components/Header'
import Buttons from '../../components/ButtonsHomePage'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <BackgroundGradient glowVar='full' className='flex flex-col'>
      <Header />

      <motion.div 
      className='flex px-[100px] py-[50px]  2xl:px-[150px] 2xl:py-[75px] place-content-between grow'
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      >
        <div className='flex flex-col gap-y-[10px]'>
          <h1 className='text-white mulish font-black max-w-[430px] 2xl:max-w-[600px] text-[40px] 2xl:text-[60px] leading-[45px] 2xl:leading-[80px]'>
            BATE-PAPO
            EM TEMPO REAL
            COM SEUS AMIGOS
            DE ONDE E QUANDO
            VOCÊ QUISER.
          </h1>

          <p className='text-white raleway font-regular max-w-[311px] 2xl:max-w-[435px] text-[18px] 2xl:text-[25px]'>
            O Falling Bird é ótimo para relaxar
            e jogar, acima de tudo para conversar
            com seus amigos de onde quiser.
          </p>
        </div>

        <div>
          <div className="absolute right-40 2xl:right-60 w-[300px] h-[300px] 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-[#b8bdff] opacity-70 animate-pulse z-0" style={{ filter: 'blur(100px)' }} />

          <img
            className='h-[300px] 2xl:h-[500px] relative z-1 select-none'
            src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/DevicesScreenHomepage.png?alt=media&token=b336c1a1-d675-4e69-9ab5-609dcb920a06"
            alt="" />
        </div>

      </motion.div>
      <Buttons />
    </BackgroundGradient>
  )
}