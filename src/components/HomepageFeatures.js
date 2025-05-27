import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Hardware-agnostic',
        Svg: require('../../static/img/rpi-3.svg').default,
        description: (
            <>
                Runs on any Linux based machine. Supports both off-the-shelf and commercial hardware which can easily be
                configured to your specific use case.
            </>
        ),
    },
    {
        title: 'Cutting edge technology',
        Svg: require('../../static/img/ocpp.svg').default,
        description: (
            <>
                Written in Go, designed to be efficient and reliable. Supports both OCPP 1.6 JSON/WS and 2.0.1
                protocols. Comes with a beautiful admin interface written in Svelte. Also comes with gRPC APIs so you
                can implement your own applications!
            </>
        ),
    },
    {
        title: 'Open source',
        Svg: require('../../static/img/opensource.svg').default,
        description: (
            <>
                Best part? It's open source! Modify it, extend it, or use it as a base for your own projects or tailor
                it to your specific needs.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
