'use client';
import React, { useEffect, useState } from 'react';

// Définition du type Transaction
type Transaction = {
    typeTransaction: string;
    date: string;
    numero: string;
    statut: 'success' | 'attente' | 'echec';
    montant: string;
    numeroDebite: string;
    beneficiaire: string;
    logo: string; 
    icon: string; 
};

export default function TableRecentes() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Fonction pour récupérer les transactions
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('/api/transactions'); // Remplacez par votre API
                const data = await response.json();
                setTransactions(data.transactions || []); // Assurez-vous que data.transactions est un tableau
            } catch (error) {
                console.error("Erreur lors de la récupération des transactions :", error);
            }
        };

        fetchTransactions();
    }, []);

    const getStatusClass = (status: 'success' | 'attente' | 'echec') => {
        switch (status) {
            case 'success':
                return 'text-green-500';
            case 'attente':
                return 'text-yellow-500';
            case 'echec':
                return 'text-red-500';
            default:
                return '';
        }
    };

    return (
        <div className='font-WorkSans'>
            <table className="bg-white border min-w-full">
                <thead>
                    <tr className="bg-neutral-100 border-b font-medium text-gray-600 text-left text-sm">
                        <th className="py-2 pl-6">Type de transaction</th>
                        <th className="px-4 py-2">Date et heure</th>
                        <th className="px-4 py-2">Numéro débité</th>
                        <th className="px-4 py-2">Statuts des prélèvements</th>
                        <th className="px-4 py-2">Montant</th>
                        <th className="px-4 py-2">Bénéficiaire</th>
                    </tr>
                </thead>
                <tbody className='items-center'>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td className="py-2 pl-6">
                                <div>
                                    {transaction.statut === 'success' && <img src="/path/to/success-icon.png" alt="Success Icon" className="w-6 h-6" />}
                                    {transaction.statut === 'attente' && <img src="/path/to/pending-icon.png" alt="Pending Icon" className="w-6 h-6" />}
                                    {transaction.statut === 'echec' && <img src="/path/to/error-icon.png" alt="Error Icon" className="w-6 h-6" />}
                                </div>
                                <p>{transaction.typeTransaction}</p>
                            </td>
                            <td className="px-4 py-2">{transaction.date}</td>
                            <td className="px-4 py-2">
                                <div><img src={transaction.logo} alt="Logo" className="w-6 h-6" /></div>
                                <p>{transaction.numero}</p>
                                <div><img src={transaction.icon} alt="Icon" className="w-6 h-6" /></div>
                            </td>
                            <td className="px-4 py-2">{transaction.numeroDebite}</td>
                            <td className={`px-4 py-2 ${getStatusClass(transaction.statut)}`}>{transaction.statut}</td>
                            <td className="px-4 py-2">{transaction.montant}</td>
                            <td className="px-4 py-2">
                                <div><img src={transaction.logo} alt="Logo" className="w-6 h-6" /></div>
                                <p>{transaction.beneficiaire}</p>
                                <div><img src={transaction.icon} alt="Icon" className="w-6 h-6" /></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
