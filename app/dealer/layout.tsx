import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DealerSidebar } from "@/components/dealer-sidebar"
import { AppHeader } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <AppHeader
          portalName="Dealer Portal"
          userName="Mike Wilson"
          userRole="Dealer Manager"
          notificationCount={4}
          messageCount={1}
        />
        <div className="flex flex-1">
          <DealerSidebar />
          <main className="flex-1">{children}</main>
        </div>
        <AppFooter variant="simple" />
      </div>
    </SidebarProvider>
  )
}
