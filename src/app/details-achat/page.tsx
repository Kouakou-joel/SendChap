'use client';
import React, { useState } from 'react';
import { FiCopy, FiDelete } from 'react-icons/fi';

interface AchatDetails {
  totalAmount: number;
  userName: string;
  amount: number;
  fees: number;
  totalPaid: number;
  dateTime: string;
  transactionId: string;
  userCode: string; 
}

export default function DetailsAchat() {
    const [achatDetails, setAchatDetails] = useState<AchatDetails>({
        totalAmount: 0,
        userName: '',
        amount: 0,
        fees: 0,
        userCode: '',
        totalPaid: 0,
        dateTime: '',
        transactionId: '',
        
    });
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [userName, setUserName] = useState('');
    const [amount, setAmount] = useState(0);
    const [fees, setFees] = useState(0);
    const [userCode, setUserCode] = useState('');
    const [totalPaid, setTotalPaid] = useState(0);
    const [dateTime, setDateTime] = useState('');
    const [transactionId, setTransactionId] = useState('');
    

   
    if (!achatDetails) {
        return <div>Chargement...</div>;
    }

    return (

        <div>
            <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">

                <div className="bg-white shadow-2xl p-3 rounded-md w-96">
                    <div className="flex justify-between items-center font-bold text-xl">
                        <div className="mb-2 p-1 rounded-full"></div>
                        <div className=''>
                            <a href=""><FiDelete className='w-5 h-5' /></a>
                        </div>
                    </div>
                    <div className='bg-gray-100 mt-8 p-4 rounded-md'>
                        <div className='justify-between items-center bg-white px-2 py-2 rounded-md h-20'>
                            <div className='flex items-center'>
                                <div className='flex'>
                                    <img src="/assets/images/Rectangle 61.png" alt="avatar" className='rounded-full w-8 h-8' />
                                </div>
                                <div className='ml-auto'>
                                        <h1 className='flex font-bold text-xl'>{achatDetails.totalAmount} fcfa</h1>
                                </div>
                            </div>
                            <div className='flex'>
                                <h1 className='flex text-gray-500 text-sm'>{achatDetails.userName} Apple card</h1>
                            </div>
                        </div>
                        <div className='justify-between items-center bg-white mt-3 px-2 py-2 rounded-md h-20'>
                            <div className='flex'>
                                <p className='flex text-black text-md'>Code de la recharge</p>
                            </div>
                            <div className='flex pt-3'>
                                <h1 className='flex text-gray-500 text-sm'>{achatDetails.userCode}</h1>
                               
                                    <a href="" className='ml-auto'><FiCopy className='w-5 h-5' /></a>
                           
                            </div>
                        </div>

                        <div className='bg-white mt-3 py-4 p-4 rounded-b-md rounded-md h-54'>
                            <div>
                                <h2 className='flex pb-3 text-black text-lg'>Detail achat</h2>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Montant </p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{achatDetails.amount} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Frais </p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{achatDetails.fees} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Total payer</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{achatDetails.totalPaid} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Date et heure</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{achatDetails.dateTime}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>ID Transaction</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{achatDetails.transactionId}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-white mt-4 px-2 rounded-md h-20'>
                        <div className='flex items-center gap-2'>
                            <div className='border-gray-200 bg-white px-6 p-2 border rounded-md'>
                                <button className='w-24 text-gray-600'>Fermer</button>
                            </div>
                            <div className='bg-violet ml-4 px-10 p-2 rounded-md'>
                                <button className='w-24 text-white'> Voir profil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
