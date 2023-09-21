import styles from '../css/styles.css'
import React from 'react';

function SecondaryHeader() {
    return (
        <header class="secondary-header">
            <div class="triangle"></div>
            <div class="triangle-rev"></div>
            <div class="secondary-header-content">
                <div class="welcome-header">
                    <h2>Welcome to our website!</h2>
                    <p>We have a new design that's fresh, modern, and easy to use.</p>
                </div>
            </div>
        </header>
    );
}

export default SecondaryHeader;
