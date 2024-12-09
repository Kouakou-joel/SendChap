
import DashboardLayout from "../components/navbar";
import Layout from "../layout";

export default function Switch() {
    return (
        <>
            <DashboardLayout utilityInfo={"Switch des agregateurs"} commit={"Commissions factures aux utilisateurs et partenaires "}>

                <div className="flex pt-10">
                    <div className="w-1/4 font-MerriweatherSans">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className="relative shadow-sm mx-4 -mt-6 border rounded-xl h-24 overflow-hidden">

                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-6 font-WorkSans">
                    <h2 className="font-semibold">Switch par réseau</h2>
                    <div className="flex bg-neutral-100 rounded-sm w-80 h-8">
                        <div className="items-center bg-transparent px-4 py-1 h-1/4">Moov</div>
                        <div className="items-center bg-transparent px-4 py-1 h-1/4">Orange</div>
                        <div className="items-center bg-transparent px-4 py-1 h-1/4">MTN</div>
                        <div className="items-center bg-transparent px-4 py-1 h-1/4">Wave</div>
                    </div>
                </div>

                <div className="flex py-10">
                    <div className="w-1/3">
                        <div className="relative justify-center items-center mx-4 -mt-6 h-24 overflow-hidden">

                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="relative justify-center items-center mx-4 -mt-6 h-24 overflow-hidden">

                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="relative justify- items-center mx-4 -mt-6 h-20 overflow-hidden">

                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="relative from-white to-white shadow-sm mx-4 -mt-4 px-4 border rounded-xl h-96 overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-6 font-WorkSans">
                            <h2 className="font-semibold text-l"> Trafic des utilisateurs par réseau</h2>
                            <div><button className="px-4 py-2">Voir le rapport</button></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="bg-white border min-w-full">
                                <thead>
                                    <tr className="bg-gray-100 border-b font-medium text-gray-700 text-left text-sm">

                                        <th className="bg-white px-4 py-2"> Moov</th>
                                        <th className="px-4 py-2">Orange</th>
                                        <th className="px-4 py-2">MTN</th>
                                        <th className="px-4 py-2">Wave</th>
                                    </tr>
                                </thead>

                            </table>

                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}
