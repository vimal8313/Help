<?php
/**
Template Name: Article List Page
*/
get_header(); ?>
<?php
	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; //this code is top of the page
	$news_args = array(
	  'post_type' => 'post',
	  'order'   => 'DESC',
	  'paged' => $paged,
	  'posts_per_page' => 5
	);
	$query = new WP_Query( $news_args );
?>
<section id="content">
 	<div class="container">
    	<div class="row">
    		<div class="col-sm-8">
				<div class="left-part">
					<?php
					 if ( $query->have_posts() ) : ?>
						<?php
						while ( $query->have_posts() ) : $query->the_post(); ?>
							<header class="page-header">
							</header>
						<?php get_template_part( 'template-parts/content', get_post_format() ); ?>
						<?php endwhile;
						$GLOBALS['wp_query']->max_num_pages = $query->max_num_pages;
						the_posts_pagination( array(
							'prev_text'          => __( 'Previous', 'twentysixteen' ),
							'next_text'          => __( 'Next', 'twentysixteen' ),
							'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( ' ', 'twentysixteen' ) . ' </span>',
							'screen_reader_text' => __( 'Briefs navigation' ),
						) );
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
