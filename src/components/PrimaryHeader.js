import styles from '../css/styles.css'
import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';

function PrimaryHeader() {
    return (
        <header class="primary-header">
            <div class="primary-header-container">
                <div>
                    <h1 class="primary-header-title">Web Topics</h1>
                </div>
                <div class="primary-header-buttons-container">
                <ButtonWithIcon iconName="moon-outline" iconText="Dark Mode"/>
                <ButtonWithIcon iconName="heart-outline" iconText="Favorites"/>
                </div>
            </div>
        </header>
    );
}

export default PrimaryHeader;
