# Field Name Patterns

A ___Field Name Pattern___ is a way to refer to a specific field when using the PHP or JavaScript APIs (mainly when getting or setting a field's value).

### Pattern schema

`field_name[group_index][/{repeat}]`

### Examples

In the following examples we'll show you several field definitions and the corresponding patterns to refer to them.

```php
Field::make( 'text', 'crb_text' )
```

| Pattern                                  | Refers to                                    |
|------------------------------------------|----------------------------------------------|
| `crb_text`                               | The crb_text field                           |

---

```php
Field::make( 'complex', 'crb_services' )
	->add_fields( array(
		Field::make( 'text', 'name' ),
	) )
```

| Pattern                | Refers to                                            |
|------------------------|------------------------------------------------------|
| `crb_services`         | The `crb_services` field                             |
| `crb_services[0]/name` | The `name` field for the first `crb_services` group  |
| `crb_services[1]/name` | The `name` field for the second `crb_services` group |

---

```php
Field::make( 'complex', 'crb_service_types' )
	->add_fields( array(
		Field::make( 'text', 'name' ),
		Field::make( 'complex', 'services' )
			->add_fields( array(
				Field::make( 'text', 'name' ),
			) )
	) )
```

| Pattern                                 | Refers to                                                                                      |
|-----------------------------------------|------------------------------------------------------------------------------------------------|
| `crb_service_types`                     | The `crb_service_types` field                                                                  |
| `crb_service_types[0]/name`             | The `name` field for the first `crb_service_types` group                                       |
| `crb_service_types[0]/services`         | The `services` field for the first `crb_service_types` group                                   |
| `crb_service_types[0]/services[0]/name` | The first `name` field for the first `services` group for the first `crb_services_types` group |