import React from 'react'

function login() {
  return (
    <div>
      <div>
        <form action=''>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' />

            </div>
            <div className='mb-3'>
              <label htmlFor='password'> password</label>
              <input type='password' placeholder='Enter Password' />
              
               </div> 
        </form>
      </div>
    </div>
  )
}

export default login
