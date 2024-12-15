import React, { useState } from "react";

const OptionsComponent = () => {

    // États indépendants
    const [isOrangeOn, setIsOrangeOn] = useState(false);
    const [isMoovOn, setIsMoovOn] = useState(false);
    const [isMTNOn, setIsMTNOn] = useState(false);
    const [isWaveOn, setIsWaveOn] = useState(false);
    const [isGiftcardOn, setIsGiftcardOn] = useState(false);

    // Tableau des options avec des références aux fonctions
    const options = [
        { id: "orange", name: "Orange", icon: "/assets/images/Group 21604.png", state: isOrangeOn, toggle: () => setIsOrangeOn(!isOrangeOn) },
        { id: "moov", name: "Moov", icon: "/assets/images/Réseau.png", state: isMoovOn, toggle: () => setIsMoovOn(!isMoovOn) },
        { id: "mtn", name: "MTN", icon: "/assets/images/Réseau.png", state: isMTNOn, toggle: () => setIsMTNOn(!isMTNOn) },
        { id: "wave", name: "Wave", icon: "/assets/images/Rectangle 8.png", state: isWaveOn, toggle: () => setIsWaveOn(!isWaveOn) },
        { id: "giftcard", name: "Giftcard", icon: "/assets/images/note.svg", state: isGiftcardOn, toggle: () => setIsGiftcardOn(!isGiftcardOn) },
    ];

    return (
        <div className="font-WorkSans">
            {options.map((option) => (
                <div key={option.id} className="flex justify-between items-center px-4 py-2">
                   
                    <div className="flex space-x-2">
                        <img src={option.icon} alt={`logo ${option.name}`} className="w-6 h-6" />
                        <p>{option.name}</p>
                    </div>

                   
                    <div className="flex items-center mx-3">
                        <button
                            role="switch"
                            aria-checked={option.state}
                            onClick={option.toggle} 
                            className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
                                option.state ? "bg-violet" : "bg-gray-300"
                            }`}
                        >
                            <span
                                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                                    option.state ? "translate-x-6" : "translate-x-1"
                                }`}
                            ></span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OptionsComponent;
