import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Navbar from "@/components/layout/navbar";
import { Suspense } from "react";

export const metadata = {
  title: "Lucas Coppola | Portfolio",
  description: "Lucas Coppola Portfolio",
  metadataBase: new URL("https://lucascoppola.vercel.app/"),
  themeColor: "#",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-zinc-900" />
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-32">
          {children}
        </main>
      </body>
    </html>
  );
}
