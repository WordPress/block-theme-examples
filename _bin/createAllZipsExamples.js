const examplesBlockTheme = require("./data/examples.json");
const createZip = require("./utils/createZip");

examplesBlockTheme
    .map(({ slug }) => slug)
    .forEach(createZip)
