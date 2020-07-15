import React from 'react';
import emailjs from 'emailjs-com';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';


import './Form.css';

export default function Form() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.user_name.value);
    console.log(e.target.user_email.value);

    if(e.target.user_name.value != '' && e.target.user_email.value != '') {

      emailjs.sendForm('outlook', 'template_oDCa46U1', e.target, 'user_JwS4GUT3VdvkJecxuORTC')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
      document.getElementById("myForm").reset();
    } else {
        alert("Veuillez preciser votre nom et un email valide pour me permettre de vous repondre")
        
    }
  }

  return (
    <form id='myForm' className="contact-form mb-5" onSubmit={sendEmail}>
        <div className="form-group">
            <input type="hidden" name="contact_number" />
            <label className="label">Prénom</label>
            <input type="text" className="form-control" name="user_name" />
        </div>
        <div className="form-group">
            <label className="label">Email</label>
            <input type="email" className="form-control" name="user_email" />
        </div>
        <div className="form-group">
            <label className="label">Message</label>
            <textarea name="message" className="form-control" />
        </div>
      <input className="btn-submit" type="submit" value="Envoyer" />
    </form>
  );
}