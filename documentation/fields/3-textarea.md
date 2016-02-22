# Textarea

Multiline text input with HTML allowed.

`Field::make('textarea', 'crb_meta_description')`

### Setup methods

`set_rows($rows = 0)`

Sets the number of rows. Must be greater than or equal to `0`. Default is `0`, which falls back to `->set_height(170)`

```php
Field::make("textarea", "crb_services", "Services")
	->set_rows(4);
```

`set_height($height = 170)` *(DEPRECATED)*

Sets the field height. Deprecated in favor of `set_rows()`

```php
Field::make("textarea", "crb_related_urls", "Related Links")
	->set_height(250);
```

##### NB! The `set_height()` method is now deprecated – `set_rows()` should be used instead due to differences in the visual appearance of the textarea between desktop and mobile devices.