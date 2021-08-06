import { useState } from 'react'
import './PortfolioOption.css'

export default function PortfolioOption({ option, deleteFromPortfolio }) {
  // fetch the price of the current stock (look for it by option.symbol)
  // calculate PL depending if it's call/put and set these states
  // calculate ATM, ITM, OTM (if.....)

  const [profitLoss, setProfitLoss] = useState(0)
  const [money, setMoney] = useState('ATM')

  // stock price will eventually come from an API
  let stockPriceTemp = 0

  // this tells us whether we will multiply the strike by a positive or negative percentage
  const zeroOrOne = Math.round(Math.random())

  const multiplier = Math.random()

  // I'm creating a mock stock price based on a percentage of the strike price (totally made this up myself;  not correct at all)
  if (zeroOrOne) {
    stockPriceTemp = option.strike * multiplier
  } else {
    stockPriceTemp = option.strike * -multiplier
  }

  // THIS IS WHERE IT BREAKS:
  // calculate P&L based on option type
  // if (option.option_type === 'call') {
  //   setProfitLoss(stockPriceTemp - option.strike)
  // }
  // else if (option.option_type === 'put') {
  //   setProfitLoss(stockPriceTemp - option.strike)
  // }

  // // calculate ITM, ATM, OTM
  // if (option.option_type === 'call') {
  //   if (option.strike < stockPriceTemp) setMoney('ITM')
  //   else if (option.strike === stockPriceTemp) setMoney('ATM')
  //   else setMoney('OTM')
  // }
  // else if (option.option_type === 'put') {
  //   if (option.strike < stockPriceTemp) setMoney('OTM')
  //   else if (option.strike === stockPriceTemp) setMoney('ATM')
  //   else setMoney('ITM')
  // }

  return (
    <div className="PortfolioOption">
      <div id="the-actual-portfolio">
        <div className="portfolio-options description">
          {option.description.slice(0, 4)}
        </div>
        <div className="portfolio-options type">{option.option_type}</div>
        <div className="portfolio-options bid">{option.bid}</div>
        <div className="portfolio-options ask">{option.ask}</div>
        <div className="portfolio-options buy-price">
          {Math.round((option.ask * 100) / 100).toFixed(2)}
        </div>
        <div className="portfolio-options strike">{option.strike}</div>
        <div className="portfolio-options exp-date">
          {option.expiration_date}
        </div>
        <div className="portfolio-options p-l">{profitLoss}</div>
        <div className="portfolio-options money">{money}</div>
        <div className="portfolio-options sell">
          <button
            className="portfolio-options sell-button"
            onClick={() => {
              deleteFromPortfolio(option)
            }}
          >
            ✌️
          </button>
        </div>
      </div>
    </div>
  )
}
