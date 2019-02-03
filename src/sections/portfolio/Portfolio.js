import React, { Component } from 'react'
import './Portfolio.styles.css'
import PortfolioComponent from '../../components/portfolioComponent/PortfolioComponent';
import calculator from '../../img/calc.png'
import checkout from '../../img/checkout.png'
import login from '../../img/login.png'
import portfolio from '../../img/port.png'
import aero from '../../img/crescentaero.png'
import face from '../../img/face.png'
import klip from '../../img/klipkutter.png'
import notekeeper from '../../img/notekeeper.png'
import venturious from '../../img/venturious.png'


export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className={"portfolio-container " + this.props.className}>
        <p className="section-title portfolio-title">Portfolio</p>
        <div className="portfolio-components-container">
        <PortfolioComponent img={calculator} title="Calculator UI" url="https://www.uplabs.com/posts/modern-calculator-kit"/>
        <PortfolioComponent img={login} title="Login UI" url="https://www.uplabs.com/posts/sign-up-daily-ui-challenge-day-1"/>
        <PortfolioComponent img={portfolio} title="Minimal Portfolio UI" url="https://www.uplabs.com/posts/minimal-portfolio-landing-page-concept"/>
        <PortfolioComponent img={checkout} title="Checkout UI" url="https://www.uplabs.com/posts/checkout-page-be0b36f8-473f-4f14-a934-d0cd369d9d92"/>
        <PortfolioComponent img={aero} title="Website for Crescent AeroScience" url="http://www.crescentaero.in/"/>
        <PortfolioComponent img={notekeeper} title="NoteKeeper App for Android" url="https://play.google.com/store/apps/details?id=xyz.xaple.notekeeper"/>   
        <PortfolioComponent img={venturious} title="Venturious App for iOS" url="https://itunes.apple.com/us/app/venturious/id1209829642?mt=8"/>   
        <PortfolioComponent img={klip} title="Klip Kutter App for Android" url="https://play.google.com/store/apps/details?id=com.waseem.videotrimmerforwhatsapp&hl=en_IN"/>   
        <PortfolioComponent img={face} title="Facepass App for Android and iOS" url="https://www.producthunt.com/posts/facepass"/>   
        </div>
      </div>
    )
  }
}
