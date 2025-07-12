import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import ProtectedEmail from './ProtectedEmail';

export default function CustomFooter() {
    const {siteConfig} = useDocusaurusContext();
    const {themeConfig} = siteConfig;
    const {footer} = themeConfig;

    if (!footer) {
        return null;
    }

    const {links, copyright} = footer;

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Contacts Section */}
                    <div className="col footer__col">
                        <div className="footer__title">Contact</div>
                        <ul className="footer__items">
                            {siteConfig.customFields?.supportEmail && (
                                <li className="footer__item">
                                    <ProtectedEmail />
                                </li>
                            )}
                            <li className="footer__item">
                                <a href="https://github.com/ChargePi" target="_blank" rel="noopener noreferrer" className="footer__github" aria-label="GitHub">
                                    <span style={{marginLeft: '0.5rem'}}>GitHub</span>
                                </a>
                            </li>
                            {/* Uncomment and update if you want to add LinkedIn or other contacts */}
                            {/*
                            <li className="footer__item">
                                <a href="https://linkedin.com/company/chargepi" target="_blank" rel="noopener noreferrer" className="footer__linkedin" aria-label="LinkedIn">
                                    <span style={{marginLeft: '0.5rem'}}>LinkedIn</span>
                                </a>
                            </li>
                            */}
                        </ul>
                    </div>
                    {/* Existing footer links, if any */}
                    {links && links.map((linkItem, i) => (
                        <div key={i} className="col footer__col">
                            <div className="footer__title">{linkItem.title}</div>
                            <ul className="footer__items">
                                {linkItem.items.map((item, j) => {
                                    const toUrl = item.to ? `${siteConfig.baseUrl}${item.to}` : undefined;
                                    const href = item.href;
                                    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
                                    if (item.className === 'footer__email') {
                                        // Only render email section if environment variable is available
                                        if (!siteConfig.customFields?.supportEmail) {
                                            return null; // Don't render the list item if no email
                                        }
                                        return (
                                            <li key={j} className="footer__item">
                                                <ProtectedEmail />
                                            </li>
                                        );
                                    }
                                    return (
                                        <li key={j} className="footer__item">
                                            {href ? (
                                                <a
                                                    href={href}
                                                    {...(isExternal && {
                                                        target: '_blank',
                                                        rel: 'noopener noreferrer',
                                                    })}
                                                    className={item.className}
                                                    {...(item['aria-label'] && {
                                                        'aria-label': item['aria-label'],
                                                    })}>
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={toUrl}
                                                    className={item.className}
                                                    {...(item['aria-label'] && {
                                                        'aria-label': item['aria-label'],
                                                    })}>
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Modern footer bottom with enhanced styling */}
                <div className="footer__bottom text--center">
                    <div className="footer__copyright">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ 
                                display: 'inline-block', 
                                padding: '0.5rem 1rem',
                                background: 'rgba(255, 107, 53, 0.1)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                {copyright}
                            </span>
                        </div>
                        <div style={{ 
                            fontSize: '0.8rem', 
                            opacity: '0.6',
                            marginTop: '0.5rem'
                        }}>
                            Built with ❤️ using Docusaurus
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 