import { useState } from 'react'
import viteLogo from '/vite.svg'
import './Tasks.css'

function Tasks() {

  return (
    <section className='body-tasks'>
        <div className='tasks'>
            <div className='user-options'>
                <div className='user-profile'></div>
                <div className='set-mode'></div>
                <div className='setting-button'></div>
                <div className='sign-out-btn'></div>
            </div>
            <div className='user-tasks'>

            </div>

        </div>
    </section>
    
  )
}

export default Tasks
