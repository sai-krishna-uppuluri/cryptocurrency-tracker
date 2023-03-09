import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrencyData} = props

  const {currencyLogo, currencyName, usdValue, euroValue} = eachCurrencyData

  return (
    <li>
      <div className="list-currency-container">
        <div className="currency-logo-container">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="text currency">{currencyName}</p>
        </div>
        <div className="country-currency-container">
          <p className="text currency">{usdValue}</p>
          <p className="text currency">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
