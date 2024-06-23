
import Navbar from "./components/Navbar";
import Image from "next/image";
import background from "../public/background.jpeg"


export default function Home() {
  return (
    <div>
      <Navbar/>

   <div className="z-0 fixed h-screen w-screen">
      <Image src={background} alt="background image" layout="fill" objectFit="cover" />

    </div>
    </div>
);
};
