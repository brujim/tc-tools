"use client";

import { BidCalc } from "@/components/BidCalc";
import { Hero } from "@/components/Hero";
import { University } from "@/components/University";
import { useState } from "react";

export default function Home() {
    const [component, setComponent] = useState("");

    return (
        <div>
            <main className="pt-4 pb-10">
                <Hero />
                <nav className="flex items-center justify-center gap-2 flex-wrap px-2 mb-4">
                    <button
                        className="border-2 py-2 px-8 rounded-sm text-sub border-sub bg-secondary font-sans font-bold cursor-pointer transform hover:scale-105 duration-200"
                        onClick={() => setComponent("bid")}
                    >
                        BID CALCULATOR
                    </button>
                    <button
                        className="border-2 py-2 px-8 rounded-sm text-sub border-sub bg-secondary font-sans font-bold cursor-pointer transform hover:scale-105 duration-200"
                        onClick={() => setComponent("uni")}
                    >
                        UNIVERSITYS
                    </button>
                </nav>
                {component === "bid" && <BidCalc />}
                {component === "uni" && <University />}
            </main>
            <footer></footer>
        </div>
    );
}
