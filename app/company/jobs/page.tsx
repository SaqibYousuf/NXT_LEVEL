"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Search,
  Filter,
  Download,
  ExternalLink,
  Database,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

type Job = {
  id: string
  client: string
  project: string
  status:
    | "Contract Sent"
    | "In Review"
    | "Approved"
    | "Contract Signed"
    | "In Progress"
    | "Completed"
    | "On Hold"
    | "Attention Required"
  value: number
  date: string
  salesRep: string
  location: string
  notes?: string
}

export default function JobTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const jobs: Job[] = [
    {
      id: "JOB-001",
      client: "ABC Construction",
      project: "Office Renovation",
      status: "Contract Sent",
      value: 45000,
      date: "2024-01-20",
      salesRep: "John Smith",
      location: "Chicago, IL",
      notes: "Client requested expedited timeline. Premium pricing applied.",
    },
    {
      id: "JOB-002",
      client: "XYZ Corp",
      project: "Warehouse Upgrade",
      status: "In Review",
      value: 78000,
      date: "2024-01-18",
      salesRep: "Sarah Johnson",
      location: "Detroit, MI",
      notes: "Large project with potential for additional phases.",
    },
    {
      id: "JOB-003",
      client: "Smith Enterprises",
      project: "Retail Buildout",
      status: "Approved",
      value: 32000,
      date: "2024-01-15",
      salesRep: "Michael Brown",
      location: "Indianapolis, IN",
      notes: "Repeat client. Expedite processing.",
    },
    {
      id: "JOB-004",
      client: "Johnson & Sons",
      project: "Restaurant Renovation",
      status: "Contract Signed",
      value: 56000,
      date: "2024-01-10",
      salesRep: "Emily Davis",
      location: "Columbus, OH",
      notes: "Client has strict deadline for grand opening.",
    },
    {
      id: "JOB-005",
      client: "Metro Development",
      project: "Office Complex",
      status: "In Progress",
      value: 120000,
      date: "2024-01-05",
      salesRep: "Robert Wilson",
      location: "Cincinnati, OH",
      notes: "High-priority client. CEO is personally involved.",
    },
    {
      id: "JOB-006",
      client: "City Hospital",
      project: "Medical Office Renovation",
      status: "Completed",
      value: 95000,
      date: "2023-12-15",
      salesRep: "Jennifer Lee",
      location: "Cleveland, OH",
      notes: "Final inspection passed. Awaiting final payment.",
    },
    {
      id: "JOB-007",
      client: "Tech Innovations",
      project: "Data Center Buildout",
      status: "On Hold",
      value: 220000,
      date: "2024-01-12",
      salesRep: "David Miller",
      location: "Pittsburgh, PA",
      notes: "Client requested hold due to budget review.",
    },
    {
      id: "JOB-008",
      client: "Retail Solutions",
      project: "Store Remodel",
      status: "Attention Required",
      value: 68000,
      date: "2024-01-08",
      salesRep: "Lisa Anderson",
      location: "Louisville, KY",
      notes: "Material delivery delayed. Need to update client.",
    },
  ]

  const getStatusBadgeVariant = (status: Job["status"]) => {
    switch (status) {
      case "Approved":
        return "default"
      case "Contract Sent":
      case "In Review":
        return "secondary"
      case "Contract Signed":
      case "In Progress":
        return "success"
      case "Completed":
        return "default"
      case "On Hold":
        return "outline"
      case "Attention Required":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: Job["status"]) => {
    switch (status) {
      case "Approved":
      case "Completed":
        return <CheckCircle className="h-4 w-4" />
      case "Contract Sent":
      case "In Review":
      case "Contract Signed":
      case "In Progress":
      case "On Hold":
        return <Clock className="h-4 w-4" />
      case "Attention Required":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return null
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.salesRep.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || job.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Job Tracking</h2>
            <p className="text-muted-foreground">Track and manage all jobs across the organization</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Database className="mr-2 h-4 w-4" />
            Sync with Smartsheet
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Export Jobs
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Job Management</CardTitle>
          <CardDescription>Track and manage all jobs in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by client, project, ID, or sales rep..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="In Review">In Review</SelectItem>
                    <SelectItem value="Contract Sent">Contract Sent</SelectItem>
                    <SelectItem value="Contract Signed">Contract Signed</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="On Hold">On Hold</SelectItem>
                    <SelectItem value="Attention Required">Attention Required</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="attention">Needs Attention</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="space-y-1 mb-2 md:mb-0">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          <p className="font-medium">{job.project}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.client}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{job.id}</span>
                          <span className="mx-1">•</span>
                          <span>{job.location}</span>
                          <span className="mx-1">•</span>
                          <span>Submitted {job.date}</span>
                          <span className="mx-1">•</span>
                          <span>Rep: {job.salesRep}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={getStatusBadgeVariant(job.status)} className="flex items-center gap-1">
                          {getStatusIcon(job.status)}
                          {job.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium">${job.value.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Project Value</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-3.5 w-3.5 mr-1" />
                            Contract
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              <TabsContent value="active" className="pt-4">
                {filteredJobs
                  .filter((job) => ["In Progress", "Contract Signed", "Approved"].includes(job.status))
                  .map((job) => (
                    <div
                      key={job.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors mb-4"
                    >
                      <div className="space-y-1 mb-2 md:mb-0">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          <p className="font-medium">{job.project}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.client}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{job.id}</span>
                          <span className="mx-1">•</span>
                          <span>{job.location}</span>
                          <span className="mx-1">•</span>
                          <span>Submitted {job.date}</span>
                          <span className="mx-1">•</span>
                          <span>Rep: {job.salesRep}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={getStatusBadgeVariant(job.status)} className="flex items-center gap-1">
                          {getStatusIcon(job.status)}
                          {job.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium">${job.value.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Project Value</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-3.5 w-3.5 mr-1" />
                            Contract
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              <TabsContent value="attention" className="pt-4">
                {filteredJobs
                  .filter((job) => job.status === "Attention Required")
                  .map((job) => (
                    <div
                      key={job.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border-2 border-red-200 bg-red-50/30 rounded-lg mb-4"
                    >
                      <div className="space-y-1 mb-2 md:mb-0">
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                          <p className="font-medium">{job.project}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.client}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{job.id}</span>
                          <span className="mx-1">•</span>
                          <span>{job.location}</span>
                          <span className="mx-1">•</span>
                          <span>Submitted {job.date}</span>
                          <span className="mx-1">•</span>
                          <span>Rep: {job.salesRep}</span>
                        </div>
                        {job.notes && <p className="text-sm text-red-600 mt-1">Note: {job.notes}</p>}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertTriangle className="h-4 w-4" />
                          {job.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium">${job.value.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Project Value</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-3.5 w-3.5 mr-1" />
                            Contract
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
