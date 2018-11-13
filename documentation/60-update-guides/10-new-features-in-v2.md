# What's new in 2.0

- Carbon Fields no longer stores serialized values.
	Fields which hold several values (e.g. set) or properties (e.g. map) now save separate meta/option values instead of serialized arrays. This change enables a number of the advanced features mentioned below.

- You can now create queries based on any field including complex fields and on attributes other than field values. Refer to the "Queries" documentation page for more information.
	Examples:
	- Query for posts/terms/users that have a specific checkbox checked in a Set field
	- Query for posts/terms/users with a map field that has a latitude between -5 and 5.
	- Query for posts/terms/users that have a specific value in a field in one of their complex field groups.

- Expanded `Field::set_conditional_logic( $conditions )` with the ability to target parent scopes. Refer to the Fields Usage documentation page for more information and examples.

- Added `INCLUDES` and `EXCLUDES` conditional logic comparison operators which allow you to base your logic on fields which have multiple values (e.g. Set_Field) or text fields (partial text match).

- Added a JS API to communicate with Carbon Fields on admin screens where containers are rendered. Refer to the JS API documentation page for more information.
	This allows you to add custom JavaScript validation to forms or to fill in field values using a custom method.

- `carbon_get_*` functions now fetch the default field value if no field value has been saved, yet.

- `Field::set_default_value( $default_value )` now works for all fields including complex fields. Refer to the "Predefined Complex Groups" guide for an example.
	This means that you can predefine complex groups or assign a default attachment by ID for a file field.

- `carbon_get_*` functions no longer require a $type parameter.
	Getter functions now always return values in an appropriate format (checkbox will be a real boolean; association will return a nested array with type, subtype and id; complex fields will return all child fields with their appropriate format as well).

- Added `carbon_set_*( $field_name, $value )` functions which allow you to update field values.
	$value should be identical to what you would get from `carbon_get_*` functions. This works for complex fields as well so you can fill in multiple values in nested complex fields even.

- Rewrote container conditions. `show_on_*` and `hide_on_*` methods are now deprecated in favor of the new solution. Refer to the Conditional Display documentation page for more information.
	A new generic and extensible way has been added to replace these methods through the `where()` and `or_where()` methods.

- Added full REST API support out of the box.
	By default no fields are visible in REST but you can toggle that using the `set_visible_in_rest_api()` method.

- Added `Hidden_Field`.
	This field behaves as you'd expect - it is not visible but will store a value. You can interact with it through the JavaScript API, for example.

- Added `Field::set_classes( $classes )` and `Container::set_classes( $classes )` methods to allow you to add css classes to fields and containers.

- `Date_Field`, `Time_Field` and `Date_Time_Field` now always store their values in `Y-m-d`, `H:i:s` and `Y-m-d H:i:s` respectively regardless of the set display format. This allows you to adjust the user experience without affecting the back-end storage format.

- `Post_Meta_Container::set_context( $context )` now supports `'carbon_fields_after_title'` which adds the container between the post title and content editor.

- Added `Color_Field::set_palette( $palette )` which allows you to specify a pre-defined list of colors to add to the color picker.

- Added `Field::set_attribute( $name, $value )` which allows you to override a number of attributes on fields based on `<input>` and `<textarea>`.
	Examples:
	- You can change a field's type to be "email"
	- You can add the placeholder attribute
	- etc.

- Added `Theme_Options_Container::set_page_position( $position )` which allows you to override the container position in the administration menu.