import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

/**
 * This is our HTML document that will be rendered.
 * First we are setting an appropriate document head to fetch the CSS and JS files.
 * Then, we are using React's renderToString() to render our React element inside the "root" div.
 * This is the exact process that Create-React-App does but instead on a server.
 */
function serveHTML(reactComponent:ReactElement<any>, fileName:string){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="icon" href="#" />
            <title>Red Barn Vital IT - ${fileName}</title>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <link rel="stylesheet" type="text/css" href="/CSS/${fileName}.css">
            <link rel="stylesheet" type="text/css" href="/CSS/globals.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js"></script>
        </head>
        <body>
            <div id="root">${renderToString(reactComponent)}</div>
            <script src="/js/${fileName}.js"></script> 
        </body>
        </html>
    `;
}

export default serveHTML;