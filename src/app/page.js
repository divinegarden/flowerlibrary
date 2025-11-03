'use client'
import { useEffect, useState } from "react";
import Reloj from "./reloj";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import MyDatePicker from "@/components/MyDatePicker";
import List from "@/components/List";
import CountDown from "@/components/CountDown";
import Table from "@/components/Table";
import SortedTable from "@/components/SortedTable";
import RadialProgress from "@/components/RadialProgress";


export default function Home() {
  const [hora, setHora] = useState(new Date());
  const fecha = new Date();

    useEffect(() => {
        const i1 = setInterval(() => {
            setHora(new Date());
        }, 1000);


        return () => clearInterval(i1);
    }, []);
  return (
    
    <section>   
      <AutoCarousel />
      
        <div className="bg-rose-100 text-white">
            <p className="text-center text-9xl font-mono">{hora.toLocaleTimeString()}</p>
        </div>
        
      <br />


      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input type="radio" name="my_tabs" className="tab" aria-label="Calendario" />
        <div className="tab-content bg-base-100 border-base-300 p-6 justify-items-center">
          <p>{fecha.toISOString()}</p>
                      <MyDatePicker />
                      <input type="date"
                          defaultValue="2025-02-14"
                          min="2025-01-01"
                          max="2025-12-31" />
                      <input type="datetime-local" />
        </div>

        <input type="radio" name="my_tabs" className="tab" aria-label="Flores más vendidas hoy" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <List />
        </div>

        <input type="radio" name="my_tabs" className="tab" aria-label="Valoración de nuestros clientes" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6 justify-items-center">
          <div className="rating gap-1">
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="1 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="2 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="3 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="4 star" aria-current="true"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="5 star"></div>
          </div>

        </div>
      </div>

    </section>
  );
}
