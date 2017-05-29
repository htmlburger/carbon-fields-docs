# User Meta

User meta containers add extra fields to the user edit screens. Field data is stored separately for each user as user meta (see [add_user_meta](http://codex.wordpress.org/Function_Reference/add_user_meta)).
Note that by default only users with the `manage_options` capability have access to this container. In order to override this behavior please refer to the `carbon_fields_user_meta_container_admin_only_access` filter in the Hooks section.

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'user_meta', 'Address' )
	->add_fields( array(
		Field::make( 'text', 'crb_city_and_post', 'City and post code' ),
		Field::make( 'text', 'crb_street', 'Street Name' ),
	) );
```

### Accessing field values

To access field values you need to use the function `carbon_get_user_meta( $user_d, $name )`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$user_id`           | User ID where your value was entered.                                               |
| `$name`              | The field name pattern of the field to be retrieved.                                              |

```php
<!-- Simple field -->
<p>Author address: <?php echo carbon_get_user_meta( get_the_author_meta( 'ID' ), 'crb_street' ); ?></p>

<!-- Complex field -->
<?php 
$phone_numbers = carbon_get_user_meta( get_the_author_meta( 'ID' ), 'crb_phone_numbers' );
foreach ( $phone_numbers as $phone ) {
	echo $phone['country_code'] . '-' . $phone['number'];
}
?>
```

After saving, the `carbon_fields_user_meta_container_saved` hook is called, which allows you to hook additional functionality after saving. It accepts the `$user_id` parameter, which is the ID of the user that was updated.
