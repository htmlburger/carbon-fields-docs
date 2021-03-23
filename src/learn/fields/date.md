# Date

Renders a date picker.

```php
Field::make( 'date', 'crb_event_start_date', __( 'Event Start Date' ) )
```

## Config methods

### `set_attribute( $name, $value = '' )`

Sets a direct attribute of the resulting `<input>` field. Can only be one of the following: `'placeholder'` and `'data-*'`.

```php
Field::make( 'date', 'crb_event_start_date', __( 'Event Start Date' ) )
    ->set_attribute( 'placeholder', __( 'Date of event start' ) );
```

### `set_storage_format( $storage_format )`

Set the format which should be used to save date values in the database with. Defaults to `Y-m-d`.

```php
Field::make( 'date', 'crb_event_start_date', __( 'Event Start Date' ) )
    ->set_storage_format( 'Y-m-d' );
```

### `set_input_format( $php_format, $js_format )`

Set the format which should be used to enter values in the administration. Note that you should specify the format in both PHP and JS variants (i.e. they should be translations of each other). The JS format used is [Flatpickr's](https://chmln.github.io/flatpickr/formatting/).
Separating storage and input formats makes it possible for editors to use `12/31/2017 11:30 PM` dates while the database stores `2017-12-31 23:30:00` behind the scenes.

```php
Field::make( 'date', 'crb_event_start_date', __( 'Event Start Date' ) )
    ->set_input_format( 'F Y', 'M Y' );
```

!> Note that the specified format doesn't affect the returned value when using `carbon_get_*` functions. If you need to display the value in a different format, you will still need to use [PHP Date](http://php.net/manual/en/function.date.php) functions.

### `set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/).

```php
Field::make( 'date', 'crb_event_start_date', __( 'Event Start Date' ) )
    ->set_picker_options( array(
    	'weekNumbers' => true,
    ) );
```
