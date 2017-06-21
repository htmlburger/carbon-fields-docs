# Text

The text field is the simplest and most generic field. It renders a text input field.

`Field::make( 'text', 'crb_subtitle' )`

### Config methods

`set_attribute( $name, $value = '' )`

Sets a direct attribute of the resulting `<input>` field. Can only be one of the following: `'max'`, `'maxLength'`, `'min'`, `'pattern'`, `'placeholder'`, `'readOnly'`, `'step'`, `'type'`.

```php
Field::make( 'text', 'crb_phone', 'Phone' )
    ->set_attribute( 'placeholder', '(***) ***-****' );
```
