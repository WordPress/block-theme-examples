# Example: Build Process

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

