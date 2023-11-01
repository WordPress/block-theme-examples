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

add_action( 'enqueue_block_editor_assets', 'themeslug_enqueue_block_variations' );

/**
 * Enqueues the `assets/js/block-variations.js` file, which is used to create
 * custom block variations.
 *
 * @since 1.0.0
 */
function themeslug_enqueue_block_variations() {
	wp_enqueue_script(
		'themeslug-block-variations',
		get_theme_file_uri( 'assets/js/block-variations.js' ),
		array(
			'wp-blocks',
			'wp-dom-ready',
			'wp-i18n'
		),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
