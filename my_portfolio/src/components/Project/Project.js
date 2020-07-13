import React from "react";

import { MDBContainer, MDBBox, MDBRow, MDBCol, MDBAnimation,
MDBView, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// IMAGE CAROUSSEL
import ecomerce1 from "../../media/ecommerce/image1.png";
import ecomerce2 from "../../media/ecommerce/image2.png";
import ecomerce3 from "../../media/ecommerce/image3.png";
import ecomerce4 from "../../media/ecommerce/image4.png";
import ecomerce5 from "../../media/ecommerce/image5.png";

import tweeter1 from "../../media/tweeter/image1.png";
import tweeter2 from "../../media/tweeter/image2.png";
import tweeter3 from "../../media/tweeter/image3.png";

import game1 from "../../media/puissance4/image1.png";
import game2 from "../../media/puissance4/image2.png";
import game3 from "../../media/puissance4/image3.png";

import irc1 from "../../media/irc/image1.png";
import irc2 from "../../media/irc/image2.png";
import irc3 from "../../media/irc/image3.png";

import "./Project.css";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };

    }
  
    componentDidMount(){

    }

  render() {
    
    return(
      <div>
            {/* Liste de project */}
          <MDBContainer fluid className="text-center d-block project no-padd p-3 p-sm-0">
            <MDBRow center>
              <MDBCol size='6'>
                <MDBBox tag='h2' className='titre d-flex justify-content-center '>
                  Mes projets
                </MDBBox>
              </MDBCol>
            </MDBRow>

            <MDBRow center>
            {/* Caroussel E comerce*/}
            <MDBCol lg='5'  className='articles-pad'>
                <MDBAnimation reveal type="fadeInLeft">
                <MDBBox tag='h4' className='titre-project'>E Commerce</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={5}
                      showControls={false}
                      showIndicators={true}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={ecomerce1}
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de un mois realiser en equipe de 7.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React - Laravel - SQL 
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={ecomerce2}
                              alt="Second slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de un mois realiser en equipe de 7.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React - Laravel - SQL 
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={ecomerce3}
                              alt="Third slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de un mois realiser en equipe de 7.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React - Laravel - SQL 
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={ecomerce4}
                              alt="Four slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de un mois realiser en equipe de 7.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React - Laravel - SQL 
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="5">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={ecomerce5}
                              alt="Five slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de un mois realiser en equipe de 7.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React - Laravel - SQL 
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                </MDBAnimation>
              </MDBCol>

              {/* Caroussel Tweet academie*/}
              <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                <MDBBox tag='h4' className='titre-project'>Tweet academie</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={true}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={tweeter1}
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de 2 semaines realise en equipe de 4.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en PHP
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={tweeter2}
                              alt="Second slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de 2 semaines realise en equipe de 4.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en PHP
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={tweeter3}
                              alt="Third slide"
                            />
                           <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de 2 semaines realise en equipe de 4.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en PHP
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                </MDBAnimation>
              </MDBCol>
            </MDBRow> 

            <MDBRow center>
            <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInLeft">
                <MDBBox tag='h4' className='titre-project'>Puissance 4</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={true}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={game1}
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project individuelle realise en quelque jours
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer JQuery
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={game2}
                              alt="Second slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project individuelle realise en quelque jours
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer JQuery
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={game3}
                              alt="Third slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project individuelle realise en quelque jours
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer JQuery
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                </MDBAnimation>
              </MDBCol>

            {/* Caroussel My IRC*/}
            <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                <MDBBox tag='h4' className='titre-project'>My IRC</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={true}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={irc1}
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer avec NodeJS React socket.io et express
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={irc2}
                              alt="Second slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer avec NodeJS React socket.io et express
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100 rounded"
                              src={irc3}
                              alt="Third slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer avec NodeJS React socket.io et express
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    )
  }
}

export default Project;