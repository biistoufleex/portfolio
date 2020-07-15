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
                <MDBBox display='flex' tag='h2' justifyContent="center" className='m-5'>
                    Mes Compétences
                </MDBBox>
            </MDBAnimation>
              </MDBCol>
            </MDBRow>

            <MDBRow center>
                <MDBBox display='flex' tag='h5' justifyContent="center" className='m-7 intro textePresentation' > 
                    Cette première année de formation m'a permis de développer des connaissances solides dans les
                    langages<br /> les plus répandus tels que HTML, CSS, PHP et JavaScript. <br />
                    J'ai eu la chance de travailler sur de nombreuses technologies en concevant et
                    développant des projets en autonomie<br />  et en équipe en suivant une méthode Agile. <br />
                    J’ai appris l’importance de l’organisation et de l’optimisation pour un code de qualité.
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