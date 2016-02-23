# Attachment

Renders a button to choose file (attachment) from the Media library. Instead of the URL, the field saves the attachment’s `ID`. This allows you to retrieve additional information such as titles, descriptions, captions and different thumbnail sizes.

This field type stores the `ID` of the attachment.

### Setup methods

`set_type($mime_type)`

Set the allowed files type. Short mime types are also supported (`audio`, `video`, `image`).

`Field::make("attachment", "crb_related_file", "Related File")`