# User Meta

User meta containers add extra fields to the user edit screens. Field data is stored separately for each user as user meta (see [add_user_meta](http://codex.wordpress.org/Function_Reference/add_user_meta)).

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('user_meta', 'Address')
	->add_fields(array(
		Field::make('text', 'crb_city_and_post', 'City and post code'),
		Field::make('text', 'crb_street', 'Street Name'),
	));
```

By default the user meta containers are displayed for all users of all roles, but you can select specific user roles they show on using the method `show_on_user_role($role)`, where:

| Parameter   | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `$role`     | Can be either name of a single role or an array of role names |

### Accessing field values

To access field values you need to use the function `carbon_get_user_meta($user_d, $name, $type = null)`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$user_id`           | User ID where your value was entered.                                               |
| `$name`              | The name of the field to be retrieved.                                              |
| `$type` *(optional)* | If the field you want to retrieve is of type complex, you need to pass `"complex"`. |

```php
<!-- Simple field -->
<p>Author address: <?php echo carbon_get_user_meta(get_the_author_meta('ID'), 'crb_street'); ?></p>

<!-- Complex field -->
<?php 
$phone_numbers = carbon_get_user_meta(get_the_author_meta('ID'), 'crb_phone_numbers', 'complex');
foreach ($phone_numbers as $phone) {
	echo $phone['country_code'] . '-' . $phone['number'];
}
?>
```

After saving, the `carbon_fields_user_meta_container_saved` hook is called, which allows you to hook additional functionality after saving. It accepts the `$user_id` parameter, which is the ID of the user that was updated.
