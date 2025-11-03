'use client'
import { useEffect, useState } from "react";
import Table from "@/components/Table";
import SortedTable from "@/components/SortedTable";
import { GiFlowerPot } from "react-icons/gi";



function Page1() {
    return (
        <section>
            <div className="p-10 bg-white justify-items-center">
                <div className="">
                    <div className="tooltip" data-tip="Evita arrancar una flor del suelo, corta su tallo para protegerla de infecciones...">
                        <p className="btn"><GiFlowerPot /> Recordatorio</p>
                    </div>
                </div>

                <SortedTable />
            </div>
        </section>
    );
}

export default Page1;


