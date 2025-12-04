import React from 'react'
const cards = [
    {
        title: "RUET",
        userName: "John Doe",
        userImg: "https://i.pravatar.cc/40?img=1",
        description: "This is the description for card 1.",
    },
    {
        title: "RUET",
        userName: "Jane Smith",
        userImg: "https://i.pravatar.cc/40?img=2",
        description: "This is the description for card 2.",
    },
    {
        title: "RUET",
        userName: "Ali Khan",
        userImg: "https://i.pravatar.cc/40?img=3",
        description: "This is the description for card 3.",
    },
    {
        title: "RUET",
        userName: "Sara Lee",
        userImg: "https://i.pravatar.cc/40?img=4",
        description: "This is the description for card 4.",
    },
    {
        title: "RUET",
        userName: "Michael",
        userImg: "https://i.pravatar.cc/40?img=5",
        description: "This is the description for card 5.",
    },
    {
        title: "RUET",
        userName: "Emily",
        userImg: "https://i.pravatar.cc/40?img=6",
        description: "This is the description for card 6.",
    },
];

export default function Success() {
    return (
        <div>
            <h2 className='text-4xl font-medium text-center'>চর্চার সাফল্য</h2>
            <div className="container mx-auto px-6 py-4">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-6 relative text-white ${card.bg} shadow-lg bg-gray-800`}
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-center mb-4">
                                {/* Top Left: User */}
                                <div className="flex items-center gap-2">
                                    <img
                                        src={card.userImg}
                                        alt={card.userName}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span>{card.userName}</span>
                                </div>

                                {/* Top Right: Title */}
                                <span className="font-bold">{card.title}</span>
                            </div>

                            {/* Description */}
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
