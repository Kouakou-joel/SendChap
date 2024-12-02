'use client';
import React, { useState } from 'react';
import { FiDelete } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function SignalBug() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        type: 'default',
        description: '',
        priority: 'default',
        etat: 'default'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    

        try {
            const response = await fetch('/api/signal-bug', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Bug signalé avec succès');
                router.push('/gestion-bug');
            } else {
                console.error('Erreur:', data.message || 'Erreur lors de la soumission du bug');
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        }
    };

    return (
        <div>

            <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">
                <div className="bg-white shadow-2xl p-3 rounded-md w-96">
                    <div className="flex justify-between items-center font-bold text-xl">
                        <div className="mb-2 p-1 rounded-full">
                            Signaler un bug
                        </div>
                        <div className=''>
                            <a href="/gestion-bug"><FiDelete className='w-5 h-5' /></a>
                        </div>

                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-gray-600">
                            <label htmlFor="type" className="block pb-2 font-medium text-gray-700 text-md">Type de bug</label>
                            <select name='type' id="type" onChange={handleChange} className="border-gray-300 pl-3 border rounded-md w-full h-8 outline-none">
                                <option value="default" className='text-gray-200'>Selectionner</option>
                                <option value="asc">Ascendant</option>
                                <option value="desc">Descendant</option>
                            </select>
                        </div>

                        <div className="mb-4 text-gray-600">
                            <label htmlFor="description" className="block pb-3 font-medium text-gray-700 text-md">Description</label>
                            <textarea  name='description'
                                id="description" 
                                onChange={handleChange}
                                placeholder='Description du bug' 
                                className='border-gray-300 pl-3 border rounded-md w-full h-24 outline-none'
                            ></textarea>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <label  htmlFor="priority" className="block pb-3 font-medium text-gray-600 text-md">Priorite</label>
                                <select name='priority' id="priority" onChange={handleChange} className='border-gray-300 pt-1 border rounded-md w-40 h-8 text-gray-600 outline-none'>
                                    <option value="default">Selectionner</option>
                                    <option value="asc">Ascendant</option>
                                    <option value="desc">Descendant</option>
                                </select>
                            </div>
                            <div className=''>
                                <label htmlFor="etat" className="block pb-3 font-medium text-gray-600 text-md">Etat</label>
                                <select name='etat' id="etat" onChange={handleChange} className='border-gray-300 pt-1 border rounded-md w-40 h-8 text-gray-600 outline-none'>
                                    <option value="default">Selectionner</option>
                                    <option value="asc">Ascendant</option>
                                    <option value="desc">Descendant</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <div className='flex items-center'>
                                <button
                                    type="reset"
                                    className="border-gray-300 pt-1 border rounded-md w-40 h-8 text-black"
                                >
                                    Annuler
                                </button>
                            </div>
                            <div className=''>
                                <button
                                    type="submit"
                                    className="bg-violetclair hover:bg-violet pt-1 rounded-md w-40 h-8 text-white"
                                >
                                    Créer maintenant
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

