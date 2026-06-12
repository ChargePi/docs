import React, {useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '../../static/img/Logo.svg';

function GitHubIcon() {
    return (
        <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                     0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                     -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                     .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                     -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                     .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                     .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                     0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8
                     c0-4.42-3.58-8-8-8z"/>
        </svg>
    );
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--6 animate-on-scroll animate-left">
                        <h1 className="hero__title">
                            Supercharge Your Charging Infrastructure
                        </h1>
                        <p className="hero__subtitle">
                            Cutting-edge charging solutions. From enterprise charging station software to intelligent
                            backend systems, we strive to power the future of electric mobility.
                        </p>
                    </div>
                    <div className="col col--6 animate-on-scroll animate-right">
                        <Logo className={styles.mainImg} alt={siteConfig.title}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

function CompanySection() {
    return (
        <section className={`${styles.companySection} company-section`}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 animate-on-scroll">
                        <h2 className={styles.sectionTitle}>Why us?</h2>
                        <p className={styles.sectionSubtitle}>
                            Three words: innovation, reliability, excellence. Our software solutions are designed to
                            meet the evolving needs of the EV charging industry, providing you with the tools to build
                            and manage state-of-the-art charging infrastructure with confidence and ease.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>🔧 Innovation</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    We build with modern tools and design our solutions with future needs in mind. Our
                                    software platform provides OCPP compliance, real-time monitoring, and
                                    powerful APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>🌐 Transparency</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    We develop transparently - our software is fully open-source with permissive
                                    licences - you can customize, extend, and deploy according to your specific
                                    requirements and use cases.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>⚡ Charging Excellence</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    Our modular charge point framework supports both off-the-shelf and commercial
                                    components, and is designed for reliability and easy maintenance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductsSection() {
    return (
        <section className={`${styles.productsSection} products-section`}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 animate-on-scroll">
                        <h2 className={styles.sectionTitle}>Our Products</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore our suite of solutions designed for reliability, scalability, and ease of
                            deployment.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--6 animate-on-scroll">
                        <div className="card card--product">
                            <div className="card__header">
                                <h3>🔌 ChargePi</h3>
                                <p className="card__subtitle">Customize your charging point in minutes with our open-source framework</p>
                            </div>
                            <div className="card__body">
                                <div className="product-section">
                                    <p>A modular charge point framework with OCPP support out of the box, designed for Linux devices including Raspberry Pi. Pairs hardware components with a clean software abstraction layer.</p>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Key Features</p>
                                    <ul className="product-features">
                                        <li>OCPP 1.6 with core, reservations & local auth</li>
                                        <li>Hardware-agnostic connector model</li>
                                        <li>RFID/NFC reader support (PN532)</li>
                                        <li>LCD display & LED indicator integration</li>
                                        <li>Power meter support (CS5460A)</li>
                                        <li>REST & gRPC API for custom integrations</li>
                                    </ul>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Technical Details</p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">Go</span>
                                        <span className="tech-tag">Svelte</span>
                                        <span className="tech-tag">OCPP 1.6</span>
                                        <span className="tech-tag">gRPC</span>
                                        <span className="tech-tag">Docker</span>
                                        <span className="tech-tag">Linux</span>
                                        <span className="tech-tag">MIT</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <Link className="button button--primary button--lg" to="/docs/intro">View docs</Link>
                                    <Link className="button button--github" href="https://github.com/ChargePi/ChargePi-go" aria-label="View on GitHub"><GitHubIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6 animate-on-scroll">
                        <div className="card card--product">
                            <div className="card__header">
                                <h3>⚙️ ChargeFlow CLI</h3>
                                <p className="card__subtitle">Debug and verify OCPP compliance for charge points and management systems</p>
                            </div>
                            <div className="card__body">
                                <div className="product-section">
                                    <p>A command-line tool for validating raw OCPP JSON messages against official schemas, generating compliance reports, and integrating with remote schema registries.</p>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Key Features</p>
                                    <ul className="product-features">
                                        <li>Validates OCPP 1.6, 2.0.1 and 2.1 messages</li>
                                        <li>Auto-detects request vs. response type</li>
                                        <li>Batch validation from newline-delimited files</li>
                                        <li>Human-readable compliance reports</li>
                                        <li>Custom & vendor-specific schema support</li>
                                        <li>Remote schema registry integration</li>
                                    </ul>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Technical Details</p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">Go</span>
                                        <span className="tech-tag">OCPP 1.6</span>
                                        <span className="tech-tag">OCPP 2.0.1</span>
                                        <span className="tech-tag">OCPP 2.1</span>
                                        <span className="tech-tag">Docker</span>
                                        <span className="tech-tag">Cross-platform</span>
                                        <span className="tech-tag">MIT</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <Link className="button button--primary button--lg" to="/chargeflow/intro">View docs</Link>
                                    <Link className="button button--github" href="https://github.com/ChargePi/chargeflow" aria-label="View on GitHub"><GitHubIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: '2rem'}}>
                    <div className="col col--6 animate-on-scroll">
                        <div className="card card--product">
                            <div className="card__header">
                                <h3>🤖 OpenEV Data MCP</h3>
                                <p className="card__subtitle">Query EV specifications through AI assistants via Model Context Protocol</p>
                            </div>
                            <div className="card__body">
                                <div className="product-section">
                                    <p>An MCP server that exposes the open-ev-data dataset to AI assistants, enabling language models to query electric vehicle specifications through a standardized protocol.</p>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Key Features</p>
                                    <ul className="product-features">
                                        <li>Vehicle & manufacturer data endpoints</li>
                                        <li>Battery capacity & range specifications</li>
                                        <li>AC/DC charging capability details</li>
                                        <li>In-memory TTL caching (5 min default)</li>
                                        <li>Health check endpoint on port 9090</li>
                                    </ul>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Technical Details</p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">Go</span>
                                        <span className="tech-tag">MCP</span>
                                        <span className="tech-tag">PostgreSQL</span>
                                        <span className="tech-tag">HTTP</span>
                                        <span className="tech-tag">Docker</span>
                                        <span className="tech-tag">MIT</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <Link className="button button--github" href="https://github.com/ChargePi/openev-data-mcp" aria-label="View on GitHub"><GitHubIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6 animate-on-scroll">
                        <div className="card card--product">
                            <div className="card__header">
                                <h3>📋 ChargeFlow Registry <span className="badge badge--warning" style={{fontSize: '0.65rem', verticalAlign: 'middle'}}>Coming Soon</span></h3>
                                <p className="card__subtitle">OCPP schema compatibility registry for charge points and CSMS backends</p>
                            </div>
                            <div className="card__body">
                                <div className="product-section">
                                    <p>Check OCPP schema compatibility with any charge point vendor, model, or CSMS backend from a single unified registry — no more manual cross-referencing.</p>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Key Features</p>
                                    <ul className="product-features">
                                        <li>Vendor & model compatibility lookup</li>
                                        <li>OCPP schema validation</li>
                                        <li>CSMS backend compatibility checks</li>
                                        <li>Docker support</li>
                                    </ul>
                                </div>
                                <div className="product-section">
                                    <p className="product-section__title">Technical Details</p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">Go</span>
                                        <span className="tech-tag">OCPP</span>
                                        <span className="tech-tag">Protobuf</span>
                                        <span className="tech-tag">Docker</span>
                                        <span className="tech-tag">MIT</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <Link className="button button--github" href="https://github.com/ChargePi/chargeflow-registry" aria-label="View on GitHub"><GitHubIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} - Supercharge Your Charging Infrastructure`}
            description="ChargePi is a leading provider of innovative software solutions for EV charging stations. Open-source, modular, and enterprise-ready.">
            <HomepageHeader/>
            <main>
                <CompanySection/>
                <ProductsSection/>
            </main>
        </Layout>
    );
}
