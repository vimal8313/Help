<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

<?php while(have_posts()): the_post(); ?>
    <section id="content">
        <div class="container">
        	<div class="row">
            	<div class="col-sm-8">
                	<div class="left-part">
                    <?php
                        get_template_part( 'template-parts/content', 'page' );
                    ?>
                    </div>
                </div>
                <?php get_sidebar(); ?>
            </div>
        </div>
    </section>
<?php endwhile; ?>
<?php get_footer(); ?>
