# What's new in 2.0

- Carbon Fields no longer stores serialized values.
- You can now create queries based on any field including complex fields and on attributes other than field values. Refer to the "Queries" documentation page for more information.
- Expanded `Field::set_conditional_logic( $conditions )` with the ability to target parent scopes. Refer to the Fields Usage documentation page for more information.
- Added `INCLUDES` and `EXCLUDES` conditional logic comparison operators which allow you to base your logic on fields which have multiple values (e.g. Set_Field) or text fields (partial text match).
- Added a JS API to communicate with Carbon Fields on admin screens where containers are rendered. Refer to the JS API documentation page for more information.
- `carbon_get_*` functions now fetch the default field value if no field value has been saved, yet.
- `carbon_get_*` functions no longer require a $type parameter.
- Added `carbon_set_*( $field_name, $value )` functions which allow you to update field values.
- Rewrote container conditions. `show_on_*` and `hide_on_*` methods are now deprecated in favor of the new solution. Refer to the Conditional Display documentation page for more information.
- Added full REST API support out of the box.
- `Field::set_default_value( $default_value )` now works for all fields including complex fields. Refer to the "Predefined Complex Groups" guide for an example.
- Added `Hidden_Field`.
- Added `Field::set_classes( $classes )` and `Container::set_classes( $classes )` methods to allow you to add css classes to fields and containers.
- `Date_Field`, `Time_Field` and `Date_Time_Field` now always store their values in `Y-m-d`, `H:i:s` and `Y-m-d H:i:s` respectively regardless of the set display format. This allows you to adjust the user experience without affecting the back-end storage format.
- `Post_Meta_Container::set_context( $context )` now supports `'carbon_fields_after_title'` which adds the container between the post title and content editor.
- Added `Color_Field::set_palette( $palette )` which allows you to specify a pre-defined list of colors to add to the color picker.
- Added `Field::set_attribute( $name, $value )` which allows you to override a number of attributes on fields based on `<input>` and `<textarea>`.
- Added `Theme_Options_Container::set_page_position( $position )` which allows you to override the container position in the administration menu.