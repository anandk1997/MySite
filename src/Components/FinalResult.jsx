import React from 'react'
import './FinalResult.css'

const FinalResult = ({ formData }) => {
  return (
    <>
      <div className='sign-up-containers'>

        <p>
          <strong>Email: </strong>{formData.email}
        </p>

        <p>
          <strong>Password: </strong>{formData.password}
        </p>

        <p>
          <strong>Confirm Password: </strong>{formData.confirmPassword}
        </p>

        <p>
          <strong>First Name: </strong>{formData.fname}
        </p>

        <p>
          <strong>Last Name: </strong>{formData.lname}
        </p>

        <p>
          <strong>Username: </strong>{formData.username}
        </p>

        <p>
          <strong>Nationality: </strong>{formData.nationality}
        </p>

        <p>
          <strong>Other: </strong>{formData.other}

        </p>
      </div>

    </>
  )
}

export default FinalResult