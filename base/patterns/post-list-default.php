<?php
/**
 * Title: Post List: Default
 * Slug: themeslug/post-list-default
 * Description: Displays the queried posts in a list with the title, date, and excerpt.
 * Categories: theme, query
 * Keywords: query, posts
 * Block Types: core/query
 */
?>
<!-- wp:query {"queryId":0,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":null,"parents":[]},"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-query alignfull">

	<!-- wp:group {"align":"full","layout":{"type":"default"}} -->
	<div class="wp-block-group alignfull">

		<!-- wp:post-template {"align":"full","className":"is-style-no-gap"} -->

			<!-- wp:group {"tagName":"article","style":{"spacing":{"blockGap":"var:preset|spacing|40","padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80","right":"var:preset|spacing|80","left":"var:preset|spacing|80"}}},"layout":{"type":"constrained"}} -->
			<article class="wp-block-group" style="padding-top:var(--wp--preset--spacing--80);padding-right:var(--wp--preset--spacing--80);padding-bottom:var(--wp--preset--spacing--80);padding-left:var(--wp--preset--spacing--80)">

				<!-- wp:group {"tagName":"header","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
				<header class="wp-block-group">

					<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"fontSize":"lg"} -->
					<div class="wp-block-group has-lg-font-size">
						<!-- wp:post-date /-->
					</div>
					<!-- /wp:group -->

					<!-- wp:post-title {"isLink":true} /-->
				</header>
				<!-- /wp:group -->

				<!-- wp:post-excerpt {"moreText":"Continue reading →","showMoreOnNewLine":false} /-->

			</article>
			<!-- /wp:group -->

		<!-- /wp:post-template -->

	</div>
	<!-- /wp:group -->

	<!-- wp:query-pagination {"paginationArrow":"arrow","align":"center","layout":{"type":"flex","justifyContent":"space-between"}} -->
		<!-- wp:query-pagination-previous /-->
		<!-- wp:query-pagination-numbers /-->
		<!-- wp:query-pagination-next /-->
	<!-- /wp:query-pagination -->

</div>
<!-- /wp:query -->
