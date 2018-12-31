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

export default class Home extends Component {

  renderBackground(){
    // if (isMobile) {
    //   return <img className="home-bg" src={mbg}/>
    // }
    return <img className="home-bg" src={dbg}/>
  }

  render() {
    return (
      <div className={"home-containter " + this.props.className}>
      
        {this.renderBackground()}
        <p className="home-hello">Hello & Welcome</p>
        <p className="home-title">
        <TypistLoop interval={1000}>
            {[
              'I am Waseem Akram. ',
              'I am a UI/UX Designer. ',
              'I make Mobile Apps. ',
              'I make Web Apps. '
            ].map(text => <Typist key={text} startDelay={200}>{text}<Typist.Backspace count={text.length} delay={1000} /></Typist>)}
          </TypistLoop>
        </p>
        <div className="home-social">
            <img src={fb}/>
            <img src={twt}/>
            <img src={ig}/>
            <img src={li}/>
        </div>
      
      </div>
    )
  }
}
