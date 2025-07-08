import { useEffect, useState } from "react";

interface CyclicCountdownTimerProps {
    times: string[]; // Horários em horário de Brasília (ex: "14:55")
}

const BR_TIMEZONE = "America/Sao_Paulo";

function getNextTargetDate(timeStr: string): { brDate: Date; localDate: Date } {
    const [hour, minute] = timeStr.split(":").map(Number);

    const now = new Date();

    // Data no fuso de Brasília (sem considerar a hora ainda)
    const brDateString = new Intl.DateTimeFormat("en-CA", {
        timeZone: BR_TIMEZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(now); // YYYY-MM-DD

    // Concatena hora brasileira
    const brDate = new Date(
        `${brDateString}T${String(hour).padStart(2, "0")}:${String(
            minute
        ).padStart(2, "0")}:00-03:00`
    );

    // Se o horário já passou, adiciona um dia
    if (brDate.getTime() <= now.getTime()) {
        brDate.setDate(brDate.getDate() + 1);
    }

    return {
        brDate,
        localDate: new Date(
            brDate.toLocaleString("en-US", {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })
        ),
    };
}

function formatTimeLeft(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
    )}:${String(seconds).padStart(2, "0")}`;
}

export default function CyclicCountdownTimer({
    times,
}: CyclicCountdownTimerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const update = () => {
            const { brDate } = getNextTargetDate(times[currentIndex]);
            const now = new Date();
            const diff = brDate.getTime() - now.getTime();

            if (diff <= 0) {
                setCurrentIndex((prev) => (prev + 1) % times.length);
                return;
            }

            setTimeLeft(formatTimeLeft(diff));
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [currentIndex, times]);

    return (
        <div className="text-base font-mono space-y-1 bg-green-400 px-4 py-2 rounded-md my-4 text-primary">
            <div>
                ⏳ Time remaining to next bid: <strong>{timeLeft}</strong>
            </div>
        </div>
    );
}
