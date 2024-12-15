"use client"
import DashboardLayout from "../components/navbar";
import { useState, useEffect, use } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import TableRecentes from "../components/tableRecentes";
import TablesLignePage from "../components/tablesLignePage";




export default function TransactionRecent() {

    const [search, setSearch] = useState("");
    const [nombreTotal, setNombreTotal] = useState();
    const [sortOption, setSortOption] = useState("Default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(100);

    useEffect(() => {


    }, []);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Afficher toutes les pages si le total est petit
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Logique pour les points de suspension
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);

                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push('...');
                pages.push(currentPage + 1);
                pages.push(currentPage + 2);
                pages.push(totalPages);
            }
        }
        return pages;
    };

    // Gérer les changements de page
    const handlePreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    return (
        <>
            <DashboardLayout
                transt=" Transactions récentes"
                commites="Consultez les récentes transactions en temps réel"
            >
                <div className="px-4 font-WorkSans">
                    <div className="flex flex-col">
                        <header className="flex justify-between items-center bg-transparent mb-10">
                            <div className="flex space-x-10">
                                {/* <div className="bg-neutral-100 rounded-full w-10 h-10"></div> */}
                                <div className="items-center shadow-xl px-2 p-1 border rounded-2xl w-40 text-sm text-violet outline-none">
                                    transactions
                                </div>
                            </div>

                        </header>
                        <nav className="flex justify-between items-center bg-transparent">
                            <div className="flex space-x-3 rounded-xl">

                                <div className="flex items-center shadow-sm p-1 rounded-sm">
                                    <select value={sortOption} onChange={handleSortChange} className="px-2 p-1 border rounded-sm w-38 outline-none">
                                        <option value="default">Filtre par statut</option>
                                    </select>

                                </div>
                                <div className="flex items-center shadow-sm p-1 rounded-sm">
                                    <select value={sortOption} onChange={handleSortChange} className="px-2 p-1 border rounded-sm w-38 outline-none">
                                        <option value="default">Lignes par page </option>
                                    </select>

                                </div>
                                <div className="flex items-center shadow-sm p-1 rounded-sm">
                                    <select value={sortOption} onChange={handleSortChange} className="px-2 p-1 border rounded-sm w-38 outline-none">
                                        <option value="default">transaction</option>
                                    </select>

                                </div>
                            </div>
                            <div className="flex shadow-sm p-1 border rounded-md">
                                <img src="/assets/images/magnifier.svg" alt="" className="cursor-pointer" />
                                <input type="text" name="" className="bg-transparent pl-2 outline-none" placeholder="Recherche" value={search}
                                    onChange={handleSearch} />
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="my-14 font-WorkSans">
                    <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-screen text-white overflow-hidden">
                        <div className="overflow-x-auto">
                            {/* <TableRecentes /> */}
                            <TablesLignePage />
                            <div className="flex justify-between items-center px-4 py-6">
                                <button
                                    className={`flex items-center gap-2 px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'border border-gray-300 text-gray-600'}`}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <BsArrowLeft />
                                    Précédent
                                </button>
                                <div className="flex gap-2">
                                    {getPageNumbers().map((page, index) => (
                                        <button
                                            key={index}
                                            onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                                            className={`px-2 py-1 rounded-md ${page === currentPage
                                                ? 'bg-neutral-300 text-white'
                                                : page === '...'
                                                    ? ' bg-transparent text-neutral-500 cursor-default'
                                                    : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-400'
                                                }`}
                                            disabled={page === '...'}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className={`flex items-center gap-2 px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'border border-gray-300 text-gray-600'}`}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >

                                    Suivant <BsArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout >
        </>
    );
}
