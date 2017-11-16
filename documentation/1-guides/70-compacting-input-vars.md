# Compacting input variables to fit within PHP's max_input_vars

In some cases forms can end up having hundreds of inputs which can cause the save request to exceed PHP's `max_input_vars` limit leading to lost request data. To combat this, Carbon Fields comes with a built-in support for input compacting which causes all inputs created by Carbon Fields to be sent as a single input var.

To enable input compacting please add the following near the top of your functions.php:
```php
// Enables input var compacting
define( 'Carbon_Fields\\COMPACT_INPUT', true );

// Optionally overrides the compacted input name. You do not need this in most cases.
define( 'Carbon_Field\\COMPACT_INPUT_KEY', 'my_custom_compacted_input_name' );
```
