const [user, setUser] = useState()
const [value, setValue] = useState()
const [payments, setPayments] = useState()
const [notifcation, setNotifcation] = useState()

const handleBilling = (values) => {
  setUser(values.user)
  setValue(values.value)
  setPayments(['values'])
  setNotifcation('anything')
}