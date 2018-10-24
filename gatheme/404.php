<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

<section id="content">
 	<div class="container">
    	<div class="row">
    		<div class="col-sm-8">
				<div class="left-part">
					<header class="page-header">
						<h1 class="page-title">
						<?php the_field('404_header', 'option'); ?></header><!-- .page-header -->
					<div class="page-content">
						<p><?php the_field('404_text', 'option'); ?></p>
						<?php //get_search_form(); ?>
					</div><!-- .page-content -->
				</div>
            </div>
			<?php get_sidebar(); ?>
		</div>
	</div>
</section>
<?php get_footer(); ?>