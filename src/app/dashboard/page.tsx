"use client"

import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as echarts from 'echarts';
import { IoCalendarOutline } from "react-icons/io5";
import { useEffect, useRef } from 'react';
import Transaction from "../components/transaction";

type DateRange = "24 heures" | "7 jours" | "30 jours" | "12 mois";

export default function Dashboard() {
    const [dateRange, setDateRange] = useState<DateRange>("24 heures");
    const [search, setSearch] = useState("");
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
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    useEffect(() => {
        const chartDom = document.getElementById('main');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
                tooltip: { trigger: 'item' },
                legend: { top: '5%', left: 'center' },
                series: [
                    {
                        name: 'Envoie d argent inter-reseau',

                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 1,

                        },
                        label: { show: false, position: 'center' },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 60,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1048, name: '', itemStyle: { color: '#F58220' } },
                            { value: 735, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 580, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 884, name: '', itemStyle: { color: '#1DC8FF' } },

                        ],
                    },
                ],
            };
            myChart.setOption(option);
        }

        const chartDom1 = document.getElementById('main1');
        if (chartDom1) {
            const firstChart = echarts.init(chartDom1);
            const option1 = {
                tooltip: { trigger: 'item' },
                legend: { top: '5%', left: 'center' },
                series: [
                    {
                        name: 'Achat de carte cadeeau',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 1,

                        },
                        label: { show: false, position: 'center' },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 60,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1048, name: '', itemStyle: { color: '#F58220' } },
                            { value: 735, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 580, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 884, name: '', itemStyle: { color: '#1DC8FF' } },

                        ],
                    },
                ],
            };
            firstChart.setOption(option1);
        }

        const chartDom2 = document.getElementById('main2');
        if (chartDom2) {
            const lastChart = echarts.init(chartDom2);
            const option = {
                tooltip: { trigger: 'item' },
                legend: { top: '5%', left: 'center' },
                series: [
                    {
                        name: 'Paiement marchant',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 1,

                        },
                        label: { show: false, position: 'center' },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 60,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1008, name: '', itemStyle: { color: '#F58220' } },
                            { value: 735, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 580, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 784, name: '', itemStyle: { color: '#1DC8FF' } },

                        ],
                    },
                ],
            };
            lastChart.setOption(option);
        }

        const chartDom3 = document.getElementById('main3');
        if (chartDom3) {
            const last1Chart = echarts.init(chartDom3);
            const option = {
                tooltip: { trigger: 'item' },
                legend: { top: '5%', left: 'center' },
                series: [
                    {
                        name: 'Depot bancaire',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 1,

                        },
                        label: { show: false, position: 'center' },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 60,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1048, name: '', itemStyle: { color: '#F58220' } },
                            { value: 1048, name: '', itemStyle: { color: '#005CA8' } },
                            { value: 1048, name: '', itemStyle: { color: '#FFC403' } },
                            { value: 1048, name: '', itemStyle: { color: '#1DC8FF' } },

                        ],
                    },
                ],
            };
            last1Chart.setOption(option);
        }

        const chartRef = document.getElementById('main4');
        if (chartRef) {
            const lineChart = echarts.init(chartRef);

            const appConfig = {
                rotate: 90,
                align: 'left',
                verticalAlign: 'middle',
                position: 'insideBottom',
                distance: 4,
            };

            const labelOption = {
                show: true,
                position: appConfig.position,
                distance: appConfig.distance,
                align: appConfig.align,
                verticalAlign: appConfig.verticalAlign,
                rotate: appConfig.rotate,
                formatter: '{c} {name|{a}}',
                fontSize: 4,
                rich: {
                    name: {},
                },
            };

            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                legend: {
                    data: ['', ''],
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: { show: true },
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        data: ['ORANGE', 'WAVE', 'MTN', 'MOOV'],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 8000000,
                        interval: 2000000,
                        axisLabel: {
                            formatter: function (value: any) {
                                return value / 1000000 + 'M';
                            }
                        }
                    },
                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        label: labelOption,
                        barWidth: 15,
                        emphasis: {
                            focus: 'series',
                        },
                        data: [
                            6100000,
                            4800000,
                            3070000,
                            2920000
                        ],
                        itemStyle: {
                            color: '#4CAF50',
                            borderRadius: [8, 8, 0, 0],
                            itemStyle: {
                                    borderRadius: [8, 8, 0, 0] 
                                }
                        },
                    },
                    {
                        name: '',
                        type: 'bar',
                        label: labelOption,
                        barWidth: 15,
                        emphasis: {
                            focus: 'series',
                        },
                        data: [
                            2800000,
                            2010000,
                            1590000,
                            1270000,
                        ],
                        itemStyle: {
                            color: '#F44336',
                            borderRadius: [8, 8, 0, 0], 
                            itemStyle: {
                                    borderRadius: [8, 8, 0, 0] 
                                }
                         
                        },
                    },
                ],
            };

            lineChart.setOption(option);
        }


    }, []);
    return (
        <>
            <DashboardLayout title="Tableau de bord" texte="Bienvenue Philippe !" >

                <header className="flex justify-between items-center px-4 font-MerriweatherSans">
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
                    <div className="flex from-white to-white shadow-blue-gray-500/4 shadow-sm p-1 bg-clip-border border rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0058 14.0038C16.0797 12.7062 16.7251 11.041 16.7251 9.22501C16.7251 5.08287 13.3672 1.72501 9.2251 1.72501C5.08296 1.72501 1.7251 5.08287 1.7251 9.22501C1.7251 13.3671 5.08296 16.725 9.2251 16.725C11.0411 16.725 12.7064 16.0796 14.004 15.0056L17.0576 18.0591C17.3342 18.3357 17.7827 18.3357 18.0593 18.0591C18.3359 17.7825 18.3359 17.334 18.0593 17.0574L15.0058 14.0038ZM9.2251 15.335C5.85065 15.335 3.11513 12.5995 3.11513 9.22501C3.11513 5.85056 5.85065 3.11504 9.2251 3.11504C12.5995 3.11504 15.3351 5.85056 15.3351 9.22501C15.3351 12.5995 12.5995 15.335 9.2251 15.335Z" fill="#808080" />
                        </svg>

                        <input type="text" name="" className="bg-transparent pl-2 outline-none" placeholder="Recherche" value={search}
                            onChange={handleSearch} />
                    </div>
                    <div className="flex space-x-8 bg-clip-border rounded-xl">
                        <div className="flex border rounded-r-md">
                            <IoCalendarOutline className="rounded-sm w-5 h-5" onClick={handleFocus} />

                            <DatePicker
                                ref={datePickerRef}
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
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-80 text-white overflow-hidden">
                                <div className="flex h-1/2">
                                    <div className="w-1/3 h-96">
                                        <div id="main" className="w-40 h-40"></div>;
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Envoie d'argent inter-reseau</div>
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
                                            <p className="pt-8 text-zinc-400">transaction de la journee</p>
                                        </div>
                                        <div className="flex">
                                            <div className="pt-2 text-black text-xl">23450551.6 F CFA</div>
                                            <div className="ml-auto pr-2">
                                                <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                        <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mx-6 h-1/2 font-WorkSans text-black">
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Group 21604.png" alt="logo Orange" className="w-6 h-6" />
                                        
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo moov" className="w-6 h-6"/>
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo mtn" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Rectangle 8.png" alt="logo vawe" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-80 text-white overflow-hidden">
                                <div className="flex h-1/2">
                                    <div className="w-1/3 h-96">
                                        <div id="main1" className="w-40 h-40"></div>;
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Achat de carte cadeau</div>
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

                                                    16%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mx-6 h-1/2 font-WorkSans text-black">
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Group 21604.png" alt="logo Orange" className="w-6 h-6" />
                                        
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo moov" className="w-6 h-6"/>
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo mtn" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Rectangle 8.png" alt="logo vawe" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8 font-MerriweatherSans">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-80 text-white overflow-hidden">
                                <div className="flex h-1/2">
                                    <div className="w-1/3 h-96">
                                        <div id="main2" className="w-40 h-40"></div>;
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Paiement marchant</div>
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
                                            <p className="pt-8 text-zinc-400">transaction de la journee</p>
                                        </div>
                                        <div className="flex">
                                            <div className="pt-2 text-black text-xl">23450551.6 F CFA</div>
                                            <div className="ml-auto pr-2">
                                                <span className="inline-flex items-center bg-red-300 px-2 py-1 rounded-xl ring-red-500 ring-inset font-medium text-red-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2V10V2Z" fill="#D32F2F" />
                                                        <path d="M6 2V10" stroke="#D32F2F" strokeWidth="1.68" strokeLinecap="round" />
                                                        <path d="M3 7L6 10L9 7" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    3.4
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mx-6 h-1/2 font-WorkSans text-black">
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Group 21604.png" alt="logo Orange" className="w-6 h-6" />
                                        
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo moov" className="w-6 h-6"/>
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo mtn" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Rectangle 8.png" alt="logo vawe" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-80 text-white overflow-hidden">
                                <div className="flex h-1/2">
                                    <div className="w-1/3 h-96">
                                        <div id="main3" className="w-40 h-40"></div>;
                                    </div>
                                    <div className="pt-4 w-2/3 h-96">
                                        <div className="flex">
                                            <div className="text-black text-l">Depot bancaire</div>
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
                                            <p className="pt-8 text-zinc-400">Depot effectuer</p>
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
                                <div className="mx-6 h-1/2 font-WorkSans text-black">
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Group 21604.png" alt="logo Orange" className="w-6 h-6" />
                                        
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo moov" className="w-6 h-6"/>
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Réseau.png" alt="logo mtn" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-2">
                                        <img src="/assets/images/Rectangle 8.png" alt="logo vawe" className="w-6 h-6" />
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="flex ml-4 pt-6">
                                    <h3 className="text-l text-slate-400">Nombre d'envoie en 24 heures/ Envoie d argent</h3>
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
                                    <div className="pt-2 text-black text-xl">240,000</div>
                                    <div className="ml-auto pr-2">
                                        <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            3.4
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
                                <div className="flex ml-4 pt-6">
                                    <h3 className="text-l text-slate-400">Nombre d'achat en 24 heures / Carte cadeau</h3>
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
                                    <div className="pt-2 text-black text-xl">27,000</div>
                                    <div className="ml-auto pr-2">
                                        <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-xl ring-green-400 ring-inset font-medium text-green-600">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10V2V10ZM6 2L9 5L6 2ZM6 2L3 5L6 2Z" fill="#388E3C" />
                                                <path d="M6 10V2M6 2L9 5M6 2L3 5" stroke="#388E3C" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            3.4
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="w-1/2">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
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

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-40 text-white overflow-hidden">
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
                    <div className="flex my-8">
                        <div className="w-2/3">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-screen text-white overflow-hidden">
                                <header className="items-center px-6 w-full h-10">
                                    <div className="flex pt-4">
                                        <div className="text-black text-xl">Status des Tansactions</div>
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
                                    <div className="text-sm text-zinc-400">Taux de reussite et d'echec des transactions</div>

                                </header>

                                <div className="pb-24 w-full h-full">
                                    <div id="main4" className="w-full h-full"></div>

                                    <h1 className="items-center pl-96 text-neutral-900">reseau</h1>

                                </div>
                            </div>

                        </div>
                        <div className="w-1/3">

                            <div className="relative shadow-sm mx-4 -mt-4 border rounded-xl h-screen text-white overflow-hidden">
                                <Transaction />
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayout >
        </>
    );
} 
                
               

                
               

                
                
                
               