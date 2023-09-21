import styles from '../css/styles.css'
import React from 'react';
import styled, { css } from 'styled-components';

function ButtonWithIcon({ iconName, iconText }) {
  return (
    <button onclick="darkMode()" class="btn-with-icon">
      <ion-icon name={iconName}></ion-icon>
      <span>{iconText}</span>
    </button>
  );
}

export default ButtonWithIcon;