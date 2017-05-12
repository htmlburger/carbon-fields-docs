# WPML Support

Carbon Fields provide out-of-the-box support for WPML with the small exception of the Theme Options container.
You can use this helpful snippet to achieve WPML-supporting theme options:

##### functions.php

```php
function crb_get_i18n_suffix() {
    $suffix = '';
    if ( ! defined( 'ICL_LANGUAGE_CODE' ) ) {
        return $suffix;
    }
    $suffix = '_' . ICL_LANGUAGE_CODE;
    return $suffix;
}

function crb_get_i18n_theme_option( $option_name ) {
    $suffix = crb_get_i18n_suffix();
    return carbon_get_theme_option( $option_name . $suffix );
}
```

##### Field Definition

```php
Container::make( 'theme_options', __( 'WPML Theme Options', 'crb' ) )
    ->add_fields( array(
        Field::make( 'text', 'crb_wpml_text_field' . crb_get_i18n_suffix(), 'Text Field' )
    ) );
```

##### Getting values for the current language

```php
var_dump( crb_get_i18n_theme_option( 'crb_wpml_text_field' ) );
```