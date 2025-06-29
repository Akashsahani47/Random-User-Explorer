const UserCard = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <img src={user.picture.medium} alt="User" />
      <p className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <p className="email">{user.email}</p>
      <p className="gender">{user.gender}</p>
    </div>
  )
}

export default UserCard
