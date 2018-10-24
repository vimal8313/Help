<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<?php

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; //this code is top of the page
$news_args = array(
  'post_type' => 'post',
  'order'   => 'DESC',
  'paged' => $paged
);
$query = new WP_Query( $news_args );
?>

<style type="text/css">

/*.left_pdf address{font-size: 15px;color: #000;line-height: 20px;font-family: calibri;}*/
/*.pdf-content h1,h2{color: #239ec4;font-size: 22px;line-height: 28px; font-family: calibri;}*/
.left_pdf {float: left;width: 35%; margin-bottom: 40px; padding-top: 10px; padding-right: 15px; /*background-color: #daeef3;*/display: inline-block;}
/*.left_pdf p em{font-weight: bold;font-family: calibri;}
.left_pdf p a{}
.left_pdf ol{padding-left: 22px;border-bottom: 1px solid #215868;padding-bottom: 15px;margin-bottom: 0; }
.left_pdf ol li{padding-left: 10px;color: #000;line-height: 20px;margin-bottom: 10px;font-family: calibri;font-size: 10pt;}
.left_pdf ol li.active{font-weight: bold;font-family: calibri;font-size: 10pt;}
.left_pdf address a{}*/
/*.right_pdf .content_main{margin-bottom: 20px;}
.right_pdf{margin-left: 2%;float: left;width: 60%;}*/
/*.footer-wrapper{text-align: right;}*/
/*.footer-block{width: 30%;margin-left: 70%; padding: 10px;padding-bottom: 5px; font-size:12px;font-family: calibri;}*/
/*.footer-block img{width: 150px;}*/
.alignright{float: right;margin-left: 10px;}
.alignleft{float: left;margin-right: 10px;}
.pdfheader-logo{width: 100%;}
.pdf-content p{/*margin-left: 15px;*/ font-size: 11pt;font-family: calibri; word-wrap: break-word; }
.pdf-content .content_main{margin-left: 15px; padding-top: 15px;}
.pdf-content h1{font-size: 14pt; font-family: calibri;}
.pdf-content h5{font-size: 12pt; font-family: calibri;}
.footer-content p{font-size: 8pt; font-family: calibri;}
.pdf-content li{font-size: 10pt; font-family: calibri;}
/*.footer-wrapper p{font-size: 10pt;}*/
.pdf-content ul{float: right;}
.article_date{font-weight: bold; padding-bottom: 5px; padding-left: 10px; font-family: calibri;}

@page {
    header: html_otherpages;
    footer: html_otherpagesft;
}

@page :first {
    header: html_firstpage;
    footer: html_firstpageft;
    margin-bottom: 10px;
}

</style>
<div class="pdf-content">
    <div class="left_pdf">
        <div class="article_date"><?php echo get_the_date('F Y');?></div>
    	<a href="mailto:info@ga-institute.com" ><img src="<?php echo get_template_directory_uri(); ?>/images/G&As_TTP_1stPageLeftSideBar.png" /></a>
    	<?php if ( $query->have_posts() ) :
    	    wp_reset_postdata();
        else :
            get_template_part( 'template-parts/content', 'none' );
        endif;?>
    </div>

    <?php if ( $query->have_posts() ) : ?>
	<div class="content_main">
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header><!-- .entry-header -->
		<div class="content_thumb">
		</div>
	</div>
	<!-- <div class="entry-content"> -->
	<?php
		the_content();
	?>
     <?php else :
        get_template_part( 'template-parts/content', 'none' );
    endif; ?>
    <!-- </div> -->
</div>