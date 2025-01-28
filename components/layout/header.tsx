import Link from "next/link";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold hover:text-ef-teal transition-colors">
              Sukari
            </Link>
            <MainNav />
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
