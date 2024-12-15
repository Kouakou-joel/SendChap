"use client"

import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as echarts from 'echarts';
import { IoCalendarOutline } from "react-icons/io5";
import { useEffect, useRef } from 'react';


type DateRange = "24 heures" | "7 jours" | "30 jours" | "12 mois";



export default function Analyse() {
    const [dateRange, setDateRange] = useState<DateRange>("24 heures");
    const [sortOption, setSortOption] = useState("Default");
    const [selectedDates, setSelectedDates] = useState<[Date | null, Date | null]>([null, null]);
    const datePickerRef = useRef<DatePicker>(null);
    const handleDateRangeClick = (range: DateRange) => setDateRange(range);
    const handleFocus = () => {
        if (datePickerRef.current && typeof datePickerRef.current.setFocus === "function") {
            datePickerRef.current.setFocus();
        } else {
            console.error("datePickerRef.current is not initialized or setFocus is not a function.");
        }
    };

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);

    };
    useEffect(() => {

        const chartDom1 = document.getElementById('main0');
        if (chartDom1) {
            const ridChart = echarts.init(chartDom1);
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '', itemStyle: { color: '#F58220' } },
                            { value: 735, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 580, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 884, name: '', itemStyle: { color: '#1DC8FF' } },


                        ]
                    }
                ]
            };

            ridChart.setOption(option);
        }

        const chartDom = document.getElementById('main5');
        if (chartDom) {
            const ridChart = echarts.init(chartDom);
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '', itemStyle: { color: '#F58220' } },
                            { value: 735, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 580, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 884, name: '', itemStyle: { color: '#1DC8FF' } },


                        ]
                    }
                ]
            };

            ridChart.setOption(option);
        }


    }, []);
    return (
        <>
            <DashboardLayout head="Analyse des données" trus="Analyse des données de votre application">
                <header className="flex justify-between items-center px-4 font-inter">
                    <div className="flex space-x-3 from-white to-white shadow-blue-gray-500/40 shadow-md p-1 bg-clip-border rounded-xl">
                        {["24 heures", "7 jours", "30 jours", "12 mois"].map((range) => (
                            <button
                                key={range}
                                onClick={() => handleDateRangeClick(range as DateRange)}
                                className={dateRange === range ? 'active' : ''}
                            >
                                {range}
                            </button>
                        ))}

                    </div>

                    <div className="flex space-x-8 bg-clip-border rounded-xl">
                        <div className="flex border rounded-r-md">
                            <IoCalendarOutline className="rounded-sm w-5 h-5" />

                            <DatePicker

                                selectsRange
                                startDate={selectedDates[0] || undefined}
                                endDate={selectedDates[1] || undefined}
                                onChange={(dates: any) => setSelectedDates(dates)}
                                placeholderText="Choisir une plage de dates"
                                dateFormat="dd/MM/yyyy"
                                isClearable={true} className="px-2 rounded-l outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-l outline-none">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3297 1.04166H4.74295C4.08178 1.04166 3.44769 1.30431 2.98017 1.77183C2.51265 2.23934 2.25 2.87344 2.25 3.53461V5.57052C2.25487 6.21758 2.51114 6.8374 2.96465 7.29897L6.08915 10.465C6.56587 10.9471 6.83186 11.5986 6.82872 12.2766V16.6392C6.82764 17.065 6.94426 17.4828 7.16569 17.8465C7.38712 18.2102 7.70475 18.5056 8.08351 18.7001C8.46217 18.8947 8.88685 18.9821 9.31159 18.9528C9.73634 18.9235 10.145 18.7786 10.4934 18.5339L11.6235 17.7029C11.9135 17.4981 12.1502 17.2267 12.3136 16.9115C12.477 16.5962 12.5624 16.2464 12.5625 15.8913V12.4012C12.5589 12.0397 12.631 11.6814 12.7741 11.3494C12.9173 11.0174 13.1282 10.719 13.3935 10.4733L16.9086 7.34052C17.1683 7.10818 17.3765 6.82397 17.5196 6.50622C17.6627 6.18846 17.7377 5.84423 17.7395 5.49573V3.50137C17.7313 2.86011 17.4763 2.24668 17.0275 1.78859C16.5787 1.33049 15.9706 1.06298 15.3297 1.04166ZM3.5214 5.57052V3.50137C3.5214 3.34134 3.55306 3.1829 3.61455 3.03516C3.67604 2.88742 3.76615 2.7533 3.87969 2.64053C3.99323 2.52776 4.12796 2.43857 4.27611 2.37809C4.42427 2.31761 4.58293 2.28704 4.74295 2.28813H8.72336L5.2083 7.77263L3.87873 6.42643C3.76521 6.31472 3.67512 6.18148 3.61377 6.0345C3.55241 5.88753 3.52101 5.72979 3.5214 5.57052ZM16.5429 5.49573C16.544 5.6675 16.509 5.83758 16.4403 5.99502C16.3716 6.15245 16.2707 6.29375 16.1441 6.40981L12.6207 9.54262C12.218 9.90206 11.8959 10.3425 11.6753 10.8352C11.4548 11.3278 11.3409 11.8615 11.341 12.4012V15.908C11.3407 16.0624 11.3036 16.2146 11.2328 16.3519C11.162 16.4892 11.0595 16.6076 10.9338 16.6974L9.79533 17.5284C9.63532 17.6339 9.44993 17.6946 9.25849 17.7042C9.06704 17.7137 8.87653 17.6718 8.70681 17.5827C8.5371 17.4936 8.39437 17.3606 8.29352 17.1976C8.19266 17.0346 8.13735 16.8475 8.13337 16.6558V12.2766C8.13442 11.2725 7.74041 10.3084 7.03647 9.59248L6.10576 8.68671L10.2108 2.28813H15.3297C15.489 2.28813 15.6468 2.31951 15.794 2.38048C15.9412 2.44146 16.0749 2.53082 16.1876 2.64348C16.3002 2.75614 16.3896 2.88989 16.4506 3.03708C16.5115 3.18428 16.5429 3.34204 16.5429 3.50137V5.49573Z" fill="#808080" />
                            </svg>

                            <select value={sortOption} onChange={handleSortChange} className="outline-none">
                                <option value="default">Trier par</option>
                                <option value="asc">Ascendant</option>
                                <option value="desc">Descendant</option>

                            </select>
                        </div>
                    </div>
                </header>

                <div className="pt-8">
                    <div className="pb-4 pl-4 font-bold text-l">
                        Donnees sur les utilisateurs
                    </div>
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-l">
                                        <div className="text-black text-l">utilisateurs actifs</div>
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
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-2 text-l">
                                        <div className="text-black text-l">Taux de croissance des utilisateurs</div>
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
                    </div>
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-l">
                                        <div className="text-black text-l">Taux de retention</div>
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
                                    <div className="flex ml-2 pt-4">
                                        <div className="pt-2 text-black text-xl">24,10</div>
                                        <div className="ml-auto pr-2">
                                            <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                                4.5%
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-l">
                                        <div className="text-black text-l"> Taux de parrainage</div>
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
                                    <div className="flex ml-6 pt-4">
                                        <div className="pt-2 text-black text-xl">24,01</div>
                                        <div className="ml-auto pr-2">
                                            <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                                4.5%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-4 text-l">
                                        <div className="text-black text-l">Taux de churn</div>
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
                                    <div className="flex ml-2 pt-4">
                                        <div className="pt-2 text-black text-xl">24,10</div>
                                        <div className="ml-auto pr-2">
                                            <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                                4.5%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-l">
                                        <div className="text-black text-l">Segmentation des utilisateur</div>
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
                                    <div className="flex ml-2 pt-4">
                                        <div className="pt-2 text-black text-xl">24,10</div>
                                        <div className="ml-auto pr-2">
                                            <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                    <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                                4.5%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 pl-4 font-bold text-l">
                        Donnees sur les transactions
                    </div>

                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="flex">
                                    <div className="w-1/3 h-96">
                                        <div id="main0" className="w-40 h-40"></div>;
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Envoie de l argent inter reseau</div>
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
                                        <div className="flex">
                                            <p className="pt-8 text-zinc-400">Transacton de la journee</p>
                                        </div>
                                        <div className="flex">
                                            <div className="pt-2 text-black text-xl">23450551.6 F CFA</div>
                                            <div className="ml-auto pr-2">
                                                <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                        <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="flex">
                                    <div className="w-1/3 h-96">
                                        <div id="main5" className="w-40 h-40"></div>
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Achat de la carte cadeau</div>
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
                                        <div className="flex">
                                            <p className="pt-8 text-zinc-400">Achat de la journee</p>
                                        </div>
                                        <div className="flex">
                                            <div className="pt-2 text-black text-xl">23450551.6 F CFA</div>
                                            <div className="ml-auto pr-2">
                                                <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                        <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="flex ml-4 pt-6">
                                    <h3 className="text-l text-slate-400">Nombre de paiement en 24 heures / Paiement marchant</h3>
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
                                <div className="flex ml-6 pt-8">
                                    <div className="pt-2 text-black text-xl">254,000</div>
                                    <div className="ml-auto pr-2">
                                        <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            4.5%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 overflow-hidden">
                                <div className="flex ml-4 pt-6">
                                    <h3 className="text-l text-slate-400">Nombre de depot en 24 heures / Depot bancaire</h3>
                                    <div className="ml-auto">
                                        <a href="/creat-compte">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex ml-6 pt-8">
                                    <div className="pt-2 text-black text-xl">7,000</div>
                                    <div className="ml-auto pr-2">
                                        <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-md ring-green-400 ring-inset font-medium text- text-green-600">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            6.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl w-full h-40 overflow-hidden">
                            <div className="flex space-x-10 pt-6 text- text-black">
                                <div className="ml-4 w-1/3 h-screen">
                                    <h3 className="">Montant minimum par transaction</h3>
                                    <div className="pt-8"></div>
                                </div>
                                <div className="w-1/3 h-screen">
                                    <div className=""> Montant Maximum par transaction</div>
                                    <div className="pt-8"></div>
                                </div>
                                <div className="w-1/3 h-screen">
                                    <div className="flex ml-80">
                                        <a href="">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div></div>
                                </div>
                                {/* 
                                
                                 */}
                            </div>
                        </div>



                    </div>
                    <div className="py-4 pl-4 font-bold text-l">
                        Donnees d Engagement
                    </div>
                    <div className="mt-10">
                        <div className="relative shadow-sm mx-4 -mt-4 px-4 border rounded-xl h-96 overflow-hidden">
                            <div className="py-4 pl-4 font-MerriweatherSans text-black text-l">
                          <h2 className="font-semibold">  Interactions par utilisateur</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="bg-white border min-w-full">
                                    <thead>
                                        <tr className="bg-gray-100 border-b font-medium text-gray-700 text-left text-sm">

                                            <th className="bg-white px-4 py-2">
                                                
                                                Toutes les interactions
                                                </th>

                                            <th className="px-4 py-2">Tansfert d argent</th>
                                            <th className="px-4 py-2">Achat de carte cardeaux</th>

                                        </tr>
                                    </thead>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                
            </DashboardLayout>
            </>
                                );
}