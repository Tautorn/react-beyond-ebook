useEffect(() => {
  if (!SecurityRoute.isAuthenticated() && window.location.pathname !== '/auth') {
    window.location.href = '/auth'
  }
}, [])