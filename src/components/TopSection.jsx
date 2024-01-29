import React from 'react'

const TopSection = () => {
  return (
    <>
     <section class="bg-primary text-white overflow-hidden top ">
  <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row ">
 
    <span class="inline-flex sm:mt-0 mt-2  justify-center sm:justify-start text-texcol gap-3">
      <p class="flex items-center text-sm ">
        <i class="fa-solid fa-phone mr-2"></i>9704501220
      </p>
      <p class="flex items-center text-sm ">
        <i class="fa-solid fa-envelope text-sm mr-2"></i>technavata@gmail.com
      </p>
    </span>
  
  
   <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-texcol gap-3 ">
      <p class="px-1 rounded-full"><i class="fa-brands fa-facebook"></i></p>
      <p class="px-1 rounded-full"><i class="fa-brands fa-instagram"></i></p>
      <p class="px-1 rounded-full"><i class="fa-brands fa-linkedin"></i></p>
      <p class="px-1 rounded-full"><i class="fa-brands fa-youtube"></i></p>
    </span>
  
  </div>
 
</section>
 <style jsx>{`
        @media screen and (max-width: 640px) {
          .top {
            display: none;
          }
        }
      `}</style>

    </>
  )
}

export default TopSection
