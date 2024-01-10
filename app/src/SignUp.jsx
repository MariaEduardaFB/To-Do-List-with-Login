import { useState } from 'react'
import viteLogo from '/vite.svg'
import './SignUp.css'

function SignUp() {

  return (
    <div className='sign-up'>
        <h2>Sign Up</h2>
      <form className='signUp-form'>
        <div className='username'>
          <h5>Username</h5>
          <input className='input-username'type='username' name='username' required></input>
        </div>

        <div className='email'>
          <h5>Email</h5>
          <input className='input-email'type='email' name='email' required></input>
        </div>
        
        <div className='password'>
        <h5>Password</h5>
          <input className='input-password' type='password' name='password' required></input>
        </div>
        
        <button type='submit' className='btn-sign-up'>Sign Up</button>
        
      </form>
    </div>
  )
}

export default SignUp
