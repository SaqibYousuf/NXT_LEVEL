import { ChatInterface } from "@/components/chat-interface"

export default function SalesRepChatPage() {
  return (
    <main className="flex justify-center p-6">
      <ChatInterface
        chatTitle="Rep Support"
        recipientName="NXT Support"
        recipientRole="Support Team"
        userRole="sales-rep"
      />
    </main>
  )
}
