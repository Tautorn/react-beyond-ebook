import { useContext } from 'react'
import { UserCompanyContext } from './MyContext'

function UserProfile = () => {
  const { user, company } = useContext(MyContext)
  // ...