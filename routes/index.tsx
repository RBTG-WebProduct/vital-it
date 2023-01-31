import express from 'express';
import serveHTML from '../utils/serveHTML';
import React from 'react';
import Home from '../pages/Home';

const index = express.Router();

index.route('/')
    .get(async (req, res) => {
        res.send(serveHTML(<Home></Home>, 'Home'))
    })

export default index;