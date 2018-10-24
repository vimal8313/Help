<?php
/**
 * The template for the sidebar containing the main widget area
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<?php
// $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; //this code is top of the page
$news_args = array(
  'post_type' => 'post',
  'order'   => 'DESC',
  //'paged' => $paged,
  'posts_per_page' => 5
);
$query = new WP_Query( $news_args );
echo '<div class="col-sm-4">';
	global $user_ID; 
	if( $user_ID ){ 
		if( current_user_can('level_0') ) {			 
			global $current_user;
			echo '<div class="right_block admin-text" style="padding:5px;">Welcome:&nbsp;<strong>'.($current_user->user_login).'</strong></div>';
		} 
	}

    //Search Form
    echo '<div class="search">';
        echo '<form method="get" id="" class="" action="'.site_url('/').'">';
            echo '<div class="input-group stylish-input-group">';
                echo '<input type="text" class="form-control" value="'.$_GET['s'].'" name="s" id="searchfield1" placeholder="Search here"/>';
                echo '<span class="input-group-addon"><button type="submit"><span class="glyphicon glyphicon-search"></span></button></span>';
            echo '</div>';
        echo '</form>';
    echo '</div>';
    if(!is_user_logged_in()):
        echo do_shortcode('[cflrf_custom_login_form]'); //Member login form
        /*echo '<div class="forgot_username_link">';
        echo '<a href="'.get_field('forgot_username_page_link', 'option').'">Forgot your user name? Click here</a>';
        echo '</div>';
        echo '<div class="forgot_password_link">';
             echo '<a href="'.get_field('forgot_password_page_link', 'option').'">Forgot your password? Click here</a>';
        echo '</div>';*/
    endif;
    // Latest Post
    echo '<div class="right_block">';?>
        <h3><?php the_field('article_title', 'option'); ?></h3>
        <?php
        echo '<div class="latest-posts">';
            echo '<ul>';
            if ( $query->have_posts() ) :
                // Start the loop.
                while ( $query->have_posts() ) : $query->the_post();
                    $postID = get_the_ID();
                    $src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(100));
                    $url = $src[0];
                    echo '<li>';
                        echo '<div class="logo">';
                            if($url != '')
                                echo '<img src="'.$url.'" alt="No Image" />';
                            else
                                echo '<img src="'.get_template_directory_uri().'/images/Orange-Dart-Target.jpg" alt="No Image Set" />';
                        echo '</div>';
                        echo '<h4>';
                            echo '<a href="'.get_post_permalink($postID).'">'.wp_trim_words(get_the_title(),9).'</a>';
                        echo '</h4>';
                        echo '<span class="date">'.get_the_date().'</span>';
                    echo '</li>';
                endwhile;
                wp_reset_postdata();
            else :
                get_template_part( 'template-parts/content', 'none' );
            endif;
            echo '</ul>';
        echo '</div>';?>
        <div class="more_article"><?php the_field('more_briefs', 'option'); ?></div>
    <?php echo '</div>';

    // Tag Block
    echo '<div class="right_block">'; ?>
        <h3><?php the_field('tags_title', 'option'); ?></h3>
        <?php echo '<div class="tags">';
            $args = array(
                'smallest'                  => 10,
                'largest'                   => 22,
                'unit'                      => 'pt',
                'number'                    => 50,
                'format'                    => 'flat',
                'separator'                 => "\n",
                'orderby'                   => 'name',
                'order'                     => 'ASC',
                'exclude'                   => null,
                'include'                   => null,
                'topic_count_text_callback' => default_topic_count_text,
                'link'                      => 'view',
                'taxonomy'                  => 'post_tag',
                'echo'                      => true,
                'child_of'                  => null, // see Note!
            );?>
            <ul><li> <?php wp_tag_cloud( $args ); ?> </li></ul>
        <? echo '</div>';
    echo '</div>';
    // Calendar Block
    echo '<div class="right_block">'; ?>
    <h3><?php the_field('calendar_title', 'option'); ?></h3>
        <?php echo '<div class="calendar" id="">';
            dynamic_sidebar();
        echo '</div>';
    echo '</div>';
echo '</div>';
?>