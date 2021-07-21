# Changing sidebar options

The following snippet allows you to change the default sidebar options for sidebars created through the Sidebar field.

##### functions.php

```php
add_filter( 'carbon_fields_sidebar_options', 'my_custom_sidebar_options', 10, 2 );
function my_custom_sidebar_options( $sidebar_options, $sidebar_id ) {
    // see https://developer.wordpress.org/reference/functions/register_sidebar for more info on the available options
    $sidebar_options = array_merge( $sidebar_options, array(
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget'  => '</li>',
        'before_title'  => '<h2 class="widgettitle">',
        'after_title'   => '</h2>',
    ) );
    return $sidebar_options;
}
```
