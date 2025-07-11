import { NavBar } from "@/components/navbar";
import Introduction from "@/components/introducction";
import AboutMe from "@/components/about";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portafolio from "@/components/portafolio";
import Contact from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="pb-40 ">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services/>
      <Portafolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}
