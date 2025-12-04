import Image from "next/image";
import bannerPhone from "../../public/Mockup 2.png";
import { FaApple } from "react-icons/fa"; // Apple icon
import { SiGoogleplay } from "react-icons/si"; // Google Play icon

export default function Banner() {
    return (
        <div className="relative">
            {/* Banner Section */}
            <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center">
                <div className="container mt-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">

                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left w-[442px] h-[230px]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            চর্চা করো নিজের গতিতে
                        </h1>
                        <p className="text-gray-300 mb-6 max-w-md">
                            সিলেবাসের যেকোনো টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে ব্যাখ্যা বুঝে নাও, আর সব টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।
                        </p>

                        {/* Download Buttons */}
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

                        <p className="text-gray-400 text-sm mt-2">
                            100k+ downloads | 4.6 Rating with over 8k Reviews
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div>
                            <Image
                                src={bannerPhone}
                                width={300}
                                height={618}
                                alt="App Preview"
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom Gradient Shadow */}
            <div
                className="w-full h-32"
                style={{
                    background: "linear-gradient(90deg, #028C32 0%, #3D45D8 42.02%, #BB7110 70%, #9F3DD8 100%)",
                    opacity: 0.3,
                }}
            />
        </div>
    );
}
