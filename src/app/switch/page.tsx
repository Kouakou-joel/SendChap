'use client';
import { useState } from "react";
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import OptionsComponent from "../components/optionsComponent";

export default function Switch() {
    const [sortOption, setSortOption] = useState('default')
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    return (
        <>
            <DashboardLayout utilityInfo={"Switch des agregateurs"} commit={"Commissions factures aux utilisateurs et partenaires "}>

                <div className="flex pt-10">
                    <div className="w-1/4 font-MerriweatherSans">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-6 font-WorkSans">
                    <h2 className="font-semibold">Switch par réseau</h2>
                    <div className="flex bg-neutral-100 rounded-sm w-80 h-8">
                        <div className="items-center bg-transparent shadow-sm px-4 py-1 h-1/">Moov</div>
                        <div className="items-center bg-transparent shadow-sm px-4 py-1 h-1/4">Orange</div>
                        <div className="items-center bg-transparent shadow-sm px-4 py-1 h-1/4">MTN</div>
                        <div className="items-center bg-transparent shadow-sm px-4 py-1 h-1/4">Wave</div>
                    </div>
                </div>

                <div className="flex py-10">
                    <div className="w-1/3">
                        <div className="relative justify-center items-center mx-4 -mt-4 h-24 overflow-hidden">
                            <div className="space-y-2 mt-1">
                                <label htmlFor="" className="text-gray-600">Prélèvement</label>
                                <select value={sortOption} onChange={handleSortChange} className="px-4 border rounded-xl w-full h-10 outline-none">
                                    <option value="default">Intouch</option>
                                    <option value="HUB2">HUB2</option>
                                    <option value="Bizao">Bizao</option>

                                </select>
                            </div>
                            <p className="pt-1 text-gray-500 text-sm">3% sur la transaction</p>
                        </div>
                    </div>
                    <div className="w-1/3 font-WorkSans">
                        <div className="relative justify-center items-center mx-4 -mt-6 h-24 overflow-hidden">
                            <div className="space-y-2 mt-1">
                                <label htmlFor="" className="text-gray-600">Dépôt</label>
                                <select value={sortOption} onChange={handleSortChange} className="px-4 border rounded-xl w-full h-10 outline-none">
                                    <option value="default">HUB2</option>
                                    <option value=" Intouch">Intouch</option>
                                    <option value="Bizao">Bizao</option>

                                </select>
                            </div>
                            <p className="pt-1 text-gray-500 text-sm">3% sur la transaction</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="relative flex justify-center items-center mx-4 -mt-6 h-20 overflow-hidden">
                            <div className="flex items-center space-x-4 pt-8">
                                <h3 className="bg-neutral-50 shadow-sm p-2 rounded-md">Suspendre les activités</h3>
                               <h3 className="bg-neutral-100 shadow-sm p-2 rounded-sm">Actualiser le flux</h3>
                               </div>
                           
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="relative from-white to-white shadow-sm mx-4 -mt-4 px-4 border rounded-xl h-96 overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-6 font-WorkSans">
                            <h2 className="font-semibold text-lg"> Trafic des utilisateurs par réseau</h2>
                            <div><button className="px-4 py-2">Voir le rapport</button></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="bg-white border min-w-full">
                                <thead>
                                    <tr className="bg-gray-100 border-b font-medium text-gray-700 text-left text-sm">

                                        <th className="bg-white px-4 py-2"> Moov</th>
                                        <th className="px-4 py-2">Orange</th>
                                        <th className="px-4 py-2">MTN</th>
                                        <th className="px-4 py-2">Wave</th>
                                    </tr>
                                </thead>

                            </table>

                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 py-6 font-WorkSans">
                    <h2 className="font-semibold text-lg"> Paramètre des actions</h2>
                    <div><button className="bg-violet px-4 py-2 rounded-xl text-white">Mettre à jours les paramètres</button></div>
                </div>

                <div className="flex justify-center items-center py-8">
                    <div className="w-1/2 font-MerriweatherSans">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-72 overflow-hidden">
                            <header className="shadow-sm my-2 px-4 py-1">
                                <h1 className="text-2xl">Collectes</h1>
                                <p className="text-gray-400 text-sm">Gérez les réseaux en cas de dépannage</p>
                            </header>

                            <div>
                                <OptionsComponent />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 font-MerriweatherSans">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-72 overflow-hidden">
                            <header className="shadow-sm my-2 px-4 py-1">
                                <h1 className="text-2xl">Transfert d'argent</h1>
                                <p className="text-gray-400 text-sm">Gérez les réseaux en cas de dépannage</p>
                            </header>

                            <div>
                                <OptionsComponent />
                            </div>
                        </div>

                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}
