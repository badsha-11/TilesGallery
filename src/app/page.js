import Banner from "@/components/Banner";
import TopGenaretions from "@/components/TopGenaretions";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-slate-800 text-cyan-400 py-2 my-12">
        <marquee
          behavior="scroll"
          direction="left"
          className="text-lg font-bold "
        >
           New Arrival: Luxury Marble Tiles Collection is now available! Get
          10% discount on first purchase. 
        </marquee>
      </div>
      <TopGenaretions/>
    </div>
  );
}
