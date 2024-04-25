import type { Metadata } from "next";
import { fontRoboto, fontSatisfy } from "@/config/fonts";
import "../styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SS Mall",
  description: "Our platform pulsates with the latest Product",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontRoboto.className}>
        <Providers>
          <div className="h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
