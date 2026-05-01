import Banner from "@/components/Banner";
import TopGenaretions from "@/components/TopGenaretions";

export default function Home() {
  return (
    <div>
      <Banner />

      
      <div className="bg-slate-800 text-cyan-400 py-2 my-12 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold">
          New Arrival: Luxury Marble Tiles Collection is now available! Get
          10% discount on first purchase.
        </div>
      </div>

      <TopGenaretions />
    </div>
  );
}