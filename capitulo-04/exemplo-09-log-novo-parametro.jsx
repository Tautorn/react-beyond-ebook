useEffect(() => {
  if (appNumber) {
    logChat(ticket)
  }
}, [ticket, appNumber])