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
import { Home, FileText, BarChart3, Settings, Users, Database, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/company",
    icon: Home,
  },
  {
    title: "Job Tracking",
    url: "/company/jobs",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/company/analytics",
    icon: BarChart3,
  },
  {
    title: "Team Management",
    url: "/company/team",
    icon: Users,
  },
  {
    title: "Smartsheet Integration",
    url: "/company/smartsheet",
    icon: Database,
  },
  {
    title: "Settings",
    url: "/company/settings",
    icon: Settings,
  },
]

export function CompanySidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-2 py-2">
          <Image src="/images/nxt-logo.png" alt="NXT Logo" width={32} height={32} className="h-8 w-auto" />
          <div>
            <h2 className="text-lg font-semibold">Company Portal</h2>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
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
