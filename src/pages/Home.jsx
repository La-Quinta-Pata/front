import React from 'react'
import Hero from '../components/sections/Hero';
import Information from '../components/sections/Information';
import Team from '../components/sections/Team';

function Home() {
  return (
    <main className="m-0 p-0 w-full">
      <Hero />
      <section className="w-screen m-0 p-0">
        <Information />
      </section>
      <section className="w-screen m-0 p-0">
        <Team />
      </section>
    </main>
  );
}

export default Home