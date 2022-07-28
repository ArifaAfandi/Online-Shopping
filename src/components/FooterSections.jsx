import React from 'react';
import styles from './Footer.module.scss';

const FooterSections = (props) => {
  return (
    <div className={styles.section}>
      <p className={props.classHeader}>{props.header}</p>
      <p className={props.classMain}>{props.main}</p>
      <div className={props.childrenStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default FooterSections