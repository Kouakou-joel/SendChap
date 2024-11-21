import { BsPerson } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";
export default function DetaiUtils() {
    return (
        <div className="flex flex-row items-center mt-14 w-full h-full">
            <div className="flex flex-col w-64 h-full"></div>
            <div className="flex flex-col w-4/5 h-full">
                <header className="flex justify-between items-center mb-6 border-b">
                    <div className="pb-4">
                        <h1 className="font-semibold text-2xl text-gray-800">Detail utilisateur</h1>
                        <p className="text-gray-500 text-sm">consullte les informations .</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-violetclair hover:bg-violet px-4 py-2 rounded-md font-medium text-white transition">
                            Certifier le compte
                        </button>
                        <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-md font-medium text-white transition">
                            Avertissement
                        </button>
                    </div>
                </header>
                <div className="flex">
                    <div className="w-60 h-full">
                        <div className="pt-8">
                            <h1 className="pb-2 text-xl">Information personnelle</h1>
                            <p className="text-gray-500 text-sm">Historiques des tranactions</p>
                        </div>
                    </div>
                    <div className="w-4/5 h-full">
                        <div className="space-y-6 bg-white shadow-sm p-6 rounded-lg w-full max-w-6xl">
                            <div className="flex items-center ml-4">
                                <div className="w-60">
                                    <label htmlFor="photo" className="block font-medium text-gray-700 text-md">
                                        Photo de profil
                                    </label>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex justify-center items-center bg-gray-300 p-2 rounded-full w-12 h-12">
                                       
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
                                            className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-60 h-10 text-md outline-none"
                                        />
                                    </div>
                                    <div className="ml-10 w-1/3">

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="family-name"
                                            placeholder="Philippe"
                                            className="block border-gray-300 shadow-sm mt-2 p-2 border rounded-md w-60 h-10 text-md outline-none"
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
                                <div className="flex items-center ml-4">
                                    <div className="w-60">
                                        <label htmlFor="photo" className="block font-medium text-gray-700 text-md">
                                            Certification du compte
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="bg-gray-300 p-3 rounded-full w-14 h-14 text-center">
                                            <BsPerson className="w-8 h-8" />

                                        </div>
                                    </div>

                                </div>
                                <div className="flex">
                                    <div className="w-60 h-full"></div>
                                    <div className="flex pt-4 w-2/3">
                                        <div className="w-1/2 h-full">

                                            <div className="flex justify-center border-2 border-gray-300 mt-2 px-6 py-14 border-dashed rounded-lg">
                                                <div className="text-center">
                                                    <HiOutlinePhoto aria-hidden="true" className="mx-auto w-12 h-12 text-gray-400" />
                                                    <div className="flex mt-4 text-gray-600 text-sm">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative bg-white rounded-md focus-within:ring-2 focus-within:ring-violet focus-within:ring-offset-2 font-semibold text-violetclair hover:text-violet cursor-pointer focus-within:outline-none"
                                                        >
                                                            <span>joindre la piece </span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                            />
                                                        </label>
                                                    </div>
                                                    <p className="mt-2 text-gray-500 text-xs">PNG, JPG, GIF </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pl-6 w-1/2 h-full">

                                            <div className="flex justify-center border-2 border-gray-300 mt-2 px-6 py-14 border-dashed rounded-lg">
                                                <div className="text-center">

                                                    <HiOutlinePhoto aria-hidden="true" className="mx-auto w-12 h-12 text-gray-400" />
                                                    <div className="flex mt-4 text-gray-600 text-sm">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative bg-white rounded-md focus-within:ring-2 focus-within:ring-violet focus-within:ring-offset-2 font-semibold text-violet hover:text-violetclair cursor-pointer focus-within:outline-none"
                                                        >
                                                            <span> joindre la piece</span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                            />
                                                        </label>
                                                    </div>
                                                    <p className="mt-2 text-gray-500 text-xs">PNG, JPG, GIF </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
