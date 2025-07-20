"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CyclicCountdownTimer from "../CyclicCountdownTimer";

export const BidCalc = () => {
    const [selectedOption, setSelectedOption] = useState(66666666);
    const [drugValue, setDrugValue] = useState(0);
    const [districtPercentage, setDistrictPercentage] = useState(0);
    const [captainBonus, setCaptainBonus] = useState(false);
    const [extraPercent, setExtraPercent] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [gonzos, setGonzos] = useState({
        second: { t1: false, t2: false },
        thirth: false,
        fourth: false,
        fifith: { t1: false, t2: false },
    });
    const [dealerClass, setDealerClass] = useState(false);

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
        const districtBonus =
            (drugValue / 100) * (districtPercentage + extraPercent);
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

    function getValueToCalculate() {
        const minBoatBonus = (drugValue / 100) * 10;
        const districtBonus =
            (drugValue / 100) * (districtPercentage + extraPercent);
        const captainBonusValue = captainBonus ? (drugValue / 100) * 10 : 0;
        const finalMinDrugValue =
            drugValue + minBoatBonus + districtBonus + captainBonusValue;
        const quantityMultiplier = selectedOption;
        return finalMinDrugValue * quantityMultiplier;
    }

    const options = [
        { mult: 66666666, label: "200.000.000" },
        { mult: 133333333, label: "400.000.000" },
    ];

    const closeModal = () => setModalOpen(false);

    return (
        <div className="flex flex-col items-center  min-h-screen bg-primary text-white px-4 sm:px-8 mt-10">
            <CyclicCountdownTimer />
            <p className="text-lg mb-6 text-sub text-center">
                Calculate your bids efficiently!
            </p>

            <form className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Real drug value</label>
                    <input
                        type="number"
                        className="text-white bg-secondary px-2 text-xs h-8 rounded-md hide-number-spin w-full"
                        onChange={(e) => setDrugValue(Number(e.target.value))}
                    />
                </div>

                <label className="text-sm mt-4">
                    Auction components quantity
                </label>
                <div className="flex flex-wrap gap-4 w-full">
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
                        className="text-white bg-secondary px-2 text-xs h-8 rounded-md hide-number-spin w-full"
                        onChange={(e) =>
                            setDistrictPercentage(Number(e.target.value))
                        }
                    />
                </div>

                {/* Blocos de toggles e checkboxes */}
                <div className="flex gap-2 mt-6">
                    <div className="flex flex-wrap gap-2">
                        <div
                            className="flex items-center cursor-pointer gap-2"
                            onClick={() => setCaptainBonus(!captainBonus)}
                        >
                            <div
                                className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
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
                    <label className="text-sm">
                        Captain Bonus <span className="text-sub">(10%)</span>
                    </label>
                </div>
                <div className="flex gap-2 flex-col border-t-2 border-white/5 py-4">
                    <label className="text-sm">The Gonzos 2nd Contract</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.second.t1) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                second: {
                                                    ...prev.second,
                                                    t1: true,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param + 2
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                second: {
                                                    ...prev.second,
                                                    t1: false,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param - 2
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.second.t1
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.second.t1 && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 1 <span className="text-sub">(2%)</span>
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.second.t2) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                second: {
                                                    ...prev.second,
                                                    t2: true,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param + 3
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                second: {
                                                    ...prev.second,
                                                    t2: false,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param - 3
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.second.t2
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.second.t2 && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 2 <span className="text-sub">(3%)</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-t-2 border-white/5 py-4">
                    <label className="text-sm">The Gonzos 3rd Contract</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.thirth) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                thirth: true,
                                            }));
                                            setExtraPercent(
                                                (param) => param + 6
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                thirth: false,
                                            }));
                                            setExtraPercent(
                                                (param) => param - 6
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.thirth
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.thirth && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 1 <span className="text-sub">(6%)</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-t-2 border-white/5 py-4">
                    <label className="text-sm">The Gonzos 4th Contract</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.fourth) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fourth: true,
                                            }));
                                            setExtraPercent(
                                                (param) => param + 8
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fourth: false,
                                            }));
                                            setExtraPercent(
                                                (param) => param - 8
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.fourth
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.fourth && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 1 <span className="text-sub">(8%)</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-t-2 border-white/5 py-4">
                    <label className="text-sm">The Gonzos 5th Contract</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.fifith.t1) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fifith: {
                                                    ...prev.fifith,
                                                    t1: true,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param + 2
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fifith: {
                                                    ...prev.fifith,
                                                    t1: false,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param - 2
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.fifith.t1
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.fifith.t1 && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 1 <span className="text-sub">(2%)</span>
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!gonzos.fifith.t2) {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fifith: {
                                                    ...prev.fifith,
                                                    t2: true,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param + 3
                                            );
                                        } else {
                                            setGonzos((prev) => ({
                                                ...prev,
                                                fifith: {
                                                    ...prev.fifith,
                                                    t2: false,
                                                },
                                            }));
                                            setExtraPercent(
                                                (param) => param - 3
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            gonzos.fifith.t2
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {gonzos.fifith.t2 && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 2 <span className="text-sub">(3%)</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-t-2 border-white/5 py-4">
                    <label className="text-sm">Dealer Class</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="flex items-center cursor-pointer gap-2"
                                    onClick={() => {
                                        if (!dealerClass) {
                                            setDealerClass(true);
                                            setExtraPercent(
                                                (param) => param + 3
                                            );
                                        } else {
                                            setDealerClass(false);
                                            setExtraPercent(
                                                (param) => param - 3
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                            dealerClass
                                                ? "border-[#ccb587]"
                                                : "border-gray-400"
                                        }`}
                                    >
                                        <AnimatePresence>
                                            {dealerClass && (
                                                <motion.div
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        scale: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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
                            <label className="text-sm">
                                Task 1 <span className="text-sub">(3%)</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* TODO: Reaplicar flex-wrap e w-full aos grupos de gonzos/dealer para responsividade */}

                <button
                    className="bg-green-500 py-2 rounded-md font-black cursor-pointer mt-2 text-sm tracking-wide hover:bg-green-400 hover:scale-105 transition duration-300 w-full"
                    onClick={(e) => {
                        e.preventDefault();
                        setModalOpen(true);
                    }}
                >
                    CALCULATE
                </button>
            </form>

            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 py-10"
                    onClick={closeModal}
                >
                    <div
                        className="bg-secondary text-white px-6 py-10 rounded-md shadow-lg w-[90%] max-w-sm relative flex flex-col gap-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-1 right-3 text-lg font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-2 text-start text-sub">
                            Calculated Bid
                        </h2>
                        <p>
                            Your worst earns in boat is:{" "}
                            <span className="underline">
                                {calculateBid("min")}
                            </span>
                        </p>
                        <p>
                            Your best earns in boat is:{" "}
                            <span className="underline">
                                {calculateBid("max")}
                            </span>
                        </p>
                        <p>
                            Your max bid value need to be:{" "}
                            <span className="text-green-400 font-bold">
                                {selectedOption === 66666666
                                    ? Math.floor(
                                          getValueToCalculate() / 200000000
                                      )
                                    : Math.floor(
                                          getValueToCalculate() / 400000000
                                      )}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
