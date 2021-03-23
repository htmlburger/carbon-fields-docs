# Header Scripts

!> Applicable to Theme Options container only.

Displays a text area, the contents of which will be automatically printed in the `<head>` of each page.

Useful for printing user-defined javascript, as well as styles, meta tags, etc.

```php
Field::make( 'header_scripts', 'crb_header_scripts', __( 'Header Scripts' ) )
```

## Config methods

### `set_hook_name( $hook_name )`

Set what hook the field should use. Default is `wp_head`.

```php
Field::make( 'text', 'crb_phone', __( 'Phone' ) )
    ->set_hook_name( 'wp_print_scripts' );
```

### `set_hook_priority( $hook_priority )`

Set what priority the hook should use. Default is 10.

```php
Field::make( 'text', 'crb_phone', __( 'Phone' ) )
    ->set_hook_priority( 11 );
```

### `set_hook( $hook_name, $hook_priority )`

Shorthand for both `set_hook_name()` and `set_hook_priority()`.

```php
Field::make( 'text', 'crb_phone', __( 'Phone' ) )
    ->set_hook( 'wp_print_scripts', 11 );
```
