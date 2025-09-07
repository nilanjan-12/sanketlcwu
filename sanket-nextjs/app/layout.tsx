import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SANKET NGO - Leads to a Change Within Us",
  description: "SANKET NGO - Transforming communities across 12 states in India through education, healthcare, environmental sustainability, and women empowerment programs.",
  keywords: "NGO, India, education, healthcare, environment, women empowerment, community development, social impact",
  authors: [{ name: "SANKET NGO" }],
  openGraph: {
    title: "SANKET NGO - Leads to a Change Within Us",
    description: "Transforming communities across India through sustainable development programs",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 max-w-full">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
