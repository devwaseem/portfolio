import React, { Component } from 'react'
import './Portfolio.styles.css'
import PortfolioComponent from '../../components/portfolioComponent/PortfolioComponent';


import calculator from '../../img/calc.png'
import checkout from '../../img/checkout.png'
import login from '../../img/login.png'
import portfolio from '../../img/port.png'
import aero from '../../img/crescentaero.png'


export default class Portfolio extends Component {
  render() {
    return (
      <div className={"portfolio-container " + this.props.className}>
        <p className="section-title portfolio-title">Portfolio</p>
        <div className="portfolio-components-container">
        <PortfolioComponent img={calculator} title="Calculator UI"/>
        <PortfolioComponent img={login} title="Login UI"/>
        <PortfolioComponent img={portfolio} title="Portfolio UI"/>
        <PortfolioComponent img={checkout} title="Checkout UI"/>
        <PortfolioComponent img={aero} title="Website for Crescent AeroScience"/>
        <PortfolioComponent img={calculator} title="Calculator UI"/>   
        </div>
      </div>
    )
  }
}
