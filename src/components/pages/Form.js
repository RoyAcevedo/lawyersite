import React, {useState} from 'react'
import FormSignup from '../Credentials/FormSignup'
import FormSuccess from '../Credentials/FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default Form;
