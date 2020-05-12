import React from 'react'

// strapi function

// handle user 
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  // setup user context


  // state values
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('default')
  const [isMember, setIsMember] = React.useState(true)

  let isEmpty = false;

  const toggleMember = () => {

  }

  const handleSubmit = async (e) => {

  }

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        {/* end of single input */}
      </form>
    </section>
  )
}

export default Login