function Card({ image, author, country, description, onClick }) {
  return (
    <article
      className="cursor-pointer shadow shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
      onClick={onClick}
    >
      <img src={image} alt={author} className="w-full h-48 object-cover p-4"/>

      <section className="p-3">
        <h3 className="font-bold">{author}</h3>
        <p className="text-sm text-[#F77F00] uppercase tracking-wider">{country}</p>
        <p className="text-xs mt-2 line-clamp-2">{description}</p>
      </section>
    </article>
  );
}

export default Card;