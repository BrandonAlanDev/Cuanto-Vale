import BackgroundArrows from "../components/BackgroundArrows";
import SteamCostCalculator from "../components/SteamCostCalculator";
import Navbar from "../components/Navbar";

export default function Dolar() {
  return (
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <BackgroundArrows/>
      <Navbar/>
      <div className="flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl">Dolar</h1>
            <SteamCostCalculator/>
          </div>
        </header>
      </div>
    </main>
  );
}