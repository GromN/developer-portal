/**
 * @type {import('redocusaurus').PresetEntry}
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */

const config = {
  presets: [
    /**
     * Docusaurus Config *
     */
    [
      "@docusaurus/preset-classic",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve("./src/css/custom.css")] },
        docs: {
          id: "useCases",
          path: "use-cases",
          routeBasePath: "use-cases",
          sidebarPath: require.resolve("./sidebarsUseCases.js"),
          remarkPlugins: [require("mdx-mermaid")],
          showLastUpdateTime: true,
          editUrl: "https://github.com/Capitalise/developer-portal/edit/main",
        },
      },
    ],
    /**
     * Redocusaurus Config *
     */
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "platform-v1",
            spec: "./openapi/platform-v1.yaml",
            route: "/api/platform",
          },
          {
            id: "business-v1",
            spec: "./openapi/business-v1.yaml",
            route: "/api/business",
          },
          {
            id: "marketplace-v1",
            spec: "./openapi/marketplace-v1.yaml",
            route: "/api/marketplace/v1",
          },
          {
            id: "marketplace-v2",
            spec: "./openapi/marketplace-v2.yaml",
            route: "/api/marketplace/v2",
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: "#1890ff",
          /**
           * Options to pass to redoc
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          options: {
            disableSearch: false,
            sideNavStyle: "path-only",
            sortTagsAlphabetically: true,
            sortEnumValuesAlphabetically: true,
            sortPropsAlphabetically: true,
            jsonSampleExpandLevel: true,
            showObjectSchemaExamples: true,
            expandResponses: "all",
            showChangeLayoutButton: true,
            showRightPanelToggle: true,
            pathInMiddlePanel: true,
            schemaExpansionLevel: "all",
          },
          /**
           * Options to pass to override RedocThemeObject
           * @see https://github.com/Redocly/redoc#redoc-theme-object
           */
          theme: {},
        },
      },
    ],
  ],

  plugins: [
    /**
     * Local search *
     */
    require.resolve("@cmfcmf/docusaurus-search-local"),
    "@docusaurus/theme-live-codeblock",
    require.resolve("docusaurus-plugin-image-zoom"),
  ],
  title: "Capitalise.com Developer Portal",
  tagline:
    "Bring credit scores, business insights and access to financial products into your product using our ready-to-go API",
  customFields: {
    meta: {
      description: this.tagline,
    },
  },
  url: process.env.DEPLOY_PRIME_URL || "https://developer.capitalise.com",
  baseUrl: process.env.DEPLOY_BASE_URL || "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "capitalise",
  projectName: "developer-portal",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  themeConfig: {
    zoom: {
      selector: ".markdown :not(em) > img",
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
    navbar: {
      logo: {
        alt: "Capitalise.com Developer Portal",
        src: "img/logo.svg",
      },
      style: "primary",
      items: [
        {
          label: "Use cases",
          position: "left",
          to: "/use-cases",
        },
        {
          label: "Platform",
          to: "/api/platform",
        },
        {
          label: "Business",
          to: "/api/business",
        },
        {
          label: "Marketplace",
          to: "/api/marketplace/v1",
          position: "left",
          items: [
            {
              label: "v1 (live)",
              to: "/api/marketplace/v1",
            },
            {
              label: "v2 (beta)",
              to: "/api/marketplace/v2",
            },
          ],
        },
      ],
    },
    announcementBar: {
      id: "business_api",
      content:
        '🎉 <a target="_blank" rel="noopener noreferrer" href="#">Business API</a> is live and now you can <a target="_blank" rel="noopener noreferrer" href="#">natively show business credit profile</a> in your platform',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Capitalise.com Platform Ltd",
          items: [
            {
              html: `<p>2 Valentine Place, London. SE1 8QH</p>`,
            },
            {
              html: `<p>Capitalise.com Platform Ltd, trading as Capitalise, is authorised and regulated by the Financial Conduct Authority for regulated credit agreements. Capitalise is a credit broker not a lender.</p>`,
            },
          ],
        },
        {
          title: "Useful information",
          items: [
            {
              label: "About Us",
              href: "https://capitalise.com/gb/about",
            },
            {
              label: "Careers",
              href: "https://capitalise.homerun.co",
            },
            {
              label: "FAQs",
              href: "https://capitalise.com/gb/faq",
            },
          ],
        },
        {
          title: "Contacts",
          items: [
            {
              label: "Call us on 020 8038 1151",
              href: "tel:02080381151",
            },
            {
              label: "support@capitalise.com",
              href: "mailto:support@capitalise.com",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/capitalisers/mycompany/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Capitalisers",
            },
          ],
        },
        {
          title: "Legal stuff",
          items: [
            {
              label: "Website Terms of Use",
              href: "https://capitalise.com/gb/legal/website-terms-of-use",
            },
            {
              label: "Privacy policy",
              href: "https://capitalise.com/gb/legal/privacy-policy",
            },
          ],
        },
      ],
      copyright: `Copyright © 2016-${new Date().getFullYear()} <a href="https://capitalise.com" target="_blank">Capitalise.com</a>`,
    },
    liveCodeBlock: {
      playgroundPosition: "top",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["powershell", "bash"],
    },
  },
};

module.exports = config;
