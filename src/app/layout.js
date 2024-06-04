import { Varela_Round } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const font = Varela_Round({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Linklist",
  description: "Linklist is your one link for everything.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/linklist-logo-dark.svg",
        href: "/linklist-logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/linklist-logo-white.svg",
        href: "/linklist-logo-white.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <Header />
          <div className="max-w-4xl mx-auto p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
