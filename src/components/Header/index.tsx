import React from 'react'
import LogoModels from '../LogoModels'
import Link from './ListLink'
import { motion } from 'framer-motion'

const headerData = [
  {
    id: "home",
    route: "/home",
    content: "Home"
  },

  {
    id: "about",
    route: "/about",
    content: "Sobre"
  },

  {
    id: "suport",
    route: "/suport",
    content: "Suporte"
  },

  {
    id: "github",
    route: "https://github.com/jeanfdc/falling-bird-client",
    content: "Git Hub"
  },

  {
    id: "faq",
    route: "/faq",
    content: "FAQ"
  }
]

export default function Header() {
  return (
    <div className='flex gap-x-[70px] px-[100px] 2xl:gap-x-[100px] 2xl:px-[150px] py-[30px] 2xl:py-[50px] w-screen items-center'>
      <a href="/home"><LogoModels model={2} className='h-[35px] 2xl:h-[47px] select-none' /></a>

      <motion.ul className='flex gap-x-[35px] 2xl:gap-x-[50px] text-white text-[20px] 2xl:text-[30px] league-spartan font-semibold'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {headerData.map((data) => (
          <Link key={`link-${data.id}`} route={data.route}>{data.content}</Link>
        ))}
      </motion.ul>
    </div>
  )
}