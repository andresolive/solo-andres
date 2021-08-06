import { useState, useEffect } from 'react'
import { getCompanies } from '../../Services/ApiService'
import ListOption from '../ListOption/ListOption.component'
import './OptionsList.css'

export default function OptionsList({ selectOption }) {
  // companies list state --> move it to the company list component
  const [companiesList, setCompaniesList] = useState([])

  async function getAllCompanies() {
    const allCompanies = await getCompanies()
    // console.log(allCompanies);
    setCompaniesList(allCompanies)
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  return (
    <div className="OptionsList">
      <div id="both-buttons">
        <button id="underlying-type">📈Securities</button>
        <button id="underlying-type">🚀Futures</button>
      </div>

      <h2 id="type">Securities</h2>

      <div id="search-div">
        <input id="search-field" placeholder="Find by description"></input>
      </div>

      <div id="headers">
        <h4 id="ticker">Ticker</h4>
        <h4 id="desc">Description</h4>
        <h4 id="next-exp">Next Expiration</h4>
      </div>

      {companiesList.map((company) => (
        <ListOption
          key={company._id}
          company={company}
          selectOption={selectOption}
        />
      ))}
    </div>
  )
}
