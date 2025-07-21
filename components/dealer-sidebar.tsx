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
import { Home, Users, BarChart3, Settings, LayoutDashboard, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dealer",
    icon: Home,
  },
  {
    title: "Sales Rep Performance",
    url: "/dealer/sales-reps",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/dealer/analytics",
    icon: BarChart3,
  },
  {
    title: "Custom Dashboard",
    url: "/dealer/custom-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Settings",
    url: "/dealer/settings",
    icon: Settings,
  },
]

export function DealerSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-2 py-2">
          <Image src="/images/nxt-logo.png" alt="NXT Logo" width={32} height={32} className="h-8 w-auto" />
          <div>
            <h2 className="text-lg font-semibold">Dealer Portal</h2>
            <p className="text-sm text-muted-foreground">Welcome back!</p>
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
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
