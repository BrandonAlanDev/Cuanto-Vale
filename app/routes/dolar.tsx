import { useEffect, useState } from "react";
import getDolar from '../scripts/fetchDolar';
import type {Moneda} from "../scripts/interface";
import AdBanner from "~/components/AdBanner";
import { div } from "framer-motion/client";

export default function Dolar() {
  const [dolares,setDolares] = useState<Array<Moneda> | null>(null);
  
  const fetchData = async () =>{
    const data = await getDolar();
    setDolares(data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
    <title>Cuánto sale el dolar?</title>
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <div className="w-full lg:max-w-[50vw] casillero flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="w-full flex flex-col items-center gap-9">
          <div className="w-full lg:max-w-[50vw] overflow-x-auto p-4 select-none">
            <table className="w-full border-collapse text-center select-none rounded-2xl overflow-hidden">
              <thead className="bg-blue-950 text-white dark:bg-white dark:text-blue-950 text-2xl">
                <tr className="select-text">
                  <th className="p-2 text-left">Dólar</th>
                  <th className="p-2 text-right">Compra</th>
                  <th className="p-2 text-right">Venta</th>
                </tr>
              </thead>
              <tbody>
                {dolares?.map((dolar, index) => (
                  <tr key={index} className="text-xl border-b hover:bg-gray-50 hover:text-black dark:hover:text-white dark:hover:bg-blue-950 transition-colors  select-text">
                    <td className="p-2 font-semibold text-left">
                      {dolar.nombre === "Contado con liquidación" ? "CCL" : dolar.nombre}
                    </td>
                    <td className="p-2 text-right font-medium">{`$${dolar.compra}`}</td>
                    <td className="p-2 text-right font-medium">{`$${dolar.venta}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AdBanner slot="9471912944"/>
        </header>
      </div>
    </main>
    </>
  );
}