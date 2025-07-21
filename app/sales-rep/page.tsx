import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { PlusCircle, FileText, MessageCircle, BarChart3, DollarSign, Target, Clock } from "lucide-react"
import Link from "next/link"

export default function SalesRepDashboard() {
  const quickLinks = [
    {
      title: "Submit New Job",
      description: "Create a new job submission for contract generation",
      href: "/sales-rep/submit-job",
      icon: PlusCircle,
      color: "bg-blue-500",
      featured: true,
    },
    {
      title: "Direct Chat",
      description: "Communicate directly with management",
      href: "/sales-rep/chat",
      icon: MessageCircle,
      color: "bg-green-500",
    },
    {
      title: "My Jobs",
      description: "View and manage your job submissions",
      href: "/sales-rep/jobs",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      title: "Performance",
      description: "Track your sales performance and metrics",
      href: "/sales-rep/performance",
      icon: BarChart3,
      color: "bg-orange-500",
    },
  ]

  const recentJobs = [
    {
      id: "JOB-001",
      client: "ABC Construction",
      project: "Office Renovation",
      status: "Contract Sent",
      value: 45000,
      date: "2024-01-20",
    },
    {
      id: "JOB-002",
      client: "XYZ Corp",
      project: "Warehouse Upgrade",
      status: "In Review",
      value: 78000,
      date: "2024-01-18",
    },
    {
      id: "JOB-003",
      client: "Smith Enterprises",
      project: "Retail Buildout",
      status: "Approved",
      value: 32000,
      date: "2024-01-15",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sales Rep Dashboard</h2>
            <p className="text-muted-foreground">Your central hub for job submissions and performance tracking</p>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs This Month</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$485K</div>
            <p className="text-xs text-muted-foreground">Pipeline value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Above target (60%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground">Faster than average</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Card
            key={link.title}
            className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.featured ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
          >
            {link.featured && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                Priority
              </div>
            )}
            <CardHeader className="pb-4">
              <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mb-4`}>
                <link.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">{link.title}</CardTitle>
              <CardDescription className="text-sm">{link.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={link.href}>Access</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Jobs */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Job Submissions</CardTitle>
          <CardDescription>Your latest job submissions and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{job.client}</p>
                  <p className="text-sm text-muted-foreground">{job.project}</p>
                  <p className="text-xs text-muted-foreground">
                    {job.id} • Submitted {job.date}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      job.status === "Approved" ? "default" : job.status === "Contract Sent" ? "secondary" : "outline"
                    }
                  >
                    {job.status}
                  </Badge>
                  <div className="text-right">
                    <p className="font-medium">${job.value.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Project Value</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/sales-rep/jobs">View All Jobs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
