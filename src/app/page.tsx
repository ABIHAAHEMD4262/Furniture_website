import HeroSection from "@/components/Hero";
import ProductBoxes from "@/components/ProductBoxes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection/>
     <ProductBoxes/>
    </div>
    );
}
