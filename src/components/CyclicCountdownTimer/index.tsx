import { useEffect, useState } from "react";

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

    useEffect(() => {
        const audio1MinRef = new Audio("/alert.mp3");

        const secondAudioMap: Record<number, HTMLAudioElement> = {
            17: new Audio("/sound17.mp3"),
            14: new Audio("/sound14.mp3"),
            11: new Audio("/sound11.mp3"),
            8: new Audio("/sound8.mp3"),
            5: new Audio("/sound5.mp3"),
            2: new Audio("/sound2.mp3"),
        };

        const playedSeconds = new Set<number>();
        let oneMinutePlayed = false;

        const interval = setInterval(() => {
            const now = new Date();
            const diffMs = targetDate.getTime() - now.getTime();
            const diffSec = Math.floor(diffMs / 1000);

            if (diffMs <= 0) {
                setTargetDate(getNextAuctionTime());
                playedSeconds.clear();
                oneMinutePlayed = false;
                return;
            }

            if (diffSec <= 60 && !oneMinutePlayed) {
                audio1MinRef.play().catch(() => null);
                oneMinutePlayed = true;
            }

            if (secondAudioMap[diffSec] && !playedSeconds.has(diffSec)) {
                secondAudioMap[diffSec].play().catch(() => null);
                playedSeconds.add(diffSec);
            }

            setTimeLeft(formatTimeLeft(diffMs));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="text-base font-mono space-y-1 bg-green-600 px-8 py-2 rounded-md mb-2 text-center">
            <div>
                ⏳ Time to next auction:{" "}
                <strong className="text-xl">{timeLeft}</strong>
            </div>
        </div>
    );
}
