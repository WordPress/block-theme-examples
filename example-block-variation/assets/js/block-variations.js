wp.blocks.registerBlockVariation( 'core/spacer', {
	name:       'themeslug/spacer',
	title:      wp.i18n.__( 'Theme Name: Spacer', 'example-block-variation' ),
	keywords:   [ 'space', 'spacer', 'spacing' ],
	scope:      [ 'block', 'inserter', 'transform' ],
	attributes: {
		height: '180px'
	},
	isActive: ( blockAttributes ) =>
		blockAttributes.height && '180px' === blockAttributes.height
} );
