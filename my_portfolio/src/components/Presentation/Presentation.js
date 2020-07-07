import React from "react";
import $ from 'jquery';
import { MDBContainer, MDBBox } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./Presentation.css";

class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titrePresentation: "Une petite presentation s'impose.",
            restePresentation: " Salut, je m'appelle kevin et je suis en formation pour devenir developpeur web et mobile.\
            Je suis curieux et passioner par la programation.",
        };

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

  render() {
    
    return(
        <div id='main'>
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
      </div>
    )
  }
}

export default Presentation;