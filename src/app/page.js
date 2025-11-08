'use client'
import { useEffect, useState } from "react";
import Reloj from "./reloj";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import MyDatePicker from "@/components/MyDatePicker";
import List from "@/components/List";
import Rating from "@/components/Rating";
import Stats from "@/components/Stats";
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
        <input type="radio" name="my_tabs" className="tab" aria-label="Calendario" defaultChecked/>
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

        <input type="radio" name="my_tabs" className="tab" aria-label="Valoración de nuestros clientes" />
            <Rating />

        <input type="radio" name="my_tabs" className="tab" aria-label="Estadísticas de la página" />
          <div className="tab-content bg-base-100 border-base-300 p-6 justify-items-center">
            <Stats />
          </div>
      </div>

    </section>
  );
}
