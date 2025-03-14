import Chat from "./chat"

function HelpDeskChat({ ticket }) {
  useEffect(() => {
    const chat = new Chat(ticket)
    chat.start()
    return () => chat.stop()
  }, [ticket])
  
  return (
    <div>
      <h1>Help Desk Chat</h1>
      <div id="chat"></div>
    </div>
  )
}