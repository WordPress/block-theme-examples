# Example: Build Process

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                         | Short description     | Tags                                                                                                                                                                                                                                                                 | Download .zip                                                                                                      | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [📁](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-build-process) | example-build-process | <small><code><a href="https://github.com/wptrainingteam/block-theme-examples/wiki/Tags#block-theme">BLOCK THEME</a></code></small>, <small><code><a href="https://github.com/wptrainingteam/block-theme-examples/wiki/Tags#javascript">JAVASCRIPT</a></code></small> | [📦](https://raw.githubusercontent.com/wptrainingteam/block-theme-examples/master/_zips/example-build-process.zip) | [![](https://raw.githubusercontent.com/wptrainingteam/block-theme-examples/master/_assets/icon-wp.svg)](https://playground.wordpress.net/#{%22$schema%22:%22https://playground.wordpress.net/blueprint-schema.json%22,%22landingPage%22:%22/wp-admin/themes.php%22,%22preferredVersions%22:{%22php%22:%228.0%22,%22wp%22:%22latest%22},%22steps%22:[{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22wordpress.org/themes%22,%22slug%22:%22twentytwentyfour%22}},{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wptrainingteam/block-theme-examples/master/_zips/example-build-process.zip%22},%22options%22:{%22activate%22:true}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}) |
<!-- @TABLE EXAMPLES END -->

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to show how to integrate the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package with a theme to provide a core-supported webpack build process. For a deeper dive into how this works, read the [Beyond block styles, part 1: using the WordPress scripts package with themes](https://developer.wordpress.org/news/2023/07/beyond-block-styles-part-1-using-the-wordpress-scripts-package-with-themes/) tutorial on the WordPress Developer Blog.

## Understanding the Example Code

This child theme does not add any custom CSS or JavaScript, but it does provide a basic setup of files for the editor and front end with empty CSS and JS files. The goal is to give you the foundation necessary to get up and running quickly.

To test this example, you must have [Node.js and npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your local machine.

The code in this example uses several folders and files that you will need to review:

- `functions.php`: Enqueues the JS and CSS files for the editor and front end.
- `package.json`: Sets up the command line scripts and defines development dependencies.
- `public`: The build folder where JS and CSS files are placed after being built/processed.
- `resources`
	- `js`
		- `editor.js`: File for adding editor JS.
	- `scss`
		- `editor.scss`: File for adding editor UI CSS.
		- `screen.scss`: File for adding front-end CSS.

There are many `@wordpress/scripts` commands that you can add to `package.json`, but this project uses the primary two:

- `npm run start`: Watch and build process for development.
- `npm run build`: Builds files for production.

