# HTML

Render custom HTML markup.

### Config methods

`set_html( $html )`

Set the HTML markup you would like to show to `$html`.

```php
Field::make( 'html', 'crb_information_text' )
    ->set_html( '<h2>Lorem ipsum</h2><p>Quisque mattis ligula.</p>' )
```