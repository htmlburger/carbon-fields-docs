# Gutenberg Blocks

__WordPress 5__ introduces a new content creation experience with its new editor called [Gutenberg](https://ma.tt/2017/08/we-called-it-gutenberg-for-a-reason/).

__Gutenberg__ is a block-based editor that provides a better and more natural way for creating new content on your website. With Carbon Fields v3 we got you covered and you can start creating stunning blocks for your website.

In order to create a new Gutenberg Block you can still use the already familiar developer-friendly way just like you'd register any other container.

```php
use Carbon_Fields\Block;

Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_render_callback( function ( $block ) {
		?>

		<div class="block">
			<div class="block__heading">
				<h1><?php echo esc_html( $block['heading'] ); ?></h1>
			</div><!-- /.block__heading -->

			<div class="block__image">
				<?php echo wp_get_attachment_image( $block['image'], 'full' ); ?>
			</div><!-- /.block__image -->

			<div class="block__content">
				<?php echo apply_filters( 'the_content', $block['content'] ); ?>
			</div><!-- /.block__content -->
		</div><!-- /.block -->

		<?php
	} );
```

Notice the `->set_render_callback()` method. This allows you to set the output that will be generated from this block both in _Preview_ mode and on the frontend.

`->set_render_callback()` accepts a callback, which should __return__ an HTML string. The callback functions accepts `$block` as the first argument, which contains an array with the entered data in the block.


## Config Methods

?> `set_description( $description )` []( :id=set-description)

This method allows you to set a short text that describes the block. The description is shown in the Block inspector sidebar once you focus on the Block.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_description( __( 'A simple block consisting of a heading, an image and a text content.' ) )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_category( $slug, $title = null, $icon = null )`

Gutenberg blocks can be grouped in different categories. By default, the following come registered out of the box:

 * common
 * formatting
 * layout
 * widgets
 * embed

If you don't specify a category, the block will be assigned to __common__.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_category( 'layout' )
	->set_render_callback( function () {
		// ..
	} );
```

However, if you need to, you can register a new category for your blocks.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_category( 'custom-category', __( 'Custom Category' ), 'smiley' )
	->set_render_callback( function () {
		// ..
	} );
```

The `$icon` argument accepts the slug of a [WordPress Dashicon](https://developer.wordpress.org/resource/dashicons)

?> `set_icon( $icon )`

In addition to setting an icon to block categories, you can set an icon to the block itself.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_icon( 'heart' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_keywords( $keywords = [] )`

This method allows you to set the aliases that help users discover it while searching.

!> You are only allowed to add as much as 3 keywords per block.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_keywords( [ __( 'block' ), __( 'image' ), __( 'content' ) ] )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_preview_mode( $preview = true )`

This methods sets whether the preview mode is available for the block type.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_preview_mode( false )
	->set_render_callback( function () {
		// ..
	} );
```

!> The nested blocks aren't affected by this method. Only their parent can enter in a preview mode.

?> `set_editor_style( $handle )`

You can set a custom stylesheet specific for your block, which will be loaded in the editor in the administration panel.

```php
wp_register_style(
	'crb-my-shiny-gutenberg-block-stylesheet',
	get_stylesheet_directory_uri() . '/css/gutenberg/my-shiny-gutenberg-block.css'
);

Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_editor_style( 'crb-my-shiny-gutenberg-block-stylesheet' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_style( $handle )`

This method is the same as the `set_editor_style`, however, it will load the stylesheet on the frontend as well.

```php
wp_register_style(
	'crb-my-shiny-gutenberg-block-stylesheet',
	get_stylesheet_directory_uri() . '/css/gutenberg/my-shiny-gutenberg-block.css'
);

Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_style( 'crb-my-shiny-gutenberg-block-stylesheet' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_inner_blocks( $nested_blocks = true )`

This method controls the ability of the block to contain nested blocks.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_inner_blocks_position( $position = 'above' )`

This method sets the position at which the inner blocks will render. The possible values are: `above` and `below`.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_inner_blocks_position( 'below' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_inner_blocks_template( $template = null )`

This method allows you to set a template of blocks which every new instance of your block will contain.
The possible values are: `array` and `null`.

See [Gutenberg > Templates](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-templates/#nested-templates) for more details.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_inner_blocks_template( array(
		array( 'core/heading' ),
		array( 'core/paragraph' )
	) )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_inner_blocks_template_lock( $lock = null )`

This method allows you to lock the area that contains the nested blocks.
The possible values are:

- `all` - prevents all operations. It is not possible to insert new blocks. Move existing blocks or delete them.
- `insert` - prevents inserting or removing blocks, but allows moving existing ones.
- `false` - prevents locking from being applied to the nested blocks area even if a parent block contains locking.
- `null` - disables any locks applied to the area.

See [Gutenberg > Templates](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-templates/#locking) and [Gutenberg > Inner Blocks](https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/inner-blocks#templatelock) for more details.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_inner_blocks_template( array(
		array( 'core/heading' ),
		array( 'core/paragraph' )
	) )
	->set_inner_blocks_template_lock( 'insert' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_parent( $parent = null )`

This method allows you to restrict the block to be inserted to specific block types.
The possible values are - `string`, `array` or `null`.

See [Gutenberg > Block Registration](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#parent-optional) for more details.

```php
Block::make( __( 'Product' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_render_callback( function () {
		// ..
	} );

Block::make( __( 'Product Description' ) )
	->add_fields( array(
		// ...
	) )
	->set_parent( 'carbon-fields/product' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_allowed_inner_blocks( $blocks = null )`

This method allows you to restrict the type of blocks that can be inserted in the nested blocks area.
The possible values are - `array` or `null`.

See [Gutenberg > Inner Blocks](https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/inner-blocks#allowedblocks) for more details.

!> If an empty array is passed then only the blocks that have your block as parent can be inserted. See the `set_parent` method.

```php
Block::make( __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		// ...
	) )
	->set_inner_blocks( true )
	->set_allowed_inner_blocks( array(
		'core/paragraph',
		'core/list'
	) )
	->set_render_callback( function () {
		// ..
	} );
```
