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
    themeConfig: {
        navbar: {
            title: ' ',
            logo: {
                alt: 'ChargePi Logo',
                src: 'img/Logo.svg'
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Documentation',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            docId: 'intro',
                            label: 'Client',
                        }, {
                            type: 'doc',
                            docId: 'hardware',
                            label: 'Hardware',
                            docsPluginId: 'docs-hardware',
                        }, {
                            type: 'doc',
                            docId: 'modem-setup',
                            label: 'Services',
                            docsPluginId: 'docs-services',
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
            //style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Client',
                            to: '/docs/intro'
                        }, {
                            label: 'Hardware',
                            to: '/hardware/hardware'
                        }, {
                            label: 'Services',
                            to: '/services/modem-setup'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/chargepi'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/chargepi'
                        }
                    ]
                },
                {
                    title: 'More',
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
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['go', 'python', 'bash', 'docker', 'diff', 'json'],
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ChargePi/ChargePi-docs/edit/master/'
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/ChargePi/ChargePi-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ], plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-hardware',
                path: 'docs-hardware',
                routeBasePath: 'hardware',
            },
        ], [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-services',
                path: 'docs-services',
                routeBasePath: 'services',
            }
        ]
    ]
};