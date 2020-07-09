import React from "react";
import $ from 'jquery';
import { MDBBox, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
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
        <div >
            <MDBContainer fluid className="text-center d-block p-3 description">
            <MDBRow center>
              <MDBCol size='6'>
                <MDBBox display='flex' tag='h2' justifyContent="center" id='titrePresentation'>
                    Mes Competences
                </MDBBox>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
  }
}

export default Competences;