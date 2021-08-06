import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import OptionChain from '../OptionChain/OptionChain.component'
import './ListOption.css'

export default function ListOption({ company, selectOption }) {
  return (
    <Router>
      <div className="ListOption">
        <nav id="nav">
          <ul>
            <li>
              {/* <Link to="/chain">{company.symbol}</Link> */}
              <h6
                id="information"
                onClick={() => {
                  selectOption(company)
                }}
              >
                {company.symbol}
              </h6>
            </li>

            <li>
              {/* <Link to="/chain">{company.description}</Link> */}
              <h6 id="information">{company.description}</h6>
            </li>

            <li>
              {/* <Link to="/chain">{company.chain.expiration1[0].expiration_date}</Link> */}
              <h6 id="information">
                {company.chain.expiration1[0].expiration_date}
              </h6>
            </li>
          </ul>

          {/* <button id="cross">❌</button> */}
          {/* only display this button if the chain is opened (it is supposed to close the chain on click) */}
        </nav>
      </div>

      <Switch>
        <Route
          path="/chain"
          component={() => <OptionChain company={company} />}
        />
      </Switch>

      {/* <a href="/chain">{company.symbol}</a>
        <p></p>
        <a href="http://localhost:3000/chain">{company.description}</a>
        <p></p> */}
    </Router>
  )
}
