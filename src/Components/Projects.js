import React from 'react'

function Projects() {
  return (
    <div className='h-fit bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-700 
    ' >
  <h1 id='Project' className='flex justify-center text-3xl pt-8'>My Projects </h1>
 <div className='grid gap-5 grid-cols-2 grid-rows-2 pl-4 pb-5  justify-items-center max-sm:pr-4 max-sm:mt-8'>
  <a href='https://e-commerce-product-two.vercel.app/' target="_blank"> e commerce  <a href='https://github.com/bugrasarilan/e-commerce-product' target="_blank"><p>show me source code  </p> </a>
   <img className='w-[350px] h-[350px]  max-sm:w-[180px] max-sm:h-[180px] rounded-lg max-sm:mb-5 ' src={require(`../Files/Project-1.jpg`)} alt="myphoto" ></img>
  </a> 

  <a href='https://weather-forecast-u9xl.vercel.app/' target="_blank"> weather-forecast <a href='https://github.com/bugrasarilan/Weather-Forecast' target="_blank"><p>show me source code  </p> </a>
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg max-sm:mb-5 ' src={require(`../Files/Project-2.jpg`)} alt="myphoto" ></img>
</a>


  <a href='https://todo-list-smoky-seven.vercel.app/' target="_blank"> todo-list <a href='https://github.com/bugrasarilan/todo-list' target="_blank"><p>show me source code  </p> </a>
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg ' src={require(`../Files/Project-3.jpg`)} alt="myphoto" ></img>
</a>

  <a href='https://calculator-ashen-omega.vercel.app/' target="_blank"> calculator <a href='https://github.com/bugrasarilan/calculator' target="_blank"><p>show me source code  </p> </a>
  <img className='w-[350px] h-[350px] max-sm:w-[180px] max-sm:h-[180px] rounded-lg' src={require(`../Files/Project-4.jpg`)} alt="myphoto" ></img>
</a> 
      </div>
    </div>
  )
}

export default Projects