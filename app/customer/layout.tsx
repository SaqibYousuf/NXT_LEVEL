import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { CustomerSidebar } from "@/components/customer-sidebar"
import { AppHeader } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <AppHeader
          portalName="Customer Portal"
          userName="John Smith"
          userRole="Customer"
          notificationCount={3}
          messageCount={2}
        />
        <div className="flex flex-1">
          <CustomerSidebar />
          <main className="flex-1">{children}</main>
        </div>
        <AppFooter variant="simple" />
      </div>
    </SidebarProvider>
  )
}
