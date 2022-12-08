import React from 'react'
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FiSmartphone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {BiCurrentLocation} from 'react-icons/bi'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsInstagram}from 'react-icons/bs'
import{AiFillMediumCircle}from 'react-icons/ai' 

function Contact() {
const KEY = process.env.REACT_APP_KEY;
//   const showToastMessage = (e) => {
//     e.preventDefault();
//     toast.success('message sending successful thank you', {
//         position: toast.POSITION.BOTTOM_CENTER
//     });
// };

 
  function sendEmail(e) {
   
    e.preventDefault();
    toast.success('message sending successful thank you', {
             position: toast.POSITION.BOTTOM_CENTER
             });
   
emailjs.sendForm('gmail', 'template_mbjt9wa', e.target, KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset()
}

  return (
    <div className='bg-blue-400 h-screen max-w-5xl mx-auto 'id='Contact' >
      <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-7xl font-bold py-24 flex justify-center text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#213654] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                CONTACT ME.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
              
              </p>
            </header>
            <div className="icons-container inline-flex flex-col  my-10">
              <div className="flex flex-row items-center space-x-6 p-4">
               
                <p className="text-gray-50  text-lg flex items-center gap-3">
                 <FiSmartphone/> +90 554 616 54 40 
                </p>
              </div>

              <div className="flex flex-row items-center space-x-6  p-4">
             
                <p className="text-gray-50  text-lg flex items-center gap-3">
                 <FiMail/>  bugrasarilan@gmail.com
                </p>
              </div>

              <div className="flex flex-row items-center space-x-6 p-4">
             
                <p className="text-gray-50  text-lg flex items-center gap-3">
                  <BiCurrentLocation/> Tekirdag / turkey
                </p>
              </div>
            </div>
            
            <div className="social-icons text-white flex flex-row gap-5 ml-5">
            <a href='https://www.linkedin.com/in/bu%C4%9Fra-sar%C4%B1lan-390343183/' target='_blank'> <BsLinkedin/></a>
        <a href='https://github.com/bugrasarilan' target='_blank'><BsGithub/> </a>
        <a href='https://medium.com/@bugrasarilan' target='_blank'><AiFillMediumCircle/> </a>
        <a href='https://www.instagram.com/bugrasarlan/'target="_blank"><BsInstagram/> </a>
            </div>

          </div>
          <form    onSubmit={sendEmail}     className="form rounded-lg bg-white p-4 flex flex-col">

            <label className="text-sm text-gray-600 mx-4">
              Your Name
            </label>
         
            <input
            placeholder='Your name'
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none"
              name="name"
            />
            <label className="text-sm text-gray-600 mt-1 mx-4">
              mail title
            </label>
         
            <input
            placeholder='Mail title'
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="subject"
            />
            
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
            placeholder='Your Email'
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
            ></textarea>
            <button
           onSubmit={sendEmail}
       
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send Message
            </button>
           <ToastContainer />
          </form> 
        </div>
      </div>
    </section>
       
    </div>
  )
}

export default Contact