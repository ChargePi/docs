import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Hardware-Agnostic Platform',
        Svg: require('../../static/img/rpi-3.svg').default,
        description: (
            <>
                Our modular charging hardware supports both off-the-shelf and commercial components. 
                Designed for reliability and easy maintenance, our hardware solutions scale from single 
                charging points to large charging networks.
            </>
        ),
    },
    {
        title: 'Cutting-Edge Technology Stack',
        Svg: require('../../static/img/ocpp.svg').default,
        description: (
            <>
                Built with Go for performance and reliability. Supports OCPP 1.6 JSON/WS and 2.0.1 protocols 
                with a beautiful Svelte-based admin interface. Includes gRPC APIs for custom integrations 
                and real-time monitoring capabilities.
            </>
        ),
    },
    {
        title: 'Open Source & Enterprise Ready',
        Svg: require('../../static/img/opensource.svg').default,
        description: (
            <>
                Fully open-source platform that you can customize, extend, and deploy according to your needs. 
                Perfect for both startups and enterprise deployments, with commercial support available 
                for mission-critical applications.
            </>
        ),
    },
];

function Feature({Svg, title, description, index}) {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        const featureElement = document.querySelector(`[data-feature-index="${index}"]`);
        if (featureElement) {
            featureElement.style.animationPlayState = 'paused';
            observer.observe(featureElement);
        }

        return () => observer.disconnect();
    }, [index]);

    return (
        <div className={clsx('col col--4')}>
            <div 
                className={clsx('text--center animate-on-scroll')} 
                data-feature-index={index}
            >
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 animate-on-scroll">
                        <h2 className={styles.featuresTitle}>Our Technology</h2>
                        <p className={styles.featuresSubtitle}>
                            Discover the powerful technologies that make ChargePi the leading choice for 
                            EV charging infrastructure.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
