import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
 
const Contact = () => {
    return (
      <Fragment>
      <Header />
         <div className="columns is-centered is multi-line">
        <div className="column is-6">
          <h1 className="is-size-1">
            Email: lordaufchaos@yahoo.com
          </h1>
          <h1 className="is-size-1">
            Phone: (980)-230-1816
          </h1>
          <h1 className="is-size-1">
            github: JTLaMarre
          </h1>
        </div>
        </div>
        <Footer />
        </Fragment>
    );
}
 
export default Contact;