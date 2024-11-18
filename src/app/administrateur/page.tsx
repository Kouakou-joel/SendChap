"use client"
import DashboardLayout from "../components/navbar";
import Layout from "../layout";
import { useState } from "react";
export default function Administrateur() {
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("Default");
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    }
    const handleSortChange = (e: any) => {
        setSortOption(e.target.value)
    }
    return (
        <>
            <DashboardLayout toggleInfo={"Administration"} additInfo={"Gestion des utilisateurs"}>
                <header className="flex justify-between items-center bg-transparent mb-10">
                    <div className="flex space-x-10">
                        <h2 className="text-xl">Transactions</h2>
                        <div className="shadow-xl pl-1 border rounded-2xl w-40 text-sm outline-none"  ></div>
                    </div>
                    <div className="flex">

                        <button className="btn bg-violet p-2 shadow-xl text-white rounded-xl">Creer un compte</button>
                    </div>
                </header>
                <nav className="flex justify-between items-center bg-transparent">
                    <div className="flex space-x-8 bg-clip-border rounded-xl">
                        <div className="flex rounded-xl shadow-lg border outline-none p-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3297 1.04166H4.74295C4.08178 1.04166 3.44769 1.30431 2.98017 1.77183C2.51265 2.23934 2.25 2.87344 2.25 3.53461V5.57052C2.25487 6.21758 2.51114 6.8374 2.96465 7.29897L6.08915 10.465C6.56587 10.9471 6.83186 11.5986 6.82872 12.2766V16.6392C6.82764 17.065 6.94426 17.4828 7.16569 17.8465C7.38712 18.2102 7.70475 18.5056 8.08351 18.7001C8.46217 18.8947 8.88685 18.9821 9.31159 18.9528C9.73634 18.9235 10.145 18.7786 10.4934 18.5339L11.6235 17.7029C11.9135 17.4981 12.1502 17.2267 12.3136 16.9115C12.477 16.5962 12.5624 16.2464 12.5625 15.8913V12.4012C12.5589 12.0397 12.631 11.6814 12.7741 11.3494C12.9173 11.0174 13.1282 10.719 13.3935 10.4733L16.9086 7.34052C17.1683 7.10818 17.3765 6.82397 17.5196 6.50622C17.6627 6.18846 17.7377 5.84423 17.7395 5.49573V3.50137C17.7313 2.86011 17.4763 2.24668 17.0275 1.78859C16.5787 1.33049 15.9706 1.06298 15.3297 1.04166ZM3.5214 5.57052V3.50137C3.5214 3.34134 3.55306 3.1829 3.61455 3.03516C3.67604 2.88742 3.76615 2.7533 3.87969 2.64053C3.99323 2.52776 4.12796 2.43857 4.27611 2.37809C4.42427 2.31761 4.58293 2.28704 4.74295 2.28813H8.72336L5.2083 7.77263L3.87873 6.42643C3.76521 6.31472 3.67512 6.18148 3.61377 6.0345C3.55241 5.88753 3.52101 5.72979 3.5214 5.57052ZM16.5429 5.49573C16.544 5.6675 16.509 5.83758 16.4403 5.99502C16.3716 6.15245 16.2707 6.29375 16.1441 6.40981L12.6207 9.54262C12.218 9.90206 11.8959 10.3425 11.6753 10.8352C11.4548 11.3278 11.3409 11.8615 11.341 12.4012V15.908C11.3407 16.0624 11.3036 16.2146 11.2328 16.3519C11.162 16.4892 11.0595 16.6076 10.9338 16.6974L9.79533 17.5284C9.63532 17.6339 9.44993 17.6946 9.25849 17.7042C9.06704 17.7137 8.87653 17.6718 8.70681 17.5827C8.5371 17.4936 8.39437 17.3606 8.29352 17.1976C8.19266 17.0346 8.13735 16.8475 8.13337 16.6558V12.2766C8.13442 11.2725 7.74041 10.3084 7.03647 9.59248L6.10576 8.68671L10.2108 2.28813H15.3297C15.489 2.28813 15.6468 2.31951 15.794 2.38048C15.9412 2.44146 16.0749 2.53082 16.1876 2.64348C16.3002 2.75614 16.3896 2.88989 16.4506 3.03708C16.5115 3.18428 16.5429 3.34204 16.5429 3.50137V5.49573Z" fill="#808080" />
                            </svg>
                            <select value={sortOption} onChange={handleSortChange} className="outline-none">
                                <option value="default">Trier par</option>
                                <option value="asc">Ascendant</option>
                                <option value="desc">Descendant</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex from-white to-white shadow-blue-gray-500/40 shadow-lg p-1 bg-clip-border border rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0058 14.0038C16.0797 12.7062 16.7251 11.041 16.7251 9.22501C16.7251 5.08287 13.3672 1.72501 9.2251 1.72501C5.08296 1.72501 1.7251 5.08287 1.7251 9.22501C1.7251 13.3671 5.08296 16.725 9.2251 16.725C11.0411 16.725 12.7064 16.0796 14.004 15.0056L17.0576 18.0591C17.3342 18.3357 17.7827 18.3357 18.0593 18.0591C18.3359 17.7825 18.3359 17.334 18.0593 17.0574L15.0058 14.0038ZM9.2251 15.335C5.85065 15.335 3.11513 12.5995 3.11513 9.22501C3.11513 5.85056 5.85065 3.11504 9.2251 3.11504C12.5995 3.11504 15.3351 5.85056 15.3351 9.22501C15.3351 12.5995 12.5995 15.335 9.2251 15.335Z" fill="#808080" />
                        </svg>
                        <input type="text" name="" className="bg-transparent pl-2 w-96 outline-none" placeholder="Recherche" value={search}
                            onChange={handleSearch} />
                    </div>


                </nav>
                <h1 className="">Bienvenue sur le tableau de bord</h1>
                <p>Ceci est le contenu principal de administrateur.</p>
                {/* Ajoutez tout autre contenu spécifique au tableau de bord ici */}
            </DashboardLayout>
        </>
    );
}