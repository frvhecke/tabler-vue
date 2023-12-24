export function getDemoNavItems()
{
  return [
    { heading: 'Forms & Tables' },
    {
      title: 'Home',
      icon: { icon: 'home' },
      to: '/',
    },
    {
      title: 'Interface',
      icon: { icon: 'package' },
      columns: [
        {
          children: [
            { title: 'Alerts', to: '/interface/alerts' },
            { title: 'Accordion', to: '/interface/accordion' },
            { title: 'Authentication', to: '/interface/authentication' },
            { title: 'Blank page', to: '/interface/blank' },
            { 
              title: 'Badges',
              to: '/interface/badges',
              badge: { text: 'new', color: 'green-lt' }
            },
            { title: 'Buttons', to: '/interface/buttons' },
            { 
              title: 'Cards', 
              to: '/interface/cards',
              children: [
                { title: 'Sample cards', to: '/interface/cards' },
                { title: 'Card actions', to: '/interface/card-actions' },
                { title: 'Cards masonry', to: '/interface/cards-masonry' },
              ]
            },
            { title: 'Carousel', to: '/interface/badges' },
            { title: 'Charts', to: '/interface/buttons' },
            { title: 'Colors', to: '/interface/colors' },
            { title: 'Color picker', to: '/interface/badges' },
            { title: 'Data grid', to: '/interface/buttons' },
            { title: 'Datatables', to: '/interface/cards' },
            { title: 'Drop downs', to: '/interface/badges' },
            { title: 'Dropzone', to: '/interface/buttons' },
            { title: 'Error pages', to: '/interface/cards' },
            { title: 'Flags', to: '/interface/badges' },
            { title: 'Inline player', to: '/interface/buttons' },
          ]
        },
        {
          children: [
            { title: 'Lightbox', to: '/interface/lightbox' },
            { title: 'Lists', to: '/interface/list' },
            { title: 'Modal', to: '/interface/modal' },
            { title: 'Map', to: '/interface/map' },
            { title: 'Map fullsize', to: '/interface/map-fullsize' },
            { title: 'Map vector', to: '/interface/map-vector' },
            { title: 'Markdown', to: '/interface/markdown' },
            { title: 'Navigation', to: '/interface/navigation' },
            { title: 'Offcanvas', to: '/interface/offcanvas' },
            { title: 'Pagination', to: '/interface/pagination' },
            { title: 'Placeholder', to: '/interface/placeholder' },
            { title: 'Steps', to: '/interface/steps' },
            { title: 'Stars rating', to: '/interface/star-rating' },
            { title: 'Tabs', to: '/interface/tabs' },
            { title: 'Tags', to: '/interface/tags' },
            { title: 'Tables', to: '/interface/tables' },
            { title: 'Typography', to: '/interface/typography' },
            { title: 'TinyMCE', to: '/interface/tinymce' },
          ]
        }
      ],
    },
    {
      title: 'Form elements',
      icon: { icon: 'checkbox' },
      to: '/form-elements',
    },
    {
      title: 'Extra',
      icon: { icon: 'star' },
      columns: [
        {
          children: [
            { title: 'Empty page', to: '/layout/horizontal' },
            { title: 'Cookie banner', to: '/layout/boxed' },
            { title: 'Chat', to: '/layout/vertical' },
            { title: 'Activity', to: '/layout/vertical-transparent' },
            { title: 'Gallery', to: '/layout/right-vertical' },
            { title: 'Invoice', to: '/layout/condensed' },
            { title: 'Search results', to: '/layout/combined' },
            { title: 'Pricing cards', to: '/layout/vertical-transparent' },
            { title: 'Pricing table', to: '/layout/right-vertical' },
            { title: 'FAQ', to: '/layout/condensed' },
            { title: 'Users', to: '/layout/combined' },
            { title: 'License', to: '/layout/combined' },
          ]
        },
        {
          children: [
            { title: 'Logs', to: '/layout/navbar-dark' },
            { title: 'Music', to: '/layout/navbar-sticky' },
            { title: 'Photogrid', to: '/layout/navbar-overlap' },
            { title: 'Tasks', to: '/layout/rtl' },
            { title: 'Uptime monitor', to: '/layout/fluid' },
            { title: 'Widgets', to: '/layout/fluid-vertical' },
            { title: 'Wizard', to: '/layout/fluid-vertical' },
            { title: 'Settings', to: '/layout/fluid-vertical' },
            { title: 'Trial ended', to: '/layout/fluid-vertical' },
            { title: 'Job listing', to: '/layout/fluid-vertical' },
            { title: 'Page loader', to: '/layout/fluid-vertical' },
          ]
        }
      ],
    },
    {
      title: 'Layouts',
      icon: { icon: 'layout-2' },
      columns: [
        {
          children: [
            { title: 'Horizontal', to: '/layout/horizontal' },
            { title: 'Boxed', to: '/layout/boxed' },
            { title: 'Vertical', to: '/layout/vertical' },
            { title: 'Vertical transparent', to: '/layout/vertical-transparent' },
            { title: 'Right vertical', to: '/layout/right-vertical' },
            { title: 'Condensed', to: '/layout/condensed' },
            { title: 'Combined', to: '/layout/combined' },
          ]
        },
        {
          children: [
            { title: 'Navbar dark', to: '/layout/navbar-dark' },
            { title: 'Navbar sticky', to: '/layout/navbar-sticky' },
            { title: 'Navbar overlap', to: '/layout/navbar-overlap' },
            { title: 'RTL mode', to: '/layout/rtl' },
            { title: 'Fluid', to: '/layout/fluid' },
            { title: 'Fluid vertical', to: '/layout/fluid-vertical' },
          ]
        }
      ],
    },
    {
      title: '4713 icons',
      icon: { icon: 'ghost' },
      to: '/icons',
    },
    {
      title: 'Email templates',
      icon: { icon: 'mail' },
      to: '/icons',
    },
    {
      title: 'Help',
      icon: { icon: 'lifebuoy' },
      children: [
        { title: 'Documentation', to: '/interface/alerts' },
        { title: 'Changelog', to: '/interface/accordion' },
        { title: 'Source code', to: 'https://github.com/tabler/tabler' },
        { 
          title: 'Sponsor project',
          to: 'https://github.com/sponsors/codecalm',
          color: 'red',
          icon: { icon: 'heart', color: 'red' }, },
      ]
    },
  ];
}