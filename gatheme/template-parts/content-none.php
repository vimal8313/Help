<?php
/**
 * The template part for displaying a message that posts cannot be found
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>


<?php //get_header(); ?>
	<header class="page-header">
		<h1 class="page-title"><?php the_field('nothing_found', 'option'); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php printf( the_field('nothing_found_text1', 'option'), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php elseif ( is_search() ) : ?>

			<p><?php the_field('nothing_found_text2', 'option'); ?></p>
			<?php //get_search_form(); ?>

		<?php else : ?>

			<p><?php the_field('nothing_found_text3', 'option'); ?></p>
			<?php //get_search_form(); ?>

		<?php endif; ?>
	</div><!-- .page-content -->
<?php get_sidebar( 'content-bottom' ); ?>
<?php //get_footer(); ?>
