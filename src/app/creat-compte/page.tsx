'use client';

import { usePathname, useRouter } from 'next/navigation'; 
import { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

export default function CreateCompte() {
   const pathName = usePathname();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('admin'); 
    const [error, setError] = useState('');
    const router = useRouter(); 
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Veuillez entrer un email valide.");
            return;
        }

        // Validation du rôle
        if (!['admin', 'user'].includes(role)) {
            setError("Veuillez sélectionner un rôle valide.");
            return;
        }

        // Envoi des données
        try {
            const response = await fetch('/api/creer-compte', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, role }),
            });

            if (response.ok) {
                console.log(alert);
                alert("Compte créé avec succès !");
                router.push('/administrateur'); 
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Une erreur est survenue.");
            }
        } catch (err) {
            setError("Une erreur est survenue! Veuillez réessayer.");
        }
    };

    return (
        <>
            <main className="flex justify-center items-center bg-gray-100 min-h-screen font-inter">
                <div className="bg-white shadow-2xl p-6 rounded-lg w-96">
                    <div className="flex items-center">
                        <h3 className="mb-2 font-semibold text-xl">Création de compte</h3>
                        <div className="ml-auto cursor-pointer">
                            <a href="/administrateur" className={`${pathName ==="/administrateur" ? '' : ''}`}>
                            <TiDeleteOutline className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                       
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="jeanphilippe@gmail.com"
                                className="block border-gray-300 shadow-sm mt-2 p-1 border rounded-md w-full text-md outline-none"
                            />
                            {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
                        </div>

                   
                        <div className="mt-4">
                            <select
                                id="role"
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="block border-gray-300 shadow-sm mt-2 p-1 border rounded-md w-full text-md outline-none"
                            >
                                <option value="admin">Administrateur</option>
                                <option value="user">Utilisateur</option>
                            </select>
                        </div>

                    
                        <div className="flex justify-center mt-4">
                           <div className='ml-14'>
                           <button
                                type="reset"
                                className="border-gray-400 bg-gray-100 hover:bg-gray-200 mr-4 px-3 py-1 border rounded-md text-black"
                                onClick={() => {
                                    setEmail('');
                                    setRole('admin');
                                    setError('');
                                }}
                            >
                                Annuler
                            </button>
                           </div>
                            <div className='ml-auto'>
                            <button
                                type="submit"
                                className="border-gray-400 bg-purple-500 hover:bg-purple-600 px-3 py-1 border rounded-md text-white"
                            >
                                Créer maintenant
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
