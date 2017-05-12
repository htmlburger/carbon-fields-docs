# Templates

Carbon Fields are using the [Underscore](http://underscorejs.org/#template) template engine. Each field has a `template` method that prints the Underscore template code.

```php
use Carbon_Fields\Field;

class Example_Field extends Field {
	// Main template
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<span>This is an example field. </span>
		<?php
	}
}
```

Some fields have more than one template – in those cases the extra templates should be printed in separate methods and registered via `add_template($name, $callback)` method.

```php
use Carbon_Fields\Field;

class Example_Field extends Field {
	function admin_init() {
		// Add the description template
		$this->add_template($this->get_type() . '-Description', array($this, 'template_description'));
	}
	...
	// Description template
	function template_description() {
		?>
		<div class="carbon-description {{{ value ? '' : 'hidden' }}}">
			<p>Some really helpful description.</p>
		</div>
		<?php
	}
}
```

### Template Syntax

`<# ... #>`

Execute arbitrary JavaScript code.

`{{ ... }}`

Interpolate a value.

`{{{ ... }}}`

Interpolate a value, and have it be HTML-escaped.

### Template Variables

The variables that can be used inside a template are added by the `to_json()` PHP method. Here is an example of adding two new variables (rows & height):

```php
// Textarea Field PHP Class
class Textarea_Field extends Field {
	protected $height = 170;
	protected $rows = 0;
	...
	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'rows'   => $this->rows,
			'height' => $this->height,
		));

		return $field_data;
	}
}
```

Template variables can also be added using **JavaScript**, by extending the `templateVariables` object. This should be done on the `field:beforeRender` event. For example:

```js
// File Field Backbone View
carbon.fields.View.File = carbon.fields.View.extend({
	initialize: function() {
		carbon.fields.View.prototype.initialize.apply(this);

		this.on('field:beforeRender', this.loadDescriptionTemplate);
	},
	...
	/**
	 * Loads the description template and sets it as a variable ("description") for the base template
	 */
	loadDescriptionTemplate: function() {
		var type = this.model.get('type');
		var descTemplate = carbon.template(type + '-Description');

		_.extend(this.templateVariables, {
			description: descTemplate(this.templateVariables)
		});
	}
});
```