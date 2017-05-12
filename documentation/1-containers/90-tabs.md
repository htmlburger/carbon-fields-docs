# Tabs

The tabs allow you to group multiple fields under different tab panels using the Container method `add_tab()`.

Tabs can be used on every container type. Example:

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('post_meta', __('User Settings'))
	->where('post_type', '=', 'page')
	->add_tab(__('Profile'), array(
		Field::make('text', 'crb_first_name', 'First Name'),
		Field::make('text', 'crb_last_name', 'Last Name'),
		Field::make('text', 'crb_position', 'Position'),
	))
	->add_tab(__('Notification'), array(
		Field::make('text', 'crb_email', 'Notification Email'),
		Field::make('text', 'crb_phone', 'Phone Number'),
	));
```