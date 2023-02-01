import express from 'express';
import React from 'react';
import serveHTML from '../utils/serveHTML';
import Services from '../pages/Services';

const services = express.Router();

services.route('/')
    .get(async (req, res) => {
        res.send(serveHTML(<Services></Services>, 'services'));
    })

export default services;