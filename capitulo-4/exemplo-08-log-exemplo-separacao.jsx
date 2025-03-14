useEffect(() => {
  logChat(ticket)
}, [ticket])

useEffect(() => {
  const chat = new Chat(ticket)

  chat.start()

  return () => chat.stop()
}, [ticket])