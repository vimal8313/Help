<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="G&A Institute's To The Point">
    <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<?php endif; ?>
	<?php wp_head(); ?>
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
</head>
<body>
	<div id="page">
    	<header class="header">
        	<div class="header-top">
                <div class="container">
                    <div class="logo  pull-left"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('main_logo', 'option'); ?>" alt="" ></a></div>
                    <div class="dart-target pull-right"><img src="<?php the_field('right_logo', 'option'); ?>" alt="" ></div>
                </div>
            </div>
            <div class="header-middle">
            	<div class="container">
                	<p><?php the_field('header_description', 'option'); ?></p>
                </div>
            </div>
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div id="navbar" class="navbar-collapse collapse">
                           <?php
                                wp_nav_menu( array(
                                    'theme_location' => 'primary',
                                    'menu_class'     => 'nav navbar-nav',
                                    'container'  =>'ul',
                                    'walker' => new My_Walker_Nav_Menu()
                                 ) );
                            ?>
                        </div>
                    </div>
                </div>
        	</nav>
        </header>