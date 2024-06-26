"use client"

import { useState } from "react";
import constants from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../navLink/NavLink";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 30,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -30,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  }
  


  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
            {
              constants.links.map(link => (
                <NavLink key={link.id} link={link} />
              ))
            }
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex item-center justify-center"
        >
          <span className="text-white mr-1">Albert</span>
          <span className="w-12 h8 rounded bg-white text-black flex item-center justify-center">.dev</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/AlbertoMMIP" target="_blank">          
          <Image src="./github.png" alt="github.com" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/albmrtzmxn?igsh=a3czcDZ3cWd2cXF4&utm_source=qr" target="_blank">          
          <Image src="./instagram.png" alt="instagram.com" width={24} height={24} />
        </Link>
        <Link href="https://pin.it/5ppeONOG4" target="_blank">          
          <Image src="./pinterest.png" alt="github.com" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com/in/alberto-martinezz" target="_blank">          
          <Image src="./linkedin.png" alt="github.com" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden">
        <button className="w-10 h-6 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {
          open &&
            <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {
              constants.links.map(link => (
               <motion.div className="" key={link.id} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
               </motion.div> 
              ))
            }
          </motion.div>
        }
        
      </div>
    </div>
  )
}

export default Navbar;