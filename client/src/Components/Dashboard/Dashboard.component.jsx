import React from 'react'
import { useState, useEffect } from 'react'
import User from '../User/User.component'
import Market from '../Market/Market.component'
import './Dashboard.css'

export default function Dashboard({
  userState,
  setUserState,
  optionToWatchlist,
  optionToPortfolio,
  deleteFromWatchlist,
  deleteFromPortfolio,
}) {
  const [selectedView, setSelectedView] = useState(false)
  // default value?? if false --> show watchlist, otherwise --> show portfolio

  return (
    <div className="Dashboard">
      <div id="user-component">
        <User
          userState={userState}
          setUserState={setUserState}
          optionToPortfolio={optionToPortfolio}
          deleteFromWatchlist={deleteFromWatchlist}
          deleteFromPortfolio={deleteFromPortfolio}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </div>

      <div id="market-component">
        <Market
          userState={userState}
          setUserState={setUserState}
          optionToWatchlist={optionToWatchlist}
          optionToPortfolio={optionToPortfolio}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          setSelectedView={setSelectedView}
        />
      </div>
    </div>
  )
}
