# Example: Block Styles (PHP)

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase how to add custom block styles (also known as block style variations) via PHP. For more information on this feature, read the [Block Style Variations](https://developer.wordpress.org/themes/features/block-style-variations/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a "Hand Drawn" style to the Image block. The code for this lives in a single place in the theme:

- `functions.php`: Registers the block style and uses the `inline_style` argument of `register_block_style()` to add inline CSS.
