"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, MessageCircle, FileText, PlusCircle, BarChart3, LogOut, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/sales-rep",
    icon: Home,
  },
  {
    title: "Submit Job",
    url: "/sales-rep/submit-job",
    icon: PlusCircle,
    featured: true,
  },
  {
    title: "My Jobs",
    url: "/sales-rep/jobs",
    icon: FileText,
  },
  {
    title: "Performance",
    url: "/sales-rep/performance",
    icon: BarChart3,
  },
  {
    title: "Direct Chat",
    url: "/sales-rep/chat",
    icon: MessageCircle,
  },
]

export function SalesRepSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-2 py-2">
          <Image src="/images/nxt-logo.png" alt="NXT Logo" width={32} height={32} className="h-8 w-auto" />
          <div>
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <span>Sales Rep Portal</span>
              <Star className="h-4 w-4 text-yellow-500" />
            </h2>
            <p className="text-sm text-muted-foreground">Most Important Portal</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={item.featured ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : ""}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.featured && <Star className="h-3 w-3 ml-auto text-yellow-500" />}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/auth/login">
                <LogOut />
                <span>Sign Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
