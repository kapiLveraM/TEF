import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "True Equity Fund AG",
  description: "Lernen sie uns und das Projekt kennen, Bei einem persönlichen Gespräch werden wir alle möglichketine sowie die Detailierten Pläne Besprechen.Lernen sie uns und das Projekt kennen, Bei einem persönlichen Gespräch werden wir alle möglichketine sowie die Detailierten Pläne Besprechen.Lernen sie uns und das Projekt kennen, Bei einem persönlichen Gespräch werden wir alle möglichketine sowie die Detailierten  persönlichen Gespräch werden wir alle möglichketine sowie die Detailierten  persönlichen Gespräch werden wir alle möglichketine sowie die Detailierten ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
