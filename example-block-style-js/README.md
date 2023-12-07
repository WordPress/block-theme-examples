# Example: Block Styles (JavaScript)

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                          | Short description      | Download .zip                                                                                                       | Live Demo                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-block-style-js) | example-block-style-js | [📦](https://raw.githubusercontent.com/wptrainingteam/block-theme-examples/master/_zips/example-block-style-js.zip) | [![](https://raw.githubusercontent.com/wptrainingteam/block-theme-examples/master/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/example-block-style-js/_playground/blueprint.json) |
<!-- @TABLE EXAMPLES END -->

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase how to add custom block styles (also known as block style variations) via JavaScript. For more information on this feature, read the [Block Style Variations](https://developer.wordpress.org/themes/features/block-style-variations/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a "Hand Drawn" style to the Image block. The code for this lives in several different places in the theme, so you will need to look at each of these files to see how they work together.

- `functions.php`: Enqueues the JavaScript and stylesheet files needed.
- `style.css`: Adds the CSS for the block style.
- `assets/js/block-styles.js`: Adds the JavaScript for registering the block style.
