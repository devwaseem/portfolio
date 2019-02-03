import React, { Component } from 'react'
import './Wbutton.styles.css'
export default class WButton extends Component {
  render() {
    return (
      <div className={"WButton " + this.props.className} onClick={this.props.onclick} >
        <p className="WButton-text">{this.props.text}</p>
      </div>
    )
  }
}
