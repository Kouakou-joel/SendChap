"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Redirection si déjà connecté
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');

    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Veuillez entrer un email valide.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError(data.message || "Identifiants incorrects.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      <main className="flex flex-row justify-center shadow-2xl max-sm:shadow-2xl max-md:shadow-2xl max-lg:shadow-2xl rounded-lg w-screen h-min font-inter">

        <div className="flex flex-col bg-white w-1/2 max-md:w-full h-min">
          <div className="flex justify-center items-center bg-transparent m-14 max-sm:m-2 max-md:m-2 max-lg:m-3 w-50 h-full">
            <div className="m-14 max-sm:m-2 max-md:m-2 max-lg:m-2">
              <img src="/assets/images/app icons.svg" alt="" className="mb-6 max-md:mb-4 w-16 max-sm:w-14 max-md:w-14 h-16 max-sm:h-14 max-sm:md-4 max-md:h-14 max-lg:" />
              <div className="justify-center">
                <h1 className="mt-3 text-4xl text-black max-sm:text-violet">connexion</h1>
                <div className="pr-14 text-gray-600">
                  <p className="mt-3 md:text-base">Bienvenue à nouveau! veuillez saisir</p>
                  <span>nos coordonnées.</span>
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit} id="envoie" className="max-sm:w-full">
                <div className="flex flex-col pt-3 text-gray-700">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="border-gray-300 p-2 border rounded-md w-50 h-8 md:text-base outline-none" placeholder="Entrez votre Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="flex flex-col pt-3 text-gray-700">
                  <label htmlFor="mdp">Mot de passe</label>
                  <input type="password" id="mdp" name="mdp" className="border-gray-300 p-2 border rounded-md w-50 h-8 md:text-base outline-none" placeholder="" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mt-3 text-gray-600 md:text-base">
                  <input id="remember" name="remember" type="checkbox" className="" />
                  <label htmlFor="remember" className="" >
                    Se souvenir pendant 30 jours
                  </label>
                  <div className="flex flex-col pt-3">
                    <button type="submit" name="Envoie" className="border-gray-300 bg-violetclair border rounded-md w-50 h-8 text-white">Se connecter</button>
                  </div>
                  <a href="/loginpassword" className="flex justify-center items-center pt-2 text-violet">Mot de passe oublié</a>
                </div>
              </form>
            </div>
          </div>
          <footer className="py-4 md:text-sm">
            <p className="text-gray-500 text-sm">&copy; DevStudio</p>
          </footer>
        </div>
        <div className="flex flex-col justify-center items-center max-md:hidden bg-[url('/assets/images/Section.svg')] w-1/2 max-lg:w-1/2">
        </div>

      </main>
    </>
  );
}
