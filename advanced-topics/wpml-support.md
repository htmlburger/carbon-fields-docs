# WPML Support

Carbon Fields provide out-of-the-box support for WPML with the small exception of the Theme Options container (explained further below).

## Flatpickr

Carbon Fields use Flatpickr for the Date, Time and Datetime fields. In order to translate these fields you must enqueue the relevant translation script for [Flatpickr](https://chmln.github.io/flatpickr/localization/).

Here's an example on how to include Russian translations:
```php
add_action( 'admin_enqueue_scripts', function() {
    wp_enqueue_script( 'flatpickr-locale-ru', 'https://npmcdn.com/flatpickr/dist/l10n/ru.js', array('carbon-fields-boot') );
} );
```

Carbon Fields will automatically detect your current administration language and pass it on to Flatpickr. If you want to override this behavior you can explicitly pass a locale for the relevant fields:
```php
Field::make( 'date', ... )
    ->set_picker_options( array(
        'locale' => 'es', // example with Spanish
    ) ),
```

## Theme Options

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
Container::make( 'theme_options', __( 'WPML Theme Options' ) )
    ->add_fields( array(
        Field::make( 'text', 'crb_wpml_text_field' . crb_get_i18n_suffix(), 'Text Field' )
    ) );
```

##### Getting values for the current language

```php
var_dump( crb_get_i18n_theme_option( 'crb_wpml_text_field' ) );
```
