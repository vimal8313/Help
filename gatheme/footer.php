<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

<footer id="footer">
	<div class="footer-row">
    	<div class="container">
        	<div class="row">
            	<div class="col-sm-4 col-md-5">
                	<?php the_field('address', 'option'); ?>
                </div>
                <div class="col-sm-4 col-md-3">
                	<?php the_field('contact', 'option'); ?>
                </div>
                <div class="col-sm-4 col-md-4">
                	<?php the_field('copyright', 'option'); ?>
                </div>
        	</div>
        </div>
    </div>
    <div class="footer-bottom">
    	<div class="container">
        	<p><?php the_field('footer_email', 'option'); ?></p>
        </div>
    </div>
</footer>
</div>
    <?php wp_footer(); ?>
    </body>
</html>