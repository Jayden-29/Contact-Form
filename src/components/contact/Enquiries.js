import React from 'react'
import emailjs from 'emailjs-com'

     export default function ContactUs(){ 

       function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_a4x0wwk', 'template_bnpxbpv', e.target, 'user_6OmwI282vStPHg668MYph')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
                  console.log('Getting there mate')
              })
              e.target.reset()
            }
          

        return(
            <div>
                <div className="container">
                <form onSubmit={sendEmail}>
                     <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    
                    <div className="col-8 form-group pt-2 mx-auto">
                     <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>   
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                   <input type="submit" className="btn btn-info" value="Send Message"></input> 
                    </div>
                    </div>
            </form>
                </div>
            </div> 
)
        
            }