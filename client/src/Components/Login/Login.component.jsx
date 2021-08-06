import './Login.css'

export default function Login({
  emailState,
  setEmailState,
  passwordState,
  setPasswordState,
  login,
}) {
  const submitHandler = (e) => {
    e.preventDefault()
    login(emailState, passwordState)
  }

  return (
    <div className="Login">
      <form id="login-form" onSubmit={submitHandler}>
        <div id="email">
          {/* <h4 id="email-legend">Email</h4> */}
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
          {/* <h4 id="password-legend">Password</h4> */}
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

        <div>
          <button type="submit" id="submit-button">
            Go!
          </button>
        </div>
      </form>
    </div>
  )
}
