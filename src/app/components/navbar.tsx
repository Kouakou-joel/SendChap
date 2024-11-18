import Image from 'next/image';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import SideBar from './sidebar';


type DashboardLayoutProps = {
    children: React.ReactNode;
    title?: string;
    texte?: string;
    navbar: any;
    commit: any;
    util?: string;
    utis?: string;
    utilityInfo?: string;
    toggleInfo: string;
    additInfo: string;
};
export default function DashboardLayout({
    children,
    title,
    texte,
    navbar,
    commit,
    util,
    utis,
    utilityInfo,
    toggleInfo,
    additInfo,

}: DashboardLayoutProps) {
    return (
        <div id="app" className="flex bg-white h-screen font-inter">
            <div style={{ width: "265px" }}>
                <SideBar></SideBar>
            </div>
            <main className="flex flex-col flex-1 p-0 font-inter">
                <header className="flex justify-between items-center bg-white shadow p-4">
                    <div className='flex-col'>
                        <h2 className='text-2xl text-black'>
                            {title}
                            {navbar}
                            {util}
                            {utilityInfo}
                            {toggleInfo}

                        </h2>
                        <p className='text-gray-500'>
                            {texte}
                            {commit}
                            {utis}
                            {additInfo}
                        </p>
                    </div>

                    {/* <button type="button" className="text-gray-500 hover:text-gray-700">
                        <span className="sr-only">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> 
                    </button>  */}
                    <div>
                        <a href="#" aria-label="Topbar Button">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="8" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.4148 18.2641C24.3906 19.7975 24.8436 21.3019 25.7138 22.5786L25.7391 22.6154L25.7459 22.6252L26.3059 23.4415C26.3164 23.4571 26.3265 23.4729 26.3362 23.4889L26.3488 23.5102C26.4511 23.6872 26.5064 23.8866 26.5095 24.0902C26.5098 24.1069 26.5097 24.1237 26.5092 24.1404C26.5151 24.2992 26.4882 24.4576 26.43 24.6061C26.4175 24.6381 26.4035 24.6696 26.3882 24.7004C26.3326 24.812 26.2592 24.9147 26.1706 25.0044C26.1021 25.0737 26.0254 25.1343 25.9423 25.1852C25.8882 25.2184 25.8313 25.2473 25.7723 25.2718C25.6224 25.3339 25.4613 25.3658 25.2985 25.3657H25.2773H22.7266H22.3734H21.0566H20.7034H19.3155H18.9711H17.6455H17.3011H14.7381C14.417 25.3657 14.109 25.2412 13.882 25.0195C13.8745 25.0122 13.8671 25.0048 13.8599 24.9974C13.6485 24.7798 13.5294 24.4917 13.5274 24.1912L13.5274 24.1836C13.5372 23.9432 13.6247 23.7126 13.7765 23.5244L13.7777 23.5229C13.7882 23.5099 13.799 23.4972 13.8102 23.4846L14.3641 22.7418L14.3723 22.7309L14.4022 22.6907C15.389 21.36 15.9069 19.753 15.879 18.1111L15.8787 18.0955L15.8781 18.0656C15.8662 17.2735 16.0947 16.4959 16.5345 15.8307L16.5509 15.806C16.9993 15.1386 17.6413 14.6169 18.3949 14.3077L18.4055 14.3034L18.4101 14.3016C18.6049 14.2257 18.8041 14.1627 19.0066 14.1131C19.1686 14.0734 19.3326 14.0422 19.4979 14.0196C19.721 13.9891 19.9466 13.9743 20.1729 13.9755C20.3001 13.9758 20.4268 13.9816 20.5525 13.9928C20.7104 14.007 20.8668 14.0297 21.0211 14.0607C21.8305 14.2234 22.5804 14.6145 23.1729 15.1942C23.225 15.2452 23.2757 15.2974 23.3248 15.3507C24.0248 16.1108 24.4148 17.0988 24.4148 18.126V18.1347V18.1367V18.2368V18.2641ZM21.0211 12.742C22.1788 12.9243 23.2496 13.4571 24.0814 14.2657C24.1481 14.3305 24.2133 14.3971 24.2769 14.4655C25.209 15.4679 25.7272 16.7722 25.7315 18.126L25.7315 18.1347V18.2641L25.7311 18.2848C25.7092 19.5479 26.0751 20.7882 26.7813 21.8461L26.7835 21.8494L26.8097 21.8883L27.3767 22.7067L27.3845 22.718L27.4194 22.7684C27.6704 23.1457 27.8133 23.5818 27.8333 24.0313C27.8342 24.0511 27.8349 24.071 27.8353 24.0908C27.8358 24.1194 27.8359 24.1479 27.8355 24.1765C27.831 24.4878 27.7674 24.7954 27.6483 25.0835C27.6144 25.1655 27.5761 25.2459 27.5333 25.3244C27.415 25.5415 27.2654 25.7394 27.0899 25.9127C26.9442 26.0565 26.7807 26.1833 26.6024 26.2898C26.4938 26.3547 26.3808 26.4115 26.2645 26.4597C25.9598 26.5862 25.6319 26.6546 25.2985 26.6601H25.2977H24.0434H22.7266H22.3734V26.7981V26.9448C22.3706 26.9648 22.3675 26.9848 22.3642 27.0047L22.3588 27.0357C22.2638 27.5581 21.9888 28.0342 21.5779 28.3842C21.5624 28.3975 21.5466 28.4105 21.5308 28.4233C21.1037 28.7685 20.5661 28.9581 20.0105 28.9583H20.0094L19.999 28.9583C19.449 28.956 18.9173 28.7682 18.4935 28.4277C18.4758 28.4135 18.4583 28.399 18.441 28.3842C18.0301 28.0342 17.7551 27.5581 17.6601 27.0357L17.6583 27.0254C17.6535 26.9986 17.6493 26.9718 17.6455 26.9448V26.7981V26.6601H17.3011H15.9755H14.7381C14.0759 26.6601 13.4405 26.4073 12.9671 25.9564L12.9446 25.9347C12.469 25.4703 12.2018 24.8404 12.2018 24.1836C12.2019 24.1654 12.2022 24.1473 12.2027 24.1292C12.2169 23.6208 12.3889 23.128 12.6967 22.7166L12.7266 22.6765L12.7942 22.5859L13.2888 21.9228L13.3167 21.8858L13.319 21.8828C14.1346 20.7939 14.5677 19.4759 14.5525 18.126L14.5519 18.0964L14.5517 18.0855C14.5356 17.026 14.8437 15.9854 15.437 15.0974L15.4554 15.0701C16.0539 14.1862 16.909 13.4967 17.9115 13.0899L17.9194 13.0867L17.9282 13.0833C18.2768 12.9482 18.6381 12.8476 19.0066 12.7828C19.1208 12.7627 19.2357 12.7461 19.3511 12.7329V12.6984V12.4589V12.39V12.3546V11.9821V11.6888C19.3511 11.6038 19.3682 11.5197 19.4015 11.4412C19.4348 11.3626 19.4837 11.2913 19.5452 11.2312C19.6067 11.1711 19.6798 11.1234 19.7602 11.0909C19.8406 11.0584 19.9268 11.0417 20.0139 11.0417C20.1009 11.0417 20.1871 11.0584 20.2675 11.0909C20.3479 11.1234 20.421 11.1711 20.4825 11.2312C20.5441 11.2913 20.5929 11.3626 20.6262 11.4412C20.6595 11.5197 20.6766 11.6038 20.6766 11.6888V11.9821V12.3273V12.39V12.4589V12.6984C20.772 12.7076 20.867 12.7191 20.9613 12.7329C20.9813 12.7359 21.0012 12.7389 21.0211 12.742ZM18.9711 26.7588V26.7981C18.9797 26.8481 18.9921 26.8971 19.0079 26.9448C19.0182 26.9757 19.0299 27.006 19.043 27.0357C19.1008 27.1665 19.1859 27.285 19.2937 27.3831C19.3059 27.3941 19.3183 27.405 19.3311 27.4155C19.5208 27.5725 19.7609 27.6593 20.0094 27.661L20.0139 27.661C20.265 27.6639 20.5087 27.5782 20.7002 27.4197C20.7112 27.4106 20.722 27.4013 20.7326 27.3918C20.8436 27.2919 20.9305 27.1702 20.9881 27.0357C21.0008 27.006 21.0121 26.9757 21.0219 26.9448C21.0371 26.8971 21.0488 26.8481 21.0566 26.7981V26.76V26.6601H20.7034H20.6411H20.1828H20.0717H20.0253H20.0165H19.9562H19.7686H19.3866H19.3155H18.9711V26.7588ZM12.4756 18.7989C12.5622 18.7872 12.6456 18.759 12.7209 18.7158C12.7963 18.6726 12.8621 18.6152 12.9147 18.547C12.9673 18.4789 13.0055 18.4012 13.0272 18.3186C13.0489 18.2359 13.0537 18.1499 13.0412 18.0654C12.9078 17.2834 12.9906 16.4808 13.2812 15.7406C13.5717 15.0003 14.0593 14.3492 14.6938 13.8545C14.8263 13.7564 14.9163 13.6132 14.9458 13.4534C14.9752 13.2935 14.9421 13.1287 14.8528 12.9916C14.7537 12.8605 14.6069 12.7713 14.4426 12.7424C14.2783 12.7136 14.1089 12.7471 13.9691 12.8363C13.1336 13.4632 12.4855 14.2974 12.0923 15.252C11.6991 16.2066 11.5751 17.2466 11.7333 18.2639C11.7548 18.4179 11.8331 18.5589 11.9535 18.6606C12.0739 18.7623 12.2281 18.8176 12.3873 18.8161L12.4756 18.7989ZM25.8179 12.6636C25.9064 12.6899 25.9883 12.734 26.0584 12.7932C26.8918 13.4264 27.5357 14.2666 27.9228 15.2259C28.3099 16.1853 28.426 17.2285 28.2588 18.2467C28.2373 18.4007 28.159 18.5417 28.0386 18.6434C27.9183 18.745 27.764 18.8003 27.6049 18.7989H27.5165C27.4299 18.7873 27.3466 18.759 27.2712 18.7158C27.1959 18.6726 27.13 18.6152 27.0774 18.5471C27.0249 18.4789 26.9866 18.4013 26.9649 18.3186C26.9432 18.2359 26.9384 18.1499 26.9509 18.0655C27.0813 17.2823 26.9971 16.4794 26.7068 15.7383C26.4166 14.9972 25.9306 14.3443 25.2984 13.8459C25.2178 13.8014 25.1477 13.7409 25.0925 13.6683C25.0374 13.5957 24.9984 13.5126 24.9781 13.4245C24.9578 13.3363 24.9567 13.2449 24.9748 13.1563C24.9928 13.0676 25.0297 12.9837 25.0831 12.9098C25.1364 12.8359 25.205 12.7738 25.2844 12.7273C25.3638 12.6809 25.4523 12.6513 25.5442 12.6403C25.6361 12.6293 25.7293 12.6372 25.8179 12.6636Z" fill="#1A1A1A" />
                            </svg>

                        </a>
                    </div>

                </header>
                <div className="flex-1 pt-3">
                    {children}
                </div>
            </main>
        </div>
    );
}
