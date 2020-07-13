import React from "react";
import { MDBContainer, MDBBox, MDBAnimation } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import profil from "../../media/profil-image.png"

import "./Presentation.css";

class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titrePresentation: "Une petite presentation s'impose.",
            restePresentation: " Bienvenue, je m'appelle Kevin et suis en formation pour devenir developpeur web et mobile.\
            Je suis curieux et passione par la programmation.",
            TypeEffetEnd: true,
            startEffect: 450
        };

    }
  
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
      
    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        
        this.setState({
            scroll: winScroll
        })
    }
       

    // effet de frappe au clavier pour presentation
    typeEfect(){
        this.setState({ testPresentation: true, TypeEffetEnd: false })
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
                          self.setState({ TypeEffetEnd: true })
                          clearInterval(timer2);
                      }
                  }, 60);
                  clearInterval(timer);
              }
          }, 75);
    }

    restartEffect() {
        this.setState({ testPresentation: false })
    }

  render() {
      
    if (this.state.scroll > this.state.startEffect && !this.state.testPresentation && this.state.TypeEffetEnd === true) {
        this.typeEfect();
    }
    // if (this.state.scroll < 100 && this.state.testPresentation && this.state.testPresentation) {  
    //     this.setState({ testPresentation: false })
    // }
      
    return(
        <div>
                                    {/* type effect */}
            <MDBContainer fluid className="text-center d-block description" display="block">
                <MDBAnimation reveal type='zoomIn' duration='2s'>
                    <MDBBox>
                        <img
                        src={profil}
                        className="img-fluid rounded-circle profilPic"
                        alt=""
                        />
                    </MDBBox>
                </MDBAnimation>
                <MDBBox display="block" justifyContent="center">
                <MDBBox display='flex' tag='h3' justifyContent="center">
                    {this.state.titrePresentation}
                </MDBBox>
                <MDBBox display='flex' tag='h5' justifyContent="center" id='textePresentation'> 
                   {this.state.restePresentation}
                </MDBBox>
                </MDBBox>
                {/* <MDBBox display='block' tag='a' justifyContent="center" id='restartTypeEffect' onClick={()=>{
                    this.restartEffect();
                }}>
                   Restart effect
                </MDBBox> */}
            </MDBContainer>
      </div>
    )
  }
}

export default Presentation;