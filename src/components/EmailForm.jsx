import {useState, useRef} from 'react';
import styled from 'styled-components';


const FormWrapper = styled.form`
  
`;

const EmailForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  }

  const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      return 'Oops! Please check your email'
    }
    return '';
  }

  const handleBlur = (event) => {
    const newErrors = validateEmail(event.target.value);
    setEmailError(newErrors);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateEmail(event.target.value);
    setEmailError(newErrors);
    if (newErrors) {
      return emailRef.current.focus();
    }
    
    return console.log('Success');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Email address"
        aria-describedby="emailError"
        type="email"
        id="email"
        placeholder="Email Address"
        value={emailInput}
        name="email"
        onChange={handleEmailChange}
        onBlur={handleBlur}
        ref={emailRef}
      />
      {emailError && 
        <div 
          aria-live="assertive"
          className="error-div"
          id="emailError"
        >
          {emailError}
        </div>}
      <button
        type="submit"
      >
        Request Access
      </button>
    </form>
  )
}

export default EmailForm;