# File

Renders a file upload field with a preview thumbnail of the uploaded file. The built-in WordPress file handling interface is used.

This field type stores the **ID** of the selected file.

### Setup methods

`set_type($mime_type)`

Set the allowed files type. Short mime types are also supported (`audio`, `video`, `image`).

`Field::make("file", "crb_price_list", "Price list (PDF)")`