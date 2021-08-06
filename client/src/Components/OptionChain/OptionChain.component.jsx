import React from 'react'
import './OptionChain.css'
import graphGoogl from '../../images/graph_Googl.png'
import graphLulu from '../../images/graph_Lulu.png'
import graphTwtr from '../../images/graph_Twtr.png'
import graphCat from '../../images/graph_Cat.png'

export default function OptionChain({
  company,
  showList,
  optionToWatchlist,
  optionToPortfolio,
  setSelectedView,
}) {
  // give this component a button to go back to the OptionsList component (i.e close the chain)
  // write the functionality to select one option from the chain and be able to add it to portfolio or watchlist

  let graph = ''

  if (company.symbol === 'GOOGL') {
    graph = graphGoogl
  } else if (company.symbol === 'LULU') {
    graph = graphLulu
  } else if (company.symbol === 'TWTR') {
    graph = graphTwtr
  } else if (company.symbol === 'CAT') {
    graph = graphCat
  }

  return (
    <div className="OptionChain">
      {/* <h4>{company.chain.expiration1}</h4> */}

      <div id="div-back-button">
        <button id="back-button" onClick={() => showList(false)}>
          ⬅️ Back
        </button>
      </div>

      <div id="chain-headers">
        <div className="chain-headers description">Description</div>
        <div className="chain-headers bid">Bid</div>
        <div className="chain-headers ask">Ask</div>
        <div className="chain-headers strike">Strike</div>
        <div className="chain-headers cont-size">Cont. Size</div>
        <div className="chain-headers exp-date">Exp. date</div>
        <div className="chain-headers type">Type</div>
        <div className="chain-headers buttons">Buttons</div>
      </div>

      <div id="the-actual-chain">
        {company.chain.expiration1.map((option) => (
          <div id="chain-option">
            <div className="chain-info description">{option.description}</div>
            <div className="chain-info bid">
              {(Math.round(option.bid * 100) / 100).toFixed(2)}
            </div>
            <div className="chain-info ask">
              {(Math.round(option.ask * 100) / 100).toFixed(2)}
            </div>
            <div className="chain-info strike">{option.strike}</div>
            <div className="chain-info cont-size">{option.contract_size}</div>
            <div className="chain-info exp-date">{option.expiration_date}</div>
            <div className="chain-info type">{option.option_type}</div>
            <div className="chain-info small-buttons">
              <button
                id="to-wl-button"
                onClick={() => {
                  optionToWatchlist(option)
                  setSelectedView(false)
                }}
              >
                🔎
              </button>
              <button
                id="to-pf-button"
                onClick={() => {
                  optionToPortfolio(option)
                  setSelectedView(true)
                }}
              >
                🤑
              </button>
            </div>
          </div>
        ))}

        {company.chain.expiration2.map((option) => (
          <div id="chain-option">
            <div className="chain-info description">{option.description}</div>
            <div className="chain-info bid">
              {(Math.round(option.bid * 100) / 100).toFixed(2)}
            </div>
            <div className="chain-info ask">
              {(Math.round(option.ask * 100) / 100).toFixed(2)}
            </div>
            <div className="chain-info strike">{option.strike}</div>
            <div className="chain-info cont-size">{option.contract_size}</div>
            <div className="chain-info exp-date">{option.expiration_date}</div>
            <div className="chain-info type">{option.option_type}</div>
            <div className="chain-info small-buttons">
              <button
                id="to-wl-button"
                onClick={() => {
                  optionToWatchlist(option)
                  setSelectedView(false)
                }}
              >
                🔎
              </button>
              <button
                id="to-pf-button"
                onClick={() => {
                  optionToPortfolio(option)
                  setSelectedView(true)
                }}
              >
                🤑
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <img id="graph" src={graph} alt="GRAPH GOES HERE"></img>
      </div>
    </div>
  )
}

// {companiesList.map(company => (<ListOption key={company._id} company={company}
