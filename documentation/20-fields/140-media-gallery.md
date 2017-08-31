# Media Gallery

This field allows adding multiple attachments from the Media. The returned data contains an array of the Attachment IDs.

The Media Gallery supports sorting via _drag and drop_ and the selected attachments' metadata can be edited inline.


### Config methods

`set_type( $mime_type )`

Set the allowed file type as a `string` or an `array` of types. Short mime types are also supported (`audio`, `video`, `image`).  
Any mime in the list of acceptable file extensions for upload to the WordPress Media can be used. You can read more [here](https://codex.wordpress.org/Plugin_API/Filter_Reference/upload_mimes).

```php
Field::make( 'media_gallery', 'crb_media_gallery' )
    ->set_type( array( 'image', 'video' ) )
```

`set_duplicates_allowed( $allow )`

If enabled, will allow the same item to be selected more than once. By default, duplicates are allowed.

```php
Field::make( 'media_gallery', 'crb_media_gallery' )
    ->set_duplicates_allowed( false )
```