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

add_action( 'init', 'themeslug_enqueue_block_stylesheets' );

/**
 * Filters the core template part areas to add custom areas.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/functions/wp_enqueue_block_style/
 */

function themeslug_enqueue_block_stylesheets() {
	wp_enqueue_block_style( 'core/image', array(
		'handle' => 'themeslug-block-image',
		'src'    => get_theme_file_uri( "assets/css/blocks/core-image.css" ),
		'path'   => get_theme_file_path( "assets/css/blocks/core-image.css" )
	) );
}

