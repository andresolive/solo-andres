import React from 'react'
import Balance from './Balance.component.jsx'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Balance', () => {
  const mockedUser = {
    firstName: 'Jhon',
    lastName: 'Doe',
    balance: 1000000,
  }

  afterEach(() => {
    cleanup()
  })

  test('It should render positive balance in the right format', () => {
    const { getByTestId } = render(<Balance userState={mockedUser} />)
    const balanceDiv = getByTestId('test-balance-box')

    expect(balanceDiv).toHaveTextContent('$1,000,000.00')
  })

  test('It should render negative balance in the right format', () => {
    mockedUser.balance = -1000000

    const { getByTestId } = render(<Balance userState={mockedUser} />)
    const balanceDiv = getByTestId('test-balance-box')

    expect(balanceDiv).toHaveTextContent('-$1,000,000.00')
  })

  test('It should render no balance in the right format', () => {
    mockedUser.balance = 0

    const { getByTestId } = render(<Balance userState={mockedUser} />)
    const balanceDiv = getByTestId('test-balance-box')

    expect(balanceDiv).toHaveTextContent('$0.00')
  })
})
