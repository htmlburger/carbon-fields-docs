# Adding predefined complex groups

### Field Definition

```php
Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
    ->add_fields( array(
        Field::make( 'complex', 'crb_complex', 'My Complex Field' )
            ->add_fields( array(
                Field::make( 'text', 'my_text_field', 'My Text Field' )
            ) )
            ->set_default_value( array(
                array(
                    'my_text_field' => 'Hello',
                ),
                array(
                    'my_text_field' => 'World!',
                ),
            ) ),
    ) );
```
