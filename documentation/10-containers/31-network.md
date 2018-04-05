# Network

Network containers are used to add pages with options in the Multisite network administration only. Field data is stored as site meta.

Since the Network container extends the Theme Options container, please refer to the Theme Options container documentation for more information.

### Example Container

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'network', 'crb_network_container', 'Network Settings' )
  ->add_fields( array(
    Field::make( 'text', 'crb_title' ) ,
    Field::make( 'checkbox', 'crb_disable_feature' )
  )
);
```

### Accessing field values

To retrieve field values from a network options container, you need to use the function `carbon_get_network_option( $site_id, $name, $container_id )`, where:


| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$site_id`           | The site ID of the current network (example: `SITE_ID_CURRENT_SITE`)                 |
| `$name`              | The field name pattern of the field to be retrieved.                                 |
| `$container_id`      | The container ID that contains the field. In the example above, `crb_network_container`. |

```php
<h1>This is my title: <?php echo carbon_get_network_option( SITE_ID_CURRENT_SITE, 'crb_title', 'carbon_fields_container_crb_network_container' ); ?></p>
```

After saving, the `carbon_fields_network_container_saved` hook is called, which allows you to hook additional functionality after saving.
