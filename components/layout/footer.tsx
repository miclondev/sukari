import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ef-teal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Partnership Message */}
          <p className="text-lg text-white/90 max-w-2xl">
            We&apos;re proud to partner with 50+ local communities across Kenya, Tanzania, Uganda,
            Rwanda, Namibia & South Africa.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              href="/sustainability"
              className="text-white/90 hover:text-white transition-colors"
            >
              Sustainability
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} EF Education First. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
