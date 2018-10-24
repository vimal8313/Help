<?php
/**
Template Name: Home Page
*/
get_header(); ?>
<?php while(have_posts()): the_post(); ?>
    <section id="content">
        <div class="container">
        	<div class="row">
            	<div class="col-sm-8">
                	<div class="left-part">
                    <?php
                        the_content();
                    ?>
                    </div>
                </div>
                <?php get_sidebar(); ?>
            </div>
        </div>
    </section>
<?php endwhile; ?>
<?php get_footer(); ?>