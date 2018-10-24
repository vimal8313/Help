<?php
/**
Template Name: Tags Page
*/
get_header(); ?>
<?php while(have_posts()): the_post(); ?>
    <section id="content">
        <div class="container">
        	<div class="row">
            	<div class="col-sm-8">
                	<div class="left-part">
                    <?php the_field('tag_cloud_text', 'option'); ?></br>
                    <?php
                         // echo '<ul>';
                            // $tags_array = get_tags();
                            // $count = count($tags_array);
                            // foreach ($tags_array as $i => $tag) {
                            //   $tag_link = get_tag_link( $tag->term_id );
                            //   if(($i+1) != $count){
                            //     $ab = ', ';
                            //   }
                            //   else{
                            //     $ab = '';
                            //   }
                            //   echo '<a href="'.$tag_link.'">'.$tag->name.'</a>'.$ab;
                            // }
                        // echo '</ul>';
                      $args = array(
                          'smallest'                  => 10,
                          'largest'                   => 22,
                          'unit'                      => 'pt',
                          'number'                    => 0,
                          'format'                    => 'flat',
                          'separator'                 => ",\n",
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
                      <?php
                         $defaults = array(
                          'smallest' => 8, 'largest' => 22, 'unit' => 'pt', 'number' => 45,
                          'format' => 'flat', 'separator' => "\n", 'orderby' => 'name', 'order' => 'ASC',
                          'exclude' => '', 'include' => '', 'link' => 'view', 'taxonomy' => 'post_tag', 'post_type' => '', 'echo' => true,
                          'show_count' => 0,
                      );
                      $args = wp_parse_args( $args, $defaults );
                      $tags = get_terms( $args['taxonomy'], array_merge( $args, array( 'orderby' => 'name', 'order' => 'ASC' ) ) );
                      $new_tag = array();
                      $i = 0;
                      foreach ($tags as $key => $tag) {
                        $tagkey = substr(strtoupper($tag->name),0,1);

                        if ( 'edit' == $args['link'] )
                            $link = get_edit_term_link( $tag->term_id, $tag->taxonomy, $args['post_type'] );
                        else
                            $link = get_term_link( intval($tag->term_id), $tag->taxonomy );
                        if ( is_wp_error( $link ) )
                            return;
                        $tag->link = $link;
                        $tag->id = $tag->term_id;

                        if (!is_numeric($tagkey)) {
                           $new_tag[$tagkey][] = $tag;
                        }
                        else{
                          $new_tag['#'][] = $tag;
                        }
                        $i++;
                      }
                      foreach ($new_tag as $key => $tag1) {
                        echo "<div class='tag-header'><b>".$key."</b></div>";
                        echo $return = "<div class='tag-content'>".wp_generate_tag_cloud( $tag1, $args )."</div><hr/>";
                      }
                      
                      //wp_tag_cloud( $args );
                      ?>

                    </div>
                </div>
                <?php get_sidebar(); ?>
            </div>
        </div>
    </section>
<?php endwhile; ?>
<?php get_footer(); ?>