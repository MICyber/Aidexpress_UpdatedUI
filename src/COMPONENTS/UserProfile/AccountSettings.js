import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name </label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile </label>
          <input type='text' name='phone' id='phone'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>NIC </label>
          <input type='email' name='email' id='email'

          />
        </div>

      
      </div>

      <button className='mainbutton1'
        
        >Save Changes</button>
    </div>
  )
}

export default AccountSettings