"use client"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import constants from "@/utils/constants";
import Image from "next/image";

const AboutPage = () => {

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const expRef = useRef();
  const isExpRefInView = useInView(expRef);

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam, molestiae blanditiis quo praesentium tempora harum debitis quisquam totam nam optio quas aut veritatis distinctio consectetur, et dicta voluptates doloribus.
            </p>
            <span className="italic">
              Exercitationem quam, molestiae blanditiis quo praesentium tempora
            </span>
            <motion.svg 
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: '10px'}}
              transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              </g>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:'-300px'}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            <motion.div initial={{x:'-300px'}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="flex gap-4 flex-wrap">
              {constants.skills.map(skill => (
                <div key={skill} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{skill}</div>
              ))}
            </motion.div>
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: '10px'}}
              transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
              </g>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={expRef}>
            <motion.h1 initial={{x:'-300px'}} animate={isExpRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            <motion.div initial={{x:'-300px'}} animate={isExpRefInView ? {x:0} : {}} transition={{delay:0.2}}>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Name Role Inside Company</div>
                  <div className="p-3 text-sm italic">Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Job date</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Job company</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Name Role Inside Company</div>
                  <div className="p-3 text-sm italic">Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Job date</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Job company</div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Name Role Inside Company</div>
                  <div className="p-3 text-sm italic">Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role - Description role</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Job date</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Job company</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl-1/2">
          <div className="h-full w-full">
            <Image src="/hero.png" alt="meNot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  className="object-contain"/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage;