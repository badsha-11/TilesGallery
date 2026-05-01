import Banner from "@/components/Banner";
import TopGenaretions from "@/components/TopGenaretions";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="px-4 md:px-8">
        {" "}
        
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={true}
          className="bg-slate-800 py-4 text-cyan-400 font-bold uppercase tracking-wider rounded-2xl border border-slate-700 shadow-lg my-9"
        >
          <span className="mx-4">
            New Arrival: Luxury Marble Tiles Collection is now available! Get
            10% discount on first purchase.
          </span>
        </Marquee>
      </div>

      <TopGenaretions />
    </div>
  );
}
