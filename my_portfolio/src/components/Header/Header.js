import React from "react";
import $ from 'jquery';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBBtn, MDBView, MDBMask,
MDBContainer, MDBBox, MDBAnimation } from 'mdbreact';
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
            titrePresentation: "Une petite presentation s'impose.",
            restePresentation: " Salut, je m'appelle kevin et je suis en formation pour devenir developpeur web et mobile.\
            Je suis curieux et passioner par la programation.",
        };
        this.onClick = this.onClick.bind(this);
    }
  
    componentDidMount(){
        // animation du Background title/subtitle
        var mouseX, mouseY;
        var ww = $( window ).width();
        var wh = $( window ).height();
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
       

    // effet de frappe au clavier pour presentation
    typeEfect(){
        this.setState({ testPresentation: true })
        var textTitre = this.state.titrePresentation;
        var textDesc = this.state.restePresentation;

        this.setState( { titrePresentation: '' } )
        this.setState( { restePresentation: '' } )
        
        var i = 0;
        var j = 0;
        var recupTexte = '';
        var recupTexte2 = '';
        var self = this;
        var timer = setInterval(function() {
            if (i < textTitre.length) {
                recupTexte += textTitre.charAt(i);
                self.setState({ titrePresentation: recupTexte })
                i++;
              } else {
                var timer2 = setInterval(function() {
                    if (j < textDesc.length) {
                        recupTexte2 += textDesc.charAt(j);
                        self.setState({ restePresentation: recupTexte2 })
                        j++;
                      } else {
                          clearInterval(timer2);
                      }
                  }, 60);
                  clearInterval(timer);
              }
          }, 75);
    }

    restartEffect() {
        this.setState({ testPresentation: false })
        console.log(this.state.testPresentation);
        
    }

    onClick() {
      this.setState({
          collapse: !this.state.collapse,
        });
    }

  render() {
    
    return(
        <div id='main'>
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
                                    {/* type effect */}
            <MDBContainer fluid className="text-center d-block description" display="block">
                <MDBBox display="block" justifyContent="center" onMouseOver={()=>{
                    if (!this.state.testPresentation) {
                    this.typeEfect();
                }}}>
                <MDBBox display='flex' tag='h2' justifyContent="center" id='titrePresentation'>
                    {this.state.titrePresentation}
                </MDBBox>
                <MDBBox display='flex' tag='h5' justifyContent="center" id='textePresentation'> 
                   {this.state.restePresentation}
                </MDBBox>
                </MDBBox>
                <MDBBox display='block' tag='a' justifyContent="center" id='restartTypeEffect' onClick={()=>{
                    this.restartEffect();
                }}>
                   Restart effect
                </MDBBox>
            </MDBContainer>
        
                                 {/* exemple de project */}
            <MDBContainer fluid className="text-center d-block project" display="block">
                <MDBBox display='flex' tag='h6' justifyContent="center" id='textePresentation'> 
                   Mes project
                </MDBBox>
            
            </MDBContainer>
      </div>
    )
  }
}

export default Header;