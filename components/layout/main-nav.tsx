import Link from "next/link";

const navItems = [
  { href: "/tours", label: "Browse Tours" },
  { href: "/organize", label: "Organize Group" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
];

export function MainNav() {
  return (
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
