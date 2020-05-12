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
    <div>
      <h1>Login page</h1>
    </div>
  )
}

export default Login