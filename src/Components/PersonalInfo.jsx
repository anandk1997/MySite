import React, { useEffect, useState } from 'react'

const PersonalInfo = ({ formData, handleChange, next, previous }) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // NAVIGATE TO NEXT PAGE FUNCTION COMING FROM FORM COMPONENT THROUGH PROPS.................................................
    const navigateToOtherInfo = () => {
        next()
    }

    // ON SUBMIT CLICK EVENT...................................................................................................
    const handleSubmit = (e) => {
        // e.preventDefault()
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

    const validate = (values) => {
        const errors = {}

        // FIRST NAME VALIDATION
        if (!values.fname) {
            errors.fname = "First Name is Required"
        }

        // LAST NAME VALIDATION
        if (!values.lname) {
            errors.lname = "Last Name is Required"
        }

        // CONFIRM PASSWORD VALIDATION
        if (!values.username) {
            errors.username = "Username is Required"
        }


        return errors

    }

    // NAVIGATE TO NEXT STEP IF ALL VALIDATIONS ARE TRUE.........................................................................
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        navigateToOtherInfo()
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="personal-info-container">

                    <input
                        type="text"
                        name='fname'
                        placeholder='First Name...'
                        // rules={{required:true}}
                        value={formData.fname}
                        onChange={handleChange}
                    />
                    {/* SHOWING THE ERROR */}
                    <p>{formErrors.fname}</p>

                    <input
                        type="text"
                        name='lname'
                        placeholder='Last Name...'
                        // rules={{required:true}}
                        value={formData.lname}
                        onChange={handleChange}
                    />
                    <p>{formErrors.lname}</p>

                    <input
                        type="text"
                        name='username'
                        placeholder='Username...'
                        // rules={{required:true}}
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <p>{formErrors.username}</p>

                    <div className="footer">
                        <button onClick={previous}>Previous</button>
                        <button onClick={handleSubmit}>Next</button>
                    </div>


                </div>
            </form>

        </>
    )
}

export default PersonalInfo