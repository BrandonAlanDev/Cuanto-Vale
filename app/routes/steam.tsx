import SteamCostCalculator from "../components/SteamCostCalculator";
import AdBanner from "~/components/AdBanner";

export default function Steam() {
  return (
    <div className="flex flex-col justify-center items-center">
    <title>Cuánto sale en STEAM?</title>
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <div className="casillero flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl">STEAM</h1>
            <SteamCostCalculator/>
          </div>
        </header>
      </div>
    </main>
    <div className="flex justify-center items-center w-full m-auto bg-white">
      <AdBanner slot="9471912944"/>
    </div>
    </div>
  );
}