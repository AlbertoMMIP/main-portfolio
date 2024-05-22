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
            <p className="text-md">
              My name is Alberto Martinez and I am Software Engineer. I was born in Mexico City, I have a bachelor degree as Telematic Engineer, I studied a bootcamp in Full Stack Web Development, I studied English for 6 months in Vancouver CA and I've studied a lot of courses by myself. I'm writing this because I'm passionate about learning, I think learning is one of the best skill that the human can do. However something even better is applying all that knowledge.
            </p>
            <p className="text-md">
              I have more 11 years of experience working in financial area, working with banks companies managing differents kinds of products, as loan, factoring, morgage, credit cards and more. 
            </p>
            <p className="text-md">
              My tech stack at this moment is all about JavaScript. I work with Node, Graphql, Express for back-end side, I use Postgres, SQL, Oracle for data bases, I use React, Vue, HTML, CSS, UIkit, MaterialUI, Bulma for Front-end side and I know to work perfectly with version control code using GIT, moreover I really like working with agile methodologies as Scrum and Safe.
            </p>
            <span className="italic">
              The simplicity is the key word for happinest.
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
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{constants.experience[0].rol}</div>
                  <div className="p-3 text-sm">{constants.experience[0].summary}</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">{constants.experience[0].from}-{constants.experience[0].to}</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{constants.experience[0].company}</div>
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
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{constants.experience[1].rol}</div>
                  <div className="p-3 text-sm">{constants.experience[1].summary}</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">{constants.experience[1].from}-{constants.experience[1].to}</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{constants.experience[1].company}</div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{constants.experience[2].rol}</div>
                  <div className="p-3 text-sm">{constants.experience[2].summary}</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">{constants.experience[2].from}-{constants.experience[2].to}</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{constants.experience[2].company}</div>
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