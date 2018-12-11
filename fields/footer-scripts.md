# Footer Scripts

!> Applicable to Theme Options container only.

Displays a text area, the contents of which will be automatically printed before the closing `</body>` of each page (during `wp_footer()`).

Useful for printing *Google Analytics* tracking code, or user-defined javascript.

```php
Field::make( 'footer_scripts', 'crb_footer_scripts', __( 'Footer Scripts' ) )
```

## Config methods

Please refer to the [Header Scripts](/fields/header-scripts) field docs.
