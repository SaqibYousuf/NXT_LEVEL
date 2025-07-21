"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, FileText, User, Building } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function SubmitJobPage() {
  const [jobForm, setJobForm] = useState({
    // Client Information
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientCompany: "",

    // Project Information
    projectName: "",
    projectType: "",
    projectDescription: "",
    projectAddress: "",
    projectCity: "",
    projectState: "",
    projectZip: "",

    // Financial Information
    estimatedValue: "",
    proposedStartDate: "",
    estimatedDuration: "",

    // Additional Details
    specialRequirements: "",
    competitorInfo: "",
    urgency: "",

    // Checkboxes
    siteVisitRequired: false,
    permitRequired: false,
    designRequired: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Job Submitted Successfully",
      description: "Your job submission has been sent for review. You'll receive an update within 24 hours.",
    })
    // Reset form
    setJobForm({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientCompany: "",
      projectName: "",
      projectType: "",
      projectDescription: "",
      projectAddress: "",
      projectCity: "",
      projectState: "",
      projectZip: "",
      estimatedValue: "",
      proposedStartDate: "",
      estimatedDuration: "",
      specialRequirements: "",
      competitorInfo: "",
      urgency: "",
      siteVisitRequired: false,
      permitRequired: false,
      designRequired: false,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Submit New Job</h2>
            <p className="text-muted-foreground">Create a new job submission for contract generation</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="client" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="client">Client Info</TabsTrigger>
            <TabsTrigger value="project">Project Details</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="additional">Additional</TabsTrigger>
          </TabsList>

          <TabsContent value="client" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Client Information
                </CardTitle>
                <CardDescription>Enter the client's contact and company details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="clientName">Client Name *</Label>
                    <Input
                      id="clientName"
                      value={jobForm.clientName}
                      onChange={(e) => setJobForm({ ...jobForm, clientName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientCompany">Company Name</Label>
                    <Input
                      id="clientCompany"
                      value={jobForm.clientCompany}
                      onChange={(e) => setJobForm({ ...jobForm, clientCompany: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientEmail">Email Address *</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={jobForm.clientEmail}
                      onChange={(e) => setJobForm({ ...jobForm, clientEmail: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientPhone">Phone Number *</Label>
                    <Input
                      id="clientPhone"
                      type="tel"
                      value={jobForm.clientPhone}
                      onChange={(e) => setJobForm({ ...jobForm, clientPhone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="project" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  Project Details
                </CardTitle>
                <CardDescription>Describe the project scope and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name *</Label>
                    <Input
                      id="projectName"
                      value={jobForm.projectName}
                      onChange={(e) => setJobForm({ ...jobForm, projectName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={jobForm.projectType}
                      onValueChange={(value) => setJobForm({ ...jobForm, projectType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                        <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
                        <SelectItem value="office">Office Renovation</SelectItem>
                        <SelectItem value="retail">Retail Buildout</SelectItem>
                        <SelectItem value="warehouse">Warehouse Upgrade</SelectItem>
                        <SelectItem value="restaurant">Restaurant Renovation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={jobForm.projectDescription}
                    onChange={(e) => setJobForm({ ...jobForm, projectDescription: e.target.value })}
                    placeholder="Provide a detailed description of the project scope, requirements, and any specific client requests..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Project Address *</Label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <Input
                        placeholder="Street Address"
                        value={jobForm.projectAddress}
                        onChange={(e) => setJobForm({ ...jobForm, projectAddress: e.target.value })}
                        required
                      />
                    </div>
                    <Input
                      placeholder="City"
                      value={jobForm.projectCity}
                      onChange={(e) => setJobForm({ ...jobForm, projectCity: e.target.value })}
                      required
                    />
                    <div className="grid gap-4 grid-cols-2">
                      <Input
                        placeholder="State"
                        value={jobForm.projectState}
                        onChange={(e) => setJobForm({ ...jobForm, projectState: e.target.value })}
                        required
                      />
                      <Input
                        placeholder="ZIP Code"
                        value={jobForm.projectZip}
                        onChange={(e) => setJobForm({ ...jobForm, projectZip: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Financial Information
                </CardTitle>
                <CardDescription>Project timeline and budget estimates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="estimatedValue">Estimated Project Value *</Label>
                    <Input
                      id="estimatedValue"
                      type="number"
                      placeholder="50000"
                      value={jobForm.estimatedValue}
                      onChange={(e) => setJobForm({ ...jobForm, estimatedValue: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proposedStartDate">Proposed Start Date</Label>
                    <Input
                      id="proposedStartDate"
                      type="date"
                      value={jobForm.proposedStartDate}
                      onChange={(e) => setJobForm({ ...jobForm, proposedStartDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estimatedDuration">Estimated Duration (weeks)</Label>
                    <Input
                      id="estimatedDuration"
                      type="number"
                      placeholder="8"
                      value={jobForm.estimatedDuration}
                      onChange={(e) => setJobForm({ ...jobForm, estimatedDuration: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Project Urgency</Label>
                  <Select value={jobForm.urgency} onValueChange={(value) => setJobForm({ ...jobForm, urgency: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Flexible timeline</SelectItem>
                      <SelectItem value="medium">Medium - Standard timeline</SelectItem>
                      <SelectItem value="high">High - Rush job</SelectItem>
                      <SelectItem value="emergency">Emergency - ASAP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="additional" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Additional Information
                </CardTitle>
                <CardDescription>Special requirements and competitive information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={jobForm.specialRequirements}
                    onChange={(e) => setJobForm({ ...jobForm, specialRequirements: e.target.value })}
                    placeholder="Any special requirements, constraints, or considerations for this project..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="competitorInfo">Competitor Information</Label>
                  <Textarea
                    id="competitorInfo"
                    value={jobForm.competitorInfo}
                    onChange={(e) => setJobForm({ ...jobForm, competitorInfo: e.target.value })}
                    placeholder="Information about competing bids or other contractors the client is considering..."
                    rows={3}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Project Requirements</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="siteVisit"
                        checked={jobForm.siteVisitRequired}
                        onCheckedChange={(checked) => setJobForm({ ...jobForm, siteVisitRequired: checked as boolean })}
                      />
                      <Label htmlFor="siteVisit">Site visit required before quote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="permits"
                        checked={jobForm.permitRequired}
                        onCheckedChange={(checked) => setJobForm({ ...jobForm, permitRequired: checked as boolean })}
                      />
                      <Label htmlFor="permits">Permits required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="design"
                        checked={jobForm.designRequired}
                        onCheckedChange={(checked) => setJobForm({ ...jobForm, designRequired: checked as boolean })}
                      />
                      <Label htmlFor="design">Design services required</Label>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full" size="lg">
                    Submit Job for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
