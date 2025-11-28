function Card({ image, author, country, description }) {
  return (
    <div className="
      bg-white 
      rounded-sm
      border border-gray-200 
      overflow-hidden 
      shadow-sm 
      hover:shadow-md
      hover:-translate-y-1 
      transition-all 
      duration-300 
      flex flex-col
      max-w-[220px]   
      mx-auto

    ">
      
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={author} 
          className="
            w-full 
            h-48 
            object-cover 
            transition-transform 
            duration-300 
            hover:scale-105
          "
        />
      </div>

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-gray-800">
          {author}
        </h3>

        <p className="text-sm font-medium text-lime-600 uppercase tracking-wider">
          {country}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;