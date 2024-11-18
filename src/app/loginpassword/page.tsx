"use client";
import Link from 'next/link';
import { Router } from 'next/router';
import { useState } from 'react';

export default function LoginPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // validation d'email
    const validateEmail = (email :any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // vérifier l'existence de l'email et demander la réinitialisation
    const handleResetPassword = async () => {
        if (!validateEmail(email)) {
            setMessage("Veuillez entrer un email valide.");
            return;
        }

        try {
            const response = await fetch("/api/check-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.exists) {
                setMessage("Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.");
            } else {
                setMessage("Cet email n'est pas enregistré.");
            }
        } catch (error) {
            setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
            console.error("Erreur lors de la vérification de l'email:", error);
        }
    };

    return (
        <>
            <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">
                <div className="bg-white shadow-2xl p-6 rounded-md w-96">
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 mb-4 p-2 rounded-full">
                            <img src="/assets/images/Featured icon.svg" alt="" className="w-12 h-12" />
                        </div>
                        <h3 className="mb-2 font-semibold text-xl">Mot de passe oublié ?</h3>
                        <p className="mb-4 text-center text-gray-600">
                            Pas de problème, nous vous enverrons des instructions de réinitialisation.
                        </p>
                    </div>

                    <div className="mb-4 text-gray-700">
                        <label htmlFor="email" className="block font-medium text-gray-700 text-sm">Email</label>
                        <input type="email" id="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}
                            className="border-gray-300 mt-1 px-2 border rounded-md w-full h-8 outline-none" placeholder="Entrez votre email" required
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="button" onClick={handleResetPassword}  className="bg-violetclair hover:bg-violet pb-1 rounded-md w-full h-8 text-white"
                        >
                            Demande de réinitialisation
                        </button>
                    </div>

                    {message && <p className="text-center text-gray-600">{message}</p>}

                    <Link href="/" className="block text-center text-violetclair no-underline">
                        Retour à la connexion
                    </Link>
                </div>
            </main>
        </>
    );
}
