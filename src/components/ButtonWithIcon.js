import styles from '../css/styles.css'
import React from 'react';
import styled, { css } from 'styled-components';

function ButtonWithIcon({ iconName, iconText, onClick }) {
  return (
    <button class="btn-with-icon" onClick={onClick}>
      <ion-icon name={iconName}></ion-icon>
      <span>{iconText}</span>
    </button>
  );
}

export default ButtonWithIcon;