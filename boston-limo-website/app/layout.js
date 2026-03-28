import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Private Car & Chauffeured Service in Boston | Airport, Corporate & Special Events | Boston Luxury Limo",
  description: "Reliable private car and chauffeured service in Boston for airport transportation, corporate travel, and special events. Ride in comfort with professional chauffeurs and luxury vehicles. Serving Boston, MA, and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Analytics/></body>
    </html>
  );
}
