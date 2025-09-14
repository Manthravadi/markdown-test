import { themes as prismThemes } from "prism-react-renderer";
import type { Config, Plugin } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function aliasPlugin(): Plugin {
  return {
    name: "alias-plugin",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@components": path.resolve(__dirname, "src/components"),
          },
        },
      };
    },
  };
}

const config: Config = {
  title: "Products",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  headTags: [
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } },
    { tagName: "meta", attributes: { name: "emotion-insertion-point" } },
  ],
  stylesheets: ["https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"],

  url: "https://manthravadi.github.io",
  baseUrl: "/markdown-test/",
  organizationName: "manthravadi",
  projectName: "markdown-test",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  future: { v4: true },

  presets: [
    [
      "classic",
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/", // docs ARE the homepage
          sidebarPath: "./sidebars.ts",
          // editUrl: "https://github.com/Manthravadi/markdown-test/edit/main/",
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [require.resolve("./src/plugins/webpack-avif-webp-loader"), aliasPlugin],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: { defaultMode: "light", respectPrefersColorScheme: false, disableSwitch: true },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      // title: "Products",
      items: [{ type: "docSidebar", sidebarId: "tutorialSidebar", label: "Products", position: "left", className: "nav-center" }],
      logo: {
        alt: "Microchip",
        src: "img/logos/microchip-fpga.png",
      },
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     { title: "Docs", items: [{ label: "Home", to: "/" }] },
    //     { title: "More", items: [{ label: "GitHub", href: "https://github.com/Manthravadi/markdown-test" }] },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project`,
    // },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
