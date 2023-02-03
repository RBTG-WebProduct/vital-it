import express from 'express';
import React from 'react';
import serveHTML from '../utils/serveHTML';
import Services from '../pages/Services';

/**
 * Creating a route.
 */
const services = express.Router();

services.route('/')
    /**
     * Sending the "Services.tsx" react file when someone pings the GET method.
     */
    .get(async (req, res) => {
        res.send(serveHTML(<Services></Services>, 'Services'));
    })

export default services;