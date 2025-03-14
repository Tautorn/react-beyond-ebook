export const SecurityRoute = {
  getAccessToken: () => {
    return sessionStorage.getItem('accessToken')
  },

  isAuthenticated: () => {
    return !!SecurityRoute.getAccessToken()
  },
}

export default SecurityRoute