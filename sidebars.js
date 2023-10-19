/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //apiSidebar: [{type: 'autogenerated', dirName: 'api'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  apiSidebar: [
    'api/api-auth',
    {
      type: 'category',
      label: 'API tutorials',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Lightning',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'USD',
              collapsed: true,
              items: [
                'api/usd-ln-receive',
                'api/usd-ln-send',
              ],
            },
            {
              type: 'category',
              label: 'BTC',
              collapsed: true,
              items: [
                'api/btc-ln-receive',
                'api/btc-ln-send',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Onchain',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'USD',
              collapsed: true,
              items: [
                'api/usd-onchain-receive',
                'api/usd-onchain-send',
              ],
            },
            {
              type: 'category',
              label: 'BTC',
              collapsed: true,
              items: [
                'api/btc-onchain-receive',
                'api/btc-onchain-send',
              ],
            },
          ],
        },
      ],
    },
    'api/postman',
    'api/learn-more'
  ],
};

module.exports = sidebars;
