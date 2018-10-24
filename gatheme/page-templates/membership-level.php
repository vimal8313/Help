<?php
/**
Template Name: Membership Level Page
*/
get_header(); ?>

    <section id="content">
        <div class="container">
          <div class="row">
              <div class="col-sm-8">
                  <div class="left-part">
                  <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                  </header><!-- .entry-header -->
                    <?php
                        global $wpdb, $pmpro_msg, $pmpro_msgt, $current_user;

                        $pmpro_levels = pmpro_getAllLevels(false, true);
                        $pmpro_level_order = pmpro_getOption('level_order');

                        if(!empty($pmpro_level_order))
                        {
                          $order = explode(',',$pmpro_level_order);

                          //reorder array
                          $reordered_levels = array();
                          foreach($order as $level_id) {
                            foreach($pmpro_levels as $key=>$level) {
                              if($level_id == $level->id)
                                $reordered_levels[] = $pmpro_levels[$key];
                            }
                          }

                          $pmpro_levels = $reordered_levels;
                        }

                        $pmpro_levels = apply_filters("pmpro_levels_array", $pmpro_levels);

                        if($pmpro_msg)
                        {
                        ?>
                        <div class="pmpro_message <?php echo $pmpro_msgt?>"><?php echo $pmpro_msg?></div>
                        <?php
                        }
                        ?>
                        <table id="pmpro_levels_table" class="pmpro_checkout">
                        <thead>
                          <tr>
                          <th><?php _e('Level', 'paid-memberships-pro' );?></th>
                          <th><?php _e('Price', 'paid-memberships-pro' );?></th>
                          <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <?php
                          $count = 0;
                          foreach($pmpro_levels as $level)
                          {
                            if(isset($current_user->membership_level->ID))
                              $current_level = ($current_user->membership_level->ID == $level->id);
                            else
                              $current_level = false;
                          ?>
                          <tr class="<?php if($count++ % 2 == 0) { ?>odd<?php } ?><?php if($current_level == $level) { ?> active<?php } ?>">
                            <td><?php echo $current_level ? "<strong>{$level->name}</strong>" : $level->name?></td>
                            <td>
                              <?php
                                if(pmpro_isLevelFree($level))
                                  $cost_text = "<strong>" . __("Access to an Individual Article can be purchased for $99 dollars at the bottom of the article's preview page.  Please browse to the article you'd like to purchase and then checkout at the bottom of the page", 'paid-memberships-pro' ) . "</strong>";
                                else
                                  $cost_text = pmpro_getLevelCost($level, true, true);
                                $expiration_text = pmpro_getLevelExpiration($level);
                                if(strpos($expiration_text, 'Month'))
                                {
                                    $expiration_text = str_replace("Membership expires after 1","Subscription renews every",$expiration_text);
                                }
                                else{
                                    $expiration_text = str_replace("Membership expires after 1","Subscription renews every",$expiration_text);
                                }
                                //echo $expiration_text;
                                if(!empty($cost_text) && !empty($expiration_text))
                                  echo $cost_text . "<br />" . $expiration_text;
                                elseif(!empty($cost_text))
                                  echo $cost_text;
                                elseif(!empty($expiration_text))
                                  echo $expiration_text;
                              ?>
                            </td>
                            <td>
                            <?php if(empty($current_user->membership_level->ID)) { ?>
                              <?php if(!pmpro_isLevelFree($level)) { ?>
                                <a class="pmpro_btn pmpro_btn-select" href="<?php echo pmpro_url("checkout", "?level=" . $level->id, "https")?>"><?php _e('Select', 'paid-memberships-pro' );?></a>
                                <?php } ?>

                            <?php } elseif ( !$current_level ) { ?>
                            <?php if(!pmpro_isLevelFree($level)) { ?>
                              <a class="pmpro_btn pmpro_btn-select" href="<?php echo pmpro_url("checkout", "?level=" . $level->id, "https")?>"><?php _e('Select', 'paid-memberships-pro' );?></a>
                               <?php } ?>
                            <?php } elseif($current_level) { ?>

                              <?php
                                //if it's a one-time-payment level, offer a link to renew
                                if( pmpro_isLevelExpiringSoon( $current_user->membership_level) && $current_user->membership_level->allow_signups ) {
                                  ?>
                                    <a class="pmpro_btn pmpro_btn-select" href="<?php echo pmpro_url("checkout", "?level=" . $level->id, "https")?>"><?php _e('Renew', 'paid-memberships-pro' );?></a>
                                  <?php
                                } else {
                                  ?>
                                  <?php if(!pmpro_isLevelFree($level)) { ?>
                                    <a class="pmpro_btn disabled" href="<?php echo pmpro_url("account")?>"><?php _e('Your&nbsp;Level', 'paid-memberships-pro' );?></a>
                                    <?php } ?>
                                  <?php
                                }
                              ?>

                            <?php } ?>
                            </td>
                          </tr>
                          <?php
                          }
                          ?>
                        </tbody>
                        </table>
                        <div class="subscription-content" style="padding-top: 10px;">
                          <h2 style="margin-bottom: 0px;">ONE-WEEK COMPLIMENTARY ACCESS AVAILABLE FOR YOU</h2>
<p>We are offering a one-week complimentary subscription for our valued colleagues. <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4ip9cWyTXaKPoQsASvH_-DLTRPZNv2IZpIRIuRd0OYzODTQ/viewform" target="_blank">Please complete the form here</a> to request your one-week complimentary access.</p>
                        </div>
                        <nav id="nav-below" class="navigation" role="navigation">
                          <div class="nav-previous alignleft">
                            <?php if(!empty($current_user->membership_level->ID)) { ?>
                              <a href="<?php echo pmpro_url("account")?>" id="pmpro_levels-return-account"><?php _e('&larr; Return to Your Account', 'paid-memberships-pro' );?></a>
                            <?php } else { ?>
                              <a href="<?php echo home_url()?>" id="pmpro_levels-return-home"><?php _e('&larr; Return to Home', 'paid-memberships-pro' );?></a>
                            <?php } ?>
                          </div>
                        </nav>
                    </div>
                </div>
                <?php get_sidebar(); ?>
            </div>
        </div>
    </section>


<?php get_footer(); ?>