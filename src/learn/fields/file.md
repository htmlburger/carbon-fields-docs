# File

Renders a file upload field with a preview thumbnail of the uploaded file. The built-in WordPress file handling interface is used.

This field type stores the **ID** of the selected file.

```php
Field::make( 'file', 'crb_file', __( 'File' ) )
```

## Config methods

### `set_type( $mime_type )`

Set the allowed file type as a `string` or an `array` of types. Short mime types are also supported (`audio`, `video`, `image`).  
Any mime in the list of acceptable file extensions for upload to the WordPress Media can be used. You can read more [here](https://developer.wordpress.org/reference/hooks/upload_mimes/).

```php
Field::make( 'file', 'crb_file', __( 'File' ) )
	->set_type( array( 'audio', 'image' ) )
```

### `set_value_type( $value_type )`

Set the type of the stored value. *(defaults to `id`)*

You can set to `url` to store the URL of the file instead of the ID.

```php
Field::make( 'file', 'crb_file', __( 'File' ) )
	->set_value_type( 'url' )
```
