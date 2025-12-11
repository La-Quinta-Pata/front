import React from 'react'
import AboutUsCard from '../cards/AboutUsCard'

export default function AboutUsSection({title, items}) {
  return (
    <section className='mb-20'>
        <h2 className="text-3xl font-bold text-center text-purple-950 mb-10">{title}</h2>
         <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-10 justify-items-center
      ">
        {items.map((member) => (
          <AboutUsCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </section>
  )
}
