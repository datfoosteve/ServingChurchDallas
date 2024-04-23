/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/UjtgW7zcQFZ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { JetBrains_Mono } from 'next/font/google'
import { Inter } from 'next/font/google'

jetbrains_mono({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.5rem;
}
**/

"use client";

import Image from "next/image";
import yourImagePath from "/src/images/logowordhome.svg";
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"

export function NavComponent() {
  return (
    <header className="flex container justify-center h-20 w-screen shrink-0 items-center px-4 md:px-6">

<div className="w-[150px] flex items-center">
  <Link href="/" passHref>
    <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
      <Image src={yourImagePath} width={140} height={35} alt="Logo" layout="intrinsic" />
      <span className="sr-only">Serving Church</span>
    </div>
  </Link>
</div>
<div className="mx-auto flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6 " />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex items-center gap-2 text-lg font-semibold md:text-base" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Serving Church</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/about-us">
              About Us
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Contact Us
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 ">
                  <Link className="group grid h-auto w-full justify-start gap-1" href="/contact-us/contact-church">
                    <div className="text-sm font-medium leading-none group-hover:underline">Contact Church</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      Get in touch with our church.
                    </div>
                  </Link>
                  <Link className="group grid h-auto w-full justify-start gap-1" href="/contact-us/prayer-request">
                    <div className="text-sm font-medium leading-none group-hover:underline">Prayer Request</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      Submit a prayer request.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/events">
              Events
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                More
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 ">
                  <Link className="group grid h-auto w-full justify-start gap-1" href="/more/gallery">
                    <div className="text-sm font-medium leading-none group-hover:underline">Gallery</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      View our photo gallery.
                    </div>
                  </Link>
                  <Link className="group grid h-auto w-full justify-start gap-1" href="/more/who-we-are">
                    <div className="text-sm font-medium leading-none group-hover:underline">Who We Are</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      Learn more about our church.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/sermons">
              Sermons
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      </div>
      <div className="flex w-full justify-center">
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              href="/contact-us/contact-church"
            >
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    href="/contact-us/contact-church"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Contact Church</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      Get in touch with our church.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    href="/contact-us/prayer-request"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Prayer Request</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 ">
                      Submit a prayer request.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              href="/events"
            >
              Events
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    href="/more/gallery"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Gallery</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                      View our photo gallery.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    href="/more/who-we-are"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Who We Are</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Learn more about our church.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              href="/sermons"
            >
              Sermons
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <div className="ml-auto w-[150px]">
      <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
          Donate
        </Button>

      </div>
    </header>
  )
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
