import Faq from "@/components/faq";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import SimpleSlider from "@/components/ui/slider";
import Form from "@/form";
import '../globals.css';
// import Whychooes from "@/Whychooes";
import Project from "@/project";
// import TestimonialSelector from "@/components/ui/testimonals";
import Technology from "../technology";
import IndustriesSections from "../IndustriesSection";




export default function Home() {
  return (
    <>
      <Header />
      <SimpleSlider />
      <Services />
 
      {/* <Whychooes /> */}
      
      <Technology />
           <IndustriesSections />
      <Project />

      <Testimonials />
      <Form />

      <Faq />
      <Footer />
    </>
  );
}
