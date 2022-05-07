import React, { useEffect } from 'react'
import { useState } from 'react'

const SignUpInfo = ({ formData, next, handleChange }) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // NAVIGATE TO NEXT PAGE FUNCTION COMING FROM FORM COMPONENT THROUGH PROPS.................................................
    const navigateToPersonalInfo = () => {
        next()
    }

    // ON SUBMIT CLICK EVENT...................................................................................................
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmit(true)
    }

    // SHOWING THE ERRORS.......................................................................................................
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors) === 0 && isSubmit) {
            console.log(formData);
        }
    }, [formErrors])

    // VALIDATION OF DATA.......................................................................................................
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

        // EMAIL VALIDATION
        if (!values.email) {
            errors.email = "Email is Required"
        }
        else if (!regex.test(formData.email)) {
            errors.email = " This is not a valid Email format"
        }

        // PASSWORD VALIDATION
        if (!values.password) {
            errors.password = "Password is Required"
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters"
        }
        else if (values.password.length > 10) {
            errors.password = "Password can not exceed more than 10 characters"
        }

        // CONFIRM PASSWORD VALIDATION
        if (values.confirmPassword != values.password) {
            errors.confirmPassword = "Password does not match"
        }
        else if (values.confirmPassword.length < 4) {
            errors.confirmPassword = "Password must be more than 4 characters"
        }
        else if (values.password.length > 10) {
            errors.confirmPassword = "Password can not exceed more than 10 characters"
        }

        return errors

    }

    // NAVIGATE TO NEXT STEP IF ALL VALIDATIONS ARE TRUE.........................................................................
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        navigateToPersonalInfo()
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='sign-up-container'>
                    <input
                        type="email"
                        name='email'
                        placeholder='Email...'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* SHOWING EMAIL ERROR */}
                    <p>{formErrors.email}</p>

                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}

                    />
                    {/* SHOWING PASSWORD ERROR */}
                    <p>{formErrors.password}</p>

                    <input
                        type="password"
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleChange}

                    />
                    {/* SHOWING CONFIRM PASSWORD ERROR */}
                    <p>{formErrors.confirmPassword}</p>

                    <div className="footer">
                        <button >Next</button>
                    </div>


                </div>

            </form>
        </>
    )
}

export default SignUpInfo