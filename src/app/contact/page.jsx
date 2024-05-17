"use client"

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello!";

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split('').map((letter, indx) => (
              <motion.span key={indx}
                initial={{ opacity: 1}}
                animate={{ opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: indx * 0.1,
                }}  
              >
                {letter}
              </motion.span>
            ))}
            😀
          </div>
        </div>
        <form className="h-1/2 lg:h-full lg:w-1/2 bd-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Alberto Martinez</span>
          <textarea name="user_message" id="msg" rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
          <span>My email address is:</span>
          <input name="user_email" type="email" className="bg-transparent border-b-2 border-b-black outline-none"/>
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold tet-gray-600 p-4">Send</button>
          {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong! <br/> You should send a private message to jalberto.martinez.fs@gmail.com</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage;