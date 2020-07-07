import React from "react";
import $ from 'jquery';
import { MDBContainer, MDBBox, MDBRow, MDBCol, MDBAnimation,
MDBView, MDBMask } from 'mdbreact';
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
          <MDBContainer fluid className="text-center d-block" className='project'>
            <MDBRow center>
              <MDBCol size='6'>
                <MDBBox tag='h2' className='titre d-flex justify-content-center '>
                  Mes Projects
                </MDBBox>
              </MDBCol>
            </MDBRow>

            <MDBRow center>
              <MDBCol lg='4' className='articles-pad'>
                <MDBAnimation reveal type="fadeInLeft">
                  <MDBView hover zoom>
                    <img
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                    className="img-fluid"
                    alt=""
                    />
                    <MDBMask className="flex-center" overlay="red-strong">
                      <p className="white-text">Strong overlay</p>
                    </MDBMask>
                  </MDBView>
                </MDBAnimation>
              </MDBCol>

              <MDBCol lg='4' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                  <MDBView hover zoom>
                    <img
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                    className="img-fluid"
                    alt=""
                    />
                    <MDBMask className="flex-center" overlay="red-strong">
                      <p className="white-text">Strong overlay</p>
                    </MDBMask>
                  </MDBView>
                </MDBAnimation>
              </MDBCol>
              
            </MDBRow> 

            <MDBRow center>
            <MDBCol lg='4' className='articles-pad'>
              <MDBAnimation reveal type="fadeInLeft">
                <MDBView hover zoom>
                  <img
                  src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                  className="img-fluid"
                  alt=""
                  />
                  <MDBMask className="flex-center" overlay="red-strong">
                    <p className="white-text">Strong overlay</p>
                  </MDBMask>
                </MDBView>
              </MDBAnimation>
            </MDBCol>


              <MDBCol lg='4' className='articles-pad'>
                <MDBAnimation reveal type="fadeInRight">
                  <MDBView hover zoom>
                    <img
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                    className="img-fluid"
                    alt=""
                    />
                    <MDBMask className="flex-center" overlay="red-strong">
                      
                    </MDBMask>
                  </MDBView>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>

          </MDBContainer>
      </div>
    )
  }
}

export default Project;