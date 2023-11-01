const { registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;

registerBlockVariation( 'core/spacer', {
	name:       'themeslug/spacer',
	title:      __( 'Theme Name: Spacer', 'example-block-variation' ),
	keywords:   [ 'space', 'spacer', 'spacing' ],
	scope:      [ 'block', 'inserter', 'transform' ],
	attributes: {
		height: '180px'
	},
	isActive: ( blockAttributes ) =>
		blockAttributes.height && '180px' === blockAttributes.height
} );
