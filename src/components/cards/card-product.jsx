import React from "react";

export default function CardProduct({
  thumbnail,
  price,
  title,
  description,
  stock,
  discountPercentage
}) {
  //   console.log("props", props);
  return (
    <a href="#" className="group relative block overflow-hidden">
      {discountPercentage && (
        <span className="absolute end-4 top-4 z-10 rounded-full bg-red-500 text-[20px] px-4 py-2 text-white ">
          {discountPercentage} %
        </span>
      )}

      <img
        src={
          thumbnail ||
          "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
        }
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
          In stock {stock || "0"}
        </span>

        <h3 className="line-clamp-1 mt-4 text-[24px] font-medium text-gray-900">
          {title || "Default"}
        </h3>
        <p className="line-clamp-2">{description || "Null"}</p>

        <p className="mt-1.5 text-[28px] font-bold text-gray-700">
          {price || 0} $
        </p>

        <form className="mt-4">
          <button className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  );
}
