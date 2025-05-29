import Faq from "@/components/faq";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import SimpleSlider from "@/components/ui/slider";
import Form from "@/form";
import '../globals.css'; 

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
