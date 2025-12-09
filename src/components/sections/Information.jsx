
import Team from "./Team.jsx"

export default function Information() {

    return (

        <section
            className=" w-full 
            text-center 
            py-22 px-4 
            flex flex-col items-center justify-center
            bg-linear-to-b 
            from-[rgba(253,240,213,0.5)] 
            to-[#F77F00]
          "
            role="region"
            aria-labelledby="hero-heading"
        >

           <Team />
        </section>


    );
}
