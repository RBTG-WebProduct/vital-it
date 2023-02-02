class RegexTester {
    regexTests: {
        [keyName: string]: RegExp
    }

    constructor(regexTests: {[keyName: string]: RegExp}) {
        this.regexTests = regexTests;
    }

    runTest(data: {[keyName:string]: string}) {
        let returnData = {};

        for(let i = 0; i < Object.keys(this.regexTests).length; i++) {
            /**
             * First we loop through the tests and make sure their corresponding fields are present.
             */
            const keyName = Object.keys(this.regexTests)[i];
            if(typeof data[keyName as keyof typeof data] == 'undefined') {
                return `Error: missing field: ${keyName}`;
            }
            /**
             * Then we run the test.
             */
            const value = data[keyName as keyof typeof data];
            const result = value.match(this.regexTests[keyName]);

            /**
             * If Regex rest completly fails, just return a basic error message.
             */
            if(!result) return `Error: Please provide a valid ${keyName}`;
            /**
             * If Regex test fails, but all joined matches are equal to the value, this means is too long.
             */
            if(result.length > 1 && result.join('') == value) return `Error: ${keyName} exceeds maximum character length.`;
            /**
             * If Regex test fails, then search for the illegal character and send back an error message stating so.
             */
            if(result[0] != value) return `Error: illegal character "${value.split(result[0])[1] == "" ? value.split(result[0])[0] : value.split(result[0])[1]}" in ${keyName}.`;

            /**
             * If it passes, add it to the returned data.
             */
            returnData = {...returnData,
                [keyName]: value
            };
        }

        return returnData;
    }
}

export default RegexTester;