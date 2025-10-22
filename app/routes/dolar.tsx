import BackgroundArrows from "../components/BackgroundArrows";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import getDolar from "~/scripts/fetchdolar";
import type {Moneda} from "../scripts/interface";

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
    <main className="flex items-center justify-center pt-[80px] pb-4">
      <BackgroundArrows/>
      <Navbar/>
      <div className="flex flex-col items-center gap-16 min-h-0 z-3 p-4 rounded-4xl border-2 bg-linear-60 bg-fixed from-black to-[#00032cbe] dark:from-[#ffffff] dark:to-[#f1fcffcc]  text-white dark:text-black drop-shadow-2xl shadow-xl shadow-black dark:shadow-cyan-50 dark:shadow-lg">
        <header className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-start w-[500px] max-w-[100vw] p-4">
            <p></p>
            {dolares?.map((dolar,index)=>(
              <p key={index} className="font-bold text-md">{`Dolar  ${dolar.nombre} COMPRA: $${dolar.compra} VENTA: $${dolar.venta}`}</p>
            ))}
          </div>
        </header>
      </div>
    </main>
  );
}