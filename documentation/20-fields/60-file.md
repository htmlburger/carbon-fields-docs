# File

Renders a file upload field with a preview thumbnail of the uploaded file. The built-in WordPress file handling interface is used.

This field type stores the **ID** of the selected file.

### Config methods

`set_type( $mime_type )`

Set the allowed file type as a `string` or an `array` of types. Short mime types are also supported (`audio`, `video`, `image`).  
Any mime in the list of acceptable file extensions for upload to the WordPress Media can be used. You can read more [here](https://codex.wordpress.org/Plugin_API/Filter_Reference/upload_mimes).

`set_value_type( $value_type )`

Set the type of the stored value. *(defaults to `id`)*

You can also `url` to store the URL of the file instead of the ID.

`Field::make( 'file', 'crb_price_list', 'Price list (PDF)' )`