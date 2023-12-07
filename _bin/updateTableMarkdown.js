const { join } = require("path");
const fs = require('fs');

const generateExamplesTableMarkdown = require("./generateExamplesTableMarkdown.js");
const examplesJson = require("./data/examples.json");
const slug = process.argv[2];
const rootPath = process.cwd();
let readmePath;

if (slug == 'all') {
    const childThemesFolderNames = examplesJson.map(({slug}) => slug)
    childThemesFolderNames.forEach(exampleChildThemeSlug => {
        const childThemeExamplePath = join(rootPath, exampleChildThemeSlug);
        if (!fs.existsSync(childThemeExamplePath)) throw `child theme path doesn't exist: ${childThemeExamplePath}`;
        readmePath = join(childThemeExamplePath, "README.md");
        generateExamplesTableMarkdown({slug: exampleChildThemeSlug, readmePath});
    });
    generateExamplesTableMarkdown({readmePath: join(rootPath, "README.md")});
    return;
}   
else if (slug && slug !== 'all') {
    const childThemeExamplePath = join(rootPath, slug);
    if (!fs.existsSync(childThemeExamplePath)) throw `child theme path doesn't exist: ${pluginPath}`;
    readmePath = join(childThemeExamplePath, "README.md");
    console.log({slug, readmePath})
    generateExamplesTableMarkdown({slug, readmePath});
    return;
}

generateExamplesTableMarkdown({slug, readmePath});
