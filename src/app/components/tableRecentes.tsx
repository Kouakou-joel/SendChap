'use client';
import React, { useEffect, useState } from 'react';

type Transaction = {
  utilisateur: string;
  type: string;
  date: string;
  numeroDebite: string;
  statuts: 'success' | 'attente' | 'echec';
};

export default function TableRecentes() {
  const [transactions, setTransactions] = useState<Transaction[]>([]); 

  useEffect(() => {
    // const fetchTransactions = async () => {
    //   try {
    //     const response = await fetch('/api/transactions');
    //     const data = await response.json();
    //     setTransactions(data);
    //   } catch (error) {
    //     console.error('Erreur lors de la récupération des transactions:', error);
    //   }
    // };

    // fetchTransactions();
  }, []);

  const getStatusClass = (status: 'success' | 'attente' | 'echec') => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'attente':
        return 'text-yellow-600 bg-yellow-100';
      case 'echec':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div  className='font-WorkSans'>
      <table className="bg-white border min-w-full">
        <thead>
          <tr className="bg-neutral-100 border-b font-medium text-gray-600 text-left text-sm">
            <th className="py-2 pl-6">N°</th>
            <th className="px-4 py-2">Utilisateur</th>
            <th className="px-4 py-2">Type de transaction</th>
            <th className="px-4 py-2">Date et heure</th>
            <th className="px-4 py-2">Numéro débité</th>
            <th className="px-4 py-2">Statuts des prélèvements</th>
            <th className="px-4 py-2">Moi</th>
          </tr>
        </thead>
        <tbody className='items-center'>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 pl-6">{index + 1}</td>
              <td className="px-4 py-2">{transaction.utilisateur}</td>
              <td className="px-4 py-2">{transaction.type}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.numeroDebite}</td>
              <td className={`px-4 py-2 ${getStatusClass(transaction.statuts)}`}> {transaction.statuts}</td>
              <td className="px-4 py-2">{transactions.filter(t => t.utilisateur === transaction.utilisateur).length} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
