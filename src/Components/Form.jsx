import React, { useEffect, useState } from 'react'
import FinalResult from './FinalResult';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

const Form = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userName: "",
        nationality: "",
        other: "",

    })

    const next = () => {
        setPage(page + 1)
    }

    const previous = () => {
        setPage(page - 1)
    }

    // INPUT ONCHANGE EVENT..................................................................................................
    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }



    // SHOWING THE COMPONENTS.................................................................................................................
    const FormTittles = ["SignUp", "Personal Info", "Other", "Final Result"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo next={next} formData={formData} handleChange={handleChange} />
        }
        else if (page === 1) {
            return <PersonalInfo next={next} previous={previous} formData={formData} handleChange={handleChange} />
        }
        else if (page === 2) {
            return <OtherInfo next={next} previous={previous} formData={formData} handleChange={handleChange} />
        }
        else if (page === 3) {
            return <FinalResult formData={formData} />
        }
    }

    return (
        <>
            <div className="form">
                <div className="progressbar">
                    <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
                </div>

                <div className="form-container">

                    <div className="header">
                        <h1>{FormTittles[page]}</h1>
                    </div>

                    <div className="body">{PageDisplay()}</div>
                    {/* {console.log(PageDisplay)} */}

                    {/* <div className="footer">
                        <button disabled={page === 0}
                            onClick={() => { setPage((currPage) => currPage - 1) }}>Prev</button>

                        <button
                            disabled={page === FormTittles.length - 1}
                            onClick={handleSubmit
                                // () => { setPage((currPage) => currPage + 1) }
                            }>{page === FormTittles.length - 1 ? "Submit" : "Next"}</button>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Form