import type { Metadata } from "next";
import {Inter, Fraunces} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"], variable:"--font-inter"});
const fraunces = Fraunces({subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: {
    default: "Yellowstone Marketplace",
    template: "%s | Yellowstone Marketplace",
  },
  description:
  "Discover landscape projects,shop the plants and materials behind them,and hire landscape professionals",

}; 

export default function RootLayout ({ children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className=" { `${inter.variable} ${fraunces.variable}` }">
      <body className="flex min-h-screen flex-col bg-sand-50 font-sans text-leaf-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
          
        
        <Footer />
        
        
      </body>
    </html>
  )


}