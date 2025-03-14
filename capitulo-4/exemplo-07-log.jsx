useEffect(() => {
  const chat = new Chat(ticket)
 
  chat.start()
  logChat(ticket)

  return () => chat.stop()
}, [ticket])