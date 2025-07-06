"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const BidCalc = () => {
    const [selectedOption, setSelectedOption] = useState(66666666);
    const [drugValue, setDrugValue] = useState(0);
    const [districtPercentage, setDistrictPercentage] = useState(0);
    const [result, setResult] = useState("");
    const [captainBonus, setCaptainBonus] = useState(false);

    function formatValue(value: number): string {
        if (value >= 1_000_000_000) {
            return (value / 1_000_000_000).toFixed(2) + " billions";
        } else if (value >= 1_000_000) {
            return (value / 1_000_000).toFixed(2) + " millions";
        } else {
            return value.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
        }
    }

    function calculateBid(param: string) {
        const minBoatBonus = (drugValue / 100) * 10;
        const maxBoatBonus = (drugValue / 100) * 20;
        const districtBonus = (drugValue / 100) * districtPercentage;
        const captainBonusValue = captainBonus ? (drugValue / 100) * 10 : 0;
        const finalMinDrugValue =
            drugValue + minBoatBonus + districtBonus + captainBonusValue;
        const finalMaxDrugValue =
            drugValue + maxBoatBonus + districtBonus + captainBonusValue;
        const quantityMultiplier = selectedOption;
        const minResult = finalMinDrugValue * quantityMultiplier;
        const maxResult = finalMaxDrugValue * quantityMultiplier;
        if (param === "min") return formatValue(minResult);
        else return formatValue(maxResult);
    }
    const options = [
        { mult: 66666666, label: "200.000.000" },
        { mult: 133333333, label: "400.000.000" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white ">
            <h1 className="text-3xl font-bold mb-1">Bid Calculator</h1>
            <p className="text-lg mb-6 text-sub">
                Calculate your bids efficiently!
            </p>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Real drug value</label>
                    <input
                        type="number"
                        className="text-white bg-secondary px-2 text-xs h-8 rounded-md hide-number-spin"
                        onChange={(e) => setDrugValue(Number(e.target.value))}
                    />
                </div>

                <label className="text-sm mt-4">
                    Auction components quantity
                </label>
                <div className="flex justify-between w-[350px] px-2">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="flex items-center cursor-pointer gap-2"
                            onClick={() => setSelectedOption(option.mult)}
                        >
                            <div
                                className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                                    selectedOption === option.mult
                                        ? "border-[#ccb587]"
                                        : "border-gray-400"
                                }`}
                            >
                                <AnimatePresence>
                                    {selectedOption === option.mult && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#ccb587"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm">District %</label>
                    <input
                        type="number"
                        className="text-white bg-secondary px-2 text-xs h-8 rounded-md hide-number-spin"
                        onChange={(e) =>
                            setDistrictPercentage(Number(e.target.value))
                        }
                    />
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <label className="text-sm">Captain Bonus (10%)</label>
                    <div className="flex justify-between w-[350px] px-2 ">
                        <div
                            className="flex items-center cursor-pointer gap-2"
                            onClick={() => setCaptainBonus((params) => !params)}
                        >
                            <div
                                className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                                    captainBonus
                                        ? "border-[#ccb587]"
                                        : "border-gray-400"
                                }`}
                            >
                                <AnimatePresence>
                                    {captainBonus && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#ccb587"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="bg-green-500 py-2 rounded-md font-black cursor-pointer mt-2 text-sm tracking-wide hover:bg-green-400 hover:scale-105 transition duration-800"
                    onClick={(e) => {
                        e.preventDefault();
                        const sum = calculateBid;
                        setResult(sum ?? "");
                    }}
                >
                    CALCULATE
                </button>
            </form>
            {result && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Calculated Bid</h2>
                    <p>Your worst earns is: {calculateBid("min")}</p>
                    <p>Your best earns is: {calculateBid("max")}</p>
                </div>
            )}
        </div>
    );
};
