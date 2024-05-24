"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [state, setState] = useState({ 
    success: false,
    error: false,
    msg: 'You should send a private message to jalberto.martinez.fs@gmail.com',
    text: 'Say Hello!'
   });


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setState({ ...state, success: false, error: false });

    if (!form.current[0].value || !form.current[1].value || !form.current[2].value) {
      setState({...state, error: true, msg: 'Please fill up all the form!' })
    } else {
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_KEY, form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then(
          () => {
            setState({ ...state, success: true, error: false });
            form.current.reset();
          },
          (error) => {
            setState({ ...state, error: true, success: false, msg: 'You should send a private message to jalberto.martinez.fs@gmail.com' });
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      <div className="h-full flex flex-col overflow-scroll lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {state.text.split('').map((letter, indx) => (
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
        <div className="h-1/2 lg:h-full lg:w-1/2 bd-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-14">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2" >
            <input name="user_name" type="text" placeholder="write your name here!" className="bg-transparent border-b-2 border-b-black outline-none" />
            <span>Dear Alberto Martinez, </span>
            <textarea name="user_message" id="msg" rows={6} placeholder="write your message" className="bg-transparent border-b-2 border-b-black "></textarea>
            <span>My email address is:</span>
            <input name="user_email" type="email" placeholder="write your contact e-mail" className="bg-transparent border-b-2 border-b-black outline-none"/>
            <span>Regards</span>
            <button type="submit" className="bg-purple-200 rounded font-semibold tet-gray-600 p-4">Send</button>
            {state.success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
            {state.error && <span className="text-red-600 font-semibold">{state.msg}</span>}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage;