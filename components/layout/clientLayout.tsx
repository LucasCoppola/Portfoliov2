"use client";

import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const className = pathname.endsWith("/") ? "min-h-screen" : "";

  return (
    <main
      className={`flex w-full flex-col items-center justify-center px-8 py-20 ${className}`}
    >
      {children}
    </main>
  );
}
