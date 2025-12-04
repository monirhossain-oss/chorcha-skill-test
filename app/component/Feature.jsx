import React from "react";
import Image from "next/image";
import img1 from "../../public/Screen Recording 2025-07-15 at 18.57.18 2.png";
import img2 from "../../public/Screen Recording 2025-07-15 at 19.28.32 1.png";
import img3 from "../../public/Screen Recording 2025-07-27 at 19.07.11 1.png";
import img4 from "../../public/Phone mockup.png";
import img5 from "../../public/Screen Recording 2025-07-27 at 19.07.11 1.png";
import img6 from "../../public/Frame 3473671.png";

const features = [
    {
        title: "কাস্টম মক টেস্ট",
        description: "অনলাইনে প্রস্তুতির জন্য সম্পূর্ণ মক টেস্ট",
        img: img1,
    },
    {
        title: "বিগত সকল প্রশ্ন ব্যাংক",
        description: "সিলেবাসের যেকোনো টপিকের বিশাল প্রশ্ন ডাটাবেজ",
        img: img2,
    },
    {
        title: "লিডারবোর্ড",
        description: "দেশব্যাপী লিডারবোর্ড যা তোমার স্কোর দেখাবে",
        img: img3,
    },
    {
        title: "AI ব্যাখ্যা",
        description: "প্রশ্নের উত্তর AI দিয়ে বিস্তারিত ব্যাখ্যা সহ",
        img: img4,
    },
    {
        title: "টেস্ট রিপোর্ট",
        description: "নিজের প্রস্তুতি যাচাইয়ের জন্য টেস্ট রিপোর্ট",
        img: img5,
    },
    {
        title: "ফ্রেমার্ক",
        description: "সহজ ইন্টারফেস ও smooth experience",
        img: img6,
    },
];

export default function Feature() {
    return (
        <div className="mt-10">
            <div>
                <h2 className="text-4xl text-center font-medium">
                    চর্চার ফিচারসমূহ
                </h2>
                <p className="text-center mt-2">
                    চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড যা
                    তোমার <br /> পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ
                </p>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>

                            {/* Image original size */}
                            <div className="relative w-auto h-auto">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    unoptimized
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
