# HTML

Render custom HTML markup.

```php
Field::make( 'html', 'crb_html', __( 'Section Description' ) )
	->set_html( sprintf( '<p>$1</p>', __( 'Here, you can add some useful description for the fields below / above this text.' ) ) )
```

## Config methods

?> `set_html( $html )`

Set the HTML markup you would like to show to `$html`.

```php
Field::make( 'html', 'crb_information_text' )
    ->set_html( '<h2>Lorem ipsum</h2><p>Quisque mattis ligula.</p>' )
```
