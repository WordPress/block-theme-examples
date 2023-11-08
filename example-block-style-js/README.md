# Example: Block Styles (JavaScript)

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase how to add custom block styles (also known as block style variations) via JavaScript. For more information on this feature, read the [Block Style Variations](https://developer.wordpress.org/themes/features/block-style-variations/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a "Hand Drawn" style to the Image block. The code for this lives in several different places in the theme, so you will need to look at each of these files to see how they work together.

- `functions.php`: Enqueues the JavaScript and stylesheet files needed.
- `style.css`: Adds the CSS for the block style.
- `assets/js/block-styles.js`: Adds the JavaScript for registering the block style.
