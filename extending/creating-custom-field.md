# Creating Custom Field

Creating new custom fields has been made easier with the release of the latest version.

To add the new field begin by downloading our [field template](https://github.com/htmlburger/carbon-field-template) and place it in within your current theme. Then:

- `cd` or open a new terminal window inside the template folder
- Run `composer dump-autoload` to create the `autoload.php` file for the field
- `include` or `require` the `vendor/autoload.php` file inside your `after_setup_theme` function, after the inclusion of the `carbon-fields` autoload script
- Then edit your `wp-config.php` file in your installation root directory and add `define( 'SCRIPT_DEBUG', true );` to allow the loading of the development bundles
- Execute `yarn` or `yarn install` to install the neccessary JavaScript dependencies
- Run `yarn start` to enter development mode.

Now you can start developing the new custom field.

First replace every instance of `yourfieldname` within the template with the name of your field :

- For PHP files separate your field words with underscores like - `Test_Field`
- For JS files use cebab case when defining the field name like -  `test-field` and camel sase for the component name `class TestField extends ...`

