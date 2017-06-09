# Nav Menu Item

Nav Menu Item containers are used to extend the Nav Menu edit screens with additional fields. Field data is stored separately for each link as post meta.

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'nav_menu_item', 'Menu Settings' )
    ->add_fields( array(
        Field::make( 'color', 'crb_color' ),
    ));
```

### Container position

Containers are rendered in the order they are initialized.

### Accessing field values

Since each menu entry is a post from post type `"nav_menu_item"` with status `"publish"`, the values can be accessed with the function `carbon_get_post_meta( $nav_menu_item_ID, $name )`, where:

| Parameter            | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `$nav_menu_item_ID`  | Nav Menu Item Post ID where your value was entered.           |
| `$name`              | The field name pattern of the field to be retrieved.                        |

### Custom Walkers or Walker Filters

In order to use the values setup from Nav Menus, you need to use a custom Menu Walker or a filter from the default walker located in `wp-includes/nav-menu-template.php`.

Here is a Walker example:

```php
/**
 * Location:
 *     wp-includes/nav-menu-template.php
 *     source: Walker_Nav_Menu
 */
class Crb_Main_Menu_Walker extends Walker_Nav_Menu {
    public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;

        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args, $depth );
        $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

        $output .= $indent . '<li' . $id . $class_names .'>';

        $atts = array();
        $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
        $atts['target'] = ! empty( $item->target )     ? $item->target     : '';
        $atts['rel']    = ! empty( $item->xfn )        ? $item->xfn        : '';
        $atts['href']   = ! empty( $item->url )        ? $item->url        : '';


        // Adding a custom color to the links
        $crb_color = carbon_get_post_meta( $item->ID, 'crb_color' );
        $atts['style'] = ! empty( $crb_color ) ? 'color: ' . $crb_color . '; ' : '';
        // --- END --- "Adding a custom color to the links"

        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

        $attributes = '';
        foreach ( $atts as $attr => $value ) {
            if ( ! empty( $value ) ) {
                $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'>';

        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= '';
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }

} // Walker_Nav_Menu
```

Here is a Filter example, doing the same thing:

```php
// Adding a custom color to the links
add_filter( 'nav_menu_link_attributes', 'crb_nav_menu_link_attributes', 10, 4 );
function crb_nav_menu_link_attributes( $atts, $item, $args, $depth ) {
    $crb_color = carbon_get_post_meta( $item->ID, 'crb_color' );
    $atts['style'] = ! empty( $crb_color ) ? 'color: ' . $crb_color . '; ' : '';

    return $atts;
}
```

Both of the above examples will result in:

```php
<div class="menu-main-menu-container">
    <ul id="menu-main-menu" class="menu">
        <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
            <a href="#" style="color: #2020f3; ">Sample Page</a>
        </li>
        <li id="menu-item-24" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
            <a href="#" style="color: #f94c4c; ">Sample Page</a>
        </li>
        <li id="menu-item-26" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
            <a href="#" style="color: #81d742; ">Sample Page</a>
        </li>
    </ul>
</div>
```