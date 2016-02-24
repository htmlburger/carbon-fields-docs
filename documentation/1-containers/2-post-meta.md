# Post Meta

Custom Field containers are used to extend the post edit screens with additional fields. Field data is stored separately for each post as post meta (see [add_post_meta](http://codex.wordpress.org/Function_Reference/add_post_meta)).

### Visibility options

Custom fields containers are very flexible in terms of display options. You can select specific post type they show on, as well as category, format, parent, etc. A list of all options is displayed below:

#### Post type

`->show_on_post_type('page')`

You can also show a single container on multiple post types, as seen below:

`->show_on_post_type(array('page', 'my_custom_post_type', 'post'))`

#### Categories and custom taxonomies

Containers may be assigned to posts from specific categories or taxonomies:

`->show_on_category($category_slug)`

`->show_on_taxonomy_term($term_slug, $taxonomy)`

#### Pages and subpages

Show container on a specific page, identified by path, for example: `"parent-page/sub-page"`:

`->show_on_page($page_path)`

Show container on all **subpages** of a specific page, identified by path, for example: `"parent-page"`:

`->show_on_page_children($parent_page_path)`

#### Page templates

Containers may be assigned to pages using specific template:

`->show_on_template($template_path)`

The `$template_path` is the name of the template file (or array of template file names), for example: `"about_us.php"` or `array("templates/contact.php", "about_us.php")`

You can also hide the container from pages using specific template:

`->hide_on_template($template_path)`

where the `$template_path` is the name of the template file (or array of template file names), as in `show_on_template()` above.

#### Post formats

To display a container on posts with specific post format, use:

`->show_on_post_format($post_format)`

#### Level

To display a container on hierarchical posts from a specific level, use:

`->show_on_level($level)`

where `$level` is the level of hierarchy depth, starting from 1 and increasing when going into further hierarchy depth.

### Container position

More information about the position options can be found in the [add_meta_box()](https://codex.wordpress.org/Function_Reference/add_meta_box) function.

#### Context

The part of the page where the container should be shown (`'normal'` (default), `'advanced'`, or `'side'`)

`->set_context('normal')`

#### Priority

The priority within the context where the container should show (`'high'` (default), `'core'`, `'default'` or `'low'`)

`->set_priority('high')`

### Accessing field values

To access field values you need to use the function `carbon_get_post_meta($id, $name, $type = null)`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$id`                | Post ID where your value was entered.                                               |
| `$name`              | The name of the field to be retrieved.                                              |
| `$type` *(optional)* | If the field you want to retrieve is of type complex, you need to pass `"complex"`. |

```php
<!-- Simple field -->
<p>Article was published in: <?php echo carbon_get_post_meta(get_the_ID(), 'crb_location'); ?></p>

<!-- Complex field -->
<?php 
$slides = carbon_get_post_meta(get_the_ID(), 'crb_slides', 'complex');
if ( $slides ) {
	foreach ($slides as $slide) {
		echo $slide['image'];
	}
}
?>
```

You can also use `carbon_get_the_post_meta($name, $type = null)` to access the values for the current post in [The Loop](http://codex.wordpress.org/The_Loop).

```php
<p>Article was published in: <?php echo carbon_get_the_post_meta('crb_location'); ?></p>

<?php $slides = carbon_get_the_post_meta('crb_slides', 'complex'); ?>
```

After saving, the `carbon_after_save_post_meta` hook is called, which allows you to hook additional functionality after saving. It accepts the `$post_id` parameter, which is the ID of the post being updated. Example:

```php
add_action('carbon_after_save_post_meta', 'crb_after_save_event');
function crb_after_save_event($post_id) {
	if ( get_post_type($post_id) !== 'crb_event' ) {
		return false;
	}

	$event_date = carbon_get_post_meta($post_id, 'crb_event_date');
	if ( $event_date ) {
		$timestamp = strtotime($event_date);
		update_post_meta($post_id, '_crb_event_timestamp', $timestamp);
	}
}
```