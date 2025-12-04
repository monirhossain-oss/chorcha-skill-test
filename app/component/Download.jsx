"use client";

import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import logo from "../../public/Logo.png";

export default function Download() {
    return (
        <div className="mt-10 flex bg-green-500 items-center justify-around p-10">
            {/* Heading */}
            <div className="text-center lg:text-left mb-4 flex items-center justify-center lg:justify-start gap-2">
                <h2 className="text-3xl font-bold">ডাউনলোড</h2>
                <span className="w-10 h-10 relative">
                    <Image src={logo} alt="App Logo" fill className="object-contain" />
                </span>
                <h2 className="text-3xl font-bold">অ্যাপ</h2>
            </div>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <a
                    href="#"
                    className="bg-black border border-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition"
                >
                    <FaApple className="w-5 h-5" />
                    App Store
                </a>
                <a
                    href="#"
                    className="bg-black border border-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition"
                >
                    <SiGoogleplay className="w-5 h-5" />
                    Google Play
                </a>
            </div>
        </div>
    );
}
