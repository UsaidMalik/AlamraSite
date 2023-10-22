import Contact from "./components/_ContactForm";
import Header from "./components/_Header";
import Footer from "./components/_Footer";

export default function contact() {
  return (
    <>
      <Header/>
      <div className="bg-zinc-950">
      <br />
      <h1 className="text-4xl font-semibold text-center text-white">Contact Us</h1>
      </div>
      <div className="text-white min-h-screen bg-zinc-950 py-12">
      <div className="container mx-auto px-4 text-left bg-zinc-800 rounded-lg">
        <p >
        We're Here to Assist You.         </p>
    <br/>
  <p>We value your interest and look forward to assisting you with any inquiries or requests you may have.
   Our dedicated team at Alamra Importers is here to provide you with exceptional customer service and ensure that your experience with us is nothing short of extraordinary.</p>
   <br/>
   <p>If you have any questions about our products, customization options, or the ordering process, please don't hesitate to reach out. 
Our knowledgeable staff is ready to provide you with prompt and helpful answers to all your queries. </p>
<br/>
<p>Additionally, if you require any assistance regarding existing orders, shipping, or returns, we are here to provide you with a seamless and hassle-free resolution.</p>
<br/>
<p>Contact us today via the following channels:</p>
<br/>
<p>Phone: +1 917 3252712</p>
<p>Email: alamraimporters@gmail.com</p>
<br/>
<p>We strive to respond to all inquiries in a timely manner, and your satisfaction is our top priority.
 Don't hesitate to get in touch with us—we're here to ensure your journey with Alamra Importers is exceptional from start to finish.</p>
 <br/>
 <p>Thank you for choosing Alamra Importers. We appreciate your trust in our craftsmanship and look forward to serving you.</p>
 <br/>


      </div>
      <br></br>
      <Contact />
      </div>
      <Footer/>
    </>
  );
}
