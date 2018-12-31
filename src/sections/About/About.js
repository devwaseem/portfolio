import React, { Component } from 'react'
import profileImage from '../../img/profile.png'
import './About.style.css'
import WButton from '../../components/WButton/WButton';
export default class About extends Component {
  render() {
    return (
      <div className={"About-Container "+ this.props.className }>
        <div className="About-image-container">
        <img className="About-image" src={profileImage} alt="profile_picture"/>
        </div>
        <div className="About-bio">
            <p className="section-title">About me</p>
            <p className="About-bio-role">UI/UX Designer, Fullstack Web and Mobile App Developer</p>
            <p className="About-bio-text">Hi, I am <span className="About-bio-text-bold">Waseem Akram</span>. I have been developing apps for <span className="About-bio-text-bold">Android and iOS</span> for over 3 years and I have uploaded a few apps that people founded useful. The most featured one is Klip Kutter, available in Android Play Store. 
            <br/>i have experience in <span className="About-bio-text-bold">Web frontend and Backend</span> for over 1.5 years and I am capable of making a full stack app with an admin panel included.</p>
            <p className="About-bio-text">I also have experience in <span className="About-bio-text-bold">UI/UX design</span> which could  help in suggestions/removal/adjustment of functionalities of a project which I contribute.</p>
            <WButton className="AboutDownloadButton" text="Download C.V"/>
        </div>
      </div>
    )
  }
}
