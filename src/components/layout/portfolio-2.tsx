"use client"
import { CupSoda } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- SVG Icon Components ---
// These are the icon components for the social media links in the footer.
// They are self-contained, so no external libraries are needed.

const LinkedInIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
);

const GithubIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-23.3 2.6-57.5 0 0 21.9-7 72.1 25.6 20.9-6.2 43.6-9.4 66.3-9.4 22.7 0 45.4 3.1 66.3 9.4 50.2-32.6 72.1-25.6 72.1-25.6 13.7 34.2 5.2 51 2.6 57.5 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
);


// Main App component that renders the portfolio
export default function Portfolio2Page() {
    return <Portfolio2 />;
}

const userImage = "/User.png";

// The main portfolio component, now fully responsive with light/dark mode support.
const Portfolio2 = () => {
    return (
        <div className="flex items-center justify-center font-sans bg-gray-50 dark:bg-black">
            <div className="bg-white dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">

                {/* Main Content (Hero Section) */}
                <main className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-10">

                    {/* Left Side: Text Content */}
                    <div className="text-center md:text-left md:w-1/2 z-10 order-2 md:order-1">
                        {/* Font sizes now scale better from mobile to desktop */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                            Transformer vos idées en <br />
                            <span className="text-black dark:text-white">solutions</span>
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
                            Chaque projet est unique. Je transforme les besoins en applications réelles, évolutives et fonctionnelles.
                        </p>
                        <button className="mt-8 bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-10 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                            onClick={() => {
                                window.open("https://wa.me/2250788466748?text=Bonjour, je souhaite obtenir des informations sur vos services de développement.", "_blank");
                            }}
                        >
                            Parlons de votre projet
                        </button>
                    </div>

                    {/* Right Side: Image with Blob Shape */}
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 order-1 md:order-2">
                        {/* The blob shape adapts to light/dark mode */}
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
                            <path fill="currentColor" className="text-black dark:text-white" d="M48.8,-63.9C62.9,-54.2,73.8,-40.1,78.2,-24.5C82.6,-8.9,80.5,8.2,74.5,23.6C68.5,39,58.6,52.7,45.5,62.3C32.4,71.9,16.2,77.4,-1.8,78.8C-19.8,80.2,-39.6,77.5,-53.4,67.7C-67.2,57.9,-75,41,-76.8,24.2C-78.5,7.4,-74.2,-9.3,-66.5,-23.7C-58.8,-38.1,-47.7,-50.3,-34.9,-60.1C-22.1,-69.9,-7.6,-77.4,7.9,-78.9C23.4,-80.4,46.8,-75.9,48.8,-63.9Z" transform="translate(100 100)" />
                        </svg>
                        {/* The image is clipped to a similar path */}
                        <div className="w-full h-full">
                            <Image
                                src={userImage}
                                width={400}
                                height={400}
                                alt="Aesthetic scenery in grayscale"
                                className="absolute w-full h-full object-cover grayscale dark:brightness-90" // Added grayscale filter and dark mode brightness adjustment
                                style={{ clipPath: 'url(#blob-clip)' }}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = 'https://placehold.co/400x400/000000/FFFFFF?text=Image';
                                }}
                            />
                        </div>
                        {/* Defining the SVG clip-path. It's hidden but used by the style attribute */}
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
                                    <path d="M0.244,-0.32C0.315,-0.271,0.369,-0.2,0.391,-0.122C0.413,-0.045,0.402,0.041,0.373,0.118C0.343,0.195,0.293,0.263,0.227,0.312C0.162,0.359,0.081,0.387,-0.009,0.394C-0.099,0.401,-0.198,0.387,-0.267,0.339C-0.336,0.289,-0.375,0.205,-0.384,0.121C-0.393,0.037,-0.371,-0.047,-0.333,-0.119C-0.294,-0.191,-0.239,-0.251,-0.175,-0.3C-0.111,-0.35,-0.038,-0.387,0.04,-0.395C0.117,-0.402,0.234,-0.38,0.244,-0.32Z" transform="matrix(2.5, 0, 0, 2.5, 0.5, 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </main>

                {/* Social Links Footer - Now fully responsive with dark mode support */}
                <footer className="flex justify-center pt-8 pb-4 md:p-0 md:justify-start md:absolute md:bottom-8 md:left-8 lg:bottom-12 lg:left-12">
                    <div className="flex space-x-5 md:space-x-6 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                        <a href="https://www.linkedin.com/in/ange-c%C3%A9dric-jo%C3%ABl-duakon-587859186/" target='_blank' className="hover:text-black dark:hover:text-white transition-colors"><LinkedInIcon /></a>
                        <a href="https://github.com/JoCode-dev" target='_blank' className="hover:text-black dark:hover:text-white transition-colors"><GithubIcon /></a>

                        <Link href="https://buymeacoffee.com/cedricduak0" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                            <div className="flex flex-row items-center gap-2">
                                <CupSoda className="w-4 h-4" />
                                <p className="text-sm font-semibold tracking-tight">Buy me a coffee</p>
                            </div>
                        </Link>
                    </div>
                </footer>

            </div>
        </div>
    );
};
