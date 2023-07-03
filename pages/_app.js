import React from "react";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </React.StrictMode>
  );
}
