"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProfile } from "@/contexts/profile-context";
import { getInitialsFromEmail } from "@/lib/utils";
import { signOut } from "aws-amplify/auth";
import { CreditCard, LogInIcon, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function UserNav() {
  const { userAttributes, userProfile, authSession } = useProfile();
  const pathname = usePathname();
  const userGroups =
    (authSession?.tokens?.accessToken?.payload["cognito:groups"] as string[]) || [];

  if (userAttributes?.email) {
    return (
      <DropdownMenu>
        {pathname.includes("/admin") || pathname.includes("/dashboard") ? (
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-1">
              Home <LogInIcon />
            </Link>
          </Button>
        ) : userGroups.includes("ADMIN") ? (
          <Button variant="outline" asChild>
            <Link href="/admin" className="flex items-center gap-1">
              Admin Panel <LogInIcon />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link href="/dashboard" className="flex items-center gap-1">
              Dashboard <LogInIcon />
            </Link>
          </Button>
        )}
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={userProfile?.profilePicture || undefined}
              alt="Profile picture"
              className="h-10 w-10"
            />
            <AvatarFallback className="bg-ef-teal text-white cursor-pointer">
              {getInitialsFromEmail(userAttributes?.email)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">name</p>
              <p className="text-xs text-muted-foreground">{userAttributes.email}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/bookings" className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Bookings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-red-600 focus:text-red-600"
            onClick={async () => {
              await signOut();
              window.location.href = "/";
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
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
