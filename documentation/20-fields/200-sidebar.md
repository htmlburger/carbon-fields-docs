# Sidebar

Adds a drop-down field that lists existing sidebars and provides the ability to add new sidebars to the site. Sidebars registered through this field can be removed from the Widgets panel using the “x” icon that will appear next to the sidebar name.

To change the options of sidebars created through this field or through the "Add New" sidebar button on the Widgets page, use this filter:

`Field::make( 'sidebar', 'crb_custom_sidebar', 'Select a Sidebar' )`

```php
add_filter( 'carbon_fields_sidebar_options', 'crb_my_custom_sidebar_options' );
function crb_my_custom_sidebar_options( $sidebar_options, $sidebar_id ) {
    // Do any modifications to the sidebar options
    return $sidebar_options;
}
```

To change the list of sidebars shown in sidebar fields, use the `set_excluded_sidebars( $sidebars )` method or this filter:

```php
add_filter( 'carbon_fields_sidebars', 'crb_my_custom_sidebar_field_options' );
function crb_my_custom_sidebar_field_options( $sidebars, $field_name ) {
    // Do any modifications to the array of sidebars
    return $sidebars;
}
```

### Config methods

`disable_add_new()`

Remove the ability to add new sidebars to the site.

`set_excluded_sidebars( $sidebars )`

Exclude one or more sidebars from the select menu. `$sidebars` parameter can be an array (of sidebar IDs or sidebar names) or a single sidebar (ID or name).

```php
Field::make( 'sidebar', 'crb_custom_sidebar', 'Select a Sidebar' )
    ->set_excluded_sidebars( array( 'default-sidebar' ) )
```

### Helper functions

`crb_dynamic_sidebar( $id, $sidebar_options )`

This function is not included in the plugin core, but feel free to use it in your theme/plugin. 

It overwrites the sidebar options and prints the widgets of the sidebar with the specified ID.

```php
function crb_dynamic_sidebar( $index = 1, $options = array() ) {
    global $wp_registered_sidebars;

    // Get the sidebar index the same way as the dynamic_sidebar() function
    if ( is_int( $index ) ) {
        $index = "sidebar-$index";
    } else {
        $index = sanitize_title( $index );
        foreach ( (array) $wp_registered_sidebars as $key => $value ) {
            if ( sanitize_title( $value['name'] ) == $index ) {
                $index = $key;
                break;
            }
        }
    }

    // Bail if this sidebar doesn't exist
    if ( empty( $wp_registered_sidebars[$index] ) ) {
        return false;
    }

    // Get the current sidebar options
    $sidebar = $wp_registered_sidebars[$index];

    // Update the sidebar options
    $wp_registered_sidebars[$index]    = wp_parse_args( $options, $sidebar );

    // Display the sidebar
    $status = dynamic_sidebar( $index );

    // Restore the original sidebar options
    $wp_registered_sidebars[$index] = $sidebar;

    return $status;
}
```