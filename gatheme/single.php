<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
if(!empty($_GET['type']) && $_GET['type']=='pdf'){
	require_once('mpdf/mpdf.php');
	ob_start();  // start output buffering
	include 'template-parts/content-pdf.php';
	$headerimage1= get_template_directory_uri().'/images/G&As_To-The-Point_Masthead.png';
	$headerimage2= get_template_directory_uri().'/images/G&As_To-The-Point_SubpageMast_PDF.png';
	$footerimage= get_template_directory_uri().'/images/FooterBox.png';
	$footertext = get_field('footer_text', 'option');
	$header = '<img class="pdfheader-logo" src="'.$headerimage2.'" alt="No Image" />';
	$footer = '<div class="footer-content"><div class="footer-wrapper"><div class="footer-block"><img src="'.$footerimage.'" alt="No Image" /><p>'.$footertext.'</p></div></div><p>'.$_GET['title'].' | Page {PAGENO}</p></div>';

	$content = '
		<htmlpageheader name="firstpage" style="display:none">
	        <img class="pdfheader-logo" src="'.$headerimage1.'" alt="No Image" />
	    </htmlpageheader>

	    <htmlpageheader name="otherpages" style="display:none">
	        <img class="pdfheader-logo" src="'.$headerimage2.'" alt="No Image" />
	    </htmlpageheader>

		<htmlpagefooter name="firstpageft" style="display:none">
	    </htmlpagefooter>

	    <htmlpagefooter name="otherpagesft" style="display:none">
	        <div class="footer-content"><div class="footer-wrapper"><div class="footer-block"><a href="mailto:info@ga-institute.com" ><img src="'.$footerimage.'" alt="No Image" /></a></div></div><p>'.get_the_date('F Y') .' | '.get_field('pdf_file_name').' | Page {PAGENO}</p></div>
	    </htmlpagefooter>

	'.ob_get_clean();
	// $content = ob_get_clean();
    $mpdf = new \mPDF('', '', '', '', 10, 5, 40, 45, 5, 5, '');
	// $mpdf->SetHTMLHeader($header);
	// $mpdf->SetHTMLFooter($footer);
    $mpdf->WriteHTML($content);
    $mpdf->Output('G&ATTP-'.get_field('pdf_file_name').'.pdf', 'D');
}

get_header(); ?>
	<?php
		// Start the loop.
		while ( have_posts() ) : the_post();?>
			<section id="content">
			    <div class="container">
			    	<div class="row">
			        	<div class="col-sm-8">
			        		<div class="left-part">
								<a href="?type=pdf&title=<?php single_post_title(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/pdf-icon.png" style="width: 25px;"/></a>
								<?php
								// Include the single post content template.
								get_template_part( 'template-parts/content', 'single' );
								?>
							</div>
		            	</div>
			          <?php get_sidebar(); ?>
			        </div>
			    </div>
			</section>
		<?php endwhile; ?>
	<?php get_sidebar( 'content-bottom' ); ?>
<?php get_footer(); ?>