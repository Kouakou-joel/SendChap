'use client';
import React, { useState, useEffect } from "react";
import { WiDirectionRight } from "react-icons/wi";

const Transaction = () => {

    const [transaction, setTransacttion] = useState([]);

    useEffect(() => {
        const fectchTransaction = async () => {
            try {
                const res = await fetch('/api / transaction');
                const data = await res.json();
                if (data.success) {
                    setTransacttion(data.data);

                }
                else {
                    console.error("Erreur lors de lla recuperation des transactions");
                }
            } catch (error) {
                console.error("erreur lorrs de l appel a l api : ", error);
            }
        };

    }, []);

    return (
        <div className="items-center px-6 w-full h-10">
            <header className="border-gray-400 mb-4 border-b">
                <div className="flex pt-4">
                    <div className="text-black text-xl">Tansactions recentes</div>
                    <div className="ml-auto">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99992 3.25C10.5062 3.25 10.9166 3.66041 10.9166 4.16667C10.9166 4.67293 10.5062 5.08333 9.99992 5.08333C9.49366 5.08333 9.08325 4.67293 9.08325 4.16667C9.08325 3.66041 9.49366 3.25 9.99992 3.25Z" fill="#999999" stroke="#999999" />
                            <path d="M11.6666 9.99992C11.6666 9.07944 10.9204 8.33325 9.99992 8.33325C9.07944 8.33325 8.33325 9.07944 8.33325 9.99992C8.33325 10.9204 9.07944 11.6666 9.99992 11.6666C10.9204 11.6666 11.6666 10.9204 11.6666 9.99992Z" fill="#999999" />
                            <path d="M11.6666 15.8334C11.6666 14.9129 10.9204 14.1667 9.99992 14.1667C9.07944 14.1667 8.33325 14.9129 8.33325 15.8334C8.33325 16.7539 9.07944 17.5001 9.99992 17.5001C10.9204 17.5001 11.6666 16.7539 11.6666 15.8334Z" fill="#999999" />
                        </svg>
                    </div>
                </div>
                <div className="py-3 text-zinc-400 ytext-sm">Aujourd'hui</div>

            </header>
            <div className="">
                <div className="flex justify-between pb-3">
                    <div className="flex">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#EEEEEC" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.8958 26.1033C14.2582 26.4657 14.8458 26.4657 15.2082 26.1033L24.518 16.7935V23.8331C24.518 24.3457 24.9335 24.7612 25.446 24.7612C25.9585 24.7612 26.374 24.3457 26.374 23.8331V14.5531C26.374 14.0406 25.9585 13.6251 25.446 13.6251H16.166C15.6534 13.6251 15.2379 14.0406 15.2379 14.5531C15.2379 15.0656 15.6534 15.4811 16.166 15.4811H23.2056L13.8958 24.7909C13.5334 25.1533 13.5334 25.7409 13.8958 26.1033Z" fill="#1A1A1A" />
                        </svg>
                        <div>
                            <p className="text-black text-l">
                                0149674843(karime)</p>
                            <div className="flex text-sm text-zinc-400">echec de transaction a 10h00</div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-zinc-400">10.000FCFA</div>
                        <div className="flex space-x-2">
                            <img src="/assets/images/Group 21604.png" alt="" />
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00017 6.66657V6.66723M9.3335 7.9999V8.00057M8.00017 9.33323V9.3339M6.66683
                                 7.9999V8.00057M12.6668 7.9999L8.00017 12.6666C7.69488 12.9781 7.33087 13.226 6.92918 13.396C6.52749 13.5659 6.09609 13.6546 5.65993 
                                 13.6568C5.22377 13.659 4.7915 13.5747 4.38811 13.4088C3.98472 13.2429 3.61823 12.9987 3.30981 12.6903C3.00139 12.3818 2.75718 12.0153 2.59128 11.612C2.42538 11.2086 2.3411 10.7763 2.3433 10.3401C2.34551 9.90398
                                  2.43415 9.47258 2.60411 9.07089C2.77408 8.6692 3.02198 8.30519 3.3335 7.9999L8.00017 3.33323C8.62113 2.72469 9.45717 2.38579 10.3266 2.39018C11.196 2.39457 12.0286 2.7419 12.6434 3.35668C13.2582 3.97147 13.6055
                                   4.80404 13.6099 5.67347C13.6143 6.5429 13.2754 7.37893 12.6668 7.9999Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <img src="/assets/images/Rectangle 8.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#EEEEEC" />
                            <path d="M34.7346 18.9612C34.751 18.1942 34.4665 17.4513 33.9421 16.8913C33.4176 16.3314 32.6948 15.999 31.9284 15.9653H29.991L28.5929 13.6584C28.4899 13.4967 28.3283 13.3814 28.142 13.3367C27.9557 13.292 27.7593 13.3214 27.5942 13.4187C27.4259 13.5379 27.3087 13.7162 27.2661 13.918C27.2235 14.1198 27.2587 14.3302 27.3645 14.5072L28.2533 15.9653H19.7348L20.6236 14.5272C20.6888 14.4371 20.735 14.3346 20.7593 14.226C20.7836 14.1175 20.7856 14.0051 20.765 13.8957C20.7444 13.7864 20.7018 13.6824 20.6397 13.5901C20.5776 13.4977 20.4974 13.419 20.4039 13.3588C20.2407 13.258 20.0443 13.2256 19.8574 13.2686C19.6704 13.3115 19.508 13.4265 19.4052 13.5885L17.9472 15.8854H16.0697C15.6831 15.902 15.3037 15.9949 14.9531 16.1587C14.6026 16.3225 14.2879 16.554 14.0271 16.8398C13.7663 17.1257 13.5646 17.4603 13.4335 17.8243C13.3025 18.1884 13.2447 
                            18.5748 13.2635 18.9612C13.2369 19.6298 13.4348 20.288 13.8257 20.8309C14.2167 21.3739 14.7781 21.7704 15.4206 21.9572L16.8387 31.1848C16.9734 32.1563 17.4492 33.0483 18.1809 33.7014C18.9127 34.3545 19.8528 34.7261 20.8333 34.75H27.2946C28.2848 34.7261 29.2333 34.3466 29.9667 33.681C30.7002 33.0154 31.1696 32.1081 31.2892 31.1249L32.6075 21.9572C33.2443 21.7649 33.7991 21.366 34.1842 20.8236C34.5694 20.2811 34.763 19.6259 34.7346 18.9612ZM29.7413 30.8453C29.6683 31.4625 29.3781 32.0335 28.9224 32.4562C28.4668 32.8789 27.8756 33.1256 27.2547 33.1521H20.7933C20.1746 33.124 19.5856 32.878 19.1306 32.4577C18.6756 32.0374 18.3838 31.4699 18.3067 30.8552L16.9485 21.9572H31.0496L29.7413 30.8453ZM31.9284 20.4193H16.0697C15.705 20.3936 15.3646 20.2271 15.1205 19.955C14.8763 19.6829 14.7476 19.3265 14.7615 18.9612C14.7479 18.7762 14.771 18.5903
                             14.8294 18.4143C14.8879 18.2382 14.9806 18.0755 15.1022 17.9353C15.2237 17.7952 15.3718 17.6805 15.5378 17.5978C15.7039 17.515 15.8846 17.4659 16.0697 17.4533H31.9284C32.1134 17.4659 32.2942 17.515 32.4602 17.5978C32.6263 17.6805 32.7743 17.7952 32.8959 17.9353C33.0175 18.0755 33.1102 18.2382 33.1686 18.4143C33.2271 18.5903 33.2502 18.7762 33.2366 18.9612C33.2505 19.3265 33.1217 19.6829 32.8776 19.955C32.6334 20.2271 32.293 20.3936 31.9284 20.4193ZM20.9431 29.0477V25.2628C20.9431 25.0641 21.0221 24.8736 21.1625 24.7331C21.303 24.5927 21.4935 24.5138 21.6921 24.5138C21.8908 24.5138 22.0813 24.5927 22.2218 24.7331C22.3622 24.8736 22.4411 25.0641 22.4411 25.2628V29.0477C22.4411 29.2463 22.3622 29.4368 22.2218 29.5773C22.0813 29.7178 21.8908 29.7967 21.6921 29.7967C21.4935 29.7967 21.303 29.7178 21.1625 29.5773C21.0221 29.4368 20.9431 29.2463 20.9431
                              29.0477ZM25.5869 29.0477V25.2628C25.5869 25.0641 25.6658 24.8736 25.8063 24.7331C25.9467 24.5927 26.1372 24.5138 26.3359 24.5138C26.5345 24.5138 26.725 24.5927 26.8655 24.7331C27.006 24.8736 27.0849 25.0641 27.0849 25.2628V29.0477C27.0849 29.2463 27.006 29.4368 26.8655 29.5773C26.725 29.7178 26.5345 29.7967 26.3359 29.7967C26.1372 29.7967 25.9467 29.7178 25.8063 29.5773C25.6658 29.4368 25.5869 29.2463 25.5869 29.0477Z" fill="#1A1A1A" />
                        </svg>
                        <div>
                            <p className="text-black text-l">
                                0149674843</p>
                            <div className="text-sm text-zinc-400">payement a 10h00</div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-zinc-400">50.000 FCFA</div>
                        <div className="flex space-x-2">
                            <img src="/assets/images/Rectangle 8.png" alt="" />
                            <WiDirectionRight className="text-2xl text-gray-400" />

                            <img src="/assets/images/Réseau.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Transaction;