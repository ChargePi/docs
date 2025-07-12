import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ProtectedEmail() {
    const {siteConfig} = useDocusaurusContext();
    const [revealed, setRevealed] = useState(false);
    const [obfuscated, setObfuscated] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    
    // Get email from Docusaurus customFields
    const email = siteConfig.customFields?.supportEmail;
    
    // If no email is provided, don't render the component
    if (!email) {
        return null;
    }

    // Timer effect to obfuscate email after 30 seconds
    useEffect(() => {
        let timer;
        if (revealed && !obfuscated) {
            timer = setTimeout(() => {
                setObfuscated(true);
                setRevealed(false); // Return to original state
            }, 30000); // 30 seconds
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [revealed, obfuscated]);

    const handleClick = (e) => {
        e.preventDefault();
        setClickCount(prev => prev + 1);
        if (!revealed) {
            setRevealed(true);
            setObfuscated(false); // Reset obfuscation when revealing
        } else {
            // Open mail client
            window.location.href = `mailto:${email}`;
            // Reset after a delay
            setTimeout(() => {
                setRevealed(false);
                setObfuscated(false);
                setClickCount(0);
            }, 3000);
        }
    };

    return (
        <span
            className="footer__email-protected"
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                userSelect: 'none',
                position: 'relative'
            }}
            title={revealed ? 'Click to send email' : 'Click to reveal email'}
        >
            {revealed ? email : 'Click to reveal email'}
        </span>
    );
} 