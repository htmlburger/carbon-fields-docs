# Textarea

Multiline text input with HTML allowed.

`Field::make( 'textarea', 'crb_meta_description' )`

### Config methods

`set_rows( $rows = 5 )`

Sets the number of rows. Must be greater than or equal to `0`. Default is `5`.

```php
Field::make( 'textarea', 'crb_services', 'Services' )
    ->set_rows( 4 );
```

`set_attribute( $name, $value = '' )`

Sets a direct attribute of the resulting `<textarea>` field. Can only be one of the following: `'maxLength'`, `'minLength'`, `'placeholder'`, `'readOnly'` and `'data-*'`.

```php
Field::make( 'textarea', 'crb_phones', 'Phone Numbers' )
    ->set_attribute( 'placeholder', '(***) ***-****, ...' );
```
