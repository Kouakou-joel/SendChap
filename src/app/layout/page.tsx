// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import { ReactNode } from 'react';

// interface LayoutProps {
//     children: ReactNode;
//   }

  
// export default function Layout({ children } : LayoutProps) {
//     return (
//         <div className="flex bg-gray-100 h-screen font-inter">
//             <aside className="border-gray-200 bg-white border-r w-64">
//                 <div className="flex items-center p-4">
//                     <Image src="/assets/images/app icons.svg" className="w-8 h-8" alt="Logo" width={50} height={50} />
//                     <h3 className="pb-3">Send chap</h3>
//                 </div>
//                 <nav className="flex flex-col space-y-2 mt-5 text-sm">
//                     <ul role="list" className="space-y-1 px-4">
//                         <li>
//                             <Link href="/dashboard" className="flex items-center hover:bg-gray-100 p-2 rounded-md text-gray-700">
//                                 <img src="/assets/images/element-7.svg" alt="" className="pr-2" />
//                                 Tableau de bord
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/dashboard/utilisateurs" className="flex items-center hover:bg-gray-100 p-2 rounded-md text-gray-700">
//                                 <img src="/assets/images/users.svg" alt="" className="pr-2" />
//                                 Gestion des utilisateurs
//                             </Link>
//                         </li>
//                         {/* Ajoutez d'autres liens ici */}
//                     </ul>
//                 </nav>
//             </aside>
//             <main className="flex-1">
//                 <header className="flex justify-between items-center bg-white shadow p-4">
//                     <button type="button" className="text-gray-500 hover:text-gray-700">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>
//                     </button>
//                 </header>
//                 <div className="flex-1 p-6">
//                     {children} {/* Le contenu de chaque page sera rendu ici */}
//                 </div>
//             </main>
//         </div>
//     );
// }
