import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, Award, Star } from "lucide-react"

export default function SalesRepsPage() {
  const salesReps = [
    {
      id: 1,
      name: "John Smith",
      avatar: "JS",
      jobsCompleted: 24,
      totalValue: 680000,
      conversionRate: 72,
      performance: 95,
      topPerformer: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "SJ",
      jobsCompleted: 18,
      totalValue: 520000,
      conversionRate: 68,
      performance: 88,
      topPerformer: false,
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "MB",
      jobsCompleted: 22,
      totalValue: 610000,
      conversionRate: 65,
      performance: 85,
      topPerformer: false,
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "ED",
      jobsCompleted: 16,
      totalValue: 480000,
      conversionRate: 62,
      performance: 80,
      topPerformer: false,
    },
    {
      id: 5,
      name: "Robert Wilson",
      avatar: "RW",
      jobsCompleted: 20,
      totalValue: 590000,
      conversionRate: 70,
      performance: 92,
      topPerformer: true,
    },
    {
      id: 6,
      name: "Jennifer Lee",
      avatar: "JL",
      jobsCompleted: 15,
      totalValue: 450000,
      conversionRate: 64,
      performance: 82,
      topPerformer: false,
    },
    {
      id: 7,
      name: "David Miller",
      avatar: "DM",
      jobsCompleted: 19,
      totalValue: 540000,
      conversionRate: 67,
      performance: 86,
      topPerformer: false,
    },
    {
      id: 8,
      name: "Lisa Anderson",
      avatar: "LA",
      jobsCompleted: 21,
      totalValue: 600000,
      conversionRate: 69,
      performance: 90,
      topPerformer: true,
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sales Rep Performance</h2>
            <p className="text-muted-foreground">Detailed performance metrics for your sales team</p>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="grid gap-4 md:grid-cols-3">
        {salesReps
          .filter((rep) => rep.topPerformer)
          .map((rep) => (
            <Card key={rep.id} className="border-2 border-yellow-200 bg-yellow-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{rep.name}</CardTitle>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <CardDescription>Top Performer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Jobs Completed</p>
                    <p className="text-lg font-bold">{rep.jobsCompleted}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Total Value</p>
                    <p className="text-lg font-bold">${(rep.totalValue / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Conversion Rate</p>
                    <p className="text-lg font-bold">{rep.conversionRate}%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="text-lg font-bold">{rep.performance}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Sales Reps</TabsTrigger>
          <TabsTrigger value="top">Top Performers</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Rep Performance</CardTitle>
              <CardDescription>Detailed metrics for all sales representatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {salesReps.map((rep) => (
                  <div key={rep.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="font-medium text-blue-700">{rep.avatar}</span>
                        </div>
                        <div>
                          <p className="font-medium flex items-center">
                            {rep.name}
                            {rep.topPerformer && <Star className="h-4 w-4 ml-2 text-yellow-500" />}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {rep.jobsCompleted} jobs • ${(rep.totalValue / 1000).toFixed(0)}K total value
                          </p>
                        </div>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Target className="h-4 w-4 mr-1" />
                            <span>Conversion Rate</span>
                          </span>
                          <span>{rep.conversionRate}%</span>
                        </div>
                        <Progress value={rep.conversionRate} className="h-1" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>Performance Score</span>
                          </span>
                          <span>{rep.performance}%</span>
                        </div>
                        <Progress value={rep.performance} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="top" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>Sales representatives with the highest performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {salesReps
                  .filter((rep) => rep.performance >= 85)
                  .map((rep) => (
                    <div key={rep.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="font-medium text-blue-700">{rep.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium flex items-center">
                              {rep.name}
                              {rep.topPerformer && <Star className="h-4 w-4 ml-2 text-yellow-500" />}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {rep.jobsCompleted} jobs • ${(rep.totalValue / 1000).toFixed(0)}K total value
                            </p>
                          </div>
                        </div>
                        <Badge variant="default">{rep.performance}% Performance</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center">
                              <Target className="h-4 w-4 mr-1" />
                              <span>Conversion Rate</span>
                            </span>
                            <span>{rep.conversionRate}%</span>
                          </div>
                          <Progress value={rep.conversionRate} className="h-1" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest performance updates from your sales team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesReps.slice(0, 5).map((rep, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="font-medium text-blue-700">{rep.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium">{rep.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Completed a new job worth ${(Math.random() * 50000 + 20000).toFixed(0)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Today</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
