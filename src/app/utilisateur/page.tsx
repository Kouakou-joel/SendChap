'use client';
import * as echarts from 'echarts';
import { setDate } from "date-fns";
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Transaction from '../components/transaction';
import { FiAlertOctagon } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRef } from 'react';

export default function Utilisateur() {
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("default");

    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };
    const chartRef = useRef(null);

    useEffect(() => {
        // const chartDom = document.getElementById('main7');
        // if (chartDom) {
        //     const myChart = echarts.init(chartDom);

        //     const option = {
        //         color: ['#80FFA5'],
        //         title: {
        //             text: ''
        //         },
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'cross',
        //                 label: {
        //                     backgroundColor: '#6a7985'
        //                 }
        //             }
        //         },
        //         legend: {
        //             data: ['']
        //         },
        //         toolbox: {
        //             show: false,

        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 boundaryGap: false,
        //                 data: [],
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '',
        //                 type: 'line',
        //                 stack: 'Total',
        //                 smooth: true,
        //                 lineStyle: {
        //                     width: 6
        //                 },
        //                 showSymbol: false,
        //                 areaStyle: {
        //                     opacity: 0.8,
        //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //                         {
        //                             offset: 0,
        //                             color: '#388E3C'
        //                         },
        //                         {
        //                             offset: 1,
        //                             color: '#22c55e'
        //                         }
        //                     ])
        //                 },
        //                 emphasis: {
        //                     focus: 'series'
        //                 },
        //                 data: [4, 54, 20, 80]
        //             },
        //         ]
        //     };

        //     myChart.setOption(option);
        // }
        // const chartDom3 = document.getElementById('main8');
        // if (chartDom3) {
        //     const myChart = echarts.init(chartDom3);

        //     const option = {
        //         color: ['#80FFA5'],
        //         title: {
        //             text: ''
        //         },
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'cross',
        //                 label: {
        //                     backgroundColor: '#6a7985'
        //                 }
        //             }
        //         },
        //         legend: {
        //             data: ['']
        //         },
        //         toolbox: {
        //             show: false,

        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 boundaryGap: false,
        //                 data: [],
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '',
        //                 type: 'line',
        //                 stack: 'Total',
        //                 smooth: true,
        //                 lineStyle: {
        //                     width: 6
        //                 },
        //                 showSymbol: false,
        //                 areaStyle: {
        //                     opacity: 0.8,
        //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //                         {
        //                             offset: 0,
        //                             color: '#388E3C'
        //                         },
        //                         {
        //                             offset: 1,
        //                             color: '#22c55e'
        //                         }
        //                     ])
        //                 },
        //                 emphasis: {
        //                     focus: 'series'
        //                 },
        //                 data: [4, 54, 20, 80]
        //             },
        //         ]
        //     };

        //     myChart.setOption(option);
        // }
        // const chartDom2 = document.getElementById('main9');
        // if (chartDom2) {
        //     const myChart = echarts.init(chartDom2);

        //     const option = {
        //         color: ['#80FFA5'],
        //         title: {
        //             text: ''
        //         },
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'cross',
        //                 label: {
        //                     backgroundColor: '#6a7985'
        //                 }
        //             }
        //         },
        //         legend: {
        //             data: ['']
        //         },
        //         toolbox: {
        //             show: false,

        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 boundaryGap: false,
        //                 data: [],
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLabel: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false
        //                 },
        //                 splitLine: {
        //                     show: false
        //                 }
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '',
        //                 type: 'line',
        //                 stack: 'Total',
        //                 smooth: true,
        //                 lineStyle: {
        //                     width: 6
        //                 },
        //                 showSymbol: false,
        //                 areaStyle: {
        //                     opacity: 0.8,
        //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //                         {
        //                             offset: 0,
        //                             color: '#D32F2F'
        //                         },
        //                         {
        //                             offset: 1,
        //                             color: '#f43f5e'
        //                         }
        //                     ])
        //                 },
        //                 emphasis: {
        //                     focus: 'series'
        //                 },
        //                 data: [80, 20, 60, 4]
        //             },
        //         ]
        //     };

        //     myChart.setOption(option);
        // }

    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Profit'],
          textStyle: {
            color: '#555' 
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            axisLine: { show: false }, 
            axisTick: { show: false }, 
            axisLabel: { show: false }, 
            splitLine: { show: false },  
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisLine: { show: false }, 
            axisTick: { show: false }, 
            axisLabel: { show: false }, 
            splitLine: { show: false }, 
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri',]
          }
        ],
        series: [
          {
            name: 'Profit',
            type: 'bar',
            label: {
              show: true,
              position: 'inside',
              color: '#fff'
            },
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              color: '#4CAF50' 
            },
            data: [200, 170, 240, 244, 200,]
          },
          
          
        ]
      };

      myChart.setOption(option);

      
    }
  }, []);
    return (
        <>
            <DashboardLayout util={"Getion des utilisateur"} utis={"Suivez,gerez,Prevoyez les actions des uttilisateurs"}>
                <div className="pt-8">
                    <div className="flex">
                        <div className="w-1/3">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">Total des utilisateurs</div>
                                        <div className="ml-auto">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-3xl">24,420</div>
                                    <div>
                                        <div className='flex mt-2 text-md text-zinc-400'>
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
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border rounded-xl h-40 text-white overflow-hidden">
                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">utilisateurs Actifs</div>
                                        <div className="ml-auto">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-3xl">420</div>
                                    <div>
                                        <div className='flex mt-2 text-md text-zinc-400'>
                                            <span className="inline-flex items-center bg-red-50 px-2 py-1 rounded-l ring-red-50 ring-inset font-medium text-red-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 2V10V2Z" fill="#D32F2F" />
                                                    <path d="M6 2V10" stroke="#D32F2F" strokeWidth="1.68" strokeLinecap="round" />
                                                    <path d="M3 7L6 10L9 7" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                3.9
                                            </span>
                                            <p className='pl-2'>  vs mois dernier</p>
                                            {/* <div id='main8' className='w-full h-full'></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border rounded-xl h-40 text-white overflow-hidden">

                                <div className="mb-4 px-2 text-black">
                                    <div className="flex mt-6 text-xl">
                                        <div className="text-black text-xl">utilisateurs Verifier</div>
                                        <div className="ml-auto">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                                                <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                                                <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pt-5 font-anttic text-3xl">370</div>
                                    <div>
                                        <div className='flex mt-2 text-md text-zinc-400'>
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
                                className="bg-transparent pl-2 w-96 outline-none"
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="w-full h-screen">
                            <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-md mx-4 -mt-6 bg-clip-border rounded-xl h-screen text-white overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="bg-white border min-w-full">
                                        <thead>
                                            <tr className="bg-gray-200 font-medium text-gray-700 text-left text-sm">
                                                <th className="py-3 pl-14">
                                                    <input id="selectAll" type="checkbox" className="cursor-pointer" />
                                                </th>
                                                <th className="px-4 py-3">Utilisateur</th>
                                                <th className="px-4 py-3">Profil Complété</th>
                                                <th className="px-4 py-3">Numéro</th>
                                                <th className="px-4 py-3">Total Transactions</th>
                                            </tr>
                                        </thead>
                                        <tbody className='items-center'>
                                            <tr className="items-center hover:bg-gray-50 border-b text-gray-600 text-sm">
                                                <td className="border-gray-300 py-2 text-center">
                                                    <input id="row1" type="checkbox" className="cursor-pointer" />
                                                </td>
                                                <td className="flex py-3">
                                                    <div className="flex w-1/4">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <g clipPath="url(#clip0_11814_23380)">
                                                                <g clipPath="url(#clip1_11814_23380)">
                                                                    <rect width="40" height="40" fill="#80CBC4" />
                                                                    <rect x="1.01562" y="1.99219" width="38.0078" height="38.0078" fill="url(#pattern0_11814_23380)" />
                                                                </g>
                                                            </g>

                                                        </svg>
                                                    </div>
                                                    <h3 className='flex items-center'>Utilisateur 1</h3>
                                                </td>
                                                <td className="px-4 py-3">  <div ref={chartRef} className='w-full h-full'></div></td>
                                                <td className="px-4 py-3">0756248586</td>
                                                <td className="flex space-x-24 px-4 py-3">
                                                    <p>800 €</p>
                                                    <div className='flex items-center space-x-4'>
                                                        <FiAlertOctagon />
                                                        <RiDeleteBin5Line />
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 border text-gray-600 text-sm">
                                                <td className="px-4 py-3 text-center">
                                                    <input id="row2" type="checkbox" className="cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-3">Utilisateur 2</td>
                                                <td className="px-4 py-3">Non</td>
                                                <td className="px-4 py-3">0789456123</td>
                                                <td className="flex space-x-24 px-4 py-3">
                                                    <p>800 €</p>
                                                    <div className='flex items-center space-x-4'>
                                                        <FiAlertOctagon />
                                                        <RiDeleteBin5Line />
                                                    </div>

                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                  
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout >
        </>
    );
}