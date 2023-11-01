<?php
/**
 * Theme functions file, which is auto-loaded by WordPress. Use this file to
 * load additional PHP files and bootstrap the theme.
 *
 * @author    Your Name <youremail@domain.tld>
 * @copyright Copyright (c) 2023, Your Name
 * @link      https://yourwebsite.tld
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

add_action( 'init', 'themeslug_register_block_styles' );

/**
 * Registers custom block styles on the `init` hook.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/functions/register_block_style/
 */
function themeslug_register_block_styles() {
	register_block_style( 'core/image', array(
		'name'         => 'hand-drawn',
		'label'        => __( 'Hand Drawn', 'example-block-style-php' ),
		'inline_style' => '.wp-block-image.is-style-hand-drawn img {
			color: inherit;
			border: 2px solid currentColor;
			overflow: hidden;
			box-shadow: 0 1px 2px 0 rgb( 0 0 0 / 0.05 );
			border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
		}'
	) );
}
