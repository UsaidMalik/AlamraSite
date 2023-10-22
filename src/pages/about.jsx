// pages/about.tsx
import React from "react";
import Header from "./components/_Header";
import Contact from "./components/_ContactForm";


const About = ({ title }) => {
  return (
    <>
      <Header />
      <div className="bg-zinc-950 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center mb-6">{title}</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 text-lg">
             
At Alamra Importers, we weave dreams into reality. 
With unparalleled expertise in the art of bullion embroidery and 
a passion for creating exquisite embroidered products, we invite you 
to immerse yourself in our world of timeless elegance. Join us on a
 journey where tradition meets innovation, craftsmanship meets creativity,
  and ordinary transforms into extraordinary. Experience the allure of our
   meticulously crafted bullion crests and embroidered treasures, and discover 
   the exceptional quality and personalized service that sets us apart.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
            Welcome 
   to Alamra Importers, where your aspirations come to life through the artistry 
   of embroidery.
            </p>
          </div>

        </div>
        <div className="bg-zinc-950"><br/></div>
      <div className="bg-zinc-950">
      <Contact/>
      </div>
      <div className="bg-zinc-950"><br/></div>
      </div>


    </>
  );
};

export default About;
