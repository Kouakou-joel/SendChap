import React from 'react'
import Transaction from '../components/transaction'
export default function DetailUtilisat() {
  return (
    <>
     <div className="flex flex-row items-center mt-14 w-full h-full">
            <div className="flex flex-col w-64 h-full"></div>
            <div className="flex flex-col w-4/5 h-full">
                <header className="flex justify-between items-center mb-6">
                    <div className="pb-4">
                        <h1 className="font-semibold text-2xl text-gray-800">Detail utilisateur</h1>
                        <p className="text-gray-500 text-sm">consullte les informations .</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-gray-100 hover:bg-gray-50 px-4 py-2 rounded-md font-medium text-black transition">
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
                            <h1 className="pb-2 text-gray-500 text-xl">Information personnelle</h1>
                            <button className='bg-gray-100 p-2 rounded-sm text-l'>Historiques des tranactions</button>
                        </div>
                    </div>
                    <div className="w-4/5 h-full">
                    <Transaction />
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
