import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
  
    return (
        <section
            className={`relative overflow-hidden ${
                mode === 'dark' 
                ? 'bg-gradient-to-r from-blue-900 via-gray-800 to-gray-700' 
                : 'bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500'
            } text-white`}>
            {/* Hero Section  */}
            <div className=" flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main className="relative z-10">
                    <div className="text-center space-y-6">
                        {/* Image */}
                        <div className="mb-4">
                            <div className="flex justify-center">
                                <img 
                                    className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110"
                                    src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" 
                                    alt="Creator Icon"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <h1 className="text-4xl sm:text-5xl font-bold animate__animated animate__fadeInUp">
                            Creator
                        </h1>

                        {/* Paragraph */}
                        <p 
                            className="text-lg sm:text-2xl font-light sm:mx-auto opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
                            Let's make a blogging world
                        </p>
                    </div>
                </main>

                {/* Background Overlay Effect */}
                <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
            </div>

            <div className="absolute inset-0 z-0 overflow-hidden">
  <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
  <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-blob"></div>
</div>
        </section>
    )
}

export default HeroSection;
