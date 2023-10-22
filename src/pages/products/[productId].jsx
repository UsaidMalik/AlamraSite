import React from "react";
import { useRouter } from "next/router";
import { getProductById } from "../api/products";
import { getAllProducts } from "../api/products";
import Header from "../components/_Header";
import Footer from "../components/_Footer";
import Contact from "../components/_ContactForm";


const ProductDetailsPage = ({ product }) => {
  const router = useRouter();
  const { productId } = router.query;

  if (!productId || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className=" min-h-screen py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-900 rounded-lg shadow-lg sm:flex text-center">
            <div className="sm:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>
            <div className="my-auto p-6 sm:w-1/2 space-y-4 text-white">
              <h1 className="text-2xl sm:text-6xl font-semibold">
                {product.name}
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <p className="">{product.description}</p>
          </div>
          <br></br> {/**dividiner by diivder */}
          <div>
          <h1 className="text-xl font-semibold mb-4 text-center">Interested? Contact Us For A Quote</h1>
          <Contact/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export async function getStaticPaths() {
  const products = getAllProducts();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}) {
  const product = getProductById(params.productId);
  return { props: { product } };
}

export default ProductDetailsPage;
