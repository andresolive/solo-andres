const fetch = require('cross-fetch')
const Option = require('./models/option')
require('dotenv').config()

const companies = [
  '3M',
  'Abiomed',
  'Accenture',
  'Adobe',
  'Aflac',
  'Allegion',
  'Alphabet',
  'Amazon',
  'Amcor',
  'Ametek',
  'Amgen',
  'Ansys',
  'Anthem',
  'Aon',
  'Apple',
  'Aptiv',
  'ADM',
  'Assurant',
  'Autodesk',
  'AutoZone',
  'Biogen',
  'Broadcom',
  'CarMax',
  'Catalent',
  'Caterpillar',
  'CBRE',
  'CDW',
  'Celanese',
  'Cerner',
  'Chubb',
  'Cigna',
  'Citigroup',
  'Clorox',
  'Comcast',
  'Comerica',
  'Copart',
  'Corning',
  'Corteva',
  'Costco',
  'Lululemon',
  'Netflix',
  'Twitter',
  'Halliburton',
  'Adobe',
  'Allegion',
  'Amcor',
  'Exelon',
  'MetLife',
  'Microsoft',
  'Newmont',
  'Oracle',
  'PayPal',
  'PepsiCo',
  'Pentair',
  'Perrigo',
  'Pfizer',
  'Prologis',
  'PulteGroup',
  'PVH',
  'Qorvo',
  'Qualcomm',
  'ResMed',
  'Rollins',
  'Salesforce',
  'Schlumberger',
  'Starbucks',
  'Synopsys',
  'Sysco',
  'Tapestry',
  'Teleflex',
  'Teradyne',
  'Tesla',
  'Textron',
  'Trimble',
  'Twitter',
  'UDR',
  'Ventas',
  'Verisign',
  'Visa',
  'Wabtec',
  'Walmart',
  'Welltower',
  'WestRock',
  'Xilinx',
  'Xylem',
  'Zoetis',
]

const populate = async () => {
  try {
    for (let i = 0; i < companies.length; i++) {
      const option = { chain: {} }

      console.log('api key', process.env.API_KEY)

      const res = await fetch(
        `https://sandbox.tradier.com/v1/markets/search?q=${companies[i]}&indexes=false`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
            Accept: 'application/json',
          },
        },
      )

      console.log('first fetch -----', res.status, res.ok)

      const company = await res.json()

      if (Array.isArray(company.securities.security)) {
        option.symbol = company.securities.security[0].symbol
        option.description = company.securities.security[0].description
      } else {
        option.symbol = company.securities.security.symbol
        option.description = company.securities.security.description
      }

      const expirations = await fetch(
        `https://sandbox.tradier.com/v1/markets/options/expirations?symbol=${option.symbol}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
            Accept: 'application/json',
          },
        },
      )
      const parsedExpirations = await expirations.json()

      const firstChain = await fetch(
        `https://sandbox.tradier.com/v1/markets/options/chains?symbol=${option.symbol}&expiration=${parsedExpirations.expirations.date[0]}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
            Accept: 'application/json',
          },
        },
      )
      const parsedFirstChain = await firstChain.json()
      option.chain.expiration1 = parsedFirstChain.options.option.map(
        (chainItem) => {
          const {
            description,
            bid,
            ask,
            strike,
            contract_size,
            expiration_date,
            option_type,
          } = chainItem
          return {
            description,
            bid,
            ask,
            strike,
            contract_size,
            expiration_date,
            option_type,
          }
        },
      )

      const secondChain = await fetch(
        `https://sandbox.tradier.com/v1/markets/options/chains?symbol=${option.symbol}&expiration=${parsedExpirations.expirations.date[1]}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
            Accept: 'application/json',
          },
        },
      )

      const parsedSecondChain = await secondChain.json()
      option.chain.expiration2 = parsedSecondChain.options.option.map(
        (chainItem) => {
          const {
            description,
            bid,
            ask,
            strike,
            contract_size,
            expiration_date,
            option_type,
          } = chainItem
          return {
            description,
            bid,
            ask,
            strike,
            contract_size,
            expiration_date,
            option_type,
          }
        },
      )

      await Option.create(option)
    }
  } catch (err) {
    console.log(err)
  }
}

setTimeout(() => {
  populate()
}, 3000)
