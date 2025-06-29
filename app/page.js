'use client'

import { useEffect, useState } from 'react'
import UserCard from '@/components/UserCard'
import UserDetail from '@/components/UserDetail'

export default function HomePage() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
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
