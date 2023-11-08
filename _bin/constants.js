const REPO_ORIGIN = "wordpress-juanmaguitar/block-theme-examples";
const SLUG_EXAMPLE_MARKER = "<%SLUG_EXAMPLE_MARKER%>";
const URL_EXAMPLE_BASE = `https://raw.githubusercontent.com/${REPO_ORIGIN}/master/zips/base.zip`;
const URL_EXAMPLE_THEME_ZIP = `https://raw.githubusercontent.com/${REPO_ORIGIN}/master/_zips/${SLUG_EXAMPLE_MARKER}.zip`;
const URL_REPO = `https://github.com/${REPO_ORIGIN}/tree/master`
const PLAYGROUND_URL_WITH_THEMES = `https://playground.wordpress.net/#{%22$schema%22:%22https://playground.wordpress.net/blueprint-schema.json%22,%22landingPage%22:%22/wp-admin/themes.php%22,%22preferredVersions%22:{%22php%22:%228.0%22,%22wp%22:%226.4-RC4%22},%22steps%22:[{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22wordpress.org/themes%22,%22slug%22:%22twentytwentyfour%22}},{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22url%22,%22url%22:%22${URL_EXAMPLE_THEME_ZIP}%22},%22options%22:{%22activate%22:true}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}`

module.exports = {
    REPO_ORIGIN,
    URL_REPO,
    URL_EXAMPLE_BASE,
    URL_EXAMPLE_THEME_ZIP,
    PLAYGROUND_URL_WITH_THEMES,
    SLUG_EXAMPLE_MARKER
}