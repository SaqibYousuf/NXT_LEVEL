"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { SettingsIcon, Users, Database, Bell, Lock } from "lucide-react"

export default function CompanySettingsPage() {
  /* ---------------------------------------------------------------------
   * Local state – these would normally come from an API.
   * -------------------------------------------------------------------*/
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [smartsheetSync, setSmartsheetSync] = useState(true)

  /* ---------------------------------------------------------------------
   * Render helpers
   * -------------------------------------------------------------------*/
  const renderFormActions = (
    <CardFooter className="flex justify-end space-x-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </CardFooter>
  )

  /* ---------------------------------------------------------------------
   * Main JSX return
   * -------------------------------------------------------------------*/
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage company-wide preferences and integrations</p>
        </div>
      </div>

      {/* Tabs navigation */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">
            <SettingsIcon className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Database className="mr-2 h-4 w-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* ----------------------------------------------------------------
         * General tab
         * -------------------------------------------------------------- */}
        <TabsContent value="general" className="space-y-6 pt-6">
          {/* Company information */}
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="NXT Portal Inc." />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="address-1">Address Line&nbsp;1</Label>
                  <Input id="address-1" defaultValue="123 Business Ave." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address-2">Address Line&nbsp;2</Label>
                  <Input id="address-2" defaultValue="Suite 100" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Chicago" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="IL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP</Label>
                  <Input id="zip" defaultValue="60601" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="USA" />
                </div>
              </div>
            </CardContent>
            {renderFormActions}
          </Card>

          {/* Regional settings */}
          <Card>
            <CardHeader>
              <CardTitle>Regional Settings</CardTitle>
              <CardDescription>Configure timezone, locale, and currency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="America/Chicago">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern&nbsp;(ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central&nbsp;(CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain&nbsp;(MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific&nbsp;(PT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            {renderFormActions}
          </Card>
        </TabsContent>

        {/* ----------------------------------------------------------------
         * Users tab
         * -------------------------------------------------------------- */}
        <TabsContent value="users" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Add, edit, or remove team members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Simple placeholder table */}
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-4 p-4 bg-muted/50 font-medium">
                  <span className="col-span-3">Name</span>
                  <span className="col-span-4">Email</span>
                  <span className="col-span-3">Role</span>
                  <span className="col-span-2">Status</span>
                </div>
                {[
                  {
                    name: "John Smith",
                    email: "john.smith@example.com",
                    role: "Sales Rep",
                    status: "Active",
                  },
                  {
                    name: "Emily Davis",
                    email: "emily.davis@example.com",
                    role: "Administrator",
                    status: "Active",
                  },
                ].map((u) => (
                  <div key={u.email} className="grid grid-cols-12 gap-4 p-4 border-t items-center">
                    <span className="col-span-3">{u.name}</span>
                    <span className="col-span-4">{u.email}</span>
                    <span className="col-span-3">{u.role}</span>
                    <span className="col-span-2">{u.status}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ----------------------------------------------------------------
         * Integrations tab
         * -------------------------------------------------------------- */}
        <TabsContent value="integrations" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Smartsheet Integration</CardTitle>
              <CardDescription>Configure your Smartsheet synchronization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="smartsheet-sync">Enable Sync</Label>
                  <p className="text-sm text-muted-foreground">Automatically push and pull job data</p>
                </div>
                <Switch id="smartsheet-sync" checked={smartsheetSync} onCheckedChange={setSmartsheetSync} />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="api-key">API&nbsp;Key</Label>
                <Input id="api-key" type="password" value="•••••••••••••••••" disabled={!smartsheetSync} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-id">Sheet&nbsp;ID</Label>
                <Input id="sheet-id" defaultValue="7991283920151364" disabled={!smartsheetSync} />
              </div>
            </CardContent>
            {renderFormActions}
          </Card>
        </TabsContent>

        {/* ----------------------------------------------------------------
         * Notifications tab
         * -------------------------------------------------------------- */}
        <TabsContent value="notifications" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email &amp; SMS Notifications</CardTitle>
              <CardDescription>Choose which notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notify">Email Alerts</Label>
                <Switch id="email-notify" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notify">SMS Alerts</Label>
                <Switch id="sms-notify" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
              </div>
            </CardContent>
            {renderFormActions}
          </Card>
        </TabsContent>

        {/* ----------------------------------------------------------------
         * Security tab
         * -------------------------------------------------------------- */}
        <TabsContent value="security" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage password rules and 2-factor authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password-length">Minimum Password Length</Label>
                <Input id="password-length" type="number" defaultValue={8} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="2fa">Require 2-Factor Authentication</Label>
                <Switch id="2fa" defaultChecked />
              </div>
            </CardContent>
            {renderFormActions}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
