import React, { FunctionComponent } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Header from './parts/Header';
import Footer from './parts/Footer';

const Contact:FunctionComponent = () => {
    return <>
        <Header></Header>
        <main></main>
        <Footer></Footer>
    </>
}

/**
 * This is to hydrate our file so our server can render the HTML content first and send it to the client.
 * Making sure the window is present, becuase if we attempt to run this file in a Node environment without a window (which we will), it will crash.
 */
if(typeof window !== 'undefined') {
    hydrateRoot(document.getElementById('root') as HTMLDivElement, <Contact></Contact>)
}

export default Contact;