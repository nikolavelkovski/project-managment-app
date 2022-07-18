import React, { useState } from 'react'
import './Login.css'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error,isPending,login} = useLogin()
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(email,password)
    login(email,password)
  }
  return (
    <form onSubmit= {handleSubmit} className='auth-form'>
    <h2>Login</h2>
    <label>
        <span>email:</span>
        <input required type="email" onChange = {(e) => setEmail(e.target.value)} value={email} />
    </label>
    <label>
        <span>password:</span>
        <input required type="password" onChange = {(e) => setPassword(e.target.value)} value={password} />
    </label>
    {!isPending && <button className='btn'>Login</button>}
    {isPending && <button disabled className='btn'>Loading</button>}
    {error && <div className='error'>{error}</div>}
</form>
  )
}
