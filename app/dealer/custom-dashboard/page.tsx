"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BarChart, LineChart, PieChart } from "@/components/charts"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Plus, Grip, X, Settings, Maximize2, BarChart3, LineChartIcon, PieChartIcon } from "lucide-react"

type Widget = {
  id: string
  type: "line" | "bar" | "pie" | "stats" | "table"
  title: string
  description?: string
  size: "small" | "medium" | "large"
}

export default function CustomDashboardPage() {
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: "widget-1",
      type: "line",
      title: "Revenue Trend",
      description: "Monthly revenue for the past 6 months",
      size: "medium",
    },
    {
      id: "widget-2",
      type: "stats",
      title: "Key Metrics",
      size: "small",
    },
    {
      id: "widget-3",
      type: "bar",
      title: "Sales Rep Performance",
      description: "Comparison of sales rep performance",
      size: "large",
    },
    {
      id: "widget-4",
      type: "pie",
      title: "Project Types",
      description: "Distribution of project categories",
      size: "small",
    },
  ])

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(widgets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setWidgets(items)
  }

  const addWidget = (type: Widget["type"]) => {
    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type,
      title: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Widget`,
      size: "medium",
    }

    setWidgets([...widgets, newWidget])
  }

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((widget) => widget.id !== id))
  }

  const renderWidgetContent = (widget: Widget) => {
    switch (widget.type) {
      case "line":
        return <LineChart />
      case "bar":
        return <BarChart />
      case "pie":
        return <PieChart />
      case "stats":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Sales</p>
              <p className="text-2xl font-bold">$3.2M</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Conversion</p>
              <p className="text-2xl font-bold">64%</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Avg Deal</p>
              <p className="text-2xl font-bold">$28.5K</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Active Jobs</p>
              <p className="text-2xl font-bold">48</p>
            </div>
          </div>
        )
      case "table":
        return (
          <div className="border rounded-md">
            <div className="grid grid-cols-3 gap-4 p-3 border-b bg-muted/50 font-medium">
              <div>Sales Rep</div>
              <div>Jobs</div>
              <div>Value</div>
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-3 border-b last:border-0">
                <div>Sales Rep {i + 1}</div>
                <div>{Math.floor(Math.random() * 10) + 5}</div>
                <div>${Math.floor(Math.random() * 200) + 100}K</div>
              </div>
            ))}
          </div>
        )
      default:
        return <div>Widget content</div>
    }
  }

  const getWidgetIcon = (type: Widget["type"]) => {
    switch (type) {
      case "line":
        return <LineChartIcon className="h-5 w-5" />
      case "bar":
        return <BarChart3 className="h-5 w-5" />
      case "pie":
        return <PieChartIcon className="h-5 w-5" />
      default:
        return null
    }
  }

  const getWidgetSize = (size: Widget["size"]) => {
    switch (size) {
      case "small":
        return "col-span-1"
      case "medium":
        return "col-span-2"
      case "large":
        return "col-span-3"
      default:
        return "col-span-1"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Custom Dashboard</h2>
            <p className="text-muted-foreground">Customize your dashboard with widgets</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => addWidget("stats")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Stats
          </Button>
          <Button variant="outline" onClick={() => addWidget("line")}>
            <LineChartIcon className="mr-2 h-4 w-4" />
            Add Chart
          </Button>
          <Button variant="outline" onClick={() => addWidget("table")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Table
          </Button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="widgets" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-3 gap-4">
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`${getWidgetSize(widget.size)}`}
                    >
                      <Card className="h-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <div className="flex items-center space-x-2">
                            <div {...provided.dragHandleProps}>
                              <Grip className="h-4 w-4 text-muted-foreground cursor-grab" />
                            </div>
                            <div>
                              <CardTitle className="text-lg flex items-center space-x-2">
                                {getWidgetIcon(widget.type)}
                                <span>{widget.title}</span>
                              </CardTitle>
                              {widget.description && <CardDescription>{widget.description}</CardDescription>}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Settings className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Maximize2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => removeWidget(widget.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>{renderWidgetContent(widget)}</CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
