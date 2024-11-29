import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = (locale = '') => ({
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas', undefined, locale),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup', undefined, locale),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app', undefined, locale),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal', undefined, locale),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features', undefined, locale),
        },
        {
          text: 'Services',
          href: getPermalink('/services', undefined, locale),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing', undefined, locale),
        },
        {
          text: 'About us',
          href: getPermalink('/about', undefined, locale),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact', undefined, locale),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms', undefined, locale),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy', undefined, locale),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation', undefined, locale),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales', undefined, locale),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through', undefined, locale),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product', undefined, locale),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch', undefined, locale),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription', undefined, locale),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(locale),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post', locale),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post', locale),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category', locale),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag', locale),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
});

export const footerData = (locale = '') => ({
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms', undefined, locale) },
    { text: 'Privacy Policy', href: getPermalink('/privacy', undefined, locale) },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
});
