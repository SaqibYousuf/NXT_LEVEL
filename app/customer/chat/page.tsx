import { ChatInterface } from "@/components/chat-interface"

export default function CustomerChatPage() {
  return (
    <main className="flex justify-center p-6">
      <ChatInterface
        chatTitle="Customer Support"
        recipientName="NXT Support"
        recipientRole="Support Team"
        userRole="customer"
      />
    </main>
  )
}
