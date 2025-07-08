import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '../../static/img/Logo.svg';

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
                            ChargePi delivers cutting-edge software solutions for modern EV charging stations and management systems.
                            From robust charging station software to intelligent backend systems, we strive to power the future of electric mobility.
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
        <section className={styles.companySection}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 animate-on-scroll">
                        <h2 className={styles.sectionTitle}>Why Choose ChargePi?</h2>
                        <p className={styles.sectionSubtitle}>
                            We combine innovative software design with powerful solutions to create 
                            the most reliable and scalable charging infrastructure platform.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>⚡ Charging Excellence</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    Our modular charge point framework supports both off-the-shelf and commercial components, and is 
                                    designed for reliability and easy maintenance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>🔧 Software Innovation</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    Built with Go and modern web technologies, our software platform provides 
                                    OCPP compliance, real-time monitoring, and powerful APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>🌐 Open Source</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    Fully open-source platform that you can customize, extend, and deploy 
                                    according to your specific requirements and use cases.
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
        <section className={styles.productsSection}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 animate-on-scroll">
                        <h2 className={styles.sectionTitle}>Our Products</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore our comprehensive suite of charging infrastructure solutions designed for 
                            reliability, scalability, and ease of deployment.
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
                                <p>
                                    A charging point framework with multiple OCPP versions supported out of the box.
                                    Modular hardware design and setup, RFID/NFC readers, displays, and LED indicators.
                                </p>
                                <ul className="product-features">
                                    <li>⚡ Multiple OCPP versions </li>
                                    <li>🔧 Hardware agnostic</li>
                                    <li>📱 RFID/NFC reader support</li>
                                    <li>📺 LCD display integration</li>
                                    <li>💡 LED indicators</li>
                                    <li>📊 Power meter integration</li>
                                </ul>
                                <div className="product-actions">
                                    <Link
                                        className="button button--primary button--lg"
                                        to="/docs/intro">
                                        Explore ChargePi
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6 animate-on-scroll">
                        <div className="card card--product">
                            <div className="card__header">
                                <h3>⚙️ ChargeFlow CLI</h3>
                                <p className="card__subtitle">Debug with ease and make your charge point or management system compliant with OCPP</p>
                            </div>
                            <div className="card__body">
                                <p>
                                    A powerful command-line interface for debugging and compatibility verification for your charge point or management system.
                                </p>
                                <ul className="product-features">
                                    <li>🖥️ Command line interface</li>
                                    <li>🔧 Supports multiple OCPP versions</li>
                                    <li>📊 Compliance report and statistics</li>
                                    <li>📝 Import and validate from a file</li>
                                    <li>🔄 Import your own OCPP schemas</li>
                                </ul>
                                <div className="product-actions">
                                    <Link
                                        className="button button--secondary button--lg"
                                        to="/chargeflow/intro">
                                        Explore ChargeFlow CLI
                                    </Link>
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
