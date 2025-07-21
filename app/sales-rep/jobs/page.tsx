"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Calendar, DollarSign, Eye, Edit, Plus } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const jobs = [
    {
      id: "JOB-001",
      client: "ABC Construction",
      project: "Office Renovation",
      status: "Contract Sent",
      value: 45000,
      dateSubmitted: "2024-01-20",
      estimatedStart: "2024-02-15",
      priority: "Medium",
      notes: "Client requested expedited timeline",
    },
    {
      id: "JOB-002",
      client: "XYZ Corp",
      project: "Warehouse Upgrade",
      status: "In Review",
      value: 78000,
      dateSubmitted: "2024-01-18",
      estimatedStart: "2024-03-01",
      priority: "High",
      notes: "Large project with multiple phases",
    },
    {
      id: "JOB-003",
      client: "Smith Enterprises",
      project: "Retail Buildout",
      status: "Approved",
      value: 32000,
      dateSubmitted: "2024-01-15",
      estimatedStart: "2024-02-01",
      priority: "Low",
      notes: "Standard retail renovation",
    },
    {
      id: "JOB-004",
      client: "Tech Startup Inc",
      project: "Modern Office Design",
      status: "Rejected",
      value: 55000,
      dateSubmitted: "2024-01-10",
      estimatedStart: "2024-02-20",
      priority: "Medium",
      notes: "Budget constraints led to rejection",
    },
    {
      id: "JOB-005",
      client: "Restaurant Group",
      project: "Kitchen Renovation",
      status: "In Progress",
      value: 67000,
      dateSubmitted: "2024-01-05",
      estimatedStart: "2024-01-25",
      priority: "High",
      notes: "Project currently underway",
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || job.status.toLowerCase().replace(" ", "-") === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "default"
      case "Contract Sent":
        return "secondary"
      case "In Progress":
        return "default"
      case "In Review":
        return "outline"
      case "Rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600"
      case "Medium":
        return "text-yellow-600"
      case "Low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Jobs</h2>
            <p className="text-muted-foreground">View and manage your job submissions</p>
          </div>
        </div>
        <Button asChild>
          <Link href="/sales-rep/submit-job">
            <Plus className="mr-2 h-4 w-4" />
            New Job
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{jobs.length}</div>
            <p className="text-xs text-muted-foreground">All time submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {jobs.filter((job) => job.status === "Approved" || job.status === "In Progress").length}
            </div>
            <p className="text-xs text-muted-foreground">Successful submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${jobs.reduce((sum, job) => sum + job.value, 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Pipeline value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (jobs.filter((job) => job.status === "Approved" || job.status === "In Progress").length / jobs.length) *
                  100,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Approval rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Job Submissions</CardTitle>
          <CardDescription>Track and manage all your job submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Tabs value={statusFilter} onValueChange={setStatusFilter} className="w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="in-review">In Review</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="contract-sent">Contract Sent</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="transition-all duration-200 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{job.project}</h3>
                    <Badge variant={getStatusColor(job.status)}>{job.status}</Badge>
                    <span className={`text-sm font-medium ${getPriorityColor(job.priority)}`}>
                      {job.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{job.client}</span>
                    <span>•</span>
                    <span>{job.id}</span>
                    <span>•</span>
                    <span>Submitted {job.dateSubmitted}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <DollarSign className="mr-1 h-3 w-3" />${job.value.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      Est. Start: {job.estimatedStart}
                    </span>
                  </div>
                  {job.notes && <p className="text-sm text-muted-foreground">{job.notes}</p>}
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  {(job.status === "In Review" || job.status === "Rejected") && (
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground text-center mb-4">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria"
                : "You haven't submitted any jobs yet"}
            </p>
            <Button asChild>
              <Link href="/sales-rep/submit-job">
                <Plus className="mr-2 h-4 w-4" />
                Submit Your First Job
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
