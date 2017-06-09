# Gravity Form

Similar to select field, but automatically populated with all available gravity forms. 

If the [Gravity Forms](http://www.gravityforms.com/) plugin is not installed or not activated, an appropriate message will be displayed to the user.

`Field::make( 'gravity_form', 'crb_gravity_form', 'Select a Form' )`

There is a `carbon_fields_gravity_form_options` filter which you can use to override the options that are passed to the select field. Example usage:

```php
add_filter( 'carbon_fields_gravity_form_options', 'crb_my_gravity_form_options' );
function crb_my_gravity_form_options( $options ) {
    //change the default "No Form" text
    $options[0] = 'Do not show any form';

    return $options;
}
```