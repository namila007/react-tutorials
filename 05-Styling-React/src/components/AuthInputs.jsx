import { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "./CustomInput.jsx";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <Div>
        <CustomInput
          invalid={emailNotValid}
          label="Email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></CustomInput>
        <CustomInput
          invalid={passwordNotValid}
          label="Password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></CustomInput>
        {/*<p>*/}
        {/*  <Label*/}
        {/*    $invalid={emailNotValid}*/}
        {/*    // className={`label ${emailNotValid ? "invalid" : ""}`}*/}
        {/*  >*/}
        {/*    Email*/}
        {/*  </Label>*/}
        {/*  <Input*/}
        {/*    type="email"*/}
        {/*    $invalid={emailNotValid}*/}
        {/*    // className={emailNotValid ? "invalid" : undefined}*/}
        {/*    onChange={(event) => handleInputChange("email", event.target.value)}*/}
        {/*  />*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*  <Label $invalid={passwordNotValid}>Password</Label>*/}
        {/*  <Input*/}
        {/*    type="password"*/}
        {/*    $invalid={passwordNotValid}*/}
        {/*    // className={passwordNotValid ? "invalid" : undefined}*/}
        {/*    onChange={(event) =>*/}
        {/*      handleInputChange("password", event.target.value)*/}
        {/*    }*/}
        {/*  />*/}
        {/*</p>*/}
      </Div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
