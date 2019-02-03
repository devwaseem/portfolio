import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import Scroll from 'react-scroll-to-element';
import './navBarStyle.css'
import logowhite from '../../img/logowhite.png'
let lastScrollY = 0;
let ticking = false;

export default class WNavBar extends Component {


  state = {
    navScrolled:'',
  }

  componentDidMount(){
     window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => { 
        if(lastScrollY>100){
          this.setState({
            scrolled:'scrolled',
          })
        }else{
          this.setState({
            scrolled:'',
          })
        }
        ticking = false;
      });
  
      ticking = true;
    }
  };

    render(){
        return(
          <Navbar collapseOnSelect fixedTop className={this.state.scrolled}>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logowhite} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            <Scroll type="id" element="home" >
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
            </Scroll>
            <Scroll type="id" element="about" offset={-100}>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              </Scroll>
              <Scroll type="id" element="portfolio" offset={-100}>
              <NavItem eventKey={3} href="#">
                Portfolio
              </NavItem>
              </Scroll>
              <Scroll type="id" element="contact" offset={-100}>
              <NavItem eventKey={4} href="#">
                Contact
              </NavItem>
              </Scroll>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }

}

