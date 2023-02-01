import express from 'express';
import React from 'react';
import serveHTML from '../utils/serveHTML';
import Contact from '../pages/Contact';

const contact = express.Router();

contact.route('/')
    .get(async (req, res) => {
        res.send(serveHTML(<Contact></Contact>, 'contact'));
    })

export default contact;