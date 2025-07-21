import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SalesRepSidebar } from "@/components/sales-rep-sidebar"
import { AppHeader } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

export default function SalesRepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <AppHeader
          portalName="Sales Rep Portal"
          userName="Sarah Johnson"
          userRole="Sales Representative"
          notificationCount={5}
          messageCount={3}
        />
        <div className="flex flex-1">
          <SalesRepSidebar />
          <main className="flex-1">{children}</main>
        </div>
        <AppFooter variant="simple" />
      </div>
    </SidebarProvider>
  )
}
