import React from 'react'
import blogData from '../Data/BlogData';

const Blog = () => {
  return (
    <>
    <div class="container md:py-[80]  pt-10 mx-auto ">
        <h1 class="text-4xl text-center text-primary font-semibold">Our <span class="text-secondary hover-border-b">Blogs</span></h1>
    </div>

  


 <section className="container mx-auto py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-[80px]">
  {
    blogData.map((a)=>{
      return <>
        <div key={a.id}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={a.img} alt="Blog Post Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{a.title}</h2>
        <p className="text-gray-400 text-sm py-1">{a.date}</p>
        <p className="text-gray-800 text-sm">{a.desc}</p>
        <div className="flex items-center justify-between">
          <a href="blog-post1.html" className="text-secondary hover:underline text-sm">Read more <i className="fa-solid fa-arrow-right" /></a>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>6
          </span>
        </div>
      </div>
    </div>

        </div>
      </>
    })
  }
  
  </div></section> 
           
  
    </>
  )
}

export default Blog
