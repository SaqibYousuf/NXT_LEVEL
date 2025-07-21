import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { CompanySidebar } from "@/components/company-sidebar"
import { AppHeader } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <AppHeader
          portalName="Company Portal"
          userName="David Chen"
          userRole="Company Administrator"
          notificationCount={7}
          messageCount={4}
        />
        <div className="flex flex-1">
          <CompanySidebar />
          <main className="flex-1">{children}</main>
        </div>
        <AppFooter variant="simple" />
      </div>
    </SidebarProvider>
  )
}
