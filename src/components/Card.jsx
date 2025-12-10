function Card({ image, author, country, axis, description, onClick }) {
  return (
    <article
      className="cursor-pointer shadow shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
      onClick={onClick}
    >
      <img src={image} alt={author} className="w-full h-48 object-cover p-4"/>

      <section className="p-3">
        <h3 className="font-bold text-[#4b1252] font-fira uppercase">{author}</h3>
        <p className="text-sm text-[#b05e00] font-fira tracking-wider">{country}</p>
        <p className="text-sm text-[#4b1252] uppercase font-fira">{axis}</p>
        <p className="text-xs text-[#4b1252] mt-2 line-clamp-2">{description}</p>
      </section>
    </article>
  );
}

export default Card;