import { useEffect, useState } from "react";

interface CyclicCountdownTimerProps {
    times: string[]; // Ex: ["14:55", "18:55", ...] - todos em horário de Brasília
}

const BR_TZ = "America/Sao_Paulo";

function getNextTargetTime(times: string[]): {
    brDate: Date;
    localDate: Date;
    targetStr: string;
} {
    const now = new Date();

    const nowInBR = new Date(now.toLocaleString("en-US", { timeZone: BR_TZ }));

    for (let i = 0; i < times.length; i++) {
        const [h, m] = times[i].split(":").map(Number);

        const targetBR = new Date(nowInBR);
        targetBR.setHours(h, m, 0, 0);

        if (targetBR > nowInBR) {
            const localDate = new Date(
                targetBR.toLocaleString("en-US", {
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                })
            );
            return { brDate: targetBR, localDate, targetStr: times[i] };
        }
    }

    // Se todos passaram, pega o primeiro do dia seguinte
    const [h, m] = times[0].split(":").map(Number);
    const nextBR = new Date(nowInBR);
    nextBR.setDate(nextBR.getDate() + 1);
    nextBR.setHours(h, m, 0, 0);

    const localDate = new Date(
        nextBR.toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
    );

    return { brDate: nextBR, localDate, targetStr: times[0] };
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

function formatHour(date: Date) {
    return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}

export default function CyclicCountdownTimer({
    times,
}: CyclicCountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState("");
    const [brTime, setBrTime] = useState("");
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const update = () => {
            const { brDate, localDate } = getNextTargetTime(times);
            const now = new Date();
            const diff =
                brDate.getTime() -
                new Date(
                    now.toLocaleString("en-US", { timeZone: BR_TZ })
                ).getTime();

            if (diff <= 0) {
                return; // espera o próximo loop encontrar o próximo horário
            }

            setTimeLeft(formatTimeLeft(diff));
            setBrTime(formatHour(brDate));
            setLocalTime(formatHour(localDate));
        };

        update();
        interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [times]);

    return (
        <div className="text-base font-mono space-y-1 bg-green-600 px-10 py-3 rounded-md my-2">
            <div>
                ⏳ Time to next auction: <strong>{timeLeft}</strong>
            </div>
        </div>
    );
}
