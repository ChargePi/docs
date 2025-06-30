import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
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
                            ChargePi delivers cutting-edge hardware and software solutions for modern EV charging stations. 
                            From robust charging hardware to intelligent backend systems, we power the future of electric mobility.
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--lg"
                                to="/docs/intro">
                                Get Started
                            </Link>
                        </div>
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
                            We combine innovative hardware design with powerful software solutions to create 
                            the most reliable and scalable charging infrastructure platform.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4 animate-on-scroll">
                        <div className="card">
                            <div className="card__header">
                                <h3>⚡ Hardware Excellence</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    Our modular charging hardware supports both off-the-shelf and commercial components, 
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

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} - Supercharge Your Charging Infrastructure`}
            description="ChargePi is a leading provider of hardware and software solutions for EV charging stations. Open-source, modular, and enterprise-ready.">
            <HomepageHeader/>
            <main>
                <CompanySection/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
