// pages/index.js
"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import ProductCard from "./_ProductCards.jsx";

const LandingPage = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Paris",
      description:
        "Embroidered bullion crest with the finest materials",
      image: "/1.jpg",
    },
    {
      id: "2",
      name: "Carleton",
      description:
        "A badge created for Carelton university with the utmost precision",
      image: "/2.jpg",
    },
    {
      id: "3",
      name: "Corrections",
      description:
        "Machined Badge for the Ontario Corrections Office",
      image: "/3.jpg",
    },
  ];

  return (
    <div className="bg-neutral-800 text-white min-h-screen">
      <header className=" text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Unveil embroidered treasures
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Discover Amazing Products and Services
          </p>
          <a
            href="/products"
            className="bg-white text-black hover:bg-neutral-500 hover:text-white py-2 px-6 rounded-full text-lg sm:text-xl font-semibold transition duration-300 ease-in-out"
          >
            Discover
          </a>
        </div>

        
      </header>
      <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-neutral-500"></hr>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  description={product.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
