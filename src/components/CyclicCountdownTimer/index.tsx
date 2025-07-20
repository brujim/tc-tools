import { useEffect, useRef, useState } from "react";

const BRAZIL_TIMES = ["02:55", "06:55", "10:55", "14:55", "18:55", "22:55"];
const BRAZIL_TIMEZONE = "America/Sao_Paulo";

function getNextAuctionTime() {
    const now = new Date();
    const nowInBR = new Date(
        now.toLocaleString("en-US", { timeZone: BRAZIL_TIMEZONE })
    );

    for (const time of BRAZIL_TIMES) {
        const [hour, minute] = time.split(":").map(Number);
        const candidate = new Date(nowInBR);
        candidate.setHours(hour, minute, 0, 0);

        if (candidate > nowInBR) {
            return new Date(
                candidate.toLocaleString("en-US", {
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                })
            );
        }
    }

    const [hour, minute] = BRAZIL_TIMES[0].split(":").map(Number);
    const next = new Date(nowInBR);
    next.setDate(next.getDate() + 1);
    next.setHours(hour, minute, 0, 0);

    return new Date(
        next.toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
    );
}

function formatTimeLeft(ms: number): string {
    const total = Math.floor(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
        2,
        "0"
    )}:${String(s).padStart(2, "0")}`;
}

export default function AuctionCountdown() {
    const [targetDate, setTargetDate] = useState(getNextAuctionTime());
    const [timeLeft, setTimeLeft] = useState("");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const alarmPlayedRef = useRef(false);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/alert.mp3"); // Coloque alert.mp3 em /public
        }

        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                setTargetDate(getNextAuctionTime());
                alarmPlayedRef.current = false;
                return;
            }

            if (diff <= 1 * 60 * 1000 && !alarmPlayedRef.current) {
                audioRef.current?.play().catch(() => null);
                alarmPlayedRef.current = true;
            }

            setTimeLeft(formatTimeLeft(diff));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="text-base font-mono space-y-1 bg-green-600 px-8 py-2 rounded-md my-2">
            <div>
                ⏳ Time to next auction:{" "}
                <strong className="text-xl">{timeLeft}</strong>
            </div>
        </div>
    );
}
