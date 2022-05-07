import React, { useEffect, useState } from 'react'

const OtherInfo = ({ formData, handleChange, next, previous }) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // NAVIGATE TO NEXT PAGE FUNCTION COMING FROM FORM COMPONENT THROUGH PROPS.................................................
    const navigateToFinalResult = () => {
        next()
    }

    // ON SUBMIT CLICK EVENT...................................................................................................
    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log("formData==>", formData);
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
        if (!values.nationality) {
            errors.nationality = "Please enter the value for Nationality"
        }

        // LAST NAME VALIDATION
        if (!values.other) {
            errors.other = "Please enter the value for Nationality"
        }

        return errors

    }

    // NAVIGATE TO NEXT STEP IF ALL VALIDATIONS ARE TRUE.........................................................................
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        navigateToFinalResult()
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="other-info-container">

                    <input
                        type="text"
                        name='nationality'
                        placeholder='Nationality...'
                        value={formData.nationality}
                        onChange={handleChange}
                    // onChange={(event) => setFormData({ ...formData, text: event.target.value })}
                    />
                    <p>{formErrors.nationality}</p>

                    <input
                        type="text"
                        name='other'
                        placeholder='Other...'
                        value={formData.other}
                        onChange={handleChange}
                    />
                    <p>{formErrors.other}</p>

                    <div className="footer">
                        <button onClick={previous}>Previous</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default OtherInfo