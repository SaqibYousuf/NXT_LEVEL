"use client"

import Image from "next/image"
import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/nxt-logo.png" alt="NXT Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-xl font-bold">NXT Portal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamlining business operations with integrated portal solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Quick Links</p>
            <Link href="/" className="hover:text-foreground text-muted-foreground">
              Home
            </Link>
            <Link href="/customer" className="hover:text-foreground text-muted-foreground">
              Customer Portal
            </Link>
            <Link href="/sales-rep" className="hover:text-foreground text-muted-foreground">
              Sales Rep Portal
            </Link>
            <Link href="/dealer" className="hover:text-foreground text-muted-foreground">
              Dealer Portal
            </Link>
            <Link href="/company" className="hover:text-foreground text-muted-foreground">
              Company Portal
            </Link>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Contact</p>
            <a href="mailto:it@nxtlevel.homes" className="hover:text-foreground text-muted-foreground">
              it@nxtlevel.homes
            </a>
            <br/>
            <a href="tel:+14699364698" className="hover:text-foreground text-muted-foreground">
              (469) 936-4698
            </a>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
