import express from 'express';
import React from 'react';
import serveHTML from '../utils/serveHTML';
import Contact from '../pages/Contact';
import emailGenerator from '../utils/emailGenerator';
import RegexTester from '../utils/regexTester';

const contact = express.Router();

const EmailGenerator = new emailGenerator({
    brandHexCode: '#292929',
    brandSecondaryHexCode: '#EC2027', 
    headerImage: 'https://thinkredbarn.com/image/RBTGlogo.png',
    companyName: 'Red Barn Vital IT',
    headerSubtitle: '<p>37 Pine St, Binghamton, NY 13901</p>',
    message: '<p>Thank you for your interest in Red Barn Vital IT! Please allow us 3-5 days to get back to you.</em></span></p>',
    websiteURL: 'https://thinkredbarn.com/',
});

contact.route('/')
    .get(async (req, res) => {
        res.send(serveHTML(<Contact></Contact>, 'contact'));
    })
    .post(async (req, res) => {
        if(!req.body || !req.body.Name || req.body.Name.length == 0 || !req.body.Email || req.body.Email.length == 0 || !req.body.Company || req.body.Company.length == 0 || !req.body.Phone || req.body.Phone.length == 0 || !req.body.Message || req.body.Message.length == 0) {
            res.send('You must fill out all fields to submit.');
            return;
        }

        const tester = new RegexTester({
            Name: /[a-zA-Z\s\']{1,10}/g,
            Email: /[\w!#$%&*+-=?^_]+@([\w!#$%&*+-=?^_]+\.)+[\w]{2,4}/g,
            Company: /[\w\s().\-,]{1,400}/g,
            Phone: /[0-9\-()]{10,20}/g,
            Message: /[\w\s.?!,";:<>\/+=!@#$%&*()\-\']{1,4000}/g
        });
        const result = tester.runTest(req.body);

        if(typeof result == 'string') {
            res.send(JSON.stringify({
                success: false,
                message: result
            }));
            return;
        }

        const customerEmail = EmailGenerator.generateCustomerEmail('Your contact request was recieved!', req.body);
        const clientEmail = EmailGenerator.generateClientEmail('You\'ve recieved a contact request!', req.body);

        res.send(JSON.stringify({
            success: true,
            message: ''
        }));
    })

export default contact;