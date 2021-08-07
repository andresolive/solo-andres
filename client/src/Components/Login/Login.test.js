import Login from './Login.component'
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Log in Form', () => {
  it('should render the basic fields', () => {
    render(<Login />)
    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go!/ })).toBeInTheDocument()
  })


  it('calls onSubmit with the username and password with the correct credentials', async () => {
    const login = jest.fn()

    render(<Login login={login} />)

    const emailInput = screen.getByPlaceholderText(/Email/)
    const passwordInput = screen.getByPlaceholderText(/Password/)
    const submitBtn = screen.getByRole('button', { name: /Go!/i })

    //Populate input fields

    userEvent.type(emailInput, 'test@test.com')
    userEvent.type(passwordInput, 'test')
    userEvent.click(submitBtn)

    expect(login).toHaveBeenCalledWith('test@test.com', 'test')
  })
})
