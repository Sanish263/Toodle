import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { IProps } from '../interfaces/interfaces'
import Geyes from '../public/Geyes.png'
import GopherImage from '../public/GopherImage.png'
import { motion } from 'framer-motion'

const InputField:React.FC<IProps> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyeRef1 = useRef<HTMLDivElement>(null);
  const eyeRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      
      console.log(e)

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rekt = imageRef.current?.getBoundingClientRect();
      if (!rekt) return;
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      console.log(angleDeg)

      const eye1 = eyeRef1.current;
      if (!eye1) return;
      eye1.style.transform = `rotate(${90 + angleDeg}deg)`;
      const eye2 = eyeRef2.current;
      if (!eye2) return;
      eye2.style.transform = `rotate(${90 + angleDeg}deg)`;
      
    })
  }, [])

  const angle = (x1: number, y1: number, x2: number, y2: number):number => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const rads = Math.atan2(dy, dx);
    const deg = rads * 180 / Math.PI;
    return deg;
  };


  return (
    <>
    <motion.div 
      className='hidden md:flex absolute left-16 xl:left-[90px] hover:py-6 z-0 '
      initial={{
        y: 0,
      }}
      whileHover={{
        y: 5,
      }}
      transition={{
        y: { damping: 1000 ,stiffness: 1000, velocity: -9999 },
        duration: 10,
      }}>
        <div className=' opacity-95' ref={imageRef}>
          <Image 
            priority
            src={GopherImage}
            objectFit='contain'
            width="80"
            height="80"
            style={{transitionProperty: "transform", transitionDuration: "1000ms", transitionTimingFunction: "ease-in-out", transitionDelay: "0s",}}
            className='relative p-9'
          />
      </div>
      <div className='flex gap-x-[19px] absolute ml-[18px] rounded-full my-[24px] border-none rotate-180'>
        <div ref={eyeRef1} className=""> 
          <Image 
            priority
            src={Geyes}
            objectFit='contain'
            width="13"
            height="25"
            style={{transitionProperty: "transform", transitionDuration: "1000ms", transitionTimingFunction: "ease-in-out", transitionDelay: "0s",}}
            className="flex-row rotate-180"
          />   
        </div> 
        <div ref={eyeRef2} className="">  
          <Image 
          priority
          src={Geyes}
          objectFit='contain'
          width="13"
          height="25"
          style={{transitionProperty: "transform", transitionDuration: "1000ms", transitionTimingFunction: "ease-in-out", transitionDelay: "0s",}}
          className="flex-row rotate-180 "
        />
      </div>
      </div>
    </motion.div>

    <form 
      onSubmit={(e)=> {
        handleAdd(e)
        inputRef.current?.blur();
      }}
      className=' sm:w-11/12 flex relative items-center w-11/12 z-10'>
        <input
            ref={inputRef}
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            type="input"
            placeholder='Enter a task' 
            className=' w-full rounded-full py-5 px-7 text-xl  border-none shadow-xl shadow-red-400 focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] focus:outline-none' />
        <button 
          type='submit' 
          className=' absolute w-12 h-12 m-3 rounded-full right-0 border-none bg-[#F4908A] text-white transition-all ease-out hover:bg-[#F4857E] active:scale-[0.89]'>Go</button>
    </form>
    </>
  )
}

export default InputField
