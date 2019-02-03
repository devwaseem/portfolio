import React, { Component } from 'react'
import profileImage from '../../img/profile.png'
import './About.style.css'
import WButton from '../../components/WButton/WButton';
export default class About extends Component {
  render() {
    return (
      <div id="about" className={"About-Container "+ this.props.className }>
        <div className="About-image-container">
        <img className="About-image" src={profileImage} alt="profile_picture"/>
        </div>
        <div className="About-bio">
            <p className="section-title">About me</p>
            <p className="About-bio-role">UI/UX Designer, Fullstack Web and Mobile App Developer</p>
            <p className="About-bio-text"><span className="About-bio-text-bold">Detail-oriented </span>Computer Science major currently attending BSA Crescent University, with <span className="About-bio-text-bold">3+ years</span> of work experience. Aiming to leverage a proven knowledge of <span className="About-bio-text-bold">Web / Mobile Application development, UI/UX Design, and Database Design skills</span> to successfully fill the App Developer role at your company. Frequently praised as <span className="About-bio-text-bold">hard-working</span> by my peers, I can be relied upon to help your company achieve its goals.</p>
            
            <WButton className="AboutDownloadButton" text="Download C.V"/>
        </div>
      </div>
    )
  }
}
