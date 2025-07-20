import Image from "next/image";

export const Hero = () => {
    return (
        <div className="w-full flex justify-center">
            <Image
                src="/hero.png"
                alt="TheCrims Tools Banner"
                width={600}
                height={320}
                priority
                className="rounded-md"
            />
        </div>
    );
};
