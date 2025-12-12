import { Lexend, Ballet } from "next/font/google";
import "./globals.css";

const ballet = Ballet({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "In Memory of David Sutalo ",
  description: "In Memory of David Sutalo | October 2, 1952 - December 3, 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${ballet.variable}`}>
        {children}
      </body>
    </html>
  );
}
