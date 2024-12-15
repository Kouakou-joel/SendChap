'use client';
import React, { useEffect, useState } from 'react';

type Transaction = {
    date: string;
    numero: string;
    statut: 'En attente' | 'Effectué' | 'Échoué';
    montant: string;
    numeroDebite: string;
    beneficiaire: string;
    logo: string; // URL ou chemin vers le logo
    icon: string; // URL ou chemin vers l'icône
};

export default function TablesLignePage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch('/api/transactions');
            const data = await response.json();
            if (data && Array.isArray(data.transactions)) {
                setTransactions(data.transactions);
            } else {
                setTransactions([]);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className='font-WorkSans'>
            <table className="bg-white border min-w-full">
                <thead>
                    <tr className="bg-neutral-100 border-b font-medium text-gray-600 text-left text-sm">
                        <th className="py-2 pl-6">Date et heure</th>
                        <th className="px-4 py-2">Numéro</th>
                        <th className="px-4 py-2">Statuts des prélèvements</th>
                        <th className="px-4 py-2">Montant</th>
                        <th className="px-4 py-2">Numéro débité</th>
                        <th className="px-4 py-2">Bénéficiaire</th>
                        <th className="px-4 py-2">Statut</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody className='items-center'>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td className='flex'>
                                <div><img src={transaction.logo} alt="Logo" className="h-6 w-6" /></div>
                                <p>{transaction.numero}</p>
                                <div><img src={transaction.icon} alt="Icon" className="h-6 w-6" /></div>
                            </td>
                            <td>{transaction.statut}</td>
                            <td>{transaction.montant}</td>
                            <td className='flex'>
                                <div><img src={transaction.logo} alt="Logo" className="h-6 w-6" /></div>
                                <p>{transaction.numeroDebite}</p>
                                <div><img src={transaction.icon} alt="Icon" className="h-6 w-6" /></div>
                            </td>
                            <td>{transaction.beneficiaire}</td>
                            <td>{transaction.statut}</td>
                            <td>...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
