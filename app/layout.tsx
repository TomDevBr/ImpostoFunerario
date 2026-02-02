import type { Metadata } from "next";
import { alegreya_sc, alegreya_sans } from "./fonts";
import "./globals.css";

const alegreyaSc = alegreya_sc;
const alegreyaSans = alegreya_sans;

export const metadata: Metadata = {
  title: "Imposto Funerário",
  description: "Site da Imposto Funerário, guilda do Albion Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${alegreyaSc.variable} ${alegreyaSans.variable} antialiased`}
      >
        <div data-slot="content-wrapper" className="mx-auto w-full max-w-400">
          {children}
        </div>
      </body>
    </html>
  );
}
