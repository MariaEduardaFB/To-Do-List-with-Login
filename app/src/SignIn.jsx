import { useState } from 'react'
import viteLogo from '/vite.svg'
import './SignIn.css'

function SignIn() {

  return (
    <div className='sign-in'>
      <h2>Sign In</h2>
      <form className='signIn-form'>
        <div className='email'>
          <h5>Email</h5>
          <input className='input-email'type='email' name='email' required></input>
        </div>
        
        <div className='password'>
        <h5>Password</h5>
          <input className='input-password' type='password' name='password' required></input>
        </div>
        <h6>forgot your password?</h6>

        <button type='submit' className='btn-sign-in'>Sign In</button>
        <h5>Doesn’t have an account? Sing Up</h5>
      </form>
    </div>
  )
}

export default SignIn
