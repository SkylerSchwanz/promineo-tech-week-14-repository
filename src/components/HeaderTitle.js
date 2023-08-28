import React from 'react';
import styles from '../styles/HeaderTitle.module.css';

const HeaderTitle = ({ title, tagline }) => {
  return (
    <div className={styles["title-container"]}>
      <h1 className={styles["main-title"]}>{title}</h1>
      <p className={styles["tagline"]}>{tagline}</p>
    </div>
  );
};

export default HeaderTitle;
