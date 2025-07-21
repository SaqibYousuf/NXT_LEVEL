"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreVertical, Paperclip, Phone, Send, Video } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type ChatInterfaceProps = {
  chatTitle: string
  recipientName: string
  recipientRole: string
  userRole: "customer" | "sales-rep" | "dealer" | "company"
  avatarUrl?: string
}

type Message = {
  id: string
  content: string
  sender: "user" | "support" | "system"
  timestamp: Date
  read: boolean
  senderName: string
}

export function ChatInterface({ chatTitle, recipientName, recipientRole, userRole, avatarUrl }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Welcome to the chat! How can we help you today?",
      sender: "support",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: true,
      senderName: recipientName,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = () => {
    if (!newMessage.trim()) return
    const msg: Message = {
      id: Date.now().toString(),
      content: newMessage.trim(),
      sender: "user",
      timestamp: new Date(),
      read: true,
      senderName: "You",
    }
    setMessages((p) => [...p, msg])
    setNewMessage("")

    // fake response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks! We’ll get back to you shortly.",
        sender: "support",
        timestamp: new Date(),
        read: false,
        senderName: recipientName,
      }
      setMessages((p) => [...p, response])
    }, 1000)
  }

  const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  const getInitials = (name?: string) => {
    if (!name) return "?"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className="flex h-[calc(100vh-12rem)] max-h-[800px] flex-col w-full max-w-2xl">
      <CardHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={avatarUrl || "/placeholder.svg"} />
              <AvatarFallback>{getInitials(recipientName)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{chatTitle}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {recipientName} • {recipientRole}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                m.sender === "user"
                  ? "bg-blue-500 text-white"
                  : m.sender === "system"
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {m.sender !== "user" && <p className="mb-1 text-xs font-medium">{m.senderName}</p>}
              <p className="text-sm">{m.content}</p>
              <p className="mt-1 text-right text-xs opacity-70">{formatTime(m.timestamp)}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>

      <CardFooter className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            send()
          }}
          className="flex w-full gap-2"
        >
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
