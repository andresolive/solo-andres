// import fetch from "cross-fetch";

const { default: fetch } = require('cross-fetch')

const baseUrl = 'http://localhost:3001/'

const findUser = async (email, password) => {
  const res = await fetch(`${baseUrl}login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  return await res.json()
}

const addUser = async (firstName, lastName, email, password) => {
  const res = await fetch(`${baseUrl}register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  })
  return await res.json()
}

const getCompanies = async () => {
  const res = await fetch(`${baseUrl}options`)
  return await res.json()
}

const addOptionToWatchlist = async (option, email) => {
  await fetch(`${baseUrl}addToWl`, {
    method: 'POST',
    body: JSON.stringify({ option, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // return await res.json();
}

const addOptionToPortfolio = async (option, email) => {
  await fetch(`${baseUrl}addToPf`, {
    method: 'POST',
    body: JSON.stringify({ option, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // return await res.json();
}

const deleteOptionFromWatchlist = async (option, email) => {
  console.log(option)
  await fetch(`${baseUrl}removeFromWl`, {
    method: 'PUT',
    body: JSON.stringify({ option, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const deleteOptionFromPortfolio = async (option, email) => {
  await fetch(`${baseUrl}sell`, {
    method: 'PUT',
    body: JSON.stringify({ option, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

module.exports = {
  findUser,
  addUser,
  getCompanies,
  addOptionToWatchlist,
  addOptionToPortfolio,
  deleteOptionFromWatchlist,
  deleteOptionFromPortfolio,
}
