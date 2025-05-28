import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import SimpleSlider from "./components/ui/slider";
import Services from "./components/services";
import Faq from "./components/faq";
import Form from "./form";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
       <SimpleSlider /> 
       <Services />
            <Testimonials />
       <Form />
  
       <Faq />
       <Footer />
    </>
  );
}
