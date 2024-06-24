
import Navbar from "./components/Navbar";
import Image from "next/image";
import background from "../public/background.jpeg"


export default function Home() {
  return (
    <div className="absolute inset-x-0 top-0 h-1/2">
      <Image src={background} alt="background image" layout="fill" objectFit="cover" /> 
    </div>
);
};
