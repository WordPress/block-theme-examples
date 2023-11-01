const { registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;

// The CSS for this block style is located in the `style.css` file.
registerBlockStyle( 'core/image', {
	name: 'hand-drawn',
	label: __( 'Hand Drawn', 'example-block-style-js' )
} )
