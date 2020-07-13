import React from "react";
import Lightbox from 'react-image-lightbox';
import { MDBContainer, MDBBox, MDBView, MDBRow, MDBCol } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-image-lightbox/style.css';
import "./Contact.css";

const images = [
  '/media/CV.png',
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
              <MDBBox tag='h2' className='titre-project m-5'>Mes Reseaux</MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3'>
                <a className='mesLink' href='https://www.linkedin.com/in/kevin-aubel-2095231a8/' target='blank'>Linkedin</a>
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3'>
                <a href='https://github.com/biistoufleex' target='blank'>Github</a>
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3 reseaux'>
                kevin.aubel@epitech.eu
              </MDBBox>
              <MDBBox tag='h5' className='titre-project mb-3 reseaux'>
                06.16.66.31.03
              </MDBBox>
                
              </MDBCol>

              {/* Mon CV */}
              <MDBCol lg='3' display="flex" justifyContent="center">
              <MDBBox tag='h2' className='titre-project m-5'>Mon CV</MDBBox>
                  <img hover src='/media/CV.png' className='myCV img-fluid' alt='my cv'  onClick={() => {
                    this.setState({ isOpen: true })
                  }} />
              </MDBCol>
            </MDBRow>
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