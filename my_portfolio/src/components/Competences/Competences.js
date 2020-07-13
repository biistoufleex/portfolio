import React from "react";
import { MDBBox, MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// IMAGE CAROUSSEL
import PHP from "../../media/icones/php.png";
import LARAVEL from "../../media/icones/laravel.png";
import SYMFONY from "../../media/icones/symfony.png";
import JS from "../../media/icones/js.png";
import JQUERY from "../../media/icones/jquery.png";
import REACT from "../../media/icones/react.png";
import SOCKET from "../../media/icones/socketio.png";
import BDD from "../../media/icones/bdd.png";
import SQL from "../../media/icones/sql.png";
import MONGO from "../../media/icones/mongo.png";

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
                        <img fluid src={PHP} className='icones' alt='PHP icone' />
                    </MDBBox>
                    <MDBBox tag='h5' className='language'>
                        <img src={LARAVEL} className='littleIcones' alt='laravel iconne'/>
                        Laravel
                    </MDBBox>
                    <MDBBox tag='h5' className='language'>
                        <img src={SYMFONY} className='littleIcones' alt='symfony iconne' />
                        Symfony
                    </MDBBox>
                    </MDBAnimation>
                </MDBCol>

                <MDBCol lg='3' className='cadre-techno p-2 bg-js rounded'>
                    <MDBAnimation reveal type="fadeInUp">
                        <MDBBox tag='h4' className='mt-2 mb-4'>
                            <img fluid src={JS} className='icones' alt='JS icone' />
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            <img src={JQUERY} className='littleIcones' alt='jquery iconne' />
                            JQuery
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            <img src={REACT} className='littleIcones' alt='react iconne' />
                            React / React native
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                        <MDBIcon icon="cogs" /> Express.js
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            <img src={SOCKET} className='littleIcones' alt='socket.io iconne'/>
                            Socket.io
                        </MDBBox>
                    </MDBAnimation>
                </MDBCol>

                <MDBCol lg='3' className='cadre-techno p-2 bg-bdd rounded'>
                    <MDBAnimation reveal type="fadeInRight">
                        <MDBBox tag='h4' className='mt-2 mb-4'>
                            <img fluid src={BDD} className='icones' alt='BDD icone' />
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            <img src={SQL} className='littleIcones' alt='SQL iconne' />
                            SQL
                        </MDBBox>
                        <MDBBox tag='h5' className='language'>
                            <img src={MONGO} className='littleIcones' alt='mongoDB iconne'/>
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