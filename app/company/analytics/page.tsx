"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/charts"
import { Download, Calendar, Filter, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function CompanyAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month")
  const [filterType, setFilterType] = useState("all")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Comprehensive analytics and reporting for your company</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger>
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.2M</div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <p className="text-xs text-green-500">+12% from previous period</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <p className="text-xs text-green-500">+8% from previous period</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Job Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$16.9K</div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <p className="text-xs text-green-500">+3% from previous period</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <div className="flex items-center space-x-2">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
              <p className="text-xs text-red-500">-2% from previous period</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue for the past 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Job Status Distribution</CardTitle>
                <CardDescription>Current status of all jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sales Rep Performance</CardTitle>
              <CardDescription>Job submissions by sales representative</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
              <CardDescription>Detailed revenue metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <LineChart />
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Project Type</CardTitle>
                <CardDescription>Distribution across project categories</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Region</CardTitle>
                <CardDescription>Geographic distribution of revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Metrics</CardTitle>
              <CardDescription>Key job performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Job Status</h3>
                  <PieChart />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Job Types</h3>
                  <PieChart />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Job Values</h3>
                  <BarChart />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Job Completion Time</CardTitle>
              <CardDescription>Average time to complete jobs by type</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Performance metrics by team and department</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Highest performing team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="font-medium text-blue-700">
                            {String.fromCharCode(65 + i)}
                            {String.fromCharCode(65 + i + 1)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">Team Member {i + 1}</p>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 10) + 20} jobs • $
                            {(Math.floor(Math.random() * 200) + 400) * 1000}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{Math.floor(Math.random() * 10) + 90}%</p>
                        <p className="text-sm text-muted-foreground">Performance</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Performance metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Analytics</CardTitle>
          <CardDescription>AI-powered insights and predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-blue-50/50 border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">Revenue Forecast</h3>
              <p className="text-blue-700 mb-2">
                Based on current trends, we predict a 15% increase in revenue over the next quarter. This is primarily
                driven by growth in commercial projects.
              </p>
              <div className="h-40">
                <LineChart />
              </div>
            </div>
            <div className="rounded-lg border p-4 bg-green-50/50 border-green-200">
              <h3 className="font-medium text-green-800 mb-2">Efficiency Opportunities</h3>
              <p className="text-green-700">
                Our analysis shows that reducing the average job approval time by 2 days could increase overall
                throughput by 8%. Consider streamlining the approval process for higher efficiency.
              </p>
            </div>
            <div className="rounded-lg border p-4 bg-yellow-50/50 border-yellow-200">
              <h3 className="font-medium text-yellow-800 mb-2">Resource Allocation</h3>
              <p className="text-yellow-700">
                The Sales team is currently operating at 92% capacity, while Operations is at 78%. Consider
                redistributing resources to balance workloads and improve overall efficiency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
