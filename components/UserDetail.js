const UserDetail = ({ user }) => {
  const { name, location, picture, email, gender, nat } = user
  const fullAddress = `${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`

  return (
    <div className="user-detail">
      <div className="profile">
        <img src={picture.large} alt="Profile" />
        <div>
          <h2 className="name">{`${name.title} ${name.first} ${name.last}`}</h2>
          <p className="info">{fullAddress}</p>
          <p className="info">Nationality: {nat}</p>
          <p className="info">Gender: {gender}</p>
          <p className="info">Email: {email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
