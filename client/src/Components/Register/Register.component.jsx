import './Register.css'

export default function Register({
  firstNameState,
  setFirstNameState,
  lastNameState,
  setLastNameState,
  emailState,
  setEmailState,
  passwordState,
  setPasswordState,
  register,
}) {
  const submitHandler = async () => {
    register(firstNameState, lastNameState, emailState, passwordState)
  }

  return (
    <div className="Register">
      <form id="register-form" onSubmit={submitHandler}>
        <div id="first-name">
          <input
            className="firstname-input"
            type="text"
            placeholder="First Name"
            value={firstNameState}
            onChange={(e) => {
              setFirstNameState(e.target.value)
            }}
          />
        </div>

        <div id="last-name">
          <input
            className="lastname-input"
            type="text"
            placeholder="Last Name"
            value={lastNameState}
            onChange={(e) => {
              setLastNameState(e.target.value)
            }}
          />
        </div>

        <div id="email">
          <input
            className="email-input"
            type="text"
            placeholder="Email"
            value={emailState}
            onChange={(e) => {
              setEmailState(e.target.value)
            }}
          />
        </div>

        <div id="password">
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={passwordState}
            onChange={(e) => {
              setPasswordState(e.target.value)
            }}
          />
        </div>

        <div id="password">
          <input
            className="password-input"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" id="create-account-button">
          Create Account
        </button>
      </form>
    </div>
  )
}
