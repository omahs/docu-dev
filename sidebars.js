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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  learnSidebar: [
    {
      type: "doc",
      id: "learn/home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Massa Features </small></b></span>"
    },
    {
      type: "doc",
      id: "learn/decentralized-web",
    },
    {
      type: "doc",
      id: "learn/autonomous-sc",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Massa Architecture </small></b></span>"
    },
    {
      type: "doc",
      id: "learn/architecture",
    },
  ],
  buildSidebar: [
    {
      type: "doc",
      id: "build/home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Build a dApp </small></b></span>"
    },
    {
      type: "doc",
      id: "build/quickstart",
    },
    {
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "build/smart-contract/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "Develop",
          items: [
            {
              type: "doc",
              id: "build/smart-contract/prerequisites",
            },
            {
              type: "doc",
              id: "build/smart-contract/webassembly-module",
              label: "WebAssembly Module",
            },
            {
              type: "doc",
              id: "build/smart-contract/sdk",
              label: "WebAssembly Module",
            },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "build/frontend",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Developer Tools </small></b></span>"
    },
    {
      type: "doc",
      id: "build/sdks",
    },
    {
      type: "doc",
      id: "build/explorers",
    },
    {
      type: "category",
      label: "Wallets",
      items: [
        {
          type: "doc",
          id: "build/wallet/wallet-provider",
        },
        {
          type: "doc",
          id: "build/wallet/massa-station",
        },
        {
          type: "doc",
          id: "build/wallet/community-wallets",
        },
      ],
    },
    {
      type: "doc",
      id: "build/networks-faucets",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> API and RPC </small></b></span>"
    },
    {
      type: "doc",
      id: "build/api",
    },
    {
      type: "doc",
      id: "build/massa-web3",
    },
    {
      type: "doc",
      id: "build/providers",
    },
  ],
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorial/home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Simple Examples </small></b></span>"
    },
    {
      type: "doc",
      id: "tutorial/helloworld",
    },
    {
      type: "doc",
      id: "tutorial/counter",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Advanced Examples </small></b></span>"
    },
    {
      type: "doc",
      id: "tutorial/coin",
    },
    {
      type: "doc",
      id: "tutorial/nft",
    },
    {
      type: "doc",
      id: "tutorial/blog",
    },
  ],
  nodeSidebar: [
    {
      type: "doc",
      id: "node/home",
      label: "Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Running a Node </small></b></span>"
    },
    {
      type: "doc",
      id: "node/install",
      label: "Installing a node",
    },
    {
      type: "doc",
      id: "node/run",
      label: "Running a node",
    },
    {
      type: "doc",
      id: "node/update",
      label: "Updating a node",
    },
    {
      type: "doc",
      id: "node/wallet",
      label: "Creating a wallet",
    },
    {
      type: "doc",
      id: "node/stake",
      label: "Staking",
    },
    {
      type: "doc",
      id: "node/routability",
      label: "Routability",
    },
    {
      type: "doc",
      id: "node/reward",
      label: "Testnet Staking Rewards Program",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> FAQ and Community </small></b></span>"
    },
    {
      type: "doc",
      id: "node/faq",
      label: "Frequently Asked Questions",
    },
    {
      type: "doc",
      id: "node/tutorials",
      label: "Tutorials and community resources",
    },
  ],
};

module.exports = sidebars;
