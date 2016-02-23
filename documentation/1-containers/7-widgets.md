# Widgets

Widget containers are used to create custom widgets for your theme. Each widget is defined as a PHP class. Widget classes must extend the `Widget` class and must have at least two methods – constructor `__construct()` and `front_end()`.

The constructor must be named after the class and it must call the method `setup($name, $description, $fields, $classname)`, where:

| Parameter                 | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `$name`                   | Name of the widget, used in the back-end                      |
| `$description`            | Description of the widget, used in the back-end               |
| `$fields`                 | Array of fields                                               |
| `$classname` *(optional)* | Provide a custom class attribute for the widget.              |

The `front_end($args, $instance)` method is responsible for rendering your widget in the front-end. Here you have access to all values saved for the fields you defined in the constructor via the `$instance` parameter.

After you define your class, it is important that you register your new widget during the `widgets_init` action.

```php
use Carbon_Fields\Widget\Widget;
use Carbon_Fields\Field\Field;

class ThemeWidgetExample extends Widget {
	// Register widget function. Must have the same name as the class
	function __construct() {
		$this->setup('Theme Widget - Example', 'Displays a block with title/text', array(
			Field::make('text', 'title', 'Title')->set_default_value('Hello World!'),
			Field::make('textarea', 'content', 'Content')->set_default_value('Lorem Ipsum dolor sit amet')
		));
	}
	
	// Called when rendering the widget in the front-end
	function front_end($args, $instance) {
		echo $args['before_title'] . $instance['title'] . $args['after_title'];
		echo '<p>' . $instance['content'] . '</p>';
	}
}

function load_widgets() {
	register_widget('ThemeWidgetExample');
}
```

And you should add the following hook to your theme functions.php:

```php
add_action('widgets_init', 'load_widgets');
```

You can setup control options (like width) of your widget by adding a `$form_options` definition at beginning of your custom widget class. Example:

```php
protected $form_options = array(
	'width' => 500
);
```

In case you want to disable the default widget wrappers that come from your sidebar, you can disable `$this->print_wrappers` in the `__construct()` method of your widget. Example:

```php
function __construct() {
	$this->setup('Widget Title', __('Widget Description'), array(
		Field::make('text', 'title', 'Title')->set_default_value('Hello World!'),
	));

	$this->print_wrappers = false;
}
```