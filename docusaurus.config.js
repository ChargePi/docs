const {themes} = require('prism-react-renderer');
const darkCodeTheme = themes.github;
const lightCodeTheme = themes.dracula;

require('dotenv').config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'ChargePi',
    tagline: 'A configurable, modular, open source charge point',
    url: process.env.DOCUSAURUS_BASE_URL || 'http://localhost:3000',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ChargePi',
    projectName: 'ChargePi',
    i18n: {defaultLocale: 'en', locales: ['en']},
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'ChargePi Logo',
                src: 'img/Logo.svg'
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Docs',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            docId: 'running-the-client',
                            label: 'ChargePi',
                            docsPluginId: 'docs-chargepi',
                        },
                    ],
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/ChargePi',
                    label: 'GitHub',
                    position: 'right'
                }

            ]
        },
        footer: {
            // style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'ChargePi',
                            to: '/docs/chargepi'
                        },
                    ]
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ChargePi'
                        }
                    ]
                }
            ],
            copyright: `Copyright © 2022-${new Date().getFullYear()} ChargePi.`
        },
        docs: {sidebar: {autoCollapseCategories: true, hideable: true}},
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['go', 'python', 'bash', 'docker', 'diff', 'json'],
        },
        customCss: require.resolve('./src/style/globals.css'),
        languageTabs: [
            {highlight: 'python', language: 'python', logoClass: 'python'},
            {highlight: 'bash', language: 'curl', logoClass: 'curl'},
            {highlight: 'csharp', language: 'csharp', logoClass: 'csharp'},
            {highlight: 'go', language: 'go', logoClass: 'go'},
            {highlight: 'javascript', language: 'nodejs', logoClass: 'nodejs'},
            {highlight: 'java', language: 'java', logoClass: 'java', variant: 'unirest'},
            {highlight: 'dart', language: 'dart', logoClass: 'dart'},
            {highlight: 'javascript', language: 'javascript', logoClass: 'javascript'},
            {highlight: 'c', language: 'c', logoClass: 'c'},
            {highlight: 'objective-c', language: 'objective-c', logoClass: 'objective-c'},
            {highlight: 'swift', language: 'swift', logoClass: 'swift'},
            {highlight: 'kotlin', language: 'kotlin', logoClass: 'kotlin'},
            {highlight: 'rust', language: 'rust', logoClass: 'rust'}
        ]
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ChargePi/ChargePi-docs/edit/master/'
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/ChargePi/ChargePi-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/style/globals.css')
                }
            }
        ]
    ],
    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                indexPages: true,
                docsRouteBasePath: '/docs',
                hashed: true,
                language: ['en'],
                highlightSearchTermsOnTargetPage: false,
                searchResultContextMaxLength: 50,
                searchResultLimits: 8,
                searchBarShortcut: true,
                searchBarShortcutHint: true
            }
        ],
        // 'docusaurus-theme-openapi-docs'
    ],
    plugins: [
        ['./src/plugins/tailwind-config.js', {}],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-chargepi',
                path: 'chargepi/',
                routeBasePath: '/docs/chargepi',
                sidebarPath: './sidebars.js',
            },
        ],
    ]
};