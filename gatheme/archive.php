<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each one. For example, tag.php (Tag archives),
 * category.php (Category archives), author.php (Author archives), etc.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
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
					<?php
					 if ( have_posts() ) : ?>
						<?php if (is_home() && ! is_front_page() ) : ?>
							<header>
								<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
							</header>
						<?php endif;
						while ( have_posts() ) : the_post(); ?>
							<header class="page-header">
								<?php
									echo str_replace('Day: ','',get_the_archive_title());
									the_archive_description( '<div class="taxonomy-description">', '</div>' );
								?>
							</header>
						<?php get_template_part( 'template-parts/content', get_post_format() ); ?>
						<?php endwhile;
					else :
						get_template_part( 'template-parts/content', 'none' );
					endif;
					?>
				</div>
            </div>
			<?php get_sidebar(); ?>
		</div>
	</div>
</section>
<?php get_footer(); ?>
