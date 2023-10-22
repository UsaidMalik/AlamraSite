import Header from "./components/_Header";
import LandingPage from "./components/_Landing";
import Footer from "./components/_Footer";
import Contact from "./components/_ContactForm"

export default function Home() {
  const divStyle = {
    backgroundColor : "grey"
  }
  return (
    <>
      <Header />
      <LandingPage />
      <div style={divStyle}><br/></div>
      <div style={divStyle}>
      <Contact/>
      </div>
      <div style={divStyle}><br/></div>

      <Footer/>
    </>
  );
}
