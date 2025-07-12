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
    customFields: {
        supportEmail: process.env.SUPPORT_EMAIL,
    },
    themeConfig: {
        navbar: {
            title: ' ',
            logo: {
                alt: 'ChargePi Logo',
                src: 'img/Logo.svg'
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    label: 'ChargePi',
                    position: 'left',
                },
                {
                    type: 'doc',
                    docId: 'intro',
                    label: 'ChargeFlow CLI',
                    docsPluginId: 'chargeflow-docs',
                    position: 'left',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/ChargePi',
                    position: 'right',
                    className: 'navbar__github',
                    'aria-label': 'GitHub'
                }
            ]
        },
        footer: {
            style: 'dark',
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
                id: 'chargeflow-docs',
                path: 'chargeflow',
                routeBasePath: 'chargeflow',
            }
        ]
    ]
};