import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Email from '../email'
 
const Contact = () => {
    return (
      <Fragment>
      <Header />
         <div className="columns is-centered is multi-line">
        <div className="column is-6">
          <h1 className="is-size-1">
            Email Contact Form
          </h1>
          <Email />
          <h1 className="is-size-1">
            I can also be reached
          </h1>
          <h1 className="is-size-3">
            Phone: (980)-230-1816
          </h1>
          <h1 className="is-size-3">
            github: JTLaMarre
          </h1>
        </div>
        </div>
        <Footer />
        </Fragment>
    );
}
 
export default Contact;