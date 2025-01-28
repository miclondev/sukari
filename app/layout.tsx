import { ConfigureAmplifyClientSide } from "@/components/configure-amplify";
import { Providers } from "@/contexts/providers";
import { Search } from "lucide-react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
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
          <>
            {/* Top Menu */}
            <div className="bg-white text-sm">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-10">
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/sales-team"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Sales team
                    </Link>
                    <Link
                      href="/organize"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Organize a group
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/help"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Help
                    </Link>
                    <span className="text-foreground/40">|</span>
                    <Link
                      href="/login"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/register"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Header */}
            <header className="bg-white border-b">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center space-x-8">
                    <Link
                      href="/"
                      className="text-xl font-bold hover:text-ef-teal transition-colors"
                    >
                      EF
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                      <Link
                        href="/destinations"
                        className="text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:text-foreground"
                      >
                        Destinations
                      </Link>
                      <Link
                        href="/travel-styles"
                        className="text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:text-foreground"
                      >
                        Travel styles
                      </Link>
                      <Link
                        href="/deals"
                        className="text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:text-foreground"
                      >
                        Travel deals
                      </Link>
                      <Link
                        href="/about"
                        className="text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:text-foreground"
                      >
                        About us
                      </Link>
                    </nav>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="pl-10 pr-4 py-2 rounded-full border bg-background w-[200px] focus:outline-none focus:ring-2 focus:ring-ef-teal focus:border-ef-teal transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main>{children}</main>

            <footer className="bg-ef-teal text-white">
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">GET IN TOUCH</h3>
                    <ul className="space-y-2 text-sm">
                      <li>1-800-500-100</li>
                      <li>Chat with us</li>
                      <li>Email us</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">TRIPS</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Europe trips</li>
                      <li>Asia trips</li>
                      <li>Africa trips</li>
                      <li>Americas trips</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">TRAVEL RESOURCES</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Trip protection</li>
                      <li>Travel tips</li>
                      <li>Packing guides</li>
                      <li>Travel safety & support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">ABOUT GO AHEAD</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Who we are</li>
                      <li>Why go guided</li>
                      <li>Reviews</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">EF PROGRAMS BY AGE</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Middle school students</li>
                      <li>High school students</li>
                      <li>College students</li>
                      <li>Young adults</li>
                      <li>Adults 50+</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
                  <p>&copy; 2024 EF Education First. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </>
        </Providers>
      </body>
    </html>
  );
}
