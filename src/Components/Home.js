import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsInstagram}from 'react-icons/bs'
import{AiFillMediumCircle}from 'react-icons/ai'
import CVA from '../Files/CVbugra.pdf'
import Nav from './Nav';

function Home() {
  return (
    <div id='Home' className='bg-gradient-to-t from-blue-700 to-blue-600  flex pt-5 justify-center mx-auto h-screen font-sans'>
    <h1 className=" text-[25px] max-sm:text-[22px] text-white"> I'm Buğra SARILAN </h1>
    <img className='w-[350px] h-[350px] max-sm:h-[250px] max-sm:w-[250px] max-sm:top-20 rounded-[350px] absolute top-32' src={require(`../Files/Me.jpg`)} alt="myphoto" ></img>
    <div className="absolute top-[500px] flex gap-8 justify-center max-sm:top-[350px]  "> 
    <a className='rounded-lg p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 transform hover:translate-x-5 animate-bounce' href={CVA} >Download cv </a>  
        <a className='rounded-lg p-2 transition ease-in-out delay-150 bg-orange-50 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300 transform hover:-translate-x-5 '  href="#Contact"  >Contact </a>
    </div>


    <div className='absolute left-10 bottom-10 flex gap-5 '> 
    <a href='https://www.linkedin.com/in/bu%C4%9Fra-sar%C4%B1lan-390343183/' target='_blank'> <BsLinkedin/></a>
        <a href='https://github.com/bugrasarilan' target='_blank'><BsGithub/> </a>
        <a href='https://medium.com/@bugrasarilan' target='_blank'><AiFillMediumCircle/> </a>
        <a href='https://www.instagram.com/bugrasarlan/'target="_blank"><BsInstagram/> </a>
        <Nav/>

    </div>
    </div>
  )
}

export default Home