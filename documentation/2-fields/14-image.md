# Image

Renders a text input with URL and image upload button. The built-in WordPress file handling interface is used.

Supported image formats are: `jpg`, `jpeg`, `gif`, `png` and `bmp`.

This field type stores the URL of the image.

### Setup methods

`set_type($mime_type)` *(defaults to `image`)*

Set the allowed files type. Short mime types are also supported (`audio`, `video`, `image`).

`Field::make("image", "crb_employee_photo", "Photo")`