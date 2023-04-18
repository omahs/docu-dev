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
  tutorialSidebar: [
    {
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "smart-contract/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "Code",
          items: [
            {
              type: "doc",
              id: "smart-contract/code/prerequisites",
            },
            {
              type: "doc",
              id: "smart-contract/code/webassembly-module",
              label: "WebAssembly Module",
            },
            {
              type: "doc",
              id: "smart-contract/code/sdk",
              label: "WebAssembly Module",
            },
          ],
        },
      ],
    },
  ],

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
};

module.exports = sidebars;
