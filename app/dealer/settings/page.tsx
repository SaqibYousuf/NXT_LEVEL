"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Lock, User, Globe, PieChart } from "lucide-react"

export default function DealerSettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Globe className="mr-2 h-4 w-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="dashboard">
            <PieChart className="mr-2 h-4 w-4" />
            Dashboard
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>RW</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Robert" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Wilson" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="robert.wilson@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 567-8901" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" defaultValue="Dealer Manager" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Write a short bio about yourself..."
                  defaultValue="Dealer manager with over 10 years of experience in sales and team management. Focused on driving growth and improving operational efficiency."
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and address</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Wilson Dealership" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address-line-1">Address Line 1</Label>
                  <Input id="address-line-1" defaultValue="123 Business Street" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address-line-2">Address Line 2</Label>
                  <Input id="address-line-2" defaultValue="Suite 200" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Cincinnati" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="OH" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" defaultValue="45202" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="USA" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about important updates</p>
                </div>
                <Switch id="notifications" checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Channels</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                    disabled={!notificationsEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications in the app</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                    disabled={!notificationsEnabled}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Types</h3>
                <div className="space-y-2">
                  {[
                    { id: "new-job", label: "New Job Submissions", description: "When a new job is submitted" },
                    { id: "status-change", label: "Status Changes", description: "When a job status changes" },
                    { id: "comments", label: "Comments", description: "When someone comments on a job" },
                    { id: "mentions", label: "Mentions", description: "When someone mentions you" },
                    { id: "performance", label: "Performance Updates", description: "Weekly performance reports" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor={item.id}>{item.label}</Label>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch id={item.id} defaultChecked disabled={!notificationsEnabled} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require a verification code when signing in</p>
                </div>
                <Switch id="two-factor" checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
              </div>
              {twoFactorAuth && (
                <div className="rounded-lg border p-4 mt-4">
                  <h3 className="font-medium mb-2">Setup Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scan the QR code with your authenticator app or enter the code manually.
                  </p>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-40 w-40 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-gray-500">QR Code Placeholder</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Manual Code</p>
                      <p className="font-mono text-sm">ABCD-EFGH-IJKL-MNOP</p>
                    </div>
                    <div className="w-full max-w-xs space-y-2">
                      <Label htmlFor="verification-code">Enter Verification Code</Label>
                      <Input id="verification-code" placeholder="123456" />
                    </div>
                    <Button>Verify and Enable</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sessions</CardTitle>
              <CardDescription>Manage your active sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    device: "Windows PC",
                    browser: "Chrome",
                    location: "Cincinnati, OH",
                    ip: "192.168.1.1",
                    lastActive: "Active now",
                    current: true,
                  },
                  {
                    device: "iPhone",
                    browser: "Safari",
                    location: "Cincinnati, OH",
                    ip: "192.168.1.2",
                    lastActive: "2 hours ago",
                    current: false,
                  },
                  {
                    device: "MacBook Pro",
                    browser: "Firefox",
                    location: "Columbus, OH",
                    ip: "192.168.1.3",
                    lastActive: "Yesterday",
                    current: false,
                  },
                ].map((session, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      session.current ? "bg-blue-50/50 border-blue-200" : ""
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="font-medium">
                        {session.device} - {session.browser}
                        {session.current && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          {session.location} • {session.ip}
                        </p>
                        <p>{session.lastActive}</p>
                      </div>
                    </div>
                    {!session.current && (
                      <Button variant="outline" size="sm">
                        Sign Out
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full bg-transparent">
                Sign Out of All Devices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-primary bg-white"></div>
                    <Label className="text-sm font-normal" htmlFor="theme-light">
                      Light
                    </Label>
                    <input
                      type="radio"
                      id="theme-light"
                      name="theme"
                      value="light"
                      defaultChecked
                      className="sr-only"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-muted bg-gray-950"></div>
                    <Label className="text-sm font-normal" htmlFor="theme-dark">
                      Dark
                    </Label>
                    <input type="radio" id="theme-dark" name="theme" value="dark" className="sr-only" />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-muted bg-gradient-to-b from-white to-gray-950"></div>
                    <Label className="text-sm font-normal" htmlFor="theme-system">
                      System
                    </Label>
                    <input type="radio" id="theme-system" name="theme" value="system" className="sr-only" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <div className="grid grid-cols-6 gap-2">
                  {["blue", "green", "red", "purple", "orange", "yellow"].map((color) => (
                    <div key={color} className="flex flex-col items-center space-y-2">
                      <div
                        className={`h-10 w-10 rounded-full bg-${color}-500 border-2 ${
                          color === "blue" ? "border-primary" : "border-transparent"
                        }`}
                      ></div>
                      <Label className="text-xs font-normal capitalize" htmlFor={`color-${color}`}>
                        {color}
                      </Label>
                      <input
                        type="radio"
                        id={`color-${color}`}
                        name="accent-color"
                        value={color}
                        defaultChecked={color === "blue"}
                        className="sr-only"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="dashboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Preferences</CardTitle>
              <CardDescription>Customize your dashboard layout and widgets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Default Dashboard View</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-primary bg-white p-2">
                      <div className="h-4 w-full rounded bg-gray-200 mb-2"></div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-10 rounded bg-gray-200"></div>
                        <div className="h-10 rounded bg-gray-200"></div>
                      </div>
                    </div>
                    <Label className="text-sm font-normal" htmlFor="view-compact">
                      Compact
                    </Label>
                    <input type="radio" id="view-compact" name="dashboard-view" value="compact" className="sr-only" />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-primary bg-white p-2">
                      <div className="h-3 w-full rounded bg-gray-200 mb-1"></div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-14 rounded bg-gray-200"></div>
                        <div className="h-14 rounded bg-gray-200"></div>
                        <div className="h-14 rounded bg-gray-200"></div>
                      </div>
                    </div>
                    <Label className="text-sm font-normal" htmlFor="view-default">
                      Default
                    </Label>
                    <input
                      type="radio"
                      id="view-default"
                      name="dashboard-view"
                      value="default"
                      defaultChecked
                      className="sr-only"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-20 w-full rounded-md border-2 border-muted bg-white p-2">
                      <div className="h-2 w-full rounded bg-gray-200 mb-1"></div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="h-15 rounded bg-gray-200"></div>
                      </div>
                    </div>
                    <Label className="text-sm font-normal" htmlFor="view-detailed">
                      Detailed
                    </Label>
                    <input type="radio" id="view-detailed" name="dashboard-view" value="detailed" className="sr-only" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Visible Widgets</Label>
                <div className="space-y-2">
                  {[
                    { id: "revenue-chart", label: "Revenue Chart", description: "Monthly revenue trends" },
                    {
                      id: "sales-performance",
                      label: "Sales Performance",
                      description: "Sales rep performance metrics",
                    },
                    { id: "project-types", label: "Project Types", description: "Distribution of project categories" },
                    { id: "recent-jobs", label: "Recent Jobs", description: "Latest job submissions" },
                    { id: "key-metrics", label: "Key Metrics", description: "Important performance indicators" },
                  ].map((widget) => (
                    <div key={widget.id} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor={widget.id}>{widget.label}</Label>
                        <p className="text-sm text-muted-foreground">{widget.description}</p>
                      </div>
                      <Switch id={widget.id} defaultChecked />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
