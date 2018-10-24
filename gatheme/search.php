<?php
/**
 * The template for displaying search results pages
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
get_header(); ?>

<?php
	if(!empty($_GET['s']) && isset($_GET['s'])):
		$search_var = $_GET['s'];
		//$search_tag = $_GET['search_tag'];
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; //this code is top of the page
		$news_args = array(
			'post_type' => array('post'),
			'order'   => 'DESC',
			'paged' => $paged,
			's' => $search_var,
			//'tag' => $search_tag,
		);
		else:
			$news_args = array();
	endif;
	$query = new WP_Query( $news_args );
?>
<section id="content">
 	<div class="container">
    	<div class="row">
    		<div class="col-sm-8">
				<div class="left-part">
					<?php
					 if ( $query->have_posts() ) : ?>
						<?php if ( $query->is_home() && ! $query->is_front_page() ) : ?>
							<header>
								<h1 class="page-title screen-reader-text"><?php $query->single_post_title(); ?></h1>
							</header>
						<?php endif; ?>

						<?php
						// Start the loop.
						while ( $query->have_posts() ) : $query->the_post();?>
							<header class="page-header">
							</header>
							<?php
							$postID = get_the_ID();

							$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(100));
							$url = $src[0];
							?>
							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
								<div class="content_main">
									<header class="entry-header">
										<a href="<?php the_permalink(); ?>"><?php the_title( '<h1 class="entry-title">', '</h1>' ); ?></a>
										<div class="entry-header-date"><?php echo get_the_date(); ?></div>
									</header><!-- .entry-header -->

									<?php
									$postID = get_the_ID();
									$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(200));
									$url = $src[0];
									?> <div class="content_thumb"> </div></div>

									<div class="entry-content">
										<?php
										//the_content();
										echo wp_trim_words( get_the_content(), 50 );?>
										<a href="<?php echo post_permalink($postID) ?>" rel="bookmark">Read More</a>
									</div>
							</article><!-- #post-## -->
							<?php
						// End the loop.
						endwhile;

						// Previous/next page navigation.
						$GLOBALS['wp_query']->max_num_pages = $query->max_num_pages;
						the_posts_pagination( array(
							'prev_text'          => __( 'Previous page', 'twentysixteen' ),
							'next_text'          => __( 'Next page', 'twentysixteen' ),
							'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
						) );

					// If no content, include the "No posts found" template.
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