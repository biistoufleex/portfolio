import React, { useRef } from "react";
import $ from 'jquery';
import { MDBBox, MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./Competences.css";

class Competences extends React.Component {
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
            <MDBContainer fluid className="text-center d-block p-3 description">
            <MDBRow center>
              <MDBCol size='6'>
              <MDBAnimation reveal>
                <MDBBox display='flex' tag='h2' justifyContent="center" id='titrePresentation' className='m-5'>
                    Mes Competences
                </MDBBox>
            </MDBAnimation>
              </MDBCol>
            </MDBRow>

            <MDBRow center>
                <MDBBox display='flex' tag='h5' justifyContent="center" id='textePresentation' className='m-7 intro'> 
                    Cette premiere annee de formation m'a permis d'acquerir des competences solides en PHP et en JS.
                    <br/> J'ai eu la chance de travailler sur de nombreuses technologies dans des projets en autonomie et en groupe.
                </MDBBox>
            </MDBRow>

            <MDBRow center className='mt-3'>
                <MDBCol lg='3' className='cadre-techno p-2 bg-php rounded'>
                    <MDBAnimation reveal type="fadeInLeft">
                    <MDBBox tag='h4' className='mt-2 mb-4'>
                        <img fluid src='/media/icones/php.png' className='icones' />
                    </MDBBox>
                    <MDBBox tag='h5' className='language'>
                        Laravel
                    </MDBBox>
                    <MDBBox tag='h5' className='language'>
                        Symfony
                    </MDBBox>
                    </MDBAnimation>
                </MDBCol>

                <MDBCol lg='3' className='cadre-techno p-2 bg-js rounded'>
                    <MDBAnimation reveal type="fadeInUp">
                        <MDBBox tag='h4' className='mt-2 mb-4'>
                            <img fluid src='/media/icones/js.png' className='icones' />
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            JQuery
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            React / React native
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            Express.js
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            Socket.io
                        </MDBBox>
                    </MDBAnimation>
                </MDBCol>

                <MDBCol lg='3' className='cadre-techno p-2 bg-bdd rounded'>
                    <MDBAnimation reveal type="fadeInRight">
                        <MDBBox tag='h4' className='mt-2 mb-4'>
                            <img fluid src='/media/icones/bdd.png' className='icones' />
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            SQL
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            MongoDB
                        </MDBBox>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
            </MDBContainer>

        </div>
    )
  }
}

export default Competences;