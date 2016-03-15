# Sidebar

Adds a drop-down field that lists existing sidebars and provides the ability to add new sidebars to the site. Sidebars registered through this field can be removed from the Widgets panel using the “x” icon that will appear next to the sidebar name.

### Setup methods

`disable_add_new()`

Remove the ability to add new sidebars to the site.

`exclude_sidebars($sidebars)`

Add the ability to exclude one or more sidebars from the select menu. `$sidebars` parameter can be an array (of sidebar IDs or sidebar names) or a single sidebar (ID or name).

`Field::make("sidebar", "crb_custom_sidebar", "Select a Sidebar")`

### Helper functions

`crb_dynamic_sidebar($id, $sidebar_options)`

This function is not included in the plugin core, but feel free to use it in your theme/plugin. 

It overwrites the sidebar options and prints the widgets of the sidebar with the specified ID.

```php
function crb_dynamic_sidebar($index = 1, $options = array()) {
	global $wp_registered_sidebars;

	// Get the sidebar index the same way as the dynamic_sidebar() function
	if ( is_int($index) ) {
		$index = "sidebar-$index";
	} else {
		$index = sanitize_title($index);
		foreach ( (array) $wp_registered_sidebars as $key => $value ) {
			if ( sanitize_title($value['name']) == $index ) {
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
	$wp_registered_sidebars[$index]	= wp_parse_args($options, $sidebar);

	// Display the sidebar
	$status = dynamic_sidebar($index);

	// Restore the original sidebar options
	$wp_registered_sidebars[$index] = $sidebar;

	return $status;
}
```