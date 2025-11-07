import { useEffect, useState } from "react";
import getEuro from "../scripts/fetchEuro";
import type {Moneda} from "../scripts/interface";
import AdBanner from "~/components/AdBanner";

export default function extranjeras() {
  const [euro,setEuro] = useState<Moneda | null>(null);
  
  const fetchData = async () =>{
    const data = await getEuro();
    setEuro(data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
    <title>Cuánto salen las monedas extranjeras?</title>
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <div className="select-none casillero flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="flex flex-col items-center gap-9">
          <h2 className="text-xl font-bold mb-4">Precio de otras monedas en Pesos Argentinos (ARS)</h2>
          <table className="w-full border-collapse text-center select-none rounded-2xl overflow-hidden">
              <thead className="bg-blue-950 text-white dark:bg-white dark:text-blue-950 text-2xl">
                <tr className="select-text">
                  <th className="p-2 text-left">Moneda</th>
                  <th className="p-2 text-right">Compra</th>
                  <th className="p-2 text-right">Venta</th>
                </tr>
              </thead>
              <tbody>
                  {euro && <tr className="text-xl border-b hover:bg-gray-50 hover:text-black dark:hover:text-white dark:hover:bg-blue-950 transition-colors  select-text">
                    <td className="p-2 text-left font-medium">Euro</td>
                    <td className="p-2 text-right font-medium">{`$${euro.compra}`}</td>
                    <td className="p-2 text-right font-medium">{`$${euro.venta}`}</td>
                  </tr>}
              </tbody>
            </table>
          <div className="flex flex-col items-start w-[500px] max-w-[100vw] p-4">
          </div>
        </header>
      </div>
    </main>
    <div className="flex justify-center items-center w-full m-auto bg-white">
      <AdBanner slot="9471912944"/>
    </div>
    </>
  );
}