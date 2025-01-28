import Link from "next/link";

export function UserNav() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/auth/login"
        className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-md"
      >
        Log in
      </Link>
      <Link
        href="/auth/register"
        className="bg-ef-teal text-white hover:bg-ef-teal/90 transition-colors px-4 py-2 rounded-md"
      >
        Create Account
      </Link>
    </div>
  );
}
