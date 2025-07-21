"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, Check, X, Settings, LinkIcon, ArrowRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SmartsheetIntegrationPage() {
  const [connected, setConnected] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState("2024-01-21 14:32:45")

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setSyncing(false)
      setLastSync(new Date().toISOString().replace("T", " ").substring(0, 19))
    }, 2000)
  }

  const mappedFields = [
    { nxtField: "Job ID", smartsheetField: "Job ID", status: "mapped" },
    { nxtField: "Client Name", smartsheetField: "Client", status: "mapped" },
    { nxtField: "Project Name", smartsheetField: "Project Name", status: "mapped" },
    { nxtField: "Project Value", smartsheetField: "Value", status: "mapped" },
    { nxtField: "Sales Rep", smartsheetField: "Sales Representative", status: "mapped" },
    { nxtField: "Status", smartsheetField: "Status", status: "mapped" },
    { nxtField: "Location", smartsheetField: "Project Location", status: "mapped" },
    { nxtField: "Start Date", smartsheetField: "Start Date", status: "mapped" },
    { nxtField: "Estimated Completion", smartsheetField: "Est. Completion", status: "mapped" },
    { nxtField: "Notes", smartsheetField: "Notes", status: "mapped" },
    { nxtField: "Contract URL", smartsheetField: "Contract Link", status: "mapped" },
    { nxtField: "Project Manager", smartsheetField: "", status: "unmapped" },
  ]

  const syncHistory = [
    { date: "2024-01-21 14:32:45", status: "success", jobsUpdated: 8, errors: 0 },
    { date: "2024-01-20 09:15:22", status: "success", jobsUpdated: 5, errors: 0 },
    { date: "2024-01-19 16:45:10", status: "error", jobsUpdated: 3, errors: 2 },
    { date: "2024-01-18 11:20:33", status: "success", jobsUpdated: 12, errors: 0 },
    { date: "2024-01-17 15:05:18", status: "success", jobsUpdated: 6, errors: 0 },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Smartsheet Integration</h2>
            <p className="text-muted-foreground">Manage your Smartsheet integration for automated job tracking</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-2">
          <CardHeader>
            <CardTitle>Connection Status</CardTitle>
            <CardDescription>Manage your Smartsheet connection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Connection Status:</span>
              {connected ? (
                <Badge variant="default" className="bg-green-500">
                  <Check className="h-3 w-3 mr-1" />
                  Connected
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <X className="h-3 w-3 mr-1" />
                  Disconnected
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Last Sync:</span>
              <span>{lastSync}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Auto Sync:</span>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Sync Interval:</span>
              <span>15 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full" onClick={handleSync} disabled={syncing}>
              {syncing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sync Now
                </>
              )}
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-7 md:col-span-5">
          <CardHeader>
            <CardTitle>Smartsheet Integration</CardTitle>
            <CardDescription>Configure how your NXT Portal data syncs with Smartsheet</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="field-mapping" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="field-mapping">Field Mapping</TabsTrigger>
                <TabsTrigger value="sync-history">Sync History</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="field-mapping" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Field Mapping</h3>
                    <Button variant="outline" size="sm">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Auto Map Fields
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Map fields from NXT Portal to your Smartsheet columns</p>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-3 gap-4 p-3 border-b bg-muted/50 font-medium">
                    <div>NXT Portal Field</div>
                    <div>Smartsheet Column</div>
                    <div>Status</div>
                  </div>
                  {mappedFields.map((field, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 p-3 border-b last:border-0 items-center">
                      <div>{field.nxtField}</div>
                      <div>
                        <Select defaultValue={field.smartsheetField || "unmapped"}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unmapped">-- Select Field --</SelectItem>
                            <SelectItem value="Job ID">Job ID</SelectItem>
                            <SelectItem value="Client">Client</SelectItem>
                            <SelectItem value="Project Name">Project Name</SelectItem>
                            <SelectItem value="Value">Value</SelectItem>
                            <SelectItem value="Sales Representative">Sales Representative</SelectItem>
                            <SelectItem value="Status">Status</SelectItem>
                            <SelectItem value="Project Location">Project Location</SelectItem>
                            <SelectItem value="Start Date">Start Date</SelectItem>
                            <SelectItem value="Est. Completion">Est. Completion</SelectItem>
                            <SelectItem value="Notes">Notes</SelectItem>
                            <SelectItem value="Contract Link">Contract Link</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        {field.status === "mapped" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3 mr-1" />
                            Mapped
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Unmapped
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button>Save Mapping</Button>
                </div>
              </TabsContent>
              <TabsContent value="sync-history" className="pt-4">
                <div className="border rounded-md">
                  <div className="grid grid-cols-4 gap-4 p-3 border-b bg-muted/50 font-medium">
                    <div>Date & Time</div>
                    <div>Status</div>
                    <div>Jobs Updated</div>
                    <div>Errors</div>
                  </div>
                  {syncHistory.map((sync, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-3 border-b last:border-0">
                      <div>{sync.date}</div>
                      <div>
                        {sync.status === "success" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3 mr-1" />
                            Success
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            <X className="h-3 w-3 mr-1" />
                            Error
                          </Badge>
                        )}
                      </div>
                      <div>{sync.jobsUpdated}</div>
                      <div>{sync.errors}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">Smartsheet API Key</Label>
                    <Input id="api-key" type="password" value="••••••••••••••••••••••••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sheet-id">Smartsheet ID</Label>
                    <Input id="sheet-id" value="7991283920151364" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sync-interval">Sync Interval (minutes)</Label>
                    <Select defaultValue="15">
                      <SelectTrigger id="sync-interval">
                        <SelectValue placeholder="Select interval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-sync" checked={true} />
                    <Label htmlFor="auto-sync">Enable automatic synchronization</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="bidirectional" checked={true} />
                    <Label htmlFor="bidirectional">Enable bidirectional sync</Label>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Settings</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Automation Rules</CardTitle>
          <CardDescription>Configure automated actions based on job status changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-blue-50/50">
              <h3 className="text-lg font-medium mb-2">What are Automation Rules?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automation rules allow you to trigger actions in Smartsheet when certain events occur in NXT Portal. For
                example, you can automatically update a Smartsheet row when a job status changes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-3 bg-white">
                  <h4 className="font-medium mb-1">When job status changes</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically update Smartsheet when a job status changes in NXT Portal
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-blue-500" />
                </div>
                <div className="border rounded-md p-3 bg-white">
                  <h4 className="font-medium mb-1">Update Smartsheet row</h4>
                  <p className="text-sm text-muted-foreground">
                    The corresponding row in Smartsheet is automatically updated with the new status
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Active Automation Rules</h3>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Rule
                </Button>
              </div>
            </div>

            <div className="border rounded-md">
              <div className="grid grid-cols-4 gap-4 p-3 border-b bg-muted/50 font-medium">
                <div>Trigger</div>
                <div>Action</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-3 border-b items-center">
                <div>Job Status Change</div>
                <div>Update Smartsheet Row</div>
                <div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Disable
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-3 border-b items-center">
                <div>New Job Created</div>
                <div>Create Smartsheet Row</div>
                <div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Disable
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-3 items-center">
                <div>Job Completed</div>
                <div>Send Email Notification</div>
                <div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Disable
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
