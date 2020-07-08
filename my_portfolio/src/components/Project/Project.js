import React from "react";
import $ from 'jquery';
import { MDBContainer, MDBBox, MDBRow, MDBCol, MDBAnimation,
MDBView, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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
          <MDBContainer fluid className="text-center d-block" className='project no-padd p-3 p-sm-0'>
            <MDBRow center>
              <MDBCol size='6'>
                <MDBBox tag='h2' className='titre d-flex justify-content-center '>
                  Mes projects
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
                      length={3}
                      showControls={false}
                      showIndicators={false}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
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
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
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
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
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
                      </MDBCarouselInner>
                    </MDBCarousel>
                </MDBAnimation>
              </MDBCol>

            {/* Caroussel My Snapchat*/}
              <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                <MDBBox tag='h4' className='titre-project' >My Snapchat</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={false}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project mobile de 5 jour individuelle
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React-Natif avec une API fourni
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                              alt="Second slide"
                            />
                             <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project mobile de 5 jour individuelle
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React-Natif avec une API fourni
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                              alt="Third slide"
                            />
                             <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project mobile de 5 jour individuelle
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en React-Natif avec une API fourni
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
            {/* Caroussel Tweet academie*/}
            <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInLeft">
                <MDBBox tag='h4' className='titre-project'>Tweet academie</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={false}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
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
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
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
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
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

            {/* Caroussel My IRC*/}
            <MDBCol lg='5' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                <MDBBox tag='h4' className='titre-project'>My IRC</MDBBox>
                    <MDBCarousel
                      activeItem={1}
                      length={3}
                      showControls={false}
                      showIndicators={false}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                              alt="First slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en NodeJS React socket.io
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                              alt="Second slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en NodeJS React socket.io
                              </MDBBox>
                            </MDBMask>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView hover zoom>
                            <img
                              className="d-block w-100"
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                              alt="Third slide"
                            />
                            <MDBMask className="d-flex align-items-stretch" overlay="red-strong">
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Project de une semaine realise en duo.
                              </MDBBox>
                              <MDBBox tag='h4' className='white-text vertical-center'>
                                Developer en NodeJS React socket.io
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