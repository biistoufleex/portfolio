import React from "react";
import Lightbox from 'react-image-lightbox';
import { MDBContainer, MDBBox, MDBAnimation, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-image-lightbox/style.css';
import "./Contact.css";

import Form from "./Form/Form";

import linkedin from "../../media/icones/linkedin.svg";
import github from "../../media/icones/github.svg";
import email from "../../media/icones/email.svg";
import phone from "../../media/icones/phone.svg";
import CV from "../../media/CV.png";


const images = [
  CV,
];

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };

    }
  
    componentDidMount() {
    }

  render() {
    const { photoIndex, isOpen } = this.state;
    
    return(
        <div>
            <MDBContainer fluid className="container-fluid text-center d-block project no-padd p-3 p-sm-0" display="block">
              {/* <MDBBox tag='h2' className='titre d-flex justify-content-center'>Contact Me !</MDBBox> */}
              
            <MDBRow center> 
              {/* Mes reseaux */}
              <MDBCol lg='3'>
              <MDBBox tag='h2' className='titre-project m-5'>Mes Réseaux</MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3'>
                <img src={linkedin} className='littleIcones' alt='linkedin iconne' />
                <a className='mesLink' href='https://www.linkedin.com/in/kevin-aubel-2095231a8/' target='blank'>Linkedin</a>
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3'>
                <img src={github} className='littleIcones' alt='github iconne' />
                <a href='https://github.com/biistoufleex' target='blank'>Github</a>
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3 reseaux'>
                <img src={email} className='littleIcones' alt='email iconne' />
                kevin.aubel@epitech.eu
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3 reseaux'>
                <img src={phone} className='littleIcones' alt='phone iconne' />
                06.16.66.31.03
              </MDBBox>
                
              </MDBCol>

              {/* Mon CV */}
              <MDBCol lg='3' display="d-block" justifyContent="center">
              <MDBBox tag='h2' className='titre-project m-5'>Mon CV</MDBBox>
                  <img hover src={CV} className='myCV img-fluid' alt='my cv'  onClick={() => {
                    this.setState({ isOpen: true })
                  }} />
              <MDBRow center>
                <MDBBtn outline color="danger" className='mt-3' href='https://anonfiles.com/15O5FfG3oa/AUBEL_Kevin_CV_pdf' target='blank'>Telecharger CV</MDBBtn>
              </MDBRow>
              </MDBCol>
            </MDBRow>

              <MDBAnimation reveal type='zoomIn' duration='2s'>
            <MDBRow center>
              <MDBCol size='12'>
                <MDBBox tag='h2' className='titre-project m-5 mb-7'>Contactez-moi !</MDBBox>
              </MDBCol>
                <Form />
            </MDBRow>
              </MDBAnimation>
            </MDBContainer>

            {isOpen && (
              <Lightbox className='lightBox'
                mainSrc={images[photoIndex]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}


      </div>
    )
  }
}

export default Contact;