# Hooks

There are several hooks that allow you to include your custom classes and functionality at the right time, in the right place:

### General

*(action)* `carbon_fields_register_fields`

Called prior to registering the Fields.

*(action)* `carbon_fields_fields_registered`

Called after all Fields have been registered.

### Theme Options Container

*(filter)* `carbon_fields_{container-title}_button_label` `( $label )`

Allows you to modify the button label of the theme options container. The filter name is based on the container's title. For example, the filter name for a container with a title of `Theme Options` would be `carbon_fields_theme_options_button_label`. Passes the following parameter:

* *string* `$label` The unfiltered button label.

### Association Field

*(filter)* `carbon_fields_association_field_title` `( $title, $name, $id, $type, $subtype )`

Allows you to modify the title of the association field items. Helpful when implementing custom association items. Passes the following parameters:

* *string* `$title` The unfiltered item title.
* *string* `$name` Name of the association field.
* *int* `$id` The database ID of the item.
* *string* `$type` Item type (post, term, user, comment, or a custom one).
* *string* `$subtype` Subtype – `page`, `post`, `category`, etc.

*(filter)* `carbon_fields_association_field_item_label` `( $label, $name, $id, $type, $subtype )`

Allows you to modify the label of the association items. Helpful when implementing custom association items, or when you want to change the default label. Passes the following parameters:

* *string* `$label` The unfiltered item label.
* *string* `$name` Name of the association field.
* *int* `$id` The database ID of the item.
* *string* `$type` Item type (post, term, user, comment, or a custom one).
* *string* `$subtype` Subtype – `page`, `post`, `category`, etc.

*(filter)* `carbon_fields_association_field_comment_length` `( $number, $name )`

Allows you to change the number of characters, visible from the comment text in an item. Passes the following parameters:

* *int* `$number` Number of characters. Default: `30`
* *string* `$name` Name of the association field.

*(filter)* `carbon_fields_association_field_options_{name}_{type}` `( $options )`
*(filter)* `carbon_fields_association_field_options_{name}_{type}_{subtype}` `( $options )`

Allows you to modify the available options of the association field with name `{name}` from the `{type}` type and of the `{subtype}` subtype where applicable.

- if you want to filter the page post type options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_post_page`

- if you want to filter the category taxonomy options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_taxonomy_category`

- if you want to filter the users options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_user`

- if you want to filter the comments options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_comment`

*(filter)* `carbon_fields_association_field_options` `( $options, $name )`

Allows you to filter the available options of a association field. Passes the following parameters:

* *array* `$options` Unfiltered options.
* *string* `$name` Name of the association field.

### Gravity Form Field

*(filter)* `crb_gravity_form_options` `( $options )`

Applied to the gravity form options.

### Map Field

*(filter)* `carbon_fields_map_field_api_key` `( $api_key )`

Allows you to set your own API key for Google Maps.

*(filter)* `carbon_fields_map_field_api_url` `( $api_url )`

Allows you to completely replace the Google Maps JavaScript API URL.