"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Mail, Phone, MoreHorizontal, UserPlus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type TeamMember = {
  id: number
  name: string
  role: string
  email: string
  phone: string
  department: string
  status: "active" | "inactive" | "on-leave"
  avatar?: string
  jobsCompleted?: number
  totalValue?: number
  performance?: number
}

export default function TeamManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Sales Representative",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      department: "Sales",
      status: "active",
      jobsCompleted: 24,
      totalValue: 680000,
      performance: 95,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Administrator",
      email: "sarah.johnson@example.com",
      phone: "(555) 234-5678",
      department: "Management",
      status: "active",
      jobsCompleted: 0,
      totalValue: 0,
      performance: 98,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Sales Representative",
      email: "michael.brown@example.com",
      phone: "(555) 345-6789",
      department: "Sales",
      status: "active",
      jobsCompleted: 22,
      totalValue: 610000,
      performance: 85,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Sales Representative",
      email: "emily.davis@example.com",
      phone: "(555) 456-7890",
      department: "Sales",
      status: "on-leave",
      jobsCompleted: 16,
      totalValue: 480000,
      performance: 80,
    },
    {
      id: 5,
      name: "Robert Wilson",
      role: "Dealer Manager",
      email: "robert.wilson@example.com",
      phone: "(555) 567-8901",
      department: "Dealer",
      status: "active",
      jobsCompleted: 0,
      totalValue: 0,
      performance: 92,
    },
    {
      id: 6,
      name: "Jennifer Lee",
      role: "Sales Representative",
      email: "jennifer.lee@example.com",
      phone: "(555) 678-9012",
      department: "Sales",
      status: "active",
      jobsCompleted: 15,
      totalValue: 450000,
      performance: 82,
    },
    {
      id: 7,
      name: "David Miller",
      role: "Project Manager",
      email: "david.miller@example.com",
      phone: "(555) 789-0123",
      department: "Operations",
      status: "active",
      jobsCompleted: 0,
      totalValue: 0,
      performance: 88,
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Sales Representative",
      email: "lisa.anderson@example.com",
      phone: "(555) 890-1234",
      department: "Sales",
      status: "inactive",
      jobsCompleted: 21,
      totalValue: 600000,
      performance: 90,
    },
  ]

  const getStatusBadgeVariant = (status: TeamMember["status"]) => {
    switch (status) {
      case "active":
        return "default"
      case "inactive":
        return "secondary"
      case "on-leave":
        return "outline"
      default:
        return "outline"
    }
  }

  const filteredTeamMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Team Management</h2>
          <p className="text-muted-foreground">Manage your team members and their permissions</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>View and manage all team members across departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or role..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Management">Management</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="Dealer">Dealer</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Members</TabsTrigger>
                <TabsTrigger value="sales">Sales Team</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                {filteredTeamMembers.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">No team members found matching your search criteria.</p>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                      <div className="col-span-4">Name</div>
                      <div className="col-span-2">Role</div>
                      <div className="col-span-2">Department</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Actions</div>
                    </div>
                    {filteredTeamMembers.map((member) => (
                      <div key={member.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="col-span-4 flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={member.avatar || `/placeholder.svg?height=40&width=40&query=${member.name}`}
                            />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="col-span-2">{member.role}</div>
                        <div className="col-span-2">{member.department}</div>
                        <div className="col-span-2">
                          <Badge variant={getStatusBadgeVariant(member.status)}>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="col-span-2 flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Deactivate Account</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="sales" className="pt-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Jobs Completed</div>
                    <div className="col-span-2">Total Value</div>
                    <div className="col-span-2">Performance</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {filteredTeamMembers
                    .filter((member) => member.department === "Sales")
                    .map((member) => (
                      <div key={member.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="col-span-3 flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={member.avatar || `/placeholder.svg?height=40&width=40&query=${member.name}`}
                            />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="col-span-2">{member.jobsCompleted}</div>
                        <div className="col-span-2">${member.totalValue?.toLocaleString()}</div>
                        <div className="col-span-2">{member.performance}%</div>
                        <div className="col-span-1">
                          <Badge variant={getStatusBadgeVariant(member.status)}>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="col-span-2 flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Performance</DropdownMenuItem>
                              <DropdownMenuItem>View Jobs</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="management" className="pt-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                    <div className="col-span-4">Name</div>
                    <div className="col-span-3">Role</div>
                    <div className="col-span-3">Contact</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {filteredTeamMembers
                    .filter((member) => member.department === "Management")
                    .map((member) => (
                      <div key={member.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="col-span-4 flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={member.avatar || `/placeholder.svg?height=40&width=40&query=${member.name}`}
                            />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="col-span-3">{member.role}</div>
                        <div className="col-span-3">{member.phone}</div>
                        <div className="col-span-2 flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
            <CardDescription>Team distribution across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Sales", "Management", "Operations", "Dealer"].map((department) => {
                const count = teamMembers.filter((member) => member.department === department).length
                const percentage = Math.round((count / teamMembers.length) * 100)

                return (
                  <div key={department} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{department}</span>
                      <span>
                        {count} members ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Status</CardTitle>
            <CardDescription>Current status of team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["active", "inactive", "on-leave"].map((status) => {
                const count = teamMembers.filter((member) => member.status === status).length
                const percentage = Math.round((count / teamMembers.length) * 100)

                let barColor = "bg-green-500"
                if (status === "inactive") barColor = "bg-gray-500"
                if (status === "on-leave") barColor = "bg-yellow-500"

                return (
                  <div key={status} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                      <span>
                        {count} members ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
