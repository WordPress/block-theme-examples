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

add_action( 'after_setup_theme', 'themeslug_editor_styles' );

/**
 * Adds the `style.css` file as an editor stylesheet.
 *
 * @since 1.0.0
 */
function themeslug_editor_styles() {
	add_editor_style( get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_styles' );

/**
 * Enqueues the `style.css` file for the front end.
 *
 * @since 1.0.0
 */
function themeslug_enqueue_styles() {
	wp_enqueue_style(
		'themeslug',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);
}

add_action( 'enqueue_block_editor_assets', 'themeslug_enqueue_block_variations' );

/**
 * Enqueues the `assets/js/block-styles.js` file, which is used to create
 * custom block styles.
 *
 * @since 1.0.0
 */
function themeslug_enqueue_block_variations() {
	wp_enqueue_script(
		'themeslug-block-styles',
		get_theme_file_uri( 'assets/js/block-styles.js' ),
		array(
			'wp-blocks',
			'wp-i18n'
		),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
