"use client"
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const statusColor = {
    'Effectuer': 'bg-green-100 text-green-800',
    'En attente': 'bg-yellow-100 text-yellow-800',
    'Échec': 'bg-red-100 text-red-800',
};


export default function Transactions() {

    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("Default");
    const [selectedDates, setSelectedDates] = useState([null, null]);
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };
    return (
        <>
            <DashboardLayout
             navbar="Gestion des transactions"
              commit="Commissions factures aux utilisateurs et partenaires "
              >
                <div className="px-4">
                    <div className="flex flex-col">
                        <header className="flex justify-between items-center bg-transparent mb-10">
                            <div className="flex space-x-10">
                                <h2 className="text-xl">Transactions</h2>
                                <div className="shadow-xl pl-1 border rounded-2xl w-40 text-sm outline-none"  ></div>
                            </div>
                            <div className="flex">
                                <img src="/assets/images/cloud-download.svg" alt="" />
                                <button className="btn">Télécharger le rapport</button>
                            </div>
                        </header>
                        <nav className="flex justify-between items-center bg-transparent">
                            <div className="flex space-x-10 bg-clip-border rounded-xl">
                                <div className="flex rounded-xl outline-none">
                                    <DatePicker
                                        selectsRange
                                        onChange={(dates: any) => setSelectedDates(dates)}
                                        placeholderText="Choisir une plage de dates"
                                        dateFormat="dd/MM/yyyy"
                                        isClearable={true} className="outline-none"
                                    />

                                    <img src="/assets/images/filter.svg" alt="" width={20} height={20} />
                                    <select value={sortOption} onChange={handleSortChange} className="outline-none">
                                        <option value="default">Trier par</option>
                                        <option value="asc">Ascendant</option>
                                        <option value="desc">Descendant</option>
                                    </select>
                                </div>

                            </div>
                            <div className="flex from-white to-white shadow-blue-gray-500/40 shadow-lg p-1 bg-clip-border border rounded-xl">
                                <img src="/assets/images/magnifier.svg" alt="" className="cursor-pointer" />
                                <input type="text" name="" className="bg-transparent pl-2 outline-none" placeholder="Recherche" value={search}
                                    onChange={handleSearch} />
                            </div>


                        </nav>
                        <div className="p-4">
                            <table className="bg-white min-w-full">

                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit">

                    <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-lg mx-4 -mt-4 bg-clip-border rounded-xl h-40 text-white overflow-hidden">
                    </div>
                </div>
            
       

            </DashboardLayout >
        </>
    );
}






