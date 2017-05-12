# Textarea

Multiline text input with HTML allowed.

`Field::make( 'textarea', 'crb_meta_description' )`

### Setup methods

`set_rows( $rows = 5 )`

Sets the number of rows. Must be greater than or equal to `0`. Default is `5`.

```php
Field::make( 'textarea', 'crb_services', 'Services' )
	->set_rows( 4 );
```
