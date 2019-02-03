import React, { Component } from 'react'
import './HireMeSection.styles.css'
import { Parallax } from 'react-parallax';
import bg from '../../img/bg2.png';
import WButton from '../../components/WButton/WButton';

export default class HireMeSection extends Component {
  render() {
    return (
      <div className={"HireMeSection-container " + this.props.className}>
        <Parallax
            bgImage={bg}
            bgImageAlt="hire me"
            strength={600}
        >
            <div className="HireMeSection-parallax" >
                <p className="HireMeSection-parallax-title">Looking for </p>
                <p className="HireMeSection-parallax-title">A Freelancer?</p>
                <a href="mailto:waseem07799@gmail.com"><div className="HireMeButton">Hire me </div></a>
            </div>
        </Parallax>
      </div>
    )
  }
}
