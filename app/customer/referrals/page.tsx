"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, DollarSign, Share2, Gift, Mail, Phone, Calendar } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ReferralsPage() {
  const [referralForm, setReferralForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    notes: "",
  })

  const referrals = [
    {
      id: "REF-001",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "(555) 123-4567",
      status: "Converted",
      dateReferred: "2024-01-15",
      projectValue: 45000,
      commission: 450,
      projectType: "Kitchen Renovation",
    },
    {
      id: "REF-002",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "(555) 987-6543",
      status: "In Progress",
      dateReferred: "2024-01-20",
      projectValue: 32000,
      commission: 320,
      projectType: "Bathroom Remodel",
    },
    {
      id: "REF-003",
      name: "Carol Davis",
      email: "carol@example.com",
      phone: "(555) 456-7890",
      status: "Pending",
      dateReferred: "2024-01-25",
      projectValue: 0,
      commission: 0,
      projectType: "Office Renovation",
    },
  ]

  const handleSubmitReferral = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Referral Submitted",
      description: "Thank you for your referral! We'll contact them within 24 hours.",
    })
    setReferralForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      notes: "",
    })
  }

  const totalEarnings = referrals.reduce((sum, ref) => sum + ref.commission, 0)
  const successfulReferrals = referrals.filter((ref) => ref.status === "Converted").length
  const pendingReferrals = referrals.filter((ref) => ref.status === "Pending").length

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Referral Program</h2>
            <p className="text-muted-foreground">Earn money by referring new customers to us</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{referrals.length}</div>
            <p className="text-xs text-muted-foreground">All time referrals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{successfulReferrals}</div>
            <p className="text-xs text-muted-foreground">Converted to customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReferrals}</div>
            <p className="text-xs text-muted-foreground">Awaiting contact</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings}</div>
            <p className="text-xs text-muted-foreground">Commission earned</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="submit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="submit">Submit Referral</TabsTrigger>
          <TabsTrigger value="history">Referral History</TabsTrigger>
          <TabsTrigger value="program">Program Details</TabsTrigger>
        </TabsList>

        <TabsContent value="submit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit a New Referral</CardTitle>
              <CardDescription>Refer someone you know and earn commission when they become a customer</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReferral} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={referralForm.name}
                      onChange={(e) => setReferralForm({ ...referralForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={referralForm.email}
                      onChange={(e) => setReferralForm({ ...referralForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={referralForm.phone}
                      onChange={(e) => setReferralForm({ ...referralForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Input
                      id="projectType"
                      value={referralForm.projectType}
                      onChange={(e) => setReferralForm({ ...referralForm, projectType: e.target.value })}
                      placeholder="e.g., Kitchen Renovation, Bathroom Remodel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={referralForm.address}
                    onChange={(e) => setReferralForm({ ...referralForm, address: e.target.value })}
                    placeholder="Project address (optional)"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={referralForm.notes}
                    onChange={(e) => setReferralForm({ ...referralForm, notes: e.target.value })}
                    placeholder="Any additional information about the referral or project"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Referral
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral History</CardTitle>
              <CardDescription>Track the status and earnings of your referrals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {referrals.map((referral) => (
                  <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{referral.name}</p>
                        <Badge
                          variant={
                            referral.status === "Converted"
                              ? "default"
                              : referral.status === "In Progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {referral.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Mail className="mr-1 h-3 w-3" />
                          {referral.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="mr-1 h-3 w-3" />
                          {referral.phone}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {referral.dateReferred}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{referral.projectType}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{referral.commission > 0 ? `$${referral.commission}` : "Pending"}</p>
                      <p className="text-sm text-muted-foreground">
                        {referral.projectValue > 0
                          ? `Project: $${referral.projectValue.toLocaleString()}`
                          : "No project yet"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="program" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Referral Program Details</CardTitle>
              <CardDescription>Learn how our referral program works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">How It Works</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        1
                      </span>
                      Submit a referral using the form above
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        2
                      </span>
                      We contact your referral within 24 hours
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        3
                      </span>
                      If they become a customer, you earn commission
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        4
                      </span>
                      Commission is paid after project completion
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Commission Structure</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Projects under $25,000:</span>
                      <span className="font-medium">1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projects $25,000 - $50,000:</span>
                      <span className="font-medium">1.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projects over $50,000:</span>
                      <span className="font-medium">2%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-medium mb-2">Terms & Conditions</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Referrals must be new customers who haven't worked with us before</li>
                  <li>• Commission is paid within 30 days of project completion</li>
                  <li>• Referrals must result in a signed contract to qualify for commission</li>
                  <li>• You can refer unlimited customers - no cap on earnings!</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
