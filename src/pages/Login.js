import React from 'react'

// strapi function
import registerUser from "../strapi/registerUser"
import loginUser from "../strapi/loginUser"

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

  let isEmpty = !email || !password || !username

  const toggleMember = () => {
    setIsMember(prevMember => {
      console.log(prevMember)
      let isMember = !prevMember
      isMember ? setUsername('default') : setUsername('')
      return isMember
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password })
    }
    else {
      response = await registerUser({ email, password, username })
    }
    if (response) {
      console.log("success")
      console.log(response)

    } else {
      // show alert
    }

  }

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        {/* end of single input */}

        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        {/* end of single input */}

        {!isMember && (
          <div className="form-control">
            <label htmlFor="">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)} />
          </div>
        )}


        {/* empty form text */}
        {
          isEmpty && (
            <p className="form-empty">please fill out all form fields</p>
          )
        }

        {/* submit button  */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}

        {/* register link */}
        <p className="register-link">
          {isMember ? "Need To Register" : "Already A Member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>



      </form>
    </section>
  )
}

export default Login