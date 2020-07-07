import React from "react";
import $ from 'jquery';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler,
MDBCollapse, MDBNavItem, MDBNavLink, MDBView, MDBMask, MDBBox } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }
  
    componentDidMount(){
        // animation du Background title/subtitle
        var mouseX, mouseY;
        var traX, traY;
        $('#anim').mousemove(function(e){
          mouseX = e.pageX;
          mouseY = e.pageY;
          traX = ((4 * mouseX) / 570) + 40;
          traY = ((4 * mouseY) / 570) + 50;
        //   console.log(traX);
          $(".title").css({"background-position": traX + "%" + traY + "%"});
          $(".subtitle").css({"background-position": traX + "%" + traY + "%"});
        });

    }

    onClick() {
      this.setState({
          collapse: !this.state.collapse,
        });
    }

  render() {
    
    return(
        <div >
        <header>
            {/* NavBar */}
          <Router>
            <MDBNavbar className="paddingNav z-depth-3" fixed="top" dark expand="md" scrolling transparent>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

        {/* Image */}
        <MDBView id='anim' src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_960_720.jpg" className='imgFixed'>
                <MDBMask overlay='black-light' className="flex-center flex-column text-white text-center">
                <MDBBox tag='h4' className='title'> Developpeur web et mobile </MDBBox>
                <MDBBox tag='h6' className='subtitle'> Faire du copier-coller son metier </MDBBox>
            </MDBMask>
          </MDBView>
         
        </header>
      </div>
    )
  }
}

export default Header;