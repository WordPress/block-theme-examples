const { join } = require("path");
const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("./utils/log");

const rootPath = process.cwd();
const readmePathRoot = join(rootPath, "README.md");
const examplesJsonPath = join(rootPath, "_bin/data/examples.json");

const {
  URL_EXAMPLE_THEME_ZIP,
  PLAYGROUND_URL_WITH_THEMES,
  SLUG_EXAMPLE_MARKER,
  URL_REPO,
  REPO_ORIGIN
} = require("./constants");  

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

module.exports = ({ slug: slugReadme, readmePath = readmePathRoot }) => {
  
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const markdownContent = fs.readFileSync(readmePath, "utf8");
    
  const regex = new RegExp(
    `${startMarker}\(\[\.\\n\\s\\S\]\*\)${endMarker}`,
    "gm"
  );
  // const markdownContentTable = markdownContent
  //   .match(regex)[0]
  //   .replace(startMarker, "")
  //   .replace(endMarker, "");


  const markdownTableRows = examplesJson.map(({ slug, description }) => {

    let playgroundUrl = PLAYGROUND_URL_WITH_THEMES.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlZip = URL_EXAMPLE_THEME_ZIP.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlAssetIconWp = `https://raw.githubusercontent.com/${REPO_ORIGIN}/master/_assets/icon-wp.svg`;

    return [
      `[📁](${URL_REPO}/${slug})`,
      description,
      `[📦](${urlZip})`,
      `[![](${urlAssetIconWp})](${playgroundUrl})`,
    ];
  });
  const markdownTable = toMarkdownTable([
    ["Folder", `Short description`, "Download .zip", "Live Demo"],
    ...markdownTableRows,
  ]);

  const markdownContentWithUpdatedTable = markdownContent.replace(
    regex,
    `${startMarker}\n${markdownTable}\n${endMarker}`
  );

  try {
    fs.writeFileSync(readmePath, markdownContentWithUpdatedTable);
    info(`README.md was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }
};
