import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "Discover Your Perfect Aesthetic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
     
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="w-11/12 mx-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}