import fetch from 'node-fetch';

/**
 * A simple funciton to take parameters and parse them into a POST call to the SMTP2GO service.
 */
async function sendEmail(args:{
    to:string,
    toName:string,
    fromName:string,
    subject:string,
    body:string
}) {
    /**
     * Sending the email data to the SMTP Service
     */
    const response = await (await fetch('https://api.smtp2go.com/v3/email/send', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "api_key": process.env.SMTPAPIKEY,
            "to": [`${args.toName} <${args.to}>`],
            "sender": `${args.fromName} <webalerts@thinkredbarn.com>`,
            "subject": args.subject,
            "html_body": args.body
        })
    })).json();

    /**
     * Returning whether is was successful based on the syntax of SMTP2GO's response syntax.
     */
    return response.data.succeeded == 1;
}

export default sendEmail;