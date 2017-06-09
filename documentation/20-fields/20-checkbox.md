# Checkbox

The checkbox field create a single tick-able option with a label next to it.

### Config methods

`set_option_value( $value )`

Set the value that will be saved when the option is ticked.

##### NB! When unticked, the value is not saved in the database.

```php
Field::make( 'checkbox', 'crb_show_content', 'Show content' )
    ->set_option_value( 'yes' )
```