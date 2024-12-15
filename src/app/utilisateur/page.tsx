'use client';
import * as echarts from 'echarts';
import { setDate } from "date-fns";
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Transaction from '../components/transaction';
import { FiAlertOctagon } from "react-icons/fi";
import { BiShow } from "react-icons/bi";

import { RxEyeOpen } from "react-icons/rx";

import { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

export default function Utilisateur() {
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPage] = useState(10);
    const [totalItems] = useState(100);
    const totalPages = Math.ceil(totalItems / itemsPage);

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
     
    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    }else{
        if(currentPage <= 3){
            for(let i = 1; i <= 4; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        }
        else if(currentPage >= totalPages - 2){
            pages.push(1);
            pages.push('...');
            for(let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
        }else{
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
}
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };
    const chartRef = useRef(null);
 
    useEffect(() => {
        const chartDom = document.getElementById('main');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
                    ]
            };

            myChart.setOption(option);
        }
    }, []);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <DashboardLayout util={"Gestion des utilisateurs"} utis={"Suivez,gerez,Prevoyez les actions des uttilisateurs"}>
                <div className="pt-8">
                    <div className="flex">
                        <div className="w-1/3">
                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">Total des utilisateurs</div>
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
                                    <div className="pt-5 font-anttic text-2xl">24,420</div>
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
                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">utilisateurs Actifs</div>
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
                                    <div className="pt-5 font-anttic text-2xl">420</div>
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
                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-40 text-white overflow-hidden">

                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">utilisateurs Verifier</div>
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
                        <div className="flex items-center shadow-sm mb-4 p-1 border rounded-xl outline-none">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 4V13H18.25L15.25 16.75L12.25 13H14.5V4H16ZM10 14.5V16H3.25V14.5H10ZM11.5 9.25V10.75H3.25V9.25H11.5ZM11.5 4V5.5H3.25V4H11.5Z" fill="#666666" />
                            </svg>

                            <select value={sortOption} onChange={handleSortChange} className="border-gray-300 ml-2 outline-none">
                                <option value="default">Trier par</option>
                                <option value="asc">Ascendant</option>
                                <option value="desc">Descendant</option>
                            </select>
                        </div>

                        <div className="flex items-center bg-white shadow-sm px-2 border rounded-xl">
                            <CiSearch className='w-6 h-10' />
                            <input
                                type="text"
                                placeholder="Recherche"
                                value={search}
                                onChange={handleSearch}
                                className="bg-transparent pl-2 w-96 outline-none"
                            />
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="w-full h-screen">
                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-fit text-white overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="bg-white border min-w-full">
                                        <thead>
                                            <tr className="bg-neutral-100 font-medium text-gray-700 text-left text-sm">
                                                <th className="py-2 pl-6">
                                                    <input id="selectAll" type="checkbox" className="cursor-pointer" />
                                                </th>
                                                <th className="px-4 py-2">Utilisateur</th>
                                                <th className="px-4 py-2">Profil Complété</th>
                                                <th className="px-4 py-2">Numéro</th>
                                                <th className="px-2 py-2">Total Transactions</th>
                                                <th className='px-2 py-2'></th>
                                            </tr>
                                        </thead>
                                        <tbody className='items-center'>
                                            <tr className="items-center hover:bg-gray-50 border-b text-gray-600 text-sm">
                                                <td className="border-gray-300 py-2 text-center">
                                                    <input id="row1" type="checkbox" className="cursor-pointer" />
                                                </td>
                                                <td className="flex py-2">
                                                    <div className="flex">
                                                        
                                                    </div>
                                                    <h3 className='flex items-center pl-2'>Jean Philipp</h3>
                                                </td>
                                                <td className="px-4 py-2">  </td>
                                                <td className="px-4 py-2">0756248586</td>
                                                <td className="px-4 py-2">
                                                    <p>800.000 F cfa</p>
                                                </td>
                                                <th className='px-2 py-2'>
                                                    <div className='flex items-center space-x-4'>
                                                        <FiAlertOctagon className='w-4 h-4' />
                                                        <BiShow className='w-6 h-6' />

                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="hover:bg-gray-50 border text-gray-600 text-sm">
                                                <td className="px-4 py-2 text-center">
                                                    <input id="row2" type="checkbox" className="cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-2">Utilisateur 2</td>
                                                <td className="px-4 py-2">Non</td>
                                                <td className="px-4 py-2">0789456123</td>
                                                <td className="px-4 py-2">
                                                    <p>800.000 F cfa</p>
                                                </td>
                                                <th className='px-2 py-2'>
                                                    <div className='flex items-center space-x-4'>
                                                        <FiAlertOctagon className='w-4 h-4' />
                                                        <BiShow className='w-6 h-6' />

                                                    </div>
                                                </th>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="flex justify-between items-center px-4 py-6">
                                        <button     
                                            className={`flex items-center gap-2 px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-600' : 'border border-gray-300 text-gray-600'}`}
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
                                                        ? 'bg-neutral-400 text-white'
                                                        : page === '...'
                                                            ? 'text-neutral-400 bg-transparent cursor-default'
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
                    </div>
                </div>
            </DashboardLayout >
        </>
    );
}     
    
