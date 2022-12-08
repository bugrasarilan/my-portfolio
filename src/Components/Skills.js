import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'

function Skills() {
  return (
    <div className=''>
<p className='p-2'>
 <h1 className='flex text-2xl justify-center mt-12 '> Hi <span className='animate-bounce'>👋</span>, I'm Buğra <br/> </h1>
<h2 className='text-2xl flex justify-center'> I graduated from Eskişehir Osmangazi university at statistic. I am developing and working on frontend. <br/> I decide to change my industry because I love coding and new technology. I am improving myself in this area. </h2> </p>
     
        <div className='flex flex-col gap-7 justify-items-center justify-center  mx-auto  border-2 rounded-[30px] w-44 p-3 mt-10'  >
      
         <h3 className='flex text-white justify-start gap-2'>  <BsFillCheckCircleFill />JAVASCRİPT <SiJavascript/> </h3> 
         <h3 className='flex text-white justify-start gap-2' >  <BsFillCheckCircleFill /> REACT <FaReact/></h3> 
         <h3 className='flex text-white justify-start gap-2' >  <BsFillCheckCircleFill /> HTML <AiFillHtml5/> </h3>  
         <h3 className='flex text-white justify-start gap-2'>  <BsFillCheckCircleFill /> CSS <IoLogoCss3/></h3>   
         <h3 className='flex text-white justify-start gap-2'> <BsFillCheckCircleFill /> BOOTSTRAP <FaBootstrap/> </h3> 
         <h3 className='flex text-white justify-start gap-2'> <BsFillCheckCircleFill /> TAİLWİND <SiTailwindcss/> </h3> 
        </div>


    </div>
  )
}

export default Skills