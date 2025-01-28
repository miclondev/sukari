import { ConfigureAmplifyClientSide } from "@/components/configure-amplify";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Providers } from "@/contexts/providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sukari Travel - Modern Authentic Travel Experiences",
  description: "Discover the world through immersive guided tours and cultural exchange programs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ConfigureAmplifyClientSide />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />{" "}
        </Providers>
      </body>
    </html>
  );
}
