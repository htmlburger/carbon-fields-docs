# oEmbed

This field allows you to enter a URL and it will display a live preview of the source. Internally, the field makes use of the [WordPress oEmbed functionality](https://wordpress.org/support/article/embeds/)

```php
Field::make( 'oembed', 'crb_oembed', __( 'oEmbed' ) )
```
