import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SquareRings from "@/components/SquareRings";
import Providers from "@/components/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        <Providers>
          
          <SquareRings />
          <Navbar />
          <main className="w-11/12 mx-auto relative z-10">{children}</main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </Providers>
      </body>
    </html>
  );
}