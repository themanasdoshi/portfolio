import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundDoodles from "@/components/BackgroundDoodles";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manas Doshi - Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.className} relative cursor-none dark:bg-[#0B1121] bg-white transition-colors duration-300`}>
        <CustomCursor />
        <BackgroundDoodles />
        {children}
      </body>
    </html>
  );
}
