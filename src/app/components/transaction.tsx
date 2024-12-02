'use client';
import React, { useState, useEffect } from "react";
import { WiDirectionRight } from "react-icons/wi";
import axios from 'axios';

// Définir l'interface pour une transaction
interface Transaction {
    phoneNumber: string;
    name: string;
    status: string;
    time: string;
    amount: number;
}

const Transaction = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // useEffect(() => {
    //     // Fonction pour récupérer les transactions depuis la base de données
    //     const fetchTransactions = async () => {
    //         try {
    //             const response = await axios.get('/api/transactions'); 
    //             setTransactions(response.data);
    //         } catch (error) {
    //             console.error("Erreur lors de la récupération des transactions:", error);
    //         }
    //     };

    //     fetchTransactions();
    // }, []);

    return (
        <div className="items-center px-6 w-full h-10">
            <header className="border-gray-400 mb-4 border-b">
                <div className="flex pt-4">
                    <div className="text-black text-xl">Transactions récentes</div>
                    <div className="ml-auto">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                            <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                            <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                        </svg>
                    </div>
                </div>
                <div className="py-4 text-zinc-400 ytext-sm">Aujourd'hui</div>

            </header>
            <div className="">
                {transactions.map((trans, index) => (
                    <div key={index} className="flex justify-between pb-3">
                        <div className="flex">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#EEEEEC" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.8958 26.1033C14.2582 26.4657 14.8458 26.4657 15.2082 26.1033L24.518 16.7935V23.8331C24.518 24.3457 24.9335 24.7612 25.446 24.7612C25.9585 24.7612 26.374 24.3457 26.374 23.8331V14.5531C26.374 14.0406 25.9585 13.6251 25.446 13.6251H16.166C15.6534 13.6251 15.2379 14.0406 15.2379 14.5531C15.2379 15.0656 15.6534 15.4811 16.166 15.4811H23.2056L13.8958 24.7909C13.5334 25.1533 13.5334 25.7409 13.8958 26.1033Z" fill="#1A1A1A" />
                            </svg>
                            <div>
                                <p className="text-black text-l">
                                    {trans.phoneNumber} ({trans.name})</p>
                                <div className="flex text-sm text-zinc-400">{trans.status} à {trans.time}</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="text-zinc-400">{trans.amount} FCFA</div>
                            <div className="flex space-x-2">
                                <img src="/assets/images/Group 21604.png" alt="" />
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00017 6.66657V6.66723M9.3335 7.9999V8.00057M8.00017 9.33323V9.3339M6.66683
                                     7.9999V8.00057M12.6668 7.9999L8.00017 12.6666C7.69488 12.9781 7.33087 13.226 6.92918 13.396C6.52749 13.5659 6.09609 13.6546 5.65993 
                                     13.6568C5.22377 13.659 4.7915 13.5747 4.38811 13.4088C3.98472 13.2429 3.61823 12.9987 3.30981 12.6903C3.00139 12.3818 2.75718 12.0153 2.59128 11.612C2.42538 11.2086 2.3411 10.7763 2.3433 10.3401C2.34551 9.90398
                                      2.43415 9.47258 2.60411 9.07089C2.77408 8.6692 3.02198 8.30519 3.3335 7.9999L8.00017 3.33323C8.62113 2.72469 9.45717 2.38579 10.3266 2.39018C11.196 2.39457 12.0286 2.7419 12.6434 3.35668C13.2582 3.97147 13.6055
                                       4.80404 13.6099 5.67347C13.6143 6.5429 13.2754 7.37893 12.6668 7.9999Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <img src="/assets/images/Rectangle 8.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Transaction;