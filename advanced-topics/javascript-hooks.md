# JavaScript Hooks

To modify the behavior of existing fields, Carbon Fields exposes several hooks.

See [@wordpress/hooks](https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-hooks/ ) for more details about the usage of the hooks module.

---

#### Containers

?> `carbon-fields.register-container-type`

Used to filter the container settings. It receives the type of the container, the rendering context and the React component used to render the content as arguments.

?> `carbon-fields.<type>.<context>`

Used to modify the container's component. It receives the original Container component and returns a new wrapped component.

**Note:** The context can be `classic` or `gutenberg`.

---

#### Fields

?> `carbon-fields.register-field-type`

Used to filter the field settings. It receives the type of the field, the rendering context and the React component used to render the field as arguments.

?> `carbon-fields.field-wrapper`

Used to modify the field's wrapper component. It receives the original FieldWrapper component and returns a new wrapped component.

?> `carbon-fields.field-wrapper.<context>`

Same as `carbon-fields.field-wrapper` but for a specific context.

**Note:** The context can be `metabox` or `block`.

?> `carbon-fields.field-edit`

Used to modify the field’s edit component. It receives the original FieldEdit component and returns a new wrapped component.

?> `carbon-fields.field-edit.<context>`

Same as `carbon-fields.field-edit` but for a specific context.

**Note:** The context can be `metabox` or `block`.

?> `carbon-fields.<type>.<context>`

Same as `carbon-fields.field-edit` but for a specific field type and context.

**Note:** The context can be `metabox` or `block`.

?> `carbon-fields.<type>.validate`

Used to validate a required field. It receives the field and the value and returns a string that
contains the validation error.
