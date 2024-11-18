"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // vérification et de réinitialisation du mot de passe
  const handlePasswordReset = async (e :any) => {
    e.preventDefault();
    setError(''); 
    // Vérifiez que les mots de passe correspondent 
    if (password.length < 8) {
      setError("Le mot de passe doit comporter au moins 8 caractères.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      // vérifier et enregistrer le mot de passe
      const response = await fetch("/api/check-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (data.success) {
        router.push("/"); 
      } else {
        setError(data.message || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe :", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      <main className="flex justify-center items-center bg-gray-100 shadow-2xl rounded-md min-h-screen font-inter">
        <div className="bg-white shadow-2xl p-6 rounded-md w-96">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-4 p-2 rounded-full">
              <img src="/assets/images/Featuredicon.svg" alt="" className="w-12 h-12" />
            </div>
            <h3 className="mb-2 font-semibold text-xl">Définir un nouveau mot de passe</h3>
            <p className="mb-4 text-center text-gray-600">
              Votre nouveau mot de passe doit être différent des précédents.
            </p>
          </div>

          {error && <p className="text-red-500">{error}</p>} 

          <form onSubmit={handlePasswordReset}>
            <div className="mb-4 text-gray-700">
              <label htmlFor="password" className="block font-medium text-gray-700 text-sm">Mot de passe</label>
              <input
                type="password"
                id="mpassworddp"
                name="password"
                className="border-gray-300 mt-1 px-2 border rounded-md w-full h-8 outline-none"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <small className="text-gray-700">Doit comporter au moins 8 caractères.</small>
            </div>

            <div className="mb-4 text-gray-700">
              <label htmlFor="confirm-password" className="block font-medium text-gray-700 text-sm">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="border-gray-300 mt-1 px-2 border rounded-md w-full h-8 outline-none"
                placeholder="Confirmez votre mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-violetclair hover:bg-violet pt-1 rounded-md w-full h-8 text-white"
              >
                Réinitialiser le mot de passe
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
