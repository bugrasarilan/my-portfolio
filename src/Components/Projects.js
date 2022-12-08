import React from 'react'

function Projects() {
  return (
    <div className='h-fit bg-gradient-to-b from-blue-500 via-blue-700 to-cyan-700' >
  <h1 id='Project' className='flex justify-center text-3xl pt-8'>My Projects </h1>
 <div className='grid gap-5 grid-cols-2 grid-rows-2 pl-4 pb-5  justify-items-center max-sm:pr-4 max-sm:mt-8 ' >

  <a className='transition duration-500 hover:scale-110 ' href='https://e-commerce-product-two.vercel.app/' target="_blank">
  <p className='flex justify-center text-xl'>  E-commerce</p> 
   <img className='w-[350px] h-[350px]  max-sm:w-[180px] max-sm:h-[180px] rounded-lg max-sm:mb-5  ' src={require(`../Files/Project-1.jpg`)} alt="myphoto" ></img>
   <a className=' flex justify-center pt-2 ' href='https://github.com/bugrasarilan/e-commerce-product' target="_blank">
   <button className='rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 transform ' >Show me source code</button> 
      </a>
  </a> 

  <a className='transition duration-500 hover:scale-110 ' href='https://weather-forecast-u9xl.vercel.app/' target="_blank">
   <p className='flex justify-center text-xl'>  weather-forecast</p> 
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg max-sm:mb-5  ' src={require(`../Files/Project-2.jpg`)} alt="myphoto" ></img>
  <a className=' flex justify-center pt-2 ' href='https://github.com/bugrasarilan/Weather-Forecast' target="_blank">
      <button className='rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 transform ' >Show me source code</button> 
      </a>
</a>

  <a className='transition duration-500 hover:scale-110 ' href='https://todo-list-smoky-seven.vercel.app/' target="_blank"> 
  <p className='flex justify-center text-xl'>todo-list</p>   
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg' src={require(`../Files/Project-3.jpg`)} alt="myphoto" ></img>
 <a className=' flex justify-center pt-2 ' href='https://github.com/bugrasarilan/todo-list' target="_blank">
 <button className='rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 transform ' >Show me source code</button> 
  </a>
    </a>

  <a className='transition duration-500 hover:scale-110 ' href='https://calculator-ashen-omega.vercel.app/' target="_blank"> 
  <p className='flex justify-center text-xl'> calculator</p>  
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg ' src={require(`../Files/Project-4.jpg`)} alt="myphoto" ></img>
 <a className=' flex justify-center pt-2 ' href='https://github.com/bugrasarilan/calculator' target="_blank">
 <button className='rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 transform  ' >Show me source code</button> 
     </a>
      </a> 
      </div>
    </div>
  )
}

export default Projects