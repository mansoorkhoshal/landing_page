import About from "./component/About";
import Agents from "./component/Agents";
import ContactUs from "./component/ContactUs";
import FAQs from "./component/FAQs";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Agents />
      <ContactUs />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
