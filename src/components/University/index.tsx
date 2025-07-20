import { useState } from "react";

export const University = () => {
    const [gameClass, setGameClass] = useState("");
    const closeModal = () => setGameClass("");

    return (
        <div className="mt-10">
            <div className="flex justify-center items-center px-10 flex-wrap gap-5">
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => {
                        setGameClass("pimp");
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z" />
                    </svg>

                    <p className="font-bold text-sub">P.I.M.P</p>
                </div>
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => {
                        setGameClass("broker");
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
                    </svg>

                    <p className="font-bold text-sub">BROKER</p>
                </div>
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => setGameClass("hitman")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L32 64C14.3 64 0 78.3 0 96L0 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l96 0c14.7 0 27.5-10 31-24.2L217 352l104.5 0c23.7 0 44.8-14.9 52.7-37.2L400.9 240l31.1 0c8.5 0 16.6-3.4 22.6-9.4L477.3 208l66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8zM321.4 304L229 304l16-64 105 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128l384 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>

                    <p className="font-bold text-sub">HITMAN</p>
                </div>
            </div>
            <div className="flex justify-center items-center px-10 flex-wrap gap-5 mt-5">
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => setGameClass("business")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.2 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9c0 0 0 0 0 0s0 0 0 0l.2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zM231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2s0 0 0 0s0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129zM228 72c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7L228 72z" />
                    </svg>

                    <p className="font-bold text-sub">BUSINESS MAN</p>
                </div>
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => setGameClass("dealer")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>

                    <p className="font-bold text-sub">DEALER</p>
                </div>
                <div
                    className="bg-secondary w-[170px] h-[170px] rounded-lg border-2 border-sub flex flex-col items-center justify-center gap-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => setGameClass("robber")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="100"
                        height="100"
                        fill="#ccb587"
                    >
                        <path d="M488.2 59.1C478.1 99.6 441.7 128 400 128s-78.1-28.4-88.2-68.9L303 24.2C298.8 7.1 281.4-3.3 264.2 1S236.7 22.6 241 39.8l8.7 34.9c11 44 40.2 79.6 78.3 99.6L328 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-305.7c38.1-20 67.3-55.6 78.3-99.6L559 39.8c4.3-17.1-6.1-34.5-23.3-38.8S501.2 7.1 497 24.2l-8.7 34.9zM400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zm-8 32c-35.3 0-64 28.7-64 64l0 96 0 .6L8 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-227.3 13 20.5c5.9 9.2 16.1 14.9 27 14.9l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-30.4 0-37.4-58.9C157.6 142 132.1 128 104.7 128L72 128z" />
                    </svg>

                    <p className="font-bold text-sub">ROBBER</p>
                </div>
                {gameClass && (
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
                            {gameClass === "pimp" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        PIMP
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>Which is the cheapest hooker?</p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>Dolly</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            Which is the most expensive hooker?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> French Maid Fifi</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            How many hookers can a pimp hold at
                                            level 12?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>6425</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            What is the max discount you can
                                            have when buying hookers as a pimp?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>45%</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                            {gameClass === "broker" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        BROKER
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>
                                            How many types of stock can you hold
                                            as a broker?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>8</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            Which of the following stocks is a
                                            low risk one?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> Go Figure</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            What is the max bonus when selling
                                            stocks at the market?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>22%</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            What is the max number of
                                            transactions you can perform at the
                                            stock market?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>30</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                            {gameClass === "hitman" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        HITMAN
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>
                                            How many kills do you need to make
                                            level 3?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>3</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            How much respect do you need to
                                            reach level 12?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> 6,500,000</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            How many stock market transactions
                                            do you have at level 12?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>6</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            How many kills do you need to make
                                            for level 11?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>225</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                            {gameClass === "business" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        BUSINESS
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>
                                            How much respect do you need as
                                            Businessman to reach level 7?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>200,000</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            How many hookers must you own as
                                            Businessman to pass to level 8?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> 200</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            How many slots can a Businessman
                                            have at level 2?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>6</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            How many hookers must you own as
                                            Businessman to make level 5?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>30</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                            {gameClass === "dealer" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        DEALER
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>
                                            How many buildings can Dealer have
                                            after level 5?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>5</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            How much money should the dealer
                                            sell drugs to the boats to reach
                                            level 8?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> 1,000,000,000</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            How much money should the dealer
                                            sell drugs to the boats to reach
                                            level 13?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:{" "}
                                            <strong>200,000,000,000</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            How much bonus does Dealer get from
                                            boats at level 12?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>22%</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                            {gameClass === "robber" && (
                                <div className="flex justify-center flex-col">
                                    <p className="font-bold text-sub text-[18px]">
                                        ROBBER
                                    </p>
                                    <div className="flex flex-col border-t-2 border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 1 Question
                                        </p>
                                        <p>
                                            How much bonus money does Goggles of
                                            Fortune give?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>50%</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 2 Question
                                        </p>
                                        <p>
                                            How many gang robberies does Robber
                                            need to reach level 10?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer:
                                            <strong> 1,200</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question A
                                        </p>
                                        <p>
                                            How many tickets does Robber gain
                                            when reaching level 12?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>400</strong>
                                        </p>
                                    </div>
                                    <div className="flex flex-col border-b-2 py-2 border-sub/20">
                                        <p className="text-sub text-[14px]">
                                            Level 3 Question B
                                        </p>
                                        <p>
                                            How much Intelligence does Robber
                                            need to reach level 13?
                                        </p>
                                        <p className="text-sub text-[14px]">
                                            Answer: <strong>1,000,000</strong>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
