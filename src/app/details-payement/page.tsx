'use client';
import React, { useState } from 'react';
import { FiDelete } from 'react-icons/fi';

interface PayementDetails {
    totalAmount: number;
    userName: string;
    amountSent: number;
    fees: number;
    totalPaid: number;
    debitNumber: string;
    network: string;
    status: string;
    marchantNumber: string;
    marchantNetwork: string;
    marchantStatus: string;
    dateTime: string;
    transactionId: string;
}

export default function () {
    const [payementDetails, setPayementDetails] = useState<PayementDetails>({
        totalAmount: 0,
        userName: '',
        amountSent: 0,
        fees: 0,
        totalPaid: 0,
        debitNumber: '',
        network: '',
        status: '',
        transactionId: '',
        marchantNumber: '',
        marchantNetwork: '',
        marchantStatus: '',
        dateTime: ''
    });
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [userName, setUserName] = useState('');
    const [amountSent, setAmountSent] = useState(0);
    const [fees, setFees] = useState(0);
    const [totalPaid, setTotalPaid] = useState(0);
    const [debitNumber, setDebitNumber] = useState('');
    const [network, setNetwork] = useState('');
    const [status, setStatus] = useState('');
    const [marchantNumber, setMarchantNumber] = useState('');
    const [marchantNetwork, setMarchantNetwork] = useState('');
    const [marchantStatus, setMarchantStatus] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [transactionId, setTransactionId] = useState('');


    if (!payementDetails) {
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
                                    <img src="/images/avatar.png" alt="avatar" className='rounded-full' />
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex font-bold text-xl'>{payementDetails.totalAmount} fcfa</h1>
                                </div>
                            </div>
                            <div className='flex'>
                                <h1 className='flex text-gray-500 text-sm'> payer a {payementDetails.userName}</h1>
                            </div>
                        </div>
                        <div className='bg-white mt-4 py-4 p-4 rounded-b-md rounded-md h-96'>
                            <div>
                                <h2 className='flex pb-3 text-black text-lg'>Detail de payement</h2>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Montant envoyer</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.amountSent} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Frais </p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.fees} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Total payer</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.totalPaid} F cfa</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Numero debite</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.debitNumber}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Reseau</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.network}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Status</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.status}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Marchant</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.marchantNumber}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Réseau</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.marchantNetwork}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Status</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.marchantStatus}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>Date et heure</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.dateTime}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex'>
                                    <p className='flex text-gray-500 text-sm'>ID transaction</p>
                                </div>
                                <div className='ml-auto'>
                                    <h1 className='flex text-sm'>{payementDetails.transactionId}</h1>
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
