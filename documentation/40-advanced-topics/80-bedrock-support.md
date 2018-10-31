# Support for Bedrock & similar frameworks

Carbon Fields has assets that need to be in your public directory in order to be loaded which can be problematic with Bedrock. To solve this we are going to use a composer installer package that allows you to override package installation directory on a per-package basis:

1. `composer require mnsami/composer-custom-directory-installer`
1. Add the following to your composer.json (replacing `YOUR_DESIRED_PUBLIC_LOCATION`):
    ```json
    "extra": {
        "installer-paths": {
            "YOUR_DESIRED_PUBLIC_LOCATION/vendor/{$vendor}/{$name}": ["htmlburger/carbon-fields"]
        }
    }
    ```
1. `composer require htmlburger/carbon-fields`
