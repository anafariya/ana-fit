import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Ana's Gym Guide",
  description: "Unleash your fitness goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
