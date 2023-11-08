# Example: Block Variation

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase how to add a custom block variation. For more information on this feature, read the [Block Variations](https://developer.wordpress.org/themes/features/block-variations/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a "Theme Name: Spacer" variation to the core Spacer block. The variation changes the `height` attribute to a custom value.

The code in this example requires two files to achieve the effect:

- `functions.php`: Enqueues the JavaScript needed for the editor.
- `assets/js/block-variations.js`: Adds the JavaScript to register the variation.
