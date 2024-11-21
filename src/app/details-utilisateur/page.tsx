import { BsPerson } from "react-icons/bs";
export default function DetailsUtilisateur() {
    return (

        <div className="flex justify-center items-center bg-gray-50 p-24 w-full h-full font-inter">
 
            <div className="space-y-6 bg-white shadow-sm p-6 rounded-lg w-full max-w-6xl">

                <header className="flex justify-between items-center mb-6 border-b">
                  <div className="pb-4">
                  <h1 className="font-semibold text-2xl text-gray-800">Informations personnelles</h1>
                  <p className="text-gray-500 text-sm">Mettez a jour les acces et les information personnelles ici .</p>
                  </div>
                    <div className="flex space-x-4">
                        <button  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-gray-700 transition">
                            Annuler
                        </button>
                        <button className="bg-violetclair hover:bg-violet px-4 py-2 rounded-md font-medium text-white transition">
                            Enregistrer
                        </button>
                    </div>
                </header>
                <div className="flex items-center ml-4">
                    <div className="w-60">
                        <label htmlFor="photo" className="block font-medium text-gray-700 text-md">
                            Photo de profil
                        </label>
                    </div>
                    <div className="w-2/3">
                       
                        <div className="flex justify-center items-center bg-gray-300 p-2 rounded-full w-12 h-12">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative rounded-md text-violet hover:text-violetclair cursor-pointer f focus-within:outline-none"
                                        >
                                            <BsPerson className="w-8 h-8" />
                                            <input
                                                type="file"
                                                id="file-upload"
                                                name="file-upload"
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>
                        </div>
                   
                </div>
                <form method="POST" className="">
                    <div className="flex flex-wrap items-center mb-4 ml-4">
                        <div className="flex w-60">
                            <label htmlFor="name" className="flex font-medium text-gray-700 text-md">
                                Nom
                            </label>

                        </div>
                        <div className="flex w-1/3">

                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Jeans"
                                className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-80 h-10 text-md outline-none"
                            />
                        </div>
                        <div className="ml-10 w-1/3">

                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="family-name"
                                placeholder="Philippe"
                                className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-80 h-10 text-md outline-none"
                            />
                        </div>
                    </div>


                    <div className="flex items-center mb-4 ml-4">
                        <div className="flex w-60">
                            <label htmlFor="email" className="block font-medium text-gray-700 text-md">
                                Email Electronique
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="jeanphilipp.@gmaiil.com"
                                className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-full h-10 text-md outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-4 ml-4">
                        <div className="flex w-60">
                            <label htmlFor="role" className="block font-medium text-gray-700 text-sm">
                                Role
                            </label>
                        </div>
                        <div className="w-2/3">
                            <select className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-full h-10 text-md outline-none">
                                <option value="default">Administrateur</option>
                                <option value="">Administrateur</option>
                                <option value="">Utilisateur</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center mb-4 ml-4">
                        <div className="flex w-60">
                            <label htmlFor="phone" className="block font-medium text-gray-700 text-sm">
                                Authentification
                            </label>
                        </div>
                        <div className="pb-4 w-2/3">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="(+225) 0704684645"
                                className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-full h-10 text-md outline-none"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
