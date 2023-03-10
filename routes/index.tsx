import express from 'express';
import serveHTML from '../utils/serveHTML';
import React from 'react';
import Home from '../pages/Home';

/**
 * Creating a route.
 */
const index = express.Router();

index.route('/')
    /**
     * Sending the "Home.tsx" react file when someone pings the GET method.
     */
    .get(async (req, res) => {
        res.send(serveHTML(<Home></Home>, 'Home'));
    })

export default index;