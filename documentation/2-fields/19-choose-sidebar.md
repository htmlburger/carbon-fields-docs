# Choose Sidebar

##### *Deprecated* in favor of the **Sidebar** field.

Adds a drop-down field that lists existing sidebars and provides the ability to add new sidebars to the site.

### Setup methods

`disable_add_new()`

Remove the ability to add new sidebars to the site.

`set_sidebar_options($sidebar_options)`

Set the options used for sidebars created by this field. See [register_sidebar()](http://codex.wordpress.org/Function_Reference/register_sidebar) for more information.

This method can accept an associative array of options, or an array of associative arrays with options for each sidebar.

The default options are:

```php
array(
	'before_widget' => '<li id="%1$s" class="widget %2$s">',
	'after_widget' => '</li>',
	'before_title' => '<h2 class="widgettitle">',
	'after_title' => '</h2>',
)
```

The example below shows how to create a Choose Sidebar field with custom sidebar options and help text:

```php
Field::make("choose_sidebar", "crb_custom_sidebar", __('Sidebar'))
	->help_text('Select which sidebar to show in this page, or click "Add New" to create a new one')
	->set_sidebar_options(array(
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widgettitle">',
		'after_title' => '<div class="cl">&nbsp;</div></h3>',
	))
```

The following example sets different sidebar options for each of the specified sidebars:

```php
Field::make( 'choose_sidebar', 'crb_custom_sidebar', __('Sidebar') )
	->set_sidebar_options(array(
		'default' => array(
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget'  => '</li>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		),
		'blog-sidebar' => array(
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="blog-widget-title">',
			'after_title'   => '</h4>',
		)
	))
```