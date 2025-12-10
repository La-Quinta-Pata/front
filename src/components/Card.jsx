import { Pen, Trash } from "lucide-react";

function Card({ image, author, country, axis, description, onClick, actions }) {
  return (
    <article
      className="relative cursor-pointer shadow shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
      onClick={onClick}
    >
      <section className="relative w-full h-48 overflow-hidden">
      <img src={image} alt={author} className="w-full h-48 object-cover p-4" />

        {actions && (
          <section className="absolute top-2 right-2 flex gap-2">
            {actions}
          </section>
        )}
        </section>

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