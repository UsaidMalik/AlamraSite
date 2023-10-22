import React from "react";

const ProductCard= ({
  image,
  name,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div className="p-4 sm:p-6 md:p-8 text-gray-700 overflow-hidden">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{name}</h3>
        <div>
          <div className=" line-clamp-2 sm:line-clamp-2">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
