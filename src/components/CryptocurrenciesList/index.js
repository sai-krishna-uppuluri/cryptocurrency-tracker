import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    currencyData: [],
    isLoading: true,
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const updatedData = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      id: eachData.id,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({
      currencyData: updatedData,
      isLoading: false,
    })
  }

  componentDidMount = () => {
    this.getCurrencyData()
  }

  render() {
    const {currencyData, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-inside-container">
            <h1 className="heading">Cryptocurrency Tracker </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <div className="list-container">
              <div className="header-container">
                <div>
                  <h1 className="type-header">Coin Type</h1>
                </div>
                <div className="currency-container">
                  <h1 className="type-header">USD</h1>
                  <h1 className="type-header">EURO</h1>
                </div>
              </div>
              <ul className="item-container">
                {currencyData.map(eachCurrencyData => (
                  <CryptocurrencyItem
                    eachCurrencyData={eachCurrencyData}
                    key={eachCurrencyData.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
