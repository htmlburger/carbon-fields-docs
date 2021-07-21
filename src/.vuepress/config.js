const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Carbon Fields',
  /**
   * Logo
   */
  logo: 'public/logo.png',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2cc76c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'htmlburger/carbon-fields',
    docsDir: 'src',
    docsRepo: 'htmlburger/carbon-fields-docs',
    docsBranch: '3.x',
    editLinks: true,
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'v3.x',
        items: [
            { text: 'Versions', items: [
                { text: 'v3.x', link: '/' },
                { text: 'v2.2', link: 'https://carbonfields.net/docs/?crb_version=2-2-0', target:'_self' },
                { text: 'v2.1', link: 'https://carbonfields.net/docs/?crb_version=2-1-0', target:'_self' },
                { text: 'v2.0', link: 'https://carbonfields.net/docs/?crb_version=2-0-0', target:'_self' },
                { text: 'v1.6', link: 'https://carbonfields.net/docs/?crb_version=v1-6', target:'_self' },
                { text: 'v1.4', link: 'https://carbonfields.net/docs/?crb_version=v1-4', target:'_self' }
            ] }
        ]
      },
      {
        text: 'Guide',
        link: '/guide/using-field-values',
      },
      {
        text: 'Examples',
        link: '/examples/section-layout'
      },
      {
        text: 'Ecosystem',
        items: [
            { text: 'Icon Field', link: 'https://github.com/htmlburger/carbon-field-icon' },
            { text: 'Number Field', link: 'https://github.com/htmlburger/carbon-field-number' },
            { text: 'Yoast', link: 'https://github.com/htmlburger/carbon-fields-yoast' },
        ]
      },
      {
        text: 'Awesome Carbon Fields',
        link: 'https://github.com/htmlburger/awesome-carbon-fields'
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'quickstart',
            'plugin-quickstart',
          ]
        },
        {
          title: 'Containers',
          collapsable: false,
          children: [
            'learn/containers/usage',
            'learn/containers/conditional-display',
            'learn/containers/condition-types',
            'learn/containers/tabs',
            {
                title: 'Types',
                collapsable: false,
                children: [
                    'learn/containers/comment-meta',
                    'learn/containers/gutenberg-blocks',
                    'learn/containers/nav-menu-item',
                    'learn/containers/network',
                    'learn/containers/post-meta',
                    'learn/containers/term-meta',
                    'learn/containers/theme-options',
                    'learn/containers/user-meta',
                    'learn/containers/widgets',
                ]
            }
          ]
        },
        {
          title: 'Fields',
          collapsable: false,
          children: [
            'learn/fields/usage',
            'learn/fields/conditional-logic',
            {
                title: 'Types',
                collapsable: false,
                children: [
                    'learn/fields/association',
                    'learn/fields/checkbox',
                    'learn/fields/color',
                    'learn/fields/complex',
                    'learn/fields/date',
                    'learn/fields/date-time',
                    'learn/fields/file',
                    'learn/fields/footer-scripts',
                    'learn/fields/gravity-form',
                    'learn/fields/header-scripts',
                    'learn/fields/hidden',
                    'learn/fields/html',
                    'learn/fields/image',
                    'learn/fields/map',
                    'learn/fields/media-gallery',
                    'learn/fields/multiselect',
                    'learn/fields/oembed',
                    'learn/fields/radio',
                    'learn/fields/radio-image',
                    'learn/fields/rich-text',
                    'learn/fields/select',
                    'learn/fields/separator',
                    'learn/fields/set',
                    'learn/fields/sidebar',
                    'learn/fields/text',
                    'learn/fields/textarea',
                    'learn/fields/time',
                ]
            }
          ]
        },
        {
          title: 'Advanced Topics',
          collapsable: false,
          children: [
            'learn/advanced-topics/bedrock-support',
            'learn/advanced-topics/compacting-input-vars',
            'learn/advanced-topics/field-name-patterns',
            'learn/advanced-topics/javascript-api',
            'learn/advanced-topics/javascript-hooks',
            'learn/advanced-topics/php-hooks',
            'learn/advanced-topics/queries',
            'learn/advanced-topics/serialized-datastore',
            'learn/advanced-topics/updating-values',
            'learn/advanced-topics/wpml-support',
          ]
        },
        {
          title: 'Extending',
          collapsable: false,
          children: [
            'learn/extending/extending',
            'learn/extending/field-in-a-theme',
            'learn/extending/field-as-a-library',
            'learn/extending/container-conditions',
            'learn/extending/creating-custom-field',
          ]
        },
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'using-field-values',
            'term-meta',
            'repeating-groups',
            'sidebar-options',
          ]
        }
      ],
      '/examples/': [
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'section-layout',
            'simple-social-links'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
