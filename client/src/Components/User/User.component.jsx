import { useState } from 'react'
import WatchlistPortfolio from '../WatchlistPortfolio/WatchlistPortfolio.component'
import './User.css'
import mainBackground from '../../images/main_background.png'

export default function User({
  userState,
  setUserState,
  optionToPortfolio,
  deleteFromWatchlist,
  deleteFromPortfolio,
  selectedView,
  setSelectedView,
}) {
  // const [selectedView, changeSelectedView] = useState(false);
  // default value?? if false --> show watchlist, otherwise --> show portfolio ???

  return (
    <div className="User" style={{ backgroundImage: `url(${mainBackground})` }}>
      <div id="buttons">
        <button id="wl-button" onClick={() => setSelectedView(false)}>
          🔎 Watchlist
        </button>

        <button id="pf-button" onClick={() => setSelectedView(true)}>
          🤑 Portfolio
        </button>
      </div>

      <WatchlistPortfolio
        selectedView={selectedView}
        userState={userState}
        setUserState={setUserState}
        optionToPortfolio={optionToPortfolio}
        deleteFromWatchlist={deleteFromWatchlist}
        deleteFromPortfolio={deleteFromPortfolio}
      />
    </div>
  )
}
