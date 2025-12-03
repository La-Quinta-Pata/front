export default function Team() {
    return (
        <section
            className="w-full px-4 flex flex-col items-center justify-center"
            role="region"
            aria-labelledby="hero-heading"
        >
            <section className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-5 mb-5 flex flex-col items-center gap-5">

                <section className="flex justify-center gap-6">
                    <section className="w-50 h-50 rounded-[20px] bg-gray-700"></section>
                    <section className="w-50 h-50 rounded-[20px] bg-emerald-500"></section>
                    <section className="w-50 h-50 rounded-[20px] bg-cyan-500"></section>
                </section>
            </section>
        </section>
    );
}
