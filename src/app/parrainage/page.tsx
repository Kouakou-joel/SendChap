'use client'
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Transaction from '../components/transaction';
import { FiAlertOctagon } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface ParrainageData {
    Parrain: string;
    Nombrefilleul: number;
    Gainsactuel: number;
    odeID: string;
}

export default function Parrainage() {
    const [parrainages, setParrainages] = useState<ParrainageData[]>([]);
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                pages.push(i);
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                pages.push('...');
            }
        }
        return pages;
    };

    return (
        <>
            <DashboardLayout parraintitle={'Gestion des parrainage'} part={'Suivez et gardez les parrainages de vos utilisateur .'}>
                <div className="pt-8">
                    <div className="flex">
                        <div className="w-1/3">
                            <div className="relative shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6">
                                        <div className="text-black text-xl">Total des parrains</div>
                                        <div className="ml-auto">
                                            <a href="">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                    <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                    <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-2xl">24,20</div>
                                    <div>
                                        <div className='flex mt-2 text-sm text-zinc-400'>
                                            <span className="inline-flex items-center bg-green-50 px-2 py-1 rounded-xl ring-green-200 ring-inset font-medium text-green-500">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                40%
                                            </span>
                                            <p className='pl-2'>  vs mois dernier</p>
                                            {/* <div id='main7' className='w-full h-full'></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6">
                                        <div className="text-black text-xl">Total des filleuls</div>
                                        <div className="ml-auto">
                                            <a href="">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                    <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                    <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-2xl">120</div>
                                    <div>
                                        <div className='flex mt-2 text-sm text-zinc-400'>
                                            <a href="">
                                                <span className="inline-flex items-center bg-red-50 px-2 py-1 rounded-l ring-red-50 ring-inset font-medium text-red-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2V10V2Z" fill="#D32F2F" />
                                                        <path d="M6 2V10" stroke="#D32F2F" strokeWidth="1.68" strokeLinecap="round" />
                                                        <path d="M3 7L6 10L9 7" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    3.9
                                                </span>
                                            </a>
                                            <p className='pl-2'>  vs mois dernier</p>
                                            {/* <div id='main8' className='w-full h-full'></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border border rounded-xl h-40 text-white overflow-hidden">

                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6">
                                        <div className="text-black text-xl">Total des grains</div>
                                        <div className="ml-auto">
                                            <a href="">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                    <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                    <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-2xl">370</div>
                                    <div>
                                        <div className='flex mt-2 text-sm text-zinc-400'>
                                            <span className="inline-flex items-center bg-green-50 px-2 py-1 rounded-xl ring-green-200 ring-inset font-medium text-green-500">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                40%
                                            </span>
                                            <p className='pl-2'>  vs mois dernier</p>
                                            {/* <div id='main9' className='w-full h-full'></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 pt-4 font-inter">
                        <div className="flex items-center shadow-md mb-4 p-1 border rounded-l outline-none">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 4V13H18.25L15.25 16.75L12.25 13H14.5V4H16ZM10 14.5V16H3.25V14.5H10ZM11.5 9.25V10.75H3.25V9.25H11.5ZM11.5 4V5.5H3.25V4H11.5Z" fill="#666666" />
                            </svg>

                            <select value={sortOption} onChange={handleSortChange} className="border-gray-300 ml-2 outline-none">
                                <option value="default">Trier par</option>
                                <option value="asc">Ascendant</option>
                                <option value="desc">Descendant</option>
                            </select>
                        </div>

                        <div className="flex items-center bg-white shadow-blue-gray-500/40 shadow-md px-2 border rounded-xl">
                            <CiSearch className='w-6 h-10' />
                            <input
                                type="text"
                                placeholder="Recherche"
                                value={search}
                                onChange={handleSearch}
                                className="bg-transparent pl-2 w-96 text-md outline-none"
                            />
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="w-full h-screen">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border border rounded-xl h-fit text-white overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="bg-white border min-w-full">
                                        <thead>
                                            <tr className="bg-gray-100 font-medium text-gray-700 text-left text-sm">
                                                <th className="py-2 pl-6">
                                                    <input id="selectAll" type="checkbox" className="cursor-pointer" />
                                                </th>
                                                <th className="px-4 py-2">Parrain</th>
                                                <th className='px-4 py-2'></th>
                                                <th className="px-4 py-2">Nombre de filleul</th>
                                                <th className="px-4 py-2">Gains actuel</th>
                                                <th className="px-2 py-2">code ID</th>
                                                <th className='px-2 py-2'></th>
                                            </tr>
                                        </thead>
                                        <tbody className='items-center'>
                                            {parrainages.map((parrainage: ParrainageData, index: number) => (
                                                <tr key={index} className="items-center hover:bg-gray-50 border-b text-gray-600 text-sm">
                                                    <td className="border-gray-300 py-2 text-center">
                                                        <input id={`row${index}`} type="checkbox" className="cursor-pointer" />
                                                    </td>
                                                    <td className="flex py-2">
                                                        <div className="flex">
                                                            <div className="flex justify-center items-center bg-gray-300 p-2 rounded-full w-12 h-12">
                                                                {/* Ajouter une image ou une icône ici */}
                                                            </div>
                                                        </div>
                                                        <div className="pl-2">
                                                            <h3 className=''>{parrainage.Parrain}</h3>
                                                            <p>{parrainage.odeID}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-2">  </td>
                                                    <td className="px-4 py-2">{parrainage.Nombrefilleul}</td>
                                                    <td className="px-4 py-2">
                                                        <p>{parrainage.Gainsactuel} F cfa</p>
                                                    </td>
                                                    <td className='px-2 py-2'>{parrainage.odeID}</td>
                                                    <td className='px-2 py-2'>
                                                        <div className='flex items-center space-x-4'>
                                                            <FiAlertOctagon className='w-4 h-4' />
                                                            <BiShow className='w-6 h-6' />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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
                                        {getPageNumbers().map((page: number | string, index: number) => (
                                            <button
                                                key={index}
                                                onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                                                className={`px-2 py-1 rounded-md ${
                                                    page === currentPage
                                                        ? 'bg-gray-500 text-white'
                                                        : page === '...'
                                                            ? 'bg-transparent cursor-default'
                                                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
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
                </div>
            </DashboardLayout>
        </>
    );
}
