import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const gill = localFont({
  src: "./fonts/gill-sans-ultra-bold/gill-sans-ultra-bold.ttf"

});

export const metadata: Metadata = {
  title: "USAI",
  description: "",
  openGraph: {
    title: "USAI",
    description: "",
    url: "https://usai",
    siteName: "USAI",
    images: [
      {
        url: "https://usai",
        width: 1200,
        height: 630,
        alt: "USAI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USAI",
    description: "",
    images: ["https://usai"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={gill.className}
        style={{
          backgroundImage: "url('/images/USAI-BACKGROUND.png')", // Change par ton image
          backgroundSize: "100% auto", // La largeur est toujours 100%, la hauteur s'adapte
          backgroundPosition: "top", // L'image reste collée en haut
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
