# Term Meta

Term meta containers are used to extend the term edit screens with additional fields. Field data is stored separately for each term, using the default term meta functionality for WordPress 4.4 and higher. For WordPress versions prior to 4.4, data is stored in a custom table (`$wpdb->termmeta`).

```php
use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

Container::make('term_meta', 'Category Properties')
	->show_on_taxonomy('category')
	->add_fields(array(
		Field::make('color', 'crb_title_color'),
		Field::make('image', 'crb_thumb'),
	));
```

By default the term meta containers are displayed on `category` terms, but you can select specific taxonomies they show on using the method `show_on_taxonomy($taxonomy)`, where:

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `$taxonomy` | Can be either name of a single taxonomy or an array of taxonomy names |

### Visibility options

Custom fields containers are very flexible in terms of display options. You can select specific post type they show on, as well as category, format, parent, etc. A list of all options is displayed below:

#### Level

To display a container on hierarchical terms from a specific level, use:

`->show_on_level($level)`

where `$level` is the level of hierarchy depth, starting from 1 and increasing when going into further hierarchy depth.

### Accessing field values

To access field values you need to use the function `carbon_get_term_meta($term_id, $name, $type = null)`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$term_id`           | Term ID where your value was entered.                                               |
| `$name`              | The name of the field to be retrieved.                                              |
| `$type` *(optional)* | If the field you want to retrieve is of type complex, you need to pass `"complex"`. |

```
<!-- Simple field -->
<p>Editor of this category: <?php echo carbon_get_term_meta($category->term_id, 'crb_editor'); ?></p>

<!-- Complex field -->
<?php 
$authors = carbon_get_term_meta($category->term_id, 'crb_authors', 'complex');
foreach ($authors as $author) {
	echo $author['name'];
}
?>
```

After saving, the `carbon_after_save_term_meta` hook is called, which allows you to hook additional functionality after saving. It accepts the `$term_id` parameter, which is the `term_id` of the taxonomy term that was updated.