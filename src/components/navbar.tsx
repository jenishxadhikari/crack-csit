"use client"

import Link from "next/link"

import { Semesters } from "@/config/links"
import { HelpItems } from "@/config/links"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Icons } from "./icons"
import { ListItems } from "./list-items"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Button, buttonVariants } from "./ui/button"

export function Navbar() {
  const user = true
  return (
    <header className="sticky inset-x-0 top-0 h-16 border-b bg-white/80 backdrop-blur-lg">
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          <span className="text-primary">Crack</span>
          <span className="bg-primary px-0.5 text-white">CSIT</span>
        </Link>
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Semester Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Semester</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] grid-cols-2 gap-4 p-4">
                  {Semesters.map((semester) => (
                    <ListItems props={semester} key={semester.title} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Other Links */}
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
            <Link href="/articles" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Articles
              </NavigationMenuLink>
            </Link>
            <Link href="/notices" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Notices
              </NavigationMenuLink>
            </Link>
            {/* Help Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Help</NavigationMenuTrigger>
              <NavigationMenuContent className="right-0">
                <ul className="grid w-[200px] gap-3 p-4">
                  {HelpItems.map((item) => (
                    <ListItems props={item} key={item.title} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* User Actions */}
        <div className="flex gap-2">
          {user ? (
            <>
              <Button size="sm" variant="ghost">
                Sign Out
              </Button>

              <div className="h-8 w-px bg-zinc-200" />

              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Dashboard
                <Icons.arrowRight />
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign In
              </Link>

              <div className="h-8 w-px bg-zinc-200" />

              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Sign Up
                <Icons.arrowRight />
              </Link>
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
