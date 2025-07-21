"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  MessageCircle,
  Camera,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState("PRJ-001")

  const projects = [
    {
      id: "PRJ-001",
      name: "Kitchen Renovation",
      status: "In Progress",
      progress: 65,
      startDate: "2024-01-15",
      estimatedCompletion: "2024-02-28",
      actualCompletion: null,
      totalValue: 45000,
      paidAmount: 22500,
      address: "123 Main St, Chicago, IL",
      description: "Complete kitchen renovation including new cabinets, countertops, appliances, and flooring.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "2024-01-20" },
        { name: "Permits Obtained", status: "completed", date: "2024-01-25" },
        { name: "Demolition", status: "completed", date: "2024-02-01" },
        { name: "Electrical Work", status: "in-progress", date: "2024-02-10" },
        { name: "Plumbing", status: "pending", date: "2024-02-15" },
        { name: "Installation", status: "pending", date: "2024-02-20" },
        { name: "Final Inspection", status: "pending", date: "2024-02-28" },
      ],
      documents: [
        { name: "Contract Agreement", type: "PDF", size: "2.4 MB", date: "2024-01-15" },
        { name: "Design Plans", type: "PDF", size: "5.1 MB", date: "2024-01-18" },
        { name: "Permit Documents", type: "PDF", size: "1.2 MB", date: "2024-01-25" },
        { name: "Material Specifications", type: "PDF", size: "3.8 MB", date: "2024-01-30" },
      ],
      photos: [
        { name: "Before - Kitchen Overview", date: "2024-01-15" },
        { name: "Demolition Progress", date: "2024-02-01" },
        { name: "Electrical Rough-in", date: "2024-02-08" },
      ],
    },
    {
      id: "PRJ-002",
      name: "Bathroom Remodel",
      status: "Planning",
      progress: 25,
      startDate: "2024-02-01",
      estimatedCompletion: "2024-03-15",
      actualCompletion: null,
      totalValue: 32000,
      paidAmount: 8000,
      address: "123 Main St, Chicago, IL",
      description: "Master bathroom renovation with new tile, fixtures, and vanity.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "2024-02-05" },
        { name: "Permits Obtained", status: "in-progress", date: "2024-02-10" },
        { name: "Demolition", status: "pending", date: "2024-02-15" },
        { name: "Plumbing Rough-in", status: "pending", date: "2024-02-20" },
        { name: "Electrical Work", status: "pending", date: "2024-02-25" },
        { name: "Tile Installation", status: "pending", date: "2024-03-01" },
        { name: "Fixture Installation", status: "pending", date: "2024-03-10" },
        { name: "Final Inspection", status: "pending", date: "2024-03-15" },
      ],
      documents: [
        { name: "Contract Agreement", type: "PDF", size: "2.1 MB", date: "2024-02-01" },
        { name: "Design Plans", type: "PDF", size: "4.2 MB", date: "2024-02-03" },
      ],
      photos: [{ name: "Before - Bathroom Overview", date: "2024-02-01" }],
    },
  ]

  const currentProject = projects.find((p) => p.id === selectedProject) || projects[0]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <p className="text-muted-foreground">Track progress and manage your project details</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Project List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Select a project to view details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedProject === project.id ? "bg-primary/10 border-primary" : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{project.name}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant={project.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                        {project.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{currentProject.name}</CardTitle>
                      <CardDescription>{currentProject.description}</CardDescription>
                    </div>
                    <Badge variant={currentProject.status === "In Progress" ? "default" : "secondary"}>
                      {currentProject.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        Start Date
                      </div>
                      <p className="font-medium">{currentProject.startDate}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Est. Completion
                      </div>
                      <p className="font-medium">{currentProject.estimatedCompletion}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Total Value
                      </div>
                      <p className="font-medium">${currentProject.totalValue.toLocaleString()}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        Location
                      </div>
                      <p className="font-medium text-sm">{currentProject.address}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Project Progress</span>
                      <span className="text-sm text-muted-foreground">{currentProject.progress}%</span>
                    </div>
                    <Progress value={currentProject.progress} className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Payment Progress</span>
                      <span className="text-sm text-muted-foreground">
                        ${currentProject.paidAmount.toLocaleString()} / ${currentProject.totalValue.toLocaleString()}
                      </span>
                    </div>
                    <Progress
                      value={(currentProject.paidAmount / currentProject.totalValue) * 100}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button asChild>
                      <Link href="/customer/chat">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact Team
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      View Contract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="milestones" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Milestones</CardTitle>
                  <CardDescription>Track the progress of key project phases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentProject.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0">
                          {milestone.status === "completed" ? (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          ) : milestone.status === "in-progress" ? (
                            <Clock className="h-6 w-6 text-blue-500" />
                          ) : (
                            <AlertCircle className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{milestone.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {milestone.status === "completed"
                              ? "Completed"
                              : milestone.status === "in-progress"
                                ? "In Progress"
                                : "Scheduled"}{" "}
                            - {milestone.date}
                          </p>
                        </div>
                        <Badge
                          variant={
                            milestone.status === "completed"
                              ? "default"
                              : milestone.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {milestone.status === "completed"
                            ? "Done"
                            : milestone.status === "in-progress"
                              ? "Active"
                              : "Pending"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Documents</CardTitle>
                  <CardDescription>Access contracts, plans, and other project documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentProject.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} • {doc.size} • {doc.date}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Photos</CardTitle>
                  <CardDescription>View progress photos and documentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {currentProject.photos.map((photo, index) => (
                      <div key={index} className="space-y-2">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{photo.name}</p>
                          <p className="text-xs text-muted-foreground">{photo.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
