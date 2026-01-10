"use client";

import React from "react";

const ContactSection: React.FC = () => {
    return (
        <div className="w-full h-[95%] flex flex-col justify-start items-start p-4 gap-3 -mt-3">
            <div className="mb-4 w-full flex flex-row justify-between">
                <div className="gap-1 flex flex-col justify-start w-[250px] h-[57px]">
                    <p className="text-lg text-[var(--color-text-main)]">Name:</p>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>
                <div className="gap-1 flex flex-col justify-start w-[250px] h-[57px]">
                    <p className="text-lg text-[var(--color-text-main)]">Email:</p>
                    <input
                        type="text"
                        placeholder="you@example.com"
                        className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>
            </div>
            <div className="w-full h-full gap-1 flex flex-col justify-start">
                <p className="text-lg text-[var(--color-text-main)]">Message:</p>
                <textarea
                    placeholder="Type your message..."
                    className="
                        w-full h-full
                        resize-none
                        rounded-sm
                        border border-gray-300
                        px-3 py-2
                        text-sm
                        leading-5
                        focus:outline-none
                        focus:ring-2 focus:ring-blue-500
                        overflow-hidden
                        text-black
                        "
                />
            </div>
            <div className="w-full flex justify-end h-[60px]">
                <button
                    className="w-[150px] h-[40px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ContactSection;