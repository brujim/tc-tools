import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "TheCrims Tools",
    description:
        "A fan site for The Crims, offering tools and resources to support and enhance your gameplay experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-adsense-account"
                    content="ca-pub-7164529681401190"
                />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7164529681401190"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={`${roboto.className} antialiased bg-primary`}>
                {children}
            </body>
        </html>
    );
}
