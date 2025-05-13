import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apartamenty w Gawędówce | Noclegi Pieniny",
  description: "Zarezerwuj nocleg w Gawędówce – komfortowe apartamenty, domek góralski, grill i plac zabaw. Idealne miejsce w sercu Pienin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
