# Example: Template Part Area

This is an example child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase an example of registering and using a custom template part area. For more information on this feature, read the [Template Parts](https://developer.wordpress.org/themes/templates/template-parts/) documentation in the Theme Handbook.

## Understanding the Example Code

This child theme adds a custom template part area named Sidebar via `functions.php`. It then assigns the `parts/sidebar.html` template part to that area via `theme.json`.

The code in this example requires a few files to achieve the effect:

- `functions.php`: Registers the custom template part area.
- `theme.json`: Assigns the area for the sidebar template part.
- `parts/sidebar.html`: Adds the sidebar template part.

**Note:** To get this example to work withing a child theme, it required copying the entirety of the `/parts` folder from Twenty Twenty-Four and overwriting the `templateParts` property in `theme.json`. But the primary code for actually registering template part areas is in `functions.php`.
