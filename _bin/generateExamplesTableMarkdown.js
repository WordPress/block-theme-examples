const { join } = require("path");
const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("./utils/log");

const rootPath = process.cwd();
const readmePathRoot = join(rootPath, "README.md");
const examplesJsonPath = join(rootPath, "_bin/data/examples.json");
const tagsJsonPath = join(rootPath, "_bin/data/tags.json");

const {
  URL_EXAMPLE_THEME_ZIP,
  PLAYGROUND_URL_WITH_THEMES,
  SLUG_EXAMPLE_MARKER,
  URL_REPO,
  REPO_ORIGIN,
  URL_PLAYGROUND_BLUEPRINT,
  URL_WIKI,
  WIKI_PAGE_TAGS,
} = require("./constants");  

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

module.exports = ({ slug: slugReadme, readmePath = readmePathRoot }) => {
  
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));
  const markdownContent = fs.readFileSync(readmePath, "utf8");
    
  const regex = new RegExp(
    `${startMarker}\(\[\.\\n\\s\\S\]\*\)${endMarker}`,
    "gm"
  );

  const processedTags = tagsJson.reduce(
    (acc, { slug, name }) => ({ ...acc, [slug]: name }),
    {}
  );

  let processedExamplesJson;
  if (slugReadme) {
    processedExamplesJson = examplesJson.filter(({ slug }) => slug === slugReadme);
  } 
  else {
    processedExamplesJson = examplesJson//.sort(sortFeaturedFirst);
  }  

  const markdownTableRows = processedExamplesJson.map(({ slug, description, tags }) => {

    let playgroundUrl = PLAYGROUND_URL_WITH_THEMES.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlZip = URL_EXAMPLE_THEME_ZIP.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlAssetIconWp = `https://raw.githubusercontent.com/${REPO_ORIGIN}/master/_assets/icon-wp.svg`;

    const pathBlueprint = `${rootPath}/${slug}/_playground/blueprint.json`;

    if (fs.existsSync(pathBlueprint)) {
      let playgroundUrlBlueprint = URL_PLAYGROUND_BLUEPRINT.replaceAll(SLUG_EXAMPLE_MARKER,slug);
      playgroundUrl = `https://playground.wordpress.net/?blueprint-url=${playgroundUrlBlueprint}`;
    }


    // console.log ({[slug]: playgroundUrl}); 
    return [
      `[📁](${URL_REPO}/${slug})`,
      description,
      tags
        .map((tagSlug) => `<small><code><a href="${URL_WIKI}/${WIKI_PAGE_TAGS}#${tagSlug}">${processedTags[tagSlug]}</a></code></small>`)
        .join(", "),
      `[📦](${urlZip})`,
      `[![](${urlAssetIconWp})](${playgroundUrl})`,
    ];
  });
  const markdownTable = toMarkdownTable([
    ["Folder", `Short description`, "Tags", "Download .zip", "Live Demo"],
    ...markdownTableRows,
  ]);

  const markdownContentWithUpdatedTable = markdownContent.replace(
    regex,
    `${startMarker}\n${markdownTable}\n${endMarker}`
  );

  try {
    fs.writeFileSync(readmePath, markdownContentWithUpdatedTable);
    info(`${readmePath.split('block-theme-examples')[1]} was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }

};
