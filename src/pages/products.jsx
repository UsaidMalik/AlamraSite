import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "./components/_Header";
import { getAllProducts } from "./api/products";


const AllProductsPage = () => {
  const router = useRouter();
  const { collection } = router.query;

  // Filter products based on the collection
 const products = collection ? getAllProducts().filter(
    (product) => product.collection === collection
  ) : getAllProducts();

  return (
    <>  
      <Header />
      <div className="bg-zinc-900 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-semibold text-center underline decoration mb-6 py-10">
            All Our Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-neutral-900 rounded-lg shadow-lg p-4 cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg h-auto mb-4"
                  />
                  <h2 className="text-white text-xl font-semibold">
                    {product.name}
                  </h2>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
