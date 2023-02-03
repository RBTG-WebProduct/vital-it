import express from 'express';
import React from 'react';

import serveHTML from '../utils/serveHTML';
import emailGenerator from '../utils/emailGenerator';
import RegexTester from '../utils/regexTester';
import sendEmail from '../utils/smtp';

import Contact from '../pages/Contact';

/**
 * Creating a route.
 */
const contact = express.Router();

/**
 * A utility class to generate an HTML email template.
 * Look at "emailGenerator.ts" for more details.
 */
const EmailGenerator = new emailGenerator({
    brandHexCode: '#292929',
    brandSecondaryHexCode: '#EC2027', 
    headerImage: 'https://thinkredbarn.com/image/RBTGlogo.png',
    companyName: 'Red Barn Vital IT',
    headerSubtitle: '<p>37 Pine St, Binghamton, NY 13901</p>',
    message: '<p>Thank you for your interest in Red Barn Vital IT! Please allow us 3-5 days to get back to you.</em></span></p>',
    websiteURL: 'https://thinkredbarn.com/',
});

/**
 * A utility class to test a given data set against a delcared syntax and regex test.
 * Look at "regexTester.ts" for more detials.
 */
const tester = new RegexTester({
    Name: /[a-zA-Z\s\']{1,200}/g,
    Email: /[\w!#$%&*+-=?^_]+@([\w!#$%&*+-=?^_]+\.)+[\w]{2,4}/g,
    Company: /[\w\s().\-,]{1,400}/g,
    Phone: /[0-9\-()]{10,20}/g,
    Message: /[\w\s.?!,";:<>\/+=!@#$%&*()\-\']{1,4000}/g
});

contact.route('/')
    /**
     * Sending the "Contact.tsx" react file when someone pings the GET method.
     */
    .get(async (req, res) => {
        res.send(serveHTML(<Contact></Contact>, 'Contact'));
    })

    /** 
     * The POST method for our form.
     */
    .post(async (req, res) => {
        /**
         * Testing to see if there's any missing data fields.
         */
        if(!req.body || !req.body.Name || req.body.Name.length == 0 || !req.body.Email || req.body.Email.length == 0 || !req.body.Company || req.body.Company.length == 0 || !req.body.Phone || req.body.Phone.length == 0 || !req.body.Message || req.body.Message.length == 0) {
            res.send('You must fill out all fields to submit.');
            return;
        }
        
        /**
         * Running the regex test on the data.
         */
        const result = tester.runTest(req.body);

        /**
         * If there's any error message, return.
         */
        if(typeof result == 'string') {
            res.send(JSON.stringify({
                success: false,
                message: result
            }));
            return;
        }

        /**
         * Now that we know that it's valid data, we can type it.
         */
        const typedResult = result as {
            Name: string,
            Email: string,
            Company: string,
            Phone: string,
            Message: string
        };

        /**
         * Generating the email HTML to send.
         * Since we know there's no nesting on this object, we can safely send it in a table format.
         */
        const customerEmail = EmailGenerator.generateCustomerEmail('Your contact request was recieved!', typedResult);
        const clientEmail = EmailGenerator.generateClientEmail('You\'ve recieved a contact request!', typedResult);

        // FOR TESTING
        res.send(JSON.stringify({
            success: true,
            message: ''
        }));
        return;

        /**
         * Sending the email data to the SMTP Service
         */
        const response1 = await sendEmail({
            to: "sales@thinkredbarn.com",
            toName: "Sales",
            fromName: "Red Barn Support Email",
            subject: "A new thinkredbarn.com inquiry was just recieved!",
            body: clientEmail
        });
        const response2 = await sendEmail({
            to: typedResult.Email,
            toName: typedResult.Name,
            fromName: "Red Barn Support Email",
            subject: "Your thinkredbarn.com inquiry has been recieved!",
            body: customerEmail
        });

        /**
         * If they both successfully sent, send a success message.
         * Otherwise send an error message.
         */
        if(response1 && response2) res.send(JSON.stringify('Success! Check your e-mail for a confirmation.'));
        else res.send(JSON.stringify('Error in sending e-mail, please contact websupport@thinkredbarn.com for help.'));
    })

export default contact;