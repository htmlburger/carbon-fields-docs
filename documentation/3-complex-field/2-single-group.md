# Single Group

To add a single group of fields you use `add_fields( $fields )`, where:

`$fields`

Numeric array of fields.

```php
Field::make( 'complex', 'crb_test' )
	->add_fields( array(
		Field::make( 'text', 'name' ),
		Field::make( 'text', 'job_title' ),
	) )
```