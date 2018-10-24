https://codex.wordpress.org/Getting_Started_with_WordPress
https://codex.wordpress.org/Class_Reference/WP_Query
https://developer.wordpress.org/reference/classes/wp_query/
https://wphierarchy.com/

Database Error related to utf8mb4:
//replace all of utf8mb4 to utf8
//replace all of utf8mb4_unicode_520_ci to utf8mb4_general_ci
//replace all of utf8mb4_general_ci to utf8_general_ci

After Site make live change site url:
https://codepen.io/EightArmsHQ/full/nzEjI

Extensions:
Custom post type:
https://wordpress.org/plugins/custom-post-type-ui/

Custom fields:
https://wordpress.org/plugins/advanced-custom-fields/

Root path of project :-> echo esc_url( home_url( '/' ) );
EX.: http://172.10.24.134/wordpress/Training/

Activate theme path :-> echo get_template_directory();
Ex.: /var/www/html/wordpress/Training/wp-content/themes/custometheme

Activate theme uri :-> echo get_template_directory_uri();
http://172.10.24.134/wordpress/Training/wp-content/themes/custometheme

Post title :-> the_title();
Ex.:Lorem ipsum

Post Description :-> the_content();
Ex.: Lorem ipsum dolor sit amet, consetetur sadipscing

Date of post :-> the_date();

Author of the post :-: the_author();

Custome query for posts:
$query = new WP_Query( array(
	'post_type' => 'post',
	'order'   => 'DESC',
	'posts_per_page' => 3, ) );
$query->have_posts()

Print query:
echo $query->request;

Get post id
$postID = get_the_ID();

Get size related image source
$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),'medium','');
$src = wp_get_attachment_image_src( get_post_thumbnail_id($postID),array(100));

Display content of the post:
get_the_content($postID);

display short content of the post:
wp_trim_words( get_the_content(), 5 );

Get related tags of post:
wp_get_post_tags($postID);

Apply current menu item 'active' class and remove current page item:
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
function special_nav_class($classes, $item){
	 if( in_array('current_page_item', $classes) ){
			 $classes[] = 'active ';
	 }
	 return $classes;
}

For dynamic menu:
//walker class
class My_Walker_Nav_Menu extends Walker_Nav_Menu {
	// add main/sub classes to li's and links
	function start_el( &$output, $item, $depth, $args ) {
		global $wp_query;
		$indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent

		// depth dependent classes
		$depth_classes = array(
		    ( $depth == 0 ? 'main-menu-item' : 'sub-menu-item' ),
		    ( $depth >=2 ? 'sub-sub-menu-item' : '' ),
		    ( $depth % 2 ? 'menu-item-odd' : 'menu-item-even' ),
		    'menu-item-depth-' . $depth
		);
		$depth_class_names = esc_attr( implode( ' ', $depth_classes ) );

		// passed classes
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		$class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );
		$caret = '';
		if(in_array('menu-item-has-children', $classes)){
			$caret = '<span class="caret"></span>';
			$attributes .= ' class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"';
		}
		// build html
		$output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';

		// link attributes
		$attributes  .= ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
		$attributes .= ' class="menu-link ' . ( $depth > 0 ? 'sub-menu-link' : 'main-menu-link' ) . '"';


		$item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s'.$caret.'</a>%6$s',
		    $args->before,
		    $attributes,
		    $args->link_before,
		    apply_filters( 'the_title', $item->title, $item->ID ),
		    $args->link_after,
		    $args->after
		);

		// build html
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}
}

Filter class for new submenu:
//filter
function new_submenu_class($menu) {
  $menu = preg_replace('/ class="sub-menu"/','/ class="dropdown-menu col-md-offset-3" /',$menu);
  return $menu;
}
add_filter('wp_nav_menu','new_submenu_class');

//Custome meta box for date Post type
function post_custom_meta()
{
    add_meta_box('post_date_meta', 'Post End Date', 'post_date_meta', 'post', 'side', 'default');
}

add_action( 'add_meta_boxes', 'post_custom_meta' );

function post_date_meta() {
	wp_enqueue_script( 'jquery-ui-datepicker' );
	wp_enqueue_style( 'jquery-ui-style', '//ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/smoothness/jquery-ui.css', true);

		<script>
		jQuery(document).ready(function(){
			jQuery('.widefat').datepicker({
				dateFormat : 'yy-mm-dd'
			});
		});
		</script>

	global $post;

	// Get the location data if its already been entered
	$location = get_post_meta($post->ID, 'post_enddate', true);

	// Echo out the field
	echo '<input type="text" name="post_enddate" value="' . $location  . '" class="widefat" />';
}

//save custom meta for post
function save_date_post(){
	global $post;

	if ( !current_user_can( 'edit_post', $post->ID ))
	    return $post->ID;

	if(!isset($_POST["post_enddate"])):
	return $post;

	endif;
	$updatestartd = $_POST["post_enddate"];
	// add_post_meta( $post->ID, 'post_enddate', $updatestartd );
		if(get_post_meta($post->ID, 'post_enddate', FALSE)) {
		    update_post_meta($post->ID, 'post_enddate', $updatestartd);
		} else {
		    add_post_meta($post->ID, 'post_enddate', $updatestartd);
		}
}
add_action ('save_post', 'save_date_post');



info@anker-badelster.de