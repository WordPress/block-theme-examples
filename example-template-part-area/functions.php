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

add_filter( 'default_wp_template_part_areas', 'themeslug_template_part_areas' );

/**
 * Filters the core template part areas to add custom areas.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/hooks/default_wp_template_part_areas/
 */
function themeslug_template_part_areas( $default_area_definitions ) {

	$default_area_definitions[] = array(
		'area'        => 'comments',
		'area_tag'    => 'section',
		'label'       => __( 'Comments', 'example-template-part-area' ),
		'description' => __( 'The Comments template defines a page area that typically contains the post comments list and form.', 'example-template-part-area' ),
		// Core only supports four icons at the moment, so this
		// one doesn't actually appear. But the value must be
		// defined to avoid an error.
		// @link https://github.com/WordPress/gutenberg/issues/36814
		'icon'        => 'comments'
	);

	return $default_area_definitions;
}
