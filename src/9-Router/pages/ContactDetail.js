import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ContactDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const [user, setUser] = useState(location.state[Number(id) - 1])

  useEffect(() => {
    setUser(location.state[Number(id) - 1])
  }, [location.state, id])

  return (
    <div>
      <h2>ContactDetail</h2>
      <button style={{ backgroundColor: "yellow" }}>
        <Link to={{ pathname: `/contact/${Number(id) - 1}`, state: location.state }}>Önceki kullanıcı</Link>
      </button>&nbsp;
      <button style={{ backgroundColor: "yellow" }}>
        <Link to={{ pathname: `/contact/${Number(id) + 1}`, state: location.state }}>Sonraki kullanıcı</Link>
      </button>
      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <h4>{user.email}</h4>
        </>
      )}
      <div style={{ height: 200 }}></div>
    </div>
  )
}

export default ContactDetail
