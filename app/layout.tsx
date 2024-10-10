import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Luxury Car Rentals | Luxedrive",
  description: "Luxedrive offers premium luxury car rentals for your special occasions. Discover our fleet of high-end vehicles and book your ride today.",
  keywords: "luxury car rental, premium cars, high-end rentals, exotic cars",
  openGraph: {
    title: "Luxury Car Rentals | Luxedrive",
    description: "Luxedrive offers premium luxury car rentals for your special occasions. Discover our fleet of high-end vehicles and book your ride today.",
    url: "https://luxedrive.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rentals | Luxedrive",
    description: "Luxedrive offers premium luxury car rentals for your special occasions. Discover our fleet of high-end vehicles and book your ride today.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
