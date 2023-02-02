type TableData = { 
    [key: string]: string | number | boolean
}

class emailGenerator {
    color:string;
    secondaryColor:string;
    header:string;
    message:string;
    name:string;

    constructor(input:{
        brandHexCode: string,
        brandSecondaryHexCode: string,
        headerImage: string,
        companyName: string,
        headerSubtitle?: string,
        message: string,
        websiteURL: string,
    }){
        this.color = input.brandHexCode;
        this.secondaryColor = input.brandSecondaryHexCode;
        this.name = input.companyName;
        this.header = `<table id="header"><td class="HeaderColumn"><a href="${input.websiteURL}"><img src="${input.headerImage}"></a></td><td class="HeaderColumn"><h2><a href="${input.websiteURL}">${input.companyName}</a></h2>${input.headerSubtitle}</td></table>`;
        this.message = input.message;
    }

    generateCustomerEmail(subject:string, data:TableData) {
        let dataTableHTML = '<table class="DataTable"><tr class="DataTableRow"><th>Entry</th><th>Value</th></tr>';
        Object.keys(data).forEach(key => {
            dataTableHTML += `<tr class="DataTableRow"><td class="DataTableEntry">${key}</td><td class="DataTableEntry">${data[key]}</td></tr>`;
        })
        dataTableHTML += '</table>';

        const fullHTML = `${this.generateDocumentHead()}${this.header}<h1 id="notification">${subject}</h1><!--GENERATED DATA TABLE BEGIN-->${dataTableHTML}<!--GENERATED DATA TABLE END-->${this.message}</body></html>`;

        return fullHTML;
    }

    generateClientEmail(subject:string, data:TableData) {
        let dataTableHTML = '<table class="DataTable"><tr class="DataTableRow"><th>Entry</th><th>Value</th></tr>';
        Object.keys(data).forEach(key => {
            dataTableHTML += `<tr class="DataTableRow"><td class="DataTableEntry">${key}</td><td class="DataTableEntry">${data[key]}</td></tr>`;
        })
        dataTableHTML += '</table>';

        const fullHTML = `${this.generateDocumentHead()}${this.header}<h1 id="notification">${subject}</h1><!--GENERATED DATA TABLE BEGIN-->${dataTableHTML}<!--GENERATED DATA TABLE END--><p>See any problems? Let us know at <a href="mailto:websupport@thinkredbarn.com">websupport@thinkredbarn.com</a>!</p></body></html>`;

        return fullHTML;
    }

    generateDocumentHead(){
        return '<html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--yahoo fix--> </head> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <meta name="format-detection" content="telephone=no, date=no, address=no, email=no"> <meta name="x-apple-disable-message-reformatting"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap" rel="stylesheet"> <title>' + this.name + ' Inquiry Confirmation Email</title> <style> :root{ --brandColor: ' + this.color + '; --brandColorHalf: ' + this.color + '25; --secondaryColor: ' + this.secondaryColor + '; } html { display: block; position: absolute; width: 100%; height: 100%; overflow-y: scroll; overflow-x: hidden; } body { font-family: "IBM Plex Sans"; background: white; padding: 0; padding-bottom: 1px; margin: 0; left: 0; right: 0; top: 0; bottom: 0; } #main { background: white; padding: 0em 1em; border-bottom: 3px dashed rgba(0,0,0, 0.15); } h1 { margin: 0; line-height: 100%; text-align: center; } .DataTable { line-height: 100%; margin-left: 5%; margin-top: 60px; margin-bottom: 30px; width: 90%; border-collapse: separate; border-spacing: 0px 0px; box-shadow: 0 0 0 2px black, 0 0 0.75em 0 rgba(0,0,0,0.15); border-radius: 5px; } .DataTableRow:nth-child(even) { background-color: var(--brandColorHalf) } .DataTableEntry{ padding: 0.75em 1em; } .DataTableEntry:nth-child(even) { border-left: 2px solid black; width: 65%; } .DataTableEntry:nth-child(odd) { text-align: center; font-size: 1.2em; font-weight: 600; } th:nth-child(even){ border-left: 2px solid black; } th { padding: 1em; font-weight: 800; font-size: 1.4em; } th { border-bottom: 2px solid black; } p { font-size: 1.25em; width: fit-content; margin-left: auto; margin-right: auto; margin-top: 3em; margin-bottom: 4em; } span { display: block; text-align: right; width: 100%; font-weight: 300; } #header { padding: 1em; width: calc(100% + 2em); margin-left: -1em; margin-bottom: 4em; background: var(--brandColor); box-shadow: none; border-radius: 0px; box-shadow: 0 0 0.75em 0 rgba(0,0,0,0.35); } .HeaderColumn{text-align: center; width: 50%} .HeaderColumn:nth-child(even) { padding-left: 1em; } .HeaderColumn > p { color: white; text-align: left; margin: 0; font-weight: 400; font-size: 1.1em; } .HeaderColumn > h2 { color: white !important; text-align: left; margin: 0; font-weight: 300; font-size: 2.5em; line-height: 100%; margin-bottom: 0.25em; } a { color: var(--secondaryColor); transition: opacity 0.15s linear, color 0.15s linear; text-decoration-thickness: 3px; text-underline-offset: 4px; } a:hover { opacity: 0.5; cursor: pointer; } .HeaderColumn a { font-weight: 600 } .HeaderColumn a img { max-height: 150px } </style></head><body>'
    }
}

export default emailGenerator;
export type { TableData };