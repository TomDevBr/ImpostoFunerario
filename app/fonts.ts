import { Inter, Alegreya_SC, Alegreya_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const alegreya_sc = Alegreya_SC({
  subsets: ["latin"],
  variable: "--font-alegreya-sc",
  display: "swap",
  weight: "400",
});

export const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  variable: "--font-alegreya-sans",
  display: "swap",
  weight: "400",
});