
import Description from "./Description.jsx"
import Team from "./Team.jsx"

export default function Information() {

    return (
        <>
            <section className="relative w-full overflow-hidden leading-none">
                <svg
                    className="block w-full h-[80px] filter"
                    viewBox="0 0 1440 200"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f7e7f9"
                        d="M0,60
                        C360,0 1080,200 1440,60
                        L1440,200
                        L0,200
                        Z"/>
                </svg>
            </section>
            <section className=" w-full text-center py-22 px-4 flex flex-col items-center justify-center
            bg-[#f7e7f9]  shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
            role="region"
            aria-labelledby="hero-heading"
            > <Description />
            </section>
            <section>
                <Team />
            </section></>


    );
}
