// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Recover.css";

function Recover() {
  return (
    <div className='recoverr'>

      <div className='recover'>
        <img src='/src/assets/Logo.png' className='recover-logo'></img>
        <p className='recover-title'>Recover</p>
    
      <div className='email-address'>
        
        <p className='email-content'> Email Address</p>
        <input className='mailaddress' type="text" placeholder='example@gmail.com'></input>
        <div>
            <button onClick={() => alert('Verification Code Send to Your Email!')} className='btn'>Reset Your Password</button>
        </div>

        
      </div>

      </div>

    </div>
  )
}

export default Recover
