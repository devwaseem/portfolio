import React, { Component } from 'react'
import './Contact.styles.css'

import fb from '../../img/bfb.png'
import twt from '../../img/btw.png'
import ig from '../../img/binsta.png'
import li from '../../img/blin.png'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <p className="contact-title">Get in Touch</p>
        <p className="contact-details">No: 2 - perambur highroad first street,</p>
        <p className="contact-details address-2">Jamalia, chennai  600012</p>
        <a href="mailto:waseem07799@gmail.com"><p className="contact-details contact-email">waseem07799@gmail.com</p></a>
        <a href="tel:+91824899344"><p className="contact-details">+91 824899344</p></a>
        <div className="contact-social">
            <img src={fb} alt="facebook icon" onClick={()=>window.open('https://www.facebook.com/dvlprwaseem')} />
            <img src={twt} alt ="twitter icon" onClick={()=>window.open('https://twitter.com/iamwaseem99')} />
            <img src={ig} alt="instagram icon" onClick={()=>window.open('https://www.instagram.com/dvlp.er/')} />
            <img src={li} alt="linkedin icon" onClick={()=>window.open('https://www.linkedin.com/in/waseem-akram-37043112a/')} />
        </div>
      </div>
    )
  }
}
