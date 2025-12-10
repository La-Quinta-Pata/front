import React from 'react'
import Hero from '../components/sections/Hero';
import Information from '../components/sections/Information';
import Title from '../components/sections/Title';

function Home() {
  return (
    <main className="m-0 p-0 w-full">
      <Title />
      <Hero />
      <section className="w-screen m-0 p-0">
        <Information />
      </section>
    </main>
  );
}

export default Home