# Field In A Theme

Carbon Fields allows you to define custom fields inside your theme if you have theme-specific fields that you do not intend to distribute separately:

1. Execute `git clone https://github.com/htmlburger/carbon-field-template.git --single-branch --depth 1 includes/my-field` in your theme dir
1. Delete the `includes/my-field/.git` directory
1. Add the following to your theme's composer.json:
	```js
	"autoload": {
        "files": [
            "./includes/my-field/field.php"
        ],
        "psr-4": {
            "Carbon_Field_YOURFIELDNAME\\": "./includes/my-field/core/"
        }
    }
    ```
1. Call `composer dumpautoload`
1. Browse to the `includes/my-field` directory
1. Call `npm install`
1. Edit `includes/my-field/webpack.config.js` and adjust the `const root` variable to point to the directory of Carbon Fields (e.g. `const root = path.resolve(__dirname, '../../vendor/includes/htmlburger/carbon-fields');`)
1. Call `npm run build`
1. You now have a local custom field running from your theme
1. If the field is theme-specific and will not be distributed separately feel free to delete the `composer.json` and `composer.lock` files.