import About from "./component/About";
import Agents from "./component/Agents";
import ContactUs from "./component/ContactUs";
import FAQs from "./component/FAQs";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Testominals from "./component/Testominals";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Agents />
      <ContactUs />
      <Testominals />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
