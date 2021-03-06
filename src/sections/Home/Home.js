import React, { Component } from 'react'
import './home.styles.css'
import dbg from '../../img/bg3.png'
import mbg from '../../img/bg2.png'
import {isMobile} from 'react-device-detect';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import fb from '../../img/swfb.png'
import twt from '../../img/swtw.png'
import ig from '../../img/swig.png'
import li from '../../img/swli.png'
import scroll from '../../img/scroll.png'
export default class Home extends Component {



  render() {
    return (
      <div id="home" className={"home-containter " + this.props.className}>
        <img className="home-bg" src={dbg}/>
        <p className="home-hello">Hello & Welcome</p>
        <p className="home-title">
        <TypistLoop interval={1000}>
            {[
              'I am Waseem Akram. ',
              'I am an UI/UX Designer.',
              'I make Mobile Apps. ',
              'I make Web Apps. '
            ].map(text => <Typist key={text} startDelay={200}>{text}<Typist.Backspace count={text.length} delay={1000} /></Typist>)}
          </TypistLoop>
        </p>
        <div className="home-social">
            <img src={fb} alt="facebook icon" onClick={()=>window.open('https://www.facebook.com/dvlprwaseem')} />
            <img src={twt} alt ="twitter icon" onClick={()=>window.open('https://twitter.com/iamwaseem99')} />
            <img src={ig} alt="instagram icon" onClick={()=>window.open('https://www.instagram.com/dvlp.er/')} />
            <img src={li} alt="linkedin icon" onClick={()=>window.open('https://www.linkedin.com/in/waseem-akram-37043112a/')} />
        </div>
        <img className="home-scroll" src={scroll}/>
      </div>
    )
  }
}
