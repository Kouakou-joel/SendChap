"use client";
import Link from 'next/link';
export default function Courrier() {
    return (
        <>
            <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">
                <div className="bg-white shadow-2xl p-6 rounded-md w-96">
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 mb-4 p-2 rounded-full">
                            <img src="/assets/images/Featured icon.svg" alt="" className='w-12 h-12' />
                            
                        </div>
                        <h3 className="mb-2 font-semibold text-xl">Vérifiez votre courrier électronique</h3>
                        <p className="mb-4 text-center text-gray-600">
                        Nous avons envoyé un lien de réinitialisation du mot de passe à votre adresse e-mail.
                        </p>
                    </div>
                    <div className=''>
                        <p>Vous n'avez pas reçu l'e-mail ?</p>
                        <a href="/loginpassword" className="block text-center no-underline text-violetclair">Cliquez pour renvoyer</a>
                    </div>
                    <div className="mt-4 text-gray-700">
                        <Link href="/" >
                            <button type="submit" className="border border-gray-400 pb-1 w-full h-8 rounded-md text-violet">
                                Retour à la connexion
                            </button>
                        </Link>
                    </div>


                </div>
            </main>
        </>
    );
}
