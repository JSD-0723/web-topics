import styles from '../css/styles.css'
import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';
import { Link } from 'react-router-dom';
import { useThemeContext } from './ThemeContext';

function PrimaryHeader() {
    const {toggleTheme} = useThemeContext();
    return (
        <header class="primary-header">
            <div class="primary-header-container">
                <Link to ='/'>
                    <h1 class="primary-header-title">Web Topics</h1>
                </Link>
                <div class="primary-header-buttons-container">
                <ButtonWithIcon iconName="moon-outline" iconText="Dark Mode" onClick={toggleTheme}/>
                <ButtonWithIcon iconName="heart-outline" iconText="Favorites"/>
                </div>
            </div>
        </header>
    );
}

export default PrimaryHeader;
