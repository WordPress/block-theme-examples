# Example: Block Stylesheet

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase how to add custom block stylesheets to a theme. For more information on this feature, read the [Block Stylesheets](https://developer.wordpress.org/themes/features/block-stylesheets/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a custom stylesheet for the Image block that is loaded in the editor but only gets loaded on the front end when the block is in use. The design is a simple gradient _faux_ border around the `<img>` element within the Image block.

The code in this example requires two files to achieve the effect:

- `functions.php`: Registers the custom block stylesheet.
- `assets/css/blocks/core-image.css`: Adds the custom CSS for the Image block.
