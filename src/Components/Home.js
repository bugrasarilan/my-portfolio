import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsInstagram}from 'react-icons/bs'
import CVA from '../Files/CVbugra.pdf'
import Nav from './Nav';

function Home() {
  return (
    <div id='Home' className='bg-blue-900 flex pt-5 justify-center mx-auto h-screen font-sans'>

    <h1 className=" text-[25px] max-sm:text-[22px] "> I'm Buğra SARILAN</h1>
    <img className='w-[350px] h-[350px] max-sm:h-[250px] max-sm:w-[250px] max-sm:top-20 rounded-[350px] absolute top-32' src={require(`../Files/Me.jpg`)} alt="myphoto" ></img>
    <div className="absolute top-[500px] flex gap-5 justify-center max-sm:top-[350px]  "> 
    <a className='rounded-lg p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300' href={CVA} >Download cv </a>  
        <a className='rounded-lg p-2 bg-orange-50 hover:bg-orange-100' href="#Contact"  >Contact </a>
    </div>


    <div className='absolute left-10 bottom-10 flex gap-5  '> 
    <a href='https://www.linkedin.com/in/nurtekin-bu%C4%9Fra-sar%C4%B1lan-390343183/' target='_blank'> <BsLinkedin/></a>
        <a href='https://github.com/bugrasarilan' target='_blank'><BsGithub/> </a>
        <a href='https://www.instagram.com/bugrasarlan/'target="_blank"><BsInstagram/> </a>
        <Nav/>

    </div>
    </div>
  )
}

export default Home