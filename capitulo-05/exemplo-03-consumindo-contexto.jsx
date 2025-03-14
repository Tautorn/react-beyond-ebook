import { useContext } from 'react'
import { UserCompanyContext } from './MyContext'

function UserProfile = () => {
  const { user, company } = useContext(MyContext)
  return (
    <div>
      <h1>User name: {user}</h1>
      <div>
        <span>Company data: {company}</span>
      </div>
    </div>
  )
}