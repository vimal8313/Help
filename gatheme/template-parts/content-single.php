<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="content_main">
			<header class="entry-header">
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			<div class="entry-header-date"><?php the_date(); ?></div>
			</header><!-- .entry-header -->
		<?php
			$postID = get_the_ID();
			$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(200));
			$url = $src[0];
		?>
		<div class="content_thumb">
		</div>
	</div>

	<div class="entry-content">
		<div class="single-content">
		<?php
			the_content();
		?>
		</div>
	</div><!-- .entry-content -->

</article><!-- #post-## -->
