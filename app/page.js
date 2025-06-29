'use client'
import { useEffect, useState } from 'react'
import UserCard from '@/components/UserCard'
import UserDetail from '@/components/UserDetail'

const HomePage = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
      const data = await response.json()
      setUsers(data.results)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  fetchUsers()
}, [])


  return (
    <main className="container">
      <h1 className="title">User Cards Viewer</h1>

      {loading && <p className="message">Loading users...</p>}
      {error && <p className="message">Failed to load users.</p>}

      {selectedUser && <UserDetail user={selectedUser} />}

      <div className="user-grid">
        {users.map((user, index) => (
          <UserCard key={index} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
