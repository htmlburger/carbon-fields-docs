# Term Meta

Term meta containers are used to extend the term edit screens with additional fields. Field data is stored separately for each term, using the default term meta functionality for WordPress 4.4 and higher. For WordPress versions prior to 4.4, data is stored in a custom table (`$wpdb->termmeta`).

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'term_meta', 'Category Properties' )
	->where( 'term_taxonomy', '=', 'category' )
	->add_fields( array(
		Field::make( 'color', 'crb_title_color' ),
		Field::make( 'image', 'crb_thumb' ),
	) );
```

### Accessing field values

To access field values you need to use the function `carbon_get_term_meta( $term_id, $name )`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$term_id`           | Term ID where your value was entered.                                               |
| `$name`              | The field name pattern of the field to be retrieved.                                              |

```php
<!-- Simple field -->
<p>Editor of this category: <?php echo carbon_get_term_meta( $category->term_id, 'crb_editor' ); ?></p>

<!-- Complex field -->
<?php 
$authors = carbon_get_term_meta( $category->term_id, 'crb_authors' );
foreach ( $authors as $author ) {
	echo $author['name'];
}
?>
```

After saving, the `carbon_fields_term_meta_container_saved` hook is called, which allows you to hook additional functionality after saving. It accepts the `$term_id` parameter, which is the `term_id` of the taxonomy term that was updated.