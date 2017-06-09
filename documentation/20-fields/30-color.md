# Color

Renders a color picker with an optional palette.

Colors are represented with six hexadecimal digits prefixed with `#` (e.g. white is `#FFFFFF`)

`Field::make( 'color', 'crb_box_background', 'Background Color' )`

### Config methods

`set_palette( $palette = array() )`

Sets the color picker's pallete of predefined colors. Must be an array of hexadecimal colors.

```php
Field::make( 'color', 'crb_background', 'Background' )
    ->set_palette( array( '#FF0000', '#00FF00', '#0000FF' ) );
```
