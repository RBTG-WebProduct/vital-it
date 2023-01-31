import React, { FunctionComponent } from 'react';
import { hydrateRoot } from 'react-dom/client';

const Home:FunctionComponent = () => {
    return <main>
        
    </main>
}

/**
 * This is to hydrate our file so our server can render the HTML content first and send it to the client.
 * Making sure the window is present, becuase if we attempt to run this file in a Node environment without a window (which we will), it will crash.
 */
if(typeof window !== 'undefined') {
    hydrateRoot(document.getElementById('root') as HTMLDivElement, <Home></Home>)
}

export default Home;