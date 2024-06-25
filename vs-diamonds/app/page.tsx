
import Image from "next/image";
import background from "../public/background.jpeg"
import Catalog from "./sections/Catalog";
import Contact from "./sections/Contact";
import SectionDivider from "./components/SectionDivider";



export default function Home() {
  return (
    
    <main className="flex flex-col items-center px-4 mx-auto">
      <section>
      <Image src={background} alt="background image" layout="fill" objectFit="cover" />
      </section>
      <SectionDivider/>
      <Catalog/>
      <Contact/> 
    </main>
    
);
};
