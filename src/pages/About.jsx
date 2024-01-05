import React from 'react'

const About = () => {
  return (
    <>
 <section className=" py-18 md:py-12">
  <div className="container mx-auto px-4">  
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
      <div className>
        <img src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=826&t=st=1704434291~exp=1704434891~hmac=cf1c3f4a1ef9ee4f2310bc685236504df6306cbfc60eb46d7c17c8ee9deb68cb" alt="School Building" className="rounded-lg shadow-lg w-full h-auto" />
      </div>
      <div >
        <h2 className="text-4xl md:text-4xl lg:text-3xl  text-center font-semibold mb-3 text-primary"> Our Mission  &<span className="text-secondary hover-border-b">Vission</span> </h2>
        <p className="text-gray-900  md:text-base lg:text-md lg:ml-6 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor malesuada est, at varius quam dapibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur recusandae aut. Nesciunt, consequuntur ipsam quaerat perferendis autem est facilis atque minus culpa laudantium cupiditate sit, animi quibusdam reprehenderit veniam.
        </p>
        <p className="text-gray-900 text-sm md:text-base lg:text-md  lg:ml-6 mb-4">
          Our school is committed to providing high-quality education and fostering a supportive learning environment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim natus quod officiis. Similique sapiente distinctio et dolores optio blanditiis, porro pariatur modi eaque fugit ducimus illum voluptates ipsa labore facere, quibusdam, tempore ipsam ratione! Corporis, cum, amet placeat optio dicta omnis blanditiis aperiam ab quaerat totam tempore, consequuntur quidem?
        </p>
        <button class="mx-6 relative border-2 border-sec bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Learn More</button>      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About
