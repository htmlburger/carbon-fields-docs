# Text

The text field is the simplest and most generic field. It renders a text input field.

```php
Field::make( 'text', 'crb_phone_number', __( 'Phone Number' ) )
```

### Config methods

?> `set_attribute( $name, $value = '' )`

Sets a direct attribute of the resulting `<input>` field. Can only be one of the following: `max`, `maxLength`, `min`, `pattern`, `placeholder`, `readOnly`, `step`, `type` and `data-*`.

```php
Field::make( 'text', 'crb_phone_number', __( 'Phone Number' ) )
    ->set_attribute( 'placeholder', '(***) ***-****' )
```
