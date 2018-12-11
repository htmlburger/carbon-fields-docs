# Section-based page layout / Flexible Content

In this guide, we'll create a section-based template which provides the end user with multiple section types that they can mix and match to their desire to build a unique page layout.

For people coming from the ACF world: this guide shows the alternative of [Flexible Content](https://www.advancedcustomfields.com/resources/flexible-content/) field. 

##### Add the following to your theme's `functions.php`

```php
add_action( 'carbon_fields_register_fields', 'crb_attach_post_options' );
function crb_attach_post_options() {
    Container::make( 'post_meta', __( 'Section Options' ) )
        ->where( 'post_type', '=', 'page' )
        ->where( 'post_template', '=', 'template-section-based.php' )
        ->add_fields( array(
            Field::make( 'complex', 'crb_sections', 'Sections' )
                // Our first group will be a simple rich text field
                ->add_fields( 'text', 'Text', array(
                    Field::make( 'rich_text', 'text', 'Text' ),
                ) )

                // Second group will be a list of files for users to download
                ->add_fields( 'file_list', 'File List', array(
                    Field::make( 'complex', 'files', 'Files' )
                        ->add_fields( array(
                            Field::make( 'file', 'file', 'File' ),
                        ) ),
                ) )

                // Third group will be a list of manually selected posts
                // used as a simple curated "Related posts" listing
                ->add_fields( 'related_posts', 'Related Posts', array(
                    Field::make( 'association', 'posts', 'Posts' )
                        ->set_types( array(
                            array(
                                'type' => 'post',
                                'post_type' => 'post',
                            ),
                        ) ),
                ) ),
        ) );
}
```

##### Add the following to a new file and name it `template-section-based.php`
    
```php
<?php
/*
Template Name: Section-based
*/
?>
<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
    <?php
    $sections = carbon_get_the_post_meta( 'crb_sections' );
    foreach ( $sections as $section ) {
        switch ( $section['_type'] ) {
            case 'text':
                ?>
                <div class="section-text">
                    <?php echo wpautop( $section['text'] ); ?>
                </div>
                <?php
                break;
            case 'file_list':
                ?>
                <div class="section-file-list">
                    <h2>Resorces:</h2>
                    <ul>
                        <?php foreach ( $section['files'] as $file_item ) : ?>
                            <li>
                                <a href="<?php echo wp_get_attachment_url( $file_item['file'] ); ?>" target="_blank"><?php echo get_the_title( $file_item['file'] ); ?></a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php
                break;
            case 'related_posts':
                ?>
                <div class="section-related-posts">
                    <h2>Related posts:</h2>
                    <ul>
                        <?php foreach ( $section['posts'] as $post_item ) : ?>
                            <li>
                                <a href="<?php echo get_the_permalink( $post_item['id'] ); ?>"><?php echo get_the_title( $post_item['id'] ); ?></a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php
                break;
        }
    }
    ?>
<?php endwhile; ?>

<?php get_footer(); ?>
```

_Note: This template is the simplest way to implement this functionality and can certainly be improved upon._

With these 2 snippets you now have a section-based page template that you can assign to any page.