# Custom Installation Location

When running `composer require htmlburger/carbon-fields` in your WordPress root directory, the plugin will be installed by default in wp-content/plugins.  If you want to install it elsewhere, create a *composer.json* file that looks like this, changing `"content/plugins/{$name}/"` to your desired plugin installation location.

In this example, the *wp-content* folder has been renamed to simply *content*.

```json
{
    "require": {
        "htmlburger/carbon-fields": "^2.0"
    },
    "extra": {
        "installer-paths": {
            "content/plugins/{$name}/": ["type:wordpress-plugin"]
        }
    }
}
```

Now you can run `composer install` and the files will be installed where you've specified.

More information on installation can be found in the [Composer Installers docs](http://composer.github.io/installers/).