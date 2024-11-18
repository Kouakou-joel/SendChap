"use client";
import Link from 'next/link';
export default function Reinitialisation() {
    return (
        <>
            <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">
                <div className="bg-white shadow-2xl p-6 rounded-md w-96">
                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 mb-4 p-2 rounded-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg> 
                        </div>
                        <h3 className="mb-2 font-semibold text-xl">Reinitialisation du mot de passe</h3>
                        <p className="mb-4 text-center text-gray-600">
                         Votre mot de passe a été réinitialisé avec succès. Cliquez ci-dessous pour vous connecter.
                        </p>
                    </div>
                    
                    <div className="mt-4">
                        <Link href="/newpassword">
                            <button type="submit" className="border-gray-400 bg-violetclair pb-1 border rounded-md w-full h-8 text-white">
                                Retour à la connexion
                            </button>
                        </Link>
                    </div>
                    


                </div>
            </main>
        </>
    );
}
