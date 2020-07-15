import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBox } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import "./Footer.css";

class Footer extends React.Component {
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
            <MDBRow center className='footer'>
              <MDBCol size='4'>
                <MDBBox tag='h6' className='footer-text'>
                &copy; {new Date().getFullYear()} Copyright: 
                    <a href="https://www.linkedin.com/in/kevin-aubel-2095231a8/"> Kevin Aubel</a>
                </MDBBox>
              </MDBCol>
              <MDBCol size='4'>
                <MDBBox tag='h6' className='footer-text'>
                    Developpé en React / JQuery
                </MDBBox>
              </MDBCol>
            </MDBRow>
        </div>
    )
  }
}

export default Footer;