import AdBanner from "~/components/AdBanner";

export function Welcome() {
  return (
    <>
    <title>Cuánto sale? Cotizaciones</title>
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <div className="casillero flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl">Cuánto sale?</h1>
          </div>
          <AdBanner slot="9471912944"/>
        </header>
      </div>
    </main>
    </>
  );
}