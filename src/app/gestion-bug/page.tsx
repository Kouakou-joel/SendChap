'use client';
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { RxEyeOpen } from "react-icons/rx";
export default function GestionBug() {
 const [sortOption, setSortOption] = useState('Default');
    const [selectedDates, setSelectedDates] = useState([null, null]);
   
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };
    return (
        <>
            <DashboardLayout gestionbBug={'Gestion des bug'} suptitle={'Suivre l\'etat des problemes sur notre application .'}>
               
                <nav className="flex justify-between items-center bg-transparent px-4">
                    <div className="flex space-x-10 bg-clip-border rounded-xl">
                        <div className="flex items-center shadow-xl p-1 rounded-xl outline-none">
                            <IoCalendarOutline className="rounded-sm w-5 h-5" />
                            <DatePicker
                                selectsRange
                                startDate={selectedDates[0] || undefined}
                                endDate={selectedDates[1] || undefined}
                                onChange={(dates: any) => setSelectedDates(dates)}
                                placeholderText="Choisir une plage de dates"
                                dateFormat="dd/MM/yyyy"
                                isClearable={true} className="px-1 outline-none"
                            />
                        </div>
                        <div className="flex items-center shadow-md p-1 rounded-md">
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
                    <div className="flex bg-orange-600 from-white to-white p-1 bg-clip-border border rounded-xl">
                        <button className="px-2 py-1 text-white">Signaler un bug</button>
                    </div>


                </nav>
                <div className="mt-14">
                <div className="relative bg-blue-gray-500 bg-gradient-to-r from-white to-white shadow-blue-gray-500/40 shadow-lg mx-4 -mt-4 bg-clip-border rounded-xl h-screen text-white overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="bg-white border min-w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b font-medium text-gray-700 text-left text-sm">
                                        <th className="py-2 pl-6">
                                            <input id="selectAll" type="checkbox" className="cursor-pointer" />
                                        </th>
                                        <th className="px-4 py-2">ID du bug</th>
                                       
                                        <th className="px-4 py-2">Description du bug</th>
                                        <th className="px-4 py-2"></th>
                                        <th className="px-2 py-2">Prioriete</th>
                                        <th className="px-2 py-2">Etat</th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody className='items-center'>
                                    <tr className="items-center hover:bg-gray-50 border-b text-gray-600 text-sm">
                                        <td className="border-gray-300 py-2 text-center">
                                            <input id="row1" type="checkbox" className="cursor-pointer" />
                                        </td>
                                        <td className="flex px-4 py-2">
                                                <h3 className='flex items-center'>Jufgf</h3>
                                        </td>
                                        
                                        <td className="px-4 py-2">0756248586</td>
                                        <td className="px-4 py-2">  </td>
                                        <td className="px-2 py-2">
                                        <span className="inline-flex items-center bg-orange-500 px-2 py-1 rounded-md ring-orange-500 ring-inset font-medium text- text-white">
                                            Critique
                                            </span>
                                        </td>
                                        <td className="px-2 py-2">
                                            <span className="inline-flex items-center bg-green-200 px-2 py-1 rounded-md ring-green-100 ring-inset font-medium text- text-white">
                                            Critique
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <RxEyeOpen className='w-6 h-6' />
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 border text-gray-600 text-sm">
                                        <td className="py-3 text-center">
                                            <input id="row2" type="checkbox" className="cursor-pointer" />
                                        </td>
                                        <td className="px-4 py-3">Utilisateur 2</td>
                                        <td className="px-4 py-3">Non</td>
                                        <td className="px-4 py-3"></td>
                                        <td className="px-2 py-3">
                                            <p>800.000 F cfa</p>
                                        </td>
                                        <td className="px-4 py-3">dlhdughuii</td>
                                        <td className="px-3 py-3"></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    </div>
            </DashboardLayout>
        </>
    );
}
