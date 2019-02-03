import React, { Component } from 'react'
import './portfolioComponent.styles.css'
export default class PortfolioComponent extends Component {

  state = {
    overlayAnimation:'',
    titleAnimation:'',
    showAnimation:''
  }

  applyAnimation = ()=>{
    this.setState({
      overlayAnimation:'overlayAnimation-in',
      titleAnimation:' titleAnimation-in',
      showAnimation:'animationDefaults showAnimation-in'
    })
  }

  removeAnimation = ()=>{
    this.setState({
      overlayAnimation:'animationDefaults overlayAnimation-out',
      titleAnimation:'animationDefaults titleAnimation-out',
      showAnimation:'animationDefaults showAnimation-out'
    })
  }

  render() {
    return (
      <div className={"portfolioComponent-container "+  this.props.className} onMouseEnter={this.applyAnimation} onMouseLeave={this.removeAnimation}>
        <img className="portfolioComponent-image" src={this.props.img} alt="portfolio-component"/>
        <div className="portfolioComponent-overlays">
          <div className={"upperOverlay "  + "animationDefaults " + this.state.overlayAnimation}></div>
          <div className={"lowerOverlay "   + "animationDefaults " + this.state.overlayAnimation}></div>
        </div>
        <p className={"portfolio-component-title "  + "animationDefaults " + this.state.titleAnimation}>{this.props.title}</p>
        <p className={"portfolio-component-show "  + "animationDefaults " + this.state.showAnimation} 
          onClick={()=>window.open(this.props.url)}
          ><u>Show</u></p>
        </div>
    )
  }
}
