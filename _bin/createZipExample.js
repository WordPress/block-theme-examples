const [,,exampleFolder] = process.argv

const examplesBlockTheme = require("./data/examples.json");
const createZip = require("./utils/createZip");

const isValidExampleFolder = ({ slug }) => exampleFolder === slug

if ( !examplesBlockTheme.some( isValidExampleFolder ) ) {
    throw new Error('Folder name is not valid');
}

createZip( exampleFolder );
