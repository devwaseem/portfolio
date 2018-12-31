import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import Scroll from 'react-scroll-to-element';
import './navBarStyle.css'
import logowhite from '../../img/logowhite.png'
import logoblack from '../../img/logoblack.png'
let lastScrollY = 0;
let ticking = false;

export default class WNavBar extends Component {


  state = {
    scrolled:''
  }

  componentDidMount(){
     window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
   
    if (!ticking) {
      window.requestAnimationFrame(() => { 
        if(lastScrollY>20){
          this.setState({
            scrolled:'scrolled'
          })
        }else{
          this.setState({
            scrolled:''
          })
        }
        ticking = false;
      });
  
      ticking = true;
    }
  };

    render(){
        return(
          <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logowhite} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavItem eventKey={3} href="#">
                Portfolio
              </NavItem>
              <NavItem eventKey={4} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }

}

