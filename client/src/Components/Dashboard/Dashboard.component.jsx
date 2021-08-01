import React from 'react'
import { useState, useEffect } from 'react';
import User from '../User/User.component';
import Market from '../Market/Market.component';
import './Dashboard.css';

export default function Dashboard({ userState, setUserState, optionToWatchlist, optionToPortfolio }) {


  return (
    <div className="Dashboard">

      <div id="user-component">
        <User 
          userState={userState}
          setUserState={setUserState}
        />
      </div>

      <div id="market-component">
        <Market 
          userState={userState}
          setUserState={setUserState}
          optionToWatchlist={optionToWatchlist}
          optionToPortfolio={optionToPortfolio}
        />
      </div>

    </div>
  )
}
