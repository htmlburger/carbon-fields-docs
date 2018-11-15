# Rich Text

This field renders the built-in WordPress tinyMCE WYSIWYG editor.

`Field::make( 'rich_text', 'crb_sidenote', 'Sidenote Content' )`

## Usage

The data retrieved from a Rich Text field will generally need to be manually filtered in order to display properly. Simply echoing the field will lead to improperly formatted paragraphs.

### Applying wpautop filter
This is the minimum you'll want to do. This will fix your paragraphs, but won't process shortcodes or perform other text enhancements (wp_texturize).

`echo wpautop( carbon_get_the_post_meta('crb_sidenote') );`

### Applying all standard content filters
This will apply the same set of filters used on standard Wordpress post content.

`echo apply_filters( 'the_content', carbon_get_the_post_meta('crb_sidenote') );`
