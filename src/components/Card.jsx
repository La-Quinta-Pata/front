function Card({ image, author, country, description }) {
  return (
    <div className="
      bg-white 
      rounded-sm
      border border-gray-200 
      overflow-hidden
      shadow-[#003049] shadow-md
      hover:shadow-lg
      hover:-translate-y-1 
      transition-all 
      duration-300 
      flex flex-col
      max-w-[330px]   
      mx-auto

    ">
      
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={author} 
          className="
            w-full max-w-[300px]
            h-48
            p-3
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

        <p className="text-sm font-medium text-[#F77F00] uppercase tracking-wider">
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