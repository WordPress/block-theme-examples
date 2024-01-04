<?php
/**
 * Title: Event Announcement
 * Slug: themeslug/custom-event
 * Categories: featured, text
 * Block Types: core/post-content
 * Post Types: post
 * Viewport Width: 1376
 */
?>
<!-- wp:cover {"overlayColor":"contrast","contentPosition":"center center","align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-base-color has-text-color has-link-color">

	<span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-100 has-background-dim"></span>
	<div class="wp-block-cover__inner-container">

		<!-- wp:columns {"verticalAlignment":"center","align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|60","left":"var:preset|spacing|60"}}}} -->
		<div class="wp-block-columns alignwide are-vertically-aligned-center">

			<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
			<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">

				<!-- wp:heading {"className":"is-style-default","fontSize":"xx-large"} -->
				<h2 class="wp-block-heading is-style-default has-xx-large-font-size"><?php esc_html_e( 'Event Title', 'themeslug' ); ?></h2>
				<!-- /wp:heading -->

				<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph -->
					<p><?php esc_html_e( '🗓️ Date...', 'themeslug' ); ?></p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph -->
					<p><?php esc_html_e( '📍 Location...', 'themeslug' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

			</div>
			<!-- /wp:column -->

			<!-- wp:column {"verticalAlignment":"center","width":"33.33%","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20","left":"var:preset|spacing|20","right":"var:preset|spacing|20"}}},"backgroundColor":"base-2","textColor":"contrast"} -->
			<div class="wp-block-column is-vertically-aligned-center has-contrast-color has-base-2-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20);flex-basis:33.33%">

				<!-- wp:heading {"level":3} -->
				<h3 class="wp-block-heading"><?php esc_html_e( 'Details', 'themeslug' ); ?></h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph -->
				<p><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum pharetra elementum. Aenean magna metus, blandit et tempus interdum, rhoncus id enim.', 'themeslug' ); ?></p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons">
					<!-- wp:button {"width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100">
						<a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'RSVP Now →', 'themeslug' ); ?></a>
					</div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

		</div>
		<!-- /wp:columns -->

	</div>
</div>
<!-- /wp:cover -->
