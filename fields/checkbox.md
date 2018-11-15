# Checkbox

The checkbox field create a single tick-able option with a label next to it.

### Config methods

`set_option_value( $value )`

Set the value that will be saved when the option is ticked.

##### NB! When unticked, an empty value is stored in the database.

```php
Field::make( 'checkbox', 'crb_show_content', 'Show content' )
    ->set_option_value( 'yes' )
```

##### NB! Use a boolean value when referencing a checkbox field in `set_conditional_logic()`

```php
Field::make( 'checkbox', 'crb_show_content', 'Show content' ),
Field::make( 'rich_text', 'crb_content', 'Content' )
     ->set_conditional_logic( array(
        array(
            'field' => 'crb_show_content',
            'value' => true,
        )
    ) ),
```