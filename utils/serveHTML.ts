import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

/**
 * Declaration merging the Server Props to the Window object.
 */
declare global {
    interface Window {
        ServerProps:ServerPropsType;
    }
}

/**
 * This is our HTML document that will be rendered.
 * First we are setting an appropriate document head to fetch the CSS and JS files.
 * Then, we are using React's renderToString() to render our React element inside the "root" div.
 * Finally, using webpack, we hydrate the "root" div by sending the client a bundled JS file via the document head.
 * This is the exact process that Create-React-App does, but instead we're doing it on our own Node server.
 * 
 * @param reactComponent The JSX component to be rendered.
 * @param fileName The name of the CSS and JS files to be sent to the client (should be the same).
 * @param ServerProps (Optional) Allows us to pass any properties from the server to the client. This is done by parsing it into a JSON string and attaching it to the client's window. This is a technique used by full-stack frameworks like Next.js or Remix.js.
 */
function serveHTML(reactComponent:ReactElement<any>, fileName:string, inputServerProps?:ServerPropsType | {}){
    /**
     * Loading default Server Props if none provided.
     */
    if(!inputServerProps) inputServerProps = {};

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="icon" href="/images/RBLogo.png" />
            <title>Red Barn Technology Group</title>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Providing Solutions. Our divisions offer end-to-end business solutions that cover aspects of high-performance computing, network administration, tech device sales and repairs, printing and graphics design, website design and hosting, and much more."/>
            <meta name="robots" content="index,nofollow" >
            <link rel="canonical" href="https://thinkredbarn.com/">
            <meta property="og:title" content="Red Barn Technology Group" >
            <meta property="og:site_name" content="Red Barn Technology Group" >
            <meta property="og:url" content="https://redbarnhpc.com/landingPages/a100/" >
            <meta property="og:description" content="Providing Solutions. Our divisions offer end-to-end business solutions that cover aspects of high-performance computing, network administration, tech device sales and repairs, printing and graphics design, website design and hosting, and much more." >
            <meta property="og:image" content="/images/RBTGLogo.png" >
            <link rel="stylesheet" type="text/css" href="/css/${fileName}.css">
            <link rel="stylesheet" type="text/css" href="/css/globals.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js"></script>
            <script>window.ServerProps=${JSON.stringify(inputServerProps)}</script>
        </head>
        <body>
            <div id="root">${renderToString(reactComponent)}</div>
            <script src="/js/${fileName}.js"></script> 
        </body>
        </html>
    `;
}

export default serveHTML;