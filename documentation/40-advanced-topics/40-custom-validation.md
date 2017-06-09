# Adding custom validation to containers

You can add your own custom JavaScript validation to containers by directly hooking onto the submit form like this:

```js
$(document).ready(function() {
    // Hook to the theme options submission form
    $('#theme-options-form').on('submit', function(e) {
        e.preventDefault();
        console.log('Submit prevented!');
    });
});
```

Note that your hook will only be called if Carbon Fields' own validations have passed.  
In order to get field values through JavaScript refer to the JS API documentation page.