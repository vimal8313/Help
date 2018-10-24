<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php
		$postID = get_the_ID();
		$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(200));
		$url = $src[0];
		?>
	<div class="content_main">
		<header class="entry-header">
			<h1 class="entry-title"><a href="<?php echo post_permalink($postID) ?>" rel="bookmark"><?php the_title(); ?></a></h1>
			<div class="entry-header-date"><?php echo get_the_date(); ?></div>
		</header><!-- .entry-header -->

	</div>
	<div class="entry-content">
		<?php
			echo wp_trim_words( get_the_content(), 50 );?>
			<a href="<?php echo post_permalink($postID) ?>" rel="bookmark">Read More</a>
			<!-- the_content(); -->
	</div><!-- .entry-content -->
</article><!-- #post-## -->
