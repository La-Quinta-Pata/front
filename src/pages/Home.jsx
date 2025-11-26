import React from 'react'
import GlobeExperience from '../components/map/GlobeExperience';
import Hero from '../components/sections/Hero';
import Information from '../components/sections/Information';

function Home() {
  return (
    <main>
      <section style={{ width: "100vw" }}>
        <Hero />
      </section>
      <section className="w-screen h-screen flex justify-center items-center">
        <GlobeExperience />
      </section>
      <section style={{ width: "100vw" }}>
        <Information />
      </section>
    </main>
  );
}

export default Home