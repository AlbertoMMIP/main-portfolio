"use client"

import { useState } from "react";
import constants from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../navLink/NavLink";

const Navbar = () => {

  const [open, setOpen] = useState(false);
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
        <Link href="#">          
          <Image src="/github.png" alt="github.com" width={24} height={24} />
        </Link>
        <Link href="#">          
          <Image src="/instagram.png" alt="github.com" width={24} height={24} />
        </Link>
        <Link href="#">          
          <Image src="/pinterest.png" alt="github.com" width={24} height={24} />
        </Link>
        <Link href="#">          
          <Image src="/linkedin.png" alt="github.com" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden">
        <button className="w-10 h-6 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {
          open &&
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {
              constants.links.map(link => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
              ))
            }
          </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar;