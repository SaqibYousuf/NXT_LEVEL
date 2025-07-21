"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, LineChart, PieChart } from "@/components/charts"
import { TrendingUp, TrendingDown, DollarSign, Target, Award, Clock, Users } from "lucide-react"

export default function PerformancePage() {
  const currentMonth = {
    jobsSubmitted: 12,
    jobsApproved: 8,
    totalValue: 485000,
    avgResponseTime: 2.4,
    conversionRate: 67,
    ranking: 3,
  }

  const lastMonth = {
    jobsSubmitted: 9,
    jobsApproved: 6,
    totalValue: 380000,
    avgResponseTime: 3.1,
    conversionRate: 67,
    ranking: 4,
  }

  const yearToDate = {
    jobsSubmitted: 89,
    jobsApproved: 62,
    totalValue: 3200000,
    commission: 48000,
    topMonth: "October",
    bestConversion: 78,
  }

  const goals = {
    monthlyJobs: 15,
    monthlyValue: 500000,
    conversionRate: 70,
    responseTime: 2.0,
  }

  const recentAchievements = [
    {
      title: "Top Performer",
      description: "Highest conversion rate in Q4",
      date: "2024-01-15",
      type: "gold",
    },
    {
      title: "Quick Response",
      description: "Average response time under 2 hours",
      date: "2024-01-10",
      type: "silver",
    },
    {
      title: "Million Dollar Quarter",
      description: "Exceeded $1M in quarterly submissions",
      date: "2024-01-01",
      type: "gold",
    },
  ]

  const getChangeIndicator = (current: number, previous: number, isPercentage = false) => {
    const change = current - previous
    const percentChange = (change / previous) * 100
    const isPositive = change > 0

    return (
      <div className={`flex items-center text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
        {isPercentage ? `${Math.abs(percentChange).toFixed(1)}%` : `${Math.abs(change)}`}
        {isPositive ? " increase" : " decrease"}
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Performance Dashboard</h2>
            <p className="text-muted-foreground">Track your sales performance and achievements</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Current Month Performance */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Jobs This Month</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentMonth.jobsSubmitted}</div>
                {getChangeIndicator(currentMonth.jobsSubmitted, lastMonth.jobsSubmitted)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentMonth.conversionRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {currentMonth.jobsApproved} of {currentMonth.jobsSubmitted} approved
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${(currentMonth.totalValue / 1000).toFixed(0)}K</div>
                {getChangeIndicator(currentMonth.totalValue, lastMonth.totalValue)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Ranking</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#{currentMonth.ranking}</div>
                <p className="text-xs text-muted-foreground">Out of 12 reps</p>
              </CardContent>
            </Card>
          </div>

          {/* Year to Date Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Year to Date Performance</CardTitle>
              <CardDescription>Your performance summary for {new Date().getFullYear()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Jobs</p>
                  <p className="text-2xl font-bold">{yearToDate.jobsSubmitted}</p>
                  <p className="text-xs text-muted-foreground">{yearToDate.jobsApproved} approved</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">${(yearToDate.totalValue / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-muted-foreground">Pipeline value</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Commission Earned</p>
                  <p className="text-2xl font-bold">${yearToDate.commission.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Year to date</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Best Month</p>
                  <p className="text-2xl font-bold">{yearToDate.topMonth}</p>
                  <p className="text-xs text-muted-foreground">{yearToDate.bestConversion}% conversion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Charts */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance Trend</CardTitle>
                <CardDescription>Jobs submitted and approved over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Status Distribution</CardTitle>
                <CardDescription>Current status of all your submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Goals</CardTitle>
              <CardDescription>Track your progress towards monthly targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Jobs Submitted</span>
                  <span className="text-sm text-muted-foreground">
                    {currentMonth.jobsSubmitted} / {goals.monthlyJobs}
                  </span>
                </div>
                <Progress value={(currentMonth.jobsSubmitted / goals.monthlyJobs) * 100} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pipeline Value</span>
                  <span className="text-sm text-muted-foreground">
                    ${(currentMonth.totalValue / 1000).toFixed(0)}K / ${(goals.monthlyValue / 1000).toFixed(0)}K
                  </span>
                </div>
                <Progress value={(currentMonth.totalValue / goals.monthlyValue) * 100} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-sm text-muted-foreground">
                    {currentMonth.conversionRate}% / {goals.conversionRate}%
                  </span>
                </div>
                <Progress value={(currentMonth.conversionRate / goals.conversionRate) * 100} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="text-sm text-muted-foreground">
                    {currentMonth.avgResponseTime}h / {goals.responseTime}h target
                  </span>
                </div>
                <Progress
                  value={Math.max(
                    0,
                    100 - ((currentMonth.avgResponseTime - goals.responseTime) / goals.responseTime) * 100,
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Goal Achievement History</CardTitle>
              <CardDescription>Your goal completion over the past months</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Your latest accomplishments and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.type === "gold" ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <Award
                        className={`h-6 w-6 ${achievement.type === "gold" ? "text-yellow-600" : "text-gray-600"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                    <Badge variant={achievement.type === "gold" ? "default" : "secondary"}>
                      {achievement.type === "gold" ? "Gold" : "Silver"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentMonth.avgResponseTime}h</div>
                {getChangeIndicator(lastMonth.avgResponseTime, currentMonth.avgResponseTime)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Job Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${Math.round(currentMonth.totalValue / currentMonth.jobsSubmitted / 1000)}K
                </div>
                <p className="text-xs text-muted-foreground">Per submission</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Client Retention</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Repeat customers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-muted-foreground">Against competitors</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Detailed breakdown of your sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
