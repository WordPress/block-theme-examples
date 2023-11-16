# Example: Locked Pattern

This is a child theme of the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) theme, which is required for this example to work.

The goal of this child theme is to showcase an example of a block pattern that utilizes template locking to only allow the user to edit block content but not edit block settings or styles. To read more about this feature, see the [Locking APIs](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/#locking-apis) section of the Curation documentation in the Block Editor Handbook.

## Understanding the Example Code

This child theme adds a custom block pattern named `Custom Event (Locked)`. The only file with code relevant to this example is:

- `parts/custom-event.php`: Registers a custom pattern.

Within that file, the outer wrapping block has its `templateLock` attribute set to `contentOnly`, which locks the pattern.
