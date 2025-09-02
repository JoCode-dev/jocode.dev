"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

export function WhatsAppButton({
    phoneNumber = "+2250788466748",
    message = "Bonjour, je souhaite obtenir des informations sur vos services de développement.",
}: WhatsAppButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(
            /[^0-9]/g,
            ""
        )}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute bottom-16 right-0 mb-2 mr-2"
                    >
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3 min-w-48">
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        Vous avez une question ?
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        Discutons de votre projet
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowTooltip(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            {/* Triangle pointer */}
                            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={handleWhatsAppClick}
                onMouseEnter={() => {
                    setIsHovered(true);
                    setShowTooltip(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setShowTooltip(false);
                }}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                {/* Pulse effect */}
                <motion.div
                    className="absolute inset-0 bg-green-500 rounded-full"
                    animate={{
                        scale: isHovered ? [1, 1.4, 1] : 1,
                        opacity: isHovered ? [0.7, 0, 0.7] : 0,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut",
                    }}
                />

                {/* Main button */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                    {/* WhatsApp icon */}
                    <motion.div
                        animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                        className="cursor-pointer flex items-center justify-center"
                    >
                        <svg
                            fill="#ffffff"
                            width="60%"
                            height="60%"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                            strokeWidth="0.00016"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                            </g>
                        </svg>
                    </motion.div>

                    {/* Notification badge */}
                    <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <span className="text-white text-xs font-bold">!</span>
                    </motion.div>
                </div>

                {/* Floating particles effect */}
                <AnimatePresence>
                    {isHovered && (
                        <>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        scale: 0,
                                    }}
                                    animate={{
                                        x: Math.random() * 40 - 20,
                                        y: Math.random() * 40 - 20,
                                        opacity: 0,
                                        scale: 1,
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.1,
                                        ease: "easeOut",
                                    }}
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                    }}
                                />
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
