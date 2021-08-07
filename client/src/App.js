// import fetch from 'cross-fetch';
import { useState, useEffect } from 'react'
// import { getUser } from '../../server/controllers/user';
import {
  findUser,
  addUser,
  addOptionToWatchlist,
  addOptionToPortfolio,
  deleteOptionFromWatchlist,
  deleteOptionFromPortfolio,
} from './Services/ApiService'
// remember to import context here after creating it
import './App.css'
import Navbar from './Components/Navbar/Navbar.component'
import Welcome from './Components/Welcome/Welcome.component'
import Dashboard from './Components/Dashboard/Dashboard.component'

function App() {
  // user state
  const [userState, setUserState] = useState({})

  // authentication state
  const [authentication, setAuthentication] = useState(false)
  // if false --> user not logged in, true --> user is logged in

  // handler functions

  async function login(email, password) {
    const currentUser = await findUser(email, password)
    setUserState(currentUser)
    setAuthentication(true)
  }

  async function register(firstName, lastName, email, password) {
    const newUser = addUser(firstName, lastName, email, password)
    console.log(newUser)
    setUserState(newUser)
    setAuthentication(true)
  }

  async function optionToWatchlist(option) {
    await addOptionToWatchlist(option, userState.email)
    setUserState((prevUser) => ({
      ...prevUser,
      watchlist: [...prevUser.watchlist, option],
    }))
  }

  async function optionToPortfolio(option) {
    await addOptionToPortfolio(option, userState.email)
    setUserState((prevUser) => ({
      ...prevUser,
      portfolio: [...prevUser.portfolio, option],
      balance: prevUser.balance - option.ask,
    }))
  }

  async function deleteFromWatchlist(option) {
    await deleteOptionFromWatchlist(option, userState.email)
    setUserState((prevUser) => ({
      ...prevUser,
      watchlist: prevUser.watchlist.filter(
        (userOption) => userOption._id !== option._id,
      ),
    }))
  }

  async function deleteFromPortfolio(option) {
    await deleteOptionFromPortfolio(option, userState.email)
    setUserState((prevUser) => ({
      ...prevUser,
      portfolio: prevUser.portfolio.filter(
        (userOption) => userOption._id !== option._id,
      ),
      balance: prevUser.balance + option.bid,
    }))
  }

  return (
    <div className="App">
      <Navbar
        userState={userState}
        authentication={authentication}
        authentication={authentication}
        setAuthentication={setAuthentication}
      />

      {!authentication ? (
        <Welcome login={login} register={register} />
      ) : (
        <Dashboard
          userState={userState}
          setUserState={setUserState}
          optionToWatchlist={optionToWatchlist}
          optionToPortfolio={optionToPortfolio}
          deleteFromWatchlist={deleteFromWatchlist}
          deleteFromPortfolio={deleteFromPortfolio}
        />
      )}
    </div>
  )
}

export default App
