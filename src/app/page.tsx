import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import SimpleSlider from "./components/ui/slider";
import Services from "./components/services";
import Faq from "./components/faq";
import Form from "./form";

export default function Home() {
  return (
    <>
      <Header />
       <SimpleSlider /> 
       <Services />
       <Form />
       <Faq />
       <Footer />
    </>
  );
}
